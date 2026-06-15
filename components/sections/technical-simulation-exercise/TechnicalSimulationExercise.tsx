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

const CARD_BG   = "linear-gradient(339deg, rgba(0,197,205,0.04) 18%, rgba(84,84,84,0.08) 77%)";
const SECTION_BG = "linear-gradient(300deg, #050505, #000000 56%, #080808)";

/* ── Hero ─────────────────────────────────────────────────── */
export function TechnicalSimulationExerciseHero() {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden pb-20 pt-32">
      <div className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full opacity-10 blur-[120px]"
        style={{ background: `radial-gradient(circle, ${ACCENT} 0%, transparent 65%)` }} aria-hidden="true" />
      <span className="pointer-events-none absolute bottom-0 right-0 select-none font-bold leading-none text-white/[0.025]"
        style={{ fontFamily: DISPLAY, fontSize: "clamp(6rem, 22vw, 20rem)", lineHeight: 1 }}>
        TSX
      </span>
      <Container className="relative">
        <p className="mb-4 text-[11px] tracking-[0.35em] uppercase text-white/30" style={{ fontFamily: BODY }}>
          / Technical Simulation Exercise
        </p>
        <h1 className="font-bold leading-[0.92] tracking-tight" style={{ fontFamily: DISPLAY, fontSize: "clamp(3rem, 9vw, 8rem)" }}>
          <span className="block text-white">Technical</span>
          <span className="block"><span style={gradStyle}>/ Simulation /</span></span>
          <span className="block text-white">Exercise</span>
        </h1>
        <p className="mt-8 max-w-xl text-sm leading-relaxed text-white/40" style={{ fontFamily: BODY }}>
          Attack Simulation Against Your Defenses with Real-World Custom-Crafted Techniques, Tactics and Procedures.
        </p>
        <p className="mt-4 text-xs tracking-[0.3em] uppercase" style={{ color: ACCENT, fontFamily: BODY }}>
          ( TSX )
        </p>
      </Container>
    </section>
  );
}

/* ── Methodology ──────────────────────────────────────────── */
export function TechnicalSimulationExerciseMethodologySection() {
  const cards = [
    {
      num: "01",
      title: "Custom Threat Modeling",
      videoSrc: "/images/customthreat.mp4",
      points: [
        { label: "Payload Engineering", text: "Crafting multi-stage, bespoke exploits." },
        { label: "Stealth & Evasion",   text: "Bypassing advanced threat detection and sandboxes." },
        { label: "Attack Vector Analysis", text: "Mapping organization-specific weaknesses." },
      ],
    },
    {
      num: "02",
      title: "SD-WAF Injection Delivery",
      videoSrc: "/images/sdwaf.mp4",
      points: [
        { label: "Advanced Obfuscation",   text: "Evading web application firewalls." },
        { label: "Targeted Injection Points", text: "Exploiting API and application logic flaws." },
        { label: "Protocol Manipulation",  text: "Leveraging non-standard communication channels." },
      ],
    },
  ];

  return (
    <section className="py-32" style={{ backgroundImage: SECTION_BG }}>
      <Container>
        <p className="mb-3 text-[10px] tracking-[0.35em] uppercase text-white/30" style={{ fontFamily: BODY }}>/ methodology</p>
        <h2 className="mb-16 font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          Tailored&nbsp;<span style={gradStyle}>/ Attack Simulation /</span>
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          {cards.map((card) => (
            <div key={card.num} className="overflow-hidden transition-all duration-500 hover:scale-[1.01]"
              style={{ backgroundImage: CARD_BG, borderRadius: "9px" }}>
              <div className="overflow-hidden" style={{ borderRadius: "9px 9px 0 0" }}>
                <video src={card.videoSrc} autoPlay loop muted playsInline
                  className="aspect-video w-full object-cover" aria-label={card.title} />
              </div>
              <div className="p-8">
                <div className="mb-4 flex items-center gap-4">
                  <span className="text-sm font-semibold" style={{ color: ACCENT, fontFamily: BODY }}>/ {card.num}</span>
                  <h3 className="font-semibold text-white" style={{ fontFamily: DISPLAY, fontSize: "1.25rem" }}>{card.title}</h3>
                </div>
                <div className="space-y-3">
                  {card.points.map((p) => (
                    <p key={p.label} className="text-sm text-white/50" style={{ fontFamily: BODY }}>
                      <span style={{ color: ACCENT }}>/ </span>
                      <span className="text-white/70">{p.label}:</span> {p.text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Benefits ─────────────────────────────────────────────── */
export function TechnicalSimulationExerciseBenefitsSection() {
  const items = [
    {
      num: "01",
      title: "Infrastructure Validation",
      points: ["Validate firewall, IPS, and WAF configurations.", "Assess cloud security posture (AWS, Azure, GCP).", "Verify network segmentation effectiveness."],
    },
    {
      num: "02",
      title: "Detection & Response Tuning",
      points: ["Optimize SOC alert accuracy and tuning.", "Test EDR and SIEM detection logic.", "Improve mean time to detect and respond."],
    },
    {
      num: "03",
      title: "Process & People Readiness",
      points: ["Evaluate incident response plan effectiveness.", "Train SOC analysts in real-world scenarios.", "Identify communication and decision-making gaps."],
    },
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
          Live Simulation&nbsp;<span style={gradStyle}>/ Benefits /</span>
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <div key={item.num} className="p-8 transition-all duration-500 hover:scale-[1.02]"
              style={{ backgroundImage: CARD_BG, borderRadius: "9px" }}>
              <span className="block mb-6 font-bold leading-none" style={{ fontFamily: DISPLAY, fontSize: "3rem", color: `${ACCENT}40` }}>
                {item.num}
              </span>
              <h3 className="mb-4 font-semibold text-white" style={{ fontFamily: DISPLAY, fontSize: "1.125rem" }}>{item.title}</h3>
              <div className="space-y-2">
                {item.points.map((p) => (
                  <p key={p} className="text-xs text-white/50" style={{ fontFamily: BODY }}>
                    <span style={{ color: ACCENT }}>/</span> {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Lifecycle (Kill Chain) ───────────────────────────────── */
export function TechnicalSimulationExerciseLifecycleSection() {
  const steps = [
    { num: "01", title: "Reconnaissance",    desc: "Passive & active intelligence gathering on target infrastructure." },
    { num: "02", title: "Weaponization",     desc: "Custom payload engineering matched to discovered attack vectors." },
    { num: "03", title: "Delivery",          desc: "Multi-channel delivery including phishing, web, and network vectors." },
    { num: "04", title: "Exploitation",      desc: "Leveraging application, OS, and logic vulnerabilities." },
    { num: "05", title: "Installation",      desc: "Establishing persistence through implants and backdoors." },
    { num: "06", title: "Command & Control", desc: "C2 channel establishment and lateral movement across the network." },
    { num: "07", title: "Actions on Objectives", desc: "Data exfiltration, disruption, or objective achievement simulation." },
  ];

  return (
    <section className="relative overflow-hidden border-t border-white/8 py-32" style={{ backgroundImage: SECTION_BG }}>
      <span className="pointer-events-none absolute -left-10 top-1/4 select-none font-bold text-white/[0.025]"
        style={{ fontFamily: DISPLAY, fontSize: "clamp(6rem, 18vw, 16rem)", lineHeight: 1 }}>
        lifecycle
      </span>
      <Container className="relative">
        <p className="mb-3 text-[10px] tracking-[0.35em] uppercase text-white/30" style={{ fontFamily: BODY }}>/ exercise lifecycle</p>
        <h2 className="mb-16 font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          Kill Chain&nbsp;<span style={gradStyle}>/ Stages /</span>
        </h2>
        <ul className="divide-y divide-white/8">
          {steps.map((step) => (
            <li key={step.num} className="group flex items-start gap-8 py-8 transition-all">
              <span className="w-12 shrink-0 text-sm font-semibold" style={{ color: ACCENT, fontFamily: BODY }}>/ {step.num}</span>
              <div>
                <h3 className="font-semibold text-white group-hover:text-white transition-all"
                  style={{ fontFamily: DISPLAY, fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}>
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-white/40" style={{ fontFamily: BODY }}>{step.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
