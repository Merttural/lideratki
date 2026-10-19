import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Landing } from "@/components/landing";
import { productsFor, relatedPages, SITE_URL } from "@/lib/catalog";
import { enSlugs, hrefFor, idFromPublicSlug, productLabel, viewPage } from "@/lib/i18n";

export function generateStaticParams() {
  return Object.values(enSlugs).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const id = idFromPublicSlug("en", slug);
  const page = id ? viewPage("en", id) : undefined;
  if (!page) {
    return {
      title: { absolute: "Page not found | Lider Atkı" },
      description: "This address is not on the Lider Atkı site.",
      robots: { index: false, follow: true },
    };
  }
  const image = productsFor(page.slug)[0]?.image ?? "/products/cesit.jpeg";
  return {
    title: page.seoTitle,
    description: page.description,
    alternates: {
      canonical: page.href,
      languages: {
        tr: hrefFor("tr", page.slug),
        en: page.href,
        "x-default": hrefFor("tr", page.slug),
      },
    },
    openGraph: {
      title: page.seoTitle,
      description: page.description,
      url: page.href,
      locale: "en_US",
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

export default async function EnglishKeywordPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const id = idFromPublicSlug("en", slug);
  const page = id ? viewPage("en", id) : undefined;
  if (!page) notFound();
  const items = productsFor(page.slug);
  const related = relatedPages(page.related).map((item) => ({
    href: hrefFor("en", item.slug),
    label: viewPage("en", item.slug)?.h1 ?? item.h1,
  }));
  const url = `${SITE_URL}${page.href}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/en` },
          { "@type": "ListItem", position: 2, name: page.h1, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        inLanguage: "en",
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
        inLanguage: "en",
        areaServed: "TR",
        provider: { "@type": "Organization", name: "Lider Atkı", url: SITE_URL },
      },
      {
        "@type": "ItemList",
        name: `${page.h1} examples`,
        itemListElement: items.slice(0, 12).map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: productLabel(product.name, "en"),
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
        locale="en"
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
