import { Section } from "@/components/layout/Section";
import { IconTextColumn } from "@/components/ui/IconTextColumn";
import { homeContent } from "@/lib/constants/home";

function FeatureIcon({ index }: { index: number }) {
  const paths = [
    "M12 2a10 10 0 1 0 10 10M12 6v6l4 2",
    "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
    "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    "M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44L2 14M14 2l6 6M14 8l6-6",
  ];
  const gradientId = `feature-gradient-${index}`;

  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 24 24"
      fill="none"
      stroke={`url(#${gradientId})`}
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="24" y2="24">
          <stop offset="0%" stopColor="#00e5ff" />
          <stop offset="100%" stopColor="#ff00ff" />
        </linearGradient>
      </defs>
      <path d={paths[index % paths.length]} />
    </svg>
  );
}

export function WhyChooseSection() {
  const { whyChoose } = homeContent;

  return (
    <Section ariaLabelledby="why-choose-heading">
      <h2
        id="why-choose-heading"
        className="mb-14 text-center font-headline text-2xl font-bold text-white md:text-3xl"
      >
        {whyChoose.title}
      </h2>
      <ul className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {whyChoose.items.map((item, index) => (
          <li key={item.title}>
            <IconTextColumn
              icon={<FeatureIcon index={index} />}
              title={item.title}
              description={item.description}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
