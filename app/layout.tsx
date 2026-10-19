import type { Metadata } from "next";
import { Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import { LocaleLang } from "@/components/locale-lang";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { EMAIL, PHONE_E164, SITE_URL, home } from "@/lib/catalog";
import "./globals.css";

const display = Barlow_Condensed({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800"],
  variable: "--font-barlow",
});

const body = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
  variable: "--font-source",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: home.seoTitle, template: "%s" },
  description: home.description,
  robots: { index: true, follow: true },
  verification: { google: "8ylC2hVLSWv8BH8NBcCHWZuQ5m59zVRHNtd54oWUqpA" },
  icons: { icon: "/brand/logo.png" },
  openGraph: {
    siteName: "Lider Atkı",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Lider Atkı",
      url: SITE_URL,
      image: `${SITE_URL}/brand/logo.png`,
      telephone: `+${PHONE_E164}`,
      email: EMAIL,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: `+${PHONE_E164}`,
        email: EMAIL,
        contactType: "customer service",
        availableLanguage: ["Turkish", "English"],
      },
      description: home.description,
      areaServed: "TR",
      sameAs: ["https://www.instagram.com/lideratkii/"],
    },
    {
      "@type": "WebSite",
      name: "Lider Atkı",
      url: SITE_URL,
      inLanguage: ["tr-TR", "en"],
      publisher: { "@type": "Organization", name: "Lider Atkı", url: SITE_URL },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.lang=location.pathname===\"/en\"||location.pathname.indexOf(\"/en/\")===0?\"en\":\"tr\"",
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <LocaleLang />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
