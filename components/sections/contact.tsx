import { Reveal } from "@/components/interactive/reveal";
import { Magnetic } from "@/components/interactive/magnetic";

const LINKS: { label: string; href: string }[] = [
  { label: "alpgiray.dev@gmail.com", href: "mailto:alpgiray.dev@gmail.com" },
  { label: "GitHub", href: "https://github.com/alpgi1" },
  { label: "LinkedIn", href: "https://linkedin.com/in/alpgiray-celik" },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl scroll-mt-20 px-6 py-32 text-center md:px-10 md:py-40"
    >
      <Reveal>
        <span className="mb-10 block font-mono text-sm text-muted">
          // contact
        </span>
      </Reveal>

      <Reveal delay={0.05}>
        <h2
          className="mx-auto max-w-3xl font-sans font-medium tracking-tight text-foreground"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Let&rsquo;s build something.
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-3 font-mono text-sm text-muted">
          {LINKS.map((link, i) => (
            <span key={link.href} className="inline-flex items-center gap-2">
              <Magnetic>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-muted transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </Magnetic>
              {i < LINKS.length - 1 ? (
                <span aria-hidden className="text-muted/60">
                  /
                </span>
              ) : null}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
