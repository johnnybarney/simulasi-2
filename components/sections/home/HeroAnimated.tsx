"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { routes } from "@/lib/navigation";
import { homeContent } from "@/lib/constants/home";

const DISPLAY = "'Clash Display', sans-serif";
const BODY    = "var(--font-chakra), 'Chakra Petch', sans-serif";
const ACCENT  = "#00c5cd";

/* gradient for the accent line — bright teal → white for legibility on video */
const gradStyle: React.CSSProperties = {
  background: `linear-gradient(90deg, #00e8f0 0%, ${ACCENT} 45%, #ffffff 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

/* 3 headline lines */
const L1 = "AI-DRIVEN";
const L2 = "WARFARE SIMULATION";

/* blinking cursor — defined outside component so React doesn't recreate it */
function TypeCursor() {
  return (
    <span
      className="inline-block align-middle animate-pulse"
      style={{
        width: "0.05em",
        height: "0.82em",
        background: ACCENT,
        marginLeft: "0.08em",
        verticalAlign: "middle",
      }}
    />
  );
}

/* typing speed (ms per char) */
const SPD = 55;

export function HeroAnimated() {
  const [showVideo, setShowVideo] = useState(false);
  /* 0 = welcome  1 = type L1  2 = type L2  3 = type L3  4 = done */
  const [phase,  setPhase]  = useState(0);
  const [chars1, setChars1] = useState(0);
  const [chars2, setChars2] = useState(0);

  useEffect(() => {
    /* video fade-in — triggered by onCanPlay instead of a fixed timer */
    const vt = setTimeout(() => setShowVideo(true), 100); // fallback

    /* helper: type a string then run a callback */
    function typeString(
      length: number,
      setter: (n: number) => void,
      onDone: () => void,
    ) {
      let c = 0;
      const t = setInterval(() => {
        c++;
        setter(c);
        if (c >= length) { clearInterval(t); onDone(); }
      }, SPD);
    }

    /* chain: welcome → L1 → L2 → done */
    const p0 = setTimeout(() => {
      setPhase(1);
      typeString(L1.length, setChars1, () => {
        setTimeout(() => {
          setPhase(2);
          typeString(L2.length, setChars2, () => {
            setTimeout(() => setPhase(4), 400);
          });
        }, 200);
      });
    }, 800);

    return () => { clearTimeout(vt); clearTimeout(p0); };
  }, []);

  return (
    <section className="theme-hero relative flex h-screen items-end overflow-hidden">

      {/* ── video background ── */}
      <video
        autoPlay loop muted playsInline
        preload="auto"
        onCanPlay={() => setShowVideo(true)}
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1800ms]"
        style={{ opacity: showVideo ? 0.85 : 0, objectPosition: "center center" }}
      >
        <source src="/images/landing4k.mp4" type="video/mp4" />
      </video>

      {/* ── overlays ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.1) 100%)" }}
      />
      {/* teal glow blob */}
      <div
        className="pointer-events-none absolute top-0 right-0 h-[700px] w-[700px] rounded-full opacity-[0.07] blur-[140px]"
        style={{ background: ACCENT, transform: "translate(30%, -30%)" }}
      />
      {/* second subtle glow bottom-left */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full opacity-[0.06] blur-[100px]"
        style={{ background: ACCENT, transform: "translate(-20%, 20%)" }}
      />

      {/* ── content ── */}
      <Container className="relative pb-24 pt-36">

        {/* eyebrow */}
        <div
          className="mb-10 flex items-center gap-4 transition-all duration-700"
          style={{ opacity: phase >= 0 ? 1 : 0, transform: phase >= 0 ? "none" : "translateY(12px)" }}
        >
          <span className="h-px w-10 block" style={{ background: ACCENT, boxShadow: `0 0 8px ${ACCENT}88` }} />
          <p
            className="text-[11px] tracking-[0.55em] uppercase"
            style={{ fontFamily: BODY, color: "#00e8f0", textShadow: "0 0 18px rgba(0,232,240,0.35)" }}
          >
            Welcome to Simulasi
          </p>
          <span className="h-px flex-1 block opacity-[0.55]" style={{ background: ACCENT, boxShadow: `0 0 6px ${ACCENT}66` }} />
        </div>

        {/* ── headline ── */}
        <h1
          style={{
            fontFamily: DISPLAY,
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-0.01em",
            fontSize: "clamp(2.4rem, 7.5vw, 6rem)",
          }}
        >
          {/* L1: AI-DRIVEN — gradient accent */}
          <span className="block mb-1" style={{ minHeight: "1.05em" }}>
            {chars1 > 0 && (
              <span style={gradStyle}>
                {L1.slice(0, chars1)}
              </span>
            )}
            {phase === 1 && <TypeCursor />}
          </span>

          {/* L2: WARFARE SIMULATION — white */}
          <span className="block text-white mb-1">
            {L2.slice(0, chars2)}
            {phase === 2 && <TypeCursor />}
          </span>

        </h1>

        {/* ── divider line ── */}
        <div
          className="mt-10 mb-0 transition-all duration-700"
          style={{ opacity: phase >= 4 ? 1 : 0 }}
        >
          <div className="flex items-center gap-4">
            <div className="h-px w-24" style={{ background: `linear-gradient(90deg, #00e8f0, ${ACCENT} 70%, transparent)` }} />
            <span className="text-[10px] tracking-[0.5em] uppercase text-white/90" style={{ fontFamily: BODY }}>
              EST. 2026
            </span>
          </div>
        </div>

        {/* ── sub-text + CTAs ── */}
        <div
          className="mt-10 transition-all duration-700"
          style={{
            opacity: phase >= 4 ? 1 : 0,
            transform: phase >= 4 ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <p
            className="max-w-2xl text-sm leading-relaxed text-white/75 mb-10"
            style={{ fontFamily: BODY }}
          >
            {homeContent.hero.subtitle}
          </p>

          {/* framework tags */}
          <div className="mb-12 flex flex-wrap gap-x-6 gap-y-2">
            {["CYBER EXERCISE IMPLEMENTATION PLAN", "SIMULATION @ SAND BOX", "3D REPLICA @ SAND TABLE", "CYBER CRISIS & COMMUNICATION EXERCISE"].map((tag) => (
              <span
                key={tag}
                className="text-[9px] tracking-[0.25em] uppercase text-white/70 border border-white/30 px-3 py-1"
                style={{ fontFamily: BODY }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href={routes.contact}
              className="group relative inline-flex items-center gap-3 px-10 py-4 text-[11px] tracking-[0.3em] uppercase font-medium overflow-hidden transition-opacity hover:opacity-85"
              style={{ fontFamily: BODY, background: ACCENT, color: "#000000" }}
            >
              Access War Room
              <span className="text-base leading-none">→</span>
            </Link>
            <Link
              href={routes.aboutUs}
              className="inline-flex items-center gap-3 border border-white/40 px-10 py-4 text-[11px] tracking-[0.3em] uppercase text-white/75 hover:border-white/70 hover:text-white transition-all duration-300"
              style={{ fontFamily: BODY }}
            >
              Mission Briefing
              <span className="text-base leading-none opacity-75">→</span>
            </Link>
          </div>
        </div>

      </Container>

      {/* ── bottom edge marker ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px transition-opacity duration-700"
        style={{
          background: `linear-gradient(90deg, transparent, ${ACCENT}40 40%, ${ACCENT}40 60%, transparent)`,
          opacity: phase >= 4 ? 1 : 0,
        }}
      />

    </section>
  );
}
