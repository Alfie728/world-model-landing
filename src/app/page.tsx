import type { Metadata } from "next";
import Prism from "~/components/Prism";
import { Footer } from "~/components/sections/Footer";
import { Hero } from "~/components/sections/Hero";
import { HorizontalScroll } from "~/components/sections/HorizontalScroll";
import { OurApproach } from "~/components/sections/OurApproach";
import {
  ProblemStatementCore,
  ProblemStatementHero,
} from "~/components/sections/ProblemStatement";
import { ProductVectors } from "~/components/sections/ProductVectors";
import { RepresentationsToExperience } from "~/components/sections/RepresentationsToExperience";
import { ResearchLab } from "~/components/sections/ResearchLab";
import { WhyThisMatters } from "~/components/sections/WhyThisMatters";
import { InfoBar } from "~/components/ui/InfoBar";
import { Navbar } from "~/components/ui/Navbar";

export const metadata: Metadata = {
  title: "Arcterra | Planet-Scale Data for the Real World",
  description:
    "A real-world AI research lab building world model data, robotics data, and custom capture hardware for embodied intelligence.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="absolute inset-0">
          <Prism
            animationType="rotate"
            timeScale={0.5}
            height={3.5}
            baseWidth={5.5}
            scale={3.6}
            hueShift={0}
            colorFrequency={1}
            noise={0}
            glow={1}
            suspendWhenOffscreen
          />
        </div>
        <Hero />
        <HorizontalScroll>
          <ProblemStatementHero />
          <ProblemStatementCore />
          <RepresentationsToExperience />
          <ResearchLab />
          <ProductVectors />
          <OurApproach />
        </HorizontalScroll>
        {/* Sticky info bar — becomes header after horizontal scroll */}
        <div className="sticky top-0 z-40">
          <InfoBar />
        </div>
        <WhyThisMatters />
      </main>
      <Footer />
    </>
  );
}
