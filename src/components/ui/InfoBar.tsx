"use client";

import { useEffect, useState } from "react";

export function InfoBar() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    function tick() {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "America/Los_Angeles",
        }),
      );
    }
    tick();
    const id = setInterval(tick, 10_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex w-full items-center justify-between border-border-subtle border-t bg-surface-base/95 px-6 py-4 md:px-12">
      <h6
        className="text-text-muted uppercase tracking-widest"
        style={{ fontSize: "13px", fontWeight: 400, letterSpacing: "0.08em" }}
      >
        Arcterra Labs
      </h6>

      <h6
        className="hidden text-text-muted md:block"
        style={{ fontSize: "13px", fontWeight: 300 }}
      >
        Real-World AI Research
      </h6>

      <div className="flex items-center gap-3">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-blue opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-blue" />
        </span>
        <span className="font-mono text-text-muted text-xs tracking-wider">
          {time || "--:--"} PT
        </span>
      </div>

      <a
        href="#contact"
        className="cursor-pointer rounded-full border border-border-subtle px-5 py-1.5 font-heading text-text-muted transition-colors hover:border-text-muted hover:text-text-primary"
        style={{ fontSize: "13px", fontWeight: 400 }}
      >
        Contact
      </a>
    </div>
  );
}
