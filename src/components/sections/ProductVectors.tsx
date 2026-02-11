"use client";

import { SVGMaskReveal } from "~/components/animations/SVGMaskReveal";
import { AccentCard } from "~/components/ui/AccentCard";
import { content } from "~/lib/content";

export function ProductVectors() {
	return (
		<section className="flex-shrink-0 w-[200vw] h-screen flex flex-col justify-center px-8 md:px-20 max-md:w-full max-md:min-h-fit max-md:py-24">
			<div className="mb-10">
				<span className="font-mono text-sm tracking-widest text-text-muted">
					04 — 06
				</span>
				<SVGMaskReveal className="mt-4">
					<h2 className="font-heading text-3xl md:text-5xl font-bold">
						Three Product Vectors
					</h2>
				</SVGMaskReveal>
			</div>

			<div className="flex flex-col md:flex-row gap-6 md:gap-8">
				{content.productVectors.map((vector, i) => (
					<AccentCard key={vector.title} vector={vector} index={i} />
				))}
			</div>
		</section>
	);
}
