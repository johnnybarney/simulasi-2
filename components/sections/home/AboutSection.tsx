import { Section } from "@/components/layout/Section";
import { homeContent } from "@/lib/constants/home";

export function AboutSection() {
  const { about } = homeContent;

  return (
    <Section ariaLabelledby="about-heading">
      <div className="mx-auto max-w-4xl text-center">
        <h2
          id="about-heading"
          className="font-headline text-2xl font-bold text-white md:text-3xl"
        >
          {about.title}
        </h2>
        <p className="mt-6 text-base leading-relaxed text-white/90 md:text-lg">
          {about.body}
        </p>
      </div>
    </Section>
  );
}
