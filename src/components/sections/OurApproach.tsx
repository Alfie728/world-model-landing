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
			{/* Centered content block (original position) */}
			<div className="absolute top-[20vh] left-[50%] -translate-x-1/2 w-fit max-w-[40vw] z-[2] max-md:static max-md:translate-x-0 max-md:max-w-none">
				<span className="font-mono text-sm tracking-widest text-text-muted">
					{data.number}
				</span>

				<SVGMaskReveal className="mt-4">
					{/* h1: 95px/109px/300 — last slide uses h1 like Offground slide-4 */}
					<h1>{data.heading}</h1>
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
					{/* h3: 28px/34px/500 */}
					<h3 className="text-text-secondary" style={{ fontWeight: 300 }}>
						{data.subtitle}
					</h3>
				</FadeInView>

				<FadeInView delay={0.1}>
					<h5 className="text-text-secondary mt-5">
						{data.paragraphs[0]}
					</h5>
				</FadeInView>

				<div className="mt-5 space-y-2.5">
					{data.bullets.map((bullet, i) => (
						<FadeInView key={bullet} delay={0.2 + i * 0.06}>
							<div className="flex items-start gap-3">
								<span className="w-1.5 h-1.5 rounded-full bg-accent-indigo mt-2 flex-shrink-0" />
								<h5 className="text-text-secondary">
									{bullet}
								</h5>
							</div>
						</FadeInView>
					))}
				</div>

				<FadeInView delay={0.5} className="mt-8">
					{/* h3: 28px/34px/500 — closing statement */}
					<h3 className="font-heading text-text-primary">
						The goal is not volume alone, but{" "}
						<span className="text-accent-indigo">
							useful experience
						</span>
						.
					</h3>
				</FadeInView>
			</div>
		</div>
	);
}
