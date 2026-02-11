"use client";

import { SVGMaskReveal } from "~/components/animations/SVGMaskReveal";
import { FadeInView } from "~/components/animations/FadeInView";
import { content } from "~/lib/content";

const data = content.representationsToExperience;

export function RepresentationsToExperience() {
	return (
		<div className="flex-shrink-0 h-full flex flex-col justify-center pr-[12vw] pl-[6vw] max-md:w-full max-md:min-h-screen max-md:px-8 max-md:py-24">
			<div className="w-[50vw] max-md:w-full">
				<span className="font-mono text-sm tracking-widest text-text-muted">
					{data.number}
				</span>

				{/* Pull quote */}
				<SVGMaskReveal className="mt-6">
					<blockquote className="font-body italic text-2xl md:text-3xl lg:text-[2.75rem] lg:leading-snug text-text-primary max-w-3xl">
						&ldquo;{data.pullQuote}&rdquo;
					</blockquote>
				</SVGMaskReveal>

				{/* Body + bullets */}
				<div className="mt-10 max-w-2xl">
					<FadeInView>
						<p className="font-body text-base text-text-secondary leading-relaxed">
							{data.paragraphs[0]}
						</p>
					</FadeInView>

					<ul className="mt-5 space-y-2.5">
						{data.bullets.map((bullet, i) => (
							<FadeInView key={bullet} delay={0.1 + i * 0.06}>
								<li className="flex items-start gap-3">
									<span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 flex-shrink-0" />
									<span className="font-body text-base text-text-secondary leading-relaxed">
										{bullet}
									</span>
								</li>
							</FadeInView>
						))}
					</ul>

					<FadeInView delay={0.4} className="mt-6">
						<p className="font-body text-base text-text-secondary leading-relaxed">
							{data.closing}
						</p>
					</FadeInView>
				</div>
			</div>
		</div>
	);
}
