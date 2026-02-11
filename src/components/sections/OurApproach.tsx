"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { FadeInView } from "~/components/animations/FadeInView";
import { SVGMaskReveal } from "~/components/animations/SVGMaskReveal";
import { content } from "~/lib/content";

const data = content.approach;

export function OurApproach() {
	const barRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(barRef, { once: true, margin: "-10%" });

	return (
		<div className="min-w-[100vw] w-[100vw] h-full flex-shrink-0 relative flex items-center justify-center max-md:w-full max-md:relative max-md:min-h-screen max-md:py-24 max-md:px-6">
			{/* Centered content block */}
			<div className="absolute top-[20vh] left-[50%] -translate-x-1/2 w-fit max-w-[40vw] z-[2] max-md:static max-md:translate-x-0 max-md:max-w-none">
				<span className="font-mono text-sm tracking-widest text-text-muted">
					{data.number}
				</span>

				<SVGMaskReveal className="mt-4">
					<h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
						{data.heading}
					</h2>
				</SVGMaskReveal>

				{/* Animated gradient bar */}
				<div ref={barRef} className="mt-6 mb-6">
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
						<FadeInView key={bullet} delay={0.2 + i * 0.06}>
							<div className="flex items-start gap-3">
								<span className="w-1.5 h-1.5 rounded-full bg-accent-indigo mt-2 flex-shrink-0" />
								<span className="font-body text-base text-text-secondary leading-relaxed">
									{bullet}
								</span>
							</div>
						</FadeInView>
					))}
				</div>

				<FadeInView delay={0.5} className="mt-8">
					<p className="font-heading text-xl md:text-2xl font-semibold text-text-primary">
						The goal is not volume alone, but{" "}
						<span className="text-accent-indigo">
							useful experience
						</span>
						.
					</p>
				</FadeInView>
			</div>
		</div>
	);
}
