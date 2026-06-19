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
export function MniXHero() {
  return (
    <section className="relative flex min-h-[80vh] items-end overflow-hidden pb-20 pt-32">
      <div className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full opacity-10 blur-[120px]"
        style={{ background: `radial-gradient(circle, ${ACCENT} 0%, transparent 65%)` }} aria-hidden="true" />
      <span className="pointer-events-none absolute bottom-0 right-0 select-none font-bold leading-none text-white/[0.025]"
        style={{ fontFamily: DISPLAY, fontSize: "clamp(4rem, 14vw, 12rem)", lineHeight: 1 }}>
        MNI-X
      </span>
      <Container className="relative z-10 grid items-end gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-[11px] tracking-[0.35em] uppercase text-white/30" style={{ fontFamily: BODY }}>/ product</p>
          <h1 className="font-bold leading-[0.92] tracking-tight" style={{ fontFamily: DISPLAY, fontSize: "clamp(3rem, 9vw, 8rem)" }}>
            <span style={gradStyle}>MNI-X</span><br />
            <span className="text-white">3D Kit</span>
          </h1>
          <p className="mt-4 text-sm font-semibold text-white/70" style={{ fontFamily: BODY }}>
            Visualising the Invisible War
          </p>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/40" style={{ fontFamily: BODY }}>
            To become the prime standard for physical cyber security visualization, empowering teams to train more effectively, plan incident response more clearly, and communicate risk to stakeholders with unparalleled clarity.
          </p>
          <p className="mt-4 text-xs tracking-[0.3em] uppercase" style={{ color: ACCENT, fontFamily: BODY }}>
            ( Physical Cyber Warfare Visualization )
          </p>
        </div>
        <div className="overflow-hidden border border-white/8" style={{ borderRadius: "9px" }}>
          <Image src="/images/mni.jpg" alt="MNI-X 3D Kit — physical cyber security visualization"
            width={720} height={480} className="h-full w-full object-cover" />
        </div>
      </Container>
    </section>
  );
}

/* ── The Problem ──────────────────────────────────────────── */
export function MniXProblemSection() {
  const painPoints = [
    {
      title: "Misunderstood Risk",
      text: "Non-technical leaders cannot grasp invisible threats like Zero Trust gaps or ransomware kill chains without a tangible representation.",
    },
    {
      title: "Poor Budget Allocation",
      text: "When risk cannot be seen, it cannot be properly funded. Security teams lose boardroom battles because they speak in abstractions.",
    },
    {
      title: "Ineffective Incident Response",
      text: "Teams trained on 2D diagrams and slide decks struggle to coordinate effectively when a live breach unfolds in real time.",
    },
  ];

  return (
    <section className="theme-section-bg border-y border-white/8 py-32" style={{ backgroundImage: SECTION_BG }}>
      <Container>
        <p className="mb-3 text-[10px] tracking-[0.35em] uppercase text-white/30" style={{ fontFamily: BODY }}>/ the challenge</p>
        <h2 className="mb-6 font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          The&nbsp;<span style={gradStyle}>/ Visualization Gap /</span>
        </h2>
        <p className="mb-16 max-w-2xl text-sm leading-relaxed text-white/40" style={{ fontFamily: BODY }}>
          The cybersecurity industry runs on abstraction. Concepts like &ldquo;Zero Trust,&rdquo; &ldquo;ransomware kill chains,&rdquo; and &ldquo;DDoS mitigation&rdquo; are complex, invisible, and difficult to explain to non-technical leaders, new hires, and even internal teams.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {painPoints.map((p, i) => (
            <div key={p.title} className="p-8 transition-all duration-500 hover:scale-[1.02]"
              style={{ backgroundImage: CARD_BG, borderRadius: "9px" }}>
              <span className="block mb-6 font-bold leading-none" style={{ fontFamily: DISPLAY, fontSize: "3rem", color: `${ACCENT}40` }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-3 font-semibold text-white" style={{ fontFamily: DISPLAY, fontSize: "1.125rem" }}>{p.title}</h3>
              <p className="text-sm leading-relaxed text-white/50" style={{ fontFamily: BODY }}>{p.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── The Opportunity ──────────────────────────────────────── */
export function MniXOpportunitySection() {
  const useCases = [
    {
      title: "Simplify Technical Flow",
      description: "Abstract attack paths become tangible. A manager can hold a physical Ransomware Kill Chain — from phishing email model to infected workstation to encrypted server with a physical lock icon.",
    },
    {
      title: "Improve Team Coordination",
      description: "SOC Team Kits with figures for L1, L2, and L3 analysts and escalation path models physically map communication flows during a live incident.",
    },
    {
      title: "Handle Service Breakdowns",
      description: "Incident Response Kits show a stable network versus a breached network — a firewall model with a physical hole, a data piece leaking out.",
    },
    {
      title: "Quantify Skills",
      description: "Stackable Cyber Skill Stack blocks. A Junior Analyst has blocks for SIEM and Triage, while a Senior Threat Hunter has Forensics, Malware RE, and Threat Intel.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-32">
      <span className="pointer-events-none absolute -left-10 top-1/2 -translate-y-1/2 select-none font-bold text-white/[0.025]"
        style={{ fontFamily: DISPLAY, fontSize: "clamp(6rem, 18vw, 16rem)", lineHeight: 1 }}>
        solve
      </span>
      <Container className="relative">
        <p className="mb-3 text-[10px] tracking-[0.35em] uppercase text-white/30" style={{ fontFamily: BODY }}>/ the opportunity</p>
        <h2 className="mb-16 font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          What We&nbsp;<span style={gradStyle}>/ Solve /</span>
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {useCases.map((item, i) => (
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

/* ── Products & Services ──────────────────────────────────── */
export function MniXProductsSection() {
  const products = [
    {
      tier: "01",
      badge: "Premium",
      title: "Customized Threat Modeling",
      tagline: "High-Margin · Project-Based",
      description: "A high-value consulting service. A CISO hires us to create a 3D model of their specific network architecture to visualize how a particular threat — such as a specific APT group — would move through their environment.",
      note: "A one-of-a-kind model: a true \"crown jewel\" for a company's security planning.",
    },
    {
      tier: "02",
      badge: "E-Commerce",
      title: "Standardized Cyber Kits",
      tagline: "Scalable · Ready-to-Buy",
      description: "Pre-designed kits that address the industry's most common, complex concepts.",
      kits: ["The Ransomware Kill Chain Kit", "The DDoS Attack Kit", "The Zero Trust Architecture Kit", "The SOC Coordination Kit"],
    },
    {
      tier: "03",
      badge: "Passive Income",
      title: "Digital File Sales (.STL)",
      tagline: "High-Margin · Passive",
      description: "Selling 3D-printable digital files for standardized kits. Many security professionals are tech enthusiasts who own 3D printers, providing high-margin, passive income.",
    },
    {
      tier: "04",
      badge: "Service",
      title: "Incident Response War Gaming",
      tagline: "High-Impact · Workshop-Based",
      description: "We facilitate tabletop exercises using our models as the game board. We simulate a live breach and have the company's IR team physically move pieces to respond — transforming a boring meeting into an engaging, high-impact wargame.",
    },
  ];

  return (
    <section className="theme-section-bg border-t border-white/8 py-32" style={{ backgroundImage: SECTION_BG }}>
      <Container>
        <p className="mb-3 text-[10px] tracking-[0.35em] uppercase text-white/30" style={{ fontFamily: BODY }}>/ offerings</p>
        <h2 className="mb-16 font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          Products &amp;&nbsp;<span style={gradStyle}>/ Services /</span>
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div key={p.tier} className="p-8 transition-all duration-500 hover:scale-[1.02]"
              style={{ backgroundImage: CARD_BG, borderRadius: "9px" }}>
              <div className="mb-6 flex items-start justify-between gap-3">
                <span className="font-bold leading-none" style={{ fontFamily: DISPLAY, fontSize: "3rem", color: `${ACCENT}40` }}>{p.tier}</span>
                <span className="mt-1 border px-3 py-1 text-[9px] tracking-widest uppercase" style={{ borderColor: `${ACCENT}40`, color: ACCENT, fontFamily: BODY }}>
                  {p.badge}
                </span>
              </div>
              <h3 className="mb-1 font-semibold text-white" style={{ fontFamily: DISPLAY, fontSize: "1rem" }}>{p.title}</h3>
              <p className="mb-4 text-[10px] tracking-widest uppercase text-white/30" style={{ fontFamily: BODY }}>{p.tagline}</p>
              <p className="text-xs leading-relaxed text-white/50" style={{ fontFamily: BODY }}>{p.description}</p>
              {p.kits && (
                <ul className="mt-4 space-y-2">
                  {p.kits.map((kit) => (
                    <li key={kit} className="flex items-center gap-2 text-xs text-white/50" style={{ fontFamily: BODY }}>
                      <span style={{ color: ACCENT }}>/</span> {kit}
                    </li>
                  ))}
                </ul>
              )}
              {p.note && (
                <p className="mt-4 border-l-2 pl-3 text-xs italic text-white/40" style={{ borderColor: `${ACCENT}40`, fontFamily: BODY }}>
                  {p.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
