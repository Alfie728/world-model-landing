"use client";

import { SVGMaskReveal } from "~/components/animations/SVGMaskReveal";
import { FadeInView } from "~/components/animations/FadeInView";
import { content } from "~/lib/content";

const data = content.problemStatement;

export function ProblemStatement() {
	return (
		<section className="flex-shrink-0 w-screen h-screen flex items-center max-md:w-full max-md:min-h-screen max-md:py-24">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-7xl mx-auto px-8 md:px-16">
				{/* Left — number + heading */}
				<div>
					<span className="font-mono text-sm tracking-widest text-text-muted">
						{data.number}
					</span>
					<SVGMaskReveal className="mt-4">
						<h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
							{data.heading}
						</h2>
					</SVGMaskReveal>
				</div>

				{/* Right — narrative */}
				<div className="flex flex-col justify-center space-y-6">
					{data.paragraphs.map((p, i) => (
						<FadeInView key={p.slice(0, 20)} delay={i * 0.1}>
							<p
								className={`font-body text-lg leading-relaxed ${
									p === "It is a data problem."
										? "text-accent-indigo text-2xl font-semibold font-heading"
										: "text-text-secondary"
								}`}
							>
								{p}
							</p>
						</FadeInView>
					))}
				</div>
			</div>
		</section>
	);
}
