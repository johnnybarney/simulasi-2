import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { routes } from "@/lib/navigation";
import { homeContent } from "@/lib/constants/home";

/* ── Xizt design tokens ──────────────────────────────────────── */
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

/* ── Xizt card backgrounds ───────────────────────────────────── */
const ABOUT_CARD_BG   = "linear-gradient(339deg, rgba(114,111,119,0.05) 18%, rgba(255,255,255,0.05) 77%)";
const NEEDS_CARD_BG   = "linear-gradient(145deg, rgba(114,110,119,0.15) 32%, rgba(255,255,255,0.15) 73%)";
const SECTION_BG      = "linear-gradient(300deg, #161616, #0f0f0f 56%, #1a1919)";

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
  { src: "/images/petronas2.png",       alt: "Petronas" },
  { src: "/images/kaf-logo.png",        alt: "KAF" },
  { src: "/images/kwap.png",            alt: "KWAP" },
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
];
const budgetRanges = ["1 – 5K", "5 – 10K", "10 – 20K", "20 – 50K", "> 50K"];

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
        <section className="relative flex min-h-screen items-end overflow-hidden pb-20 pt-20">
          {/* Xizt-style orchid glow blob */}
          <div className="pointer-events-none absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full opacity-15 blur-[120px]"
            style={{ background: `radial-gradient(circle, ${ORCHID} 0%, transparent 65%)` }} aria-hidden="true" />
          {/* watermark */}
          <span className="pointer-events-none absolute bottom-0 right-0 select-none font-bold leading-none text-white/[0.03]"
            style={{ fontFamily: DISPLAY, fontSize: "clamp(8rem, 28vw, 24rem)", lineHeight: 1 }}>
            simulasi
          </span>

          <Container className="relative">
            <ScrollReveal delay={0.1}>
              <p className="mb-6 text-[11px] tracking-[0.35em] uppercase text-white/40"
                style={{ fontFamily: BODY }}>
                / Cyber Resilience &amp; Simulation Platform
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              {/* Xizt layout: small tagline above hero */}
              <p className="mb-4 text-sm text-white/50" style={{ fontFamily: BODY }}>
                Professional cyber simulation experts, providing a full package of resilience services and solutions
              </p>
              <p className="mb-6 text-xs tracking-widest uppercase text-white/30" style={{ fontFamily: BODY }}>
                Innovation at every turn
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h1 className="font-bold leading-[0.92] tracking-tight"
                style={{ fontFamily: DISPLAY, fontSize: "clamp(3.5rem, 12vw, 10rem)" }}>
                <span className="block text-white">Turn Threats</span>
                <span className="block">
                  <span className="text-white">into&nbsp;</span>
                  <span style={gradStyle}>/ Dominance /</span>
                </span>
              </h1>
            </ScrollReveal>

            {/* cloud-provider-style logos (Xizt has AWS / Azure / Google Cloud) */}
            <ScrollReveal delay={0.35}>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
                {techLogos.map((logo) => (
                  <span key={logo} className="text-xs tracking-[0.2em] uppercase text-white/25 border border-white/8 px-3 py-1.5"
                    style={{ fontFamily: BODY }}>
                    {logo}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="mt-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <p className="max-w-md text-sm leading-relaxed text-white/40" style={{ fontFamily: BODY }}>
                  {homeContent.hero.subtitle}
                </p>
                <Link href={routes.contact}
                  className="inline-block border border-white/20 px-10 py-4 text-[11px] tracking-[0.3em] uppercase text-white/60 hover:border-white hover:text-white transition-all duration-300 self-start"
                  style={{ fontFamily: BODY }}>
                  lets talk /
                </Link>
              </div>
            </ScrollReveal>
          </Container>
        </section>

        {/* ─── Marquee ──────────────────────────────────────────── */}
        <div className="overflow-hidden border-y border-white/8 py-5">
          <div className="marquee-track flex whitespace-nowrap">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="mx-10 text-[11px] tracking-[0.3em] uppercase text-white/20"
                style={{ fontFamily: BODY }}>
                {item} <span style={{ color: ORCHID }}>✦</span>
              </span>
            ))}
          </div>
        </div>

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
                      <span className="block text-sm font-semibold mb-4" style={{ color: ORCHID, fontFamily: BODY }}>
                        {item.num}
                      </span>
                      <h3 className="font-semibold text-white mb-3"
                        style={{ fontFamily: DISPLAY, fontSize: "1.125rem" }}>
                        {item.title}
                      </h3>
                      <div className="space-y-1">
                        {item.lines.map((line) => (
                          <p key={line} className="text-xs text-white/40" style={{ fontFamily: BODY }}>
                            <span style={{ color: ORCHID }}>/</span> {line}
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
        <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${CRIMSON} 40%, ${ORCHID}, ${CRIMSON} 60%, transparent)` }} />

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

          {/* horizontal scroll — pr ensures last card is fully visible */}
          <div className="overflow-x-auto pl-6 pr-6 lg:pl-12 lg:pr-12" style={{ scrollbarWidth: "none" }}>
            <ul className="flex gap-6 pb-4" style={{ width: "max-content" }}>
              {needItems.map((item, i) => (
                <li key={i}
                  className="group relative shrink-0 overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                  style={{ backgroundImage: NEEDS_CARD_BG, borderRadius: "9px", width: "27.5em", maxWidth: "320px", padding: "4em 2.5em 4em 4em" }}>
                  {/* Xizt glow inside card */}
                  <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(${CRIMSON}, ${ORCHID})`, borderRadius: "100%" }} aria-hidden="true" />
                  <span className="relative block font-bold leading-none mb-6"
                    style={{ fontFamily: DISPLAY, fontSize: "3.5rem", color: "rgba(182,76,247,0.3)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="relative font-semibold text-white mb-4"
                    style={{ fontFamily: DISPLAY, fontSize: "1.125rem" }}>
                    {item.title}
                  </h3>
                  <div className="relative space-y-2">
                    {item.lines.map((line) => (
                      <p key={line} className="text-xs text-white/50" style={{ fontFamily: BODY }}>
                        <span style={{ color: ORCHID }}>/</span> {line}
                      </p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
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
                        style={{ background: `linear-gradient(90deg, rgba(182,76,247,0.06) 0%, transparent 100%)` }} />
                      <div className="relative flex items-center gap-8">
                        <span className="w-12 shrink-0 text-sm font-semibold" style={{ color: ORCHID, fontFamily: BODY }}>/ {s.num}</span>
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
                <p className="mt-3 text-xs tracking-widest uppercase" style={{ color: ORCHID, fontFamily: BODY }}>
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
                    <div className="border-l-2 pl-6" style={{ borderColor: `${ORCHID}33` }}>
                      <p className="mb-2 text-sm font-semibold" style={{ color: ORCHID, fontFamily: BODY }}>{item.num}</p>
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
              <p className="mb-12 text-xs tracking-widest uppercase" style={{ color: ORCHID, fontFamily: BODY }}>
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
                    <p className="mb-4 font-bold leading-none" style={{ fontFamily: DISPLAY, fontSize: "3rem", color: `${ORCHID}40` }}>
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
            <p className="mb-8 text-center text-[10px] tracking-[0.35em] uppercase text-white/20"
              style={{ fontFamily: BODY }}>
              / Trusted Frameworks &amp; Partners
            </p>
            <div className="overflow-hidden">
              <div className="marquee-track flex items-center whitespace-nowrap" style={{ animationDuration: "35s" }}>
                {[...partnerLogos, ...partnerLogos].map((logo, i) => (
                  <div key={i} className="mx-10 flex h-12 w-32 shrink-0 items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={128}
                      height={48}
                      className="h-10 w-auto object-contain opacity-70"
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
                    <span className="text-sm font-semibold" style={{ color: ORCHID, fontFamily: BODY }}>/ {c.num}</span>
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

        {/* ─── Hey! We are ready to / help you!!! / ─────────────── */}
        <section className="relative overflow-hidden border-t border-white/8 py-32" style={{ backgroundImage: SECTION_BG }}>
          <div className="pointer-events-none absolute inset-0"
            style={{ background: `radial-gradient(ellipse 80% 50% at 50% 100%, ${ORCHID}18 0%, transparent 70%)` }} />
          <Container className="relative">
            <div className="grid gap-20 lg:grid-cols-2">
              <ScrollReveal>
                <p className="mb-4 text-[10px] tracking-[0.4em] uppercase text-white/30" style={{ fontFamily: BODY }}>/ ready to begin</p>
                <h2 className="font-bold leading-tight text-white"
                  style={{ fontFamily: DISPLAY, fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
                  Hey! We are ready<br />to&nbsp;<span style={gradStyle}>/ help you!!! /</span>
                </h2>
                <p className="mt-6 text-sm leading-relaxed text-white/40" style={{ fontFamily: BODY }}>
                  Tell us about your project and we will get back to you within 24 hours.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <form className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { label: "Name",  type: "text",  placeholder: "Your name" },
                      { label: "Email", type: "email", placeholder: "your@email.com" },
                    ].map((f) => (
                      <div key={f.label}>
                        <label className="mb-2 block text-[10px] tracking-[0.2em] uppercase text-white/40"
                          style={{ fontFamily: BODY }}>{f.label}</label>
                        <input type={f.type} placeholder={f.placeholder}
                          className="w-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/20 outline-none focus:border-white/40 transition-colors"
                          style={{ fontFamily: BODY }} />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="mb-3 block text-[10px] tracking-[0.2em] uppercase text-white/40"
                      style={{ fontFamily: BODY }}>Project Budget (USD)</label>
                    <div className="flex flex-wrap gap-2">
                      {budgetRanges.map((range) => (
                        <label key={range}
                          className="cursor-pointer border border-white/10 px-4 py-2 text-[11px] text-white/40 hover:border-white/30 hover:text-white/70 transition-all"
                          style={{ fontFamily: BODY }}>
                          <input type="radio" name="budget" value={range} className="sr-only" />
                          {range}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] tracking-[0.2em] uppercase text-white/40"
                      style={{ fontFamily: BODY }}>Message</label>
                    <textarea rows={4} placeholder="Tell us about your project..."
                      className="w-full resize-none border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/20 outline-none focus:border-white/40 transition-colors"
                      style={{ fontFamily: BODY }} />
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] tracking-[0.2em] uppercase text-white/40"
                      style={{ fontFamily: BODY }}>Add Attachment</label>
                    <div className="cursor-pointer border border-dashed border-white/10 px-4 py-6 text-center hover:border-white/20 transition-colors">
                      <p className="text-[11px] text-white/30" style={{ fontFamily: BODY }}>Click to upload or drag &amp; drop</p>
                    </div>
                  </div>

                  <button type="submit"
                    className="w-full border border-white/20 py-4 text-[11px] tracking-[0.3em] uppercase text-white/60 hover:border-white hover:text-white transition-all duration-300"
                    style={{ fontFamily: BODY }}>
                    Send Message /
                  </button>
                </form>
              </ScrollReveal>
            </div>
          </Container>
        </section>

      </main>
      <Footer />
    </>
  );
}
