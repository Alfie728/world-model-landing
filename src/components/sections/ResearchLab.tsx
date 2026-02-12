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
      {/* Heading — left side */}
      <div
        ref={lineRef}
        className="absolute top-[14vh] left-[5vw] max-w-[48vw] z-[2] max-md:static max-md:max-w-none"
      >
        <span className="font-mono text-sm tracking-[0.3em] uppercase text-accent-blue">
          {data.number}
        </span>

        <SVGMaskReveal className="mt-5">
          <h1 className="text-[clamp(44px,5.5vw,96px)] leading-[0.95] tracking-[-0.03em]">
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
            className="text-text-secondary text-[clamp(22px,2vw,38px)] leading-[1.3]"
            style={{ fontWeight: 300 }}
          >
            {data.subtitle}
          </h2>
        </FadeInView>
      </div>

      {/* Bullets — bottom right */}
      <div className="absolute bottom-[8vh] right-[5vw] max-w-[36vw] z-[2] max-md:static max-md:max-w-none max-md:mt-8">
        <FadeInView>
          <p className="text-text-secondary text-[clamp(17px,1.3vw,24px)] leading-[1.65]">
            {data.paragraphs[0]}
          </p>
        </FadeInView>

        <div className="mt-6 space-y-3">
          {data.bullets.map((bullet, i) => (
            <FadeInView key={bullet} delay={0.1 + i * 0.06}>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent-blue mt-2.5 flex-shrink-0" />
                <span className="text-text-secondary text-[clamp(16px,1.2vw,22px)] leading-[1.6]">
                  {bullet}
                </span>
              </div>
            </FadeInView>
          ))}
        </div>

        <FadeInView delay={0.4} className="mt-8">
          <p className="text-text-muted text-[clamp(15px,1.1vw,19px)] leading-[1.65]">
            {data.closing}
          </p>
        </FadeInView>
      </div>
    </div>
  );
}
