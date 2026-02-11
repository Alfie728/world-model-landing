"use client";

import { Children, type ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useMediaQuery } from "~/lib/hooks/useMediaQuery";

interface HorizontalScrollProps {
	children: ReactNode;
}

export function HorizontalScroll({ children }: HorizontalScrollProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const isMobile = useMediaQuery("(max-width: 1024px)");
	const slideCount = Children.count(children);

	// Match reference: wrapper height = slideCount * 100vh
	const wrapperHeight = `${slideCount * 100}vh`;

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	// Translate from 0 to -(slideCount - 1) * 100vw
	const x = useTransform(
		scrollYProgress,
		[0, 1],
		["0vw", `${-(slideCount - 1) * 100}vw`],
	);

	if (isMobile) {
		return <div className="flex flex-col">{children}</div>;
	}

	return (
		<div className="relative bg-surface-base" ref={containerRef} style={{ height: wrapperHeight }}>
			{/* Sticky viewport — matches reference .sticky-layer */}
			<div className="sticky top-0 left-0 h-screen w-full overflow-hidden">
				{/* Slides wrapper — absolute fill, matches .slides-wrapper */}
				<div className="absolute inset-0 w-full h-full">
					{/* Slides container — flex row, translated, matches .slides-container */}
					<motion.div
						style={{ x }}
						className="flex flex-nowrap h-full will-change-transform"
					>
						{children}
					</motion.div>
				</div>
			</div>
		</div>
	);
}
