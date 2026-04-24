export type Screenshot = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  name: string;
  year: string;
  status?: string;
  tagline: string;
  description: string;
  tech: string[];
  links: {
    github?: string;
    live?: string;
  };
  featured?: boolean;

  /** Optional media + extended content, consumed by the project detail modal. */
  video?: string;
  /** Optional YouTube or Vimeo embed URL. If both video and videoEmbed are set, videoEmbed wins. */
  videoEmbed?: string;
  screenshots?: Screenshot[];
  longDescription?: string[];
  role?: string;
  highlights?: string[];
};

export const projects: Project[] = [
  {
    slug: "regu",
    name: "REGU",
    year: "2026",
    status: "In development",
    tagline:
      "Autonomous EU AI Act compliance engine with citation-grade legal retrieval.",
    description:
      "A RAG system that ingests the EU AI Act (effective Aug 2026) and produces structured, cited compliance reports for founders asking 'am I in trouble, and what do I need to do?'. Four distinct vector tables with hybrid search, law-primary retrieval, and fail-safe confidence gating — every claim traces back to a chunk ID.",
    tech: [
      "Java 21",
      "Spring Boot 4",
      "Spring AI",
      "Postgres + pgvector",
      "Voyage embeddings",
      "Gemini 2.5",
      "Claude Sonnet",
    ],
    links: { github: "https://github.com/alpgi1" },
    featured: true,

    // TODO: Alpgiray — drop final video/screenshots into /public/videos and /public/screenshots
    video: "/videos/regu.mp4",
    longDescription: [
      "REGU answers one question for founders: given what my product does, which EU AI Act obligations apply to me, and what do I need to do about them — with legal citations I can show to a lawyer.",
      "The retrieval pipeline separates law, guidance, case commentary, and examples into four distinct vector tables, each with its own chunking strategy. Law is the primary source; everything else is supporting evidence. Hybrid search blends semantic and lexical scoring, and a confidence gate fails closed when citations don't meet a threshold.",
    ],
    role: "Sole engineer — ingestion pipeline, retrieval, agent orchestration, report generation.",
    highlights: [
      "Four-table vector store with law-primary retrieval",
      "Every claim in the report links back to a chunk ID",
      "Fail-closed confidence gating — no hallucinated legal advice",
    ],
  },
  {
    slug: "chainsense",
    name: "ChainSense SCM",
    year: "2025",
    status: "Active",
    tagline:
      "Multi-agent AI supply chain risk platform for EV battery manufacturers.",
    description:
      "Two autonomous agents — a Risk Analyst and a Strategist — collaborate to turn plain-language disruptions ('Hamburg port strike') into structured recovery plans with cost analysis and approve/reject workflows. Hybrid retrieval: standard context injection for reliability, pgvector RAG for enterprise scale. 24 passing tests.",
    tech: [
      "Java 21",
      "Spring Boot 4",
      "Spring AI",
      "React 19",
      "pgvector",
      "Gemini 2.5",
      "Docker",
    ],
    links: { github: "https://github.com/alpgi1/chainsense-scm" },
    featured: true,

    video: "/videos/chainsense.mp4",
    longDescription: [
      "ChainSense turns a plain-language supply-chain disruption — 'Hamburg port strike', 'lithium shortage in Chile' — into a costed recovery plan the operations team can approve or reject.",
      "Two agents collaborate: the Risk Analyst classifies the disruption and pulls relevant supplier/route context; the Strategist proposes alternative routing, buffer-stock adjustments, and cost deltas. Hybrid retrieval keeps small-scale runs reliable with context injection and falls back to pgvector when the knowledge base grows.",
    ],
    role: "Full-stack — agent design, Spring AI tool calling, React 19 frontend, Docker deployment.",
    highlights: [
      "24 passing tests across the agent + retrieval layer",
      "Hybrid retrieval: context injection + pgvector",
      "Approve/reject workflow with cost deltas shown per option",
    ],
  },
  {
    slug: "apex-coach",
    name: "Apex Coach",
    year: "2024–2025",
    status: "Live on TestFlight",
    tagline:
      "Offline-first RPE-driven training app with a built-in AI coach.",
    description:
      "A full-stack fitness app shipped to iOS TestFlight. Local-first SQLite architecture with background sync to a Spring Boot backend, Supabase auth, and a Gemini-powered coach with full training-history context. Built the progressive overload engine from first principles around RPE rather than muscle-recovery guesswork.",
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "Java 21",
      "Spring Boot 4",
      "Supabase",
      "Gemini 2.5",
    ],
    links: {
      github: "https://github.com/alpgi1",
      live: "https://testflight.apple.com/join/FcvadCz1",
    },
    featured: true,

    video: "/videos/apex-coach.mp4",
    longDescription: [
      "Apex Coach is an RPE-first training app: you log sets with a subjective effort score and the progressive-overload engine decides the next session from your actual fatigue — not from a fixed percentage table.",
      "Local-first SQLite keeps the app responsive offline; background sync to the Spring Boot backend reconciles sessions when the network returns. A Gemini-powered coach reads your training history directly and can answer 'why did you drop my top set this week?' with a real explanation.",
    ],
    role: "Solo founder — React Native app, Spring Boot backend, Supabase auth, Gemini integration, TestFlight release.",
    highlights: [
      "Live on iOS TestFlight",
      "Offline-first with conflict-resolving background sync",
      "Progressive overload engine built on RPE from first principles",
    ],
  },
  {
    slug: "agnes",
    name: "Agnes",
    year: "2025",
    status: "Hackathon",
    // TODO: Alpgiray to fill in real tagline + description
    tagline:
      "[Placeholder — hackathon project with a frontend I'm particularly proud of]",
    description:
      "[Placeholder — replace with 2–3 sentences describing what Agnes does, the problem it solves, and what you were responsible for. Mention the hackathon name and any award/placement.]",
    tech: ["React", "TypeScript", "TBD"],
    links: { github: "https://github.com/alpgi1" },

    // TODO: Alpgiray — add video + longDescription + role + highlights once details are finalized
  },
];
