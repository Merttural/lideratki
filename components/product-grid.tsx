"use client";

import Image from "next/image";
import { useState } from "react";
import { LeadLink } from "@/components/lead-link";
import { whatsappLink, type Product } from "@/lib/catalog";
import { productMessage, ui, type Locale } from "@/lib/i18n";

const PAGE_SIZE = 12;

export function ProductGrid({
  products,
  keyword,
  locale,
}: {
  products: Product[];
  keyword: string;
  locale: Locale;
}) {
  const t = ui[locale];
  const [visible, setVisible] = useState(PAGE_SIZE);
  const shown = products.slice(0, visible);

  return (
    <>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3">
        {shown.map((product) => {
          const href = whatsappLink(productMessage(product.name, locale));
          return (
            <li key={product.image}>
              <LeadLink
                href={href}
                conversion="whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-scarlet"
              >
                <div className="relative aspect-[4/5] overflow-hidden border border-line bg-card">
                  <Image
                    src={product.image}
                    alt={product.alt ?? (product.name === keyword ? product.name : `${product.name} — ${keyword}`)}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-contain p-3 transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-2 flex items-baseline justify-between gap-3">
                  {product.name === keyword ? null : (
                    <h3 className="font-display text-xl leading-none font-semibold tracking-wide uppercase">
                      {product.name}
                    </h3>
                  )}
                  <span className="shrink-0 text-sm font-semibold text-wa">{t.whatsapp}</span>
                </div>
              </LeadLink>
            </li>
          );
        })}
      </ul>
      {visible < products.length ? (
        <button
          type="button"
          onClick={() => setVisible((count) => count + PAGE_SIZE)}
          className="mt-8 border border-navy px-5 py-3 font-display text-2xl font-bold tracking-wide text-navy uppercase"
        >
          {t.moreExamples}
        </button>
      ) : null}
    </>
  );
}
