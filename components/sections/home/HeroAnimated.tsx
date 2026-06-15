"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { routes } from "@/lib/navigation";
import { homeContent } from "@/lib/constants/home";

const DISPLAY = "'Clash Display', sans-serif";
const BODY    = "var(--font-chakra), 'Chakra Petch', sans-serif";
const ACCENT  = "#00c5cd";
const ACCENT2 = "#545454";

/* gradient for the accent line */
const gradStyle: React.CSSProperties = {
  background: `linear-gradient(90deg, ${ACCENT2} 0%, ${ACCENT} 60%, #ffffff 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

/* 3 headline lines */
const L1 = "CYBER COMMAND:";
const L2 = "AI-DRIVEN";
const L3 = "WARFARE SIMULATION";

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
  const [chars3, setChars3] = useState(0);

  useEffect(() => {
    /* video fade-in */
    const vt = setTimeout(() => setShowVideo(true), 100);

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

    /* chain: welcome → L1 → L2 → L3 → done */
    const p0 = setTimeout(() => {
      setPhase(1);
      typeString(L1.length, setChars1, () => {
        setTimeout(() => {
          setPhase(2);
          typeString(L2.length, setChars2, () => {
            setTimeout(() => {
              setPhase(3);
              typeString(L3.length, setChars3, () => {
                setTimeout(() => setPhase(4), 400);
              });
            }, 160);
          });
        }, 200);
      });
    }, 800);

    return () => { clearTimeout(vt); clearTimeout(p0); };
  }, []);

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">

      {/* ── video background ── */}
      <video
        src="/images/landing.mp4"
        autoPlay loop muted playsInline
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1800ms]"
        style={{ opacity: showVideo ? 0.38 : 0 }}
      />

      {/* ── overlays ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to top, #000000 40%, rgba(0,0,0,0.6) 68%, rgba(0,0,0,0.2) 100%)" }}
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
          <span className="h-px w-8 block" style={{ background: ACCENT }} />
          <p
            className="text-[10px] tracking-[0.55em] uppercase"
            style={{ fontFamily: BODY, color: ACCENT }}
          >
            Welcome to Simulasi
          </p>
          <span className="h-px flex-1 block opacity-20" style={{ background: ACCENT }} />
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
          {/* L1: CYBER COMMAND: */}
          <span className="block text-white mb-1">
            {L1.slice(0, chars1)}
            {phase === 1 && <TypeCursor />}
          </span>

          {/* L2: AI-DRIVEN — gradient accent */}
          <span className="block mb-1" style={{ minHeight: "1.05em" }}>
            {chars2 > 0 && (
              <span style={gradStyle}>
                {L2.slice(0, chars2)}
              </span>
            )}
            {phase === 2 && <TypeCursor />}
          </span>

          {/* L3: WARFARE SIMULATION */}
          <span className="block text-white">
            {L3.slice(0, chars3)}
            {phase === 3 && <TypeCursor />}
          </span>
        </h1>

        {/* ── divider line ── */}
        <div
          className="mt-10 mb-0 transition-all duration-700"
          style={{ opacity: phase >= 4 ? 1 : 0 }}
        >
          <div className="flex items-center gap-4">
            <div className="h-px w-16" style={{ background: `linear-gradient(90deg, ${ACCENT}, transparent)` }} />
            <span className="text-[9px] tracking-[0.5em] uppercase text-white/20" style={{ fontFamily: BODY }}>
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
            className="max-w-2xl text-sm leading-relaxed text-white/40 mb-10"
            style={{ fontFamily: BODY }}
          >
            {homeContent.hero.subtitle}
          </p>

          {/* framework tags */}
          <div className="mb-12 flex flex-wrap gap-x-6 gap-y-2">
            {["NIST", "ISO 27001", "MITRE ATT&CK", "OSINT", "Red Team", "Zero Trust"].map((tag) => (
              <span
                key={tag}
                className="text-[9px] tracking-[0.25em] uppercase text-white/20 border border-white/8 px-3 py-1"
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
              className="inline-flex items-center gap-3 border border-white/15 px-10 py-4 text-[11px] tracking-[0.3em] uppercase text-white/50 hover:border-white/50 hover:text-white/80 transition-all duration-300"
              style={{ fontFamily: BODY }}
            >
              Mission Briefing
              <span className="text-base leading-none opacity-50">→</span>
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
