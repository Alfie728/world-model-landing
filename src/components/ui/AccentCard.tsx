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
			className={`flex flex-col p-7 md:p-8 rounded-2xl border ${styles.border} ${styles.glow} bg-surface-raised/50 backdrop-blur-sm transition-all duration-500 cursor-pointer flex-1 min-w-0 overflow-hidden`}
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

			{/* h3: 28px/34px/500 from Offground */}
			<h3 className="font-heading mt-4 text-text-primary">
				{vector.title}
			</h3>

			<h6 className="font-mono tracking-wide text-text-muted mt-2 uppercase">
				{vector.tagline}
			</h6>

			{/* h5: 18px/24px/300 from Offground */}
			<h5 className="text-text-secondary mt-5">
				{vector.description}
			</h5>

			<ul className="mt-4 space-y-1.5">
				{vector.bullets.map((bullet) => (
					<li key={bullet} className="flex items-start gap-3">
						<span
							className={`w-1.5 h-1.5 rounded-full ${styles.dot} mt-2 flex-shrink-0`}
						/>
						<span className="text-text-secondary" style={{ fontSize: "16px", lineHeight: "26px", fontWeight: 400 }}>
							{bullet}
						</span>
					</li>
				))}
			</ul>

			<p className="text-text-muted mt-4 italic" style={{ fontSize: "14px", lineHeight: "20px", fontWeight: 300 }}>
				{vector.closing}
			</p>
		</motion.div>
	);
}
