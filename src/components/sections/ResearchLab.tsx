"use client";

import { FadeInView } from "~/components/animations/FadeInView";
import { SVGMaskReveal } from "~/components/animations/SVGMaskReveal";
import { content } from "~/lib/content";

const data = content.researchLab;

export function ResearchLab() {
  return (
    <div className="relative flex h-full w-[100vw] min-w-[100vw] flex-shrink-0 items-center overflow-hidden max-md:relative max-md:min-h-screen max-md:w-full max-md:px-6 max-md:py-24">
      {/* Heading — left side */}
      <div className="absolute 3xl:top-[18vh] 4xl:top-[20vh] top-[16vh] 3xl:left-[8vw] 4xl:left-[10vw] left-[8vw] z-[2] max-w-[48vw] max-md:static max-md:max-w-none 2xl:left-[10vw]">
        <SVGMaskReveal>
          <h1>{data.heading}</h1>
        </SVGMaskReveal>

        <FadeInView className="mt-8">
          <h2>{data.subtitle}</h2>
        </FadeInView>
      </div>

      {/* Body — bottom right */}
      <div className="absolute 3xl:right-[3vw] 4xl:right-[8vw] right-[2vw] 3xl:bottom-[10vh] 4xl:bottom-[14vh] bottom-[6vh] z-[2] max-w-[36vw] max-md:static max-md:mt-8 max-md:max-w-none">
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
