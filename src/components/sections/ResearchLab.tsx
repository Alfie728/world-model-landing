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
		<section className="flex-shrink-0 w-screen h-screen flex flex-col items-center justify-center px-8 md:px-20 max-md:w-full max-md:min-h-screen max-md:py-24">
			<div className="max-w-4xl mx-auto text-center">
				<span className="font-mono text-sm tracking-widest text-text-muted">
					{data.number}
				</span>

				{/* Animated rules flanking heading */}
				<div ref={lineRef} className="flex items-center gap-6 mt-6 mb-4">
					<motion.div
						className="flex-1 h-px bg-border-subtle"
						initial={{ scaleX: 0 }}
						animate={isInView ? { scaleX: 1 } : {}}
						transition={{
							duration: 1,
							ease: [0.16, 1, 0.3, 1],
						}}
						style={{ transformOrigin: "right" }}
					/>
					<SVGMaskReveal>
						<h2 className="font-heading text-3xl md:text-5xl font-bold leading-tight">
							{data.heading}
						</h2>
					</SVGMaskReveal>
					<motion.div
						className="flex-1 h-px bg-border-subtle"
						initial={{ scaleX: 0 }}
						animate={isInView ? { scaleX: 1 } : {}}
						transition={{
							duration: 1,
							ease: [0.16, 1, 0.3, 1],
						}}
						style={{ transformOrigin: "left" }}
					/>
				</div>

				<FadeInView>
					<p className="font-body text-xl text-text-secondary leading-relaxed mt-4">
						{data.subtitle}
					</p>
				</FadeInView>

				<FadeInView delay={0.15}>
					<p className="font-body text-lg text-text-secondary leading-relaxed mt-6">
						{data.paragraphs[0]}
					</p>
				</FadeInView>

				{/* Thesis bullets */}
				<div className="mt-8 text-left max-w-lg mx-auto space-y-3">
					{data.bullets.map((bullet, i) => (
						<FadeInView key={bullet} delay={0.2 + i * 0.08}>
							<div className="flex items-start gap-3">
								<span className="w-1.5 h-1.5 rounded-full bg-accent-indigo mt-2.5 flex-shrink-0" />
								<span className="font-body text-lg text-text-secondary leading-relaxed">
									{bullet}
								</span>
							</div>
						</FadeInView>
					))}
				</div>

				<FadeInView delay={0.6} className="mt-8">
					<p className="font-mono text-sm tracking-wide text-text-muted">
						{data.closing}
					</p>
				</FadeInView>
			</div>
		</section>
	);
}
