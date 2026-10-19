import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Landing } from "@/components/landing";
import { pageBySlug, pages, productsFor, relatedPages, SITE_URL } from "@/lib/catalog";
import { hrefFor, viewPage } from "@/lib/i18n";

export function generateStaticParams() {
  return pages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = pageBySlug(slug);
  if (!page) {
    return {
      title: { absolute: "Sayfa bulunamadı | Lider Atkı" },
      description: "Bu adres Lider Atkı sitesinde yok.",
      robots: { index: false, follow: true },
    };
  }
  const image = productsFor(page.slug)[0]?.image ?? "/products/cesit.jpeg";
  return {
    title: page.seoTitle,
    description: page.description,
    alternates: {
      canonical: `/${page.slug}`,
      languages: {
        tr: `/${page.slug}`,
        en: hrefFor("en", page.slug),
        "x-default": `/${page.slug}`,
      },
    },
    openGraph: {
      title: page.seoTitle,
      description: page.description,
      url: `/${page.slug}`,
      locale: "tr_TR",
      type: "website",
      siteName: "Lider Atkı",
      images: [{ url: image, alt: page.h1 }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.seoTitle,
      description: page.description,
      images: [image],
    },
  };
}

export default async function KeywordPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pageBySlug(slug);
  if (!page) notFound();
  const items = productsFor(page.slug);
  const related = relatedPages(page.related).map((item) => ({
    href: hrefFor("tr", item.slug),
    label: viewPage("tr", item.slug)?.h1 ?? item.h1,
  }));
  const url = `${SITE_URL}/${page.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana sayfa", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: page.h1, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
      {
        "@type": "Service",
        name: page.h1,
        description: page.description,
        url,
        inLanguage: "tr-TR",
        areaServed: "TR",
        provider: { "@type": "Organization", name: "Lider Atkı", url: SITE_URL },
      },
      {
        "@type": "ItemList",
        name: `${page.h1} örnekleri`,
        itemListElement: items.slice(0, 12).map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: product.name,
          url,
          image: `${SITE_URL}${product.image}`,
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Landing
        locale="tr"
        h1={page.h1}
        intro={page.intro}
        details={page.details}
        points={page.points}
        message={page.message}
        products={items.length > 0 ? items : productsFor("dokuma-atki")}
        related={related}
        faqs={page.faqs}
      />
    </>
  );
}
