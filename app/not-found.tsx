import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center gap-6 px-6 text-center md:px-10">
      <span className="font-mono text-sm text-muted">// 404</span>
      <h1
        className="font-sans font-medium tracking-tight text-foreground"
        style={{
          fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
        }}
      >
        This page got lost.
      </h1>
      <p className="max-w-md text-sm text-muted">
        The link you followed doesn&rsquo;t exist — or it did, once.
      </p>
      <Link
        href="/"
        className="mt-2 inline-flex items-center gap-2 border-b border-border font-mono text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
      >
        ← back home
      </Link>
    </section>
  );
}
