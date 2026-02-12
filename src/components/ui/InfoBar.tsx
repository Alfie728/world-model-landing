"use client";

import { useEffect, useState } from "react";

export function InfoBar() {
	const [time, setTime] = useState<string>("");

	useEffect(() => {
		function tick() {
			const now = new Date();
			setTime(
				now.toLocaleTimeString("en-US", {
					hour: "2-digit",
					minute: "2-digit",
					hour12: false,
					timeZone: "America/Los_Angeles",
				}),
			);
		}
		tick();
		const id = setInterval(tick, 10_000);
		return () => clearInterval(id);
	}, []);

	return (
		<div className="flex items-center justify-between px-6 md:px-12 py-4 w-full border-t border-border-subtle bg-surface-base/95">
			<h6 className="text-text-muted tracking-widest uppercase" style={{ fontSize: "13px", fontWeight: 400, letterSpacing: "0.08em" }}>
				Frontier AI Research Lab
			</h6>

			<h6 className="text-text-muted hidden md:block" style={{ fontSize: "13px", fontWeight: 300 }}>
				Building World Models
			</h6>

			<div className="flex items-center gap-3">
				<span className="relative flex h-2 w-2">
					<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-blue opacity-75" />
					<span className="relative inline-flex h-2 w-2 rounded-full bg-accent-blue" />
				</span>
				<span className="font-mono text-xs text-text-muted tracking-wider">
					{time || "--:--"} PT
				</span>
			</div>

			<a
				href="#contact"
				className="font-heading text-text-muted hover:text-text-primary transition-colors cursor-pointer border border-border-subtle hover:border-text-muted rounded-full px-5 py-1.5"
				style={{ fontSize: "13px", fontWeight: 400 }}
			>
				Contact
			</a>
		</div>
	);
}
