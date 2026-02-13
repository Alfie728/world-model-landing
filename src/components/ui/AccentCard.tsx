"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import type { ProductVector } from "~/lib/content";

interface AccentCardProps {
  vector: ProductVector;
  index: number;
}

const accentStyles = {
  blue: {
    border: "border-accent-blue/20 hover:border-accent-blue/40",
    glow: "hover:shadow-[0_0_80px_-15px_rgba(77,163,255,0.35)]",
    lineGradient: "linear-gradient(to right, transparent, rgba(77,163,255,0.6), transparent)",
    lineShadow: "0 0 10px rgba(77,163,255,0.3)",
  },
  warm: {
    border: "border-accent-warm/20 hover:border-accent-warm/40",
    glow: "hover:shadow-[0_0_80px_-15px_rgba(212,168,130,0.35)]",
    lineGradient: "linear-gradient(to right, transparent, rgba(212,168,130,0.6), transparent)",
    lineShadow: "0 0 10px rgba(212,168,130,0.3)",
  },
  sky: {
    border: "border-accent-sky/20 hover:border-accent-sky/40",
    glow: "hover:shadow-[0_0_80px_-15px_rgba(56,207,255,0.35)]",
    lineGradient: "linear-gradient(to right, transparent, rgba(56,207,255,0.6), transparent)",
    lineShadow: "0 0 10px rgba(56,207,255,0.3)",
  },
};

export function AccentCard({ vector, index }: AccentCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const styles = accentStyles[vector.accent];

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col rounded-2xl border ${styles.border} ${styles.glow} bg-surface-raised/50 backdrop-blur-sm transition-[border-color,box-shadow] duration-500 cursor-pointer flex-1 min-w-0 overflow-hidden will-change-transform`}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Card image */}
      <div className="relative h-[180px] w-full overflow-hidden flex-shrink-0">
        {/* Glowing accent top-border line */}
        <div
          className="absolute top-0 left-0 right-0 h-px z-10"
          style={{
            background: styles.lineGradient,
            boxShadow: styles.lineShadow,
          }}
        />
        <img
          src={vector.image}
          alt={vector.title}
          className="w-full h-full object-cover "
          loading="lazy"
        />
        <div
          className={`absolute inset-0 bg-linear-to-t from-surface-base via-surface-base/95 via-10% to-transparent`}
        />
      </div>

      {/* Card content */}
      <div className="flex flex-col flex-1 p-7 md:p-8">
        <h3 className="text-text-primary">{vector.title}</h3>

        <h6 className="font-mono tracking-wide mt-2 uppercase text-xs">
          {vector.tagline}
        </h6>

        <p className="mt-4 text-lg">{vector.body}</p>

        <p className="mt-4 text-lg">{vector.closing}</p>
      </div>
    </motion.div>
  );
}
