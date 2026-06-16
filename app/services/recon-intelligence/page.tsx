import { PageShell } from "@/components/layout/PageShell";
import {
  ReconnaissanceIntelligenceForensicsSection,
  ReconnaissanceIntelligenceInvestigationsSection,
  ReconnaissanceIntelligenceVulnerabilitySection,
  ReconnaissanceIntelligenceWhyChooseSection,
} from "@/components/sections/reconnaissance-intelligence/ReconnaissanceIntelligence";
import { ServiceHeroAnimated } from "@/components/ui/ServiceHeroAnimated";
import { routes } from "@/lib/navigation";

export default function ReconIntelligencePage() {
  return (
    <PageShell headerVariant="reconnaissance-intelligence" footerVariant="reconnaissance-intelligence" activeHref={routes.reconIntel}>
      <ServiceHeroAnimated
        eyebrow="Reconnaissance Intelligence"
        lines={[
          { text: "Reconnaissance" },
          { text: "Intelligence", accent: true },
        ]}
        watermark="RECON"
        code="Recon Intel"
        description="Transform raw data into actionable intelligence with AI-augmented investigations and automated reconnaissance across the full attack surface."
        video="/images/recon.mp4"
      />
      <ReconnaissanceIntelligenceInvestigationsSection />
      <ReconnaissanceIntelligenceVulnerabilitySection />
      <ReconnaissanceIntelligenceForensicsSection />
      <ReconnaissanceIntelligenceWhyChooseSection />
    </PageShell>
  );
}
