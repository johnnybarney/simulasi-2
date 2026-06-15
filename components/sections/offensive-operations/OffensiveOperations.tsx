import Image from "next/image";
import { Container } from "@/components/layout/Container";

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
export function OffensiveOperationsHero() {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden pb-20 pt-32">
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full opacity-10 blur-[120px]"
        style={{ background: `radial-gradient(circle, ${ACCENT} 0%, transparent 65%)` }} aria-hidden="true" />
      <span className="pointer-events-none absolute bottom-0 right-0 select-none font-bold leading-none text-white/[0.025]"
        style={{ fontFamily: DISPLAY, fontSize: "clamp(4rem, 15vw, 14rem)", lineHeight: 1 }}>
        offensive
      </span>
      <Container className="relative">
        <p className="mb-4 text-[11px] tracking-[0.35em] uppercase text-white/30" style={{ fontFamily: BODY }}>
          / Offensive Operations
        </p>
        <h1 className="font-bold leading-[0.92] tracking-tight" style={{ fontFamily: DISPLAY, fontSize: "clamp(2.5rem, 8vw, 7rem)" }}>
          <span className="block text-white">Offensive</span>
          <span className="block"><span style={gradStyle}>/ Operations /</span></span>
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/40" style={{ fontFamily: BODY }}>
          Simulate real-world adversaries to uncover hidden vulnerabilities and fortify your defenses against sophisticated threats.
        </p>
        <p className="mt-4 text-xs tracking-[0.3em] uppercase" style={{ color: ACCENT, fontFamily: BODY }}>
          ( Attack Simulation )
        </p>
      </Container>
    </section>
  );
}

/* ── Methodology ──────────────────────────────────────────── */
export function OffensiveOperationsMethodologySection() {
  const steps = [
    { num: "01", title: "Planning",          desc: "Scope definition and rules of engagement." },
    { num: "02", title: "Reconnaissance",    desc: "OSINT and attack surface discovery." },
    { num: "03", title: "Attack Simulation", desc: "Custom TTPs matched to target environment." },
    { num: "04", title: "Reporting",         desc: "Evidence-backed findings with risk ratings." },
    { num: "05", title: "Remediation",       desc: "Prioritized fix guidance and re-testing." },
  ];

  return (
    <section className="border-y border-white/8 py-32" style={{ backgroundImage: SECTION_BG }}>
      <Container>
        <p className="mb-3 text-[10px] tracking-[0.35em] uppercase text-white/30" style={{ fontFamily: BODY }}>/ methodology</p>
        <h2 className="mb-16 font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          Our&nbsp;<span style={gradStyle}>/ Methodology /</span>
        </h2>
        <ul className="divide-y divide-white/8">
          {steps.map((step) => (
            <li key={step.num} className="group flex items-center gap-8 py-8 transition-all">
              <span className="w-12 shrink-0 text-sm font-semibold" style={{ color: ACCENT, fontFamily: BODY }}>/ {step.num}</span>
              <div className="flex-1">
                <h3 className="font-semibold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}>
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-white/40" style={{ fontFamily: BODY }}>{step.desc}</p>
              </div>
              <span className="shrink-0 text-sm text-white/20 group-hover:text-white/50 transition-colors" style={{ fontFamily: BODY }}>→</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ── Benefits ─────────────────────────────────────────────── */
export function OffensiveOperationsBenefitsSection() {
  const items = [
    { title: "Uncover Hidden Vulnerabilities",  description: "Identify and address critical weaknesses before adversaries do." },
    { title: "Strengthen Incident Response",    description: "Improve your team's readiness and response procedures." },
    { title: "Improve Compliance",              description: "Meet industry standards and regulatory requirements." },
    { title: "Enhance Cyber Resilience",        description: "Build a stronger, more adaptable security posture." },
    { title: "Reduce Risk",                     description: "Proactively mitigate potential threats and financial loss." },
  ];

  return (
    <section className="relative overflow-hidden py-32">
      <span className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 select-none font-bold text-white/[0.025]"
        style={{ fontFamily: DISPLAY, fontSize: "clamp(6rem, 18vw, 16rem)", lineHeight: 1 }}>
        benefits
      </span>
      <Container className="relative">
        <p className="mb-3 text-[10px] tracking-[0.35em] uppercase text-white/30" style={{ fontFamily: BODY }}>/ key benefits</p>
        <h2 className="mb-16 font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          What You&nbsp;<span style={gradStyle}>/ Gain /</span>
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <div key={item.title} className="p-8 transition-all duration-500 hover:scale-[1.02]"
              style={{ backgroundImage: CARD_BG, borderRadius: "9px" }}>
              <span className="block mb-6 font-bold leading-none" style={{ fontFamily: DISPLAY, fontSize: "3rem", color: `${ACCENT}40` }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-3 font-semibold text-white" style={{ fontFamily: DISPLAY, fontSize: "1.125rem" }}>{item.title}</h3>
              <p className="text-sm leading-relaxed text-white/50" style={{ fontFamily: BODY }}>{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Red Teaming vs Pen Test ──────────────────────────────── */
export function OffensiveOperationsComparisonSection() {
  return (
    <section className="border-t border-white/8 py-32" style={{ backgroundImage: SECTION_BG }}>
      <Container>
        <p className="mb-3 text-[10px] tracking-[0.35em] uppercase text-white/30" style={{ fontFamily: BODY }}>/ comparison</p>
        <h2 className="mb-16 font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          Red Teaming vs&nbsp;<span style={gradStyle}>/ Penetration Testing /</span>
        </h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="overflow-hidden border border-white/8" style={{ borderRadius: "9px" }}>
            <div className="relative aspect-[4/3] w-full">
              <Image src="/images/penat3.png" alt="Penetration Testing" fill sizes="50vw" className="object-contain p-4" />
            </div>
            <div className="border-t border-white/8 p-6">
              <p className="text-xs tracking-[0.3em] uppercase text-white/40" style={{ fontFamily: BODY }}>/ 01</p>
              <p className="mt-2 font-semibold text-white" style={{ fontFamily: DISPLAY }}>Penetration Testing</p>
              <p className="mt-2 text-xs leading-relaxed text-white/40" style={{ fontFamily: BODY }}>Structured, time-boxed testing of specific systems and attack vectors within agreed scope.</p>
            </div>
          </div>
          <div className="overflow-hidden border border-white/8" style={{ borderRadius: "9px" }}>
            <div className="relative aspect-[4/3] w-full">
              <Image src="/images/red3.png" alt="Red Teaming" fill sizes="50vw" className="object-contain p-4" />
            </div>
            <div className="border-t border-white/8 p-6">
              <p className="text-xs tracking-[0.3em] uppercase" style={{ color: ACCENT, fontFamily: BODY }}>/ 02</p>
              <p className="mt-2 font-semibold text-white" style={{ fontFamily: DISPLAY }}>Red Teaming</p>
              <p className="mt-2 text-xs leading-relaxed text-white/40" style={{ fontFamily: BODY }}>Goal-based adversary simulation across people, process, and technology — no scope limits.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
