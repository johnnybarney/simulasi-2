import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { GradientBorder } from "@/components/ui/GradientBorder";
import { GradientText } from "@/components/ui/GradientText";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/navigation";

const osintIcons = {
  automatedSensemaking: "/images/virus.jpg",
  aiProbes: "/images/Ai probes.jpg",
  skillGapMitigation: "/images/skill gap.jpg",
  githubScraping: "/images/github.jpg",
  socialMediaMonitoring: "/images/socialmedia.jpg",
  metaSearchEngines: "/images/metsearch.jpg",
  customWebScraping: "/images/customweb.jpg",
  apiConnectors: "/images/api.jpg",
  secureDataStorage: "/images/securedata.jpg",
  attackSurfaceMapping: "/images/mapsurface.jpg",
  breachedDataDiscovery: "/images/breachdata.jpg",
  automatedReconnaissance: "/images/automated.jpg",
  deepDarkWebAnalysis: "/images/deep.jpg",
  humintDigitization: "/images/humint.jpg",
  businessIntelligence: "/images/business.jpg",
  scalability: "/images/scala.jpg",
  passiveSafe: "/images/passive.jpg",
  actionableInsights: "/images/action.jpg",
} as const;

function SectionVideo({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        aria-label={alt}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

const iconKnockoutStyle = { mixBlendMode: "screen" as const, filter: "contrast(1.6) brightness(1.3) saturate(1.4)" };

function SectionIcon({
  src,
  alt,
  className,
  noBg,
}: {
  src?: string;
  alt: string;
  className?: string;
  noBg?: boolean;
}) {
  return (
    <div className={cn("relative mx-auto h-16 w-16 shrink-0", !noBg && "rounded-lg bg-black", className)}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="64px"
          className="object-contain"
          style={iconKnockoutStyle}
        />
      ) : (
        <span className="block h-full w-full bg-cyan-neon/10" aria-hidden="true" />
      )}
    </div>
  );
}

function FeatureRow({
  title,
  description,
  iconSrc,
}: {
  title: string;
  description: string;
  iconSrc?: string;
}) {
  return (
    <li className="flex gap-4">
      <SectionIcon src={iconSrc} alt={title} className="mx-0 h-12 w-12" />
      <div>
        <h3 className="font-headline text-sm font-bold text-cyan-neon">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-white/80">{description}</p>
      </div>
    </li>
  );
}

function CapabilityChip({
  label,
  border,
  iconSrc,
}: {
  label: string;
  border: "cyan" | "magenta";
  iconSrc?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-lg border-gradient-cyan-magenta bg-cyber-bg px-4 py-6 text-center",
      )}
    >
      <SectionIcon src={iconSrc} alt={label} className="mb-3 h-14 w-14" />
      <p
        className={cn(
          "font-headline text-sm font-bold",
          border === "magenta" ? "text-magenta-neon" : "text-cyan-neon",
        )}
      >
        {label}
      </p>
    </div>
  );
}

/* ── 1. Hero ─────────────────────────────────────────────── */

export function ReconnaissanceIntelligenceHero() {
  return (
    <section className="relative py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 40%, rgba(0,229,255,0.15) 0%, transparent 55%), radial-gradient(circle at 70% 60%, rgba(255,0,255,0.1) 0%, transparent 50%)",
        }}
      />
      <Container className="relative text-center">
        <h1 className="font-headline text-4xl font-bold sm:text-5xl lg:text-[3.25rem]">
          <GradientText as="span">Reconnaissance Intelligence</GradientText>
          <span className="mt-2 block text-4xl sm:text-5xl lg:text-[3.25rem]">
            <GradientText as="span">( Recon Intel )</GradientText>
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/90 md:text-lg">
          Transform raw data into actionable military and cyber intelligence. Accelerate
          decision-making with automated sensemaking and predictive insights.
        </p>
        <div className="mt-8">
          <Button href={routes.reconIntel} variant="outline">
            Explore Our Platform
          </Button>
        </div>
        <GradientBorder
          rounded="lg"
          glow
          className="mx-auto mt-12 w-full max-w-[340px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[560px]"
          innerClassName="overflow-hidden"
        >
          <div className="aspect-square w-full">
            <video
              src="/images/jellybrain.mp4"
              autoPlay
              loop
              muted
              playsInline
              aria-label="Reconnaissance intelligence visualization"
              className="h-full w-full object-cover"
            />
          </div>
        </GradientBorder>
      </Container>
    </section>
  );
}

/* ── 2. AI-Augmented Investigations ─────────────────────── */

export function ReconnaissanceIntelligenceInvestigationsSection() {
  const features = [
    {
      title: "Automated Sensemaking",
      description: "Synthesize vast datasets and identify patterns automatically.",
      iconSrc: osintIcons.automatedSensemaking,
    },
    {
      title: "AI Probes",
      description: "Conduct deep, autonomous inquiries and test hypotheses.",
      iconSrc: osintIcons.aiProbes,
    },
    {
      title: "Skill Gap Mitigation",
      description: "Augment human capabilities and accelerate learning curves.",
      iconSrc: osintIcons.skillGapMitigation,
    },
  ];

  const magentaCapabilities = [
    { label: "GitHub Scraping", iconSrc: osintIcons.githubScraping },
    { label: "Social Media Monitoring", iconSrc: osintIcons.socialMediaMonitoring },
  ];

  const cyanCapabilities = [
    { label: "Meta-Search Engines", iconSrc: osintIcons.metaSearchEngines },
    { label: "Custom Web Scraping", iconSrc: osintIcons.customWebScraping },
    { label: "API Connectors", iconSrc: osintIcons.apiConnectors },
    { label: "Secure Data Storage", iconSrc: osintIcons.secureDataStorage },
  ];

  return (
    <section className="py-16 md:py-20">
      <Container>
        <h2 className="mb-12 text-center font-headline text-2xl font-bold text-white md:text-3xl">
          AI-Augmented Investigations: Bridging the Socio-Technical Gap
        </h2>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="overflow-hidden rounded-lg border-gradient-cyan-magenta bg-cyber-bg">
            <SectionVideo
              src="/images/aimove.mp4"
              alt="Human Analyst to LLMs and AI Models in a complex data environment"
              className="aspect-[4/3] w-full"
            />
          </div>

          <div>
            <p className="mb-6 text-white/90">
              Leveraging <strong className="text-white">Large Language Models</strong> to bridge
              the socio-technical gap.
            </p>
            <ul className="space-y-6">
              {features.map((feature) => (
                <FeatureRow key={feature.title} {...feature} />
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {magentaCapabilities.map((item) => (
              <CapabilityChip
                key={item.label}
                label={item.label}
                border="magenta"
                iconSrc={item.iconSrc}
              />
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {cyanCapabilities.map((item) => (
              <CapabilityChip
                key={item.label}
                label={item.label}
                border="cyan"
                iconSrc={item.iconSrc}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ── 3. Automated Vulnerability Assessment ──────────────── */

export function ReconnaissanceIntelligenceVulnerabilitySection() {
  const cards: {
    title: string;
    description: string;
    iconSrc: string;
  }[] = [
    {
      title: "Attack Surface Mapping",
      description:
        "Continuous discovery and mapping of external assets, exposed services, and entry points across your digital footprint.",
      iconSrc: osintIcons.attackSurfaceMapping,
    },
    {
      title: "Breached Data Discovery",
      description:
        "Search the deep and dark web for leaked credentials, exposed databases, and compromised organizational data.",
      iconSrc: osintIcons.breachedDataDiscovery,
    },
    {
      title: "Automated Reconnaissance",
      description:
        "Zero-touch continuous monitoring using tools like Nmap and SpiderFoot to maintain real-time situational awareness.",
      iconSrc: osintIcons.automatedReconnaissance,
    },
  ];

  return (
    <section className="py-16 md:py-20">
      <Container>
        <h2 className="mb-12 text-center font-headline text-2xl font-bold text-white md:text-3xl">
          Automated Vulnerability Assessment: Zero-Touch Reconnaissance
        </h2>
        <ul className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <li
              key={card.title}
              className="rounded-lg border-gradient-cyan-magenta bg-cyber-bg p-6 text-center"
            >
              <SectionIcon src={card.iconSrc} alt={card.title} className="mb-4 h-24 w-24" />
              <h3 className="mb-3 font-headline text-lg font-bold text-cyan-neon">{card.title}</h3>
              <p className="text-sm leading-relaxed text-white/80">{card.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ── 4. Digital Forensics & Investigations ──────────────── */

export function ReconnaissanceIntelligenceForensicsSection() {
  const items = [
    {
      title: "Deep/Dark Web Analysis",
      description:
        "Monitor underground forums, marketplaces, and hidden services for threats targeting your organization.",
      iconSrc: osintIcons.deepDarkWebAnalysis,
    },
    {
      title: "HUMINT Digitization",
      description:
        "Structure human intelligence into searchable, actionable data with AI-assisted classification and linking.",
      iconSrc: osintIcons.humintDigitization,
    },
    {
      title: "Business Intelligence",
      description:
        "Competitive and strategic insights from open-source data to inform executive and operational decisions.",
      iconSrc: osintIcons.businessIntelligence,
    },
  ];

  return (
    <section className="relative py-16 md:py-24">
      <div
        className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(0,229,255,0.06) 0px, rgba(0,229,255,0.06) 1px, transparent 1px, transparent 48px)",
        }}
      />
      <Container className="relative">
        <h2 className="mb-12 text-center font-headline text-2xl font-bold text-white md:text-3xl">
          Digital Forensics &amp; Investigations: Uncover Hidden Threats
        </h2>
        <ul className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <li
              key={item.title}
              className="rounded-lg border-gradient-cyan-magenta-muted p-6 text-center backdrop-blur-sm"
            >
              <SectionIcon
                src={item.iconSrc}
                alt={item.title}
                className="mb-4"
                noBg
              />
              <h3 className="mb-3 font-headline text-lg font-bold text-cyan-neon">{item.title}</h3>
              <p className="text-sm leading-relaxed text-white/80">{item.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ── 5. Why Choose Simulasi for Reconnaissance Intelligence ─────────── */

export function ReconnaissanceIntelligenceWhyChooseSection() {
  const items = [
    {
      title: "Scalability",
      description:
        "Handle massive datasets across multiple sources simultaneously without compromising analysis depth or speed.",
      iconSrc: osintIcons.scalability,
    },
    {
      title: "Passive & Safe (Zero-Touch)",
      description:
        "Remain undetected during investigations with passive collection methods that protect your operational security.",
      iconSrc: osintIcons.passiveSafe,
    },
    {
      title: "Actionable Insights",
      description:
        "Turn raw information into strategic advantage with prioritized, decision-ready intelligence deliverables.",
      iconSrc: osintIcons.actionableInsights,
    },
  ];

  return (
    <section className="py-16 md:py-20">
      <Container>
        <h2 className="mb-12 text-center font-headline text-2xl font-bold text-white md:text-3xl">
          Why Choose Simulasi for Reconnaissance Intelligence ( Recon Intel )
        </h2>
        <ul className="grid gap-10 md:grid-cols-3">
          {items.map((item) => (
            <li key={item.title} className="text-center">
              <SectionIcon src={item.iconSrc} alt={item.title} className="mb-4" />
              <h3 className="mb-3 font-headline text-lg font-bold text-cyan-neon">{item.title}</h3>
              <p className="text-sm leading-relaxed text-white/80">{item.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
