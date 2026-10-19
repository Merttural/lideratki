# LiderAtkı.com — Aşama 1: Proje analizi ve SEO denetimi

Tarih: 19 Ekim 2026  
Kapsam: `/Users/merttural/lideratki` kaynak kodu. Canlı HTML, Core Web Vitals veya Search Console bu turda ölçülmedi.  
Kural: Uygulama kodu değiştirilmedi.

Öncelik: **P0** yayını veya taramayı bozar. **P1** reklam veya sıralama için yüksek etki. **P2** düzeltilmeli. **P3** ciladır.

## Proje mimarisi

Next.js App Router, tek site. Ayrı bir API, veritabanı, form backend’i veya test altyapısı yok.

| Parça | Kaynak | Gözlem |
| --- | --- | --- |
| Paket | `package.json` | `lideratki@0.1.0`. Bağımlılıklar: `next`, `react`, `react-dom`. |
| Kilitli sürüm | `package-lock.json` | Next.js **15.5.27**, React **19.1.1** aralığı kilitte `^19.1.1`. |
| Komutlar | `package.json` `scripts` | `dev`, `build`, `start`. Lint ve test scripti yok. |
| Yapılandırma | `next.config.ts` | Boş nesne. Yönlendirme, resim domaini, header veya `output: "export"` yok. |
| Stil | `postcss.config.mjs`, `app/globals.css` | Tailwind CSS v4, `@tailwindcss/postcss`. SCSS yok. Renkler CSS değişkeni. |
| Dil | `tsconfig.json` | `strict: true`. Alias `@/*`. |
| Rotalar | `app/` | Kök layout, ana sayfa, `[slug]`, `en/page`, `en/[slug]`, `not-found`, `sitemap.ts`, `robots.ts`. |
| İçerik | `lib/catalog.ts`, `lib/english.ts`, `lib/i18n.ts` | Türkçe metin ve ürün listesi katalogda. İngilizce kopya `english.ts`. Slug eşlemesi `i18n.ts`. |
| Bileşenler | `components/` | `landing.tsx` sayfa iskeleti. `product-grid.tsx` galeri. `site-header.tsx` ve `site-footer.tsx` istemci bileşeni. `locale-lang.tsx`, `scarf-stripe.tsx`. |
| Statik | `public/` | `brand/logo.png`. `public/products/` kökünde 20 eski görsel, 2,9 MB. Yeni galeriler alt klasörlerde. |
| Font | `app/layout.tsx` | `next/font`: Barlow Condensed ve Source Sans 3, `latin` + `latin-ext`. |
| Ortam değişkeni | kod taraması | `process.env` kullanımı yok. `.env*` `.gitignore` içinde. Uygulama buna bağlı değil. |
| Form | kod taraması | `<form>` yok. Teklif yolu `wa.me` ve `tel:`. |

Galeri boyutları, `public/products` altı:

| Klasör | Dosya | Boyut | Kullanan sayfalar |
| --- | --- | --- | --- |
| `sal/` | 170 | 19,3 MB | `/sal-atki` |
| `dokuma/` | 50 | 6,2 MB | `/dokuma-atki` |
| `sapka/` | 48 | 3,6 MB | `/bere` ve `/sapka` aynı dosyalar |
| `bayrak/` | 56 | 5,7 MB | `/bayrak` ve `/takim-bayragi` aynı dosyalar |
| `forma/` | 37 | 3,1 MB | `/forma` |
| `triko/` | 13 | 1,7 MB | `/triko-atki` |

`public/products` kökündeki 20 dosya, galerisi olmayan sayfalarda duruyor: örme, taraftar, kişiye özel, toptan.

`out/` diskte duruyor ve `.gitignore` içinde. `next.config.ts` statik export açmıyor. Bu klasör güncel sitenin kaynağı değil.

## Tespit edilen rotalar

Kodun ürettiği sayfalar. Hakkımızda, iletişim, ayrı SSS ve ayrı galeri rotası **yok**. İletişim footer’da. SSS, her sayfanın içindeki bölüm. Galeri, ilgili ürün sayfasının “İşler” ızgarası.

Türkçe adresler kökte. İngilizce adresler `/en/...`. Eşleme `lib/i18n.ts` `enSlugs`.

| URL | Dosya | Amaç | H1 | Title | Canonical |
| --- | --- | --- | --- | --- | --- |
| `/` | `app/page.tsx` | Üretim vitrini ve sayfa listesi | Atkı, şapka ve bayrak üretimi | Lider Atkı \| Şal, Dokuma, Triko Atkı ve Bayrak | `/` |
| `/dokuma-atki` | `app/[slug]/page.tsx` | Dokuma atkı teklifi | Dokuma atkı | Dokuma Atkı Üretimi \| Lider Atkı | `/dokuma-atki` |
| `/sal-atki` | aynı | Şal atkı teklifi | Şal atkı | Şal Atkı Üretimi \| Lider Atkı | `/sal-atki` |
| `/triko-atki` | aynı | Triko atkı teklifi | Triko atkı | Triko Atkı Üretimi \| Lider Atkı | `/triko-atki` |
| `/orme-atki` | aynı | Örme atkı teklifi | Örme atkı | Örme Atkı İmalatı \| Lider Atkı | `/orme-atki` |
| `/taraftar-atkisi` | aynı | Taraftar atkısı teklifi | Taraftar atkısı | Taraftar Atkısı Üretimi \| Lider Atkı | `/taraftar-atkisi` |
| `/kisiye-ozel-atki` | aynı | Kişiye özel atkı | Kişiye özel atkı | Kişiye Özel Atkı \| Lider Atkı | `/kisiye-ozel-atki` |
| `/toptan-atki` | aynı | Toptan atkı | Toptan atkı | Toptan Atkı Üretimi \| Lider Atkı | `/toptan-atki` |
| `/bere` | aynı | Bere | Taraftar bere | Taraftar Bere Üretimi \| Lider Atkı | `/bere` |
| `/sapka` | aynı | Şapka | Şapka | Taraftar Şapka Üretimi \| Lider Atkı | `/sapka` |
| `/bayrak` | aynı | Bayrak | Bayrak | Bayrak Üretimi \| Lider Atkı | `/bayrak` |
| `/takim-bayragi` | aynı | Takım bayrağı ve flama | Takım bayrağı | Takım Bayrağı ve Flama \| Lider Atkı | `/takim-bayragi` |
| `/forma` | aynı | Polar / forma | Polar sweatshirt | Polar Sweatshirt Baskı \| Lider Atkı | `/forma` |
| `/en` | `app/en/page.tsx` | İngilizce ana sayfa | Scarf, hat and flag production | Lider Atkı \| Woven, Shawl and Knitted Scarves | `/en` |
| `/en/woven-scarf` | `app/en/[slug]/page.tsx` | Dokuma, İngilizce | Woven scarf | Woven Scarf Production \| Lider Atkı | `/en/woven-scarf` |
| `/en/shawl-scarf` | aynı | Şal | Shawl scarf | Custom Shawl Scarf \| Lider Atkı | `/en/shawl-scarf` |
| `/en/knitted-scarf` | aynı | Triko | Knitted scarf | Knitted Scarf Production \| Lider Atkı | `/en/knitted-scarf` |
| `/en/knit-scarf` | aynı | Örme | Knit scarf | Knit Scarf Manufacturing \| Lider Atkı | `/en/knit-scarf` |
| `/en/fan-scarf` | aynı | Taraftar atkısı | Fan scarf | Fan Scarf Production \| Lider Atkı | `/en/fan-scarf` |
| `/en/custom-scarf` | aynı | Kişiye özel | Custom scarf | Custom Scarf \| Lider Atkı | `/en/custom-scarf` |
| `/en/wholesale-scarf` | aynı | Toptan | Wholesale scarves | Wholesale Scarf Production \| Lider Atkı | `/en/wholesale-scarf` |
| `/en/beanie` | aynı | Bere | Fan beanie | Fan Beanie Production \| Lider Atkı | `/en/beanie` |
| `/en/hat` | aynı | Şapka | Hat | Fan Hat Production \| Lider Atkı | `/en/hat` |
| `/en/flag` | aynı | Bayrak | Flag | Flag Production \| Lider Atkı | `/en/flag` |
| `/en/team-flag` | aynı | Takım bayrağı | Team flag | Team Flag and Pennant \| Lider Atkı | `/en/team-flag` |
| `/en/fleece` | aynı | Polar | Fleece sweatshirt | Fleece Sweatshirt Printing \| Lider Atkı | `/en/fleece` |
| Eşleşmeyen adres | `app/not-found.tsx` | 404 | Sayfa yok (İngilizce yolda da bu başlık, aşağıda) | Sayfa bulunamadı \| Lider Atkı | yok |

Title ve description metinleri `lib/catalog.ts` ve `lib/english.ts` içinden geliyor. Her ürün sayfasında description var. Ayrı bir description üretici fonksiyon yok.

Her ürün sayfasında: bir H1, giriş, ilgili sayfa linkleri, fotoğraf ızgarası, her fotoğrafta WhatsApp, sayfa sonunda yeşil WhatsApp, mobilde sabit WhatsApp çubuğu. Ana sayfada ek olarak dört adımlı sipariş listesi ve bütün sayfalara giden liste var.

## Sayfa bazında SEO durumu

Ortak düzen `components/landing.tsx`. Ürün sayfaları aynı iskeleti kullanır. Fark, katalog metni ve `productsFor()` galerisidir.

**Ana sayfa `/` ve `/en`.** Amaç, üretim türlerini göstermek ve teklife yönlendirmek. H1 tek. Open Graph görseli `/products/dokuma/dokuma-atki-01.jpg`. Örnekler `homeSamples`: dokuma, şal, şapka, bayrak, bere. “Ne üretiyoruz” bütün rotalara link verir. SSS sayfada görünür ve `FAQPage` JSON-LD ile aynı metindedir. Ayrı bir iletişim sayfasına link yok; telefon header ve footer’da.

**Galerili sayfalar.** `lib/catalog.ts` `galleries`: şal 170, dokuma 50, triko 13, bere ve şapka 48’er aynı dosya, bayrak ve takım bayrağı 56’şar aynı dosya, forma 37. Her kare `Şal atkı 1` gibi numaralı ad alır. WhatsApp metni bu adı taşır (`lib/i18n.ts` `productMessage`). H3, sayfa H1’inden farklı olduğu için görünür.

**Eski görselli sayfalar.** Örme, taraftar, kişiye özel ve toptan, `products` dizisindeki paylaşılmış dosyaları kullanır. Taraftar sayfasında kulüp adları (Fenerbahçe, Galatasaray ve diğerleri) hem H3 hem WhatsApp metnindedir. Bu, reklam metninde kulüp adı kullanmamak kararından ayrıdır; sitede adlar duruyor.

**Bulgular**

- **P1.** `/bere` ile `/sapka`, `/bayrak` ile `/takim-bayragi` aynı fotoğraf dizisini basar. Metinler farklı, görsel gövde aynı. Reklamlar birbirine karışabilir.
- **P1.** `/orme-atki` metni, örme ile trikonun çoğu aramada aynı ürün olduğunu söyler (`lib/catalog.ts`). İki URL aynı niyeti bölüşür. Örme sayfasının kendi fotoğraf klasörü yok.
- **P1.** `/taraftar-atkisi`, `/kisiye-ozel-atki` ve `/toptan-atki` hâlâ eski, az sayıda ve sayfalar arasında paylaşılan görselleri kullanır.
- **P2.** Galeri H3’leri `Şal atkı 1` … `Şal atkı 170` diye tekrar eder. WhatsApp için gerekli. Arama metni olarak zayıf ve sayfayı uzatır.
- **P2.** `/forma` H1 ve ürün adı “Polar sweatshirt”. Menü adı “Polar”. Klasör adı forma. Üç isim aynı sayfada.
- **P3.** Ana sayfa title’ı triko ve örmeyi birlikte anmaz; description anar. Bilinçli kısaltma, hata değil.

## Teknik SEO sorunları

**P1. Aynı görsel kümesi iki URL’de.** `productsFor()` bere/şapka ve bayrak/takım bayrağı için aynı `folder` ve `file` değerini döner. Sitemap her iki URL’ye de aynı `image:loc` listesini yazar (`app/sitemap.ts`).

**P1. Örme, taraftar, kişiye özel ve toptan sayfaları ince.** Kendi galerileri yok. Taraftar sayfası kulüp görsellerine dayanır. Kişiye özel ve toptan, dokuma/şal görsellerini tekrar kullanır.

**P2. Sitemap `lastModified` sabit.** `app/sitemap.ts` her URL için `new Date("2026-10-15")`. 19 Ekim’deki fotoğraf ve metin değişiklikleri bu tarihe yansımaz.

**P2. 404 dili kilitli.** `app/not-found.tsx` `x-locale` başlığını okur. Repoda bu başlığı yazan `middleware.ts` yok. Başlık bulunamazsa locale `tr`. İngilizce 404’te H1 “Sayfa yok” kalır. Title her dilde Türkçe. `robots: noindex, follow` doğru. Description yok.

**P2. Kök JSON-LD her dilde Türkçe.** `app/layout.tsx` Organization ve WebSite şemasını bütün sayfalara basar. `inLanguage` `tr-TR`. Hizmet URL’leri yalnızca Türkçe slug. İngilizce sayfada bu şema yanında bir de İngilizce FAQ/Service şeması vardır (`app/en/[slug]/page.tsx`).

**P2. Open Graph varsayılanı ana sayfa.** Layout’taki `openGraph` ana sayfa title ve description’ını taşır, görselsizdir. Ürün sayfaları kendi `openGraph` ve `twitter` alanlarını ezer. 404 bu varsayılanı miras alabilir. Canlı 404 HTML’i bu raporda açılmadı.

**P3. ItemList URL’si sayfa adresi.** `app/[slug]/page.tsx` ilk 12 ürünü listeler. Her öğenin `url` değeri sayfanın kendisidir, görselin adresi değildir. İsimler numaralı olduğu için liste içi tekrar, eski “hepsi Şal atkı” halinden iyidir.

**P3. Logo `alt=""`.** `components/site-header.tsx`. Yanında “Lider Atkı” yazısı var. Dekoratif sayılması doğru. Ayrı bir logo açıklaması yok.

Kaynakta doğru olanlar:

- Her indeksli sayfanın title, description, canonical ve `hreflang` (`tr`, `en`, `x-default`) değeri var. `x-default` Türkçe URL.
- `metadataBase` `https://www.lideratki.com` (`lib/catalog.ts` `SITE_URL`).
- `app/robots.ts` `allow: /` ve sitemap adresi. `noindex` yalnızca 404’te.
- Sitemap görsel adreslerini ve dil alternatiflerini basar. Next.js `image:image` üretir.
- Google doğrulama meta’sı layout metadata `verification.google` içindedir.
- Başlık sırası: sayfada tek H1, ardından H2 bölümler, ürünlerde H3. SSS `dt`/`dd`.
- Layout `lang="tr"` ile açılır. Head içi script, `/en` yollarında `documentElement.lang` değerini `en` yapar. `components/locale-lang.tsx` bunu istemcide de yazar.
- `next.config.ts` içinde kırık bir rewrite yok. Kod içi linkler `hrefFor` ve `viewPages` ile katalog slug’larına gider.

## Müşteri deneyimi sorunları

İlk ekrandan teklife giden yol kodda açık: H1, kısa giriş, yeşil “WhatsApp’tan fiyat al”, header’da telefon, mobilde altta sabit çubuk. Ana sayfada sipariş dört adım (`lib/i18n.ts` `orderSteps`): model, adet, örnek, fiyat. Fiyatın sitede olmadığı hem metinde hem SSS’te yazılı. Sepet veya form yok.

**P1. Mobil sabit çubuk footer’ın üstüne biner.** Çubuk `components/landing.tsx` içinde `fixed inset-x-0 bottom-0` ve `md:hidden`. `main` alt boşluğu `pb-24`. Footer `app/layout.tsx` içinde `main`’in kardeşi. Footer’daki telefon, e-posta ve sayfa linkleri mobil ekranda çubuğun altında kalabilir.

**P1. Dört sayfanın örneği eski ve paylaşımlı.** Örme, taraftar, kişiye özel, toptan. Müşteri “gerçek iş” bekler. Şal, dokuma, triko, şapka, bere, bayrak ve polar sayfalarında yeni klasörler var.

**P2. Menü yatay kayar, aktif sayfa belli değil.** `components/site-header.tsx`. 12 link `overflow-x-auto`. `aria-current` yok. Mobilde hepsi sığmaz. Çalışır, ama hangi sayfada olunduğu işaretli değil.

**P2. Aynı iş iki menü adıyla duruyor.** Bere ve şapka metinleri birbirini “çoğu zaman aynı ürün” diye anlatır. Bayrak ve takım bayrağı da örtüşür. Müşteri hangi sayfadan yazacağını seçmek zorunda kalır.

**P2. Forma adı dağınık.** Menü “Polar”, H1 “Polar sweatshirt”, URL `/forma`.

**P3. Güven metni kapasite ve iletişimden ibaret.** Günlük 5.000, 1 adet numune, WhatsApp, `lideratki@gmail.com`, Instagram. Adres, vergi ünvanı veya teslim süresi yok. Süre metinleri “adede göre değişir” der. Uydurma süre eklenmemeli. Ayrı hakkımızda sayfası olmadığı için bu bilgiler dağınık durur.

WhatsApp numarası tek kaynak: `lib/catalog.ts` `PHONE_E164` `905425838573`, görünen `0542 583 85 73`. Ürün linki `productMessage` ile ürün adını taşır. Sayfa üstündeki genel buton, sayfanın `message` alanını kullanır. Ürün adı orada yoktur. Bu, genel teklif butonu için beklenen davranıştır.

## Performans ve erişilebilirlik riskleri

Skor ölçülmedi. Aşağıdakiler kod ve dosya boyutundan çıkar.

**P1. Şal sayfası 170 görseli tek HTML belgesine koyar.** `next/image` kullanılıyor. Yalnızca ilk hero `priority`. Diğerleri varsayılan lazy. Yine de DOM ve sitemap büyür. Klasör 19,3 MB. Kaynak JPEG’ler yaklaşık 1100 px uzun kenar. `public/products` kökündeki 20 dosyanın yeniden boyutlanıp boyutlanmadığı bu raporda tek tek ölçülmedi.

**P2. Header ve footer istemci bileşeni.** `usePathname` için `"use client"`. Sayfa gövdesi sunucu bileşeni. Ek JS küçük, ama iki çerçeve her sayfada hidrasyon ister.

**P2. Sabit çubuk ve yapışkan header.** Header `sticky top-0 z-30`. Alt çubuk `z-40`. Klavye odağı çubuğun altında kalan footer linkine gidebilir. Odak halkası için özel `focus-visible` kuralı `globals.css` içinde yok. Tarayıcı varsayılanı duruyor. Kontrast ölçülmedi. Kullanılan renkler: mürekkep `#16191e`, kâğıt `#f3efe6`, lacivert `#10233f`, scarlet `#c8102e`, WhatsApp yeşili `#128c4a`. Footer’da `text-white/75` lacivert üstünde. Oran hesaplanmadı.

**P3. Font.** `next/font` ile dört display ve üç body ağırlığı. `latin-ext` Türkçe karakter için doğru. Yükleme Next’e bırakılmış. Ölçüm yok.

**P3. Form etiketi yok.** Form olmadığı için geçerli. İleride form eklenirse etiket şart.

**P3. `scroll-behavior: smooth`.** `app/globals.css`. Odak kaydırırken hareket azaltma tercihine bakılmıyor.

Gereksiz bir üçüncü parti script yok. Analitik, reklam pikseli ve çerez bandı yok.

## Kritik ve yüksek öncelikli sorunlar

P0 bulunmadı. Kaynakta indekslemeyi kapatan bir kural, boş canonical veya kırık iç link üreteci yok.

1. **P1.** Bere/şapka ve bayrak/takım bayrağı aynı galeriyi iki URL’de gösterir.
2. **P1.** Örme, kişiye özel ve toptan sayfaları paylaşılan eski görsellerle ince. Taraftar sayfası kulüp görsellerine bağlı.
3. **P1.** Mobil sabit WhatsApp çubuğu footer’ı kapatabilir.
4. **P1.** Şal sayfasında 170 görsel tek seferde DOM’a girer. Reklam açılış deneyimi için risk. Skor yok.
5. **P1.** Google Ads dönüşümü yok. Repoda `gtag`, `GTM` veya `AW-` yok. WhatsApp tıklaması ölçülemez. Etiket eklenirse çerez notu da gerekir. Etiket yokken KVKK sayfası eksik sayılmadı.

## Doğrulanması gereken konular

Bu maddeler kaynakta görünmez. Canlı veya araç ölçümü gerekir.

- `lideratki.com` kökünün `www` adresine 308 verdiği. Yönlendirme `next.config.ts` içinde yok. Platform ayarı.
- Search Console’un sitemap’i yeniden okuyup okumadığı. Kod adresi `https://www.lideratki.com/sitemap.xml`.
- 404’ün canlıda hangi `og:title` ve `lang` ile döndüğü.
- Next’in ürettiği `<meta charset>` canlı HTML’de var mı. Layout elle charset yazmıyor.
- Şal sayfasının mobil LCP ve toplam aktarım boyu.
- Footer kontrastı ve sabit çubuğun gerçek telefonda footer linklerini kapatıp kapatmadığı.
- Eski `public/products/*` dosyalarının piksel boyutu.
- `out/` klasörünün herhangi bir deploy tarafından kullanılıp kullanılmadığı. Güncel `next.config.ts` kullanmıyor.

## Önerilen uygulama sırası

1. Mobil çubuğun footer’ı kapatmasını gider. `components/landing.tsx`, gerekirse `app/layout.tsx`.
2. Reklam açılacak URL’leri ayır: bere ile şapka, bayrak ile takım bayrağı aynı görselle kalmasın. Ya metin ve görsel gerçekten ayrılır ya da biri diğerine tek canonical verir. `lib/catalog.ts`, `app/sitemap.ts`.
3. Örme, kişiye özel ve toptan için ayrı görsel yoksa bu URL’leri reklama verme. Görsel gelince `galleries` nesnesine ekle.
4. Şal ızgarasında ilk ekranda sınırlı sayıda görsel göster. Geri kalanı aynı URL’de açılır olsun. `components/product-grid.tsx` veya `components/landing.tsx`.
5. Sitemap `lastModified` değerini içerik değişince güncelle. `app/sitemap.ts`.
6. 404’ü yola göre TR/EN yap. `x-locale` başlığına güvenme. `app/not-found.tsx`.
7. İngilizce sayfadaki Organization şemasını dile göre üret veya İngilizce sayfada Türkçe hizmet URL’lerini tekrarlama. `app/layout.tsx`.
8. Ads dönüşüm kimliği gelince yalnızca WhatsApp tıklamasına bağla ve kısa çerez notunu aynı anda ekle. Yeni dosya gerekir. Kimlik yokken ekleme.
9. Forma adlarını tek dile çek: menü, H1 ve URL. `lib/catalog.ts`, `lib/english.ts`.

## Sonraki aşamada değişmesi beklenen dosyalar

- `components/landing.tsx` — sabit çubuk, gerekirse galeri sınırı.
- `components/product-grid.tsx` — galeri sınırı veya “devamını gör”.
- `components/site-header.tsx` — aktif link, mobil menü ancak sıra ona gelirse.
- `lib/catalog.ts` — galeri eşlemesi, forma adları, hangi sayfanın kendi görseli olduğu.
- `lib/english.ts` — aynı metin kararlarının İngilizcesi.
- `lib/i18n.ts` — yalnızca yeni arayüz metni gerekirse.
- `app/sitemap.ts` — `lastModified` ve görseller iki URL’de tekrarlanmasın.
- `app/not-found.tsx` — dil.
- `app/layout.tsx` — şema dili.
- Yeni bir çerez notu bileşeni, yalnızca Ads kimliği varsa.

Bu turda bu dosyalar değiştirilmedi.

## Test komutları

Repoda tanımlı komutlar:

```bash
npm run dev
npm run build
npm run start
```

Lint ve test scripti yok. `npm run build` tür kontrolünü Next derlemesinin içinde çalıştırır. Ayrı bir `tsc` scripti yok.

## Aşama 2 — 19 Ekim 2026

Uygulama yerel olarak bitti. Canlı siteye deploy edilmedi. `https://www.lideratki.com` bu değişiklikleri henüz göstermez.

### Değişen dosyalar

- `lib/catalog.ts` — ana sayfa title ve description.
- `lib/english.ts` — aynı metnin İngilizcesi.
- `app/page.tsx`, `app/en/page.tsx` — Twitter kartı. Open Graph görseli duruyor.
- `app/layout.tsx` — fiyatı olmayan `OfferCatalog` kalktı. `WebSite.inLanguage` artık `tr-TR` ve `en`. Kök Open Graph ana sayfa başlığını taşımıyor.
- `app/[slug]/page.tsx`, `app/en/[slug]/page.tsx` — `ItemList` öğesine gerçek görsel adresi eklendi. Olmayan slug `noindex` metadata döner.
- `app/sitemap.ts` — `lastModified` `2026-10-19`.
- `app/not-found.tsx`, `components/not-found-view.tsx` — 404 yolu okuyup TR veya EN basar. Kendi title, description ve Open Graph’ı var. `x-locale` okunmuyor.

`app/robots.ts`, slug’lar, görsel dosya adları ve sayfa gövdeleri duruyor.

### Yapılanlar

Ana sayfa title: `Atkı İmalatı ve Toptan Atkı Üretimi | Lider Atkı`. Description, verilen cümle. H1 `Atkı, şapka ve bayrak üretimi` olarak kaldı. İngilizce title: `Scarf Manufacturing and Wholesale Production | Lider Atkı`. Diğer 24 sayfanın title’ı zaten sayfaya özeldi; yeniden yazılmadı. 26 indeksli URL’nin title’ı birbirinden farklı.

Canonical’lar `https://www.lideratki.com` üzerinden. Yeni yönlendirme eklenmedi. Sitemap’te 26 sayfa adresi var, 404 yok. `robots.txt` `Allow: /` ve sitemap satırı. 404 `noindex`. JavaScript çalışınca ana sayfa `index` etiketinin 404’ün üstüne yazması, olmayan slug’ın metadata’sına `noindex` verilerek kesildi.

Organization ve WebSite duruyor. Fiyat, stok, yorum ve puan yok. Product ve Article şeması eklenmedi. Sayfa şeması BreadcrumbList, FAQPage, Service ve ItemList. ItemList’in `url` değeri sayfanın adresi; `image` görselin adresi.

Görsel dosya adları ve sıkıştırma bu turda değişmedi. Logo `alt=""` duruyor; yanında marka yazısı var. Galeri alt metinleri kategori ve numara. Fotoğrafın rengi veya arması uydurulmadı.

### Test

`npm run build` geçti. Next.js 15.5.27, 31 statik sayfa. Ayrı lint scripti yok; build içindeki tür kontrolü de geçti.

Ardından `next start --port 3010`. Ölçülenler:

- 26 indeksli rota 200. Her birinin title’ı tek, canonical `https://www.lideratki.com` ile başlıyor, robots `index, follow`, tek H1.
- `/missing` ve `/en/missing-page` 404. İlk HTML title’ı Türkçe `Sayfa bulunamadı | Lider Atkı`, robots `noindex` ve `noindex, follow`, canonical yok. Tarayıcıda JS sonrası `/en/missing-page` title’ı `Page not found | Lider Atkı`, H1 `Page not found`, linkler İngilizce. `/yok-boyle-sayfa` H1 `Sayfa yok`, linkler Türkçe. İkisinde de JS sonrası robots yalnızca `noindex`.
- `/sitemap.xml` 26 benzersiz sayfa adresi, `lastmod` `2026-10-19`, 1014 `image:loc`.
- `/robots.txt` allow ve `https://www.lideratki.com/sitemap.xml`.
- `/sal-atki` JSON-LD ayrıştı: Organization, WebSite, BreadcrumbList, FAQPage, Service, ItemList. İlk liste öğesinde `image` `.../products/sal/sal-atki-01.jpg`. `OfferCatalog`, Product ve `aggregateRating` yok.
- `/en` şemasında `inLanguage` `["tr-TR","en"]`.

Google Zengin Sonuçlar testi çalıştırılmadı.

### Kalan riskler

- Bere ile şapka, bayrak ile takım bayrağı aynı görselleri basar. İkisi de kendi canonical’ında ve sitemap’te. Reklam URL’leri için ikisi de duruyor. Aynı `image:loc` iki sayfada tekrar eder.
- Örme, kişiye özel, toptan ve taraftar sayfalarının kendi yeni galerisi yok.
- Şal sayfası 170 görseli tek belgede tutar.
- Mobil WhatsApp çubuğu footer’ın üstüne binebilir. Bu turda tasarım değişmedi.
- Bazı şapka ve forma dosyaları telefon ekran görüntüsü.
- Ads dönüşüm etiketi yok. Etiket gelmeden KVKK sayfası eklenmedi.
- Forma menüsü “Polar”, H1 “Polar sweatshirt”, URL `/forma`.
- 404’ün ham HTML title’ı her dilde Türkçe. JS çalışınca İngilizce yol İngilizce title alır. Google JS çalıştırır; ham HTML’e bakan bir araç Türkçe title görür.
- Bu değişiklikler canlıda değil. Deploy edilmeden Search Console eski title ve şemayı okumaya devam eder.

## Aşama 3 — 19 Ekim 2026

Tasarım sistemi duruyor: kâğıt, lacivert, scarlet, WhatsApp yeşili, Barlow ve Source Sans. Yeni sayfa veya bağımlılık yok. Canlı siteye deploy edilmedi.

### Değişen dosyalar

- `components/landing.tsx` — hero cevapları, iki CTA, kategori kartları, örnek kartları, sipariş bölümü.
- `components/site-header.tsx` — gruplu menü. Mobilde açılır panel, yatay kaydırma yok.
- `components/site-footer.tsx` — `iletisim` çapası. Mobilde sabit çubuğun altında 96 px boşluk.
- `components/product-grid.tsx` — ilk 12 örnek, “Daha fazla örnek”.
- `lib/i18n.ts` — menü grupları ve arayüz metinleri, TR ve EN.
- `lib/catalog.ts` — ana sayfa örnekleri gerçek sayfalara bağlandı. Triko ve polar eklendi.
- `app/globals.css` — odak halkası ve azaltılmış hareket.

### Çözülen akış

Ana sayfa ilk ekranda ne üretildiğini, kimin için olduğunu, numune ve toptanın mümkün olduğunu ve teklifin WhatsApp’tan alındığını söylüyor. Birincil düğme `wa.me/905425838573` açar, metin encode edilir, mesaj kullanıcı gönderene kadar gitmez. İkincil düğme `#ornekler` bölümüne iner.

12 kategori kartı kendi rotasına gider. Kart görselleri mevcut dosyalar. Bere ve şapka kartları aynı klasörden iki ayrı gerçek fotoğraf kullanır. Polar kartı `polar-30.jpg`.

Örnek kartında ürün adı, sayfanın mevcut tanımı, ürün sayfası linki ve o ürüne özel WhatsApp metni var. Ayrı bir “üretim tekniği” cümlesi yazılmadı; teknik, ürün adının ve sayfa girişinin içinde.

Güven alanı mevcut dört adım, günlük 5.000, 1 adet numune, telefon, e-posta ve Instagram. Yeni garanti, teslim süresi veya referans sayısı yok.

Menü grupları: Atkılar, Bere ve şapka, Bayraklar, Polar. Üretim örnekleri ve sipariş süreci ana sayfadaki bölümlere, iletişim footer’a gider. Kurumsal sayfa olmadığı için böyle bir rota eklenmedi.

Ürün galerisi 12’şer açılır. Şal sayfasının 170 görseli tek seferde DOM’a girmez.

### Test

`npm run build` geçti. Ayrı lint scripti yok.

Yerel `next start --port 3010`:

- Ana sayfa H1 tek. “Üretim örneklerini incele” adresi `#ornekler` oldu.
- Dokuma kartı `/dokuma-atki` açtı. Galeri ilk 12 görsel ve “Daha fazla örnek”. WhatsApp metni `Dokuma atkı 1` için encode.
- Bütün WhatsApp linkleri `905425838573`. Telefon `tel:+905425838573`.
- 390 px genişlikte yatay taşma yok. Menü açıldı; gruplar ve kapat düğmesi göründü.
- Sayfa sonundaki son footer linki, sabit çubuğun üstünde kaldı. Çubuk linki kapatmadı.
- İngilizce ana sayfada aynı CTA ve `/en/woven-scarf` linki var.

### Kalan boşluklar

- Örme, taraftar, kişiye özel ve toptan kartları hâlâ eski, paylaşılmış fotoğrafları kullanır. Yeni klasör yok.
- Bere ile şapka, bayrak ile takım bayrağı ürün sayfalarında aynı galeriyi basar.
- Forma klasöründe ekran görüntüsü ve forma dışı fotoğraflar da var. Kart için forma fotoğrafı seçildi; galerinin geri kalanı ayıklanmadı.
- Ayrı kurumsal sayfa, form ve müşteri yorumu yok. Uydurulmadı.
- Değişiklik canlıda değil.

## Aşama 4 — 19 Ekim 2026

Ürün sayfalarının metni ayrıldı. Yeni URL açılmadı. Arama hacmi ve sıralama tahmini yazılmadı. Canlı siteye deploy edilmedi.

### Değişen dosyalar

- `lib/catalog.ts` — 12 sayfanın description, giriş, açıklama, madde listesi, SSS ve ilgili linkleri.
- `lib/english.ts` — aynı metinlerin İngilizcesi.
- `components/landing.tsx` — madde listesi `ul` olarak basılıyor.
- `app/[slug]/page.tsx`, `app/en/[slug]/page.tsx` — maddeler sayfaya geçiyor. SSS şeması aynı `faqs` dizisini kullanıyor.

H1 ve URL duruyor. Title’lar zaten sayfaya özeldi, değiştirilmedi.

### Sayfa niyeti ve bağlantılar

| Sayfa | Niyet | İlgili linkler |
| --- | --- | --- |
| `/dokuma-atki` | Tezgâh dokuması, tok yazı ve logo | şal, taraftar, toptan |
| `/sal-atki` | Geniş, omuza atılan, kenarına yazı | kişiye özel, dokuma, toptan |
| `/triko-atki` | Yumuşak iplik örgü, kışlık | örme, dokuma, şapka |
| `/orme-atki` | Aynı iplik örgüsü; örgü tipi örneğe göre | triko, dokuma, toptan |
| `/taraftar-atkisi` | Grup adı, slogan, renk, arma, toplu adet | dokuma, toptan, bere |
| `/kisiye-ozel-atki` | İsim, tarih, logo dosyası | şal, dokuma, triko |
| `/toptan-atki` | Adet, ölçü ve modele göre fiyat | dokuma, şal, bayrak |
| `/bere` | Polar bere ve boyunluk | şapka, polar, taraftar |
| `/sapka` | Kışlık şapka araması, çoğu polar bere | bere, taraftar, bayrak |
| `/bayrak` | Flama ve tribün boyu | takım bayrağı, taraftar, toptan |
| `/takim-bayragi` | Takım rengi ve arması | bayrak, taraftar, dokuma |
| `/forma` | Polar sweatshirt logo baskısı | şapka, bere, taraftar |

İngilizce karşılıklar aynı linkleri kendi slug’larıyla veriyor.

### Yazılmayanlar

İplik türü, örgü kataloğu, santimetre tablosu, indirim dilimi, sabit teslim günü, logo dosya formatı, baskı yöntemi ve kumaş gramajı uydurulmadı. Sayfalarda bunların sitede listelenmediği yazıyor.

### Rehber planı

Altı konu da mevcut sayfalarla çakışıyor. Bu turda makale yayımlanmadı.

1. Dokuma ile örme farkı. Dokuma, triko ve örme sayfalarında duruyor. Yeni URL gerekmez.
2. Taraftar atkısı nasıl yaptırılır. Taraftar sayfası ve sipariş adımları karşılıyor.
3. Fiyatı belirleyen faktörler. Toptan sayfası adet, ölçü ve modeli yazıyor. Daha fazla faktör işletme sahibinden gelmeden makale olmaz.
4. Logo dosyası hazırlama. Kişiye özel sayfa dosya veya fotoğraf diyor. Format listesi yok.
5. Toptan siparişte dikkat. Toptan sayfası bunu anlatıyor.
6. Numune ve seri üretim. Ana sayfadaki dört adım ve ürün SSS’leri karşılıyor.

İşletme sahibi fiyat dilimleri, süre aralıkları ve dosya formatını verirse önce 3 ve 4 numaralı konular yazılır. O zamana kadar yeni rehber URL’si açılmaz.

### İşletme sahibinden doğrulanacaklar

- Triko ve örme aynı ürün olarak kalsın mı, yoksa örgü tipi gerçekten ayrılıyor mu?
- İplik türü ve örgü kalınlığı var mı?
- Şal ve bayrak için kullanılan ölçüler neler?
- Toptan fiyatta adet dilimi var mı?
- Üretim süresi için gerçek aralık var mı?
- Logo için kabul edilen dosya türleri neler?
- Polar sweatshirt’te baskı mı, nakış mı yapılıyor?
- Şapka, polar bere dışında hangi kalıplarda üretiliyor?

### Test

`npm run build` geçti. Next.js 15.5.27, 31 sayfa. Ayrı lint scripti yok.

Derlenen HTML’de 12 Türkçe ürün sayfasının description’ı birbirinden farklı. Dokuma sayfası `/taraftar-atkisi` ve `/toptan-atki` linklerini basıyor. İngilizce dokuma sayfası `/en/fan-scarf` ve `/en/wholesale-scarf` linklerini basıyor. H1’ler değişmedi.

## Aşama 5 — 19 Ekim 2026

Ölçüm yerel üretim önizlemesinde yapıldı: `next build` sonrası `next start` port 3010, Lighthouse 12.8.2, simüle mobil (412×823, DPR 1,75). Bu laboratuvar skorudur. Alan verisi (CrUX) ve PageSpeed Insights çalıştırılmadı. Canlı site Aşama 2–5 değişikliklerini içermiyor; canlı skor bu çalışmayı ölçmez. INP Lighthouse laboratuvarında yok. TBT, INP yerine geçmez.

Hedefler hedef olarak duruyor. Aşağıdaki sayılar başarı ilanı değil.

### Başlangıç

Disk: `public` yaklaşık 43 MB, bunun 40 MB’si `public/products`. Şal 170 dosya / 20 MB, dokuma 50 / 6,3 MB, bayrak 56 / 5,8 MB, şapka 48 / 3,7 MB, forma 37 / 3,1 MB, triko 13 / 1,8 MB. En büyük tek dosya `bursaspor.jpeg` 392 KB. Dosya silinmedi. Toplu WebP/AVIF dönüşümü yapılmadı: ürün fotoğrafları `next/image` ile zaten WebP gidiyor. AVIF açılmadı; ilk soğuk istekte dönüştürme aynı makinede Lighthouse’u şişiriyor.

İlk ana sayfa koşusu soğuktu. Görsel optimizasyonu aynı CPU’da çalıştığı için skor şişti: performans 49, LCP 4,9 s, TBT 3.900 ms, CLS 0. Ana iş parçacığında 5,2 s vardı; betik değerlendirme 0,6 s. Bu JS darboğazı değil. Karşılaştırma için hemen ardından gelen sıcak koşu kullanıldı.

Sıcak önbellek, aynı araç:

| Sayfa | Performans | Erişilebilirlik | LCP | CLS | TBT | Bayt |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | 91 | 96 | 3,5 s | 0 | 50 ms | 750 KiB |
| `/sal-atki` | 91 | 96 | 3,5 s | 0 | 60 ms | 791 KiB |

LCP öğesi hero görseli. `priority` var, lazy değil. Ekran dışı görseller lazy. CLS 0. İlk yük JS 123 kB, paylaşılan 103 kB. Bağımlılık yalnız `next`, `react`, `react-dom`. Kullanılmayan üçüncü parti paket yok. Kullanılmayan CSS skoru 1. Render-blocking CSS tahmini kazanç 0 ms. Next chunk içinde yaklaşık 11 KiB legacy JS var; refactor edilmedi.

Erişilebilirlik 96’nın nedeni kontrasttı. `#128c4a` üzerindeki küçük `text-wa` linkleri krem zemin `#f3efe6` üzerinde AA 4,5’i geçmiyordu. Şal sayfasında ürün kartı `aria-label`’ı görünür metinle uyuşmuyordu. Form yok. Alt metin, buton adı, başlık sırası ve hedef boyut denetimleri 1’di. Sabit WhatsApp çubuğu alt bilgiyi kapatmıyor (Aşama 3).

### Yapılanlar

- `--color-wa` `#0e6e3a`. Beyaz üstünde kontrast yaklaşık 6,3; krem üstünde yaklaşık 5,5. Yeşil duruyor.
- Ürün kartındaki uyuşmayan `aria-label` kalktı. Bağlantının adı görünür ürün adı ve WhatsApp metni.
- Menü, dil ve telefon hedefleri en az 44 px (`min-h-11`).
- Barlow 500 kalktı. Kaynakta `font-medium` yok. Bu ağırlığın iki dosyası, yaklaşık 24 KB, artık ön yüklemede yok. Source Sans 3 değişken font; 400, 600 ve 700 aynı dosyaları kullanıyor. 700 silinirse dil ve menü düğmeleri sentetik kalınlığa düşer. İncelemede 700 geri kondu.
- Üst bilgi logosu `next/image` içinden gidiyor: 96 px genişlikte WebP yaklaşık 5 KB. Favicon hâlâ `/brand/logo.png`, yaklaşık 26 KB.
- Örnek kartı `sizes` tablet 2 sütunu 50vw sayıyor. Hero `sizes` aynı kaldı. Aynı dokuma fotoğrafı hem hero’da hem kategori kartında. Hero’yu 640 px’e çekince tarayıcı 640 ve 750 sürümünü birden indiriyordu. Tek URL’ye dönüldü.

Kalite düşüren yeniden sıkıştırma ve 374 JPG’nin dönüştürülmesi yapılmadı. Hero’yu küçültmek bu laboratuvarda LCP’yi taşımıyor: son sıcak koşuda LCP’nin yüzde 4’ü indirme, yüzde 46’sı render gecikmesi, yüzde 36’sı yükleme gecikmesi.

### Son ölçüm

Aynı Lighthouse komutu, optimizasyon önbelleği sıcak. İki tekrar yazıldı; laboratuvar gürültüsü var.

| Sayfa | Koşu | Performans | Erişilebilirlik | LCP | CLS | TBT | Bayt |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | 1 | 92 | 100 | 3,3 s | 0 | 50 ms | 731 KiB |
| `/` | 2 | 89 | 100 | 3,4 s | 0 | 180 ms | 731 KiB |
| `/sal-atki` | 1 | 92 | 100 | 3,3 s | 0 | 50 ms | 742 KiB |
| `/sal-atki` | 2 | 92 | 100 | 3,4 s | 0 | 60 ms | 742 KiB |

Karşılaştırma yalnız sıcak yerel koşular arasında. Soğuk 49 / 4,9 s bu tabloya konmaz. Üretim ortamı ölçülmedi.

LCP hedefi 2,5 s tutmadı. CLS 0, hedef 0,1’in altında. INP ölçülmedi. TBT sıcak koşularda 50–180 ms; bu INP değil.

Erişilebilirlik denetiminde kontrast ve isim uyuşmazlığı kalmadı. `modern-image-formats` 1. Hero lazy değil. Ekran dışı görseller lazy.

`npm run build` geçti. Next.js 15.5.27, 31 sayfa. Ana sayfa First Load JS 123 kB.

### Değişen dosyalar

- `app/globals.css`
- `app/layout.tsx`
- `components/landing.tsx`
- `components/product-grid.tsx`
- `components/site-header.tsx`

### Kalanlar

- LCP bu laboratuvarda 3,3–3,5 s. Daha küçük hero, aynı fotoğrafın geniş kartıyla URL’yi ayırıp iki indirme yaratıyor. Kaliteyi bozmadan ek kazanç görünmedi.
- INP ve PageSpeed Insights yok. Canlı site bu değişiklikleri içermiyor. Deploy edilmedi.
- Favicon PNG. Lighthouse hâlâ hero için yaklaşık 116 KiB responsive-image payı yazıyor; görünen kutu 356×200 px, cihaz pikseli bir üst dilim olan 750 px istiyor.
- Örme, kişiye özel, toptan ve taraftar eski ortak görselleri kullanıyor. Bere/şapka ve bayrak/takım bayrağı galeriyi paylaşıyor. Bazı forma ve şapka dosyaları ekran görüntüsü. Bu turda silinmedi.
- Commit yok.

### İnceleme — 19 Ekim 2026

Depoda hiç commit yok. `git diff` boş. `git status` bütün proje dosyalarını izlenmeyen gösteriyor. Fotoğraflar, `tsconfig.tsbuildinfo` ve `.cursor/settings.json` bu turda düzenlenmedi.

Son turda elle değişen kaynak dosyalar: `app/globals.css`, `app/layout.tsx`, `components/landing.tsx`, `components/product-grid.tsx`, `components/site-header.tsx`. SEO sayfaları (`app/page.tsx`, `app/en/page.tsx`, `app/[slug]/page.tsx`, `app/en/[slug]/page.tsx`, `app/robots.ts`, `app/sitemap.ts`, `app/not-found.tsx`) bu turda değişmedi.

İncelemede bulunan hata: `app/layout.tsx` içinden Source Sans 700 çıkarılmıştı. Üst bilgideki dil ve menü düğmeleri `font-bold` kullanıyor ve `font-display` taşımıyor. 700 geri kondu. Barlow 500 duruyor; onu kullanan sınıf yok.

`npm run build` geçti. Next.js 15.5.27, 31 sayfa, tip kontrolü hatasız. Ana sayfa First Load JS 123 kB. `package.json` içinde `lint` ve `test` scripti yok. Ayrı lint ve test komutu çalıştırılmadı. `next build` kendi satırında “Linting and checking validity of types” yazdı ve hata vermeden bitti.

Ardından `next start --port 3011` ile üretilen HTML okundu:

- `/` title `Atkı İmalatı ve Toptan Atkı Üretimi | Lider Atkı`. Canonical `https://www.lideratki.com`. hreflang tr, en, x-default. robots `index, follow`.
- `/sal-atki` canonical `https://www.lideratki.com/sal-atki`, İngilizce karşılığı `/en/shawl-scarf`.
- `/en/shawl-scarf` canonical kendi adresi, x-default Türkçe sayfa.
- `robots.txt` `Allow: /` ve sitemap `https://www.lideratki.com/sitemap.xml`.
- Sitemap 26 URL: ana sayfa, `/en` ve 12 sayfanın iki dili.
- `/yok-boyle-sayfa` title `Sayfa bulunamadı | Lider Atkı`, robots `noindex`. Canonical yok. İngilizce 404 bu turda tarayıcıda yeniden açılmadı.
- WhatsApp `https://wa.me/905425838573`. Ana sayfa metni `Merhaba, atkı için fiyat almak istiyorum.` Şal kartı `Şal atkı 1` diye gidiyor. İngilizce şal kartı `Hello, I would like a price for Shawl scarf 1.`
- Telefon `tel:+905425838573`. E-posta `mailto:lideratki@gmail.com`. Instagram `instagram.com/lideratkii`.

Lighthouse bu font düzeltmesinden sonra yeniden çalıştırılmadı. Yukarıdaki 3,3–3,4 s LCP sayıları bir önceki derlemeye aittir. Düzeltme aynı değişken font dosyalarına 700 kaydı ekliyor; ön yüklenen font hâlâ 8 dosya, diskte 161 KB. Yeni performans skoru üretilmedi.
