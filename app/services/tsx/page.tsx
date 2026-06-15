import { PageShell } from "@/components/layout/PageShell";
import {
  TechnicalSimulationExerciseBenefitsSection,
  TechnicalSimulationExerciseHero,
  TechnicalSimulationExerciseLifecycleSection,
  TechnicalSimulationExerciseMethodologySection,
} from "@/components/sections/technical-simulation-exercise/TechnicalSimulationExercise";
import { routes } from "@/lib/navigation";

export default function TsxServicePage() {
  return (
    <PageShell
      headerVariant="technical-simulation-exercise"
      footerVariant="technical-simulation-exercise"
      activeHref={routes.tsx}
    >
      <TechnicalSimulationExerciseHero />
      <TechnicalSimulationExerciseMethodologySection />
      <TechnicalSimulationExerciseBenefitsSection />
      <TechnicalSimulationExerciseLifecycleSection />
    </PageShell>
  );
}
