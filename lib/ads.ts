/** Public Google Ads measurement IDs. Empty until set in the host environment. */
export function googleAdsId() {
  return (process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "").trim();
}

export function googleAdsWhatsappLabel() {
  return (process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL ?? "").trim();
}

export function googleAdsPhoneLabel() {
  return (process.env.NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL ?? "").trim();
}

export function adsMeasurementEnabled() {
  return Boolean(googleAdsId());
}

export type LeadConversion = "whatsapp" | "phone";

export function sendToFor(kind: LeadConversion) {
  const id = googleAdsId();
  if (!id) return "";
  const label = kind === "whatsapp" ? googleAdsWhatsappLabel() : googleAdsPhoneLabel();
  return label ? `${id}/${label}` : "";
}
