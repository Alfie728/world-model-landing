"use client";

import { createContext, useContext } from "react";
import type { MotionValue } from "motion/react";

interface ScrollContextValue {
	scrollYProgress: MotionValue<number>;
	totalPanels: number;
}

export const ScrollContext = createContext<ScrollContextValue | null>(null);

export function useScrollContext() {
	const ctx = useContext(ScrollContext);
	if (!ctx) {
		throw new Error("useScrollContext must be used within HorizontalScroll");
	}
	return ctx;
}
