import Link from "next/link";
import { PRIVACY_PATH, privacyCopy } from "@/lib/privacy";
import { ui, type Locale } from "@/lib/i18n";

export function PrivacyPolicy({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const copy = privacyCopy[locale];
  const home = locale === "en" ? "/en" : "/";
  const other = locale === "en" ? PRIVACY_PATH.tr : PRIVACY_PATH.en;

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 md:py-16">
      <nav aria-label="Konum" className="mb-4 text-sm font-semibold text-navy">
        <Link href={home} className="hover:text-scarlet">
          {t.home}
        </Link>
        <span className="px-2 text-ink/40" aria-hidden="true">
          /
        </span>
        <span>{copy.title}</span>
      </nav>
      <p className="text-xs font-semibold tracking-[0.22em] text-scarlet uppercase">Lider Atkı</p>
      <h1 className="mt-3 font-display text-5xl leading-[0.9] font-extrabold tracking-tight text-navy uppercase sm:text-6xl">
        {copy.title}
      </h1>
      <p className="mt-3 text-sm text-ink/60">{copy.updated}</p>
      <p className="mt-6 text-lg leading-7">{copy.intro}</p>
      <p className="mt-4 text-sm">
        <Link href={other} hrefLang={locale === "en" ? "tr" : "en"} className="font-semibold text-navy underline decoration-scarlet decoration-2 underline-offset-4">
          {locale === "en" ? "Türkçe metin" : "English version"}
        </Link>
      </p>

      <div className="mt-10 space-y-8 border-t border-line pt-8">
        {copy.sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-display text-2xl font-bold tracking-wide text-navy uppercase">
              {section.title}
            </h2>
            {section.paragraphs.map((paragraph, index) => (
              <p key={`${section.title}-p-${index}`} className="mt-3 leading-7">
                {paragraph}
              </p>
            ))}
            {section.list ? (
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-7">
                {section.list.map((item, index) => (
                  <li key={`${section.title}-li-${index}`}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
    </main>
  );
}
