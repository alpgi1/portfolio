import { Reveal } from "@/components/interactive/reveal";

export function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_2fr]">
        <div className="md:sticky md:top-28 md:self-start">
          <span className="font-mono text-sm text-muted">// about</span>
        </div>

        <Reveal className="max-w-prose">
          {/* TODO: Alpgiray to replace with final copy */}
          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p>
              I&rsquo;m Alpgiray, a Computer Science student at TUM working
              toward becoming an AI engineer.
            </p>
            <p>
              I build things end-to-end: the Spring Boot backend, the React
              frontend, the agent pipeline, the Postgres schema, the Docker
              build. I&rsquo;m drawn to systems where retrieval, reasoning, and
              real products meet — supply chain agents, compliance engines,
              training apps that actually ship.
            </p>
            <p>
              Before Munich I lived in Bremen for a year, passed the Telc C1
              Hochschule, then started at TUM in October 2025.
            </p>
            <p>
              Currently open to AI engineering internships in the DACH region.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
