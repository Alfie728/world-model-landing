"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { Children, type ReactNode, useCallback, useRef } from "react";
import { useMediaQuery } from "~/lib/hooks/useMediaQuery";

interface HorizontalScrollProps {
  children: ReactNode;
}

// Maps each header label to the number of slides it covers.
// Sum of all counts must equal the number of children in <HorizontalScroll>.
const slideGroups = [
  { label: "The Problem", count: 2 },
  { label: "Experience", count: 1 },
  { label: "Research Lab", count: 1 },
  { label: "Products", count: 1 },
  { label: "Approach", count: 1 },
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

  // Pre-compute each group's slide range
  let startIdx = 0;
  const groupRanges = slideGroups.map((group) => {
    const range = {
      label: group.label,
      start: startIdx,
      end: startIdx + group.count - 1,
    };
    startIdx += group.count;
    return range;
  });

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
          {groupRanges.map((group) => (
            <SlideHeaderItem
              key={group.label}
              label={group.label}
              slideStart={group.start}
              slideEnd={group.end}
              activeIndex={activeIndex}
              onNavigate={() => {
                const el = containerRef.current;
                if (!el) return;
                const target = el.offsetTop + group.start * window.innerHeight;
                window.scrollTo({ top: target, behavior: "smooth" });
              }}
            />
          ))}
        </div>

        {/* Scroll progress — scoped to horizontal scroll container */}
        <div className="relative z-10 mx-6 mt-4 h-px bg-white/10 md:mx-12">
          <motion.div
            className="h-full origin-left"
            style={{
              scaleX: scrollYProgress,
              background:
                "linear-gradient(to right, var(--color-accent-blue), var(--color-accent-sky))",
            }}
          />
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
  slideStart,
  slideEnd,
  activeIndex,
  onNavigate,
}: {
  label: string;
  slideStart: number;
  slideEnd: number;
  activeIndex: ReturnType<typeof useTransform<unknown, number>>;
  onNavigate: () => void;
}) {
  const opacity = useTransform(activeIndex, (latest) => {
    const rounded = Math.round(latest as number);
    return rounded >= slideStart && rounded <= slideEnd ? 1 : 0.35;
  });

  const dotColor = useTransform(activeIndex, (latest) => {
    const rounded = Math.round(latest as number);
    return rounded >= slideStart && rounded <= slideEnd
      ? "var(--color-accent-blue)"
      : "var(--color-text-muted)";
  });

  return (
    <motion.button
      type="button"
      onClick={onNavigate}
      className="flex cursor-pointer items-center gap-4"
      style={{ opacity }}
    >
      <motion.svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle cx="10" cy="10" r="10" style={{ fill: dotColor }} />
      </motion.svg>
      <h4 className="font-heading text-text-primary">{label}</h4>
    </motion.button>
  );
}
