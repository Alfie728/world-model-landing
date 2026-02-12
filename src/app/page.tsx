import { Hero } from "~/components/sections/Hero";
import { HorizontalScroll } from "~/components/sections/HorizontalScroll";
import { ProblemStatement } from "~/components/sections/ProblemStatement";
import { RepresentationsToExperience } from "~/components/sections/RepresentationsToExperience";
import { ResearchLab } from "~/components/sections/ResearchLab";
import { ProductVectors } from "~/components/sections/ProductVectors";
import { OurApproach } from "~/components/sections/OurApproach";
import { WhyThisMatters } from "~/components/sections/WhyThisMatters";
import { Footer } from "~/components/sections/Footer";
import { ScrollProgress } from "~/components/ui/ScrollProgress";
import { Navbar } from "~/components/ui/Navbar";
import { InfoBar } from "~/components/ui/InfoBar";

export default function Home() {
	return (
		<>
			<Navbar />
			<ScrollProgress />
			<main>
				<Hero />
				<HorizontalScroll>
					<ProblemStatement />
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
