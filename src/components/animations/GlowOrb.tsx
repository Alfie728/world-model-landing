"use client";

import { motion } from "motion/react";

interface GlowOrbProps {
  color: "blue" | "warm" | "sky";
  size?: number;
  className?: string;
}

const colorMap = {
  blue: "bg-accent-blue/40",
  warm: "bg-accent-warm/30",
  sky: "bg-accent-sky/30",
};

export function GlowOrb({ color, size = 400, className = "" }: GlowOrbProps) {
  return (
    <motion.div
      className={`absolute rounded-full ${colorMap[color]} pointer-events-none blur-2xl ${className}`}
      style={{ width: size, height: size, willChange: "transform, opacity" }}
      animate={{
        scale: [1, 1.12, 0.92, 1.06, 1],
        opacity: [0.6, 1, 0, 0, 0.6],
      }}
      transition={{
        duration: 36,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      aria-hidden="true"
    />
  );
}
