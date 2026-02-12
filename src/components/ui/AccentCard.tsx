"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import type { ProductVector } from "~/lib/content";

interface AccentCardProps {
	vector: ProductVector;
	index: number;
}

const accentStyles = {
	blue: {
		border: "border-accent-blue/20 hover:border-accent-blue/40",
		glow: "hover:shadow-[0_0_60px_-15px_rgba(60,149,231,0.3)]",
		dot: "bg-accent-blue",
		number: "text-accent-blue",
	},
	warm: {
		border: "border-accent-warm/20 hover:border-accent-warm/40",
		glow: "hover:shadow-[0_0_60px_-15px_rgba(169,151,136,0.3)]",
		dot: "bg-accent-warm",
		number: "text-accent-warm",
	},
	sky: {
		border: "border-accent-sky/20 hover:border-accent-sky/40",
		glow: "hover:shadow-[0_0_60px_-15px_rgba(45,172,239,0.3)]",
		dot: "bg-accent-sky",
		number: "text-accent-sky",
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

			<h3 className="font-heading mt-4 text-text-primary">
				{vector.title}
			</h3>

			<h6 className="font-mono tracking-wide text-text-muted mt-2 uppercase">
				{vector.tagline}
			</h6>

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
