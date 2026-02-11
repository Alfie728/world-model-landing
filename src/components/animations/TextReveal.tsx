"use client";

import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";

interface TextRevealProps {
	children: ReactNode;
	staggerDelay?: number;
	className?: string;
	as?: "p" | "span" | "h2" | "h3";
}

export function TextReveal({
	children,
	staggerDelay = 0.03,
	className,
}: TextRevealProps) {
	const divRef = useRef<HTMLDivElement>(null);
	const spanRef = useRef<HTMLSpanElement>(null);

	const isStringChildren = typeof children === "string";
	const isInView = useInView(isStringChildren ? spanRef : divRef, {
		once: true,
		margin: "-5%",
	});

	if (!isStringChildren) {
		return (
			<motion.div
				ref={divRef}
				className={className}
				initial={{ opacity: 0, y: 30 }}
				animate={isInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
			>
				{children}
			</motion.div>
		);
	}

	const words = children.split(" ");

	return (
		<span ref={spanRef} className={className}>
			{words.map((word, i) => (
				<motion.span
					key={`${word}-${i}`}
					className="inline-block mr-[0.25em]"
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{
						duration: 0.6,
						delay: i * staggerDelay,
						ease: [0.16, 1, 0.3, 1],
					}}
				>
					{word}
				</motion.span>
			))}
		</span>
	);
}
