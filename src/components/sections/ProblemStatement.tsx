"use client";

import { SVGMaskReveal } from "~/components/animations/SVGMaskReveal";
import { FadeInView } from "~/components/animations/FadeInView";
import { content } from "~/lib/content";

const data = content.problemStatement;

export function ProblemStatement() {
	return (
		<div className="min-w-[100vw] w-[100vw] h-full flex-shrink-0 relative flex items-center justify-center max-md:w-full max-md:relative max-md:min-h-screen max-md:py-24 max-md:px-6">
			{/* Text block 1 — top-left area */}
			<div className="absolute top-[35vh] left-[5vw] w-fit max-w-[30vw] z-[2] max-md:static max-md:max-w-none">
				<span className="font-mono text-sm tracking-widest text-text-muted">
					{data.number}
				</span>
				<SVGMaskReveal className="mt-4">
					<h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
						{data.heading}
					</h2>
				</SVGMaskReveal>
			</div>

			{/* Text block 2 — center-right area */}
			<div className="absolute top-[25vh] right-[8vw] w-fit max-w-[32vw] z-[2] max-md:static max-md:max-w-none">
				<div className="space-y-5">
					{data.paragraphs.map((p, i) => (
						<FadeInView key={p.slice(0, 20)} delay={i * 0.08}>
							<p
								className={`font-body leading-relaxed ${
									p === "It is a data problem."
										? "text-accent-indigo text-2xl font-semibold font-heading"
										: "text-text-secondary text-base"
								}`}
							>
								{p}
							</p>
						</FadeInView>
					))}
				</div>
			</div>
		</div>
	);
}
