import { PageShell } from "@/components/layout/PageShell";
import {
  TabletopCoreOfferingsSection,
  TabletopWhyChooseSection,
} from "@/components/sections/tabletop-exercise/TabletopExerciseSections";
import { ServiceHeroAnimated } from "@/components/ui/ServiceHeroAnimated";
import { routes } from "@/lib/navigation";

export default function ITtxServicePage() {
  return (
    <PageShell headerVariant="tabletop-exercise" footerVariant="tabletop-exercise" activeHref={routes.ittx}>
      <ServiceHeroAnimated
        eyebrow="Interactive Tabletop Exercise"
        lines={[
          { text: "Interactive" },
          { text: "Tabletop", accent: true },
          { text: "Exercise" },
        ]}
        watermark="iTTX"
        code="iTTX"
        description="Coordinate leadership and technical teams through interactive scenario-driven exercises that sharpen decision-making under pressure."
        video="/images/interactive.mp4"
      />
      <TabletopCoreOfferingsSection />
      <TabletopWhyChooseSection />
    </PageShell>
  );
}
