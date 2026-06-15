import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

type PageShellProps = {
  children: React.ReactNode;
  activeHref?: string;
  headerVariant?: string;
  footerVariant?: string;
};

export function PageShell({ children, activeHref }: PageShellProps) {
  return (
    <>
      <Header activeHref={activeHref} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
