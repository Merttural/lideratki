import Image from "next/image";
import Link from "next/link";
import { ProductGrid } from "@/components/product-grid";
import { ScarfStripe } from "@/components/scarf-stripe";
import { PHONE_DISPLAY, PHONE_E164, productsFor, whatsappLink, type Faq, type Product } from "@/lib/catalog";
import { productLabel, productMessage, ui, viewPage, viewPages, type Locale } from "@/lib/i18n";

const coverImage: Record<string, string> = {
  bere: "/products/sapka/sapka-bere-04.jpg",
  sapka: "/products/sapka/sapka-bere-03.jpg",
  forma: "/products/forma/polar-30.jpg",
};

export function Landing({
  locale = "tr",
  h1,
  intro,
  details,
  points,
  message,
  products,
  showCategories,
  related,
  faqs,
}: {
  locale?: Locale;
  h1: string;
  intro: string;
  details?: string;
  points?: string[];
  message: string;
  products: Product[];
  showCategories?: boolean;
  related?: { href: string; label: string }[];
  faqs?: Faq[];
}) {
  const t = ui[locale];
  const labeled = products.map((product) => {
    const name = productLabel(product.name, locale);
    return {
      ...product,
      name,
      alt: product.alt ? `${name} ${t.example}` : undefined,
    };
  });
  const wa = whatsappLink(message);

  return (
    <main className="pb-24 md:pb-0">
      <ScarfStripe />
      <section className="mx-auto grid max-w-6xl items-end gap-8 px-4 py-10 md:grid-cols-[1.1fr_0.9fr] md:py-16">
        <div className="order-2 min-w-0 md:order-1">
          {related ? (
            <nav aria-label="Konum" className="mb-4 text-sm font-semibold text-navy">
              <Link href={locale === "en" ? "/en" : "/"} className="hover:text-scarlet">
                {t.home}
              </Link>
              <span className="px-2 text-ink/40" aria-hidden="true">
                /
              </span>
              <span>{h1}</span>
            </nav>
          ) : null}
          <p className="text-xs font-semibold tracking-[0.22em] text-scarlet uppercase">
            {t.eyebrow}
          </p>
          <h1 className="mt-3 font-display text-6xl leading-[0.86] font-extrabold tracking-tight text-navy uppercase sm:text-7xl lg:text-8xl">
            {h1}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-7">{intro}</p>
          {showCategories ? (
            <dl className="mt-6 grid max-w-xl gap-4 sm:grid-cols-2">
              {t.heroPoints.map(([title, text]) => (
                <div key={title}>
                  <dt className="text-xs font-semibold tracking-[0.16em] text-scarlet uppercase">{title}</dt>
                  <dd className="mt-1 text-sm leading-6">{text}</dd>
                </div>
              ))}
            </dl>
          ) : null}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-wa px-5 py-3 font-display text-2xl font-bold tracking-wide text-white uppercase"
            >
              {t.whatsapp}
            </a>
            <a
              href="#ornekler"
              className="border border-navy px-5 py-3 font-display text-2xl font-bold tracking-wide text-navy uppercase"
            >
              {t.samplesCta}
            </a>
          </div>
          <p className="mt-4 text-sm text-ink/70">
            {PHONE_DISPLAY} · {t.capacity}
          </p>
        </div>
        <div className="order-1 min-w-0 border-4 border-navy bg-card p-2 md:order-2">
          <div className="relative aspect-video overflow-hidden bg-card md:aspect-[4/3]">
            <Image
              src={products[0]?.image ?? "/products/cesit.jpeg"}
              alt={`${h1} ${t.example}`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-navy text-paper">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-6 sm:grid-cols-3">
          {t.facts.map(([title, text]) => (
            <p key={title} className="font-display text-3xl leading-none font-bold tracking-wide uppercase">
              {title}
              <span className="mt-1 block font-sans text-sm font-semibold tracking-normal text-white/70 normal-case">
                {text}
              </span>
            </p>
          ))}
        </div>
      </section>

      {details ? (
        <section className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="font-display text-4xl font-bold tracking-wide text-navy uppercase">
            {h1} {t.orderSuffix}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8">{details}</p>
          {points && points.length > 0 ? (
            <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 leading-7">
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          ) : null}
          {related && related.length > 0 ? (
            <nav aria-label={t.related} className="mt-6 flex flex-wrap gap-2">
              {related.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border border-line bg-card px-3 py-2 text-sm font-semibold text-navy hover:border-navy"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          ) : null}
        </section>
      ) : null}

      {showCategories ? (
        <section className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="font-display text-4xl font-bold tracking-wide text-navy uppercase">{t.madeTitle}</h2>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {viewPages(locale).map((page) => {
              const image = coverImage[page.slug] ?? productsFor(page.slug)[0]?.image ?? "/products/cesit.jpeg";
              return (
                <li key={page.slug} className="min-w-0">
                  <Link href={page.href} className="flex h-full flex-col border border-line bg-card hover:border-navy">
                    <div className="relative aspect-[4/3] bg-card">
                      <Image
                        src={image}
                        alt=""
                        fill
                        sizes="(max-width: 640px) calc(100vw - 2rem), 33vw"
                        className="object-contain p-3"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <h3 className="font-display text-2xl leading-none font-semibold tracking-wide text-navy uppercase">
                        {page.h1}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-ink/75">{page.intro}</p>
                      <span className="mt-4 text-sm font-semibold text-scarlet">{t.openPage}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}

      {showCategories ? (
        <section id="ornekler" className="mx-auto max-w-6xl scroll-mt-32 px-4 py-12">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-4xl font-bold tracking-wide text-navy uppercase">{t.workTitle}</h2>
            <p className="text-sm text-ink/70 sm:max-w-xs sm:text-right">{t.samplesHint}</p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {labeled.map((product) => {
              const page = product.pages[0] ? viewPage(locale, product.pages[0]) : undefined;
              return (
                <li key={product.image} className="flex min-w-0 flex-col border border-line bg-card">
                  <div className="relative aspect-[4/5] bg-card">
                    <Image
                      src={product.image}
                      alt={product.alt ?? `${product.name} ${t.example}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-contain p-3"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="font-display text-2xl leading-none font-semibold tracking-wide text-navy uppercase">
                      {product.name}
                    </h3>
                    {page ? <p className="mt-2 line-clamp-3 text-sm leading-6 text-ink/75">{page.intro}</p> : null}
                    <div className="mt-4 flex flex-wrap gap-3">
                      {page ? (
                        <Link href={page.href} className="text-sm font-semibold text-navy underline decoration-scarlet underline-offset-4">
                          {t.openPage}
                        </Link>
                      ) : null}
                      <a
                        href={whatsappLink(productMessage(product.name, locale))}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-wa"
                      >
                        {t.whatsapp}
                      </a>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      ) : (
        <section id="ornekler" className="mx-auto max-w-6xl scroll-mt-32 px-4 py-12">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-4xl font-bold tracking-wide text-navy uppercase">{t.workTitle}</h2>
            <p className="text-sm text-ink/70 sm:max-w-xs sm:text-right">{t.workHint}</p>
          </div>
          <ProductGrid products={labeled} keyword={h1} locale={locale} />
        </section>
      )}

      {showCategories ? (
        <section id="siparis" className="mx-auto max-w-6xl scroll-mt-32 px-4 py-12">
          <h2 className="font-display text-4xl font-bold tracking-wide text-navy uppercase">{t.orderTitle}</h2>
          <ol className="mt-5 grid gap-4 sm:grid-cols-2">
            {t.orderSteps.map(([title, text], index) => (
              <li key={title} className="border border-line bg-card p-4">
                <p className="font-display text-3xl leading-none font-bold tracking-wide text-navy uppercase">
                  {index + 1}. {title}
                </p>
                <p className="mt-2 leading-7">{text}</p>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {faqs && faqs.length > 0 ? (
        <section className="mx-auto max-w-6xl px-4 pb-4">
          <h2 className="font-display text-4xl font-bold tracking-wide text-navy uppercase">{t.faqTitle}</h2>
          <dl className="mt-5 divide-y divide-line border-y border-line">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-4">
                <dt className="font-display text-2xl font-semibold tracking-wide text-navy uppercase">{faq.q}</dt>
                <dd className="mt-2 max-w-2xl leading-7">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      <section className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-4 py-14 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl font-display text-5xl leading-[0.9] font-extrabold tracking-tight text-navy uppercase">
            {t.closeTitle}
          </h2>
          <div className="flex flex-wrap gap-3">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-wa px-5 py-3 font-display text-2xl font-bold tracking-wide text-white uppercase"
            >
              {t.whatsapp}
            </a>
            <a
              href={`tel:+${PHONE_E164}`}
              className="border border-navy px-5 py-3 font-display text-2xl font-bold tracking-wide text-navy uppercase"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed inset-x-0 bottom-0 z-40 bg-wa px-4 py-4 text-center font-display text-2xl font-bold tracking-wide text-white uppercase md:hidden"
      >
        {t.whatsapp}
      </a>
    </main>
  );
}
