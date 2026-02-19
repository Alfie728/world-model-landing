"use client";

import { FadeInView } from "~/components/animations/FadeInView";
import { SVGMaskReveal } from "~/components/animations/SVGMaskReveal";
import { AccentCard } from "~/components/ui/AccentCard";
import { content } from "~/lib/content";

export function ProductVectors() {
  return (
    <div className="relative flex h-full w-[100vw] min-w-[100vw] flex-shrink-0 items-center overflow-hidden max-md:relative max-md:min-h-screen max-md:w-full max-md:px-6 max-md:py-24">
      {/* Heading — top left */}
      <div className="pointer-events-none absolute 3xl:top-[18vh] 4xl:top-[20vh] top-[16vh] 3xl:left-[8vw] 4xl:left-[10vw] left-[8vw] z-[2] max-md:pointer-events-auto max-md:static max-md:max-w-none 2xl:left-[10vw]">
        <SVGMaskReveal>
          <h1>Our Products</h1>
        </SVGMaskReveal>
        <FadeInView delay={0.2} className="mt-4">
          <h6 className="font-mono text-text-muted uppercase tracking-widest">
            Three vectors of development
          </h6>
        </FadeInView>
      </div>

      {/* Staggered card row — bounded top & bottom to fit viewport */}
      <div className="absolute top-[32vh] 3xl:right-[8vw] 4xl:right-[10vw] right-[8vw] bottom-[4vh] 3xl:left-[8vw] 4xl:left-[10vw] left-[8vw] z-[2] flex flex-col items-stretch gap-5 max-md:static max-md:mt-8 md:flex-row 2xl:right-[10vw] 2xl:left-[10vw]">
        {content.productVectors.map((vector, i) => (
          <div key={vector.title} className="min-w-0 flex-1 md:h-full">
            <AccentCard vector={vector} index={i} />
          </div>
        ))}
      </div>
    </div>
  );
}
