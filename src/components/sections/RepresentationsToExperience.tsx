"use client";

import { FadeInView } from "~/components/animations/FadeInView";
import { GlowOrb } from "~/components/animations/GlowOrb";
import { SVGMaskReveal } from "~/components/animations/SVGMaskReveal";
import { IconCloud } from "~/components/ui/icon-cloud";
import { content } from "~/lib/content";

const data = content.representationsToExperience;

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

export function RepresentationsToExperience() {
  return (
    <div className="relative flex h-full w-screen min-w-screen shrink-0 items-center overflow-hidden max-md:relative max-md:min-h-screen max-md:w-full max-md:px-6 max-md:py-24">
      {/* Icon Cloud + glow */}
      <div className="pointer-events-none absolute bottom-[8vh] left-[24vw] z-[1] flex items-center justify-center max-md:hidden">
        <GlowOrb color="blue" size={500} className="blur-3xl" />
        <IconCloud images={iconCloudImages} />
      </div>

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
