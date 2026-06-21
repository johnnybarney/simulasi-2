"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";

const gradStyle = {
  background: "linear-gradient(90deg, #00e5ff 0%, #0047ff 60%, #6600cc 100%)",
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <Container className="text-center">
        <p className="mb-4 font-mono text-[11px] tracking-[0.4em] uppercase text-white/50">/ System Error</p>
        <h1 className="font-display font-bold leading-tight" style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "clamp(3rem, 8vw, 7rem)" }}>
          <span className="block text-white">Something</span>
          <span style={gradStyle}>/ went wrong /</span>
        </h1>
        <p className="mx-auto mt-6 max-w-sm font-mono text-xs text-white/40">
          An unexpected error occurred. Try again or return to the homepage.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button onClick={reset} className="border border-white/20 px-8 py-4 font-mono text-[11px] tracking-[0.3em] uppercase text-white/60 hover:border-white hover:text-white transition-all duration-300">
            Try Again /
          </button>
          <Link href="/" className="border border-white/10 px-8 py-4 font-mono text-[11px] tracking-[0.3em] uppercase text-white/50 hover:border-white/30 hover:text-white/60 transition-all duration-300">
            Home /
          </Link>
        </div>
      </Container>
    </div>
  );
}
