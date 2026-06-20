import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { BackToTop } from "@/components/ui/BackToTop";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

/* Chakra Petch — Xizt's body / mono font */
const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-chakra",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Simulasi", template: "%s | Simulasi" },
  description: "The premier dashboard for full-spectrum cyber exercise management.",
  metadataBase: new URL("https://simulasi.org"),
  icons: {
    icon: [{ url: "/images/rpmylagi.png", type: "image/png" }],
    shortcut: "/images/rpmylagi.png",
    apple: "/images/rpmylagi.png",
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
    <html lang="en" className={`${chakraPetch.variable} h-full`} suppressHydrationWarning>
      <head>
        {/* Clash Display from Fontshare — Xizt's display/heading font */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
        />
      </head>
      <body className="flex min-h-full flex-col antialiased theme-body" style={{ fontFamily: "var(--font-chakra), 'Chakra Petch', sans-serif" }}>
        <ThemeProvider>
          <CustomCursor />
          <ScrollProgress />
          <BackToTop />
          <div className="pt-20">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
