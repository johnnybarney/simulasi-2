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

const gradStyle: React.CSSProperties = {
  background: `linear-gradient(135deg, ${ACCENT2}, ${ACCENT})`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const LINE1 = "Turn Threats";
const LINE2 = "into";

export function HeroAnimated() {
  /* animation phases */
  const [phase, setPhase]       = useState(0); // 0=welcome, 1=typing1, 2=typing2, 3=accent, 4=done
  const [typed1, setTyped1]     = useState(0);
  const [typed2, setTyped2]     = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    /* fade video in after a short delay so first frame isn't jarring */
    const vt = setTimeout(() => setShowVideo(true), 100);

    /* phase 0 → 1: show welcome tag for 700ms then start headline */
    const p1 = setTimeout(() => {
      setPhase(1);
      let c = 0;
      const t = setInterval(() => {
        c++;
        setTyped1(c);
        if (c >= LINE1.length) {
          clearInterval(t);
          /* phase 1 → 2 */
          setTimeout(() => {
            setPhase(2);
            let c2 = 0;
            const t2 = setInterval(() => {
              c2++;
              setTyped2(c2);
              if (c2 >= LINE2.length) {
                clearInterval(t2);
                /* phase 2 → 3 */
                setTimeout(() => setPhase(3), 120);
                /* phase 3 → 4 */
                setTimeout(() => setPhase(4), 800);
              }
            }, 60);
          }, 180);
        }
      }, 65);
    }, 700);

    return () => { clearTimeout(vt); clearTimeout(p1); };
  }, []);

  const showCursor1 = phase === 1;
  const showCursor2 = phase === 2;

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">

      {/* ── video background ── */}
      <video
        src="/images/landing.mp4"
        autoPlay loop muted playsInline
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms]"
        style={{ opacity: showVideo ? 0.35 : 0 }}
      />

      {/* ── gradient overlays ── */}
      {/* bottom: solid black so text is always readable */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to top, #000000 35%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.25) 100%)" }} />
      {/* subtle teal glow top-left */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full opacity-12 blur-[120px]"
        style={{ background: `radial-gradient(circle, ${ACCENT} 0%, transparent 65%)` }} />

      {/* ── content ── */}
      <Container className="relative pb-20 pt-32">

        {/* welcome tag */}
        <p
          className="mb-8 text-[11px] tracking-[0.5em] uppercase transition-all duration-700"
          style={{
            fontFamily: BODY,
            color: ACCENT,
            opacity: phase >= 0 ? 0.8 : 0,
            transform: phase >= 0 ? "translateY(0)" : "translateY(8px)",
          }}
        >
          / Welcome to Simulasi
        </p>

        {/* main headline */}
        <h1
          className="font-bold leading-[0.92] tracking-tight"
          style={{ fontFamily: DISPLAY, fontSize: "clamp(3.5rem, 12vw, 10rem)" }}
        >
          {/* line 1 */}
          <span className="block text-white">
            {LINE1.slice(0, typed1)}
            {showCursor1 && (
              <span className="inline-block w-[0.06em] h-[0.85em] align-middle ml-1 animate-pulse"
                style={{ background: ACCENT }} />
            )}
          </span>

          {/* line 2 */}
          <span className="block">
            <span className="text-white">
              {LINE2.slice(0, typed2)}
              {showCursor2 && (
                <span className="inline-block w-[0.06em] h-[0.85em] align-middle ml-1 animate-pulse"
                  style={{ background: ACCENT }} />
              )}
            </span>
            {/* accent word: fades in after line 2 finishes typing */}
            <span
              className="transition-all duration-500"
              style={{
                ...gradStyle,
                opacity: phase >= 3 ? 1 : 0,
                marginLeft: typed2 > 0 ? "0.25em" : 0,
              }}
            >
              / Dominance /
            </span>
          </span>
        </h1>

        {/* sub-text + CTAs: fade up after headline is done */}
        <div
          className="transition-all duration-700"
          style={{
            opacity: phase >= 4 ? 1 : 0,
            transform: phase >= 4 ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p className="mt-10 max-w-xl text-sm leading-relaxed text-white/40" style={{ fontFamily: BODY }}>
            {homeContent.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {["NIST", "ISO 27001", "MITRE ATT&CK", "OSINT", "Red Team", "Zero Trust"].map((tag) => (
              <span key={tag} className="text-xs tracking-[0.2em] uppercase text-white/25 border border-white/8 px-3 py-1.5"
                style={{ fontFamily: BODY }}>
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-14 flex flex-col gap-6 sm:flex-row sm:items-center">
            <Link
              href={routes.contact}
              className="inline-block px-10 py-4 text-[11px] tracking-[0.3em] uppercase font-medium text-black hover:opacity-80 transition-opacity"
              style={{ fontFamily: BODY, background: ACCENT }}
            >
              Access War Room
            </Link>
            <Link
              href={routes.aboutUs}
              className="inline-block border border-white/20 px-10 py-4 text-[11px] tracking-[0.3em] uppercase text-white/60 hover:border-white hover:text-white transition-all duration-300"
              style={{ fontFamily: BODY }}
            >
              Mission Briefing →
            </Link>
          </div>
        </div>

      </Container>
    </section>
  );
}
