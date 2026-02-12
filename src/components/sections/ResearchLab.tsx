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
    <div className="min-w-[100vw] w-[100vw] h-full flex-shrink-0 relative flex items-center justify-center max-md:w-full max-md:relative max-md:min-h-screen max-md:py-24 max-md:px-6">
      {/* Heading — top left */}
      <div
        ref={lineRef}
        className="absolute top-[28vh] left-[8vw] w-fit max-w-[40vw] z-[2] max-md:static max-md:max-w-none"
      >
        <span className="font-mono text-sm tracking-widest text-text-muted">
          {data.number}
        </span>

        <SVGMaskReveal className="mt-4">
          <h2>{data.heading}</h2>
        </SVGMaskReveal>

        <motion.div
          className="h-px w-full mt-6"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            transformOrigin: "left",
            background:
              "linear-gradient(to right, var(--color-accent-emerald), transparent)",
          }}
        />

        <FadeInView className="mt-6">
          <h3 className="text-text-secondary" style={{ fontWeight: 300 }}>
            {data.subtitle}
          </h3>
        </FadeInView>
      </div>

      {/* Bullets — bottom right */}
      <div className="absolute bottom-[12vh] right-[10vw] w-fit max-w-[30vw] z-[2] max-md:static max-md:max-w-none max-md:mt-8">
        <FadeInView>
          <h5 className="text-text-secondary">{data.paragraphs[0]}</h5>
        </FadeInView>

        <div className="mt-5 space-y-2.5">
          {data.bullets.map((bullet, i) => (
            <FadeInView key={bullet} delay={0.1 + i * 0.06}>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald mt-2 flex-shrink-0" />
                <h5 className="text-text-secondary">{bullet}</h5>
              </div>
            </FadeInView>
          ))}
        </div>

        <FadeInView delay={0.4} className="mt-6">
          <h6 className="text-text-muted">{data.closing}</h6>
        </FadeInView>
      </div>
    </div>
  );
}
