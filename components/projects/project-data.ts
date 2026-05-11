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
    slug: "gtm-zero",
    name: "GTM-Zero",
    year: "2026",
    status: "MVP",
    tagline:
      "AI sales engineer for technical founders - live objection handling with citation-grounded answers.",
    description:
      "Built in 5 days for the START Munich pitch. A live AI sales engineer that handles technical objections during sales calls with citation-grounded RAG, generates hyper-personalized cold outreach, and keeps the knowledge base synced with the founder's technical docs. First-token latency under 2 seconds, citation coverage 82-100%, every claim traces back to a chunk ID.",
    tech: [
      "Java 21",
      "Spring Boot 4",
      "Spring AI 2.0",
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Postgres + pgvector",
      "Voyage embeddings",
      "Claude Sonnet 4.6",
    ],
    links: { github: "https://github.com/alpgi1/gtm-zero" },
    featured: true,

    video: "/videos/gtm-zero.mp4",
    longDescription: [
      "GTM-Zero solves the bottleneck that kills most solo technical founders: they can ship a product in a weekend but freeze when a CTO asks 'how do you handle GDPR' or 'what prevents prompt injection' on a sales call. GTM-Zero runs on a side monitor during the call - the founder presses a hotkey, the system retrieves the relevant chunks from their own technical docs, and streams a citation-grounded answer in under 8 seconds. Every claim cites a real source. If the AI can't ground a claim, it refuses - that refusal is the product.",
      "Built end-to-end in 5 days: 6 Flyway migrations, custom pgvector mapping via UserType<float[]>, streaming SSE with token-by-token rendering, inline citation validation with regex-based coverage scoring, and a separate hyper-personalized outreach generator. The frontend is a split-screen 'live call' interface that mirrors a Zoom call with the prospect on the left and the streaming answer on the right. Three pitch-ready demo questions return cited answers with first-token latency under 2 seconds and 82-100% citation coverage.",
      "The system prompt forbids invention, the validator enforces it inline (no second LLM call), and the frontend renders streaming tokens with citation chips that fade in after completion. Built as the answer to my own problem from REGU - shipping a product wasn't enough if I couldn't sell it.",
    ],
    role: "Solo founder - full backend (Spring Boot 4 + Spring AI), full frontend (Next.js 15 + React 19), RAG pipeline, streaming SSE architecture, prompt engineering, pitch preparation. Shipped in 5 days.",
    highlights: [
      "First-token latency under 2 seconds via cache warmup + Top-K=4 retrieval",
      "82-100% citation coverage across three canonical demo questions",
      "Custom pgvector UserType mapping for Hibernate 7 + Spring AI 2.0",
      "Inline citation validation - no second LLM call, regex-based sentence scoring",
      "Split-screen live-call UI with token-by-token streaming and staggered citation chip resolution",
      "Built end-to-end in 5 days for the START Munich investor pitch",
    ],
  },
  {
    slug: "apex-coach",
    name: "Apex Coach",
    year: "2026",
    status: "Live on App Store",
    tagline:
      "Offline-first RPE-driven training app with a built-in AI coach.",
    description:
      "A full-stack fitness app shipped to iOS. Local-first SQLite architecture with background sync to a Spring Boot backend, Supabase auth, and a Gemini-powered coach with full training-history context. Built the progressive overload engine from first principles around RPE rather than muscle-recovery guesswork.",
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
      github: "https://github.com/alpgi1/apex-coach",
      live: "https://apps.apple.com/us/app/apex-coach-ai-gym-tracker/id6761065591",
    },
    featured: true,

    video: "/videos/apex-coach.mp4",
    longDescription: [
      "Apex Coach is an RPE-first training app: you log sets with a subjective effort score and the progressive-overload engine decides the next session from your actual fatigue - not from a fixed percentage table.",
      "Local-first SQLite keeps the app responsive offline; background sync to the Spring Boot backend reconciles sessions when the network returns. A Gemini-powered coach reads your training history directly and can answer 'why did you drop my top set this week?' with a real explanation.",
    ],
    role: "Solo founder - React Native app, Spring Boot backend, Supabase auth, Gemini integration, App Store release.",
    highlights: [
      "Live on iOS",
      "Offline-first with conflict-resolving background sync",
      "Progressive overload engine built on RPE from first principles",
    ],
  },
  {
    slug: "agnes",
    name: "Agnes",
    year: "2026",
    status: "Hackathon",
    tagline:
      "AI-powered supply chain optimization engine for CPG companies - finding margin gains while staying EU-compliant.",
    description:
      "Agnes analyzes an ingredient portfolio and surfaces the highest-value optimization opportunities - substitutions, consolidations, reformulations, and complexity reductions - while verifying every recommendation against EU food-safety regulations. A natural-language interface routes requests to a wave-based parallel optimizer pipeline backed by Claude, with every finding audited by a two-stage compliance engine before reaching the user.",
    tech: [
      "Java 21",
      "Spring Boot 4",
      "React 18",
      "Vite",
      "SQLite",
      "Claude (Anthropic)",
      "vis-network",
    ],
    links: { github: "https://github.com/alpgi1/Agnes" },

    video: "/videos/agnes.mp4",
    longDescription: [
      "Agnes acts as an AI supply-chain analyst for Consumer Packaged Goods companies. It connects to a read-only SQLite database of ingredients, suppliers, products, and companies, then uses Claude as its reasoning engine to find margin-improvement opportunities across four optimizer types: substitution, consolidation, reformulation, and complexity reduction.",
      "Optimizers run in waves using Java virtual threads - Wave 1 (Substitution + Complexity) runs in parallel, and Wave 2 (Consolidation + Reformulation) follows using Wave 1's results. Every finding then passes through a two-stage compliance pipeline: a pre-filter auto-approves low-risk findings without an extra AI call, and the remainder are verified against EU 1169/2011 with iHerb market evidence in a single batched Claude call.",
      "The frontend includes an interactive graph explorer (vis-network) with three views - Company to Supplier, Company to Product, and Product to Supplier - letting teams visually navigate the supply chain alongside the chat interface.",
    ],
    role: "Full-stack - Spring Boot backend, wave-based optimizer orchestration, Claude integration, compliance engine, React frontend, graph visualization.",
    highlights: [
      "Wave-based parallel optimizer execution with Java virtual threads",
      "Two-stage EU 1169/2011 compliance engine with pre-filter to minimize Claude calls",
      "Smart SQL scoping: Agnes generates targeted queries from the prompt instead of loading all data",
      "Interactive vis-network graph explorer with three supply chain views",
      "Read-only SQLite access enforced by SqlGuard - SELECT-only, schema modifications blocked",
    ],
  },
  {
    slug: "regu",
    name: "REGU",
    year: "2026",
    status: "In development",
    tagline:
      "Autonomous EU AI Act compliance engine with citation-grade legal retrieval.",
    description:
      "A RAG system that ingests the EU AI Act (effective Aug 2026) and produces structured, cited compliance reports for founders asking 'am I in trouble, and what do I need to do?'. Four distinct vector tables with hybrid search, law-primary retrieval, and fail-safe confidence gating - every claim traces back to a chunk ID.",
    tech: [
      "Java 21",
      "Spring Boot 4",
      "Spring AI",
      "Postgres + pgvector",
      "Voyage embeddings",
      "Claude Sonnet",
    ],
    links: { github: "https://github.com/alpgi1/Regu-EAACC", live: "https://reguai.tech" },
    featured: true,

    video: "/videos/regu.mp4",
    longDescription: [
      "REGU answers one question for founders: given what my product does, which EU AI Act obligations apply to me, and what do I need to do about them - with legal citations I can show to a lawyer.",
      "The retrieval pipeline separates law, guidance, case commentary, and examples into four distinct vector tables, each with its own chunking strategy. Law is the primary source; everything else is supporting evidence. Hybrid search blends semantic and lexical scoring, and a confidence gate fails closed when citations don't meet a threshold.",
    ],
    role: "Sole engineer - ingestion pipeline, retrieval, agent orchestration, report generation.",
    highlights: [
      "Four-table vector store with law-primary retrieval",
      "Every claim in the report links back to a chunk ID",
      "Fail-closed confidence gating - no hallucinated legal advice",
    ],
  },
  {
    slug: "chainsense",
    name: "ChainSense SCM",
    year: "2026",
    status: "Active",
    tagline:
      "Multi-agent AI supply chain risk platform for EV battery manufacturers.",
    description:
      "Two autonomous agents - a Risk Analyst and a Strategist - collaborate to turn plain-language disruptions ('Hamburg port strike') into structured recovery plans with cost analysis and approve/reject workflows. Hybrid retrieval: standard context injection for reliability, pgvector RAG for enterprise scale. 24 passing tests.",
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
      "ChainSense turns a plain-language supply-chain disruption - 'Hamburg port strike', 'lithium shortage in Chile' - into a costed recovery plan the operations team can approve or reject.",
      "Two agents collaborate: the Risk Analyst classifies the disruption and pulls relevant supplier/route context; the Strategist proposes alternative routing, buffer-stock adjustments, and cost deltas. Hybrid retrieval keeps small-scale runs reliable with context injection and falls back to pgvector when the knowledge base grows.",
    ],
    role: "Full-stack - agent design, Spring AI tool calling, React 19 frontend, Docker deployment.",
    highlights: [
      "24 passing tests across the agent + retrieval layer",
      "Hybrid retrieval: context injection + pgvector",
      "Approve/reject workflow with cost deltas shown per option",
    ],
  },
];
