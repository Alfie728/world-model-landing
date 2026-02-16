"use client";

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
  // Paths sweep across three panels (300vw) in an S-curve:
  //   Panel 1: Evidence (top-left) → Heading (bottom-right)
  //   Panel 2: Diagnosis (top-left) → Paradigm (below diagnosis)
  //   Panel 3: Experience section — paths continue through and shift color
  //
  // viewBox spans 2088×316 (three 696-wide panels).
  // Each path `i` (0–31) is offset to create a fanning bundle.
  const paths = Array.from({ length: 32 }, (_, i) => {
    const spread = i * 4 * position; // horizontal fan per path
    const vSpread = i * 2; // vertical fan per path

    // Single smooth cubic Bezier sweeping from top-left (evidence)
    // through the bottom-center (heading area) to upper-right (diagnosis/paradigm)
    // and continuing through the third panel.
    const startX = -200 + spread;
    const startY = -80 - vSpread;

    // CP1 pulls the curve down into the heading region (bottom-right of panel 1)
    const cp1X = 550 + spread;
    const cp1Y = 800 - vSpread;

    // CP2 pulls the curve back up toward diagnosis (top-left of panel 2)
    const cp2X = 1800 + spread;
    const cp2Y = -600 - vSpread;

    // End beyond panel 3
    const endX = 2300 + spread;
    const endY = 600 - vSpread;

    return {
      id: i,
      d: `M${startX} ${startY}C${cp1X} ${cp1Y} ${cp2X} ${cp2Y} ${endX} ${endY}`,
      width: 0.5 + i * 0.03,
    };
  });

  return (
    <div className="pointer-events-none absolute inset-0">
      <svg
        className="h-full w-full"
        viewBox="0 0 2088 316"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Warm → blue crossfade using only palette colors.
              Warm fades out (chroma drops), blue fades in (chroma rises).
              The transition zone is narrow (~10%) so no off-palette
              hue is visible at the low stroke opacities. */}
          <linearGradient
            id={`path-gradient-${position}`}
            x1="0"
            y1="0"
            x2="2088"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="oklch(0.76 0.068 68)" />
            <stop offset="28%" stopColor="oklch(0.76 0.068 68)" />
            <stop offset="38%" stopColor="oklch(0.55 0.02 68)" />
            <stop offset="45%" stopColor="oklch(0.55 0.02 249)" />
            <stop offset="55%" stopColor="oklch(0.70 0.154 249)" />
            <stop offset="100%" stopColor="oklch(0.70 0.154 249)" />
          </linearGradient>
        </defs>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={`url(#path-gradient-${position})`}
            strokeWidth={path.width}
            strokeOpacity={0.06 + path.id * 0.015}
            initial={{ pathLength: 0, pathOffset: 0, opacity: 0.4 }}
            animate={{
              pathLength: 1,
              opacity: [0.2, 0.4, 0.2],
              pathOffset: [0, 1],
            }}
            transition={{
              duration: 36,
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
