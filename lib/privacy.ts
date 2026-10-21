import { ADDRESS, EMAIL, PHONE_DISPLAY, SITE_URL } from "@/lib/catalog";
import type { Locale } from "@/lib/i18n";

export const PRIVACY_PATH = {
  tr: "/gizlilik",
  en: "/en/privacy",
} as const;

export { ADDRESS };

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
          "Siparişler Lider Atkı markasıyla alınır. Üretim Kağıthane/İstanbul’daki üretim yerimizde yapılır.",
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
          "İzin verirseniz Google Ads ile reklam performansını ölçmek",
        ],
      },
      {
        title: "4. Çerezler ve ölçüm",
        paragraphs: [
          "Google Ads kimliği yapılandırıldığında sitede kısa bir çerez bildirimi çıkar. Kabul ederseniz Google Ads ölçüm çerezleri yüklenir; reddederseniz bu çerezler yüklenmez.",
          "Ölçüm; reklam tıklamaları, WhatsApp ve telefon teklif tıklamalarını anlamamıza yardımcı olur. Site, WhatsApp ve telefon reddetseniz de çalışır.",
          "Tarayıcınızdan çerezleri silebilir veya engelleyebilirsiniz.",
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
          "Orders are taken under the Lider Atkı name. Production is done at our Kağıthane/Istanbul workshop.",
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
          "Measure ad performance with Google Ads if you consent",
        ],
      },
      {
        title: "4. Cookies and measurement",
        paragraphs: [
          "When a Google Ads ID is configured, a short cookie notice appears. If you accept, Google Ads measurement cookies load; if you decline, they do not.",
          "Measurement helps us understand ad clicks and WhatsApp or phone quote clicks. The site, WhatsApp and phone still work if you decline.",
          "You can delete or block cookies in your browser.",
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
