import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { GradientText } from "@/components/ui/GradientText";
import { KillChainTimeline } from "@/components/ui/KillChainTimeline";
import { cn } from "@/lib/cn";

type LabeledPoint = {
  label: string;
  text: string;
};

type MethodologyCard = {
  title: string;
  videoSrc: string;
  points: LabeledPoint[];
};

type BenefitItem = {
  title: string;
  iconSrc: string;
  points: string[];
};

function MediaVideo({
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
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={cn("relative mx-auto h-16 w-16 shrink-0 rounded-lg bg-black", className)}>
      <Image src={src} alt={alt} fill sizes="64px" className="object-contain" style={iconKnockoutStyle} />
    </div>
  );
}

function LabeledBulletList({ points }: { points: LabeledPoint[] }) {
  return (
    <ul className="space-y-3 text-left">
      {points.map((point) => (
        <li key={point.label} className="text-sm leading-relaxed text-white/90">
          <span className="font-bold text-white">{point.label}:</span> {point.text}
        </li>
      ))}
    </ul>
  );
}

export function TechnicalSimulationExerciseHero() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="px-6 py-12 text-center md:px-12 md:py-16">
          <h1 className="font-headline text-4xl font-bold sm:text-5xl lg:text-[3.25rem]">
            <GradientText as="span">Technical Simulation Exercise</GradientText>
          </h1>
          <p className="mt-3 font-headline text-4xl font-bold sm:text-5xl lg:text-[3.25rem]">
            <GradientText as="span">( TSX )</GradientText>
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
            Attack Simulation Against Your Defenses with Real-World Custom-Crafted Technic, Tactics and Procedures
          </p>
        </div>
      </Container>
    </section>
  );
}

export function TechnicalSimulationExerciseMethodologySection() {
  const cards: MethodologyCard[] = [
    {
      title: "Custom Threat Modeling",
      videoSrc: "/images/customthreat.mp4",
      points: [
        {
          label: "Payload Engineering",
          text: "Crafting multi-stage, bespoke exploits.",
        },
        {
          label: "Stealth & Evasion",
          text: "Bypassing advanced threat detection and sandboxes.",
        },
        {
          label: "Attack Vector Analysis",
          text: "Mapping organization-specific weaknesses.",
        },
      ],
    },
    {
      title: "SD-WAF Injection Delivery",
      videoSrc: "/images/sdwaf.mp4",
      points: [
        {
          label: "Advanced Obfuscation",
          text: "Evading web application firewalls.",
        },
        {
          label: "Targeted Injection Points",
          text: "Exploiting API and application logic flaws.",
        },
        {
          label: "Protocol Manipulation",
          text: "Leveraging non-standard communication channels.",
        },
      ],
    },
  ];

  return (
    <section className="py-16 md:py-20">
      <Container>
        <h2 className="mb-12 text-center font-headline text-2xl font-bold text-white md:text-3xl">
          Methodology: Tailored Attack Simulation
        </h2>
        <ul className="grid gap-6 lg:grid-cols-2">
          {cards.map((card) => (
            <li
              key={card.title}
              className="rounded-lg border-2 border-magenta-neon/70 bg-cyber-bg p-6 shadow-[0_0_24px_rgba(255,0,255,0.25)]"
            >
              <div className="mb-6 overflow-hidden rounded-md border border-magenta-neon/40 bg-black">
                <MediaVideo
                  src={card.videoSrc}
                  alt={card.title}
                  className="aspect-[16/10] w-full"
                />
              </div>
              <LabeledBulletList points={card.points} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function TechnicalSimulationExerciseBenefitsSection() {
  const items: BenefitItem[] = [
    {
      title: "Infrastructure Validation",
      iconSrc: "/images/infrastructure.jpg",
      points: [
        "Validate firewall, IPS, and WAF configurations.",
        "Assess cloud security posture (AWS, Azure, GCP).",
        "Verify network segmentation effectiveness.",
      ],
    },
    {
      title: "Detection & Response Tuning",
      iconSrc: "/images/detection.jpg",
      points: [
        "Optimize SOC alert accuracy and tuning.",
        "Test EDR and SIEM detection logic.",
        "Improve mean time to detect (MTTD) and respond (MTTR).",
      ],
    },
    {
      title: "Process & People Readiness",
      iconSrc: "/images/process.jpg",
      points: [
        "Evaluate incident response plan effectiveness.",
        "Train SOC analysts in real-world scenarios.",
        "Identify communication and decision-making gaps.",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-20">
      <Container>
        <h2 className="mb-12 text-center font-headline text-2xl font-bold text-white md:text-3xl">
          Key Benefits of Live Simulation
        </h2>
        <ul className="grid gap-10 md:grid-cols-3">
          {items.map((item) => (
            <li key={item.title} className="flex flex-col">
              <SectionIcon src={item.iconSrc} alt={item.title} className="mb-4" />
              <h3 className="mb-4 text-center font-headline text-base font-bold text-white md:text-lg">
                {item.title}
              </h3>
              <ul className="space-y-2 text-center text-sm text-white/90">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function TechnicalSimulationExerciseLifecycleSection() {
  return <KillChainTimeline />;
}
