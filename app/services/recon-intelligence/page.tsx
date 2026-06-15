import { PageShell } from "@/components/layout/PageShell";
import {
  ReconnaissanceIntelligenceForensicsSection,
  ReconnaissanceIntelligenceHero,
  ReconnaissanceIntelligenceInvestigationsSection,
  ReconnaissanceIntelligenceVulnerabilitySection,
  ReconnaissanceIntelligenceWhyChooseSection,
} from "@/components/sections/reconnaissance-intelligence/ReconnaissanceIntelligence";
import { routes } from "@/lib/navigation";

export default function ReconIntelligencePage() {
  return (
    <PageShell
      headerVariant="reconnaissance-intelligence"
      footerVariant="reconnaissance-intelligence"
      activeHref={routes.reconIntel}
    >
      <ReconnaissanceIntelligenceHero />
      <ReconnaissanceIntelligenceInvestigationsSection />
      <ReconnaissanceIntelligenceVulnerabilitySection />
      <ReconnaissanceIntelligenceForensicsSection />
      <ReconnaissanceIntelligenceWhyChooseSection />
    </PageShell>
  );
}
