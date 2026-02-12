"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { Children, type ReactNode, useRef } from "react";
import { InfoBar } from "~/components/ui/InfoBar";
import { useMediaQuery } from "~/lib/hooks/useMediaQuery";

interface HorizontalScrollProps {
  children: ReactNode;
}

const slideLabels = [
  "The Problem",
  "Experience",
  "Research Lab",
  "Products",
  "Approach",
];

export function HorizontalScroll({ children }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const slideCount = Children.count(children);

  // Match reference: wrapper height = slideCount * 100vh
  const wrapperHeight = `${slideCount * 100}vh`;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Translate from 0 to -(slideCount - 1) * 100vw
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", `${-(slideCount - 1) * 100}vw`],
  );

  // Track active slide index for header dots
  const activeIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, slideCount - 1],
  );

  if (isMobile) {
    return <div className="flex flex-col">{children}</div>;
  }

  return (
    <div
      className="relative bg-surface-base"
      ref={containerRef}
      style={{ height: wrapperHeight }}
    >
      {/* Sticky viewport — matches reference .sticky-layer */}
      <div className="sticky top-0 left-0 h-screen w-full overflow-hidden">
        {/* Slides header — Offground-style navigation dots */}
        <div className="relative z-10 flex w-full justify-between px-6 md:px-12 pt-8">
          {slideLabels.map((label, i) => (
            <SlideHeaderItem
              key={label}
              label={label}
              index={i}
              activeIndex={activeIndex}
            />
          ))}
        </div>

        {/* Slides wrapper — absolute fill, matches .slides-wrapper */}
        <div className="absolute inset-0 w-full h-full">
          {/* Slides container — flex row, translated, matches .slides-container */}
          <motion.div
            style={{ x }}
            className="flex flex-nowrap h-full will-change-transform"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function SlideHeaderItem({
  label,
  index,
  activeIndex,
}: {
  label: string;
  index: number;
  activeIndex: ReturnType<typeof useTransform>;
}) {
  const opacity = useTransform(activeIndex, (latest) => {
    const rounded = Math.round(latest as number);
    return rounded === index ? 1 : 0.35;
  });

  const dotColor = useTransform(activeIndex, (latest) => {
    const rounded = Math.round(latest as number);
    return rounded === index
      ? "var(--color-accent-cyan)"
      : "var(--color-text-muted)";
  });

  return (
    <motion.div className="flex items-center gap-4" style={{ opacity }}>
      <motion.svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle cx="10" cy="10" r="10" style={{ fill: dotColor }} />
      </motion.svg>
      {/* h4: 22px/30px/300 from Offground CSS */}
      <h4 className="font-heading text-text-primary">{label}</h4>
    </motion.div>
  );
}
