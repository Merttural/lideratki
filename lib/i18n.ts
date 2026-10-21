import { pages, type LandingPage } from "@/lib/catalog";
import { englishHome, englishPages, productNamesEn } from "@/lib/english";

export type Locale = "tr" | "en";

export const enSlugs: Record<string, string> = {
  "dokuma-atki": "woven-scarf",
  "sal-atki": "shawl-scarf",
  "triko-atki": "knitted-scarf",
  "orme-atki": "knit-scarf",
  "taraftar-atkisi": "fan-scarf",
  "kisiye-ozel-atki": "custom-scarf",
  "toptan-atki": "wholesale-scarf",
  bere: "beanie",
  sapka: "hat",
  bayrak: "flag",
  "takim-bayragi": "team-flag",
  forma: "fleece",
};

const idByEnSlug = Object.fromEntries(Object.entries(enSlugs).map(([id, slug]) => [slug, id]));

export function localeFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "tr";
}

export function hrefFor(locale: Locale, id?: string) {
  if (!id) return locale === "en" ? "/en" : "/";
  return locale === "en" ? `/en/${enSlugs[id]}` : `/${id}`;
}

export function idFromPublicSlug(locale: Locale, publicSlug: string) {
  return locale === "en" ? idByEnSlug[publicSlug] : publicSlug;
}

export function switchLocaleHref(pathname: string) {
  const path = pathname.replace(/\/$/, "") || "/";
  if (path === "/gizlilik") return "/en/privacy";
  if (path === "/en/privacy") return "/gizlilik";
  if (path === "/en") return "/";
  if (path.startsWith("/en/")) {
    const id = idByEnSlug[path.slice(4)];
    return id ? `/${id}` : "/";
  }
  if (path === "/") return "/en";
  const id = path.slice(1);
  return enSlugs[id] ? `/en/${enSlugs[id]}` : "/en";
}

export type Ui = {
  eyebrow: string;
  whatsapp: string;
  capacity: string;
  facts: [string, string][];
  orderSuffix: string;
  orderTitle: string;
  orderSteps: [string, string][];
  madeTitle: string;
  openPage: string;
  workTitle: string;
  workHint: string;
  samplesHint: string;
  faqTitle: string;
  closeTitle: string;
  home: string;
  related: string;
  productsNav: string;
  contact: string;
  production: string;
  footerBlurb: string;
  notFoundTitle: string;
  notFoundBody: string;
  example: string;
  heroPoints: [string, string][];
  samplesCta: string;
  moreExamples: string;
  samplesNav: string;
  orderNav: string;
  menu: string;
  menuClose: string;
  groups: string[];
  privacy: string;
};

export const ui: Record<Locale, Ui> = {
  tr: {
    eyebrow: "1 adetten · günlük 5.000",
    whatsapp: "WhatsApp’tan fiyat al",
    capacity: "Günlük 5.000 adet kapasite",
    facts: [
      ["1 adet", "Numune de yapılır"],
      ["5.000 adet", "Günlük üretim kapasitesi"],
      ["WhatsApp", "Fiyat burada konuşulur"],
    ],
    orderSuffix: "siparişi",
    orderTitle: "Sipariş nasıl ilerler",
    orderSteps: [
      ["Modeli seç", "Dokuma, şal, triko, örme, şapka veya bayrak sayfasına bak."],
      ["Adedi yaz", "Renk, yazı ve kaç adet istediğini hazırla."],
      ["Örneği gönder", "Logo dosyası veya eski ürünün fotoğrafı yeterli."],
      ["Fiyatı al", "WhatsApp’tan adede göre fiyat yazarız."],
    ],
    madeTitle: "Ne üretiyoruz",
    openPage: "Sayfayı aç",
    workTitle: "İşler",
    workHint: "Fotoğrafa dokun, WhatsApp mesajı hazır gelsin.",
    samplesHint: "Gerçek üretim fotoğrafları. Sayfayı açın veya WhatsApp’tan fiyat isteyin.",
    faqTitle: "Sık sorulanlar",
    closeTitle: "Fiyat sitede yok. Yaz, konuşalım.",
    home: "Ana sayfa",
    related: "İlgili üretim",
    productsNav: "Ürünler",
    contact: "İletişim",
    production: "Üretim",
    footerBlurb: "Dokuma, şal, triko ve örme atkı. Şapka ve bayrak. Günlük 5.000 adet.",
    notFoundTitle: "Sayfa yok",
    notFoundBody: "Aradığın adres durmuyor. Üretim sayfalarından devam et.",
    example: "örneği",
    heroPoints: [
      ["Ne üretilir", "Özel tasarım atkı, dokuma, şal, triko ve örme atkı. Bere, şapka, bayrak ve polar."],
      ["Kim için", "Taraftar grubu, kulüp, okul ve şirket."],
      ["Nasıl sipariş", "1 adet numune de olur, toptan da. Günlük kapasite 5.000 adet."],
      ["Teklif", "Fiyat sitede yok. Yazıyı ve logoyu WhatsApp’tan gönderin."],
    ],
    samplesCta: "Üretim örneklerini incele",
    moreExamples: "Daha fazla örnek",
    samplesNav: "Üretim örnekleri",
    orderNav: "Sipariş süreci",
    menu: "Menü",
    menuClose: "Kapat",
    groups: ["Atkılar", "Bere ve şapka", "Bayraklar", "Polar"],
    privacy: "Gizlilik politikası",
  },
  en: {
    eyebrow: "From 1 piece · 5,000 a day",
    whatsapp: "Get a price on WhatsApp",
    capacity: "5,000 pieces a day",
    facts: [
      ["1 piece", "A sample is fine"],
      ["5,000", "Daily production"],
      ["WhatsApp", "The price is agreed here"],
    ],
    orderSuffix: "order",
    orderTitle: "How an order works",
    orderSteps: [
      ["Pick a model", "Look at woven, shawl, knitted, hat or flag pages."],
      ["Write the quantity", "Have the colour, text and quantity ready."],
      ["Send a sample", "A logo file or a photo of an old piece is enough."],
      ["Get the price", "We quote on WhatsApp for that quantity."],
    ],
    madeTitle: "What we make",
    openPage: "Open page",
    workTitle: "Work",
    workHint: "Tap a photo. The WhatsApp message is ready.",
    samplesHint: "Real production photos. Open the page or ask for a price on WhatsApp.",
    faqTitle: "Questions",
    closeTitle: "No prices on the site. Write to us.",
    home: "Home",
    related: "Related",
    productsNav: "Products",
    contact: "Contact",
    production: "Production",
    footerBlurb: "Woven, shawl, knitted and knit scarves. Hats and flags. 5,000 a day.",
    notFoundTitle: "Page not found",
    notFoundBody: "That address is not here. Continue from the production pages.",
    example: "example",
    heroPoints: [
      ["What we make", "Custom scarves: woven, shawl, knitted and knit. Beanies, hats, flags and fleece."],
      ["Who it's for", "Fan groups, clubs, schools and companies."],
      ["How to order", "One sample or a wholesale run. Capacity is 5,000 a day."],
      ["A quote", "There is no price on the site. Send the wording and logo on WhatsApp."],
    ],
    samplesCta: "See production examples",
    moreExamples: "More examples",
    samplesNav: "Examples",
    orderNav: "How to order",
    menu: "Menu",
    menuClose: "Close",
    groups: ["Scarves", "Beanies and hats", "Flags", "Fleece"],
    privacy: "Privacy policy",
  },
};

export type ViewPage = LandingPage & { href: string };

export function viewPage(locale: Locale, id: string): ViewPage | undefined {
  const base = pages.find((page) => page.slug === id);
  if (!base) return;
  const copy = locale === "en" ? englishPages[id] : undefined;
  return { ...base, ...copy, href: hrefFor(locale, id) };
}

export function viewPages(locale: Locale) {
  return pages.map((page) => viewPage(locale, page.slug)).filter((page): page is ViewPage => Boolean(page));
}

const groupIds = [
  ["dokuma-atki", "sal-atki", "triko-atki", "orme-atki", "taraftar-atkisi", "kisiye-ozel-atki", "toptan-atki"],
  ["bere", "sapka"],
  ["bayrak", "takim-bayragi"],
  ["forma"],
];

export function navGroups(locale: Locale) {
  return ui[locale].groups.map((label, index) => ({
    label,
    pages: groupIds[index]
      .map((id) => viewPage(locale, id))
      .filter((page): page is ViewPage => Boolean(page)),
  }));
}

export function viewHome(locale: Locale) {
  return locale === "en" ? englishHome : undefined;
}

export function productLabel(name: string, locale: Locale) {
  if (locale !== "en") return name;
  const match = name.match(/^(.*?)(?: (\d+))?$/);
  const base = match?.[1] ?? name;
  const number = match?.[2];
  const translated = productNamesEn[base] ?? base;
  return number ? `${translated} ${number}` : translated;
}

export function productMessage(name: string, locale: Locale) {
  return locale === "en"
    ? `Hello, I would like a price for ${name}.`
    : `Merhaba, ${name} için fiyat almak istiyorum.`;
}
