"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { INSTAGRAM_URL, PHONE_DISPLAY, PHONE_E164 } from "@/lib/catalog";
import { hrefFor, localeFromPath, navGroups, switchLocaleHref, ui } from "@/lib/i18n";

export function SiteHeader() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const t = ui[locale];
  const otherHref = switchLocaleHref(pathname);
  const groups = navGroups(locale);
  const home = hrefFor(locale);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const jumps = [
    { href: `${home}#ornekler`, label: t.samplesNav },
    { href: `${home}#siparis`, label: t.orderNav },
    { href: "#iletisim", label: t.contact },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href={home} className="flex shrink-0 items-center gap-2">
          <Image src="/brand/logo.png" alt="" width={44} height={52} className="h-11 w-auto" />
          <span className="font-display text-2xl leading-none font-bold tracking-wide text-navy uppercase">
            Lider
            <span className="block text-scarlet">Atkı</span>
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href={otherHref}
            hrefLang={locale === "en" ? "tr" : "en"}
            className="inline-flex min-h-11 min-w-11 items-center justify-center border border-navy px-2 text-sm font-bold tracking-wide text-navy"
          >
            {locale === "en" ? "TR" : "EN"}
          </Link>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm font-semibold text-navy underline decoration-scarlet decoration-2 underline-offset-4 sm:inline"
          >
            Instagram
          </a>
          <a
            href={`tel:+${PHONE_E164}`}
            className="inline-flex min-h-11 items-center font-display text-xl leading-none font-bold tracking-wide text-navy"
          >
            {PHONE_DISPLAY}
          </a>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center border border-navy px-2 text-sm font-bold tracking-wide text-navy uppercase md:hidden"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? t.menuClose : t.menu}
          </button>
        </div>
      </div>

      <nav className="hidden border-t border-line md:block" aria-label={t.productsNav}>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 px-4">
          {groups.map((group) => (
            <details key={group.label} className="relative py-2">
              <summary className="cursor-pointer list-none font-semibold text-navy marker:content-none [&::-webkit-details-marker]:hidden">
                {group.label}
              </summary>
              <div className="absolute top-full left-0 z-40 min-w-52 border border-line bg-paper py-1">
                {group.pages.map((page) => (
                  <Link
                    key={page.slug}
                    href={page.href}
                    aria-current={pathname === page.href ? "page" : undefined}
                    className="block px-3 py-2 text-sm font-semibold text-navy hover:text-scarlet aria-[current=page]:text-scarlet"
                  >
                    {page.nav}
                  </Link>
                ))}
              </div>
            </details>
          ))}
          {jumps.map((item) => (
            <Link key={item.href} href={item.href} className="py-2 text-sm font-semibold text-navy hover:text-scarlet">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {open ? (
        <nav id="site-menu" aria-label={t.productsNav} className="max-h-[70vh] overflow-y-auto border-t border-line md:hidden">
          {groups.map((group) => (
            <div key={group.label} className="border-b border-line px-4 py-3">
              <p className="text-xs font-semibold tracking-[0.16em] text-scarlet uppercase">{group.label}</p>
              <ul className="mt-2">
                {group.pages.map((page) => (
                  <li key={page.slug}>
                    <Link
                      href={page.href}
                      aria-current={pathname === page.href ? "page" : undefined}
                      className="block py-2 font-display text-2xl font-semibold tracking-wide text-navy uppercase aria-[current=page]:text-scarlet"
                    >
                      {page.nav}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <ul className="px-4 py-3">
            {jumps.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block py-2 font-semibold text-navy">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
