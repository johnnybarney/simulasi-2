import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { routes } from "@/lib/navigation";
import Link from "next/link";

const partnerLogos = [
  { src: "/images/petronas2.png",        alt: "Petronas" },
  { src: "/images/kaf-logo.png",         alt: "KAF" },
  { src: "/images/kwap.png",             alt: "KWAP" },
  { src: "/images/kklw.png",             alt: "KKLW" },
  { src: "/images/malaysiaairports.png", alt: "Malaysia Airports" },
  { src: "/images/raya.png",             alt: "Raya Airways" },
  { src: "/images/sepang2.png",          alt: "Sepang Aircraft Engineering" },
  { src: "/images/ssm.png",              alt: "SSM" },
  { src: "/images/umw.png",              alt: "UMW" },
  { src: "/images/universiti.png",       alt: "Universiti Malaya" },
  { src: "/images/airbus.png",           alt: "Airbus" },
  { src: "/images/coway.png",            alt: "Coway" },
  { src: "/images/heitech.png",          alt: "HeiTech" },
];

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
export function CdXHero() {
  return (
    <section className="relative flex min-h-[80vh] items-end overflow-hidden pb-20 pt-32">
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full opacity-12 blur-[120px]"
        style={{ background: `radial-gradient(circle, ${ACCENT} 0%, transparent 65%)` }} aria-hidden="true" />
      <span className="pointer-events-none absolute bottom-0 right-0 select-none font-bold leading-none text-white/[0.025]"
        style={{ fontFamily: DISPLAY, fontSize: "clamp(6rem, 22vw, 20rem)", lineHeight: 1 }}>
        CD-X
      </span>
      <Container className="relative z-10 grid items-end gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-[11px] tracking-[0.35em] uppercase text-white/30" style={{ fontFamily: BODY }}>/ product</p>
          <h1 className="font-bold leading-[0.92] tracking-tight" style={{ fontFamily: DISPLAY, fontSize: "clamp(4rem, 12vw, 10rem)" }}>
            <span style={gradStyle}>CD-X</span>
          </h1>
          <p className="mt-3 text-xs tracking-[0.3em] uppercase" style={{ color: ACCENT, fontFamily: BODY }}>
            Cyber Exercise Command &amp; Control ( CE-C2 )
          </p>
          <p className="mt-6 font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(1.25rem, 2vw, 1.75rem)" }}>
            Mission-Critical Cyber Exercise Orchestration Platform
          </p>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/40" style={{ fontFamily: BODY }}>
            A comprehensive dashboard for the end-to-end lifecycle of cyber range operations — from scenario design to incident response. Compliant with NACSA Baseline 1.4 and ACT 854 standards.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href={routes.contact}
              className="border border-white/20 px-8 py-3 text-[11px] tracking-[0.3em] uppercase text-white/60 hover:border-white hover:text-white transition-all duration-300"
              style={{ fontFamily: BODY }}>
              Access War Room /
            </Link>
            <Link href={routes.contact}
              className="border px-8 py-3 text-[11px] tracking-[0.3em] uppercase transition-all duration-300"
              style={{ borderColor: `${ACCENT}60`, color: ACCENT, fontFamily: BODY }}>
              Mission Briefing /
            </Link>
          </div>
        </div>
        <div className="overflow-hidden border border-white/8" style={{ borderRadius: "9px" }}>
          <Image src="/images/latihansiber.png" alt="CD-X platform — Latihan Siber"
            width={800} height={600} className="h-auto w-full object-contain" priority />
        </div>
      </Container>
    </section>
  );
}

/* ── Cyber Drills ─────────────────────────────────────────── */
export function CyberDrillsSection() {
  return (
    <section className="border-y border-white/8 py-32" style={{ backgroundImage: SECTION_BG }}>
      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <div className="overflow-hidden border border-white/8" style={{ borderRadius: "9px" }}>
          <Image src="/images/national.png" alt="National Critical Infrastructure"
            width={800} height={600} className="h-auto w-full object-contain" />
        </div>
        <div>
          <p className="mb-3 text-[10px] tracking-[0.35em] uppercase text-white/30" style={{ fontFamily: BODY }}>/ cyber drills matter</p>
          <h2 className="font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            National Critical<br /><span style={gradStyle}>/ Infrastructure /</span>
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-white/40" style={{ fontFamily: BODY }}>
            CD-X is built to orchestrate exercises that test the resilience of critical national infrastructure — from energy grids to financial systems — under simulated adversary conditions.
          </p>
          <div className="mt-8 space-y-4">
            {[
              { num: "/ 01", text: "Real-time exercise orchestration gives directors full command from scenario start to debrief." },
              { num: "/ 02", text: "Multi-team role management with live inject delivery synchronized across all participants." },
              { num: "/ 03", text: "Automated after-action report generation — no manual assembly, no lost data." },
            ].map((item) => (
              <div key={item.num} className="border-l-2 pl-6" style={{ borderColor: `${ACCENT}33` }}>
                <p className="mb-1 text-sm font-semibold" style={{ color: ACCENT, fontFamily: BODY }}>{item.num}</p>
                <p className="text-sm text-white/40" style={{ fontFamily: BODY }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ── Value Delivery Table ─────────────────────────────────── */
export function ValueDeliveryTable() {
  const rows = [
    { pillar: "Unified Exercise Lifecycle", provide: "End-to-end planning, execution, and reporting in one platform.", outcome: "Reduced coordination overhead and faster exercise turnaround." },
    { pillar: "Red Teaming Precision",      provide: "Structured adversary simulation workflows with objective tracking.", outcome: "Clear evidence of defensive gaps across people, process, and technology." },
    { pillar: "Blue Team Empowerment",      provide: "Real-time dashboards and after-action analytics for defenders.", outcome: "Improved detection tuning and response readiness." },
    { pillar: "Automated IR Tracking",      provide: "Incident response milestones captured automatically during exercises.", outcome: "Audit-ready timelines and measurable IR performance." },
    { pillar: "Compliance-by-Design",       provide: "Framework mappings built into every exercise template.", outcome: "Regulatory alignment without additional documentation burden." },
    { pillar: "Isolated Range",             provide: "Safe, segmented environments for high-fidelity technical drills.", outcome: "Realistic testing without production risk." },
  ];

  return (
    <section className="relative overflow-hidden py-32">
      <span className="pointer-events-none absolute -right-10 top-1/4 select-none font-bold text-white/[0.025]"
        style={{ fontFamily: DISPLAY, fontSize: "clamp(6rem, 18vw, 16rem)", lineHeight: 1 }}>
        value
      </span>
      <Container className="relative">
        <p className="mb-3 text-[10px] tracking-[0.35em] uppercase text-white/30" style={{ fontFamily: BODY }}>/ platform value</p>
        <h2 className="mb-16 font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          Value&nbsp;<span style={gradStyle}>/ Delivery /</span>
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="pb-4 text-[10px] tracking-[0.3em] uppercase text-white/30 pr-8" style={{ fontFamily: BODY }}>Service Pillar</th>
                <th className="pb-4 text-[10px] tracking-[0.3em] uppercase text-white/30 pr-8" style={{ fontFamily: BODY }}>What We Provide</th>
                <th className="pb-4 text-[10px] tracking-[0.3em] uppercase text-white/30" style={{ fontFamily: BODY }}>Business Outcome</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.pillar} className="group border-b border-white/8 hover:border-white/20 transition-colors">
                  <td className="py-6 pr-8">
                    <div className="flex items-center gap-4">
                      <span className="shrink-0 text-xs font-semibold" style={{ color: ACCENT, fontFamily: BODY }}>/ {String(i + 1).padStart(2, "0")}</span>
                      <span className="font-semibold text-white" style={{ fontFamily: DISPLAY }}>{row.pillar}</span>
                    </div>
                  </td>
                  <td className="py-6 pr-8 text-xs leading-relaxed text-white/50" style={{ fontFamily: BODY }}>{row.provide}</td>
                  <td className="py-6 text-xs leading-relaxed text-white/50" style={{ fontFamily: BODY }}>{row.outcome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}

/* ── Partners ─────────────────────────────────────────────── */
export function PartnersSection() {
  const track = [...partnerLogos, ...partnerLogos];

  return (
    <section className="border-t border-white/8 py-20" style={{ backgroundImage: SECTION_BG }}>
      <Container>
        <div className="overflow-hidden">
          <div className="marquee-track flex items-center whitespace-nowrap" style={{ animationDuration: "35s" }}>
            {track.map((logo, i) => (
              <div key={i} className="mx-8 flex h-14 w-36 shrink-0 items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={144}
                  height={56}
                  className="h-10 w-auto object-contain opacity-70"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function CdXWhyChooseSection() {
  return null;
}
