import { PageShell } from "@/components/layout/PageShell";
import {
  ContactMainSection,
  ContactMapSection,
} from "@/components/sections/contact/ContactSections";

export const metadata = {
  title: "Contact Us | Simulasi.org",
  description:
    "Establish secure communications with Simulasi.org for platform demos, cyber exercise services, and partnership inquiries.",
};

export default function ContactUsPage() {
  return (
    <PageShell footerVariant="home" activeHref="/contact-us">
      <ContactMainSection />
      <ContactMapSection />
    </PageShell>
  );
}
