"use client";

import type { LenisRef } from "lenis/react";
import { ReactLenis } from "lenis/react";
import { cancelFrame, frame } from "motion";
import { type ReactNode, useEffect, useRef } from "react";

export function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      lenisRef.current?.lenis?.raf(data.timestamp);
    }

    frame.update(update, true);
    return () => cancelFrame(update);
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
}
