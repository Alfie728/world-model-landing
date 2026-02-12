"use client";

import { FadeInView } from "~/components/animations/FadeInView";
import { SVGMaskReveal } from "~/components/animations/SVGMaskReveal";
import { content } from "~/lib/content";

const data = content.problemStatement;

export function ProblemStatement() {
  return (
    <div className="min-w-[100vw] w-[100vw] h-full flex-shrink-0 relative flex items-center justify-center max-md:w-full max-md:relative max-md:min-h-screen max-md:py-24 max-md:px-6">
      {/* Text block 1 — top-left area */}
      <div className="absolute top-[35vh] left-[5vw] w-fit max-w-min z-[2] max-md:static max-md:max-w-none">
        <span className="font-mono text-sm tracking-widest text-text-muted">
          {data.number}
        </span>
        <SVGMaskReveal className="mt-4">
          <h1>{data.heading}</h1>
        </SVGMaskReveal>
      </div>

      {/* Text block 2 — center-right area */}
      <div className="absolute top-[25vh] right-[8vw] w-fit max-w-[32vw] z-[2] max-md:static max-md:max-w-none">
        <div className="space-y-5">
          {data.paragraphs.map((p, i) => (
            <FadeInView key={p.slice(0, 20)} delay={i * 0.08}>
              {p === "It is a data problem." ? (
                <h2 className="text-accent-blue">{p}</h2>
              ) : (
                <h5 className="text-text-secondary">{p}</h5>
              )}
            </FadeInView>
          ))}
        </div>
      </div>
    </div>
  );
}
