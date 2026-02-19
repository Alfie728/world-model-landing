"use client";

import { motion } from "motion/react";

export function Navbar() {
  return (
    <motion.nav
      className="flex items-center justify-between bg-transparent px-6 md:px-12 py-5"
      style={{ height: "var(--nav-height)" }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="font-heading text-sm font-semibold tracking-wide text-text-primary uppercase">
        Arcterra
      </div>
      <div className="flex items-center gap-8">
        <a
          href="#research"
          className="font-heading text-text-muted hover:text-text-primary transition-colors cursor-pointer border-b border-transparent hover:border-text-primary pb-1"
          style={{ fontSize: "16px", fontWeight: 300 }}
        >
          Research
        </a>
        <a
          href="#contact"
          className="font-heading text-text-muted hover:text-text-primary transition-colors cursor-pointer border-b border-transparent hover:border-text-primary pb-1"
          style={{ fontSize: "16px", fontWeight: 300 }}
        >
          Contact
        </a>
      </div>
    </motion.nav>
  );
}
