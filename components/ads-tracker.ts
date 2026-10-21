import { googleAdsId, sendToFor, type LeadConversion } from "@/lib/ads";
import { readConsent } from "@/lib/consent";

export type { LeadConversion };

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackLead(kind: LeadConversion) {
  if (typeof window === "undefined") return;
  if (readConsent() !== "granted") return;
  const id = googleAdsId();
  if (!id || typeof window.gtag !== "function") return;

  const sendTo = sendToFor(kind);
  if (sendTo) {
    window.gtag("event", "conversion", { send_to: sendTo });
    return;
  }

  window.gtag("event", kind === "whatsapp" ? "whatsapp_click" : "phone_click", {
    send_to: id,
    event_category: "lead",
    event_label: kind,
  });
}
