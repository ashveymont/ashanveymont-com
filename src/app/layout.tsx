import type { Metadata } from "next";
import "./globals.css";
import ThemeProviderWrapper from "./theme-provider-wrapper";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ashan Veymont",
  description: "Personal website of Ashan Veymont - a hypnotic closer, AI architect, and spiritual empire builder. Discover the intersection of technology, consciousness, and business transformation.",
  keywords: ["Ashan Veymont", "hypnotic closer", "AI architect", "spiritual empire builder", "consciousness", "business transformation", "Mytosis AI", "Veymont Group", "Viyathra"],
  authors: [{ name: "Ashan Veymont" }],
  creator: "Ashan Veymont",
  publisher: "Ashan Veymont",
  robots: "index, follow",
  openGraph: {
    title: "Ashan Veymont",
    description: "Personal website of Ashan Veymont - a hypnotic closer, AI architect, and spiritual empire builder. Discover the intersection of technology, consciousness, and business transformation.",
    url: "https://ashanveymont.com",
    siteName: "Ashan Veymont",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashan Veymont",
    description: "Personal website of Ashan Veymont - a hypnotic closer, AI architect, and spiritual empire builder.",
    creator: "@ashanveymont",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#bfa14a",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VS3R78RH6Y"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VS3R78RH6Y');
          `}
        </Script>
        <ThemeProviderWrapper>
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
