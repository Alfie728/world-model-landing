"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "~/lib/hooks/useMediaQuery";

interface HorizontalScrollProps {
  children: ReactNode;
}

export function HorizontalScroll({ children }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const isMobile = useMediaQuery("(max-width: 767px)");

  useEffect(() => {
    if (!trackRef.current) return;
    const measure = () => {
      setTrackWidth(trackRef.current?.scrollWidth ?? 0);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const x = useTransform(
    smoothProgress,
    [0, 1],
    [
      0,
      -(trackWidth - (typeof window !== "undefined" ? window.innerWidth : 0)),
    ],
  );

  if (isMobile) {
    return <div className="flex flex-col">{children}</div>;
  }

  // Scroll distance = track width so 1px vertical scroll ≈ 1px horizontal
  const scrollHeight = trackWidth;

  return (
    <div
      ref={containerRef}
      style={{ height: scrollHeight > 0 ? scrollHeight : "400vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex h-full will-change-transform"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
