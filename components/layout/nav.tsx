"use client";

import { useEffect, useState } from "react";
import { Magnetic } from "@/components/interactive/magnetic";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "work", label: "work" },
  { id: "about", label: "about" },
  { id: "contact", label: "contact" },
] as const;

export function Nav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const els = SECTIONS.map(({ id }) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const onNavClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 h-16 border-b border-border/60 backdrop-blur-md"
      style={{ backgroundColor: "rgba(10,10,10,0.6)" }}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6 md:px-10">
        <Magnetic>
          <a
            href="#top"
            onClick={onNavClick("top")}
            className="font-mono text-sm font-medium tracking-wide text-foreground transition-colors hover:text-accent"
            aria-label="Back to top"
          >
            AC
          </a>
        </Magnetic>
        <ul className="flex items-center gap-6 font-mono text-sm md:gap-8">
          {SECTIONS.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={onNavClick(id)}
                  className={cn(
                    "group relative inline-flex items-center gap-1.5 transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted hover:text-foreground",
                  )}
                >
                  <span
                    aria-hidden
                    className={cn(
                      "inline-block h-1 w-1 rounded-full transition-all duration-300",
                      isActive
                        ? "scale-100 bg-accent opacity-100"
                        : "scale-0 bg-transparent opacity-0",
                    )}
                  />
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
