import { EMAIL, PHONE_DISPLAY, SITE_URL } from "@/lib/catalog";
import type { Locale } from "@/lib/i18n";

export const PRIVACY_PATH = {
  tr: "/gizlilik",
  en: "/en/privacy",
} as const;

export const ADDRESS =
  "Çağlayan, Fevzi Çakmak Cd. Birlik Han No:9, 34403 Kağıthane/İstanbul";

export type PrivacySection = {
  title: string;
  paragraphs: string[];
  list?: string[];
};

export type PrivacyCopy = {
  title: string;
  seoTitle: string;
  description: string;
  updated: string;
  intro: string;
  sections: PrivacySection[];
};

export const privacyCopy: Record<Locale, PrivacyCopy> = {
  tr: {
    title: "Gizlilik politikası",
    seoTitle: "Gizlilik Politikası | Lider Atkı",
    description:
      "Lider Atkı gizlilik politikası. Kişisel verilerin nasıl toplandığı, kullanıldığı ve korunduğu.",
    updated: "Son güncelleme: 21 Ekim 2026",
    intro:
      "Bu metin, Lider Atkı olarak lideratki.com üzerinden veya WhatsApp, telefon ve e-posta ile bizimle iletişime geçtiğinizde kişisel verilerinizi nasıl işlediğimizi açıklar.",
    sections: [
      {
        title: "1. Veri sorumlusu",
        paragraphs: [
          `Veri sorumlusu Lider Atkı’dır. Adres: ${ADDRESS}. E-posta: ${EMAIL}. Telefon: ${PHONE_DISPLAY}. Web sitesi: ${SITE_URL}.`,
        ],
      },
      {
        title: "2. Hangi verileri topluyoruz",
        paragraphs: [
          "Sitede üyelik, sepet veya online ödeme yoktur. Veri, sizin bizimle iletişime geçmenizle oluşur.",
        ],
        list: [
          "Ad, soyad veya işletme adı (mesajınızda yazdığınız kadarıyla)",
          "Telefon numarası ve WhatsApp hesabı",
          "E-posta adresi",
          "Sipariş ve teklif için gönderdiğiniz logo, yazı, ölçü, adet ve ürün fotoğrafları",
          "İletişim sırasında paylaştığınız adres veya teslimat bilgisi",
        ],
      },
      {
        title: "3. Verileri neden kullanıyoruz",
        paragraphs: ["Kişisel verilerinizi yalnızca şu amaçlarla işleriz:"],
        list: [
          "Teklif vermek ve siparişi almak",
          "Numune, üretim ve teslimat sürecini yürütmek",
          "Siparişle ilgili sorularınıza cevap vermek",
          "Yasal yükümlülükleri yerine getirmek",
        ],
      },
      {
        title: "4. Çerezler ve ölçüm",
        paragraphs: [
          "Sitede şu anda zorunlu olmayan reklam veya analitik çerezi bulunmayabilir. Google Ads veya benzeri bir ölçüm aracı eklenirse dönüşüm ve reklam performansını ölçmek için kullanılabilir.",
          "Tarayıcınızdan çerezleri silebilir veya engelleyebilirsiniz. Bazı site özellikleri bundan etkilenmez çünkü sipariş WhatsApp ve telefon üzerinden yürür.",
        ],
      },
      {
        title: "5. Kimlerle paylaşırız",
        paragraphs: [
          "Kişisel verilerinizi satmayız ve pazarlama listelerine vermeyiz.",
          "Yalnızca siparişin gerektirdiği ölçüde kargo/teslimat firması, ödeme veya muhasebe süreçleri ve yasal zorunluluk halinde yetkili kurumlarla paylaşılabilir.",
          "WhatsApp, telefon ve e-posta sağlayıcıları kendi gizlilik kurallarına tabidir; mesajlaşma bu kanallar üzerinden yapılır.",
        ],
      },
      {
        title: "6. Saklama süresi",
        paragraphs: [
          "Teklif ve sipariş kayıtlarını, ticari ilişki ve yasal saklama süreleri boyunca tutarız. Süre bitince veya artık gerekli olmadığında siler veya anonimleştiririz.",
        ],
      },
      {
        title: "7. Haklarınız",
        paragraphs: [
          "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında verilerinizin işlenip işlenmediğini öğrenme, düzeltme, silme veya yok edilmesini isteme ve itiraz etme haklarına sahipsiniz.",
          `Başvuru için ${EMAIL} adresine yazın veya ${PHONE_DISPLAY} numarasını arayın.`,
        ],
      },
      {
        title: "8. Güvenlik",
        paragraphs: [
          "Erişim, işletme yetkilileriyle sınırlıdır. Verileri yalnızca sipariş ve iletişim için kullanırız. İnternet üzerinden iletişimde mutlak güvenlik garanti edilemez; hassas belgeleri paylaşırken dikkatli olun.",
        ],
      },
      {
        title: "9. Değişiklikler",
        paragraphs: [
          "Bu politikayı güncelleyebiliriz. Güncel metin bu sayfada yayınlanır. Önemli değişikliklerde mümkün olduğunca sitede veya iletişim kanallarımızda duyururuz.",
        ],
      },
      {
        title: "10. İletişim",
        paragraphs: [
          `Sorularınız için: ${EMAIL} · ${PHONE_DISPLAY} · ${ADDRESS}`,
        ],
      },
    ],
  },
  en: {
    title: "Privacy policy",
    seoTitle: "Privacy Policy | Lider Atkı",
    description:
      "Lider Atkı privacy policy. How personal data is collected, used and protected.",
    updated: "Last updated: 21 October 2026",
    intro:
      "This page explains how Lider Atkı processes personal data when you visit lideratki.com or contact us by WhatsApp, phone or email.",
    sections: [
      {
        title: "1. Data controller",
        paragraphs: [
          `The data controller is Lider Atkı. Address: ${ADDRESS}. Email: ${EMAIL}. Phone: ${PHONE_DISPLAY}. Website: ${SITE_URL}.`,
        ],
      },
      {
        title: "2. What we collect",
        paragraphs: [
          "There is no account, cart or online checkout on the site. Data is created when you contact us.",
        ],
        list: [
          "Name or business name (as you write it in a message)",
          "Phone number and WhatsApp account",
          "Email address",
          "Logo, wording, sizes, quantities and product photos you send for a quote or order",
          "Delivery or address details you share during contact",
        ],
      },
      {
        title: "3. Why we use the data",
        paragraphs: ["We process personal data only to:"],
        list: [
          "Provide quotes and take orders",
          "Run sample, production and delivery",
          "Answer order-related questions",
          "Meet legal obligations",
        ],
      },
      {
        title: "4. Cookies and measurement",
        paragraphs: [
          "The site may not currently use optional advertising or analytics cookies. If Google Ads or similar measurement is added, it may be used to measure conversions and ad performance.",
          "You can delete or block cookies in your browser. Ordering still works through WhatsApp and phone.",
        ],
      },
      {
        title: "5. Who we share with",
        paragraphs: [
          "We do not sell personal data or add it to marketing lists.",
          "Data may be shared only as needed with carriers, payment or accounting processes, or authorities when required by law.",
          "WhatsApp, phone and email providers follow their own privacy rules; messaging happens on those channels.",
        ],
      },
      {
        title: "6. Retention",
        paragraphs: [
          "We keep quote and order records for as long as the commercial relationship and legal retention periods require. After that we delete or anonymise them.",
        ],
      },
      {
        title: "7. Your rights",
        paragraphs: [
          "Under Türkiye’s Personal Data Protection Law (KVKK) you may ask whether your data is processed, request correction or deletion, and object to processing.",
          `Contact ${EMAIL} or call ${PHONE_DISPLAY}.`,
        ],
      },
      {
        title: "8. Security",
        paragraphs: [
          "Access is limited to business staff. We use data only for orders and communication. Absolute security on the internet cannot be guaranteed; take care when sharing sensitive files.",
        ],
      },
      {
        title: "9. Changes",
        paragraphs: [
          "We may update this policy. The current text is published on this page. We will note material changes on the site or through our contact channels when we can.",
        ],
      },
      {
        title: "10. Contact",
        paragraphs: [
          `Questions: ${EMAIL} · ${PHONE_DISPLAY} · ${ADDRESS}`,
        ],
      },
    ],
  },
};
