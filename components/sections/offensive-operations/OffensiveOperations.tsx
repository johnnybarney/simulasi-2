import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { GradientText } from "@/components/ui/GradientText";

const iconKnockoutStyle = { mixBlendMode: "screen" as const, filter: "contrast(1.6) brightness(1.3) saturate(1.4)" };

/* ── 1. Hero ─────────────────────────────────────────────────── */

export function OffensiveOperationsHero() {
  return (
    <section className="py-20 md:py-28">
      <Container className="max-w-3xl text-center">
        <h1 className="font-headline text-4xl font-bold leading-tight sm:text-5xl lg:text-[3.25rem]">
          <GradientText as="span">Offensive Operations</GradientText>
          <span className="mt-1 block text-4xl sm:text-5xl lg:text-[3.25rem]">
            <GradientText as="span">( Attack Simulation )</GradientText>
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
          Simulate real-world adversaries to uncover hidden vulnerabilities and
          fortify your defenses against sophisticated threats.
        </p>
      </Container>
    </section>
  );
}

/* ── 2. Methodology ──────────────────────────────────────────── */

export function OffensiveOperationsMethodologySection() {
  const steps = [
    { title: "Planning",         iconSrc: "/images/mapsurface.jpg" },
    { title: "Reconnaissance",   iconSrc: "/images/Ai probes.jpg" },
    { title: "Attack Simulation",iconSrc: "/images/attacksimulation.jpg" },
    { title: "Reporting",        iconSrc: "/images/reporting.jpg" },
    { title: "Remediation",      iconSrc: "/images/skill gap.jpg" },
  ];

  return (
    <section className="py-16 md:py-20">
      <Container>
        <h2 className="mb-12 text-center font-headline text-2xl font-bold text-white">
          Our Methodology
        </h2>
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <li key={step.title} className="flex flex-col items-center text-center">
              <div className="relative mb-4 h-16 w-16 shrink-0 rounded-lg bg-black">
                <Image
                  src={step.iconSrc}
                  alt={step.title}
                  fill
                  sizes="64px"
                  className="object-contain"
                  style={iconKnockoutStyle}
                />
              </div>
              <h3 className="font-headline text-lg font-bold text-cyan-neon md:text-xl">{step.title}</h3>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/* ── 3. Benefits ─────────────────────────────────────────────── */

export function OffensiveOperationsBenefitsSection() {
  const items = [
    { title: "Uncover Hidden Vulnerabilities",  description: "Identify and address critical weaknesses.",                        iconSrc: "/images/uncover.jpg" },
    { title: "Strengthen Incident Response",    description: "Improve your team's readiness and response procedures.",           iconSrc: "/images/strengthen.jpg" },
    { title: "Improve Compliance",              description: "Meet industry standards and regulatory requirements.",              iconSrc: "/images/regulation.jpg" },
    { title: "Enhance Cyber Resilience",        description: "Build a stronger, more adaptable security posture.",               iconSrc: "/images/enhance.jpg" },
    { title: "Reduce Risk",                     description: "Proactively mitigate potential threats and financial loss.",        iconSrc: "/images/reduce.jpg" },
  ];

  return (
    <section className="py-16 md:py-20">
      <Container>
        <h2 className="mb-12 text-center font-headline text-2xl font-bold text-white">
          Key Benefits
        </h2>
        <ul className="grid gap-8 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item.title} className="flex gap-4">
              <div className="relative h-14 w-14 shrink-0 rounded-lg bg-black">
                <Image
                  src={item.iconSrc}
                  alt={item.title}
                  fill
                  sizes="56px"
                  className="object-contain"
                  style={iconKnockoutStyle}
                />
              </div>
              <div>
                <h3 className="font-headline font-bold text-cyan-neon">{item.title}</h3>
                <p className="mt-1 text-sm text-white/80">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ── 4. Comparison ───────────────────────────────────────────── */

export function OffensiveOperationsComparisonSection() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <h2 className="mb-12 text-center font-headline text-2xl font-bold text-white">
          Red Teaming vs. Penetration Testing
        </h2>
        <div className="grid grid-cols-2 items-stretch gap-6">
          <div className="relative h-80 w-full">
            <Image
              src="/images/penat3.png"
              alt="Penetration Testing"
              fill
              sizes="50vw"
              className="object-contain"
            />
          </div>
          <div className="relative h-80 w-full">
            <Image
              src="/images/red3.png"
              alt="Red Teaming"
              fill
              sizes="50vw"
              className="object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
