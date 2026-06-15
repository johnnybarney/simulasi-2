import { PageShell } from "@/components/layout/PageShell";
import {
  ContactMainSection,
  ContactMapSection,
} from "@/components/sections/contact/ContactSections";
import { AboutSection } from "@/components/sections/home/AboutSection";
import { CriticalInsightSection } from "@/components/sections/home/CriticalInsightSection";
import { MeasurableOutcomesSection } from "@/components/sections/home/MeasurableOutcomesSection";
import { WhyChooseSection } from "@/components/sections/home/WhyChooseSection";

export const metadata = {
  title: "About Us | Simulasi.org",
  description:
    "Learn about Simulasi.org and get in touch for platform demos, cyber exercise services, and partnership inquiries.",
};

export default function AboutUsPage() {
  return (
    <PageShell headerVariant="about-us" footerVariant="home" activeHref="/about-us">
      <AboutSection />
      <WhyChooseSection />
      <CriticalInsightSection />
      <MeasurableOutcomesSection />
      <ContactMainSection embedded />
      <ContactMapSection />
    </PageShell>
  );
}
