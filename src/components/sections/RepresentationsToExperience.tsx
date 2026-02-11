"use client";

import { SVGMaskReveal } from "~/components/animations/SVGMaskReveal";
import { FadeInView } from "~/components/animations/FadeInView";
import { content } from "~/lib/content";

const data = content.representationsToExperience;

export function RepresentationsToExperience() {
	return (
		<section className="flex-shrink-0 w-screen h-screen flex flex-col justify-center px-8 md:px-20 max-md:w-full max-md:min-h-screen max-md:py-24">
			<span className="font-mono text-sm tracking-widest text-text-muted">
				{data.number}
			</span>

			{/* Pull quote */}
			<SVGMaskReveal className="mt-6">
				<blockquote className="font-body italic text-2xl md:text-4xl lg:text-5xl text-text-primary leading-snug max-w-4xl">
					&ldquo;{data.pullQuote}&rdquo;
				</blockquote>
			</SVGMaskReveal>

			{/* Body + bullets */}
			<div className="mt-12 max-w-3xl">
				<FadeInView>
					<p className="font-body text-lg text-text-secondary leading-relaxed">
						{data.paragraphs[0]}
					</p>
				</FadeInView>

				<ul className="mt-6 space-y-3">
					{data.bullets.map((bullet, i) => (
						<FadeInView key={bullet} delay={0.1 + i * 0.08}>
							<li className="flex items-start gap-3">
								<span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2.5 flex-shrink-0" />
								<span className="font-body text-lg text-text-secondary leading-relaxed">
									{bullet}
								</span>
							</li>
						</FadeInView>
					))}
				</ul>

				<FadeInView delay={0.5} className="mt-8">
					<p className="font-body text-lg text-text-secondary leading-relaxed">
						{data.closing}
					</p>
				</FadeInView>
			</div>
		</section>
	);
}
