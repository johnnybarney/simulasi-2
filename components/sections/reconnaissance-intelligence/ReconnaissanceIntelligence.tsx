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
export function ReconnaissanceIntelligenceHero() {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden pb-20 pt-32">
      <div className="pointer-events-none absolute -top-40 right-1/3 h-[500px] w-[500px] rounded-full opacity-10 blur-[120px]"
        style={{ background: `radial-gradient(circle, ${ACCENT} 0%, transparent 65%)` }} aria-hidden="true" />
      <span className="pointer-events-none absolute bottom-0 right-0 select-none font-bold leading-none text-white/[0.025]"
        style={{ fontFamily: DISPLAY, fontSize: "clamp(4rem, 14vw, 12rem)", lineHeight: 1 }}>
        recon
      </span>
      <Container className="relative z-10 grid items-end gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-[11px] tracking-[0.35em] uppercase text-white/30" style={{ fontFamily: BODY }}>
            / Reconnaissance Intelligence
          </p>
          <h1 className="font-bold leading-[0.92] tracking-tight" style={{ fontFamily: DISPLAY, fontSize: "clamp(2.5rem, 7vw, 6rem)" }}>
            <span className="block text-white">Reconnaissance</span>
            <span className="block"><span style={gradStyle}>/ Intelligence /</span></span>
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/40" style={{ fontFamily: BODY }}>
            Transform raw data into actionable military and cyber intelligence. Accelerate decision-making with automated sensemaking and predictive insights.
          </p>
          <p className="mt-4 text-xs tracking-[0.3em] uppercase" style={{ color: ACCENT, fontFamily: BODY }}>
            ( Recon Intel )
          </p>
        </div>
        <div className="overflow-hidden border border-white/8" style={{ borderRadius: "9px" }}>
          <video src="/images/jellybrain.mp4" autoPlay loop muted playsInline
            className="aspect-square w-full object-cover"
            aria-label="Reconnaissance intelligence visualization" />
        </div>
      </Container>
    </section>
  );
}

/* ── AI-Augmented Investigations ─────────────────────────── */
export function ReconnaissanceIntelligenceInvestigationsSection() {
  const features = [
    { num: "01", title: "Automated Sensemaking", description: "Synthesize vast datasets and identify patterns automatically using Large Language Models." },
    { num: "02", title: "AI Probes",              description: "Conduct deep, autonomous inquiries and test hypotheses across multiple data sources." },
    { num: "03", title: "Skill Gap Mitigation",   description: "Augment human capabilities and accelerate analyst learning curves with AI assistance." },
  ];

  const capabilities = [
    "GitHub Scraping", "Social Media Monitoring", "Meta-Search Engines",
    "Custom Web Scraping", "API Connectors", "Secure Data Storage",
  ];

  return (
    <section className="theme-section-bg py-32" style={{ backgroundImage: SECTION_BG }}>
      <Container>
        <p className="mb-3 text-[10px] tracking-[0.35em] uppercase text-white/30" style={{ fontFamily: BODY }}>/ ai-augmented</p>
        <h2 className="mb-16 font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          AI-Augmented&nbsp;<span style={gradStyle}>/ Investigations /</span>
        </h2>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="overflow-hidden border border-white/8" style={{ borderRadius: "9px" }}>
            <video src="/images/aimove.mp4" autoPlay loop muted playsInline
              className="aspect-video w-full object-cover"
              aria-label="AI analysis visualization" />
          </div>
          <div>
            <p className="mb-8 text-sm leading-relaxed text-white/50" style={{ fontFamily: BODY }}>
              Leveraging <span className="text-white/80">Large Language Models</span> to bridge the socio-technical gap in intelligence operations.
            </p>
            <div className="space-y-6">
              {features.map((f) => (
                <div key={f.num} className="border-l-2 pl-6" style={{ borderColor: `${ACCENT}33` }}>
                  <p className="mb-1 text-sm font-semibold" style={{ color: ACCENT, fontFamily: BODY }}>/ {f.num}</p>
                  <h3 className="mb-1 font-semibold text-white" style={{ fontFamily: DISPLAY }}>{f.title}</h3>
                  <p className="text-xs text-white/50" style={{ fontFamily: BODY }}>{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {capabilities.map((cap, i) => (
            <div key={cap} className="p-4 text-center transition-all hover:scale-[1.02]"
              style={{ backgroundImage: CARD_BG, borderRadius: "9px" }}>
              <p className="text-[10px] tracking-widest uppercase" style={{ color: ACCENT, fontFamily: BODY }}>/ {String(i + 1).padStart(2, "0")}</p>
              <p className="mt-2 text-xs text-white/70" style={{ fontFamily: BODY }}>{cap}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Automated Vulnerability Assessment ──────────────────── */
export function ReconnaissanceIntelligenceVulnerabilitySection() {
  const cards = [
    {
      title: "Attack Surface Mapping",
      description: "Continuous discovery and mapping of external assets, exposed services, and entry points across your digital footprint.",
    },
    {
      title: "Breached Data Discovery",
      description: "Search the deep and dark web for leaked credentials, exposed databases, and compromised organizational data.",
    },
    {
      title: "Automated Reconnaissance",
      description: "Zero-touch continuous monitoring using tools like Nmap and SpiderFoot to maintain real-time situational awareness.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-32">
      <span className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 select-none font-bold text-white/[0.025]"
        style={{ fontFamily: DISPLAY, fontSize: "clamp(6rem, 18vw, 16rem)", lineHeight: 1 }}>
        recon
      </span>
      <Container className="relative">
        <p className="mb-3 text-[10px] tracking-[0.35em] uppercase text-white/30" style={{ fontFamily: BODY }}>/ zero-touch reconnaissance</p>
        <h2 className="mb-16 font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          Automated&nbsp;<span style={gradStyle}>/ Vulnerability Assessment /</span>
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <div key={card.title} className="p-8 transition-all duration-500 hover:scale-[1.02]"
              style={{ backgroundImage: CARD_BG, borderRadius: "9px" }}>
              <span className="block mb-6 font-bold leading-none" style={{ fontFamily: DISPLAY, fontSize: "3rem", color: `${ACCENT}40` }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-3 font-semibold text-white" style={{ fontFamily: DISPLAY, fontSize: "1.125rem" }}>{card.title}</h3>
              <p className="text-sm leading-relaxed text-white/50" style={{ fontFamily: BODY }}>{card.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Digital Forensics ────────────────────────────────────── */
export function ReconnaissanceIntelligenceForensicsSection() {
  const items = [
    {
      title: "Deep/Dark Web Analysis",
      description: "Monitor underground forums, marketplaces, and hidden services for threats targeting your organization.",
    },
    {
      title: "HUMINT Digitization",
      description: "Structure human intelligence into searchable, actionable data with AI-assisted classification and linking.",
    },
    {
      title: "Business Intelligence",
      description: "Competitive and strategic insights from open-source data to inform executive and operational decisions.",
    },
  ];

  return (
    <section className="theme-section-bg border-y border-white/8 py-32" style={{ backgroundImage: SECTION_BG }}>
      <Container>
        <p className="mb-3 text-[10px] tracking-[0.35em] uppercase text-white/30" style={{ fontFamily: BODY }}>/ digital forensics</p>
        <h2 className="mb-16 font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          Uncover&nbsp;<span style={gradStyle}>/ Hidden Threats /</span>
        </h2>
        <ul className="divide-y divide-white/8">
          {items.map((item, i) => (
            <li key={item.title} className="group flex items-start gap-8 py-10">
              <span className="w-12 shrink-0 text-sm font-semibold" style={{ color: ACCENT, fontFamily: BODY }}>/ {String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-semibold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}>
                  {item.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/50" style={{ fontFamily: BODY }}>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ── Why Choose ───────────────────────────────────────────── */
export function ReconnaissanceIntelligenceWhyChooseSection() {
  const items = [
    {
      title: "Scalability",
      description: "Handle massive datasets across multiple sources simultaneously without compromising analysis depth or speed.",
    },
    {
      title: "Passive & Safe (Zero-Touch)",
      description: "Remain undetected during investigations with passive collection methods that protect your operational security.",
    },
    {
      title: "Actionable Insights",
      description: "Turn raw information into strategic advantage with prioritized, decision-ready intelligence deliverables.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-32">
      <span className="pointer-events-none absolute -left-10 top-1/2 -translate-y-1/2 select-none font-bold text-white/[0.025]"
        style={{ fontFamily: DISPLAY, fontSize: "clamp(6rem, 18vw, 16rem)", lineHeight: 1 }}>
        intel
      </span>
      <Container className="relative">
        <p className="mb-3 text-[10px] tracking-[0.35em] uppercase text-white/30" style={{ fontFamily: BODY }}>/ why simulasi</p>
        <h2 className="mb-16 font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          Why Choose&nbsp;<span style={gradStyle}>/ Simulasi /</span>
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
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
