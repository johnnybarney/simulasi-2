import { PageShell } from "@/components/layout/PageShell";
import { ServiceHeroAnimated } from "@/components/ui/ServiceHeroAnimated";

export const metadata = {
  title: "News | Simulasi",
  description: "Latest insights, case studies, and intelligence from Simulasi.",
};

export default function NewsPage() {
  return (
    <PageShell headerVariant="home" footerVariant="home" activeHref="/news">
      <ServiceHeroAnimated
        eyebrow="News & Insights"
        lines={[
          { text: "Latest" },
          { text: "News", accent: true },
        ]}
        watermark="NEWS"
        code="News"
        description="Insights, case studies, and intelligence from the Simulasi team — keeping you informed on the evolving threat landscape."
        video="/images/latestnews.mp4"
      />
    </PageShell>
  );
}
