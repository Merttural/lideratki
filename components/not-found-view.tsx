"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeFromPath, ui, viewPages } from "@/lib/i18n";

export function NotFoundView() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const t = ui[locale];

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <p className="text-xs font-semibold tracking-[0.22em] text-scarlet uppercase">404</p>
      <h1 className="mt-3 font-display text-6xl leading-none font-extrabold tracking-tight text-navy uppercase">
        {t.notFoundTitle}
      </h1>
      <p className="mt-4 max-w-md text-lg leading-7">{t.notFoundBody}</p>
      <ul className="mt-8 divide-y divide-line border-y border-line">
        {viewPages(locale).map((page) => (
          <li key={page.slug}>
            <Link
              href={page.href}
              className="block py-3 font-display text-2xl font-semibold tracking-wide uppercase hover:text-scarlet"
            >
              {page.h1}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
