"use client";

import { SVGMaskReveal } from "~/components/animations/SVGMaskReveal";
import { FadeInView } from "~/components/animations/FadeInView";
import { content } from "~/lib/content";

const data = content.problemStatement;

export function ProblemStatement() {
	return (
		<div className="flex-shrink-0 h-full flex items-center pl-[10vw] pr-[15vw] max-md:w-full max-md:min-h-screen max-md:px-8 max-md:py-24">
			<div className="flex gap-20 max-w-[85vw]">
				{/* Left — number + heading */}
				<div className="flex-shrink-0 w-[30vw] max-md:w-full">
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
				<div className="flex flex-col justify-center space-y-5 w-[32vw] max-md:w-full">
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
