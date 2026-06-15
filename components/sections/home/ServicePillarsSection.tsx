import Link from "next/link";
import { ServiceIcon } from "@/components/icons/ServiceIcon";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { homeContent } from "@/lib/constants/home";
import { routes } from "@/lib/navigation";

const pillarRoutes = [
  routes.reconIntel,
  routes.tsx,
  routes.attackSimulation,
  routes.ittx,
  routes.asx,
  routes.training,
];

export function ServicePillarsSection() {
  const { servicePillars } = homeContent;

  return (
    <Section id="services" ariaLabelledby="pillars-heading">
      <h2 id="pillars-heading" className="mb-14 text-center font-headline text-2xl font-bold text-white md:text-3xl">
        {servicePillars.title}
      </h2>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
        {servicePillars.items.map((item, index) => (
          <li key={item.title} className="lg:col-span-2">
            <Link href={pillarRoutes[index]} className="flex h-full flex-col transition-opacity hover:opacity-90">
              <Card className="flex-1" innerClassName="flex flex-col">
                <div className="flex flex-1 flex-col px-6 pb-5 pt-7">
                  {/* Fixed-height icon zone — same across all cards */}
                  <div className="mb-5 flex h-24 shrink-0 items-center justify-center">
                    <ServiceIcon
                      index={index}
                      iconSrc={item.iconSrc}
                      alt={item.title}
                      large
                      knockoutBlack={index === 0 || index === 4}
                    />
                  </div>
                  {/* Fixed-height title zone — same across all cards */}
                  <div className="mb-3 flex h-28 shrink-0 flex-col items-center justify-start overflow-hidden">
                    <span className="block text-center font-headline text-lg font-bold leading-snug text-white">
                      {item.title}
                    </span>
                    {item.titleCode && (
                      <span className="mt-1 block text-center text-base font-bold text-cyan-neon">
                        ( {item.titleCode} )
                      </span>
                    )}
                  </div>
                  <p className="flex-1 text-center text-sm leading-relaxed text-white/90">{item.description}</p>
                </div>
                <div className="bg-card-footer px-4 py-3 text-center text-xs">
                  <span className="font-semibold text-cyan-neon">Strategic Value:</span>{" "}
                  <span className="text-white">{item.strategicValue}</span>
                </div>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
