import type { Metadata } from "next";
import { SmoothScroll } from "~/components/providers/SmoothScroll";
import { instrumentSerif, inter, jetbrainsMono, syne } from "~/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arcterra | Planet-Scale Data for the Real World",
  description:
    "A real-world AI research lab building world model data, robotics data, and custom capture hardware for embodied intelligence.",
  metadataBase: new URL("https://www.arcterra.ai"),
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
