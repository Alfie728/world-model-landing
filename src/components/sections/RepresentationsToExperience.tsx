"use client";

import {
  ArrowsClockwise,
  ArrowSquareOut,
  Atom,
  Brain,
  ChartBar,
  ChartLine,
  Cube,
  GitBranch,
  Globe,
  Path,
  Pulse,
  TreeStructure,
  X,
} from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FadeInView } from "~/components/animations/FadeInView";
import { GlowOrb } from "~/components/animations/GlowOrb";
import { SVGMaskReveal } from "~/components/animations/SVGMaskReveal";
import { IconCloud } from "~/components/ui/icon-cloud";
import { Marquee } from "~/components/ui/marquee";
import { content } from "~/lib/content";

const data = content.representationsToExperience;

const marqueeItems = [
  { label: "state evolution", icon: Pulse },
  { label: "action-consequence chains", icon: GitBranch },
  { label: "spatiotemporal data", icon: Cube },
  { label: "distributional diversity", icon: ChartLine },
  { label: "multi-step intent", icon: TreeStructure },
  { label: "recovery trajectories", icon: ArrowsClockwise },
  { label: "embodied interaction", icon: Globe },
  { label: "action-conditioned", icon: Path },
  { label: "real-world dynamics", icon: Atom },
  { label: "long-horizon planning", icon: Brain },
];

const firstRow = marqueeItems.slice(0, Math.ceil(marqueeItems.length / 2));
const secondRow = marqueeItems.slice(Math.ceil(marqueeItems.length / 2));

function MarqueeChip({
  label,
  icon: Icon,
}: {
  label: string;
  icon: React.ElementType;
}) {
  return (
    <figure className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 backdrop-blur-md">
      <Icon className="h-4 w-4 shrink-0 text-accent-blue" weight="bold" />
      <figcaption className="whitespace-nowrap text-sm text-text-secondary">
        {label}
      </figcaption>
    </figure>
  );
}

const iconCloudImages = [
  "pytorch",
  "tensorflow",
  "python",
  "numpy",
  "opencv",
  "unity",
  "unrealengine",
  "blender",
  "threedotjs",
  "nvidia",
  "docker",
  "kubernetes",
  "linux",
  "pandas",
  "jupyter",
  "postgresql",
  "github",
  "git",
  "rust",
  "cplusplus",
].map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`);

const benchmarks = [
  {
    name: "WorldSim-Bench",
    description: "Long-horizon world simulation accuracy across diverse environments",
    status: "Coming Soon",
    url: "#",
  },
  {
    name: "EgoTask-Eval",
    description: "Egocentric task completion and manipulation benchmarks",
    status: "Coming Soon",
    url: "#",
  },
  {
    name: "ActionDynamics-1K",
    description: "Action-conditioned state prediction over 1K trajectories",
    status: "Coming Soon",
    url: "#",
  },
];

function BenchmarksModal({
  isOpen,
  onClose,
}: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed top-1/2 left-1/2 z-50 w-[90vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-surface-raised/95 p-6 shadow-2xl backdrop-blur-xl"
            initial={{ opacity: 0, scale: 0.95, y: "-48%" }}
            animate={{ opacity: 1, scale: 1, y: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, y: "-48%" }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-blue/10">
                  <ChartBar
                    className="h-5 w-5 text-accent-blue"
                    weight="bold"
                  />
                </div>
                <div>
                  <h3 className="text-lg text-text-primary">
                    Benchmarks & Evals
                  </h3>
                  <p className="text-xs text-text-muted">
                    Our evaluation suite
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-text-muted transition-colors hover:bg-white/5 hover:text-text-primary"
              >
                <X className="h-4 w-4" weight="bold" />
              </button>
            </div>

            {/* Benchmark list */}
            <div className="mt-5 space-y-3">
              {benchmarks.map((bench) => (
                <div
                  key={bench.name}
                  className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 transition-colors hover:border-white/10 hover:bg-white/[0.05]"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-text-primary">
                      {bench.name}
                    </p>
                    <p className="mt-0.5 text-xs text-text-muted">
                      {bench.description}
                    </p>
                  </div>
                  <span className="ml-3 shrink-0 rounded-full border border-accent-blue/20 bg-accent-blue/10 px-2.5 py-0.5 font-mono text-[10px] text-accent-blue">
                    {bench.status}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-5 border-t border-white/5 pt-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm text-accent-blue transition-colors hover:text-accent-sky"
              >
                View all benchmarks
                <ArrowSquareOut className="h-3.5 w-3.5" weight="bold" />
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function RepresentationsToExperience() {
  const [benchmarksOpen, setBenchmarksOpen] = useState(false);
  return (
    <div className="relative flex h-full w-screen min-w-screen shrink-0 items-center overflow-hidden max-md:relative max-md:min-h-screen max-md:w-full max-md:px-6 max-md:py-24">
      {/* Icon Cloud + glow — shared drift keeps them locked together */}
      <motion.div
        className="pointer-events-none absolute top-[16vh] right-[10vw] z-[1] max-md:hidden"
        animate={{
          x: [0, 40, -30, 15, 0],
          y: [0, -30, 20, -10, 0],
        }}
        transition={{
          duration: 36,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <GlowOrb color="blue" size={400} className="relative" />
          </div>
          <IconCloud images={iconCloudImages} />
        </div>
      </motion.div>

      {/* Left side — heading + quote */}
      <div className="absolute 3xl:top-[18vh] 4xl:top-[20vh] top-[16vh] 3xl:left-[8vw] 4xl:left-[10vw] left-[8vw] z-[2] max-w-[55vw] max-md:static max-md:max-w-none 2xl:left-[10vw]">
        <SVGMaskReveal>
          <h1>
            From <span className="text-accent-blue">Representations</span> to{" "}
            <span className="text-accent-blue">Experience</span>
          </h1>
        </SVGMaskReveal>

        <FadeInView delay={0.15} className="mt-8">
          <blockquote className="text-text-primary">
            &ldquo;{data.quote}&rdquo;
          </blockquote>
        </FadeInView>

        {/* Benchmarks & Evals trigger */}
        <FadeInView delay={0.25} className="mt-6">
          <button
            type="button"
            onClick={() => setBenchmarksOpen(true)}
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 backdrop-blur-md transition-all hover:border-accent-blue/30 hover:bg-white/[0.08]"
          >
            <ChartBar
              className="h-4 w-4 text-accent-blue"
              weight="bold"
            />
            <span className="text-sm text-text-secondary transition-colors group-hover:text-text-primary">
              Benchmarks & Evals
            </span>
            <ArrowSquareOut
              className="h-3.5 w-3.5 text-text-muted transition-colors group-hover:text-accent-blue"
              weight="bold"
            />
          </button>
        </FadeInView>
      </div>

      {/* Benchmarks Modal */}
      <BenchmarksModal
        isOpen={benchmarksOpen}
        onClose={() => setBenchmarksOpen(false)}
      />

      {/* Bottom-left: scrolling keyword marquee */}
      <div
        className="pointer-events-none absolute bottom-[16vh] left-[8vw] z-[1] flex w-[44vw] flex-col gap-3 overflow-hidden max-md:hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, white 12%, white 88%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, white 12%, white 88%, transparent 100%)",
        }}
      >
        <Marquee pauseOnHover className="[--duration:35s] [--gap:0.75rem]">
          {firstRow.map((item) => (
            <MarqueeChip key={item.label} {...item} />
          ))}
        </Marquee>
        <Marquee
          reverse
          pauseOnHover
          className="[--duration:35s] [--gap:0.75rem]"
        >
          {secondRow.map((item) => (
            <MarqueeChip key={item.label} {...item} />
          ))}
        </Marquee>
      </div>

      {/* Body — bottom right */}
      <div className="absolute 3xl:right-[3vw] 4xl:right-[8vw] right-[2vw] 3xl:bottom-[10vh] 4xl:bottom-[14vh] bottom-[6vh] z-[2] max-w-[38vw] max-md:static max-md:mt-10 max-md:max-w-none">
        <FadeInView>
          <p>{data.body}</p>
        </FadeInView>

        <FadeInView delay={0.15} className="mt-8">
          <p>{data.closing}</p>
        </FadeInView>
      </div>
    </div>
  );
}
