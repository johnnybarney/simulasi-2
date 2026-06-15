import { Container } from "@/components/layout/Container";
import { homeContent } from "@/lib/constants/home";

const DISPLAY = "'Clash Display', sans-serif";
const BODY    = "var(--font-chakra), 'Chakra Petch', sans-serif";
const ORCHID  = "#b64cf7";
const CRIMSON = "#c5013c";

const gradStyle = {
  background: `linear-gradient(135deg, ${CRIMSON}, ${ORCHID})`,
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

export function AboutSection() {
  const { about } = homeContent;

  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden pb-20 pt-32">
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full opacity-10 blur-[120px]"
        style={{ background: `radial-gradient(circle, ${ORCHID} 0%, transparent 65%)` }} aria-hidden="true" />
      <span className="pointer-events-none absolute bottom-0 right-0 select-none font-bold leading-none text-white/[0.025]"
        style={{ fontFamily: DISPLAY, fontSize: "clamp(6rem, 22vw, 20rem)", lineHeight: 1 }}>
        about
      </span>
      <Container className="relative">
        <p className="mb-4 text-[11px] tracking-[0.35em] uppercase text-white/30" style={{ fontFamily: BODY }}>
          / About Simulasi
        </p>
        <h1 className="font-bold leading-[0.92] tracking-tight" style={{ fontFamily: DISPLAY, fontSize: "clamp(2.5rem, 8vw, 7rem)" }}>
          <span className="block text-white">The Shift to</span>
          <span className="block"><span style={gradStyle}>/ Measurable /</span></span>
          <span className="block text-white">Capability</span>
        </h1>
        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-white/40" style={{ fontFamily: BODY }}>
          {about.body}
        </p>
      </Container>
    </section>
  );
}
