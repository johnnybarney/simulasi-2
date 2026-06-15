import { PageShell } from "@/components/layout/PageShell";
import {
  CdXHero,
  CyberDrillsSection,
  PartnersSection,
  ValueDeliveryTable,
} from "@/components/sections/cd-x/CdXSections";
import { routes } from "@/lib/navigation";

export default function CdXProductPage() {
  return (
    <PageShell headerVariant="cd-x" footerVariant="cd-x" activeHref={routes.cdX}>
      <CdXHero />
      <CyberDrillsSection />
      <ValueDeliveryTable />
      <PartnersSection />
    </PageShell>
  );
}
