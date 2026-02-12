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
    dot: "bg-accent-blue",
    number: "text-accent-blue",
    overlay: "",
  },
  warm: {
    border: "border-accent-warm/20 hover:border-accent-warm/40",
    glow: "hover:shadow-[0_0_80px_-15px_rgba(212,168,130,0.35)]",
    dot: "bg-accent-warm",
    number: "text-accent-warm",
    overlay: "from-[#04080F] via-[#04080F]/95",
  },
  sky: {
    border: "border-accent-sky/20 hover:border-accent-sky/40",
    glow: "hover:shadow-[0_0_80px_-15px_rgba(56,207,255,0.35)]",
    dot: "bg-accent-sky",
    number: "text-accent-sky",
    overlay: "from-[#04080F] via-[#04080F]/95",
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
        <span className={`font-mono text-sm tracking-widest ${styles.number}`}>
          {vector.number}
        </span>

        <h3 className="font-heading mt-3 text-text-primary text-[clamp(22px,1.5vw,28px)] leading-tight">
          {vector.title}
        </h3>

        <h6 className="font-mono tracking-wide text-text-muted mt-2 uppercase text-xs">
          {vector.tagline}
        </h6>

        <p className="text-text-secondary mt-4 text-[15px] leading-relaxed">
          {vector.description}
        </p>

        <ul className="mt-4 space-y-2">
          {vector.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <span
                className={`w-1.5 h-1.5 rounded-full ${styles.dot} mt-2 flex-shrink-0`}
              />
              <span className="text-text-secondary text-[14px] leading-relaxed">
                {bullet}
              </span>
            </li>
          ))}
        </ul>

        <p className="text-text-muted mt-auto pt-4 italic text-[13px] leading-relaxed">
          {vector.closing}
        </p>
      </div>
    </motion.div>
  );
}
