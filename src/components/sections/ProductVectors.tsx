"use client";

import { SVGMaskReveal } from "~/components/animations/SVGMaskReveal";
import { AccentCard } from "~/components/ui/AccentCard";
import { content } from "~/lib/content";

export function ProductVectors() {
	return (
		<div className="min-w-[100vw] w-[100vw] h-full flex-shrink-0 relative flex flex-col max-md:w-full max-md:relative max-md:min-h-fit max-md:py-24 max-md:px-6">
			{/* Heading — top left, bigger */}
			<div className="absolute top-[10vh] left-[5vw] w-fit z-[2] max-md:static">
				<span className="font-mono text-base tracking-widest text-accent-sky">
					04 — 06
				</span>
				<SVGMaskReveal className="mt-4">
					<h1 className="text-[clamp(36px,3.5vw,64px)] leading-[1.1]">
						Three Product Vectors
					</h1>
				</SVGMaskReveal>
			</div>

			{/* Cards — fill more of the viewport */}
			<div className="absolute top-[22vh] left-[5vw] right-[5vw] bottom-[4vh] flex flex-col md:flex-row items-stretch gap-5 z-[2] max-md:static max-md:mt-6">
				{content.productVectors.map((vector, i) => (
					<AccentCard key={vector.title} vector={vector} index={i} />
				))}
			</div>
		</div>
	);
}
