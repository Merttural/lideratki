export const CONSENT_STORAGE_KEY = "lideratki-ads-consent";

export type ConsentValue = "granted" | "denied";

export function readConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (value === "granted" || value === "denied") return value;
  } catch {
    /* private mode */
  }
  return null;
}

export function writeConsent(value: ConsentValue) {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
  } catch {
    /* private mode */
  }
  window.dispatchEvent(new CustomEvent("lideratki-consent", { detail: value }));
}
