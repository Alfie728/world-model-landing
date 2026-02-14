"use client";

import { SVGMaskReveal } from "~/components/animations/SVGMaskReveal";
import { AccentCard } from "~/components/ui/AccentCard";
import { content } from "~/lib/content";

export function ProductVectors() {
  return (
    <div className="relative flex h-full w-[100vw] min-w-[100vw] flex-shrink-0 flex-col max-md:px-6 max-md:py-24">
      {/* Heading — top left */}
      <div className="relative z-[2] 3xl:mt-[18vh] 4xl:mt-[20vh] mt-[16vh] 3xl:ml-[8vw] 4xl:ml-[10vw] ml-[8vw] max-md:mt-0 max-md:ml-0 max-md:max-w-none 2xl:ml-[10vw]">
        <SVGMaskReveal className="mt-4">
          <h1 className="text-[clamp(44px,5.5vw,96px)] leading-[0.95] tracking-[-0.03em]">
            Our Products
          </h1>
        </SVGMaskReveal>
        <div className="z-[2] 3xl:mt-12 4xl:mt-18 mt-6 flex w-full flex-col items-stretch gap-5 md:flex-row">
          {content.productVectors.map((vector, i) => (
            <AccentCard key={vector.title} vector={vector} index={i} />
          ))}
        </div>
      </div>

      {/* Cards */}
    </div>
  );
}
