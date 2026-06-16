import { PageShell } from "@/components/layout/PageShell";
import {
  TechnicalSimulationExerciseBenefitsSection,
  TechnicalSimulationExerciseLifecycleSection,
  TechnicalSimulationExerciseMethodologySection,
} from "@/components/sections/technical-simulation-exercise/TechnicalSimulationExercise";
import { TsxHeroAnimated } from "@/components/sections/technical-simulation-exercise/TsxHeroAnimated";
import { routes } from "@/lib/navigation";

export default function TsxServicePage() {
  return (
    <PageShell
      headerVariant="technical-simulation-exercise"
      footerVariant="technical-simulation-exercise"
      activeHref={routes.tsx}
    >
      <TsxHeroAnimated />
      <TechnicalSimulationExerciseMethodologySection />
      <TechnicalSimulationExerciseBenefitsSection />
      <TechnicalSimulationExerciseLifecycleSection />
    </PageShell>
  );
}
