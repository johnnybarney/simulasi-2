import { Container } from "@/components/layout/Container";
import {
  cyberExerciseSharedContent,
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
const NEEDS_BG   = "linear-gradient(145deg, rgba(0,197,205,0.08) 32%, rgba(84,84,84,0.12) 73%)";
const SECTION_BG = "linear-gradient(300deg, #050505, #000000 56%, #080808)";

/* ── Hero ─────────────────────────────────────────────────── */
export function TabletopExerciseHero() {
  const { tagline, heroDescription, heroVideo } = cyberExerciseSharedContent;

  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden pb-20 pt-32">
      <div className="pointer-events-none absolute -top-40 left-1/3 h-[500px] w-[500px] rounded-full opacity-10 blur-[120px]"
        style={{ background: `radial-gradient(circle, ${ACCENT} 0%, transparent 65%)` }} aria-hidden="true" />
      <span className="pointer-events-none absolute bottom-0 right-0 select-none font-bold leading-none text-white/[0.025]"
        style={{ fontFamily: DISPLAY, fontSize: "clamp(5rem, 18vw, 16rem)", lineHeight: 1 }}>
        iTTX
      </span>
      <Container className="relative z-10 grid items-end gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-[11px] tracking-[0.35em] uppercase text-white/50" style={{ fontFamily: BODY }}>
            / Interactive Tabletop Exercise
          </p>
          <h1 className="font-bold leading-[0.92] tracking-tight" style={{ fontFamily: DISPLAY, fontSize: "clamp(2.5rem, 7vw, 6rem)" }}>
            <span className="block text-white">Interactive</span>
            <span className="block"><span style={gradStyle}>/ Tabletop /</span></span>
            <span className="block text-white">Exercise</span>
          </h1>
          <p className="mt-6 text-sm font-semibold text-white/70" style={{ fontFamily: BODY }}>{tagline}</p>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/40" style={{ fontFamily: BODY }}>{heroDescription}</p>
          <p className="mt-4 text-xs tracking-[0.3em] uppercase" style={{ color: ACCENT, fontFamily: BODY }}>( iTTX )</p>
        </div>
        <div className="overflow-hidden border border-white/8" style={{ borderRadius: "9px" }}>
          <video src={heroVideo.src} aria-label={heroVideo.alt} autoPlay loop muted playsInline
            className="aspect-video w-full object-cover" />
        </div>
      </Container>
    </section>
  );
}

/* ── Core Offerings ───────────────────────────────────────── */
export function TabletopCoreOfferingsSection() {
  const { offerings } = cyberExerciseSharedContent;

  return (
    <section className="theme-section-bg py-32" style={{ backgroundImage: SECTION_BG }}>
      <Container>
        <p className="mb-3 text-[10px] tracking-[0.35em] uppercase text-white/50" style={{ fontFamily: BODY }}>/ offerings</p>
        <h2 className="mb-16 font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          Strategy &amp;&nbsp;<span style={gradStyle}>/ Tactical Solutions /</span>
        </h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {offerings.map((item, i) => (
            <div key={item.title} className="p-8 transition-all duration-500 hover:scale-[1.02]"
              style={{ backgroundImage: CARD_BG, borderRadius: "9px" }}>
              <span className="block mb-6 font-bold leading-none" style={{ fontFamily: DISPLAY, fontSize: "3rem", color: `${ACCENT}40` }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-4 font-semibold text-white" style={{ fontFamily: DISPLAY, fontSize: "1.375rem" }}>
                {item.title}
              </h3>
              <div className="space-y-2">
                {item.blocks.map((block) => (
                  <p key={block.label} className="text-sm text-white/50" style={{ fontFamily: BODY }}>
                    <span style={{ color: ACCENT }}>/</span> <span className="text-white/70">{block.label}:</span> {block.text}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Why Choose / Mission Assurance ──────────────────────── */
export function TabletopWhyChooseSection() {
  const { whyChoose } = cyberExerciseSharedContent;

  return (
    <section className="relative py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute -right-10 top-1/2 -translate-y-1/2 select-none font-bold text-white/[0.025]"
          style={{ fontFamily: DISPLAY, fontSize: "clamp(6rem, 18vw, 16rem)", lineHeight: 1 }}>
          mission
        </span>
      </div>
      <Container className="relative">
        <p className="mb-3 text-[10px] tracking-[0.35em] uppercase text-white/50" style={{ fontFamily: BODY }}>/ why choose us</p>
        <h2 className="mb-16 font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          Mission&nbsp;<span style={gradStyle}>/ Assurance /</span>
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map((item, i) => (
            <div key={item.title}
              className="group relative overflow-hidden transition-all duration-500 hover:scale-[1.02]"
              style={{ backgroundImage: NEEDS_BG, borderRadius: "9px", padding: "3em 2.5em" }}>
              <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(${ACCENT2}, ${ACCENT})`, borderRadius: "100%" }} aria-hidden="true" />
              <span className="relative block font-bold leading-none mb-6"
                style={{ fontFamily: DISPLAY, fontSize: "3rem", color: `${ACCENT}40` }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="relative font-semibold text-white mb-3" style={{ fontFamily: DISPLAY, fontSize: "1.375rem" }}>
                {item.title}
              </h3>
              <p className="relative text-sm leading-relaxed text-white/50" style={{ fontFamily: BODY }}>{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
