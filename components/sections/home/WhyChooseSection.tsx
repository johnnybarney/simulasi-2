import { Container } from "@/components/layout/Container";
import { homeContent } from "@/lib/constants/home";

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

const CARD_BG = "linear-gradient(339deg, rgba(0,197,205,0.04) 18%, rgba(84,84,84,0.08) 77%)";

export function WhyChooseSection() {
  const { whyChoose } = homeContent;

  return (
    <section className="relative overflow-hidden py-32" style={{ background: "linear-gradient(300deg, #050505, #000000 56%, #080808)" }}>
      <span className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 select-none font-bold text-white/[0.025]"
        style={{ fontFamily: DISPLAY, fontSize: "clamp(6rem, 18vw, 16rem)", lineHeight: 1 }}>
        why
      </span>
      <Container className="relative">
        <p className="mb-3 text-[10px] tracking-[0.35em] uppercase text-white/30" style={{ fontFamily: BODY }}>/ our advantages</p>
        <h2 className="mb-16 font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          {whyChoose.title.split("Simulasi.org").map((part, i, arr) =>
            i < arr.length - 1
              ? <span key={i}>{part}<span style={gradStyle}>/ Simulasi /</span></span>
              : <span key={i}>{part}</span>
          )}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoose.items.map((item, i) => (
            <div key={item.title} className="p-8 transition-all duration-500 hover:scale-[1.02]"
              style={{ backgroundImage: CARD_BG, borderRadius: "9px" }}>
              <span className="block mb-6 font-bold leading-none" style={{ fontFamily: DISPLAY, fontSize: "3rem", color: `${ACCENT}40` }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-3 font-semibold text-white" style={{ fontFamily: DISPLAY, fontSize: "1rem" }}>{item.title}</h3>
              <p className="text-xs leading-relaxed text-white/50" style={{ fontFamily: BODY }}>{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
