import { PageShell } from "@/components/layout/PageShell";
import {
  AsxHero,
  AsxOfferingsSection,
  AsxWhyChooseSection,
} from "@/components/sections/advance-simulation/AsxSections";
import { routes } from "@/lib/navigation";

export default function AsxServicePage() {
  return (
    <PageShell
      headerVariant="advance-simulation"
      footerVariant="advance-simulation"
      activeHref={routes.asx}
    >
      <AsxHero />
      <AsxOfferingsSection />
      <AsxWhyChooseSection />
    </PageShell>
  );
}
