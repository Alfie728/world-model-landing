"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { FadeInView } from "~/components/animations/FadeInView";
import { SVGMaskReveal } from "~/components/animations/SVGMaskReveal";
import { content } from "~/lib/content";

const data = content.researchLab;

export function ResearchLab() {
  const lineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(lineRef, { once: true, margin: "-10%" });

  return (
    <div className="min-w-[100vw] w-[100vw] h-full flex-shrink-0 relative flex items-center max-md:w-full max-md:relative max-md:min-h-screen max-md:py-24 max-md:px-6 overflow-hidden">
      {/* Heading — left side, larger */}
      <div
        ref={lineRef}
        className="absolute top-[16vh] left-[6vw] max-w-[48vw] z-[2] max-md:static max-md:max-w-none"
      >
        <span className="font-mono text-base tracking-widest text-accent-blue">
          {data.number}
        </span>

        <SVGMaskReveal className="mt-5">
          <h1 className="text-[clamp(36px,4vw,72px)] leading-[1.1]">
            {data.heading}
          </h1>
        </SVGMaskReveal>

        <motion.div
          className="h-px w-full mt-8"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            transformOrigin: "left",
            background:
              "linear-gradient(to right, var(--color-accent-blue), transparent)",
          }}
        />

        <FadeInView className="mt-8">
          <h2
            className="text-text-secondary text-[clamp(22px,1.8vw,36px)] leading-snug"
            style={{ fontWeight: 300 }}
          >
            {data.subtitle}
          </h2>
        </FadeInView>
      </div>

      {/* Bullets — bottom right, larger */}
      <div className="absolute bottom-[8vh] right-[6vw] max-w-[36vw] z-[2] max-md:static max-md:max-w-none max-md:mt-8">
        <FadeInView>
          <h4 className="text-text-secondary text-[clamp(16px,1.2vw,22px)] leading-relaxed">
            {data.paragraphs[0]}
          </h4>
        </FadeInView>

        <div className="mt-6 space-y-3">
          {data.bullets.map((bullet, i) => (
            <FadeInView key={bullet} delay={0.1 + i * 0.06}>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent-blue mt-2.5 flex-shrink-0" />
                <span className="text-text-secondary text-[clamp(16px,1.1vw,20px)] leading-relaxed">
                  {bullet}
                </span>
              </div>
            </FadeInView>
          ))}
        </div>

        <FadeInView delay={0.4} className="mt-8">
          <p className="text-text-muted text-[clamp(14px,0.9vw,16px)] leading-relaxed">
            {data.closing}
          </p>
        </FadeInView>
      </div>
    </div>
  );
}
