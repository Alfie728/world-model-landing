import type { Metadata } from "next";
import { SmoothScroll } from "~/components/providers/SmoothScroll";
import { instrumentSerif, inter, jetbrainsMono, syne } from "~/lib/fonts";
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
        className={`${syne.variable} ${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} bg-surface-base text-text-primary antialiased`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
