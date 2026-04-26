"use client";

import { cn } from "@/lib/utils";

type TColorProp = string | string[];

interface ShineBorderProps {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: TColorProp;
  /** Applied to the inner content surface. */
  className?: string;
  children: React.ReactNode;
}

/**
 * ShineBorder — animated rotating conic-gradient border.
 *
 * Uses a conic gradient with a CSS custom property `--shine-angle` that
 * rotates via `@property` animation (defined in globals.css). The outer div
 * acts as the border via padding; the inner div covers the interior with
 * the card background.
 */
export function ShineBorder({
  borderRadius = 8,
  borderWidth = 1,
  duration = 6,
  color = "#ffffff",
  className,
  children,
}: ShineBorderProps) {
  const stops = Array.isArray(color) ? color : [color];
  const stopList = [...stops, stops[0]].join(", ");
  const gradient = `conic-gradient(from var(--shine-angle), ${stopList})`;

  return (
    <div
      style={
        {
          "--shine-duration": `${duration}s`,
          borderRadius: `${borderRadius}px`,
          padding: `${borderWidth}px`,
          backgroundImage: gradient,
        } as React.CSSProperties
      }
      className="motion-safe:animate-shine-rotate"
    >
      <div
        style={{ borderRadius: `${Math.max(0, borderRadius - borderWidth)}px` }}
        className={cn("bg-card", className)}
      >
        {children}
      </div>
    </div>
  );
}
