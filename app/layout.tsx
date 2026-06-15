import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { BackToTop } from "@/components/ui/BackToTop";

/* Chakra Petch — Xizt's body / mono font */
const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-chakra",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Simulasi", template: "%s | Simulasi" },
  description: "Transforming artificial threats into digital dominance. The premier dashboard for full-spectrum cyber exercise management and military cyber defense.",
  metadataBase: new URL("https://simulasi.org"),
  icons: {
    icon: [{ url: "/images/rpmy3.png", type: "image/png" }],
    shortcut: "/images/rpmy3.png",
    apple: "/images/rpmy3.png",
  },
  openGraph: {
    type: "website",
    siteName: "Simulasi",
    title: "Simulasi — Cyber Resilience & Simulation Platform",
    description: "Full-spectrum cyber exercise management. Attack simulation, tabletop exercises, recon intelligence, and capacity building.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simulasi — Cyber Resilience & Simulation Platform",
    description: "Full-spectrum cyber exercise management.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${chakraPetch.variable} h-full`}>
      <head>
        <link rel="icon" href="/images/rpmy3.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/images/rpmy3.png" type="image/png" />
        {/* Clash Display from Fontshare — Xizt's display/heading font */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
        />
      </head>
      <body className="flex min-h-full flex-col text-white antialiased" style={{ backgroundColor: "#141414", fontFamily: "var(--font-chakra), 'Chakra Petch', sans-serif" }}>
        <CustomCursor />
        <ScrollProgress />
        <BackToTop />
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
