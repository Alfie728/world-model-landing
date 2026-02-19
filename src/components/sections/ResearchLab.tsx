"use client";

import { FadeInView } from "~/components/animations/FadeInView";
import { SVGMaskReveal } from "~/components/animations/SVGMaskReveal";
import ImageTrail from "~/components/ImageTrail";
import { content } from "~/lib/content";

const data = content.researchLab;

const trailImages = [
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80&auto=format",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80&auto=format",
  "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80&auto=format",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80&auto=format",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80&auto=format",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80&auto=format",
  "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?w=600&q=80&auto=format",
  "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&q=80&auto=format",
  "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&q=80&auto=format",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80&auto=format",
];

export function ResearchLab() {
  return (
    <div
      className="relative flex h-full w-[100vw] min-w-[100vw] flex-shrink-0 items-center overflow-hidden max-md:relative max-md:min-h-screen max-md:w-full max-md:px-6 max-md:py-24"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, white 8%, white 92%, transparent 100%), linear-gradient(to bottom, transparent 0%, white 8%, white 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, white 8%, white 92%, transparent 100%), linear-gradient(to bottom, transparent 0%, white 8%, white 92%, transparent 100%)",
        maskComposite: "intersect",
        WebkitMaskComposite: "destination-in",
      }}
    >
      {/* Interactive image trail background */}
      <ImageTrail items={trailImages} variant={7} />

      {/* Heading — left side */}
      <div className="pointer-events-none absolute 3xl:top-[18vh] 4xl:top-[20vh] top-[16vh] 3xl:left-[8vw] 4xl:left-[10vw] left-[8vw] z-[2] max-w-[48vw] max-md:pointer-events-auto max-md:static max-md:max-w-none 2xl:left-[10vw]">
        <SVGMaskReveal>
          <h1>{data.heading}</h1>
        </SVGMaskReveal>

        <FadeInView className="mt-8">
          <h2>{data.subtitle}</h2>
        </FadeInView>
      </div>

      {/* Body — bottom right */}
      <div className="pointer-events-none absolute 3xl:right-[6vw] 4xl:right-[8vw] right-[4vw] 3xl:bottom-[10vh] 4xl:bottom-[14vh] bottom-[6vh] z-[2] max-w-[36vw] max-md:pointer-events-auto max-md:static max-md:mt-8 max-md:max-w-none">
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
