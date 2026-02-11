"use client";

import { motion } from "motion/react";
import { GlowOrb } from "~/components/animations/GlowOrb";
import { content } from "~/lib/content";

const words = content.hero.heading.split(" ");

export function Hero() {
	return (
		<section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
			{/* Background gradient */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-surface-raised)_0%,_var(--color-surface-base)_70%)]" />

			{/* Subtle grid */}
			<div
				className="absolute inset-0 opacity-[0.03]"
				style={{
					backgroundImage:
						"radial-gradient(circle, var(--color-text-muted) 1px, transparent 1px)",
					backgroundSize: "40px 40px",
				}}
			/>

			{/* Glow orbs */}
			<GlowOrb
				color="indigo"
				size={500}
				className="top-1/4 right-1/4 -translate-x-1/2"
			/>
			<GlowOrb
				color="cyan"
				size={350}
				className="bottom-1/3 left-1/4 translate-x-1/2"
			/>

			{/* Content */}
			<div className="relative z-10 text-center max-w-5xl px-6">
				{/* Badge */}
				<motion.div
					className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-subtle bg-surface-raised/50 backdrop-blur-sm mb-8"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.8,
						delay: 0.1,
						ease: [0.16, 1, 0.3, 1],
					}}
				>
					<span className="w-1.5 h-1.5 rounded-full bg-accent-indigo animate-pulse" />
					<span className="font-mono text-xs tracking-widest text-text-muted uppercase">
						{content.hero.badge}
					</span>
				</motion.div>

				{/* Heading — word-by-word reveal */}
				<h1 className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[0.95]">
					{words.map((word, i) => (
						<motion.span
							key={`${word}-${i}`}
							className={`inline-block mr-[0.25em] ${
								word === "Era" || word === "Experience"
									? "text-accent-indigo"
									: ""
							}`}
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.8,
								delay: 0.3 + i * 0.06,
								ease: [0.16, 1, 0.3, 1],
							}}
						>
							{word}
						</motion.span>
					))}
				</h1>

				{/* Subtitle */}
				<motion.p
					className="mt-8 text-text-secondary text-lg md:text-xl max-w-2xl mx-auto font-body leading-relaxed"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.8,
						delay: 0.9,
						ease: [0.16, 1, 0.3, 1],
					}}
				>
					{content.hero.subtitle}
				</motion.p>
			</div>

			{/* Scroll indicator */}
			<motion.div
				className="absolute bottom-12 flex flex-col items-center gap-2"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.5, duration: 1 }}
			>
				<span className="font-mono text-[10px] tracking-widest text-text-muted uppercase">
					Scroll
				</span>
				<motion.div
					className="w-px h-8 bg-gradient-to-b from-text-muted to-transparent"
					animate={{ y: [0, 8, 0] }}
					transition={{
						duration: 2,
						repeat: Number.POSITIVE_INFINITY,
						ease: "easeInOut",
					}}
				/>
			</motion.div>
		</section>
	);
}
