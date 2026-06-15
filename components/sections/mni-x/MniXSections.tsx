import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { GradientText } from "@/components/ui/GradientText";

const iconKnockoutStyle = {
  mixBlendMode: "screen" as const,
  filter: "contrast(1.6) brightness(1.3) saturate(1.4)",
};

/* ── Hero ─────────────────────────────────────────────────── */
export function MniXHero() {
  return (
    <section className="py-16 md:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h1 className="font-headline text-4xl font-bold sm:text-5xl lg:text-[3.25rem]">
            <GradientText as="span">MNI-X 3D Kit</GradientText>
          </h1>
          <p className="mt-3 font-headline text-xl font-bold text-white md:text-2xl">
            Visualising the Invisible War
          </p>
          <p className="mt-6 text-base leading-relaxed text-white/90 md:text-lg">
            To become the prime standard for physical cyber security
            visualization, empowering teams to train more effectively, plan
            incident response more clearly, and communicate risk to stakeholders
            with unparalleled clarity.
          </p>
        </div>
        <div className="overflow-hidden rounded-lg border-gradient-cyan-magenta bg-cyber-bg">
          <Image
            src="/images/mni.jpg"
            alt="MNI-X 3D Kit — physical cyber security visualization"
            width={720}
            height={480}
            className="h-full w-full object-cover"
          />
        </div>
      </Container>
    </section>
  );
}

/* ── The Problem ──────────────────────────────────────────── */
export function MniXProblemSection() {
  const painPoints = [
    {
      label: "Misunderstood Risk",
      text: "Non-technical leaders cannot grasp invisible threats like Zero Trust gaps or ransomware kill chains without a tangible representation.",
    },
    {
      label: "Poor Budget Allocation",
      text: "When risk cannot be seen, it cannot be properly funded. Security teams lose boardroom battles because they speak in abstractions.",
    },
    {
      label: "Ineffective Incident Response",
      text: "Teams trained on 2D diagrams and slide decks struggle to coordinate effectively when a live breach unfolds in real time.",
    },
  ];

  return (
    <section className="relative py-16 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(0,229,255,0.08) 0px, rgba(0,229,255,0.08) 1px, transparent 1px, transparent 64px)",
        }}
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-cyan-neon">
            The Challenge
          </p>
          <h2 className="font-headline text-2xl font-bold text-white md:text-3xl">
            The Visualization Gap
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/80 md:text-lg">
            The cybersecurity industry runs on abstraction. Concepts like
            &ldquo;Zero Trust,&rdquo; &ldquo;ransomware kill chains,&rdquo; and
            &ldquo;DDoS mitigation&rdquo; are complex, invisible, and difficult
            to explain to non-technical leaders, new hires, and even internal
            teams.
          </p>
        </div>
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {painPoints.map((p) => (
            <li
              key={p.label}
              className="rounded-lg border-gradient-cyan-magenta bg-cyber-bg p-6 text-center"
            >
              <p className="mb-3 font-headline text-base font-bold text-cyan-neon">
                {p.label}
              </p>
              <p className="text-sm leading-relaxed text-white/80">{p.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ── The Opportunity ──────────────────────────────────────── */
export function MniXOpportunitySection() {
  const useCases = [
    {
      icon: "🎯",
      title: "Simplify Technical Flow",
      description:
        "Abstract attack paths become tangible. A manager can hold a physical Ransomware Kill Chain — from phishing email model to infected workstation to encrypted server with a physical lock icon.",
    },
    {
      icon: "🧩",
      title: "Improve Team Coordination",
      description:
        "SOC Team Kits with figures for L1, L2, and L3 analysts and escalation path models physically map communication flows during a live incident.",
    },
    {
      icon: "🛡️",
      title: "Handle Service Breakdowns",
      description:
        "Incident Response Kits show a stable network versus a breached network — a firewall model with a physical hole, a data piece leaking out.",
    },
    {
      icon: "📦",
      title: "Quantify Skills",
      description:
        "Stackable Cyber Skill Stack blocks. A Junior Analyst has blocks for SIEM and Triage, while a Senior Threat Hunter has Forensics, Malware RE, and Threat Intel.",
    },
  ];

  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="mb-14 text-center">
          <p className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-cyan-neon">
            The Opportunity
          </p>
          <h2 className="font-headline text-2xl font-bold text-white md:text-3xl">
            What We Solve
          </h2>
        </div>
        <ul className="grid gap-6 sm:grid-cols-2">
          {useCases.map((item) => (
            <li
              key={item.title}
              className="flex flex-col items-center rounded-lg border-gradient-cyan-magenta bg-cyber-bg p-6 text-center"
            >
              <span className="mb-3 shrink-0 text-3xl" aria-hidden="true">
                {item.icon}
              </span>
              <h3 className="mb-2 font-headline text-base font-bold text-cyan-neon md:text-lg">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/80">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
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
      description:
        "A high-value consulting service. A CISO hires us to create a 3D model of their specific network architecture to visualize how a particular threat — such as a specific APT group — would move through their environment.",
      gem: "A one-of-a-kind model: a true \"crown jewel\" for a company's security planning.",
    },
    {
      tier: "02",
      badge: "E-Commerce",
      title: "Standardized Cyber Kits",
      tagline: "Scalable · Ready-to-Buy",
      description:
        "Pre-designed kits that address the industry's most common, complex concepts.",
      kits: [
        "The Ransomware Kill Chain Kit",
        "The DDoS Attack Kit",
        "The Zero Trust Architecture Kit",
        "The SOC Coordination Kit",
      ],
    },
    {
      tier: "03",
      badge: "Passive Income",
      title: "Digital File Sales (.STL)",
      tagline: "High-Margin · Passive",
      description:
        "Selling 3D-printable digital files for standardized kits. Many security professionals are tech enthusiasts who own 3D printers, providing high-margin, passive income.",
    },
    {
      tier: "04",
      badge: "Service",
      title: 'Incident Response War Gaming',
      tagline: "High-Impact · Workshop-Based",
      description:
        "We facilitate tabletop exercises using our models as the game board. We simulate a live breach and have the company's IR team physically move pieces to respond — transforming a boring meeting into an engaging, high-impact wargame.",
    },
  ];

  return (
    <section className="relative py-16 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(0,229,255,0.08) 0px, rgba(0,229,255,0.08) 1px, transparent 1px, transparent 64px)",
        }}
      />
      <Container className="relative">
        <div className="mb-14 text-center">
          <p className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-cyan-neon">
            Offerings
          </p>
          <h2 className="font-headline text-2xl font-bold text-white md:text-3xl">
            Products &amp; Services
          </h2>
        </div>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <li
              key={p.tier}
              className="rounded-lg border-gradient-cyan-magenta bg-cyber-bg p-6 text-center"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <span className="font-mono text-4xl font-bold leading-none" style={{ color: "#a020f0" }}>
                  {p.tier}
                </span>
                <span className="rounded-full border border-cyan-neon/30 bg-cyan-neon/10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-neon">
                  {p.badge}
                </span>
              </div>
              <h3 className="mb-1 font-headline text-lg font-bold text-cyan-neon md:text-xl">
                {p.title}
              </h3>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-white/50">
                {p.tagline}
              </p>
              <p className="text-sm leading-relaxed text-white/80">
                {p.description}
              </p>
              {p.kits && (
                <ul className="mt-4 space-y-2 text-left">
                  {p.kits.map((kit) => (
                    <li
                      key={kit}
                      className="flex items-center gap-2 text-sm text-white/80"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-neon" />
                      {kit}
                    </li>
                  ))}
                </ul>
              )}
              {p.gem && (
                <p className="mt-4 rounded border border-cyan-neon/20 bg-cyan-neon/5 p-3 text-xs italic leading-relaxed text-cyan-neon/80">
                  ✦ {p.gem}
                </p>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

