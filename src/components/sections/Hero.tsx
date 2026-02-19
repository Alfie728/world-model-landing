"use client";

import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { content } from "~/lib/content";

const words = content.hero.heading.split(" ");
const carouselWords = content.hero.carouselWords;

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const advance = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % carouselWords.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(advance, 3000);
    return () => clearInterval(interval);
  }, [advance]);

  return (
    <section
      className="relative z-10 flex flex-col items-center justify-center"
      style={{ height: "calc(100vh - var(--nav-height))" }}
    >
      {/* Content */}
      <div className="max-w-5xl px-6 text-center">
        {/* Heading — static part */}
        <h1 className="font-heading">
          {words.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              className="mr-[0.25em] inline-block"
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

          {/* Carousel word — always on its own line */}
          <motion.span
            className="relative block overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3 + words.length * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={carouselWords[currentIndex]}
                className="block text-accent-blue"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {carouselWords[currentIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.span>
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
