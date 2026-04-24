import { Reveal } from "@/components/interactive/reveal";

type Entry = {
  institution: string;
  degree: string;
  location: string;
  dates: string;
  body: string;
};

const ENTRIES: Entry[] = [
  {
    institution: "Technische Universität München",
    degree: "B.Sc. Computer Science",
    location: "Munich, DE",
    dates: "10.2025 — present",
    body: "Coursework: Programming (Java), Data Structures & Algorithms, Software Engineering, Computer Architecture, Discrete Structures. Current GPA: 2.1 (Good, German scale).",
  },
  {
    institution: "Universität Bremen",
    degree: "German Language Course",
    location: "Bremen, DE",
    dates: "10.2024 — 09.2025",
    body: "Completed Telc C1 Hochschule.",
  },
];

const CERTS = [
  "Meta React Native Developer",
  "Meta Front-End Developer",
  "Telc C1 Hochschule",
];

export function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24 md:px-10 md:py-32"
    >
      <Reveal>
        <span className="mb-14 block font-mono text-sm text-muted">
          // education
        </span>
      </Reveal>

      <ol className="relative space-y-12 border-l border-border pl-8">
        {ENTRIES.map((e, i) => (
          <Reveal key={e.institution} delay={i * 0.05} as="li">
            <span
              aria-hidden
              className="absolute -left-[5px] mt-2 inline-block h-2.5 w-2.5 rounded-full bg-accent"
            />
            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
              <div>
                <h3 className="font-sans text-base font-medium text-foreground">
                  {e.institution}
                </h3>
                <p className="text-sm text-foreground/80">
                  {e.degree} · {e.location}
                </p>
              </div>
              <span className="font-mono text-xs text-muted">{e.dates}</span>
            </div>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted">
              {e.body}
            </p>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={0.15}>
        <div className="mt-16 flex flex-wrap items-baseline gap-x-2 gap-y-1 font-mono text-xs text-muted">
          <span className="uppercase tracking-wider">Certifications —</span>
          <span>{CERTS.join(", ")}</span>
        </div>
      </Reveal>
    </section>
  );
}
