"use client";

import { useState } from "react";
import { Reveal } from "@/components/interactive/reveal";
import { ProjectCard } from "@/components/projects/project-card";
import { ProjectModal } from "@/components/projects/project-modal";
import { projects, type Project } from "@/components/projects/project-data";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section
      id="work"
      className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24 md:px-10 md:py-32"
    >
      <Reveal>
        <div className="mb-14 flex items-baseline justify-between gap-4">
          <span className="font-mono text-sm text-muted">// selected work</span>
          <span className="font-mono text-xs text-muted">
            {projects.length.toString().padStart(2, "0")} projects
          </span>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.05}>
            <ProjectCard project={project} onOpen={setActive} />
          </Reveal>
        ))}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
