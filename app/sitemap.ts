import type { MetadataRoute } from "next";
import { homeSamples, pages, productsFor, SITE_URL } from "@/lib/catalog";
import { hrefFor } from "@/lib/i18n";

export const dynamic = "force-static";

function imageLocs(paths: string[]) {
  return paths.map((path) => `${SITE_URL}${path}`);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-19");
  const homeImages = imageLocs(homeSamples.map((product) => product.image));
  const home = {
    url: SITE_URL,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 1,
    images: homeImages,
    alternates: {
      languages: {
        tr: SITE_URL,
        en: `${SITE_URL}/en`,
        "x-default": SITE_URL,
      },
    },
  };
  const englishHome = {
    url: `${SITE_URL}/en`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.9,
    images: homeImages,
    alternates: home.alternates,
  };

  return [
    home,
    englishHome,
    ...pages.flatMap((page) => {
      const tr = `${SITE_URL}${hrefFor("tr", page.slug)}`;
      const en = `${SITE_URL}${hrefFor("en", page.slug)}`;
      const languages = { tr, en, "x-default": tr };
      const images = imageLocs(productsFor(page.slug).map((product) => product.image));
      return [
        {
          url: tr,
          lastModified,
          changeFrequency: "weekly" as const,
          priority: 0.8,
          images,
          alternates: { languages },
        },
        {
          url: en,
          lastModified,
          changeFrequency: "weekly" as const,
          priority: 0.7,
          images,
          alternates: { languages },
        },
      ];
    }),
  ];
}

