"use client";

import { FadeInView } from "~/components/animations/FadeInView";
import { SVGMaskReveal } from "~/components/animations/SVGMaskReveal";
import { content } from "~/lib/content";

const data = content.problemStatement;

export function ProblemStatement() {
  return (
    <div className="min-w-[100vw] w-[100vw] h-full flex-shrink-0 relative flex items-center max-md:w-full max-md:relative max-md:min-h-screen max-md:py-24 max-md:px-6 overflow-hidden">
      {/* Background image — abstract neural network */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1680474569854-81216b34417a?w=1920&q=80&auto=format"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-surface-base via-surface-base/90 to-surface-base/50" />
      </div>

      {/* Large heading — left side, vertically centered */}
      <div className="absolute top-[18vh] left-[6vw] max-w-[44vw] z-[2] max-md:static max-md:max-w-none">
        <span className="font-mono text-base tracking-widest text-accent-blue">
          {data.number}
        </span>
        <SVGMaskReveal className="mt-6">
          <h1 className="text-[clamp(48px,5.5vw,90px)] leading-[1.05]">
            {data.heading}
          </h1>
        </SVGMaskReveal>
      </div>

      {/* Body content — right side */}
      <div className="absolute top-[18vh] right-[6vw] max-w-[36vw] z-[2] max-md:static max-md:max-w-none max-md:mt-8">
        <div className="space-y-6">
          {data.paragraphs.map((p, i) => (
            <FadeInView key={p.slice(0, 20)} delay={i * 0.08}>
              {p === "It is a data problem." ? (
                <h2 className="text-accent-blue text-[clamp(28px,2.5vw,44px)] leading-tight">
                  {p}
                </h2>
              ) : (
                <p className="text-text-secondary text-[clamp(16px,1.15vw,20px)] leading-relaxed">
                  {p}
                </p>
              )}
            </FadeInView>
          ))}
        </div>
      </div>
    </div>
  );
}
