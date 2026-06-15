import { PageShell } from "@/components/layout/PageShell";
import {
  OffensiveOperationsBenefitsSection,
  OffensiveOperationsComparisonSection,
  OffensiveOperationsHero,
  OffensiveOperationsMethodologySection,
} from "@/components/sections/offensive-operations/OffensiveOperations";
import { routes } from "@/lib/navigation";

export default function AttackSimulationPage() {
  return (
    <PageShell
      headerVariant="offensive-operations"
      footerVariant="offensive-operations"
      activeHref={routes.attackSimulation}
    >
      <OffensiveOperationsHero />
      <OffensiveOperationsMethodologySection />
      <OffensiveOperationsComparisonSection />
      <OffensiveOperationsBenefitsSection />
    </PageShell>
  );
}
