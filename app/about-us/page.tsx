import { PageShell } from "@/components/layout/PageShell";
import {
  AboutCommandSection,
  AboutHeroSection,
  AboutMilestonesSection,
  AboutMissionSection,
} from "@/components/sections/about/AboutPageSections";

export const metadata = {
  title: "About Us | Simulasi.org",
  description:
    "Learn about Simulasi.org — the frontline of cyber resilience, our history, mission, and the elite squad behind our warfare simulation platform.",
};

export default function AboutUsPage() {
  return (
    <PageShell headerVariant="about-us" footerVariant="home" activeHref="/about-us">
      <AboutHeroSection />
      <AboutMissionSection />
      <AboutMilestonesSection />
      <AboutCommandSection />
    </PageShell>
  );
}
