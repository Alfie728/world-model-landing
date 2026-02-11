"use client";

import { SVGMaskReveal } from "~/components/animations/SVGMaskReveal";
import { AccentCard } from "~/components/ui/AccentCard";
import { content } from "~/lib/content";

export function ProductVectors() {
	return (
		<div className="flex-shrink-0 h-full flex flex-col justify-center pl-[8vw] pr-[10vw] max-md:w-full max-md:min-h-fit max-md:px-8 max-md:py-24">
			<div className="mb-8">
				<span className="font-mono text-sm tracking-widest text-text-muted">
					04 — 06
				</span>
				<SVGMaskReveal className="mt-3">
					<h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
						Three Product Vectors
					</h2>
				</SVGMaskReveal>
			</div>

			<div className="flex flex-col md:flex-row gap-5">
				{content.productVectors.map((vector, i) => (
					<AccentCard key={vector.title} vector={vector} index={i} />
				))}
			</div>
		</div>
	);
}
