"use client";

import { cn } from "@/lib/utils";

type TColorProp = string | string[];

interface ShineBorderProps {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: TColorProp;
  className?: string;
  children: React.ReactNode;
}

/**
 * ShineBorder — animated gradient border that sweeps around the edge.
 * Adapted for Tailwind v4: the `animate-shine` utility is defined in globals.css.
 */
export function ShineBorder({
  borderRadius = 8,
  borderWidth = 1,
  duration = 14,
  color = "#ffffff",
  className,
  children,
}: ShineBorderProps) {
  const gradient =
    "radial-gradient(transparent, transparent, " +
    (Array.isArray(color) ? color.join(",") : color) +
    ", transparent, transparent)";

  return (
    <div
      style={
        {
          "--shine-radius": `${borderRadius}px`,
          borderRadius: `${borderRadius}px`,
        } as React.CSSProperties
      }
      className={cn("relative overflow-hidden", className)}
    >
      <div
        aria-hidden
        style={
          {
            "--shine-width": `${borderWidth}px`,
            "--shine-duration": `${duration}s`,
            WebkitMaskImage:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskImage:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            backgroundImage: gradient,
            backgroundSize: "300% 300%",
            padding: `${borderWidth}px`,
            borderRadius: `${borderRadius}px`,
          } as React.CSSProperties
        }
        className="pointer-events-none absolute inset-0 z-10 will-change-[background-position] motion-safe:animate-shine"
      />
      {children}
    </div>
  );
}
