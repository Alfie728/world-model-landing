import type { Metadata } from "next";
import { syne, inter, jetbrainsMono, instrumentSerif } from "~/lib/fonts";
import { SmoothScroll } from "~/components/providers/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
	title: "World Model | Planet-Scale Data for the Era of Experience",
	description:
		"A frontier AI research lab building world model data, robotics data, and custom hardware for embodied intelligence.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body
				className={`${syne.variable} ${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} antialiased bg-surface-base text-text-primary`}
			>
				<SmoothScroll>{children}</SmoothScroll>
			</body>
		</html>
	);
}
