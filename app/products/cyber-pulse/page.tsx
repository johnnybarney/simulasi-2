import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { ServiceHeroAnimated } from "@/components/ui/ServiceHeroAnimated";
import { Container } from "@/components/layout/Container";
import { routes } from "@/lib/navigation";

export const metadata = {
  title: "Cyber Pulse | Simulasi",
  description:
    "Real-time cyber threat intelligence and situational awareness — keeping your organisation informed, prepared, and ahead of adversaries.",
};

const DISPLAY = "'Clash Display', sans-serif";
const BODY    = "var(--font-chakra), 'Chakra Petch', sans-serif";
const ACCENT  = "#00c5cd";

const pulseItems = [
  {
    num: "01",
    tag: "Insight",
    title: "Why Tabletop Exercises Fail — And How to Fix Them",
    excerpt: "Most tabletop exercises produce a report that sits on a shelf. We break down what separates a meaningful exercise from an expensive meeting.",
  },
  {
    num: "02",
    tag: "Case Study",
    title: "How a Dual-Track ASX Exposed a Critical IR Gap",
    excerpt: "A finance-sector client discovered their incident response team and executive leadership had never aligned on crisis authority.",
  },
  {
    num: "03",
    tag: "Intelligence",
    title: "The Rise of OSINT-Driven Attack Surface Discovery",
    excerpt: "Adversaries enumerate your attack surface before you do. We examine the tools and techniques used in modern reconnaissance.",
  },
  {
    num: "04",
    tag: "Product",
    title: "Introducing CD-X: The Cyber Exercise Command Platform",
    excerpt: "CD-X gives exercise directors full command and control over every phase of a cyber exercise.",
  },
  {
    num: "05",
    tag: "Insight",
    title: "Measuring Cyber Maturity: Beyond the Framework Checkbox",
    excerpt: "Compliance scores rarely reflect operational readiness. We explore what measurable cyber maturity actually looks like.",
  },
];

export default function CyberPulsePage() {
  return (
    <PageShell headerVariant="cyber-pulse" footerVariant="cyber-pulse" activeHref={routes.cyberPulse}>
      <ServiceHeroAnimated
        eyebrow="Cyber Pulse"
        lines={[
          { text: "Cyber" },
          { text: "Pulse", accent: true },
        ]}
        watermark="PULSE"
        code="Intelligence Feed"
        description="Real-time cyber threat intelligence and situational awareness — keeping your organisation informed, prepared, and ahead of adversaries."
        video="/images/cyberpulse.mp4"
      />

      {/* ── Articles ── */}
      <section className="py-24">
        <Container>
          <ul className="divide-y divide-white/8">
            {pulseItems.map((item) => (
              <li key={item.num}>
                <Link href="/news"
                  className="group grid grid-cols-[4rem_1fr] gap-8 py-10 md:grid-cols-[5rem_1fr_auto]">
                  <span className="text-sm font-semibold" style={{ color: ACCENT, fontFamily: BODY }}>/ {item.num}</span>
                  <div>
                    <p className="mb-2 text-[10px] tracking-widest uppercase text-white/30" style={{ fontFamily: BODY }}>
                      {item.tag}
                    </p>
                    <h3 className="mb-3 font-semibold text-white group-hover:text-white/80 transition-colors"
                      style={{ fontFamily: DISPLAY, fontSize: "clamp(1.125rem, 2vw, 1.5rem)" }}>
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/40" style={{ fontFamily: BODY }}>
                      {item.excerpt}
                    </p>
                  </div>
                  <div className="hidden md:flex items-center">
                    <span className="text-[10px] tracking-widest uppercase text-white/20 group-hover:text-white/60 transition-colors"
                      style={{ fontFamily: BODY }}>
                      Read More →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </PageShell>
  );
}
