import { Section } from "@/components/layout/Section";
import { GradientBorder } from "@/components/ui/GradientBorder";
import { homeContent } from "@/lib/constants/home";

export function CriticalInsightSection() {
  const { criticalInsight } = homeContent;

  return (
    <Section ariaLabelledby="insight-heading">
      <div className="relative">
        <span
          className="absolute -left-1 -top-3 z-10 font-headline text-6xl leading-none text-cyan-neon md:-left-2 md:-top-4 md:text-7xl"
          aria-hidden="true"
        >
          &ldquo;
        </span>
        <GradientBorder
          rounded="lg"
          thick
          glow
          innerClassName="relative px-6 py-12 md:px-14 md:py-14"
        >
          <div className="mx-auto max-w-4xl text-center">
            <h2
              id="insight-heading"
              className="mb-6 font-headline text-xl font-bold text-cyan-neon md:text-2xl lg:text-[1.75rem]"
            >
              {criticalInsight.title}
            </h2>
            <p className="text-base leading-relaxed text-white/90 md:text-lg">
              {criticalInsight.body}
            </p>
          </div>
        </GradientBorder>
      </div>
    </Section>
  );
}
