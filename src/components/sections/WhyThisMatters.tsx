"use client";

import { SVGMaskReveal } from "~/components/animations/SVGMaskReveal";
import { FadeInView } from "~/components/animations/FadeInView";
import { content } from "~/lib/content";

const data = content.whyThisMatters;

export function WhyThisMatters() {
	return (
		<section className="min-h-screen flex flex-col items-center justify-center px-8 text-center py-24">
			<SVGMaskReveal>
				{/* h1: 95px/109px/300 from Offground CSS */}
				<h1 className="font-heading max-w-4xl">
					Closing the Gap Between{" "}
					<span className="text-accent-indigo">Models</span> and{" "}
					<span className="text-accent-cyan">Experience</span>
				</h1>
			</SVGMaskReveal>

			<div className="mt-12 max-w-2xl space-y-6">
				{data.paragraphs.map((p, i) => (
					<FadeInView key={p.slice(0, 20)} delay={0.3 + i * 0.15}>
						{/* h4: 22px/30px/300 */}
						<h4 className="text-text-secondary">
							{p}
						</h4>
					</FadeInView>
				))}
			</div>
		</section>
	);
}
