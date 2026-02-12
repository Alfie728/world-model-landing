"use client";

import { FadeInView } from "~/components/animations/FadeInView";
import { SVGMaskReveal } from "~/components/animations/SVGMaskReveal";
import { content } from "~/lib/content";

const data = content.representationsToExperience;

export function RepresentationsToExperience() {
  return (
    <div className="min-w-[100vw] w-[100vw] h-full flex-shrink-0 relative flex items-center max-md:w-full max-md:relative max-md:min-h-screen max-md:py-24 max-md:px-6 overflow-hidden">
      {/* Large pull quote — left side, upper area */}
      <div className="absolute top-[12vh] left-[5vw] max-w-[55vw] z-[2] max-md:static max-md:max-w-none">
        <span className="font-mono text-sm tracking-[0.3em] uppercase text-accent-warm">
          {data.number}
        </span>

        <SVGMaskReveal className="mt-5">
          <h1 className="text-[clamp(44px,5.5vw,96px)] leading-[0.95] tracking-[-0.03em]">
            {data.heading}
          </h1>
        </SVGMaskReveal>

        <FadeInView delay={0.15} className="mt-8">
          <blockquote className="text-text-primary text-[clamp(24px,2.4vw,44px)] leading-[1.25]">
            &ldquo;{data.pullQuote}&rdquo;
          </blockquote>
        </FadeInView>
      </div>

      {/* Body + bullets — bottom right */}
      <div className="absolute bottom-[8vh] right-[5vw] max-w-[38vw] z-[2] max-md:static max-md:max-w-none max-md:mt-10">
        <FadeInView>
          <p className="text-text-secondary text-[clamp(17px,1.3vw,24px)] leading-[1.65]">
            {data.paragraphs[0]}
          </p>
        </FadeInView>

        <ul className="mt-6 space-y-3">
          {data.bullets.map((bullet, i) => (
            <FadeInView key={bullet} delay={0.1 + i * 0.06}>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent-warm mt-2.5 flex-shrink-0" />
                <span className="text-text-secondary text-[clamp(16px,1.2vw,22px)] leading-[1.6]">
                  {bullet}
                </span>
              </li>
            </FadeInView>
          ))}
        </ul>

        <FadeInView delay={0.4} className="mt-8">
          <p className="text-text-muted text-[clamp(15px,1.1vw,19px)] leading-[1.65]">
            {data.closing}
          </p>
        </FadeInView>
      </div>
    </div>
  );
}
