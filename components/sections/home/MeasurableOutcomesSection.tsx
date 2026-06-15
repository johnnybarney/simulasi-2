import { Section } from "@/components/layout/Section";
import { IconTextColumn } from "@/components/ui/IconTextColumn";
import { homeContent } from "@/lib/constants/home";

function OutcomeIcon({ index }: { index: number }) {
  const paths = [
    "M3 3v18h18M7 16l4-4 4 4 6-6",
    "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM8 12h8",
  ];
  const gradientId = `outcome-gradient-${index}`;

  return (
    <svg
      width="56"
      height="56"
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

export function MeasurableOutcomesSection() {
  const { measurableOutcomes } = homeContent;

  return (
    <Section
      ariaLabelledby="outcomes-heading"
      className="relative overflow-hidden pb-32"
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-80 overflow-hidden"
        aria-hidden="true"
      >
        <div className="synthwave-horizon absolute inset-x-[10%] top-8" />
        <div className="synthwave-grid absolute inset-x-0 bottom-0 h-72 w-full opacity-70" />
      </div>
      <div className="relative">
        <h2
          id="outcomes-heading"
          className="mb-14 text-center font-headline text-2xl font-bold text-white md:text-3xl"
        >
          {measurableOutcomes.title}
        </h2>
        <ul className="grid gap-12 md:grid-cols-3">
          {measurableOutcomes.items.map((item, index) => (
            <li key={item.title}>
              <IconTextColumn
                icon={<OutcomeIcon index={index} />}
                title={item.title}
                description={item.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
