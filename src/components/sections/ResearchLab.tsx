"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { SVGMaskReveal } from "~/components/animations/SVGMaskReveal";
import { FadeInView } from "~/components/animations/FadeInView";
import { content } from "~/lib/content";

const data = content.researchLab;

export function ResearchLab() {
	const lineRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(lineRef, { once: true, margin: "-10%" });

	return (
		<div className="flex-shrink-0 h-full flex flex-col justify-center px-[8vw] max-md:w-full max-md:min-h-screen max-md:px-8 max-md:py-24">
			<div className="w-[42vw] max-md:w-full">
				<span className="font-mono text-sm tracking-widest text-text-muted">
					{data.number}
				</span>

				<div ref={lineRef} className="mt-4">
					<SVGMaskReveal>
						<h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
							{data.heading}
						</h2>
					</SVGMaskReveal>
				</div>

				{/* Animated rule */}
				<motion.div
					className="h-px w-full mt-6 mb-6"
					initial={{ scaleX: 0 }}
					animate={isInView ? { scaleX: 1 } : {}}
					transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
					style={{
						transformOrigin: "left",
						background:
							"linear-gradient(to right, var(--color-border-subtle), transparent)",
					}}
				/>

				<FadeInView>
					<p className="font-body text-lg text-text-secondary leading-relaxed">
						{data.subtitle}
					</p>
				</FadeInView>

				<FadeInView delay={0.1}>
					<p className="font-body text-base text-text-secondary leading-relaxed mt-5">
						{data.paragraphs[0]}
					</p>
				</FadeInView>

				<div className="mt-5 space-y-2.5">
					{data.bullets.map((bullet, i) => (
						<FadeInView key={bullet} delay={0.15 + i * 0.06}>
							<div className="flex items-start gap-3">
								<span className="w-1.5 h-1.5 rounded-full bg-accent-indigo mt-2 flex-shrink-0" />
								<span className="font-body text-base text-text-secondary leading-relaxed">
									{bullet}
								</span>
							</div>
						</FadeInView>
					))}
				</div>

				<FadeInView delay={0.5} className="mt-6">
					<p className="font-mono text-sm tracking-wide text-text-muted">
						{data.closing}
					</p>
				</FadeInView>
			</div>
		</div>
	);
}
