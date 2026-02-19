"use client";

import { m } from "motion/react";

export function Navbar() {
  return (
    <m.nav
      className="flex items-center justify-between bg-transparent px-6 py-5 md:px-12"
      style={{ height: "var(--nav-height)" }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="font-heading font-semibold text-sm text-text-primary uppercase tracking-wide">
        Arcterra
      </div>
      <div className="flex items-center gap-8">
        <a
          href="#research"
          className="cursor-pointer border-transparent border-b pb-1 font-heading text-text-muted transition-colors hover:border-text-primary hover:text-text-primary"
          style={{ fontSize: "16px", fontWeight: 300 }}
        >
          Research
        </a>
        <a
          href="#contact"
          className="cursor-pointer border-transparent border-b pb-1 font-heading text-text-muted transition-colors hover:border-text-primary hover:text-text-primary"
          style={{ fontSize: "16px", fontWeight: 300 }}
        >
          Contact
        </a>
      </div>
    </m.nav>
  );
}
