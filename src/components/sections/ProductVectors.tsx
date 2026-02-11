"use client";

import { SVGMaskReveal } from "~/components/animations/SVGMaskReveal";
import { AccentCard } from "~/components/ui/AccentCard";
import { content } from "~/lib/content";

export function ProductVectors() {
	return (
		<div className="min-w-[100vw] w-[100vw] h-full flex-shrink-0 relative flex items-center justify-center max-md:w-full max-md:relative max-md:min-h-fit max-md:py-24 max-md:px-6">
			{/* Heading — top left */}
			<div className="absolute top-[12vh] left-[5vw] w-fit z-[2] max-md:static">
				<span className="font-mono text-sm tracking-widest text-text-muted">
					04 — 06
				</span>
				<SVGMaskReveal className="mt-3">
					<h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
						Three Product Vectors
					</h2>
				</SVGMaskReveal>
			</div>

			{/* Cards — center/bottom area */}
			<div className="absolute top-[24vh] left-[5vw] right-[5vw] bottom-[6vh] flex flex-col md:flex-row items-stretch gap-5 z-[2] max-md:static max-md:mt-6">
				{content.productVectors.map((vector, i) => (
					<AccentCard key={vector.title} vector={vector} index={i} />
				))}
			</div>
		</div>
	);
}
