"use client";

import { motion } from "motion/react";
import { content } from "~/lib/content";

const words = content.hero.heading.split(" ");

export function Hero() {
  return (
    <section
      className="relative z-10 flex flex-col items-center justify-center"
      style={{ height: "calc(100vh - var(--nav-height))" }}
    >
      {/* Content */}
      <div className="max-w-5xl px-6 text-center">
        {/* Heading */}
        <h1 className="font-heading">
          {words.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              className={`mr-[0.25em] inline-block ${
                word === "Era" || word === "Experience"
                  ? "text-accent-blue"
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
        <motion.h4
          className="mx-auto mt-8 max-w-2xl font-body text-text-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {content.hero.subtitle}
        </motion.h4>
      </div>
    </section>
  );
}
