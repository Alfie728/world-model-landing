"use client";

import { FadeInView } from "~/components/animations/FadeInView";
import { SVGMaskReveal } from "~/components/animations/SVGMaskReveal";
import { content } from "~/lib/content";

const data = content.representationsToExperience;

export function RepresentationsToExperience() {
  return (
    <div className="min-w-[100vw] w-[100vw] h-full flex-shrink-0 relative flex items-center justify-center max-md:w-full max-md:relative max-md:min-h-screen max-md:py-24 max-md:px-6">
      {/* Pull quote — upper center */}
      <div className="absolute top-[18vh] left-[8vw] w-fit max-w-[55vw] z-[2] max-md:static max-md:max-w-none">
        <span className="font-mono text-sm tracking-widest text-text-muted">
          {data.number}
        </span>

        <SVGMaskReveal className="mt-6">
          <blockquote className="text-text-primary">
            &ldquo;{data.pullQuote}&rdquo;
          </blockquote>
        </SVGMaskReveal>
      </div>

      {/* Body + bullets — bottom right */}
      <div className="absolute bottom-[10vh] right-[8vw] w-fit max-w-[35vw] z-[2] max-md:static max-md:max-w-none max-md:mt-10">
        <FadeInView>
          <h5 className="text-text-secondary">{data.paragraphs[0]}</h5>
        </FadeInView>

        <ul className="mt-5 space-y-2.5">
          {data.bullets.map((bullet, i) => (
            <FadeInView key={bullet} delay={0.1 + i * 0.06}>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-amber mt-2 flex-shrink-0" />
                <h5 className="text-text-secondary">{bullet}</h5>
              </li>
            </FadeInView>
          ))}
        </ul>

        <FadeInView delay={0.4} className="mt-6">
          <h5 className="text-text-secondary">{data.closing}</h5>
        </FadeInView>
      </div>
    </div>
  );
}
