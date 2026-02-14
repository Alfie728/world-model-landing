"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";

import { cn } from "~/lib/utils";

interface InteractiveGridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  className?: string;
  squaresClassName?: string;
}

export function InteractiveGridPattern({
  width = 40,
  height = 40,
  className,
  squaresClassName,
  ...props
}: InteractiveGridPatternProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState<{
    horizontal: number;
    vertical: number;
  }>({ horizontal: 0, vertical: 0 });
  const [hoveredSquare, setHoveredSquare] = useState<number | null>(null);

  useEffect(() => {
    const el = svgRef.current?.parentElement;
    if (!el) return;

    const update = () => {
      const { width: pw, height: ph } = el.getBoundingClientRect();
      setDimensions({
        horizontal: Math.ceil(pw / width),
        vertical: Math.ceil(ph / height),
      });
    };

    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [width, height]);

  const { horizontal, vertical } = dimensions;

  return (
    <svg
      ref={svgRef}
      width={width * horizontal}
      height={height * vertical}
      className={cn("absolute inset-0 h-full w-full", className)}
      {...props}
    >
      {horizontal > 0 &&
        Array.from({ length: horizontal * vertical }).map((_, index) => {
          const x = (index % horizontal) * width;
          const y = Math.floor(index / horizontal) * height;
          return (
            <rect
              key={index}
              x={x}
              y={y}
              width={width}
              height={height}
              className={cn(
                "stroke-gray-400/30 transition-all duration-100 ease-in-out [&:not(:hover)]:duration-1000",
                hoveredSquare === index
                  ? "fill-gray-300/30"
                  : "fill-transparent",
                squaresClassName,
              )}
              onMouseEnter={() => setHoveredSquare(index)}
              onMouseLeave={() => setHoveredSquare(null)}
            />
          );
        })}
    </svg>
  );
}
