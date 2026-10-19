import type { Metadata } from "next";
import { Landing } from "@/components/landing";
import { home, homeSamples, SITE_URL } from "@/lib/catalog";
import { hrefFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: { absolute: home.seoTitle },
  description: home.description,
  alternates: {
    canonical: "/",
    languages: { tr: "/", en: hrefFor("en"), "x-default": "/" },
  },
  openGraph: {
    title: home.seoTitle,
    description: home.description,
    url: "/",
    locale: "tr_TR",
    type: "website",
    siteName: "Lider Atkı",
    images: [{ url: "/products/dokuma/dokuma-atki-01.jpg", alt: "Dokuma atkı örneği" }],
  },
  twitter: {
    card: "summary_large_image",
    title: home.seoTitle,
    description: home.description,
    images: ["/products/dokuma/dokuma-atki-01.jpg"],
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: SITE_URL,
  inLanguage: "tr-TR",
  mainEntity: home.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Landing
        locale="tr"
        h1={home.h1}
        intro={home.intro}
        message={home.message}
        products={homeSamples}
        showCategories
        faqs={home.faqs}
      />
    </>
  );
}
