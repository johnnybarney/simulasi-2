import Image from "next/image";
import { Container } from "@/components/layout/Container";

const iconKnockoutStyle = { mixBlendMode: "screen" as const, filter: "contrast(1.6) brightness(1.3) saturate(1.4)" };
import { GradientBorder } from "@/components/ui/GradientBorder";
import { GradientText } from "@/components/ui/GradientText";
import { cn } from "@/lib/cn";
import {
  asxContent,
  type CyberOffering,
  type CyberOfferingBlock,
} from "@/lib/constants/cyber-exercise-content";
import { routes } from "@/lib/navigation";

function AsxOfferingBlockRow({ block }: { block: CyberOfferingBlock }) {
  return (
    <li className="flex gap-4 rounded-lg border-gradient-cyan-magenta bg-cyber-bg p-4 md:gap-5 md:p-5">
      {block.iconSrc && (
        <div className="relative h-16 w-16 shrink-0 rounded-lg bg-black md:h-20 md:w-20">
          <Image
            src={block.iconSrc}
            alt={block.iconAlt ?? block.label}
            fill
            sizes="80px"
            className="object-contain"
            style={iconKnockoutStyle}
          />
        </div>
      )}
      <div className="min-w-0 text-center">
        <p className="font-headline text-sm font-bold text-cyan-neon md:text-base">{block.label}</p>
        <p className="mt-1 text-sm leading-relaxed text-white/85">{block.text}</p>
      </div>
    </li>
  );
}

function AsxOfferingPanel({
  offering,
  index,
}: {
  offering: CyberOffering;
  index: number;
}) {
  const reversed = index % 2 === 1;

  return (
    <li
      className={cn(
        "grid items-center gap-8 lg:grid-cols-2 lg:gap-12",
        reversed && "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1",
      )}
    >
      <div>
        <h3 className="font-headline text-2xl font-bold md:text-3xl">
          <GradientText as="span">{offering.title}</GradientText>
        </h3>
        <div className="mt-4 h-1 w-24 gradient-cyan-magenta" aria-hidden="true" />
      </div>
      <ul className="space-y-4">
        {offering.blocks.map((block) => (
          <AsxOfferingBlockRow key={block.label} block={block} />
        ))}
      </ul>
    </li>
  );
}

export function AsxHero() {
  const { heroVideo, tagline } = asxContent;

  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="px-6 py-12 text-center md:px-12 md:py-16">
          <h1 className="font-headline text-4xl font-bold sm:text-5xl lg:text-[3.25rem]">
            <GradientText as="span">Advance Simulation Exercise</GradientText>
          </h1>
          <p className="mt-3 font-headline text-4xl font-bold sm:text-5xl lg:text-[3.25rem]">
            <GradientText as="span">( ASX )</GradientText>
          </p>
          <p className="mt-4 font-headline text-xl font-bold text-white md:text-xl">{tagline}</p>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/90 md:text-lg">
            Deploys a Dual-Track Hybrid Protocol. We synchronize Interactive Tabletop Exercises ( iTTX ) validating strategic command decisions with Technical Simulation Exercises ( TSX ) testing the physical integrity of your infrastructure.

          </p>
        </div>
        <GradientBorder rounded="lg" glow className="mt-8" innerClassName="overflow-hidden p-2">
          <div className="aspect-[21/9] w-full overflow-hidden">
            <video
              src={heroVideo.src}
              aria-label={heroVideo.alt}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover object-center"
            />
          </div>
        </GradientBorder>
      </Container>
    </section>
  );
}

export function AsxOfferingsSection() {
  const { offerings } = asxContent;

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
        <h2 className="mb-14 text-center font-headline text-2xl font-bold text-white md:text-3xl">
          Strategy &amp; Tactical Solutions
        </h2>
        <ul className="space-y-16 md:space-y-20">
          {offerings.map((offering, index) => (
            <AsxOfferingPanel key={offering.title} offering={offering} index={index} />
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function AsxWhyChooseSection() {
  const { whyChoose } = asxContent;

  return (
    <section className="py-16 md:py-20">
      <Container>
        <h2 className="mb-12 text-center font-headline text-2xl font-bold text-white md:text-3xl">
          Mission Assurance
        </h2>
        <ul className="grid gap-5 md:grid-cols-2">
          {whyChoose.map((item) => (
            <li
              key={item.title}
              className="flex gap-5 rounded-lg border-gradient-cyan-magenta bg-cyber-bg p-6"
            >
              <div className="relative h-16 w-16 shrink-0 rounded-lg bg-black">
                <Image
                  src={item.iconSrc}
                  alt={item.iconAlt}
                  fill
                  sizes="64px"
                  className="object-contain"
                  style={iconKnockoutStyle}
                />
              </div>
              <div className="min-w-0 text-center">
                <h3 className="font-headline text-base font-bold text-cyan-neon md:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
