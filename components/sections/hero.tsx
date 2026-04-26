"use client";

import { motion } from "motion/react";
import { FluidParticlesBackground } from "@/components/ui/fluid-particles-background";

const NAME_WORDS = ["Alpgiray", "Celik"];

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="top-hero"
      aria-label="Introduction"
      className="relative h-screen w-full"
    >
      <FluidParticlesBackground
        particleCount={1800}
        noiseIntensity={0.0025}
      >
        <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
          <h1
            className="font-sans font-semibold tracking-tight text-foreground"
            style={{
              fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
            }}
          >
            {NAME_WORDS.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.04,
                  ease: EASE,
                }}
                className="inline-block"
              >
                {word}
                {i < NAME_WORDS.length - 1 ? " " : ""}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease: EASE }}
            className="font-mono text-sm tracking-wide text-muted md:text-base"
          >
            Computer Science @ TUM{"  "}·{"  "}Building AI systems
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42, ease: EASE }}
            className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-mono text-xs text-muted"
          >
            <span>Munich, DE</span>
            <span aria-hidden>·</span>
            <span>TUM &rsquo;28</span>
          </motion.div>
        </div>
      </FluidParticlesBackground>
    </section>
  );
}
