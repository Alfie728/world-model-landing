"use client";

import { m, useInView } from "motion/react";
import { type ReactNode, useId, useRef } from "react";

interface SVGMaskRevealProps {
  children: ReactNode;
  direction?: "left" | "right" | "center";
  duration?: number;
  delay?: number;
  className?: string;
}

export function SVGMaskReveal({
  children,
  direction = "left",
  duration = 1.2,
  delay = 0,
  className,
}: SVGMaskRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const clipId = useId();

  return (
    <div ref={ref} className={className} style={{ position: "relative" }}>
      <svg
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          overflow: "hidden",
        }}
        aria-hidden="true"
      >
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <m.rect
              x="0"
              y="0"
              height="1"
              initial={{ width: 0 }}
              animate={isInView ? { width: 1 } : { width: 0 }}
              transition={{
                duration,
                delay,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          </clipPath>
        </defs>
      </svg>
      <div style={{ clipPath: `url(#${clipId})` }}>{children}</div>
    </div>
  );
}
