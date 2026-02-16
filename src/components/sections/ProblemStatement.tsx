"use client";

import { FadeInView } from "~/components/animations/FadeInView";
import { SVGMaskReveal } from "~/components/animations/SVGMaskReveal";
import { BackgroundPaths } from "~/components/ui/background-paths";
import { DotGrid } from "~/components/ui/dot-grid";
import { InteractiveGridPattern } from "~/components/ui/interactive-grid-pattern";
import { content } from "~/lib/content";

const data = content.problemStatement;

/* ─── Shared viewport panel ─── */
function Panel({
  children,
  className = "",
  overflowVisible = false,
}: {
  children: React.ReactNode;
  className?: string;
  overflowVisible?: boolean;
}) {
  return (
    <div
      className={`relative flex h-full w-[100vw] min-w-[100vw] flex-shrink-0 ${overflowVisible ? "" : "overflow-hidden"} max-md:relative max-md:min-h-screen max-md:w-full max-md:overflow-hidden max-md:px-6 max-md:py-24 ${className}`}
    >
      {children}
    </div>
  );
}

/* ─── Panel 1 — The Problem ─── */
export function ProblemStatementHero() {
  return (
    <Panel className="items-center" overflowVisible>
      <BackgroundPaths className="w-[300vw]!" />
      {/* Left: evidence + evidenceDetail + conclusion */}
      <div className="absolute 3xl:top-[18vh] 4xl:top-[20vh] top-[16vh] 3xl:left-[8vw] 4xl:left-[10vw] left-[8vw] z-[2] max-w-[38vw] max-md:static max-md:mt-10 max-md:max-w-none 2xl:left-[10vw]">
        <FadeInView delay={0.06}>
          <p>{data.evidence}</p>
        </FadeInView>
        <FadeInView delay={0.12}>
          <p className="mt-6">{data.evidenceDetail}</p>
        </FadeInView>
      </div>
      {/* Right: heading */}
      <div className="absolute 3xl:right-[3vw] 4xl:right-[8vw] right-[2vw] 3xl:bottom-[10vh] 4xl:bottom-[14vh] bottom-[6vh] z-[2] max-w-[44vw] max-md:static max-md:max-w-none">
        <SVGMaskReveal>
          <h1 className="text-[clamp(48px,6.5vw,120px)]">
            This is Not a <span className="text-accent-warm">Architecture</span>{" "}
            Problem
          </h1>
        </SVGMaskReveal>
      </div>
    </Panel>
  );
}

/* ─── Panel 2 — The Diagnosis + The Shift ─── */
export function ProblemStatementCore() {
  return (
    <Panel className="items-center">
      {/* Top-left: accent heading + paradigm body text */}
      <div className="absolute 3xl:top-[18vh] 4xl:top-[20vh] top-[16vh] 3xl:left-[8vw] 4xl:left-[10vw] left-[8vw] z-[2] max-w-[46vw] max-md:static max-md:max-w-none 2xl:left-[10vw]">
        <div className="p-4">
          <SVGMaskReveal>
            <h1 className="text-[clamp(48px,7.5vw,120px)]">
              It is a <span className="text-accent-blue">data</span> problem.
            </h1>
          </SVGMaskReveal>
          <FadeInView delay={0.06}>
            <p className="mt-8 max-w-[40vw] max-md:max-w-none">
              {data.paradigm}
            </p>
          </FadeInView>
          <FadeInView delay={0.1}>
            <p className="mt-5 max-w-[38vw] max-md:max-w-none">
              {data.paradigmDetail}
            </p>
          </FadeInView>
        </div>
      </div>

      {/* Bottom-right: shift subtitle + body text */}
      <div className="absolute 3xl:right-[3vw] 4xl:right-[8vw] right-[2vw] 3xl:bottom-[10vh] 4xl:bottom-[14vh] bottom-[6vh] z-[2] max-w-[40vw] max-md:static max-md:mt-10 max-md:max-w-none">
        <div className="p-4">
          <FadeInView delay={0.12}>
            <h2 className="text-text-primary">{data.shift}</h2>
          </FadeInView>
          <FadeInView delay={0.16}>
            <p className="mt-6 max-w-[36vw] max-md:max-w-none">
              {data.shiftDetail}
            </p>
          </FadeInView>
          <FadeInView delay={0.2}>
            <p className="mt-5 max-w-[36vw] max-md:max-w-none">
              {data.mission}
            </p>
          </FadeInView>
        </div>
      </div>
    </Panel>
  );
}
