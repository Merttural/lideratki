export const PHONE_DISPLAY = "0542 583 85 73";
export const PHONE_E164 = "905425838573";
export const INSTAGRAM_URL = "https://www.instagram.com/lideratkii/";
export const EMAIL = "lideratki@gmail.com";
export const SITE_URL = "https://www.lideratki.com";
export const ADDRESS =
  "Çağlayan, Fevzi Çakmak Cd. Birlik Han No:9, 34403 Kağıthane/İstanbul";
export const ADDRESS_LOCALITY = "Kağıthane";
export const ADDRESS_REGION = "İstanbul";
export const ADDRESS_POSTAL = "34403";
export const ADDRESS_COUNTRY = "TR";
export const ADDRESS_STREET = "Çağlayan, Fevzi Çakmak Cd. Birlik Han No:9";

export function whatsappLink(message: string) {
  return `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(message)}`;
}

export type Faq = { q: string; a: string };

export type LandingPage = {
  slug: string;
  nav: string;
  h1: string;
  seoTitle: string;
  description: string;
  intro: string;
  details: string;
  points: string[];
  message: string;
  related: string[];
  faqs: Faq[];
};

export const pages: LandingPage[] = [
  {
    slug: "dokuma-atki",
    nav: "Dokuma atkı",
    h1: "Dokuma atkı",
    seoTitle: "Dokuma Atkı Üretimi | Lider Atkı",
    description:
      "Tezgâhta dokunan atkı. Yazı ve logo tok durur. Kulüp, okul ve dernek için 1 adet numuneden toptan siparişe.",
    intro:
      "Dokuma atkı tezgâhta üretilir. Yazı, arma ve renk kumaşın içinde tok durur. Kulüp, okul ve dernek siparişinde 1 adet numune de çıkar.",
    details:
      "Şal atkıdan daha dar kesilir. Triko ve örme atkıdan daha düz ve tok bir kumaştır. Tribün ve organizasyonda formunu korur.",
    points: [
      "Logo dosyasını veya net bir fotoğrafı WhatsApp’tan gönderin. Yazı ve arma dokumada net durur.",
      "Fiyatı adet, renk ve model belirler. Günlük kapasite 5.000 adettir.",
      "Süre adede ve modele göre değişir. Sabit bir gün sayısı vermiyoruz.",
    ],
    message: "Merhaba, dokuma atkı için fiyat almak istiyorum.",
    related: ["sal-atki", "taraftar-atkisi", "toptan-atki"],
    faqs: [
      {
        q: "Dokuma atkıdan numune yapılır mı?",
        a: "Evet. 1 adet numune çıkar. Maç ve organizasyon için yüzlerce adet de dokunur.",
      },
      {
        q: "Dokuma atkı ile şal atkı aynı mı?",
        a: "Hayır. Dokuma atkı daha dar ve tok olur. Şal atkı daha geniş kesilir ve omuza atılır.",
      },
      {
        q: "Dokuma atkı fiyatını ne belirler?",
        a: "Adet, renk ve model. Logo dosyasını gönderin, fiyatı bu siparişe göre yazalım.",
      },
    ],
  },
  {
    slug: "sal-atki",
    nav: "Şal atkı",
    h1: "Şal atkı",
    seoTitle: "Şal Atkı Üretimi | Lider Atkı",
    description:
      "Omuza atılan geniş şal atkı. İsim, tarih, logo veya kısa cümle. Kulüp, dernek ve organizasyon için 1 adetten.",
    intro:
      "Şal atkı geniş kesilir ve omuza atılır. Kenarına isim, tarih, logo veya kısa bir cümle işlenir. Kulüp, dernek ve düğün için 1 adetten başlar.",
    details:
      "Klasik taraftar atkısından daha geniş ve daha uzundur. Genişlik ve boy, elinizdeki örneğin fotoğrafına göre siparişte belirlenir. Sabit bir santimetre tablomuz yok.",
    points: [
      "Tek adet hediye de olur, dernek ve organizasyon için yüzlerce adet de.",
      "Daha dar ve tok bir kumaş istiyorsanız dokuma atkıya bakın.",
      "Metni ve varsa logoyu WhatsApp’tan iletin. Fiyat adet ve ölçüye göre yazılır.",
    ],
    message: "Merhaba, şal atkı için fiyat almak istiyorum.",
    related: ["kisiye-ozel-atki", "dokuma-atki", "toptan-atki"],
    faqs: [
      {
        q: "Şal atkı hangi ölçüde kesilir?",
        a: "Genişlik ve boy siparişte belirlenir. Elinizde örnek varsa fotoğrafını gönderin, ona göre keselim. Hazır bir ölçü listesi yok.",
      },
      {
        q: "Şal atkıya isim veya tarih yazılır mı?",
        a: "Evet. İsim, tarih, logo veya kısa bir cümle işlenir. Metni mesajda yazmanız yeterli.",
      },
      {
        q: "Şal atkı toptan sipariş edilir mi?",
        a: "Edilir. 1 adet de olur, yüzlerce adet de. Adedi yazın, fiyatı ona göre iletelim.",
      },
    ],
  },
  {
    slug: "triko-atki",
    nav: "Triko atkı",
    h1: "Triko atkı",
    seoTitle: "Triko Atkı Üretimi | Lider Atkı",
    description:
      "Yumuşak iplikle örülen kışlık triko atkı. Düz renk, taraftar rengi veya logo baskısı. 1 adetten.",
    intro:
      "Triko atkı iplikle örülür, boyna sarılır ve dokuma atkıdan daha yumuşaktır. Düz renk, taraftar rengi veya baskılı logo seçilir.",
    details:
      "İplik türü ve örgü kalınlığı sitede sabit bir liste değildir. İstediğiniz modelin fotoğrafını gönderin, fiyatı o örneğe göre yazalım. Okul, taraftar grubu ve hediye siparişi 1 adetten başlar.",
    points: [
      "Örme atkı araması aynı iplik örgüsünü anlatır. Ayrımı örme atkı sayfasında yazdık.",
      "Logo, isim veya kısa slogan basılır. Deseni fotoğrafla gönderin.",
      "Kışlık şapka veya bere aynı siparişe eklenebilir.",
    ],
    message: "Merhaba, triko atkı için fiyat almak istiyorum.",
    related: ["orme-atki", "dokuma-atki", "sapka"],
    faqs: [
      {
        q: "Triko atkı ile dokuma atkı farkı nedir?",
        a: "Triko atkı iplikle örülür ve yumuşaktır. Dokuma atkı tezgâhta dokunur; yazı ve arma daha tok durur.",
      },
      {
        q: "Triko atkıya logo nasıl gönderilir?",
        a: "Logo, isim veya kısa sloganı WhatsApp’tan fotoğraf ya da dosya olarak iletin. Baskı ona göre hazırlanır.",
      },
      {
        q: "Triko atkı hangi iplikle örülür?",
        a: "Sitede sabit bir iplik listesi yok. Model fotoğrafını gönderin, o örneğe göre üretelim ve fiyatlayalım.",
      },
    ],
  },
  {
    slug: "orme-atki",
    nav: "Örme atkı",
    h1: "Örme atkı",
    seoTitle: "Örme Atkı İmalatı | Lider Atkı",
    description:
      "Örme atkı, iplik örgüsü kışlık atkıdır. Renk, isim ve kısa slogan işlenir. Dokuma atkıdan ayrı bir kumaştır.",
    intro:
      "Örme atkı, triko atkı ile aynı iplik örgüsünü anlatır. Yumuşak, boyna sarılan kışlık atkıdır. Renk, isim ve kısa slogan siparişte yazılır.",
    details:
      "Dokuma atkı tezgâh kumaşıdır ve yazı daha tok durur. Örme atkıda örgü tipi sitede katalog olarak durmaz; kaburga veya başka bir örgü istiyorsanız örneğin fotoğrafını gönderin.",
    points: [
      "1 adet numune de olur, sezonluk adet de. Günlük kapasite 5.000 adettir.",
      "Çok adetli iş için toptan atkı sayfasına bakın.",
      "Triko atkı sayfası aynı aileyi kışlık kullanım tarafından anlatır.",
    ],
    message: "Merhaba, örme atkı için fiyat almak istiyorum.",
    related: ["triko-atki", "dokuma-atki", "toptan-atki"],
    faqs: [
      {
        q: "Örme atkı ile triko atkı aynı ürün mü?",
        a: "Evet. İkisi de iplik örgüsüdür. Dokuma atkı ayrı bir kumaştır. Model fotoğrafı gönderirseniz doğru türü seçeriz.",
      },
      {
        q: "Örme atkıda örgü tipi seçilir mi?",
        a: "Sitede sabit bir örgü kataloğu yok. İstediğiniz örneğin fotoğrafını gönderin, ona göre üretelim.",
      },
      {
        q: "Örme atkı toptan yapılır mı?",
        a: "Yapılır. Adet, renk ve yazıyı iletin. Günlük kapasite 5.000 adettir. Süre adede ve modele göre değişir.",
      },
    ],
  },
  {
    slug: "taraftar-atkisi",
    nav: "Taraftar atkısı",
    h1: "Taraftar atkısı",
    seoTitle: "Taraftar Atkısı Üretimi | Lider Atkı",
    description:
      "Taraftar grubuna özel atkı. Grup adı, slogan, renk ve arma. Dokuma, şal veya örme. 1 adet numuneden toplu adede.",
    intro:
      "Taraftar atkısına grup adı, slogan, renk ve arma işlenir. Dokuma, şal, triko veya örme olarak üretilebilir. Eski bir atkının fotoğrafı örnek olur.",
    details:
      "Tek adet numune çıkar. Maç günü için yüzlerce adet de toplanır. Kuruluş yılı ve grup adı aynı atkıda durabilir. Üretim, gönderdiğiniz arma ve renge göre yapılır.",
    points: [
      "Çok adetli grup siparişi toptan atkı sayfasından da yürür.",
      "Yazının tok durmasını istiyorsanız dokuma atkıyı seçin.",
      "Aynı renklerle bere de eklenebilir. Süre adede ve modele göre değişir.",
    ],
    message: "Merhaba, taraftar atkısı için fiyat almak istiyorum.",
    related: ["dokuma-atki", "toptan-atki", "bere"],
    faqs: [
      {
        q: "Taraftar atkısına neler yazılır?",
        a: "Grup adı, slogan, kuruluş yılı, renk ve arma. Elinizdeki eski atkının fotoğrafı örnek olarak yeter.",
      },
      {
        q: "Taraftar atkısı ne kadar sürede çıkar?",
        a: "Süre adede ve modele göre değişir. Sabit bir gün sayısı yok. Adedi yazın, süreyi WhatsApp’tan söyleyelim.",
      },
      {
        q: "Toplu taraftar atkısı nasıl sipariş edilir?",
        a: "Modeli, renkleri ve adedi gönderin. Numune 1 adettir. Yüzlerce adet de aynı desenden üretilir.",
      },
    ],
  },
  {
    slug: "kisiye-ozel-atki",
    nav: "Kişiye özel",
    h1: "Kişiye özel atkı",
    seoTitle: "Kişiye Özel Atkı | Lider Atkı",
    description:
      "İsim, tarih, logo veya kısa cümle ile kişiye özel atkı. Şirket, okul ve dernek için. 1 adet hediyeden kurumsal adede.",
    intro:
      "Kişiye özel atkıda metin ve logo sizin seçiminizdir. Şirket, okul, dernek veya taraftar grubu için şal, dokuma ya da örme seçilir.",
    details:
      "Çizim, logo dosyası veya net bir fotoğraf yeter. Kabul edilen dosya formatını sitede listelemiyoruz; WhatsApp’tan iletin. Hediye 1 adet de olur, kurumsal sipariş yüzlerce adet de.",
    points: [
      "Geniş kesim ve kenar yazısı için şal atkıya bakın.",
      "Yazının tok durması için dokuma atkıyı seçin.",
      "Fiyatı adet, renk ve model belirler. Yazıyı ve logoyu mesajda gönderin.",
    ],
    message: "Merhaba, kişiye özel atkı için fiyat almak istiyorum.",
    related: ["sal-atki", "dokuma-atki", "triko-atki"],
    faqs: [
      {
        q: "Logo veya tasarım dosyası nasıl gönderilir?",
        a: "WhatsApp’tan dosya veya net bir fotoğraf olarak gönderin. Format listesi yok. Yazı ve renk bu görsele göre hazırlanır.",
      },
      {
        q: "Tek adet kişiye özel atkı yapılır mı?",
        a: "Yapılır. Numune ve hediye siparişi 1 adetten başlar.",
      },
      {
        q: "Sipariş nasıl ilerler?",
        a: "Modeli seçin, adedi ve metni yazın, logo veya örnek fotoğrafı gönderin. Fiyatı WhatsApp’tan iletiriz.",
      },
    ],
  },
  {
    slug: "toptan-atki",
    nav: "Toptan atkı",
    h1: "Toptan atkı",
    seoTitle: "Toptan Atkı Üretimi | Lider Atkı",
    description:
      "Toptan atkı üretimi. Dokuma, şal, triko ve örme. Fiyat adet, ölçü ve modele göre. Günlük kapasite 5.000 adet.",
    intro:
      "Toptan atkı; organizasyon, deplasman ve sezonluk sipariş içindir. Dokuma, şal, triko ve örme seçenekleri vardır. Aynı desenden parça parça üretim de yapılır.",
    details:
      "Birim fiyat adet arttıkça değişir. Kaç adetten fiyatın değiştiğini sitede ilan etmiyoruz. Adedi gönderin, fiyatı o siparişe göre yazalım. Günlük kapasite 5.000 adettir.",
    points: [
      "1 adet de alınır. Ayrı bir minimum adet ilan etmiyoruz.",
      "Süre adede ve modele bağlıdır. Sabit teslim günü yoktur.",
      "Şapka ve bayrak aynı siparişe eklenebilir.",
    ],
    message: "Merhaba, toptan atkı için fiyat almak istiyorum.",
    related: ["dokuma-atki", "sal-atki", "bayrak"],
    faqs: [
      {
        q: "Toptan atkıda minimum adet var mı?",
        a: "1 adet de alınır. Adet arttıkça birim fiyat değişir. İndirim dilimini sitede yazmıyoruz; adedi gönderin.",
      },
      {
        q: "Toptan atkı fiyatını ne etkiler?",
        a: "Adet, ölçü ve model. Aynı desenin parçalı üretimi de fiyatı değiştirir. Başka bir katsayı ilan etmiyoruz.",
      },
      {
        q: "Üretim süresi neye bağlıdır?",
        a: "Adede ve modele. Günlük kapasite 5.000 adettir. Adedi yazın, süreyi WhatsApp’tan söyleyelim.",
      },
    ],
  },
  {
    slug: "bere",
    nav: "Bere",
    h1: "Taraftar bere",
    seoTitle: "Taraftar Bere Üretimi | Lider Atkı",
    description:
      "Polar bere ve boyunluk. Arma, isim ve renk baskısı. Kışlık sipariş 1 adetten başlar.",
    intro:
      "Bere, kafaya oturan polar kışlık şapkadır. Yanına boyunluk da üretilir. Arma, isim ve renk siparişte seçilir.",
    details:
      "Şapka araması çoğu zaman bu modeli anlatır. Başka bir kesim istiyorsanız fotoğrafını gönderin. Sitede sabit bir kalıp listesi yok.",
    points: [
      "1 adet numune yapılır. Grup siparişi daha yüksek adetle de alınır.",
      "Şapka sayfası aynı kışlık ürünü şapka araması için anlatır.",
      "Polar sweatshirt aynı siparişe eklenebilir.",
    ],
    message: "Merhaba, taraftar bere için fiyat almak istiyorum.",
    related: ["sapka", "forma", "taraftar-atkisi"],
    faqs: [
      {
        q: "Bereye logo nasıl uygulanır?",
        a: "Arma, isim ve renk baskı ile uygulanır. Örneği WhatsApp’tan gönderin. Baskı türünü sitede ayırmıyoruz.",
      },
      {
        q: "Boyunluk da yapılır mı?",
        a: "Evet. Polar bere ile birlikte boyunluk da üretilir. Modeli fotoğrafla gönderin.",
      },
      {
        q: "Bere ile şapka aynı ürün mü?",
        a: "Kışlık siparişte çoğu zaman polar beredir. Farklı bir model için fotoğraf gönderin. Şapka sayfası aynı ürünü şapka aramasından anlatır.",
      },
    ],
  },
  {
    slug: "sapka",
    nav: "Şapka",
    h1: "Şapka",
    seoTitle: "Taraftar Şapka Üretimi | Lider Atkı",
    description:
      "Taraftar ve grup şapkası. Polar bere üzerine arma, isim veya kısa slogan. Okul ve dernek için 1 adetten.",
    intro:
      "Şapka siparişinde en çok polar bere istenir. Kulüp arması, grup adı ve renk baskılı üretilir. Okul ve dernek için de 1 adetten başlar.",
    details:
      "Bere sayfası aynı ürünü bere ve boyunluk tarafından anlatır. Siperli veya başka bir kesim istiyorsanız örneği fotoğrafla gönderin. Çevre ölçüsü sitede standart değildir.",
    points: [
      "İsim, numara veya kısa slogan basılır. Metni mesajda yazın.",
      "Atkı ve bayrakla birlikte toplanabilir.",
      "1 adet numune yapılır. Grup siparişi daha yüksek adetle de alınır.",
    ],
    message: "Merhaba, şapka için fiyat almak istiyorum.",
    related: ["bere", "taraftar-atkisi", "bayrak"],
    faqs: [
      {
        q: "Şapkaya hangi yazılar basılır?",
        a: "İsim, numara, grup adı veya kısa bir slogan. Arma da basılır. Metni ve görseli WhatsApp’tan gönderin.",
      },
      {
        q: "Şapka en az kaç adet yapılır?",
        a: "1 adet numune yapılır. Grup siparişi daha yüksek adetle de alınır. Ayrı bir minimum ilan etmiyoruz.",
      },
      {
        q: "Şapka ile bere ayrı mı?",
        a: "Kışlık siparişte çoğu zaman polar beredir. Başka bir model istiyorsanız fotoğrafını gönderin.",
      },
    ],
  },
  {
    slug: "bayrak",
    nav: "Bayrak",
    h1: "Bayrak",
    seoTitle: "Bayrak Üretimi | Lider Atkı",
    description:
      "Flama, kulüp bayrağı ve tribün bayrağı. Arma, yıl ve slogan basılır. Ölçü ve adet siparişte belirlenir.",
    intro:
      "Bayrak siparişi flamadan, iki kişinin açtığı büyük tribün boyuna kadar değişir. Arma, kuruluş yılı ve slogan aynı yüze basılır.",
    details:
      "Santimetre ölçüsünü sitede sabit tablo olarak tutmuyoruz. Elinizdeki ölçüyü veya bayrağın nerede kullanılacağını yazın. Küçük flama ve büyük boy ayrı fiyatlanır.",
    points: [
      "Takım renkleri ve arma için takım bayrağı sayfasına bakın.",
      "Atkı ve şapka aynı siparişte üretilebilir.",
      "1 adet de yapılır. Adedi ve kullanım yerini birlikte yazın.",
    ],
    message: "Merhaba, bayrak için fiyat almak istiyorum.",
    related: ["takim-bayragi", "taraftar-atkisi", "toptan-atki"],
    faqs: [
      {
        q: "Bayrak hangi ölçülerde yapılır?",
        a: "Flama ve büyük tribün ölçüsü ayrı fiyatlanır. Hazır bir ölçü tablosu yok. Elinizdeki ölçüyü ya da kullanım yerini yazın.",
      },
      {
        q: "Bayrak ile takım bayrağı farkı nedir?",
        a: "Takım bayrağı, kulüp arması ve renkleriyle basılan iştir. Bu sayfa flama ve tribün boyunu genel anlatır.",
      },
      {
        q: "Bayrağa arma ve slogan basılır mı?",
        a: "Basılır. Arma, yıl ve kısa slogan aynı yüze konur. Logo dosyasını veya net fotoğrafı gönderin.",
      },
    ],
  },
  {
    slug: "takim-bayragi",
    nav: "Takım bayrağı",
    h1: "Takım bayrağı",
    seoTitle: "Takım Bayrağı ve Flama | Lider Atkı",
    description:
      "Takım renkleri ve armasıyla tribün bayrağı ve flama. Ölçü ile adedi ayrı yazın. 1 adetten.",
    intro:
      "Takım bayrağı, kulübün rengi ve armasıyla basılır. Küçük flama soyunma odası veya stand için, büyük boy tribün içindir.",
    details:
      "Bayrak sayfası flama ve tribün ölçüsünü genel anlatır. Bu sayfa, gönderdiğiniz arma ve takım rengine göre hazırlanan iş içindir. Ölçü tablosu yoktur.",
    points: [
      "Arma, yıl ve slogan aynı yüzeyde toplanır. Net logo işi hızlandırır.",
      "Flama ve büyük boyun adedini ayrı yazın. İkisi ayrı fiyatlanır.",
      "Taraftar atkısı aynı renklerle eklenebilir.",
    ],
    message: "Merhaba, takım bayrağı için fiyat almak istiyorum.",
    related: ["bayrak", "taraftar-atkisi", "dokuma-atki"],
    faqs: [
      {
        q: "Takım bayrağına arma basılır mı?",
        a: "Basılır. Arma, yıl ve slogan aynı yüzeye konur. Net bir logo dosyası veya fotoğraf işi hızlandırır.",
      },
      {
        q: "Flama ile büyük bayrak birlikte sipariş edilir mi?",
        a: "Edilir. İkisinin adedini ayrı yazın, fiyatı kalem kalem iletelim.",
      },
      {
        q: "Takım bayrağı nerede kullanılır?",
        a: "Küçük flama soyunma odası veya stand için, büyük boy tribün içindir. Kullanım yerini yazmanız yeterli.",
      },
    ],
  },
  {
    slug: "forma",
    nav: "Polar",
    h1: "Polar sweatshirt",
    seoTitle: "Polar Sweatshirt Baskı | Lider Atkı",
    description:
      "Polar sweatshirt üzerine logo baskısı. Göğüs ve sırt ayrı yazılır. Karışık beden, 1 adetten.",
    intro:
      "Polar sweatshirt’e kulüp veya grup logosu basılır. Renk ve beden dağılımı siparişte netleşir. Örneği WhatsApp’tan gönderin.",
    details:
      "Baskı türünü sitede ayırmıyoruz. Nakış veya belirli bir transfer iddiası yok. Logonun göğüste mi sırtta mı duracağını ve beden adetlerini yazın. Kumaş ayrıntısı için elinizdeki örneğin fotoğrafı yeter.",
    points: [
      "1 adet numune olur. Bedenler karışık sipariş edilir.",
      "Atkı, bere ve şapka aynı siparişe eklenebilir.",
      "Fiyat adet, renk ve baskı yerine göre yazılır.",
    ],
    message: "Merhaba, polar sweatshirt için fiyat almak istiyorum.",
    related: ["sapka", "bere", "taraftar-atkisi"],
    faqs: [
      {
        q: "Polar sweatshirt’e logo nasıl basılır?",
        a: "Göğüs ve sırt ayrı yazılır. Logo fotoğrafını gönderin. Baskı yöntemini sitede listelemiyoruz.",
      },
      {
        q: "Bedenler karışık sipariş edilir mi?",
        a: "Edilir. Hangi bedenden kaç adet istediğinizi yazmanız yeterli.",
      },
      {
        q: "Polar sweatshirt atkıyla aynı siparişte olur mu?",
        a: "Olur. Beden dağılımını ve logonun yerini mesajda yazın. Bere veya şapka da eklenebilir.",
      },
    ],
  },
];

export type Product = {
  name: string;
  image: string;
  pages: string[];
  alt?: string;
};

export const products: Product[] = [
  {
    name: "Atkı çeşitleri",
    image: "/products/cesit.jpeg",
    pages: ["dokuma-atki", "sal-atki", "triko-atki", "orme-atki", "taraftar-atkisi", "kisiye-ozel-atki", "toptan-atki"],
  },
  {
    name: "Dokuma atkı",
    image: "/products/dokuma.jpeg",
    pages: ["dokuma-atki", "sal-atki", "orme-atki", "toptan-atki"],
  },
  {
    name: "Kişiye özel atkı",
    image: "/products/kisiye-ozel.jpeg",
    pages: ["kisiye-ozel-atki", "sal-atki", "triko-atki", "dokuma-atki"],
  },
  {
    name: "Şirket logosu",
    image: "/products/sirket.jpeg",
    pages: ["kisiye-ozel-atki", "sal-atki", "dokuma-atki"],
  },
  {
    name: "Fenerbahçe",
    image: "/products/fenerbahce.jpg",
    pages: ["taraftar-atkisi", "dokuma-atki"],
  },
  {
    name: "Türkiye",
    image: "/products/turkiye.jpg",
    pages: ["taraftar-atkisi", "dokuma-atki", "sal-atki", "orme-atki"],
  },
  {
    name: "Bursaspor",
    image: "/products/bursaspor.jpeg",
    pages: ["taraftar-atkisi", "triko-atki", "kisiye-ozel-atki"],
  },
  {
    name: "Galatasaray",
    image: "/products/galatasaray.jpeg",
    pages: ["taraftar-atkisi"],
  },
  {
    name: "Trabzonspor",
    image: "/products/trabzonspor.jpeg",
    pages: ["taraftar-atkisi"],
  },
  {
    name: "Samsunspor",
    image: "/products/samsunspor.jpeg",
    pages: ["taraftar-atkisi"],
  },
  {
    name: "Sivasspor",
    image: "/products/sivasspor.jpeg",
    pages: ["taraftar-atkisi"],
  },
  {
    name: "Ankaragücü",
    image: "/products/ankaragucu.jpeg",
    pages: ["taraftar-atkisi"],
  },
  {
    name: "Adana Demirspor",
    image: "/products/adana-demir.jpeg",
    pages: ["taraftar-atkisi"],
  },
  {
    name: "Göztepe",
    image: "/products/goztepe.jpeg",
    pages: ["taraftar-atkisi"],
  },
  {
    name: "Çaykur Rizespor",
    image: "/products/rizespor.jpeg",
    pages: ["taraftar-atkisi"],
  },
  {
    name: "Sivasspor bere",
    image: "/products/sivas-bere.jpg",
    pages: ["bere", "sapka"],
  },
  {
    name: "Boyunluk",
    image: "/products/buff.jpeg",
    pages: ["bere"],
  },
  {
    name: "Turkay Spor flama",
    image: "/products/turkay-spor.jpeg",
    pages: ["takim-bayragi", "bayrak"],
  },
  {
    name: "Gökçebeyspor bayrak",
    image: "/products/gokcebey.jpeg",
    pages: ["takim-bayragi", "bayrak"],
  },
  {
    name: "Polar sweatshirt",
    image: "/products/polar.jpeg",
    pages: ["forma"],
  },
];

export const home = {
  h1: "Atkı, şapka ve bayrak üretimi",
  seoTitle: "Atkı İmalatı ve Toptan Atkı Üretimi | Lider Atkı",
  description:
    "Özel tasarım atkı, dokuma atkı, taraftar atkısı, bere ve bayrak üretimi. Tek adet numuneden toptan siparişlere kadar üretim seçenekleri için Lider Atkı'dan teklif alın.",
  intro:
    "Şal atkı, dokuma atkı, triko atkı ve örme atkı ile şapka ve bayrak üretiyoruz. Taraftar grubu, kulüp, okul ve şirket için 1 adet de olur, 5.000 adet de. Fiyat sitede yok; yazıyı ve logoyu WhatsApp’tan gönder.",
  message: "Merhaba, atkı için fiyat almak istiyorum.",
  faqs: [
    {
      q: "Şal atkı, triko atkı ve örme atkı aynı mı?",
      a: "Şal atkı daha geniş kesilir. Triko atkı ve örme atkı iplik örgüsüdür. Dokuma atkı tezgâhta dokunur, yazı daha tok durur.",
    },
    {
      q: "Günlük kaç adet üretilir?",
      a: "Günlük kapasite 5.000 adettir. Numune 1 adetten yapılır.",
    },
    {
      q: "Fiyat nasıl öğrenilir?",
      a: "Sitede sepet yok. Adet, renk ve yazıyı WhatsApp’tan gönder, fiyatı yazalım.",
    },
    {
      q: "Sipariş için ne göndermeliyim?",
      a: "Adet, renk, yazı ve varsa logo. Eski bir ürünün fotoğrafı da olur. Fiyat bu bilgilere göre yazılır.",
    },
  ],
};

export function relatedPages(slugs: string[]) {
  return slugs
    .map((slug) => pages.find((page) => page.slug === slug))
    .filter((page): page is LandingPage => Boolean(page));
}

const galleries: Record<string, { folder: string; file: string; count: number; name: string }> = {
  "sal-atki": { folder: "sal", file: "sal-atki", count: 170, name: "Şal atkı" },
  "dokuma-atki": { folder: "dokuma", file: "dokuma-atki", count: 50, name: "Dokuma atkı" },
  "triko-atki": { folder: "triko", file: "triko-atki", count: 13, name: "Triko atkı" },
  bere: { folder: "sapka", file: "sapka-bere", count: 48, name: "Taraftar bere" },
  sapka: { folder: "sapka", file: "sapka-bere", count: 48, name: "Şapka" },
  bayrak: { folder: "bayrak", file: "bayrak", count: 56, name: "Bayrak" },
  "takim-bayragi": { folder: "bayrak", file: "bayrak", count: 56, name: "Takım bayrağı" },
  forma: { folder: "forma", file: "polar", count: 37, name: "Polar sweatshirt" },
};

export const homeSamples: Product[] = [
  { name: "Dokuma atkı", image: "/products/dokuma/dokuma-atki-01.jpg", pages: ["dokuma-atki"] },
  { name: "Şal atkı", image: "/products/sal/sal-atki-01.jpg", pages: ["sal-atki"] },
  { name: "Triko atkı", image: "/products/triko/triko-atki-01.jpg", pages: ["triko-atki"] },
  { name: "Şapka", image: "/products/sapka/sapka-bere-03.jpg", pages: ["sapka"] },
  { name: "Taraftar bere", image: "/products/sapka/sapka-bere-04.jpg", pages: ["bere"] },
  { name: "Bayrak", image: "/products/bayrak/bayrak-01.jpg", pages: ["bayrak"] },
  { name: "Takım bayrağı", image: "/products/bayrak/bayrak-02.jpg", pages: ["takim-bayragi"] },
  { name: "Polar sweatshirt", image: "/products/forma/polar-30.jpg", pages: ["forma"] },
];

export function productsFor(slug: string) {
  const gallery = galleries[slug];
  if (gallery) {
    return Array.from({ length: gallery.count }, (_, index) => {
      const file = `${gallery.file}-${String(index + 1).padStart(2, "0")}.jpg`;
      return {
        name: `${gallery.name} ${index + 1}`,
        image: `/products/${gallery.folder}/${file}`,
        pages: [slug],
        alt: gallery.name,
      };
    });
  }
  return products.filter((product) => product.pages.includes(slug));
}

export function pageBySlug(slug: string) {
  return pages.find((page) => page.slug === slug);
}
