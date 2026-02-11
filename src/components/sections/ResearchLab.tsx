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
		<div className="min-w-[100vw] w-[100vw] h-full flex-shrink-0 relative flex items-center justify-center max-md:w-full max-md:relative max-md:min-h-screen max-md:py-24 max-md:px-6">
			{/* Heading — top left */}
			<div
				ref={lineRef}
				className="absolute top-[28vh] left-[8vw] w-fit max-w-[40vw] z-[2] max-md:static max-md:max-w-none"
			>
				<span className="font-mono text-sm tracking-widest text-text-muted">
					{data.number}
				</span>

				<SVGMaskReveal className="mt-4">
					<h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
						{data.heading}
					</h2>
				</SVGMaskReveal>

				<motion.div
					className="h-px w-full mt-6"
					initial={{ scaleX: 0 }}
					animate={isInView ? { scaleX: 1 } : {}}
					transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
					style={{
						transformOrigin: "left",
						background:
							"linear-gradient(to right, var(--color-border-subtle), transparent)",
					}}
				/>

				<FadeInView className="mt-6">
					<p className="font-body text-lg text-text-secondary leading-relaxed">
						{data.subtitle}
					</p>
				</FadeInView>
			</div>

			{/* Bullets — bottom right */}
			<div className="absolute bottom-[12vh] right-[10vw] w-fit max-w-[30vw] z-[2] max-md:static max-md:max-w-none max-md:mt-8">
				<FadeInView>
					<p className="font-body text-base text-text-secondary leading-relaxed">
						{data.paragraphs[0]}
					</p>
				</FadeInView>

				<div className="mt-5 space-y-2.5">
					{data.bullets.map((bullet, i) => (
						<FadeInView key={bullet} delay={0.1 + i * 0.06}>
							<div className="flex items-start gap-3">
								<span className="w-1.5 h-1.5 rounded-full bg-accent-indigo mt-2 flex-shrink-0" />
								<span className="font-body text-base text-text-secondary leading-relaxed">
									{bullet}
								</span>
							</div>
						</FadeInView>
					))}
				</div>

				<FadeInView delay={0.4} className="mt-6">
					<p className="font-mono text-sm tracking-wide text-text-muted">
						{data.closing}
					</p>
				</FadeInView>
			</div>
		</div>
	);
}
