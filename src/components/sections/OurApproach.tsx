"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { SVGMaskReveal } from "~/components/animations/SVGMaskReveal";
import { FadeInView } from "~/components/animations/FadeInView";
import { content } from "~/lib/content";

const data = content.approach;

export function OurApproach() {
	const barRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(barRef, { once: true, margin: "-10%" });

	return (
		<section className="flex-shrink-0 w-screen h-screen flex flex-col items-center justify-center px-8 md:px-20 max-md:w-full max-md:min-h-screen max-md:py-24">
			<div className="max-w-3xl mx-auto">
				<span className="font-mono text-sm tracking-widest text-text-muted">
					{data.number}
				</span>

				<SVGMaskReveal className="mt-4">
					<h2 className="font-heading text-3xl md:text-5xl font-bold leading-tight">
						{data.heading}
					</h2>
				</SVGMaskReveal>

				{/* Animated gradient bar */}
				<div ref={barRef} className="mt-8 mb-8">
					<motion.div
						className="h-px w-full"
						initial={{ scaleX: 0 }}
						animate={isInView ? { scaleX: 1 } : {}}
						transition={{
							duration: 1.2,
							ease: [0.16, 1, 0.3, 1],
						}}
						style={{
							transformOrigin: "left",
							background:
								"linear-gradient(to right, var(--color-accent-indigo), var(--color-accent-cyan))",
						}}
					/>
				</div>

				<FadeInView>
					<p className="font-body text-xl text-text-secondary leading-relaxed">
						{data.subtitle}
					</p>
				</FadeInView>

				<FadeInView delay={0.1}>
					<p className="font-body text-lg text-text-secondary leading-relaxed mt-6">
						{data.paragraphs[0]}
					</p>
				</FadeInView>

				{/* Principles list */}
				<div className="mt-6 space-y-3">
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

				<FadeInView delay={0.6} className="mt-10">
					<p className="font-heading text-2xl md:text-3xl font-semibold text-text-primary">
						The goal is not volume alone, but{" "}
						<span className="text-accent-indigo">
							useful experience
						</span>
						.
					</p>
				</FadeInView>
			</div>
		</section>
	);
}
