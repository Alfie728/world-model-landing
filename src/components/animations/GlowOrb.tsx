"use client";

import { motion } from "motion/react";

interface GlowOrbProps {
	color: "indigo" | "cyan" | "violet";
	size?: number;
	className?: string;
}

const colorMap = {
	indigo: "bg-accent-indigo/20",
	cyan: "bg-accent-cyan/15",
	violet: "bg-accent-violet/15",
};

export function GlowOrb({ color, size = 400, className = "" }: GlowOrbProps) {
	return (
		<motion.div
			className={`absolute rounded-full ${colorMap[color]} blur-[120px] pointer-events-none ${className}`}
			style={{ width: size, height: size }}
			animate={{
				x: [0, 30, -20, 0],
				y: [0, -20, 10, 0],
				scale: [1, 1.1, 0.95, 1],
			}}
			transition={{
				duration: 20,
				repeat: Number.POSITIVE_INFINITY,
				ease: "linear",
			}}
			aria-hidden="true"
		/>
	);
}
