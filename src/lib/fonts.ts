import { Space_Grotesk, Source_Serif_4, Geist_Mono } from "next/font/google";

export const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	variable: "--font-space-grotesk",
	display: "swap",
	weight: ["400", "500", "600", "700"],
});

export const sourceSerif = Source_Serif_4({
	subsets: ["latin"],
	variable: "--font-source-serif",
	display: "swap",
	weight: ["400", "600"],
	style: ["normal", "italic"],
});

export const geistMono = Geist_Mono({
	subsets: ["latin"],
	variable: "--font-geist-mono",
});
