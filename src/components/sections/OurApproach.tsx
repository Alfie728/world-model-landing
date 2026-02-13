"use client";

import { FadeInView } from "~/components/animations/FadeInView";
import { SVGMaskReveal } from "~/components/animations/SVGMaskReveal";
import { content } from "~/lib/content";

const data = content.approach;

export function OurApproach() {
  return (
    <div className="relative flex h-full w-[100vw] min-w-[100vw] flex-shrink-0 overflow-hidden max-md:relative max-md:min-h-screen max-md:w-full max-md:px-6 max-md:py-24">
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

      {/* Content — normal flow */}
      <div className="relative z-[2] 3xl:mt-[18vh] 4xl:mt-[20vh] mt-[16vh] 3xl:ml-[8vw] 4xl:ml-[10vw] ml-[8vw] max-w-[42vw] max-md:mt-0 max-md:ml-0 max-md:max-w-none 2xl:ml-[10vw]">
        <div className="p-5 max-md:p-0">
          <SVGMaskReveal>
            <h1>{data.heading}</h1>
          </SVGMaskReveal>

          <FadeInView className="mt-8">
            <h2>{data.subtitle}</h2>
          </FadeInView>

          <FadeInView delay={0.1} className="mt-8">
            <p>{data.body}</p>
          </FadeInView>

          <FadeInView delay={0.3} className="mt-10">
            <blockquote className="text-text-primary">
              {data.closing}
            </blockquote>
          </FadeInView>
        </div>
      </div>
    </div>
  );
}
