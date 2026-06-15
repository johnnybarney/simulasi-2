import { PageShell } from "@/components/layout/PageShell";
import {
  MniXHero,
  MniXProblemSection,
  MniXOpportunitySection,
  MniXProductsSection,
} from "@/components/sections/mni-x/MniXSections";
import { routes } from "@/lib/navigation";

export const metadata = {
  title: "MNI-X 3D Kit | Simulasi",
  description:
    "The prime standard for physical cyber security visualization. Empowering teams to train more effectively, plan incident response more clearly, and communicate risk with unparalleled clarity.",
};

export default function MniX3dKitPage() {
  return (
    <PageShell headerVariant="mni-x" footerVariant="mni-x" activeHref={routes.mniX3dKit}>
      <MniXHero />
      <MniXProblemSection />
      <MniXOpportunitySection />
      <MniXProductsSection />
    </PageShell>
  );
}
