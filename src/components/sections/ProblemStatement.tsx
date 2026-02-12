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

/* ─── Panel 1 — The Problem ───
   Massive heading anchored lower-left, body text right-center */
export function ProblemStatementHero() {
  return (
    <Panel className="items-end">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1680474569854-81216b34417a?w=1920&q=80&auto=format"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-surface-base via-surface-base/90 to-surface-base/50" />
      </div>

      {/* Heading — lower-left, dominating the viewport */}
      <div className="absolute bottom-[12vh] left-[5vw] max-w-[52vw] z-[2] max-md:static max-md:max-w-none">
        <FadeInView>
          <span className="font-mono text-base tracking-[0.3em] text-accent-blue uppercase">
            {data.number}
          </span>
        </FadeInView>

        <SVGMaskReveal className="mt-6">
          <h1 className="text-[clamp(56px,8vw,150px)] leading-[0.93] tracking-[-0.035em] font-bold">
            {data.heading}
          </h1>
        </SVGMaskReveal>
      </div>

      {/* Supporting text — right side, vertically centered */}
      <div className="absolute top-1/2 -translate-y-1/2 right-[5vw] max-w-[34vw] z-[2] max-md:static max-md:max-w-none max-md:mt-10 max-md:translate-y-0">
        <FadeInView delay={0.06}>
          <p className="text-[clamp(18px,1.5vw,26px)] leading-[1.65] text-text-secondary">
            {data.evidence}
          </p>
        </FadeInView>
        <FadeInView delay={0.12}>
          <p className="mt-8 text-[clamp(17px,1.3vw,22px)] leading-[1.65] text-text-muted">
            {data.conclusion}
          </p>
        </FadeInView>
      </div>
    </Panel>
  );
}

/* ─── Panel 2 — The Diagnosis + The Shift ───
   Bold statement top-left, supporting quote + identity bottom-right */
export function ProblemStatementCore() {
  return (
    <Panel className="items-stretch">
      {/* Background with subtle glow */}
      <div className="absolute inset-0 bg-surface-base" />
      <div className="absolute top-[20%] left-[15%] w-[600px] h-[600px] rounded-full bg-accent-blue/[0.05] blur-[150px]" />

      <div className="relative z-[2] w-full h-full flex flex-col justify-between py-[12vh] px-[5vw] max-md:py-16 max-md:justify-center max-md:gap-12">
        {/* Top-left: massive accent statement + paradigm */}
        <div className="flex flex-col gap-10 max-w-[65vw] max-md:max-w-none max-md:gap-6">
          <SVGMaskReveal>
            <h2 className="font-heading text-[clamp(48px,6vw,110px)] leading-[0.95] text-accent-blue tracking-[-0.03em]">
              {data.diagnosis}
            </h2>
          </SVGMaskReveal>
          <FadeInView delay={0.08}>
            <p className="text-[clamp(18px,1.5vw,26px)] leading-[1.65] text-text-secondary max-w-[44vw] max-md:max-w-none">
              {data.paradigm}
            </p>
          </FadeInView>
        </div>

        {/* Bottom-right: pull-quote + lab identity */}
        <div className="flex flex-col gap-8 self-end max-w-[52vw] max-md:self-start max-md:max-w-none">
          <FadeInView delay={0.1}>
            <blockquote className="text-[clamp(26px,2.8vw,52px)] leading-[1.2] text-text-primary">
              {data.shift}
            </blockquote>
          </FadeInView>
          <FadeInView delay={0.18}>
            <div className="flex items-start gap-5">
              <div className="w-10 h-px bg-accent-blue mt-[14px] flex-shrink-0" />
              <p className="text-[clamp(16px,1.2vw,20px)] leading-[1.65] text-text-muted">
                {data.mission}
              </p>
            </div>
          </FadeInView>
        </div>
      </div>
    </Panel>
  );
}
