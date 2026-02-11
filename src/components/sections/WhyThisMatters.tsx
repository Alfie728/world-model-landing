"use client";

import { SVGMaskReveal } from "~/components/animations/SVGMaskReveal";
import { FadeInView } from "~/components/animations/FadeInView";
import { content } from "~/lib/content";

const data = content.whyThisMatters;

export function WhyThisMatters() {
	return (
		<section className="min-h-screen flex flex-col items-center justify-center px-8 text-center py-24">
			<SVGMaskReveal>
				<h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold max-w-4xl leading-[1.05]">
					Closing the Gap Between{" "}
					<span className="text-accent-indigo">Models</span> and{" "}
					<span className="text-accent-cyan">Experience</span>
				</h2>
			</SVGMaskReveal>

			<div className="mt-12 max-w-2xl space-y-6">
				{data.paragraphs.map((p, i) => (
					<FadeInView key={p.slice(0, 20)} delay={0.3 + i * 0.15}>
						<p className="font-body text-lg md:text-xl text-text-secondary leading-relaxed">
							{p}
						</p>
					</FadeInView>
				))}
			</div>
		</section>
	);
}
