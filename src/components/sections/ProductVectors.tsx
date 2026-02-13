"use client";

import { SVGMaskReveal } from "~/components/animations/SVGMaskReveal";
import { AccentCard } from "~/components/ui/AccentCard";
import { content } from "~/lib/content";

export function ProductVectors() {
  return (
    <div className="relative flex h-full w-[100vw] min-w-[100vw] flex-shrink-0 flex-col max-md:relative max-md:min-h-fit max-md:w-full max-md:px-6 max-md:py-24">
      {/* Heading — top left */}
      <div className="absolute top-[10vh] left-[5vw] z-[2] w-fit max-md:static 2xl:left-[16vw]">
        <SVGMaskReveal className="mt-4">
          <h1 className="text-[clamp(44px,5.5vw,96px)] leading-[0.95] tracking-[-0.03em]">
            Our Products
          </h1>
        </SVGMaskReveal>
      </div>

      {/* Cards */}
      <div className="absolute top-[22vh] right-[5vw] bottom-[4vh] left-[5vw] z-[2] flex flex-col items-stretch gap-5 max-md:static max-md:mt-6 md:flex-row 2xl:right-[16vw] 2xl:left-[16vw]">
        {content.productVectors.map((vector, i) => (
          <AccentCard key={vector.title} vector={vector} index={i} />
        ))}
      </div>
    </div>
  );
}
