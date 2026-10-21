"use client";

import Link from "next/link";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { googleAdsId } from "@/lib/ads";
import { PRIVACY_PATH } from "@/lib/privacy";
import { readConsent, writeConsent, type ConsentValue } from "@/lib/consent";
import { localeFromPath, ui } from "@/lib/i18n";

function loadGtag(id: string) {
  if (typeof window === "undefined" || !id) return;
  window.dataLayer = window.dataLayer ?? [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", id);
}

export function AdsConsent() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const t = ui[locale];
  const adsId = googleAdsId();
  const [consent, setConsent] = useState<ConsentValue | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setConsent(readConsent());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!adsId || consent !== "granted") return;
    loadGtag(adsId);
  }, [adsId, consent]);

  if (!adsId || !ready) return null;

  return (
    <>
      {consent === "granted" ? (
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${adsId}`} strategy="afterInteractive" />
      ) : null}

      {consent === null ? (
        <div
          role="dialog"
          aria-live="polite"
          aria-label={t.cookieTitle}
          className="fixed inset-x-0 bottom-16 z-50 border-t border-line bg-paper/95 px-4 py-4 shadow-[0_-8px_24px_rgba(16,35,63,0.12)] backdrop-blur md:bottom-4 md:left-4 md:right-auto md:max-w-md md:border md:border-line"
        >
          <p className="text-sm font-semibold text-navy">{t.cookieTitle}</p>
          <p className="mt-2 text-sm leading-6 text-ink/80">
            {t.cookieBody}{" "}
            <Link href={PRIVACY_PATH[locale]} className="font-semibold text-navy underline decoration-scarlet decoration-2 underline-offset-4">
              {t.privacy}
            </Link>
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              className="bg-navy px-4 py-2 text-sm font-bold tracking-wide text-paper uppercase"
              onClick={() => {
                writeConsent("granted");
                setConsent("granted");
              }}
            >
              {t.cookieAccept}
            </button>
            <button
              type="button"
              className="border border-navy px-4 py-2 text-sm font-bold tracking-wide text-navy uppercase"
              onClick={() => {
                writeConsent("denied");
                setConsent("denied");
              }}
            >
              {t.cookieReject}
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
