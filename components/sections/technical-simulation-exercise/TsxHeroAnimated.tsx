"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/layout/Container";
import { BackButton } from "@/components/ui/BackButton";

const DISPLAY = "'Clash Display', sans-serif";
const BODY    = "var(--font-chakra), 'Chakra Petch', sans-serif";
const ACCENT  = "#00c5cd";
const ACCENT2 = "#545454";

const gradStyle: React.CSSProperties = {
  background: `linear-gradient(90deg, ${ACCENT2} 0%, ${ACCENT} 60%, #ffffff 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const L1 = "Technical";
const L2 = "Simulation";
const L3 = "Exercise";
const SPD = 60;

function TypeCursor() {
  return (
    <span
      className="inline-block align-middle animate-pulse"
      style={{ width: "0.05em", height: "0.82em", background: ACCENT, marginLeft: "0.08em" }}
    />
  );
}

export function TsxHeroAnimated() {
  const [phase,     setPhase]     = useState(0);
  const [chars1,    setChars1]    = useState(0);
  const [chars2,    setChars2]    = useState(0);
  const [chars3,    setChars3]    = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const vt = setTimeout(() => setShowVideo(true), 300);
    return () => clearTimeout(vt);
  }, []);

  useEffect(() => {
    function typeString(length: number, setter: (n: number) => void, onDone: () => void) {
      let c = 0;
      const t = setInterval(() => {
        c++;
        setter(c);
        if (c >= length) { clearInterval(t); onDone(); }
      }, SPD);
    }

    const p0 = setTimeout(() => {
      setPhase(1);
      typeString(L1.length, setChars1, () => {
        setTimeout(() => {
          setPhase(2);
          typeString(L2.length, setChars2, () => {
            setTimeout(() => {
              setPhase(3);
              typeString(L3.length, setChars3, () => {
                setTimeout(() => setPhase(4), 300);
              });
            }, 150);
          });
        }, 180);
      });
    }, 600);

    return () => clearTimeout(p0);
  }, []);

  return (
    <section className="theme-hero relative flex min-h-[80vh] items-end overflow-hidden pb-20 pt-32">

      {/* back button */}
      <div className="absolute top-24 left-0 z-10 px-6 md:px-12 lg:px-20">
        <BackButton />
      </div>

      {/* video background */}
      <video
        autoPlay loop muted playsInline preload="auto"
        onCanPlay={() => setShowVideo(true)}
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1800ms]"
        style={{ opacity: showVideo ? 0.85 : 0, objectPosition: "center center" }}
      >
        <source src="/images/technical.mp4" type="video/mp4" />
      </video>

      {/* gradient overlay */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.1) 100%)" }}
      />

      {/* teal glow — top right */}
      <div className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full opacity-10 blur-[130px]"
        style={{ background: ACCENT }} />
      {/* second glow — bottom left */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full opacity-[0.06] blur-[100px]"
        style={{ background: ACCENT, transform: "translate(-20%, 20%)" }} />

      {/* TSX watermark */}
      <span className="pointer-events-none absolute bottom-0 right-0 select-none font-bold leading-none"
        style={{ fontFamily: DISPLAY, fontSize: "clamp(8rem, 28vw, 24rem)", lineHeight: 1,
          color: "transparent",
          WebkitTextStroke: `1px rgba(0,197,205,0.06)`,
        }}>
        TSX
      </span>

      <Container className="relative">

        {/* eyebrow */}
        <div
          className="mb-10 flex items-center gap-4 transition-all duration-700"
          style={{ opacity: phase >= 0 ? 1 : 0 }}
        >
          <span className="h-px w-8 block" style={{ background: ACCENT }} />
          <p className="text-[10px] tracking-[0.55em] uppercase" style={{ fontFamily: BODY, color: ACCENT }}>
            Technical Simulation Exercise
          </p>
          <span className="h-px flex-1 block opacity-20" style={{ background: ACCENT }} />
        </div>

        {/* headline */}
        <h1 style={{ fontFamily: DISPLAY, fontWeight: 700, lineHeight: 1, fontSize: "clamp(3rem, 10vw, 8rem)" }}>
          {/* L1 */}
          <span className="block text-white mb-1">
            {L1.slice(0, chars1)}{phase === 1 && <TypeCursor />}
          </span>
          {/* L2 — gradient accent */}
          <span className="block mb-1" style={{ minHeight: "1.05em" }}>
            {chars2 > 0 && <span style={gradStyle}>{L2.slice(0, chars2)}</span>}
            {phase === 2 && <TypeCursor />}
          </span>
          {/* L3 */}
          <span className="block text-white">
            {L3.slice(0, chars3)}{phase === 3 && <TypeCursor />}
          </span>
        </h1>

        {/* sub content — fades in after headline */}
        <div
          className="transition-all duration-700"
          style={{ opacity: phase >= 4 ? 1 : 0, transform: phase >= 4 ? "none" : "translateY(20px)" }}
        >
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px w-12" style={{ background: `linear-gradient(90deg, ${ACCENT}, transparent)` }} />
            <p className="text-[10px] tracking-[0.3em] uppercase font-medium" style={{ color: ACCENT, fontFamily: BODY }}>
              ( TSX )
            </p>
          </div>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/75" style={{ fontFamily: BODY }}>
            Attack Simulation Against Your Defenses with Real-World Custom-Crafted Techniques, Tactics and Procedures.
          </p>
        </div>

      </Container>
    </section>
  );
}
