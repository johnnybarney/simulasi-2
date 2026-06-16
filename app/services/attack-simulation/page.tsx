import { PageShell } from "@/components/layout/PageShell";
import {
  OffensiveOperationsBenefitsSection,
  OffensiveOperationsComparisonSection,
  OffensiveOperationsMethodologySection,
} from "@/components/sections/offensive-operations/OffensiveOperations";
import { ServiceHeroAnimated } from "@/components/ui/ServiceHeroAnimated";
import { routes } from "@/lib/navigation";

export default function AttackSimulationPage() {
  return (
    <PageShell headerVariant="offensive-operations" footerVariant="offensive-operations" activeHref={routes.attackSimulation}>
      <ServiceHeroAnimated
        eyebrow="Offensive Operations"
        lines={[
          { text: "Offensive" },
          { text: "Operations", accent: true },
        ]}
        watermark="OPS"
        code="Attack Simulation"
        description="Simulate sophisticated adversaries to uncover hidden vulnerabilities and fortify defenses against advanced persistent threats."
        video="/images/offensive.mp4"
      />
      <OffensiveOperationsMethodologySection />
      <OffensiveOperationsComparisonSection />
      <OffensiveOperationsBenefitsSection />
    </PageShell>
  );
}
