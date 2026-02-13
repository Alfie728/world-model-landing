"use client";

import { FadeInView } from "~/components/animations/FadeInView";
import { SVGMaskReveal } from "~/components/animations/SVGMaskReveal";
import { content } from "~/lib/content";

const data = content.approach;

export function OurApproach() {
  return (
    <div className="relative flex h-full w-[100vw] min-w-[100vw] flex-shrink-0 items-center overflow-hidden max-md:relative max-md:min-h-screen max-md:w-full max-md:px-6 max-md:py-24">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80&auto=format"
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-5% from-surface-base via-50% via-transparent to-95% to-surface-base" />
      </div>

      {/* Left column — heading + subtitle */}
      <div className="absolute 3xl:top-[18vh] 4xl:top-[20vh] top-[16vh] 3xl:left-[8vw] 4xl:left-[10vw] left-[8vw] z-[2] max-w-[42vw] max-md:static max-md:max-w-none 2xl:left-[10vw]">
        <SVGMaskReveal>
          <h1>{data.heading}</h1>
        </SVGMaskReveal>

        <FadeInView className="mt-8">
          <h2>{data.subtitle}</h2>
        </FadeInView>
      </div>

      {/* Right column — body + closing */}
      <div className="absolute 3xl:right-[3vw] 4xl:right-[8vw] right-[2vw] 3xl:bottom-[10vh] 4xl:bottom-[14vh] bottom-[6vh] z-[2] max-w-[36vw] max-md:static max-md:mt-8 max-md:max-w-none">
        <FadeInView delay={0.1}>
          <p>{data.body}</p>
        </FadeInView>

        <FadeInView delay={0.3} className="mt-10">
          <blockquote className="text-text-primary">{data.closing}</blockquote>
        </FadeInView>
      </div>
    </div>
  );
}
