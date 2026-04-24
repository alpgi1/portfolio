import { Reveal } from "@/components/interactive/reveal";

const GROUPS: { title: string; items: string[] }[] = [
  {
    title: "Languages",
    items: ["Java", "TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    title: "Backend",
    items: [
      "Spring Boot",
      "Spring AI",
      "Spring Security",
      "REST APIs",
      "JPA / Hibernate",
    ],
  },
  {
    title: "Frontend & Mobile",
    items: [
      "React",
      "Next.js",
      "React Native",
      "Expo",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Data & Infra",
    items: [
      "PostgreSQL",
      "pgvector",
      "Supabase",
      "Docker",
      "Flyway",
      "Git",
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24 md:px-10 md:py-32"
    >
      <Reveal>
        <span className="mb-14 block font-mono text-sm text-muted">
          // stack
        </span>
      </Reveal>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {GROUPS.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.05}>
            <div className="space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted">
                {g.title}
              </h3>
              <ul className="flex flex-wrap gap-1.5">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted transition-colors hover:border-accent/40 hover:text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
