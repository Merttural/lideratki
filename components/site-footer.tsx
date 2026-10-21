"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { EMAIL, INSTAGRAM_URL, PHONE_DISPLAY, PHONE_E164 } from "@/lib/catalog";
import { PRIVACY_PATH } from "@/lib/privacy";
import { localeFromPath, ui, viewPages } from "@/lib/i18n";

export function SiteFooter() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const t = ui[locale];
  const privacyHref = PRIVACY_PATH[locale];

  return (
    <footer id="iletisim" className="scroll-mt-32 bg-navy pb-24 text-paper md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3">
        <div>
          <p className="font-display text-3xl font-bold tracking-wide uppercase">Lider Atkı</p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-white/75">{t.footerBlurb}</p>
          <p className="mt-4">
            <Link href={privacyHref} className="text-sm text-white/75 underline decoration-white/40 underline-offset-4 hover:text-white">
              {t.privacy}
            </Link>
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-white/50 uppercase">{t.contact}</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={`tel:+${PHONE_E164}`} className="hover:text-white">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="hover:text-white">
                {EMAIL}
              </a>
            </li>
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                instagram.com/lideratkii
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-white/50 uppercase">{t.production}</p>
          <ul className="mt-3 space-y-2 text-sm">
            {viewPages(locale).map((page) => (
              <li key={page.slug}>
                <Link href={page.href} className="hover:text-white">
                  {page.h1}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
