"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useMediaQuery } from "~/lib/hooks/useMediaQuery";
import { ScrollContext } from "~/components/providers/ScrollContext";

interface HorizontalScrollProps {
	children: ReactNode;
}

const TOTAL_VW = 600;
const PANEL_COUNT = 6;

export function HorizontalScroll({ children }: HorizontalScrollProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const isMobile = useMediaQuery("(max-width: 767px)");

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	const smoothProgress = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	const x = useTransform(
		smoothProgress,
		[0, 1],
		["0vw", `-${TOTAL_VW - 100}vw`],
	);

	if (isMobile) {
		return (
			<ScrollContext.Provider
				value={{ scrollYProgress, totalPanels: PANEL_COUNT }}
			>
				<div className="flex flex-col">{children}</div>
			</ScrollContext.Provider>
		);
	}

	return (
		<ScrollContext.Provider
			value={{ scrollYProgress, totalPanels: PANEL_COUNT }}
		>
			<div
				ref={containerRef}
				style={{ height: `${TOTAL_VW}vh` }}
			>
				<div className="sticky top-0 h-screen overflow-hidden">
					<motion.div
						style={{ x }}
						className="flex h-full will-change-transform"
					>
						{children}
					</motion.div>
				</div>
			</div>
		</ScrollContext.Provider>
	);
}
