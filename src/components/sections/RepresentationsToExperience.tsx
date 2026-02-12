"use client";

import { FadeInView } from "~/components/animations/FadeInView";
import { SVGMaskReveal } from "~/components/animations/SVGMaskReveal";
import { content } from "~/lib/content";

const data = content.representationsToExperience;

export function RepresentationsToExperience() {
  return (
    <div className="min-w-[100vw] w-[100vw] h-full flex-shrink-0 relative flex items-center max-md:w-full max-md:relative max-md:min-h-screen max-md:py-24 max-md:px-6 overflow-hidden">
      {/* Large pull quote — left side, upper area */}
      <div className="absolute top-[12vh] left-[6vw] max-w-[60vw] z-[2] max-md:static max-md:max-w-none">
        <span className="font-mono text-base tracking-widest text-accent-warm">
          {data.number}
        </span>

        <SVGMaskReveal className="mt-6">
          <blockquote className="text-text-primary text-[clamp(28px,2.8vw,48px)] leading-[1.35]">
            &ldquo;{data.pullQuote}&rdquo;
          </blockquote>
        </SVGMaskReveal>
      </div>

      {/* Body + bullets — bottom right, larger text */}
      <div className="absolute bottom-[8vh] right-[6vw] max-w-[40vw] z-[2] max-md:static max-md:max-w-none max-md:mt-10">
        <FadeInView>
          <h4 className="text-accent-blue text-[clamp(18px,1.3vw,24px)] leading-relaxed">
            {data.paragraphs[0]}
          </h4>
        </FadeInView>

        <ul className="mt-6 space-y-3">
          {data.bullets.map((bullet, i) => (
            <FadeInView key={bullet} delay={0.1 + i * 0.06}>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent-warm mt-2.5 flex-shrink-0" />
                <span className="text-text-secondary text-[clamp(16px,1.1vw,20px)] leading-relaxed">
                  {bullet}
                </span>
              </li>
            </FadeInView>
          ))}
        </ul>

        <FadeInView delay={0.4} className="mt-8">
          <p className="text-text-secondary text-[clamp(15px,1vw,18px)] leading-relaxed">
            {data.closing}
          </p>
        </FadeInView>
      </div>
    </div>
  );
}
