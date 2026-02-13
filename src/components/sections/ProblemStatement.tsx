"use client";

import { FadeInView } from "~/components/animations/FadeInView";
import { SVGMaskReveal } from "~/components/animations/SVGMaskReveal";
import { content } from "~/lib/content";

const data = content.problemStatement;

/* ─── Shared viewport panel ─── */
function Panel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`min-w-[100vw] w-[100vw] h-full flex-shrink-0 relative flex overflow-hidden max-md:w-full max-md:relative max-md:min-h-screen max-md:py-24 max-md:px-6 ${className}`}
    >
      {children}
    </div>
  );
}

/* ─── Panel 1 — The Problem ─── */
export function ProblemStatementHero() {
  return (
    <Panel className="items-center">
      {/* Left: heading */}
      <div className="absolute bottom-[10vh] right-[4vw] max-w-[44vw] z-[2] max-md:static max-md:max-w-none">
        <SVGMaskReveal>
          <h1 className="text-[clamp(48px,6.5vw,120px)]">{data.heading}</h1>
        </SVGMaskReveal>
      </div>

      {/* Right: evidence + evidenceDetail + conclusion */}
      <div className="absolute top-[18vh] left-[8vw] max-w-[38vw] z-[2] max-md:static max-md:max-w-none max-md:mt-10">
        <FadeInView delay={0.06}>
          <p>{data.evidence}</p>
        </FadeInView>
        <FadeInView delay={0.12}>
          <p className="mt-6">{data.evidenceDetail}</p>
        </FadeInView>
      </div>
    </Panel>
  );
}

/* ─── Panel 2 — The Diagnosis + The Shift ─── */
export function ProblemStatementCore() {
  return (
    <Panel className="items-center">
      {/* Background with subtle glow */}
      <div className="absolute inset-0 bg-surface-base" />
      <div className="absolute top-[20%] left-[15%] w-[600px] h-[600px] rounded-full bg-accent-blue/[0.05] blur-[150px]" />

      {/* Top-left: accent heading + paradigm body text */}
      <div className="absolute top-[12vh] left-[5vw] max-w-[46vw] z-[2] max-md:static max-md:max-w-none">
        <SVGMaskReveal>
          <h1 className="text-[clamp(48px,7.5vw,120px)] text-accent-blue">
            {data.diagnosis}
          </h1>
        </SVGMaskReveal>
        <FadeInView delay={0.06}>
          <p className="mt-8 max-w-[40vw] max-md:max-w-none">{data.paradigm}</p>
        </FadeInView>
        <FadeInView delay={0.1}>
          <p className="mt-5 max-w-[38vw] max-md:max-w-none">
            {data.paradigmDetail}
          </p>
        </FadeInView>
      </div>

      {/* Bottom-right: shift quote + body text */}
      <div className="absolute bottom-[10vh] right-[5vw] max-w-[40vw] z-[2] max-md:static max-md:max-w-none max-md:mt-10">
        <FadeInView delay={0.12}>
          <h2 className="text-text-primary">{data.shift}</h2>
        </FadeInView>
        <FadeInView delay={0.16}>
          <p className="mt-6 max-w-[36vw] max-md:max-w-none">
            {data.shiftDetail}
          </p>
        </FadeInView>
        <FadeInView delay={0.2}>
          <p className="mt-5 max-w-[36vw] max-md:max-w-none">{data.mission}</p>
        </FadeInView>
      </div>
    </Panel>
  );
}
