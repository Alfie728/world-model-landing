"use client";

import { motion, useScroll } from "motion/react";

export function ScrollProgress() {
	const { scrollYProgress } = useScroll();

	return (
		<motion.div
			className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60]"
			style={{
				scaleX: scrollYProgress,
				background: "linear-gradient(to right, var(--color-accent-blue), var(--color-accent-sky))",
			}}
		/>
	);
}
