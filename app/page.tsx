import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HeroAnimated } from "@/components/sections/home/HeroAnimated";
import { routes } from "@/lib/navigation";
import { homeContent } from "@/lib/constants/home";

/* ── Xizt design tokens ──────────────────────────────────────── */
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

/* ── Xizt card backgrounds ───────────────────────────────────── */
const ABOUT_CARD_BG   = "linear-gradient(339deg, rgba(0,197,205,0.04) 18%, rgba(84,84,84,0.08) 77%)";
const NEEDS_CARD_BG   = "linear-gradient(145deg, rgba(0,197,205,0.08) 32%, rgba(84,84,84,0.12) 73%)";
const SECTION_BG      = "linear-gradient(300deg, #050505, #000000 56%, #080808)";

/* ── page data ───────────────────────────────────────────────── */
const aboutItems = [
  { num: "01", title: "We Simulate",           lines: ["Real-world adversary tactics", "Live infrastructure stress tests", "Command & decision wargames"] },
  { num: "02", title: "Quickly and safely",    lines: ["Expose hidden vulnerabilities", "Validate your detection stack", "Strengthen incident response"] },
  { num: "03", title: "We deliver intelligence", lines: ["OSINT & attack surface mapping", "Deep/dark web reconnaissance", "Actionable threat reporting"] },
  { num: "04", title: "We build capability",   lines: ["Strategic training programs", "Skills gap remediation", "Measurable maturity scoring"] },
];

const needItems = [
  { title: "Test your defenses",  lines: ["Red team operations", "Penetration testing", "Adversarial simulation"] },
  { title: "Train your team",     lines: ["Tabletop exercises", "Technical drills", "Decision-making frameworks"] },
  { title: "Map your exposure",   lines: ["OSINT reconnaissance", "Dark web analysis", "Attack surface discovery"] },
  { title: "Build resilience",    lines: ["Maturity assessment", "Skills development", "Playbook creation"] },
  { title: "Respond faster",      lines: ["IR war gaming", "Playbook refinement", "Escalation rehearsals"] },
  { title: "Prove compliance",    lines: ["Framework alignment", "Audit-ready reporting", "Regulatory mapping"] },
];

const serviceList = [
  { num: "01", title: "Technical Simulation Exercise", sub: "TSX",               href: routes.tsx },
  { num: "02", title: "Interactive Tabletop Exercise",  sub: "iTTX",              href: routes.ittx },
  { num: "03", title: "Advance Simulation Exercise",    sub: "ASX",               href: routes.asx },
  { num: "04", title: "Offensive Operations",           sub: "Attack Simulation", href: routes.attackSimulation },
  { num: "05", title: "Reconnaissance Intelligence",    sub: "Recon Intel",       href: routes.reconIntel },
  { num: "06", title: "Capacity Building",              sub: "Strategic Training", href: "https://rp.my/training" },
  { num: "07", title: "CD-X Platform",                  sub: "CE-C2",             href: routes.cdX },
  { num: "08", title: "MNI-X 3D Kit",                   sub: "Physical Visualization", href: routes.mniX3dKit },
];

const cases = [
  { num: "01", tag: "Insight",    title: "Why Tabletop Exercises Fail — And How to Fix Them",           excerpt: "Most tabletop exercises produce a report that sits on a shelf. We break down what separates a meaningful exercise from an expensive meeting." },
  { num: "02", tag: "Case Study", title: "How a Dual-Track ASX Exposed a Critical IR Gap",              excerpt: "A finance-sector client discovered their incident response team and executive leadership had never aligned on crisis authority." },
  { num: "03", tag: "Intelligence", title: "The Rise of OSINT-Driven Attack Surface Discovery",         excerpt: "Adversaries enumerate your attack surface before you do. We examine the tools and techniques used in modern reconnaissance." },
  { num: "04", tag: "Product",    title: "Introducing CD-X: The Cyber Exercise Command Platform",       excerpt: "CD-X gives exercise directors full command and control over every phase of a cyber exercise." },
  { num: "05", tag: "Insight",    title: "Measuring Cyber Maturity: Beyond the Framework Checkbox",     excerpt: "Compliance scores rarely reflect operational readiness. We explore what measurable cyber maturity actually looks like." },
  { num: "06", tag: "Product",    title: "MNI-X 3D Kit: Making Invisible Threats Physical",             excerpt: "We launched MNI-X 3D Kit to solve a persistent problem: non-technical leaders cannot fund what they cannot see." },
];

const techLogos  = ["NIST", "ISO 27001", "MITRE ATT&CK", "OSINT", "Red Team", "Zero Trust"];
const marqueeItems = ["Cyber Resilience", "Attack Simulation", "Threat Intelligence", "Mission Assurance", "War Gaming", "Recon Intel", "Capacity Building", "CE-C2"];
const partnerLogos = [
  { src: "/images/petronas.png",        alt: "Petronas" },
  { src: "/images/kaf-logo.png",        alt: "KAF" },
  { src: "/images/kwap1.png",           alt: "KWAP" },
  { src: "/images/kklw.png",            alt: "KKLW" },
  { src: "/images/malaysiaairports.png",alt: "Malaysia Airports" },
  { src: "/images/raya.png",            alt: "Raya Airways" },
  { src: "/images/sepang2.png",         alt: "Sepang Aircraft Engineering" },
  { src: "/images/ssm.png",             alt: "SSM" },
  { src: "/images/umw.png",             alt: "UMW" },
  { src: "/images/universiti.png",      alt: "Universiti Malaya" },
  { src: "/images/airbus.png",          alt: "Airbus" },
  { src: "/images/coway.png",           alt: "Coway" },
  { src: "/images/heitech.png",         alt: "HeiTech" },
  { src: "/images/pidm.png",            alt: "PIDM" },
  { src: "/images/lhdn.png",            alt: "LHDN" },
];

/* ── vertical side label ─────────────────────────────────────── */
function SideTag({ label }: { label: string }) {
  return (
    <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex items-center">
      <span className="select-none text-[10px] tracking-[0.35em] uppercase text-white/10"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", fontFamily: BODY }}>
        {label}
      </span>
      <div className="ml-2 h-16 w-px bg-white/10" />
    </div>
  );
}

/* ── page ─────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <LoadingScreen />
      <Header activeHref="/" />

      <main className="flex-1">

        {/* ─── Hero ─────────────────────────────────────────────── */}
        <HeroAnimated />

        {/* ─── Marquee ──────────────────────────────────────────── */}
        <div className="overflow-hidden border-y border-white/8 py-5">
          <div className="marquee-track flex whitespace-nowrap">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="mx-10 text-[11px] tracking-[0.3em] uppercase text-white/20"
                style={{ fontFamily: BODY }}>
                {item} <span style={{ color: ACCENT }}>✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* ─── Our Strategic Capabilities ──────────────────────── */}
        {(() => {
          const { servicePillars } = homeContent;
          const pillarRoutes = [
            routes.reconIntel,
            routes.tsx,
            routes.attackSimulation,
            routes.ittx,
            routes.asx,
            "https://rp.my/training",
          ];
          return (
            <section className="relative py-32">
              <SideTag label="/ capabilities" />
              <span className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 select-none font-bold text-white/[0.025]"
                style={{ fontFamily: DISPLAY, fontSize: "clamp(6rem, 20vw, 18rem)", lineHeight: 1 }}>
                services
              </span>
              <Container className="relative">
                <ScrollReveal>
                  <p className="mb-3 text-[10px] tracking-[0.35em] uppercase text-white/30" style={{ fontFamily: BODY }}>
                    / strategic capabilities
                  </p>
                  <div className="mb-16 flex items-end justify-between gap-8">
                    <h2 className="font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                      Our&nbsp;<span style={gradStyle}>/ Strategic /</span><br />Capabilities
                    </h2>
                    <Link href={routes.tsx}
                      className="hidden shrink-0 text-[10px] tracking-[0.3em] uppercase text-white/30 hover:text-white transition-colors md:block"
                      style={{ fontFamily: BODY }}>
                      View All →
                    </Link>
                  </div>
                </ScrollReveal>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {servicePillars.items.map((item, i) => (
                    <ScrollReveal key={item.title} delay={i * 0.08}>
                      <Link href={pillarRoutes[i]}
                        className="group relative flex flex-col overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                        style={{ backgroundImage: NEEDS_CARD_BG, borderRadius: "9px", minHeight: "280px" }}>
                        {/* hover glow */}
                        <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 blur-[60px] opacity-0 group-hover:opacity-60 transition-opacity"
                          style={{ background: ACCENT, borderRadius: "100%" }} aria-hidden="true" />

                        <div className="relative flex flex-1 flex-col p-8">
                          {/* number */}
                          <div className="mb-6">
                            <span className="font-bold leading-none" style={{ fontFamily: DISPLAY, fontSize: "2.5rem", color: `${ACCENT}35` }}>
                              {String(i + 1).padStart(2, "0")}
                            </span>
                          </div>

                          {/* title + code */}
                          <h3 className="mb-1 font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "1rem", letterSpacing: "0.02em" }}>
                            {item.title}
                          </h3>
                          {item.titleCode && (
                            <p className="mb-4 text-[10px] tracking-[0.25em] uppercase" style={{ color: ACCENT, fontFamily: BODY }}>
                              ( {item.titleCode} )
                            </p>
                          )}

                          {/* description */}
                          <p className="flex-1 text-xs leading-relaxed text-white/40" style={{ fontFamily: BODY }}>
                            {item.description}
                          </p>

                          {/* strategic value badge */}
                          <div className="mt-6 flex items-center justify-between border-t pt-4" style={{ borderColor: `${ACCENT}20` }}>
                            <span className="text-[9px] tracking-[0.2em] uppercase text-white/25" style={{ fontFamily: BODY }}>
                              Strategic Value
                            </span>
                            <span className="text-[9px] tracking-[0.15em] uppercase font-medium" style={{ color: ACCENT, fontFamily: BODY }}>
                              {item.strategicValue}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </ScrollReveal>
                  ))}
                </div>
              </Container>
            </section>
          );
        })()}

        {/* ─── About / simulasi ─────────────────────────────────── */}
        <section className="relative overflow-hidden py-32" style={{ backgroundImage: SECTION_BG }}>
          <SideTag label="/ simulasi" />
          <span className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 select-none font-bold text-white/[0.03]"
            style={{ fontFamily: DISPLAY, fontSize: "clamp(6rem, 20vw, 18rem)", lineHeight: 1 }}>
            about
          </span>
          <Container className="relative">
            <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
              <ScrollReveal>
                <div className="lg:pt-2">
                  <p className="text-[10px] tracking-[0.35em] uppercase text-white/30" style={{ fontFamily: BODY }}>
                    / about simulasi
                  </p>
                  <h2 className="mt-4 font-semibold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
                    The Shift to<br />Measurable<br />Capability
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-white/40" style={{ fontFamily: BODY }}>
                    {homeContent.about.body}
                  </p>
                  <Link href={routes.aboutUs}
                    className="mt-8 inline-block text-[10px] tracking-[0.3em] uppercase text-white/30 hover:text-white transition-colors"
                    style={{ fontFamily: BODY }}>
                    Learn More →
                  </Link>
                </div>
              </ScrollReveal>

              {/* Xizt about grid — 4 cards with subtle gradient bg + border-radius */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {aboutItems.map((item, i) => (
                  <ScrollReveal key={item.num} delay={i * 0.08}>
                    <div className="p-6 transition-all duration-500 hover:scale-[1.02]"
                      style={{ backgroundImage: ABOUT_CARD_BG, borderRadius: "9px" }}>
                      <span className="block text-sm font-semibold mb-4" style={{ color: ACCENT, fontFamily: BODY }}>
                        {item.num}
                      </span>
                      <h3 className="font-semibold text-white mb-3"
                        style={{ fontFamily: DISPLAY, fontSize: "1.125rem" }}>
                        {item.title}
                      </h3>
                      <div className="space-y-1">
                        {item.lines.map((line) => (
                          <p key={line} className="text-xs text-white/40" style={{ fontFamily: BODY }}>
                            <span style={{ color: ACCENT }}>/</span> {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ─── divider ──────────────────────────────────────────── */}
        <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${ACCENT2} 40%, ${ACCENT}, ${ACCENT2} 60%, transparent)` }} />

        {/* ─── you need to ──────────────────────────────────────── */}
        <section className="relative py-32">
          <SideTag label="/ you need to" />
          {/* watermark clipped separately so it doesn't block scroll */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <span className="absolute -left-10 top-1/2 -translate-y-1/2 select-none font-bold text-white/[0.03]"
              style={{ fontFamily: DISPLAY, fontSize: "clamp(6rem, 20vw, 18rem)", lineHeight: 1 }}>
              needs
            </span>
          </div>
          <Container className="relative mb-12">
            <ScrollReveal>
              <p className="mb-3 text-[10px] tracking-[0.35em] uppercase text-white/30" style={{ fontFamily: BODY }}>/ when you need to</p>
              <h2 className="font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                you<br />need&nbsp;<span style={gradStyle}>/ to /</span>
              </h2>
            </ScrollReveal>
          </Container>

          <Container className="relative">
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {needItems.map((item, i) => (
                <li key={i}
                  className="group relative overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                  style={{ backgroundImage: NEEDS_CARD_BG, borderRadius: "9px", padding: "3em 2.5em" }}>
                  <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(${ACCENT2}, ${ACCENT})`, borderRadius: "100%" }} aria-hidden="true" />
                  <span className="relative block font-bold leading-none mb-6"
                    style={{ fontFamily: DISPLAY, fontSize: "3rem", color: "rgba(0,197,205,0.3)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="relative font-semibold text-white mb-4"
                    style={{ fontFamily: DISPLAY, fontSize: "1.125rem" }}>
                    {item.title}
                  </h3>
                  <div className="relative space-y-2">
                    {item.lines.map((line) => (
                      <p key={line} className="text-xs text-white/50" style={{ fontFamily: BODY }}>
                        <span style={{ color: ACCENT }}>/</span> {line}
                      </p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* ─── lets talk CTA ────────────────────────────────────── */}
        <section className="border-y border-white/8 py-20">
          <Container>
            <ScrollReveal>
              <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
                <div className="max-w-xl">
                  <h2 className="font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
                    lets talk /
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-white/50" style={{ fontFamily: BODY }}>
                    We offer a full spectrum of cyber exercise services, including attack simulation and source code verification. Professional simulation experts provide a complete package of resilience services and solutions.
                  </p>
                </div>
                <Link href={routes.contact}
                  className="shrink-0 border border-white/20 px-10 py-4 text-[11px] tracking-[0.3em] uppercase text-white/60 hover:border-white hover:text-white transition-all duration-300 self-start"
                  style={{ fontFamily: BODY }}>
                  Start Now /
                </Link>
              </div>
            </ScrollReveal>
          </Container>
        </section>

        {/* ─── simulasi / platform spotlight ("devsecops" equivalent) ── */}
        <section className="border-y border-white/8 py-24" style={{ backgroundImage: SECTION_BG }}>
          <Container>
            <div className="grid gap-16 lg:grid-cols-2">
              <ScrollReveal>
                <p className="text-sm leading-relaxed text-white/40" style={{ fontFamily: BODY }}>
                  We manage and provide our customers with measurable cyber resilience. Protecting critical infrastructure and national security interests through continuous, intelligence-driven simulation.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div>
                  <p className="text-[10px] tracking-[0.35em] uppercase text-white/30 mb-4" style={{ fontFamily: BODY }}>/ platform</p>
                  <h3 className="font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(3rem, 6vw, 5rem)" }}>
                    simulasi
                  </h3>
                  <p className="mt-3 text-xs text-white/40" style={{ fontFamily: BODY }}>
                    / AI-driven warfare simulation. Continuous dynamic capability.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </section>

        {/* ─── what do we / offer / ─────────────────────────────── */}
        <section className="relative py-32">
          <SideTag label="/ services" />
          <Container>
            <ScrollReveal>
              <div className="mb-16 flex items-baseline justify-between">
                <h2 className="font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                  what do<br />we&nbsp;<span style={gradStyle}>/ offer /</span>
                </h2>
                <Link href={routes.contact}
                  className="hidden text-[10px] tracking-[0.3em] uppercase text-white/30 hover:text-white transition-colors md:block"
                  style={{ fontFamily: BODY }}>
                  lets talk →
                </Link>
              </div>
            </ScrollReveal>

            <ul className="divide-y divide-white/8">
              {serviceList.map((s, i) => (
                <ScrollReveal key={s.num} delay={i * 0.05}>
                  <li>
                    <Link href={s.href}
                      className="group relative flex items-center justify-between gap-8 py-7 transition-all overflow-hidden">
                      <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
                        style={{ background: `linear-gradient(90deg, rgba(0,197,205,0.06) 0%, transparent 100%)` }} />
                      <div className="relative flex items-center gap-8">
                        <span className="w-12 shrink-0 text-sm font-semibold" style={{ color: ACCENT, fontFamily: BODY }}>/ {s.num}</span>
                        <div>
                          <h3 className="font-semibold text-white group-hover:text-white transition-all"
                            style={{ fontFamily: DISPLAY, fontSize: "clamp(1.125rem, 2vw, 1.5rem)" }}>
                            {s.title}
                          </h3>
                          <p className="mt-0.5 text-[10px] tracking-widest uppercase text-white/30" style={{ fontFamily: BODY }}>( {s.sub} )</p>
                        </div>
                      </div>
                      <span className="relative shrink-0 text-sm text-white/20 group-hover:text-white/60 transition-colors" style={{ fontFamily: BODY }}>→</span>
                    </Link>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </Container>
        </section>

        {/* ─── CD-X Platform (NetOps equivalent) ──────────────── */}
        <section className="relative overflow-hidden border-t border-white/8 py-32" style={{ backgroundImage: SECTION_BG }}>
          <span className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 select-none font-bold text-white/[0.025]"
            style={{ fontFamily: DISPLAY, fontSize: "clamp(6rem, 18vw, 16rem)", lineHeight: 1 }}>
            CD-X
          </span>
          <Container className="relative">
            <div className="grid gap-16 lg:grid-cols-2">
              <ScrollReveal>
                <p className="text-[10px] tracking-[0.35em] uppercase text-white/30 mb-4" style={{ fontFamily: BODY }}>/ product</p>
                <h2 className="font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                  CD-X Platform
                </h2>
                <p className="mt-3 text-xs tracking-widest uppercase" style={{ color: ACCENT, fontFamily: BODY }}>
                  Cyber Exercise Command & Control ( CE-C2 )
                </p>
                <p className="mt-6 text-sm leading-relaxed text-white/40" style={{ fontFamily: BODY }}>
                  CD-X gives exercise directors full command and control from mission briefing through live execution to automated after-action reporting. Built for operators, by operators.
                </p>
                <Link href={routes.cdX}
                  className="mt-8 inline-block text-[10px] tracking-[0.3em] uppercase text-white/30 hover:text-white transition-colors"
                  style={{ fontFamily: BODY }}>
                  Find Out More →
                </Link>
              </ScrollReveal>

              <div className="space-y-6">
                {[
                  { num: "/ 01", text: "Real-time exercise orchestration gives directors full command from scenario start to debrief." },
                  { num: "/ 02", text: "Multi-team role management with live inject delivery synchronized across all participants." },
                  { num: "/ 03", text: "Automated after-action report generation — no manual assembly, no lost data." },
                ].map((item) => (
                  <ScrollReveal key={item.num}>
                    <div className="border-l-2 pl-6" style={{ borderColor: `${ACCENT}33` }}>
                      <p className="mb-2 text-sm font-semibold" style={{ color: ACCENT, fontFamily: BODY }}>{item.num}</p>
                      <p className="text-sm leading-relaxed text-white/40" style={{ fontFamily: BODY }}>{item.text}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ─── MNI-X 3D Kit (GRC equivalent) ──────────────────── */}
        <section className="relative overflow-hidden border-t border-white/8 py-32">
          <span className="pointer-events-none absolute -left-10 top-1/2 -translate-y-1/2 select-none font-bold text-white/[0.025]"
            style={{ fontFamily: DISPLAY, fontSize: "clamp(6rem, 18vw, 16rem)", lineHeight: 1 }}>
            MNI-X
          </span>
          <Container className="relative">
            <ScrollReveal>
              <p className="text-[10px] tracking-[0.35em] uppercase text-white/30 mb-4" style={{ fontFamily: BODY }}>/ product</p>
              <h2 className="font-bold text-white mb-3" style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                MNI-X 3D Kit
              </h2>
              <p className="mb-12 text-xs tracking-widest uppercase" style={{ color: ACCENT, fontFamily: BODY }}>
                Physical Cyber Warfare Visualization
              </p>
            </ScrollReveal>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                { title: "Board-Level Communication",   text: "Make invisible cyber threats tangible for non-technical executives who control security budgets." },
                { title: "Tabletop Exercise Enhancement", text: "Physical 3D models as the game board during iTTX sessions for dramatically more engaging exercises." },
                { title: "SOC Team Training",           text: "Physical escalation path models help analysts understand communication flows during incidents." },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="p-8 hover:scale-[1.02] transition-all duration-500"
                    style={{ backgroundImage: ABOUT_CARD_BG, borderRadius: "9px" }}>
                    <p className="mb-4 font-bold leading-none" style={{ fontFamily: DISPLAY, fontSize: "3rem", color: `${ACCENT}40` }}>
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mb-3 font-semibold text-white" style={{ fontFamily: DISPLAY, fontSize: "1.125rem" }}>
                      {item.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-white/40" style={{ fontFamily: BODY }}>{item.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.3}>
              <div className="mt-12 flex items-center justify-between border-t border-white/8 pt-8">
                <p className="text-sm leading-relaxed text-white/40 max-w-lg" style={{ fontFamily: BODY }}>
                  The MNI-X 3D Kit transforms abstract cyber concepts into physical, touchable models — making the invisible war visible.
                </p>
                <Link href={routes.mniX3dKit}
                  className="shrink-0 ml-8 text-[10px] tracking-[0.3em] uppercase text-white/30 hover:text-white transition-colors"
                  style={{ fontFamily: BODY }}>
                  Find Out More →
                </Link>
              </div>
            </ScrollReveal>
          </Container>
        </section>

        {/* ─── Partners marquee ─────────────────────────────────── */}
        <section className="border-y border-white/8 py-12" style={{ backgroundImage: SECTION_BG }}>
          <Container>
            <p className="mb-8 text-center text-[10px] tracking-[0.35em] uppercase text-white/30"
              style={{ fontFamily: BODY }}>
              / Our Valued Clients
            </p>
            <div className="overflow-hidden">
              <div className="marquee-track flex items-center whitespace-nowrap" style={{ animationDuration: "50s" }}>
                {[...partnerLogos, ...partnerLogos].map((logo, i) => (
                  <div key={i} className="mx-5 shrink-0 flex items-center justify-center rounded-lg"
                    style={{ backgroundColor: "#c8c8c8", width: "160px", height: "80px", padding: "12px 16px" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      style={{ maxWidth: "128px", maxHeight: "56px", width: "auto", height: "auto", objectFit: "contain" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ─── our / cases / ───────────────────────────────────── */}
        <section className="relative overflow-hidden py-32">
          <SideTag label="/ cases" />
          <span className="pointer-events-none absolute -right-10 top-0 select-none font-bold text-white/[0.03]"
            style={{ fontFamily: DISPLAY, fontSize: "clamp(6rem, 20vw, 18rem)", lineHeight: 1 }}>
            cases
          </span>
          <Container className="relative">
            <ScrollReveal>
              <p className="mb-3 text-[10px] tracking-[0.35em] uppercase text-white/30" style={{ fontFamily: BODY }}>/ our cases</p>
              <h2 className="mb-16 font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                our&nbsp;<span style={gradStyle}>/ cases /</span>
              </h2>
            </ScrollReveal>

            <ul className="divide-y divide-white/8">
              {cases.map((c, i) => (
                <ScrollReveal key={c.num} delay={i * 0.06}>
                  <li className="group grid grid-cols-[4rem_1fr] gap-8 py-10 md:grid-cols-[5rem_1fr_auto]">
                    <span className="text-sm font-semibold" style={{ color: ACCENT, fontFamily: BODY }}>/ {c.num}</span>
                    <div>
                      <p className="mb-2 text-[10px] tracking-widest uppercase text-white/30" style={{ fontFamily: BODY }}>{c.tag}</p>
                      <h3 className="mb-3 font-semibold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(1.125rem, 2vw, 1.5rem)" }}>
                        {c.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-white/40" style={{ fontFamily: BODY }}>{c.excerpt}</p>
                    </div>
                    <div className="hidden md:flex items-center">
                      <span className="text-[10px] tracking-widest uppercase text-white/20 group-hover:text-white/60 transition-colors"
                        style={{ fontFamily: BODY }}>Find Out More →</span>
                    </div>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </Container>
        </section>


      </main>
      <Footer />
    </>
  );
}
