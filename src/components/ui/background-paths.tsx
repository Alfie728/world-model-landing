"use client";

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
  // Paths sweep across two panels (200vw) in an S-curve:
  //   Evidence (top-left, panel 1)  →  Heading (bottom-right, panel 1)
  //   →  Diagnosis (top-left, panel 2)  →  Paradigm (below diagnosis, panel 2)
  //
  // viewBox spans 1392×316 (two 696-wide panels).
  // Each path `i` (0–35) is offset to create a fanning bundle.
  const paths = Array.from({ length: 32 }, (_, i) => {
    const spread = i * 4 * position; // horizontal fan per path
    const vSpread = i * 2; // vertical fan per path

    // Single smooth cubic Bezier sweeping from top-left (evidence)
    // through the bottom-center (heading area) to upper-right (diagnosis/paradigm).
    // No intermediate endpoints = no direction reversals = no bounces.
    const startX = -200 + spread;
    const startY = -80 - vSpread;

    // CP1 pulls the curve down into the heading region (bottom-right of panel 1)
    const cp1X = 400 + spread;
    const cp1Y = 750 - vSpread;

    // CP2 pulls the curve back up toward diagnosis (top-left of panel 2)
    const cp2X = 850 + spread;
    const cp2Y = -550 - vSpread;

    // End at bottom-right of panel 2
    const endX = 1650 + spread;
    const endY = 550 - vSpread;

    return {
      id: i,
      d: `M${startX} ${startY}C${cp1X} ${cp1Y} ${cp2X} ${cp2Y} ${endX} ${endY}`,
      width: 0.5 + i * 0.03,
    };
  });

  return (
    <div className="pointer-events-none absolute inset-0">
      <svg
        className="h-full w-full text-accent-warm"
        viewBox="0 0 1392 316"
        fill="none"
        preserveAspectRatio="none"
      >
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.06 + path.id * 0.015}
            initial={{ pathLength: 0, pathOffset: 0, opacity: 0.4 }}
            animate={{
              pathLength: 1,
              opacity: [0.2, 0.4, 0.2],
              pathOffset: [0, 1],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              delay: 3,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths({
  title = "",
  className = "",
}: {
  title?: string;
  className?: string;
}) {
  const words = title.split(" ");

  return (
    <div
      className={`absolute flex min-h-screen w-full items-center justify-center overflow-hidden bg-surface-base ${className}`}
    >
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, white 8%, white 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, white 8%, white 92%, transparent 100%)",
        }}
      >
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="mx-auto max-w-4xl"
        >
          <h1 className="mb-8 font-bold text-5xl tracking-tighter sm:text-7xl md:text-8xl">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="mr-4 inline-block last:mr-0">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block bg-gradient-to-r from-neutral-900 to-neutral-700/80 bg-clip-text text-transparent dark:from-white dark:to-white/80"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>
        </motion.div>
      </div>
    </div>
  );
}
