import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { routes } from "@/lib/navigation";

const DISPLAY = "'Clash Display', sans-serif";
const BODY    = "var(--font-chakra), 'Chakra Petch', sans-serif";
const ACCENT  = "#00c5cd";

const footerLinks = [
  { label: "Services", href: routes.tsx },
  { label: "Products", href: routes.cdX },
  { label: "About Us", href: routes.aboutUs },
  { label: "Contact", href: routes.contact },
];

export function Footer() {
  return (
    <footer className="border-t border-white/8 py-10">
      <Container className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <Link href="/" className="font-bold text-white/80 text-lg" style={{ fontFamily: DISPLAY }}>
          simulasi<span style={{
            background: `linear-gradient(135deg,#545454,${ACCENT})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>.</span>
        </Link>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-6 md:justify-start">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-[10px] tracking-[0.2em] uppercase text-white/30 hover:text-white transition-colors"
                  style={{ fontFamily: BODY }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-[10px] tracking-[0.2em] uppercase text-white/20" style={{ fontFamily: BODY }}>
          Copyright © 2026 Simulasi
        </p>
      </Container>
    </footer>
  );
}
