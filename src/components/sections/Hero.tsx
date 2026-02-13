"use client";

import { motion } from "motion/react";
import { content } from "~/lib/content";

const words = content.hero.heading.split(" ");

export function Hero() {
  return (
    <section
      className="flex flex-col items-center justify-center"
      style={{ height: "calc(100vh - var(--nav-height))" }}
    >
      {/* Content */}
      <div className="text-center max-w-5xl px-6">
        {/* Heading */}
        <h1 className="font-heading">
          {words.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              className={`inline-block mr-[0.25em] ${
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
          className="mt-8 text-text-secondary font-body max-w-2xl mx-auto"
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
