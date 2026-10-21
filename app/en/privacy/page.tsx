import type { Metadata } from "next";
import { PrivacyPolicy } from "@/components/privacy-policy";
import { SITE_URL } from "@/lib/catalog";
import { PRIVACY_PATH, privacyCopy } from "@/lib/privacy";

const copy = privacyCopy.en;

export const metadata: Metadata = {
  title: copy.seoTitle,
  description: copy.description,
  alternates: {
    canonical: PRIVACY_PATH.en,
    languages: {
      tr: PRIVACY_PATH.tr,
      en: PRIVACY_PATH.en,
      "x-default": PRIVACY_PATH.tr,
    },
  },
  openGraph: {
    title: copy.seoTitle,
    description: copy.description,
    url: PRIVACY_PATH.en,
    locale: "en_US",
    type: "website",
    siteName: "Lider Atkı",
  },
  twitter: {
    card: "summary",
    title: copy.seoTitle,
    description: copy.description,
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PrivacyPolicy locale="en" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: copy.title,
            description: copy.description,
            url: `${SITE_URL}${PRIVACY_PATH.en}`,
            inLanguage: "en",
            isPartOf: { "@type": "WebSite", name: "Lider Atkı", url: SITE_URL },
          }),
        }}
      />
    </>
  );
}
