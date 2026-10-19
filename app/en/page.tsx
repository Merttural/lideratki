import type { Metadata } from "next";
import { Landing } from "@/components/landing";
import { homeSamples, SITE_URL } from "@/lib/catalog";
import { englishHome } from "@/lib/english";
import { hrefFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: { absolute: englishHome.seoTitle },
  description: englishHome.description,
  alternates: {
    canonical: "/en",
    languages: { tr: hrefFor("tr"), en: "/en", "x-default": hrefFor("tr") },
  },
  openGraph: {
    title: englishHome.seoTitle,
    description: englishHome.description,
    url: "/en",
    locale: "en_US",
    type: "website",
    siteName: "Lider Atkı",
    images: [{ url: "/products/dokuma/dokuma-atki-01.jpg", alt: "Woven scarf example" }],
  },
  twitter: {
    card: "summary_large_image",
    title: englishHome.seoTitle,
    description: englishHome.description,
    images: ["/products/dokuma/dokuma-atki-01.jpg"],
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}/en`,
  inLanguage: "en",
  mainEntity: englishHome.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function EnglishHomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Landing
        locale="en"
        h1={englishHome.h1}
        intro={englishHome.intro}
        message={englishHome.message}
        products={homeSamples}
        showCategories
        faqs={englishHome.faqs}
      />
    </>
  );
}
