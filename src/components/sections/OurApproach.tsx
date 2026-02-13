"use client";

import { FadeInView } from "~/components/animations/FadeInView";
import { SVGMaskReveal } from "~/components/animations/SVGMaskReveal";
import { content } from "~/lib/content";

const data = content.approach;

export function OurApproach() {
  return (
    <div className="min-w-[100vw] w-[100vw] h-full flex-shrink-0 relative flex items-center max-md:w-full max-md:relative max-md:min-h-screen max-md:py-24 max-md:px-6 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80&auto=format"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-base from-5% via-transparent via-50% to-surface-base to-95%" />
      </div>

      {/* Left column — heading + subtitle */}
      <div className="absolute top-[14vh] left-[5vw] max-w-[42vw] z-[2] max-md:static max-md:max-w-none">
        <SVGMaskReveal>
          <h1>{data.heading}</h1>
        </SVGMaskReveal>

        <FadeInView className="mt-8">
          <h2>{data.subtitle}</h2>
        </FadeInView>
      </div>

      {/* Right column — body + closing */}
      <div className="absolute top-[28vh] right-[5vw] max-w-[36vw] z-[2] max-md:static max-md:max-w-none max-md:mt-8">
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
