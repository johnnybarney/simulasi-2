import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HeroAnimated } from "@/components/sections/home/HeroAnimated";
import { ScrollAnchorRestore } from "@/components/ui/ScrollAnchorRestore";
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
const NEEDS_CARD_BG   = "linear-gradient(145deg, rgba(0,197,205,0.08) 32%, rgba(84,84,84,0.12) 73%)";
const SECTION_BG      = "linear-gradient(300deg, #050505, #000000 56%, #080808)";

/* ── page data ───────────────────────────────────────────────── */
const needItems = [
  { title: "Test your defenses",  lines: ["Red team operations", "Adversarial simulation"] },
  { title: "Train your team",     lines: ["Tabletop exercises", "Technical drills", "Decision-making frameworks"] },
  { title: "Map your exposure",   lines: ["OSINT reconnaissance", "Dark web analysis", "Attack surface discovery"] },
  { title: "Build resilience",    lines: ["Maturity assessment", "Skills development", "Playbook creation"] },
  { title: "Respond faster",      lines: ["Incident Response simulation", "Playbook refinement", "Escalation rehearsals"] },
  { title: "Prove compliance",    lines: ["Framework alignment", "Audit-ready reporting", "Regulatory mapping"] },
];

const marqueeItems = ["Cyber Resilience", "Attack Simulation", "Threat Intelligence", "Mission Assurance", "War Gaming", "Recon Intel", "Capacity Building", "CE-C2"];
const partnerLogos = [
  { src: "/images/petronas.png",        alt: "Petronas" },
  { src: "/images/kaf-logo.png",        alt: "KAF" },
  { src: "/images/nacsa.png",           alt: "NACSA" },
  { src: "/images/malakoff.png",        alt: "Malakoff" },
  { src: "/images/malaysiaairports.png",alt: "Malaysia Airports" },
  { src: "/images/raya.png",            alt: "Raya Airways" },
  { src: "/images/sepang2.png",         alt: "Sepang Aircraft Engineering" },
  { src: "/images/ssm.png",             alt: "SSM" },
  { src: "/images/umw.png",             alt: "UMW" },
  { src: "/images/universiti.png",      alt: "Universiti Malaya" },
  { src: "/images/coway.png",           alt: "Coway" },
  { src: "/images/heitech.png",         alt: "HeiTech" },
  { src: "/images/pidm.png",            alt: "PIDM" },
  { src: "/images/lhdn.png",            alt: "LHDN" },
  { src: "/images/jpj.png",             alt: "JPJ" },
  { src: "/images/kdn.png",             alt: "KDN" },
  { src: "/images/tudm.png",            alt: "TUDM" },
  { src: "/images/kwap1.png",           alt: "KWAP" },
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
        <ScrollAnchorRestore />

        {/* ─── Hero ─────────────────────────────────────────────── */}
        <HeroAnimated />

        {/* ─── Partners marquee ─────────────────────────────────── */}
        <section className="theme-section-bg trusted-by-section border-y border-white/8 py-12" style={{ backgroundImage: SECTION_BG }}>
          <Container>
            <ScrollReveal>
              <p className="mb-3 text-[10px] tracking-[0.35em] uppercase text-white/50" style={{ fontFamily: BODY }}>
                / trusted by
              </p>
              <h2 className="mb-10 font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                trusted&nbsp;<span style={gradStyle}>/ by /</span>
              </h2>
            </ScrollReveal>
            <div className="overflow-hidden">
              <div className="marquee-track flex items-center whitespace-nowrap" style={{ animationDuration: "50s" }}>
                {[...partnerLogos, ...partnerLogos].map((logo, i) => (
                  <div key={i} className="partner-logo-pill mx-5 shrink-0 flex items-center justify-center rounded-lg"
                    style={{ backgroundColor: "#c8c8c8", width: "260px", height: "120px", padding: "10px 12px" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      style={{ maxWidth: "220px", maxHeight: "95px", width: "auto", height: "auto", objectFit: "contain" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ─── simulasi / platform spotlight ── */}
        <section className="theme-section-bg border-y border-white/8 py-24" style={{ backgroundImage: SECTION_BG }}>
          <Container>
            <div className="grid gap-16 lg:grid-cols-2">
              <ScrollReveal>
                <div>
                  <p className="text-[10px] tracking-[0.35em] uppercase text-white/50 mb-4" style={{ fontFamily: BODY }}>/ KESIAPSIAGAAN PROGRAM</p>
                  <h3 className="font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(3rem, 6vw, 5rem)" }}>
                    simulasi
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/40" style={{ fontFamily: BODY }}>
                    / Intelligence-driven cyber warfare simulation for sovereign defense.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="text-base leading-relaxed text-white/70 md:text-lg text-left" style={{ fontFamily: BODY }}>
                  <span className="block">Forging measurable, battle-tested resilience across critical</span>
                  <span className="block">infrastructure and national security sectors.</span>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </section>

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
                  <p className="mb-3 text-[10px] tracking-[0.35em] uppercase text-white/50" style={{ fontFamily: BODY }}>
                    / strategic capabilities
                  </p>
                  <div className="mb-16">
                    <h2 className="font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                      Our&nbsp;<span style={gradStyle}>/ Strategic /</span><br />Capabilities
                    </h2>
                    <p className="mt-4 text-[10px] tracking-[0.3em] uppercase text-white/50" style={{ fontFamily: BODY }}>
                      Click the card to learn more
                    </p>
                  </div>
                </ScrollReveal>

                <div className="capability-cards grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {servicePillars.items.map((item, i) => (
                    <ScrollReveal key={item.title} delay={i * 0.08} className="h-full">
                      <Link href={pillarRoutes[i]}
                        className="capability-card group relative grid h-full min-h-[320px] w-full overflow-hidden p-8 transition-all duration-500 hover:scale-[1.02]"
                        style={{
                          backgroundImage: NEEDS_CARD_BG,
                          borderRadius: "9px",
                          gridTemplateRows: "3.25rem minmax(4.75rem, auto) minmax(0, 1fr) auto auto",
                        }}>
                        {/* hover glow */}
                        <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{ background: `linear-gradient(${ACCENT2}, ${ACCENT})`, borderRadius: "100%" }} aria-hidden="true" />

                        {/* row 1 — number */}
                        <span className="w-full font-bold leading-none" style={{ fontFamily: DISPLAY, fontSize: "2.75rem", color: `${ACCENT}35` }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        {/* row 2 — title + service code (stacked) */}
                        <div className="w-full">
                          <h3 className="mb-1.5 line-clamp-2 font-semibold leading-snug text-white" style={{ fontFamily: DISPLAY, fontSize: "1.125rem", letterSpacing: "0.02em" }}>
                            {item.title}
                          </h3>
                          {item.titleCode && (
                            <p className="line-clamp-2 text-[11px] leading-relaxed tracking-[0.25em] uppercase" style={{ color: ACCENT, fontFamily: BODY }}>
                              ( {item.titleCode} )
                            </p>
                          )}
                        </div>

                        {/* row 3 — description (fills remaining space) */}
                        <p className="mb-6 min-h-0 w-full text-sm leading-relaxed text-white/40" style={{ fontFamily: BODY }}>
                          {item.description}
                        </p>

                        {/* row 4 — full-width divider (always aligns with card edges) */}
                        <div className="w-full border-t" style={{ borderColor: `${ACCENT}20` }} aria-hidden="true" />

                        {/* row 5 — strategic value */}
                        <div className="flex w-full items-start gap-6 pt-4">
                          <span className="capability-strategic-label shrink-0 whitespace-nowrap text-[10px] tracking-[0.2em] uppercase" style={{ fontFamily: BODY }}>
                            Strategic Value
                          </span>
                          <span className="capability-strategic-text text-[10px] leading-relaxed tracking-[0.15em] uppercase font-medium" style={{ fontFamily: BODY }}>
                            {item.strategicValueLines ? (
                              item.strategicValueLines.map((line) => (
                                <span key={line} className="block">{line}</span>
                              ))
                            ) : (
                              item.strategicValue
                            )}
                          </span>
                        </div>
                      </Link>
                    </ScrollReveal>
                  ))}
                </div>
              </Container>
            </section>
          );
        })()}

        {/* ─── divider ──────────────────────────────────────────── */}
        <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${ACCENT2} 40%, ${ACCENT}, ${ACCENT2} 60%, transparent)` }} />

        {/* ─── why you need to ──────────────────────────────────── */}
        <section className="relative py-32">
          <SideTag label="/ why you need to" />
          {/* watermark clipped separately so it doesn't block scroll */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <span className="absolute -left-10 top-1/2 -translate-y-1/2 select-none font-bold text-white/[0.03]"
              style={{ fontFamily: DISPLAY, fontSize: "clamp(6rem, 20vw, 18rem)", lineHeight: 1 }}>
              needs
            </span>
          </div>
          <Container className="relative mb-12">
            <ScrollReveal>
              <p className="mb-3 text-[10px] tracking-[0.35em] uppercase text-white/50" style={{ fontFamily: BODY }}>/ why you need to</p>
              <h2 className="font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                why you<br />need&nbsp;<span style={gradStyle}>/ to /</span>
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
                    style={{ fontFamily: DISPLAY, fontSize: "3.25rem", color: "rgba(0,197,205,0.3)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="relative font-semibold text-white mb-4"
                    style={{ fontFamily: DISPLAY, fontSize: "1.25rem" }}>
                    {item.title}
                  </h3>
                  <div className="relative space-y-2">
                    {item.lines.map((line) => (
                      <p key={line} className="text-sm text-white/50" style={{ fontFamily: BODY }}>
                        <span style={{ color: ACCENT }}>/</span> {line}
                      </p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* ─── Marquee ──────────────────────────────────────────── */}
        <div className="overflow-hidden border-y border-white/8 py-5">
          <div className="marquee-track flex whitespace-nowrap">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="mx-10 text-[11px] tracking-[0.3em] uppercase text-white/60"
                style={{ fontFamily: BODY }}>
                {item} <span style={{ color: ACCENT }}>✦</span>
              </span>
            ))}
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
