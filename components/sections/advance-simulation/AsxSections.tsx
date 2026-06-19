import { Container } from "@/components/layout/Container";
import {
  asxContent,
} from "@/lib/constants/cyber-exercise-content";

const DISPLAY = "'Clash Display', sans-serif";
const BODY    = "var(--font-chakra), 'Chakra Petch', sans-serif";
const ACCENT  = "#00c5cd";
const ACCENT2 = "#545454";

const gradStyle = {
  background: `linear-gradient(135deg, ${ACCENT2}, ${ACCENT})`,
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

const CARD_BG    = "linear-gradient(339deg, rgba(0,197,205,0.04) 18%, rgba(84,84,84,0.08) 77%)";
const SECTION_BG = "linear-gradient(300deg, #050505, #000000 56%, #080808)";

/* ── Hero ─────────────────────────────────────────────────── */
export function AsxHero() {
  const { heroVideo, tagline } = asxContent;

  return (
    <section className="relative overflow-hidden pb-20 pt-32">
      <div className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full opacity-10 blur-[120px]"
        style={{ background: `radial-gradient(circle, ${ACCENT} 0%, transparent 65%)` }} aria-hidden="true" />
      <span className="pointer-events-none absolute bottom-0 right-0 select-none font-bold leading-none text-white/[0.025]"
        style={{ fontFamily: DISPLAY, fontSize: "clamp(5rem, 16vw, 14rem)", lineHeight: 1 }}>
        ASX
      </span>
      <Container className="relative">
        <p className="mb-4 text-[11px] tracking-[0.35em] uppercase text-white/30" style={{ fontFamily: BODY }}>
          / Advance Simulation Exercise
        </p>
        <h1 className="font-bold leading-[0.92] tracking-tight" style={{ fontFamily: DISPLAY, fontSize: "clamp(2.5rem, 8vw, 7rem)" }}>
          <span className="block text-white">Advance</span>
          <span className="block"><span style={gradStyle}>/ Simulation /</span></span>
          <span className="block text-white">Exercise</span>
        </h1>
        <p className="mt-6 text-sm font-semibold text-white/70" style={{ fontFamily: BODY }}>{tagline}</p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/40" style={{ fontFamily: BODY }}>
          Deploys a Dual-Track Hybrid Protocol. We synchronize Interactive Tabletop Exercises ( iTTX ) validating strategic command decisions with Technical Simulation Exercises ( TSX ) testing the physical integrity of your infrastructure.
        </p>
        <p className="mt-4 text-xs tracking-[0.3em] uppercase" style={{ color: ACCENT, fontFamily: BODY }}>( ASX )</p>
      </Container>

      <Container className="relative mt-12">
        <div className="overflow-hidden border border-white/8" style={{ borderRadius: "9px" }}>
          <video src={heroVideo.src} aria-label={heroVideo.alt} autoPlay loop muted playsInline
            className="aspect-video w-full object-cover" />
        </div>
      </Container>
    </section>
  );
}

/* ── Offerings ────────────────────────────────────────────── */
export function AsxOfferingsSection() {
  const { offerings } = asxContent;

  return (
    <section className="theme-section-bg py-32" style={{ backgroundImage: SECTION_BG }}>
      <Container>
        <p className="mb-3 text-[10px] tracking-[0.35em] uppercase text-white/30" style={{ fontFamily: BODY }}>/ strategy &amp; tactics</p>
        <h2 className="mb-16 font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          Tactical&nbsp;<span style={gradStyle}>/ Solutions /</span>
        </h2>
        <div className="space-y-20">
          {offerings.map((offering, index) => {
            const reversed = index % 2 === 1;
            return (
              <div key={offering.title}
                className={`grid items-start gap-12 lg:grid-cols-2 ${reversed ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}>
                <div className="lg:pt-4">
                  <span className="block mb-3 text-sm font-semibold" style={{ color: ACCENT, fontFamily: BODY }}>/ {String(index + 1).padStart(2, "0")}</span>
                  <h3 className="font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
                    {offering.title}
                  </h3>
                  <div className="mt-4 h-px w-16" style={{ background: `linear-gradient(90deg, ${ACCENT}, transparent)` }} />
                </div>
                <div className="space-y-4">
                  {offering.blocks.map((block) => (
                    <div key={block.label} className="p-6 transition-all duration-300 hover:scale-[1.01]"
                      style={{ backgroundImage: CARD_BG, borderRadius: "9px" }}>
                      <p className="mb-1 font-semibold text-white" style={{ fontFamily: DISPLAY, fontSize: "1rem" }}>
                        <span style={{ color: ACCENT }}>/ </span>{block.label}
                      </p>
                      <p className="text-sm text-white/50" style={{ fontFamily: BODY }}>{block.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* ── Why Choose ───────────────────────────────────────────── */
export function AsxWhyChooseSection() {
  const { whyChoose } = asxContent;

  return (
    <section className="relative overflow-hidden py-32">
      <span className="pointer-events-none absolute -left-10 top-1/2 -translate-y-1/2 select-none font-bold text-white/[0.025]"
        style={{ fontFamily: DISPLAY, fontSize: "clamp(6rem, 18vw, 16rem)", lineHeight: 1 }}>
        assurance
      </span>
      <Container className="relative">
        <p className="mb-3 text-[10px] tracking-[0.35em] uppercase text-white/30" style={{ fontFamily: BODY }}>/ mission assurance</p>
        <h2 className="mb-16 font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          Why&nbsp;<span style={gradStyle}>/ Choose ASX /</span>
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {whyChoose.map((item, i) => (
            <div key={item.title} className="p-8 transition-all duration-500 hover:scale-[1.02]"
              style={{ backgroundImage: CARD_BG, borderRadius: "9px" }}>
              <span className="block mb-4 font-bold leading-none" style={{ fontFamily: DISPLAY, fontSize: "2.5rem", color: `${ACCENT}40` }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-3 font-semibold text-white" style={{ fontFamily: DISPLAY, fontSize: "1.125rem" }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/50" style={{ fontFamily: BODY }}>{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
