"use client";

import { m, useInView } from "motion/react";
import { useEffect, useRef } from "react";
import type { ProductVector } from "~/lib/content";

interface AccentCardProps {
  vector: ProductVector;
  index: number;
}

const accentStyles = {
  blue: {
    border: "border-accent-blue/20 hover:border-accent-blue/40",
    glow: "hover:shadow-[0_0_80px_-15px_rgba(77,163,255,0.35)]",
    lineGradient:
      "linear-gradient(to right, transparent, rgba(77,163,255,0.6), transparent)",
    lineShadow: "0 0 10px rgba(77,163,255,0.3)",
    indexColor: "text-accent-blue/30",
    bulletColor: "bg-accent-blue/60",
  },
  warm: {
    border: "border-accent-warm/20 hover:border-accent-warm/40",
    glow: "hover:shadow-[0_0_80px_-15px_rgba(212,168,130,0.35)]",
    lineGradient:
      "linear-gradient(to right, transparent, rgba(212,168,130,0.6), transparent)",
    lineShadow: "0 0 10px rgba(212,168,130,0.3)",
    indexColor: "text-accent-warm/30",
    bulletColor: "bg-accent-warm/60",
  },
  sky: {
    border: "border-accent-sky/20 hover:border-accent-sky/40",
    glow: "hover:shadow-[0_0_80px_-15px_rgba(56,207,255,0.35)]",
    lineGradient:
      "linear-gradient(to right, transparent, rgba(56,207,255,0.6), transparent)",
    lineShadow: "0 0 10px rgba(56,207,255,0.3)",
    indexColor: "text-accent-sky/30",
    bulletColor: "bg-accent-sky/60",
  },
};

export function AccentCard({ vector, index }: AccentCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const isVisible = useInView(ref, { amount: 0.3 });
  const styles = accentStyles[vector.accent];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isVisible) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isVisible]);

  return (
    <m.div
      ref={ref}
      className={`group flex h-full flex-col rounded-2xl border ${styles.border} ${styles.glow} cursor-pointer overflow-hidden bg-surface-raised/50 backdrop-blur-sm transition-[border-color,box-shadow] duration-500`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.9,
        delay: index * 0.18,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Card video — responsive height with hover zoom */}
      <div
        className="relative 3xl:h-[280px] 4xl:h-[340px] h-[200px] w-full flex-shrink-0 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to bottom, rgb(8, 16, 32) 12%, rgba(8, 16, 32, 0.5), transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgb(8, 16, 32) 12%, rgba(8, 16, 32, 0.5), transparent)",
        }}
      >
        {/* Glowing accent top-border line */}
        <div
          className="absolute top-0 right-0 left-0 z-10 h-px"
          style={{
            background: styles.lineGradient,
            boxShadow: styles.lineShadow,
          }}
        />

        {/* Index number overlay */}
        <span
          className={`absolute top-3 right-4 z-10 font-bold font-mono 3xl:text-6xl text-5xl ${styles.indexColor} select-none`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <video
          ref={videoRef}
          src={vector.video}
          muted
          loop
          playsInline
          preload="none"
          poster={vector.image}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Card content — scrollable overflow */}
      <div className="flex min-h-0 flex-1 flex-col overflow-y-hidden 3xl:px-7 4xl:px-8 px-5 pt-2 3xl:pb-7 4xl:pb-8 pb-5">
        <h6 className="font-mono text-text-muted text-xs uppercase tracking-widest">
          {vector.tagline}
        </h6>

        <h2 className="3xl:mt-3 mt-2 font-bold font-heading text-text-primary leading-tight">
          {vector.title}
        </h2>

        {/* Bullet points */}
        <ul className="3xl:mt-4 mt-3 space-y-2">
          {vector.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2.5">
              <span
                className={`mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full ${styles.bulletColor}`}
              />
              <span
                className="text-text-secondary"
                style={{
                  fontSize: "clamp(14px, 1.1vw, 20px)",
                  lineHeight: 1.5,
                }}
              >
                {bullet}
              </span>
            </li>
          ))}
        </ul>

        <p
          className="3xl:mt-4 mt-3 text-text-muted"
          style={{ fontSize: "clamp(14px, 1.1vw, 20px)" }}
        >
          {vector.closing}
        </p>
      </div>
    </m.div>
  );
}
