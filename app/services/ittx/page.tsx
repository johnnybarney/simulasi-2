import { PageShell } from "@/components/layout/PageShell";
import {
  TabletopCoreOfferingsSection,
  TabletopExerciseHero,
  TabletopWhyChooseSection,
} from "@/components/sections/tabletop-exercise/TabletopExerciseSections";
import { routes } from "@/lib/navigation";

export default function ITtxServicePage() {
  return (
    <PageShell
      headerVariant="tabletop-exercise"
      footerVariant="tabletop-exercise"
      activeHref={routes.ittx}
    >
      <TabletopExerciseHero />
      <TabletopCoreOfferingsSection />
      <TabletopWhyChooseSection />
    </PageShell>
  );
}
