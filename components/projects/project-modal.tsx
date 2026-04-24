"use client";

import { AnimatePresence, motion } from "motion/react";
import { ExternalLink, Play, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { ShineBorder } from "@/components/ui/shine-border";
import type { Project } from "./project-data";

const EASE = [0.22, 1, 0.36, 1] as const;

function GithubMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M12 .5C5.73.5.67 5.56.67 11.83c0 5.01 3.24 9.25 7.74 10.75.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.15.68-3.81-1.52-3.81-1.52-.51-1.31-1.25-1.66-1.25-1.66-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.51-.28-5.15-1.25-5.15-5.58 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.44.11-3 0 0 .95-.3 3.1 1.16a10.7 10.7 0 0 1 5.64 0c2.15-1.46 3.1-1.16 3.1-1.16.62 1.56.23 2.71.11 3 .72.79 1.16 1.8 1.16 3.03 0 4.34-2.65 5.29-5.17 5.57.4.35.76 1.03.76 2.08 0 1.5-.01 2.71-.01 3.08 0 .3.2.66.79.55 4.5-1.5 7.73-5.74 7.73-10.75C23.33 5.56 18.27.5 12 .5Z" />
    </svg>
  );
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!project) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    const toFocus =
      dialogRef.current?.querySelector<HTMLElement>("[data-modal-close]");
    toFocus?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previouslyFocused.current?.focus?.();
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key={project.slug}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: EASE }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`modal-title-${project.slug}`}
        >
          <button
            aria-label="Close"
            tabIndex={-1}
            onClick={onClose}
            className="absolute inset-0 cursor-none bg-black/70 backdrop-blur-md"
            style={{ cursor: "none" }}
          />

          <motion.div
            ref={dialogRef}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="relative z-10 w-full max-w-4xl"
          >
            <ShineBorder
              borderRadius={20}
              borderWidth={1}
              duration={18}
              color={[
                "rgba(255,255,255,0)",
                "rgba(48,112,179,0.85)",
                "rgba(255,255,255,0.55)",
                "rgba(48,112,179,0.85)",
                "rgba(255,255,255,0)",
              ]}
              className="bg-card"
            >
              <div
                className="max-h-[85vh] overflow-y-auto overscroll-contain"
                data-lenis-prevent
              >
                <div className="p-8 md:p-10">
                  <button
                    type="button"
                    data-modal-close
                    onClick={onClose}
                    aria-label="Close project details"
                    className="absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/80 text-muted transition-colors hover:border-accent/60 hover:text-accent"
                  >
                    <X className="h-4 w-4" aria-hidden />
                  </button>

                  <header className="mb-6 flex flex-wrap items-start justify-between gap-4 pr-12">
                    <div>
                      <h2
                        id={`modal-title-${project.slug}`}
                        className="font-sans text-3xl font-medium tracking-tight text-foreground md:text-4xl"
                      >
                        {project.name}
                      </h2>
                      <p className="mt-2 text-sm text-foreground/85">
                        {project.tagline}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-0.5 font-mono text-xs text-muted">
                      <span>{project.year}</span>
                      {project.status ? (
                        <span className="text-[10px] uppercase tracking-wider">
                          {project.status}
                        </span>
                      ) : null}
                    </div>
                  </header>

                  <VideoBlock project={project} />

                  {project.longDescription &&
                  project.longDescription.length > 0 ? (
                    <section className="mt-8 space-y-4 text-sm leading-relaxed text-foreground/85 md:text-[15px]">
                      {project.longDescription.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </section>
                  ) : (
                    <section className="mt-8 text-sm leading-relaxed text-muted">
                      <p>{project.description}</p>
                    </section>
                  )}

                  {project.role ? (
                    <section className="mt-8">
                      <h3 className="mb-2 font-mono text-xs uppercase tracking-wider text-muted">
                        Role
                      </h3>
                      <p className="text-sm text-foreground/85">
                        {project.role}
                      </p>
                    </section>
                  ) : null}

                  {project.highlights && project.highlights.length > 0 ? (
                    <section className="mt-8">
                      <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
                        Highlights
                      </h3>
                      <ul className="space-y-1.5 text-sm text-foreground/85">
                        {project.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex gap-3 before:mt-[7px] before:h-1 before:w-1 before:flex-shrink-0 before:rounded-full before:bg-accent"
                          >
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  ) : null}

                  {project.screenshots && project.screenshots.length > 0 ? (
                    <section className="mt-8">
                      <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
                        Screenshots
                      </h3>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {project.screenshots.map((s) => (
                          <figure
                            key={s.src}
                            className="overflow-hidden rounded-lg border border-border bg-background"
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={s.src}
                              alt={s.alt}
                              className="h-auto w-full"
                              loading="lazy"
                            />
                          </figure>
                        ))}
                      </div>
                    </section>
                  ) : null}

                  <section className="mt-8">
                    <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
                      Stack
                    </h3>
                    <ul className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </section>

                  {(project.links.github || project.links.live) && (
                    <section className="mt-10 flex flex-wrap items-center gap-5 border-t border-border pt-6 font-mono text-sm">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-muted transition-colors hover:text-accent"
                        >
                          <GithubMark className="h-4 w-4" />
                          View on GitHub
                        </a>
                      )}
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-muted transition-colors hover:text-accent"
                        >
                          <ExternalLink className="h-4 w-4" aria-hidden />
                          Live link
                        </a>
                      )}
                    </section>
                  )}
                </div>
              </div>
            </ShineBorder>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function VideoBlock({ project }: { project: Project }) {
  if (project.videoEmbed) {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-xl border border-border bg-black">
        <iframe
          src={project.videoEmbed}
          title={`${project.name} demo`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    );
  }

  if (project.video) {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-xl border border-border bg-black">
        {/* TODO: Alpgiray — drop the real file at {project.video} in /public/videos */}
        <video
          src={project.video}
          controls
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      aria-label="Demo video coming soon"
      className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border bg-background/50"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card text-muted">
        <Play className="h-5 w-5" aria-hidden />
      </div>
      <span className="font-mono text-xs text-muted">
        demo video coming soon
      </span>
    </div>
  );
}
