"use client";

import { FadeInView } from "~/components/animations/FadeInView";
import { SVGMaskReveal } from "~/components/animations/SVGMaskReveal";
import { content } from "~/lib/content";

const data = content.whyThisMatters;

export function WhyThisMatters() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-8 py-24 text-center">
      <SVGMaskReveal>
        <h1 className="max-w-4xl font-heading">
          Closing the Gap Between{" "}
          <span className="text-accent-warm">Models</span> and{" "}
          <span className="text-accent-blue">Experience</span>
        </h1>
      </SVGMaskReveal>

      <div className="mt-12 max-w-2xl space-y-6">
        {data.paragraphs.map((p, i) => (
          <FadeInView key={p.slice(0, 20)} delay={0.3 + i * 0.15}>
            <h4 className="text-text-secondary">{p}</h4>
          </FadeInView>
        ))}
      </div>
    </section>
  );
}
