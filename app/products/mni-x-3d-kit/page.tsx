"use client";

import { useState, useEffect } from "react";
import { PageShell } from "@/components/layout/PageShell";
import {
  MniXProblemSection,
  MniXOpportunitySection,
  MniXProductsSection,
} from "@/components/sections/mni-x/MniXSections";
import { Container } from "@/components/layout/Container";
import { BackButton } from "@/components/ui/BackButton";
import { routes } from "@/lib/navigation";

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
const L1 = "MNI-X";
const L2 = "3D Kit";

function TypeCursor() {
  return (
    <span
      className="inline-block align-middle animate-pulse"
      style={{ width: "0.05em", height: "0.82em", background: ACCENT, marginLeft: "0.08em" }}
    />
  );
}

function MniXHeroAnimated() {
  const [phase,  setPhase]  = useState(0);
  const [chars1, setChars1] = useState(0);
  const [chars2, setChars2] = useState(0);

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
            setTimeout(() => setPhase(4), 300);
          });
        }, 160);
      });
    }, 600);

    return () => clearTimeout(p0);
  }, []);

  return (
    <section className="relative flex min-h-[80vh] items-end overflow-hidden pb-20 pt-32">

      {/* back button */}
      <div className="absolute top-24 left-0 z-10 px-6 md:px-12 lg:px-20">
        <BackButton />
      </div>

      {/* video background */}
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 h-full w-full object-cover"
        style={{ opacity: 0.35 }}
      >
        <source src="/images/mini.mp4" type="video/mp4" />
      </video>

      {/* gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent pointer-events-none" />

      {/* teal glow */}
      <div className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full opacity-10 blur-[130px]"
        style={{ background: ACCENT }} />

      {/* watermark */}
      <span className="pointer-events-none absolute bottom-0 right-0 select-none font-bold leading-none"
        style={{
          fontFamily: DISPLAY,
          fontSize: "clamp(6rem, 22vw, 20rem)",
          lineHeight: 1,
          color: "transparent",
          WebkitTextStroke: `1px rgba(0,197,205,0.06)`,
        }}>
        MNI-X
      </span>

      <Container className="relative">

        {/* eyebrow */}
        <div className="mb-10 flex items-center gap-4">
          <span className="h-px w-8 block" style={{ background: ACCENT }} />
          <p className="text-[10px] tracking-[0.55em] uppercase" style={{ fontFamily: BODY, color: ACCENT }}>
            MNI-X 3D Kit
          </p>
          <span className="h-px flex-1 block opacity-20" style={{ background: ACCENT }} />
        </div>

        {/* headline */}
        <h1 style={{ fontFamily: DISPLAY, fontWeight: 700, lineHeight: 1, fontSize: "clamp(3rem, 10vw, 8rem)" }}>
          <span className="block mb-1 text-white">
            {L1.slice(0, chars1)}
            {phase === 1 && <TypeCursor />}
          </span>

          <span className="block" style={{ minHeight: "1.05em" }}>
            {chars2 > 0 && <span style={gradStyle}>{L2.slice(0, chars2)}</span>}
            {phase === 2 && <TypeCursor />}
          </span>
        </h1>

        {/* sub content */}
        <div className="transition-all duration-700"
          style={{ opacity: phase >= 4 ? 1 : 0, transform: phase >= 4 ? "none" : "translateY(20px)" }}>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px w-12" style={{ background: `linear-gradient(90deg, ${ACCENT}, transparent)` }} />
            <p className="text-[10px] tracking-[0.3em] uppercase font-medium" style={{ color: ACCENT, fontFamily: BODY }}>
              ( Physical Viz )
            </p>
          </div>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/40" style={{ fontFamily: BODY }}>
            The prime standard for physical cyber security visualization — making invisible threats tangible for executives, operators, and analysts alike.
          </p>
        </div>

      </Container>
    </section>
  );
}

export default function MniX3dKitPage() {
  return (
    <PageShell headerVariant="mni-x" footerVariant="mni-x" activeHref={routes.mniX3dKit}>
      <MniXHeroAnimated />
      <MniXProblemSection />
      <MniXOpportunitySection />
      <MniXProductsSection />
    </PageShell>
  );
}
