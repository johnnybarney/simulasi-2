"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      const step = Math.random() * 18 + 4;
      current = Math.min(current + step, 100);
      setProgress(Math.floor(current));
      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => setHidden(true), 600);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  if (hidden) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-opacity duration-500"
      style={{ opacity: progress >= 100 ? 0 : 1 }}
    >
      <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-white/30">
        LOADING...
      </p>
      <p
        className="mt-2 font-display text-[8rem] font-bold leading-none text-white"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        {progress}
      </p>
      <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-white/30">
        %
      </p>
    </div>
  );
}
