"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import type { ProductVector } from "~/lib/content";

interface AccentCardProps {
	vector: ProductVector;
	index: number;
}

const accentStyles = {
	indigo: {
		border: "border-accent-indigo/20 hover:border-accent-indigo/40",
		glow: "hover:shadow-[0_0_60px_-15px_rgba(99,102,241,0.3)]",
		dot: "bg-accent-indigo",
		number: "text-accent-indigo",
	},
	cyan: {
		border: "border-accent-cyan/20 hover:border-accent-cyan/40",
		glow: "hover:shadow-[0_0_60px_-15px_rgba(34,211,238,0.3)]",
		dot: "bg-accent-cyan",
		number: "text-accent-cyan",
	},
	violet: {
		border: "border-accent-violet/20 hover:border-accent-violet/40",
		glow: "hover:shadow-[0_0_60px_-15px_rgba(139,92,246,0.3)]",
		dot: "bg-accent-violet",
		number: "text-accent-violet",
	},
};

export function AccentCard({ vector, index }: AccentCardProps) {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true, margin: "-10%" });
	const styles = accentStyles[vector.accent];

	return (
		<motion.div
			ref={ref}
			className={`flex flex-col p-8 md:p-10 rounded-2xl border ${styles.border} ${styles.glow} bg-surface-raised/50 backdrop-blur-sm transition-all duration-500 cursor-pointer w-full md:w-[30vw] md:min-w-[380px] flex-shrink-0`}
			initial={{ opacity: 0, y: 40 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			transition={{
				duration: 0.8,
				delay: index * 0.15,
				ease: [0.16, 1, 0.3, 1],
			}}
		>
			<span
				className={`font-mono text-sm tracking-widest ${styles.number}`}
			>
				{vector.number}
			</span>

			<h3 className="font-heading text-2xl md:text-3xl font-bold mt-4 text-text-primary">
				{vector.title}
			</h3>

			<p className="font-mono text-xs tracking-wide text-text-muted mt-2 uppercase">
				{vector.tagline}
			</p>

			<p className="font-body text-base text-text-secondary leading-relaxed mt-6">
				{vector.description}
			</p>

			<ul className="mt-6 space-y-3">
				{vector.bullets.map((bullet) => (
					<li key={bullet} className="flex items-start gap-3">
						<span
							className={`w-1.5 h-1.5 rounded-full ${styles.dot} mt-2 flex-shrink-0`}
						/>
						<span className="font-body text-sm text-text-secondary leading-relaxed">
							{bullet}
						</span>
					</li>
				))}
			</ul>

			<p className="font-body text-sm text-text-muted leading-relaxed mt-6 italic">
				{vector.closing}
			</p>
		</motion.div>
	);
}
