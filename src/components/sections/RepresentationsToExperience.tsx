"use client";

import { FadeInView } from "~/components/animations/FadeInView";
import { SVGMaskReveal } from "~/components/animations/SVGMaskReveal";
import { content } from "~/lib/content";

const data = content.representationsToExperience;

export function RepresentationsToExperience() {
  return (
    <div className="min-w-[100vw] w-[100vw] h-full flex-shrink-0 relative flex items-center max-md:w-full max-md:relative max-md:min-h-screen max-md:py-24 max-md:px-6 overflow-hidden">
      {/* Left side — heading + quote */}
      <div className="absolute top-[12vh] left-[5vw] max-w-[55vw] z-[2] max-md:static max-md:max-w-none">
        <SVGMaskReveal>
          <h1>{data.heading}</h1>
        </SVGMaskReveal>

        <FadeInView delay={0.15} className="mt-8">
          <blockquote className="text-text-primary">
            &ldquo;{data.quote}&rdquo;
          </blockquote>
        </FadeInView>
      </div>

      {/* Body — bottom right */}
      <div className="absolute bottom-[8vh] right-[5vw] max-w-[38vw] z-[2] max-md:static max-md:max-w-none max-md:mt-10">
        <FadeInView>
          <p>{data.body}</p>
        </FadeInView>

        <FadeInView delay={0.15} className="mt-8">
          <p>{data.closing}</p>
        </FadeInView>
      </div>
    </div>
  );
}
