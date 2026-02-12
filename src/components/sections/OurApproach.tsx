"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { FadeInView } from "~/components/animations/FadeInView";
import { SVGMaskReveal } from "~/components/animations/SVGMaskReveal";
import { content } from "~/lib/content";

const data = content.approach;

export function OurApproach() {
  const barRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(barRef, { once: true, margin: "-10%" });

  return (
    <div className="min-w-[100vw] w-[100vw] h-full flex-shrink-0 relative flex items-center max-md:w-full max-md:relative max-md:min-h-screen max-md:py-24 max-md:px-6 overflow-hidden">
      {/* Subtle background visual — abstract data flow */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80&auto=format"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-base from-5% via-transparent via-50% to-surface-base to-95%" />
      </div>

      {/* Two-column layout */}
      <div className="absolute top-[14vh] left-[6vw] max-w-[40vw] z-[2] max-md:static max-md:max-w-none">
        <span className="font-mono text-base tracking-widest text-accent-warm">
          {data.number}
        </span>

        <SVGMaskReveal className="mt-5">
          <h1 className="text-[clamp(48px,5vw,88px)] leading-[1.05]">
            {data.heading}
          </h1>
        </SVGMaskReveal>

        {/* Animated gradient bar */}
        <div ref={barRef} className="mt-8 mb-8">
          <motion.div
            className="h-px w-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              transformOrigin: "left",
              background:
                "linear-gradient(to right, var(--color-accent-blue), var(--color-accent-warm))",
            }}
          />
        </div>

        <FadeInView>
          <h2
            className="text-text-secondary text-[clamp(22px,1.8vw,36px)] leading-snug"
            style={{ fontWeight: 300 }}
          >
            {data.subtitle}
          </h2>
        </FadeInView>
      </div>

      {/* Right column — body, bullets, closing statement */}
      <div className="absolute top-[28vh] right-[6vw] max-w-[36vw] z-[2] max-md:static max-md:max-w-none max-md:mt-8">
        <FadeInView delay={0.1}>
          <p className="text-text-secondary text-[clamp(16px,1.15vw,20px)] leading-relaxed">
            {data.paragraphs[0]}
          </p>
        </FadeInView>

        <div className="mt-6 space-y-3">
          {data.bullets.map((bullet, i) => (
            <FadeInView key={bullet} delay={0.2 + i * 0.06}>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent-warm mt-2.5 flex-shrink-0" />
                <span className="text-text-secondary text-[clamp(16px,1.1vw,20px)] leading-relaxed">
                  {bullet}
                </span>
              </div>
            </FadeInView>
          ))}
        </div>

        <FadeInView delay={0.5} className="mt-10">
          <h2 className="font-heading text-text-primary text-[clamp(24px,2vw,40px)] leading-snug">
            The goal is not volume alone, but{" "}
            <span className="text-accent-blue">useful experience</span>.
          </h2>
        </FadeInView>
      </div>
    </div>
  );
}
