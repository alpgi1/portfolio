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
              I’m Alpgiray, 
            </p>
            <p>
              CS student at TUM, but at my core, I’m a builder. I don't just study computer science; I ship end-to-end products. Whether it’s an AI-powered fitness app for real users or a complex RAG-based compliance engine for B2B SaaS, I handle the entire lifecycle: the React Native frontend, the Spring Boot backend, the intricate LLM pipelines, and the Docker deployments. I’m obsessed with turning technical architecture into real-world solutions.
            </p>
            <p>
               Before diving into the Munich startup ecosystem, I spent a year in Bremen mastering German (Telc C1)
            </p>
            <p>
              
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
