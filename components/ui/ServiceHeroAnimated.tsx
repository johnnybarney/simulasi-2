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

const SPD = 58;

function TypeCursor() {
  return (
    <span
      className="inline-block align-middle animate-pulse"
      style={{ width: "0.05em", height: "0.82em", background: ACCENT, marginLeft: "0.08em" }}
    />
  );
}

type Line = { text: string; accent?: boolean; color?: string };

type Props = {
  eyebrow: string;
  lines: [Line, Line, Line?];
  watermark: string;
  description: string;
  code: string;
  video?: string;
};

export function ServiceHeroAnimated({ eyebrow, lines, watermark, description, code, video }: Props) {
  const l1 = lines[0].text;
  const l2 = lines[1].text;
  const l3 = lines[2]?.text ?? "";

  const [phase,     setPhase]     = useState(0);
  const [chars1,    setChars1]    = useState(0);
  const [chars2,    setChars2]    = useState(0);
  const [chars3,    setChars3]    = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowVideo(true), 300);
    return () => clearTimeout(t);
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
      typeString(l1.length, setChars1, () => {
        setTimeout(() => {
          setPhase(2);
          typeString(l2.length, setChars2, () => {
            if (l3) {
              setTimeout(() => {
                setPhase(3);
                typeString(l3.length, setChars3, () => setTimeout(() => setPhase(4), 300));
              }, 150);
            } else {
              setTimeout(() => setPhase(4), 300);
            }
          });
        }, 160);
      });
    }, 600);

    return () => clearTimeout(p0);
  }, [l1, l2, l3]);

  return (
    <section className="theme-hero relative flex min-h-[80vh] items-end overflow-hidden pb-20 pt-32">

      {/* back button */}
      <div className="absolute top-24 left-0 z-10 px-6 md:px-12 lg:px-20">
        <BackButton />
      </div>

      {/* optional video background */}
      {video && (
        <>
          <video
            autoPlay loop muted playsInline preload="auto"
            onCanPlay={() => setShowVideo(true)}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1800ms]"
            style={{ opacity: showVideo ? 0.85 : 0, objectPosition: "center center" }}
          >
            <source src={video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.1) 100%)" }}
          />
        </>
      )}

      {/* glows */}
      <div className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full opacity-10 blur-[130px]"
        style={{ background: ACCENT }} />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full opacity-[0.06] blur-[100px]"
        style={{ background: ACCENT, transform: "translate(-20%,20%)" }} />

      {/* watermark */}
      <span className="pointer-events-none absolute bottom-0 right-0 select-none font-bold leading-none"
        style={{
          fontFamily: DISPLAY,
          fontSize: "clamp(6rem, 22vw, 20rem)",
          lineHeight: 1,
          color: "transparent",
          WebkitTextStroke: `1px rgba(0,197,205,0.06)`,
        }}>
        {watermark}
      </span>

      <Container className="relative">

        {/* eyebrow */}
        <div className="mb-10 flex items-center gap-4 transition-all duration-700"
          style={{ opacity: phase >= 0 ? 1 : 0 }}>
          <span className="h-px w-8 block" style={{ background: ACCENT }} />
          <p className="text-[10px] tracking-[0.55em] uppercase" style={{ fontFamily: BODY, color: ACCENT }}>
            {eyebrow}
          </p>
          <span className="h-px flex-1 block opacity-20" style={{ background: ACCENT }} />
        </div>

        {/* headline */}
        <h1 style={{ fontFamily: DISPLAY, fontWeight: 700, lineHeight: 1, fontSize: "clamp(3rem, 10vw, 8rem)" }}>
          <span className="block mb-1" style={{ color: lines[0].accent ? "transparent" : (lines[0].color ?? "#ffffff") }}>
            {lines[0].accent
              ? <span style={gradStyle}>{l1.slice(0, chars1)}</span>
              : l1.slice(0, chars1)
            }
            {phase === 1 && <TypeCursor />}
          </span>

          <span className="block mb-1" style={{ minHeight: "1.05em" }}>
            {chars2 > 0 && (
              lines[1].accent
                ? <span style={gradStyle}>{l2.slice(0, chars2)}</span>
                : <span style={{ color: lines[1].color ?? "#ffffff" }}>{l2.slice(0, chars2)}</span>
            )}
            {phase === 2 && <TypeCursor />}
          </span>

          {l3 && (
            <span className="block" style={{ color: lines[2]?.accent ? "transparent" : (lines[2]?.color ?? "#ffffff") }}>
              {lines[2]?.accent
                ? <span style={gradStyle}>{l3.slice(0, chars3)}</span>
                : l3.slice(0, chars3)
              }
              {phase === 3 && <TypeCursor />}
            </span>
          )}
        </h1>

        {/* sub content */}
        <div className="transition-all duration-700"
          style={{ opacity: phase >= 4 ? 1 : 0, transform: phase >= 4 ? "none" : "translateY(20px)" }}>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px w-12" style={{ background: `linear-gradient(90deg, ${ACCENT}, transparent)` }} />
            <p className="text-[10px] tracking-[0.3em] uppercase font-medium" style={{ color: ACCENT, fontFamily: BODY }}>
              ( {code} )
            </p>
          </div>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/75" style={{ fontFamily: BODY }}>
            {description}
          </p>
        </div>

      </Container>
    </section>
  );
}
