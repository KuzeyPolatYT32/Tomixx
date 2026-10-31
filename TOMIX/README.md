# TOMIX — Premium Ev ve Yaşam Çözümleri

**TOMIX**, plastik ev gereçleri, mutfak aksesuarları, saklama ve düzenleme sistemleri, banyo aksesuarları, temizlik ekipmanları ve modern yaşam ürünleri için tasarlanmış, üst düzey ve modern bir e-ticaret vitrin platformudur.

---

## 🎨 Marka Kimliği & Tasarım Sistemi

- **Marka Kişiliği:** Modern, Premium, Güvenilir, Fonksiyonel, Yenilikçi, Minimalist.
- **Tipografi:** Google Fonts — [Manrope](https://fonts.google.com/specimen/Manrope) & [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
- **Renk Paleti:**
  - **Primary Navy:** `#142B45`
  - **Deep Navy:** `#0C1D30`
  - **Brand Blue:** `#2878C7`
  - **Light Blue:** `#EAF3FA`
  - **Background:** `#FFFFFF`
  - **Soft Background:** `#F6F7F8`
  - **Main Text:** `#202A35`
  - **Secondary Text:** `#737D87`
- **Logo:** Özel geometrik modüler küp monogramı + modern sans-serif wordmark (Açık, koyu arka planlar, kare ikon ve favicon SVG formatlarında oluşturulmuştur).

---

## 📂 Proje Yapısı

```
tomix/
├── index.html              # Premium ana sayfa (Hero, Avantajlar, Kategoriler, Öne Çıkanlar, Hikaye, Kampanya)
├── products.html           # Dinamik filtrelemeli ve sıralamalı ürün kataloğu
├── product-detail.html     # Galeri, zoom modalı, teknik özellikler ve benzer ürünler
├── favorites.html          # localStorage destekli favoriler sayfası
├── cart.html               # Dinamik sepet, kargo hesaplama, adet yönetimi ve demo sipariş
├── about.html              # Marka vizyonu, 3 temel değer ve kalite yaklaşımı
├── contact.html            # İletişim bilgileri, doğrulamalı demo form ve SSS akordiyonu
├── 404.html                # Marka uyumlu 404 hata sayfası
├── css/
│   ├── style.css           # Tasarım değişkenleri, reset, tipografi, header, footer, toast ve kartlar
│   ├── animations.css      # Keyframe animasyonları, scroll reveal ve mikro etkileşimler
│   ├── responsive.css      # 1440px, 1024px, 768px, 480px, 320px responsive kuralları
│   └── pages.css           # Sayfa bazlı özel gridler, filtre barları ve detay görünümleri
├── js/
│   ├── products.js         # 18 adet zengin ürün verisi, kategori tanımları ve yardımcı metotlar
│   ├── cart.js             # Sepet durumu, fiyat ve kargo hesaplama servisi (localStorage)
│   ├── favorites.js        # Favori ekleme/çıkarma ve senkronizasyon servisi (localStorage)
│   ├── interactions.js     # Toast bildirimleri, anlık arama overlay'i ve mobil çekmece menü
│   └── main.js             # Sayfa başlatıcıları, filtreleme, sepet ve galeri etkileşimleri
└── assets/
    ├── images/
    │   └── product-placeholder.svg
    ├── icons/
    └── logo/
        ├── tomix-logo.svg
        ├── tomix-logo-white.svg
        ├── tomix-icon.svg
        └── favicon.svg
```

---

## 🚀 Öne Çıkan Özellikler

1. **Sıfır Bağımlılık (Pure Vanilla):**
   - Yalnızca saf HTML5, CSS3 ve Vanilla JavaScript kullanılmıştır. Herhangi bir framework veya kütüphane gerektirmez.
2. **Canlı Arama Sistemi (Overlay Modal):**
   - Klavyeden `/` kısayoluyla veya başlıktaki arama butonundan açılan hızlı arama. Ürün adı, kategori ve açıklamalarda anında eşleşme.
3. **Çift Yönlü Sepet & Kargo Hesabı:**
   - 350 TL üzeri alışverişlerde ücretsiz kargo barı; dinamik adet artırma/azaltma, ürün çıkarma ve anlık fiyat hesaplama.
4. **Kalıcı Favoriler (localStorage):**
   - Ürün kartlarında ve detay sayfasında tek tıkla favori ekleme/çıkarma; başlıktaki sayaç ile tam senkronizasyon.
5. **Gelişmiş Filtreleme ve Sıralama:**
   - Kategori seçimi, canlı metin araması, fiyat aralığı kaydırıcısı ve 5 farklı sıralama kriteri (Öne Çıkanlar, Fiyat Artan/Azalan, Puan, İndirim Oranı).
6. **Tam Boy Görsel Büyütme (Zoom Modal):**
   - Ürün detay sayfasında yüksek çözünürlüklü fotoğrafları tam ekran inceleme imkanı.
7. **Mobil Uyumlu & Akıcı:**
   - Yumuşak geçişler, sticky cam efekti (glassmorphism) başlık, dokunmatik uyumlu drawer menü ve `prefers-reduced-motion` erişilebilirlik desteği.

---

## 💻 Yerel Çalıştırma & GitHub Pages

- **Yerel olarak açmak için:** Herhangi bir tarayıcıda doğrudan `index.html` dosyasını çift tıklayarak açabilirsiniz.
- **GitHub Pages için:** Depo ayarlarından Pages sekmesini seçip ana dalı (`main` veya `gh-pages`) hedef göstererek anında yayınlayabilirsiniz. Bağıl yollar (`./`) kullanıldığı için sorunsuz çalışır.

---

## ⚠️ Demo Bildirimi
Bu proje bir konsept vitrin ve frontend tasarımı çalışmasıdır. Online ödeme veya gerçek sipariş alma altyapısı içermez.
