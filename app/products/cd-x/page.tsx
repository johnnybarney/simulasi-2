import { PageShell } from "@/components/layout/PageShell";
import {
  CyberDrillsSection,
  ValueDeliveryTable,
} from "@/components/sections/cd-x/CdXSections";
import { ServiceHeroAnimated } from "@/components/ui/ServiceHeroAnimated";
import { routes } from "@/lib/navigation";

export default function CdXProductPage() {
  return (
    <PageShell headerVariant="cd-x" footerVariant="cd-x" activeHref={routes.cdX}>
      <ServiceHeroAnimated
        eyebrow="CD-X Platform"
        lines={[
          { text: "CD-X" },
          { text: "Platform", accent: true },
        ]}
        watermark="CD-X"
        code="CE-C2"
        description="Full command and control over every phase of a cyber exercise — from mission briefing through live execution to automated after-action reporting."
        video="/images/cdx.mp4"
      />
      <CyberDrillsSection />
      <ValueDeliveryTable />
    </PageShell>
  );
}
