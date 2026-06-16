import { PageShell } from "@/components/layout/PageShell";
import {
  AsxOfferingsSection,
  AsxWhyChooseSection,
} from "@/components/sections/advance-simulation/AsxSections";
import { ServiceHeroAnimated } from "@/components/ui/ServiceHeroAnimated";
import { routes } from "@/lib/navigation";

export default function AsxServicePage() {
  return (
    <PageShell headerVariant="advance-simulation" footerVariant="advance-simulation" activeHref={routes.asx}>
      <ServiceHeroAnimated
        eyebrow="Advance Simulation Exercise"
        lines={[
          { text: "Advance" },
          { text: "Simulation", accent: true },
          { text: "Exercise" },
        ]}
        watermark="ASX"
        code="ASX"
        description="Run hands-on drills that validate controls, tune detection, and build muscle memory across your security operations."
        video="/images/advance1.mp4"
      />
      <AsxOfferingsSection />
      <AsxWhyChooseSection />
    </PageShell>
  );
}
