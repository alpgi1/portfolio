"use client";

import { ExternalLink, Play } from "lucide-react";
import { TiltCard } from "@/components/ui/tilt-card";
import type { Project } from "./project-data";

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

interface ProjectCardProps {
  project: Project;
  onOpen?: (project: Project) => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const openModal = () => onOpen?.(project);
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openModal();
    }
  };

  return (
    <TiltCard
      effect="evade"
      spotlight
      tiltLimit={8}
      scale={1.02}
      perspective={1400}
      className="group rounded-2xl border border-border bg-card transition-colors duration-300 hover:border-accent/40"
    >
      <div
        role="button"
        tabIndex={0}
        onClick={openModal}
        onKeyDown={onKey}
        aria-label={`Open ${project.name} details`}
        data-cursor="hover"
        className="block h-full cursor-none outline-none"
      >
        <article className="flex min-h-80 flex-col gap-5 p-8">
          <header className="flex items-start justify-between gap-4">
            <h3 className="font-sans text-xl font-medium tracking-tight text-foreground">
              {project.name}
            </h3>
            <div className="flex flex-col items-end gap-0.5 font-mono text-xs text-muted">
              <span>{project.year}</span>
              {project.status ? (
                <span className="text-[10px] uppercase tracking-wider">
                  {project.status}
                </span>
              ) : null}
            </div>
          </header>

          <p className="text-sm text-foreground/85">{project.tagline}</p>

          <p className="text-sm leading-relaxed text-muted">
            {project.description}
          </p>

          <div className="mt-auto flex flex-col gap-4">
            <ul className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] text-muted"
                >
                  {t}
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between gap-4 font-mono text-xs">
              <div className="flex items-center gap-4">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} on GitHub`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
                  >
                    <GithubMark className="h-3.5 w-3.5" />
                    GitHub
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} live link`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
                  >
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                    Live
                  </a>
                )}
              </div>

              <span className="inline-flex items-center gap-1.5 text-muted transition-colors group-hover:text-accent">
                <Play className="h-3 w-3" aria-hidden />
                details
              </span>
            </div>
          </div>
        </article>
      </div>
    </TiltCard>
  );
}
