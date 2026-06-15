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

export function CriticalInsightSection() {
  const { criticalInsight } = homeContent;

  return (
    <section className="border-y border-white/8 py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] items-center">
          <div>
            <p className="mb-3 text-[10px] tracking-[0.35em] uppercase text-white/30" style={{ fontFamily: BODY }}>/ critical insight</p>
            <h2 className="font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
              <span style={gradStyle}>/ Insight /</span>
            </h2>
          </div>
          <div className="border-l-2 pl-10" style={{ borderColor: `${ORCHID}33` }}>
            <h3 className="mb-4 font-semibold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}>
              {criticalInsight.title}
            </h3>
            <p className="text-sm leading-relaxed text-white/50" style={{ fontFamily: BODY }}>{criticalInsight.body}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
