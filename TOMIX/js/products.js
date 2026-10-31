/**
 * TOMIX - Premium E-Commerce Platform
 * Product Catalog Data & Helper Methods
 */

const TOMIX_CATEGORIES = [
  {
    id: "mutfak",
    slug: "mutfak",
    name: "Mutfak Ürünleri",
    title: "Mutfak Ürünleri",
    description: "Yemek hazırlığını ve kiler düzenini kolaylaştıran, gıdayla temasa %100 uygun BPA'sız pratik tasarımlar.",
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=1000&q=80",
    itemCount: 4,
    badge: "Çok Satanlar"
  },
  {
    id: "saklama-duzenleme",
    slug: "saklama-duzenleme",
    name: "Saklama ve Düzenleme",
    title: "Saklama ve Düzenleme",
    description: "Dolap, çekmece ve kiler alanlarınızı milimetrik değerlendiren istiflenebilir akıllı kutular ve organizerlar.",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80",
    itemCount: 4,
    badge: "Öne Çıkan"
  },
  {
    id: "banyo",
    slug: "banyo",
    name: "Banyo Ürünleri",
    title: "Banyo Ürünleri",
    description: "Neme ve suya tam dayanıklı, modern mat yüzeyli, banyonuza ferahlık ve düzen katan banyo aksesuarları.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
    itemCount: 3,
    badge: "Yeni Koleksiyon"
  },
  {
    id: "temizlik",
    slug: "temizlik",
    name: "Temizlik Ürünleri",
    title: "Temizlik Ürünleri",
    description: "Ergonomik gövde yapıları, hafifliği ve yüksek dayanımıyla temizlik sürecini zahmetsiz kılan yenilikçi araçlar.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80",
    itemCount: 3,
    badge: "Pratik Çözümler"
  },
  {
    id: "ev-yasam",
    slug: "ev-yasam",
    name: "Ev ve Yaşam",
    title: "Ev ve Yaşam",
    description: "Kablo karmaşasından atık ayrıştırmaya kadar evin her köşesinde dinginlik ve düzen sağlayan modern objeler.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
    itemCount: 3,
    badge: "Modern Yaşam"
  },
  {
    id: "bahce",
    slug: "bahce",
    name: "Bahçe Ürünleri",
    title: "Bahçe Ürünleri",
    description: "UV ışınlarına ve dış ortam koşullarına dayanıklı akıllı sulamalı saksılar ve ergonomik bahçe aksesuarları.",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1000&q=80",
    itemCount: 3,
    badge: "Dış Mekan"
  }
];

const TOMIX_PRODUCTS = [
  // MUTFAK
  {
    id: "tmx-101",
    name: "Modüler Akrilik Kiler Saklama Kabı Seti (6 Parça)",
    category: "Mutfak Ürünleri",
    categorySlug: "mutfak",
    price: 489.90,
    oldPrice: 599.90,
    discount: "-18%",
    badge: "Çok Satan",
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 124,
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1526434426615-1abe81efcb0b?auto=format&fit=crop&w=1000&q=80"
    ],
    shortDescription: "Kristal berraklığında akrilik gövde, silikon hava geçirmez kilit sistemi ve üst üste tam kenetlenen modüler yapı.",
    fullDescription: "TOMIX Modüler Akrilik Kiler Saklama Kabı Seti, mutfak kilerinizde ve dolaplarınızda maksimum alan tasarrufu ve hijyen sağlar. Yüksek kaliteli BPA içermeyen SAN polimerden üretilen kaplar, cam netliğinde şeffaflık sunarken kırılmaya karşı üstün direnç gösterir. Silikon contalı vakum kapakları hava ve nem girişini engelleyerek kuru bakliyat, un, kuruyemiş ve makarnalarınızın tazeliğini haftalarca korur.",
    specs: {
      "Malzeme": "BPA Free Kristal SAN Akrilik & Gıdaya Uygun Silikon",
      "Kapasite / İçerik": "2x 1.8L, 2x 1.2L, 2x 0.6L (Toplam 6 Parça)",
      "Temizlik": "Bulaşık makinesinde yıkanabilir (Kapaklar elde tavsiye edilir)",
      "Sıcaklık Dayanımı": "-20°C ile +85°C arası",
      "Kilit Mekanizması": "Tek dokunuşla vakumlayan mandallı kapak"
    },
    dimensions: "16x11x24 cm (Büyük), 16x11x17 cm (Orta), 16x11x9 cm (Küçük)",
    stock: "Stokta Var (Demo Veri)"
  },
  {
    id: "tmx-102",
    name: "Air-Tight Vakumlu Kuru Gıda Dispenseri 2.5L",
    category: "Mutfak Ürünleri",
    categorySlug: "mutfak",
    price: 289.00,
    oldPrice: 340.00,
    discount: "-15%",
    badge: "Tavsiye",
    isFeatured: true,
    rating: 4.8,
    reviewsCount: 88,
    image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=1000&q=80"
    ],
    shortDescription: "Ergonomik dökme ağızlıklı ve ölçü kapaklı, tek elle döküm sağlayan premium gıda saklama kabı.",
    fullDescription: "Kornfleks, yulaf, pirinç ve granolalarınız için tasarlanan TOMIX Dispenser, dökme ağzı sayesinde taşma ve dökülme yapmadan kontrollü kullanım sağlar. Üzerindeki hassas ml/gram ölçek çizgileri ile porsiyon takibini kolaylaştırır.",
    specs: {
      "Malzeme": "Gıda Sınıfı Polipropilen (PP5)",
      "Kapasite": "2500 ml",
      "Özellik": "Entegre ölçü kabı ve sızdırmaz conta",
      "BPA Durumu": "%100 BPA Free"
    },
    dimensions: "21 x 10.5 x 28 cm",
    stock: "Stokta Var (Demo Veri)"
  },
  {
    id: "tmx-103",
    name: "360° Döner Tablalı Kaymaz Tabanlı Baharatlık Standı",
    category: "Mutfak Ürünleri",
    categorySlug: "mutfak",
    price: 219.50,
    oldPrice: null,
    discount: null,
    badge: "Yeni",
    isFeatured: false,
    rating: 4.7,
    reviewsCount: 52,
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=1000&q=80"
    ],
    shortDescription: "Paslanmaz çelik bilyeli yatak sistemiyle pürüzsüz dönen, derin kenarlıklı baharat ve sos düzenleyici.",
    fullDescription: "Derin dolap diplerinde kaybolan şişelere ve kavanozlara veda edin. TOMIX 360 döner tabla, akıcı çelik bilyeleri sayesinde en dolu halde bile pürüzsüzce döner. Yüksek kenar profili şişelerin devrilmesini önler.",
    specs: {
      "Malzeme": "Darbe Dayanımlı ABS & Kaymaz TPR Taban",
      "Dönüş Mekanizması": "Paslanmaz Çelik Bilyeli Rulman",
      "Çap": "26 cm",
      "Renk": "Kırık Beyaz / Soft Gri Detay"
    },
    dimensions: "Çap: 26 cm, Yükseklik: 7.5 cm",
    stock: "Stokta Var (Demo Veri)"
  },
  {
    id: "tmx-104",
    name: "Kompakt Şeffaf Sebze-Meyve Tazelik Kutusu (Süzgeçli)",
    category: "Mutfak Ürünleri",
    categorySlug: "mutfak",
    price: 179.90,
    oldPrice: 220.00,
    discount: "-18%",
    badge: "Tazelik Koruması",
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 95,
    image: "https://images.unsplash.com/photo-1526434426615-1abe81efcb0b?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1526434426615-1abe81efcb0b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=1000&q=80"
    ],
    shortDescription: "Çıkarılabilir alt ızgaralı drenaj haznesiyle yeşillik ve meyvelerin çürümesini önleyen buzdolabı kutusu.",
    fullDescription: "Yıkanan sebze ve yeşilliklerin dipte biriken suyla temas etmesini engelleyen yükseltilmiş drenaj ızgarası, buzdolabında gıdaların 2 kat daha uzun süre taze ve gevrek kalmasını sağlar. Ayarlanabilir hava menfezi nem dengesini korur.",
    specs: {
      "Malzeme": "Kristal PET & Antibakteriyel PP",
      "Hacim": "3.2 Litre",
      "Özellik": "Drenajlı iç sepet ve ayarlanabilir havalandırma kapağı"
    },
    dimensions: "28 x 16 x 12.5 cm",
    stock: "Stokta Var (Demo Veri)"
  },

  // SAKLAMA VE DÜZENLEME
  {
    id: "tmx-201",
    name: "Modüler İstiflenebilir Şeffaf Çekmece Organizeri (8 Parça)",
    category: "Saklama ve Düzenleme",
    categorySlug: "saklama-duzenleme",
    price: 329.90,
    oldPrice: 389.90,
    discount: "-15%",
    badge: "Çok Satan",
    isFeatured: true,
    rating: 5.0,
    reviewsCount: 210,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80"
    ],
    shortDescription: "Çekmecenizin ölçüsüne göre serbestçe dizilebilen 3 farklı ebatta 8 adet dayanıklı düzenleme tepsisi.",
    fullDescription: "Makyaj malzemelerinden çalışma masası gereçlerine, çatal bıçaktan alet çantasına kadar her çekmecede milimetrik intizam. Silikon kaydırmaz ayakları sayesinde çekmece açılıp kapandığında kutular kaymaz.",
    specs: {
      "Malzeme": "Dirençli Akrilik Polimer",
      "Set İçeriği": "2 Adet Büyük (24x16cm), 3 Adet Orta (16x12cm), 3 Adet Küçük (12x8cm)",
      "Ekstra": "16 adet kendinden yapışkanlı kaymaz silikon tampon"
    },
    dimensions: "Yükseklik: 5 cm (Tüm standart çekmecelere tam uyumlu)",
    stock: "Stokta Var (Demo Veri)"
  },
  {
    id: "tmx-202",
    name: "Kilitli ve Gizli Tekerlekli Yatak Altı Saklama Sandığı 50L",
    category: "Saklama ve Düzenleme",
    categorySlug: "saklama-duzenleme",
    price: 499.00,
    oldPrice: 590.00,
    discount: "-15%",
    badge: "Büyük Kapasite",
    isFeatured: true,
    rating: 4.8,
    reviewsCount: 76,
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80"
    ],
    shortDescription: "Yorgan, yastık ve mevsimlik kıyafetler için alçak profilli, iki yönden açılır kapaklı ve tekerlekli sandık.",
    fullDescription: "Karyola veya baza altına kusursuz sığan 17 cm yükseklik profili. İki yana açılan menteşeli kapak tasarımı sayesinde kutuyu tamamen dışarı çekmeden aradığınız ürünü kolayca almanızı sağlar. Gizli zemin tekerlekleri parkeyi çizmeden kayar.",
    specs: {
      "Malzeme": "Geri Dönüştürülebilir Kalınlaştırılmış Polipropilen",
      "Hacim": "50 Litre",
      "Tekerlek": "4 adet entegre sessiz tekerlek",
      "Kapak": "Çift yönlü kilitli açılır kapak"
    },
    dimensions: "80 x 48 x 17 cm",
    stock: "Stokta Var (Demo Veri)"
  },
  {
    id: "tmx-203",
    name: "Katlanabilir Kumaş Dokulu Plastik Gardırop Kutusu (3'lü)",
    category: "Saklama ve Düzenleme",
    categorySlug: "saklama-duzenleme",
    price: 369.00,
    oldPrice: null,
    discount: null,
    badge: "Pratik",
    isFeatured: false,
    rating: 4.7,
    reviewsCount: 43,
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=80"
    ],
    shortDescription: "Kullanılmadığında düzleşerek yer kaplamayan, rijit iç destekli şık raf organizasyon kutuları.",
    fullDescription: "Dolap içi dağınıklığını ortadan kaldıran şık dokuma desenli plastik kutular. Nem geçirmez ve kolay silinebilir yüzeyi ile kumaş kutuların lekelenme sorununu çözer.",
    specs: {
      "Malzeme": "Polyester Doku Presli Polipropilen Gövde",
      "Set İçeriği": "3 Adet Aynı Boy Kutu",
      "Kulp": "Metal perçinli güçlendirilmiş taşıma kulpu"
    },
    dimensions: "33 x 33 x 33 cm",
    stock: "Stokta Var (Demo Veri)"
  },
  {
    id: "tmx-204",
    name: "Ayarlanabilir Bölmeli Akıllı Aksesuar & Donanım Kutusu",
    category: "Saklama ve Düzenleme",
    categorySlug: "saklama-duzenleme",
    price: 199.90,
    oldPrice: 249.90,
    discount: "-20%",
    badge: "Fırsat",
    isFeatured: false,
    rating: 4.8,
    reviewsCount: 67,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80"
    ],
    shortDescription: "Çıkarılabilir ara bölmeler sayesinde bölme büyüklüğünü ihtiyacınıza göre ayarlayabileceğiniz kilitli kutu.",
    fullDescription: "Vida, dübel, dikiş gereçleri, takı veya hobi malzemeleri için ideal. Kilit mandalı düşmelerde kapağın açılmasını engeller, şeffaf üst yüzey içindekileri kapağı açmadan gösterir.",
    specs: {
      "Malzeme": "Darbe Emici Kopolimer",
      "Bölme Sayısı": "18 adete kadar ayarlanabilir hücre",
      "Kilit": "Çift tırnaklı emniyet mandalı"
    },
    dimensions: "27.5 x 18 x 4.5 cm",
    stock: "Stokta Var (Demo Veri)"
  },

  // BANYO ÜRÜNLERİ
  {
    id: "tmx-301",
    name: "Nordic Serisi Mat Dokulu Banyo Seti (4 Parça)",
    category: "Banyo Ürünleri",
    categorySlug: "banyo",
    price: 449.00,
    oldPrice: 520.00,
    discount: "-14%",
    badge: "Trend Tasarım",
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 165,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80"
    ],
    shortDescription: "Pürüzsüz soft-touch mat yüzeyli; sıvı sabunluk, diş fırçalık, katı sabunluk ve banyo çöp kovası seti.",
    fullDescription: "Seramik estetiğini kırılmaz ve hafif polimer teknolojisiyle birleştiren TOMIX Nordic Banyo Seti, parmak izi bırakmayan kadife dokulu kaplamaya sahiptir. Su lekesi tutmaz, nemli ortamlarda rengini ve zarafetini yıllarca korur.",
    specs: {
      "Malzeme": "Soft-Touch Yüzeyli Ağırlaştırılmış ABS Polimer",
      "İçerik": "Sıvı Sabunluk (400ml), Diş Fırçalık, Tahliyeli Sabunluk, 5L Basmalı Çöp Kovası",
      "Pompa": "Paslanmaz yay mekanizmalı kromajlı akıllı dozaj pompası"
    },
    dimensions: "Sabunluk: 7.5x17cm | Kova: 19x25cm",
    stock: "Stokta Var (Demo Veri)"
  },
  {
    id: "tmx-302",
    name: "Su Tahliyeli Vakumlu Köşe Duş Rafı ve Şampuanlık",
    category: "Banyo Ürünleri",
    categorySlug: "banyo",
    price: 249.00,
    oldPrice: null,
    discount: null,
    badge: "Matkapsız Montaj",
    isFeatured: false,
    rating: 4.8,
    reviewsCount: 89,
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80"
    ],
    shortDescription: "Fayansı delmeden güçlü vakumla monte edilen, 10 kg taşıma kapasiteli su tahliyeli köşe ünitesi.",
    fullDescription: "Özel patentli hava tahliye kilidi sayesinde düz seramik, mermer veya cam yüzeylere delme işlemi gerektirmeden 3 saniyede kilitlenir. Tabanındaki drenaj kanalları su birikintisini ve küflenmeyi tamamen önler.",
    specs: {
      "Malzeme": "Korozyona Dirençli Güçlendirilmiş ABS",
      "Taşıma Kapasitesi": "10 kg",
      "Montaj": "Delme gerektirmeyen silikon vakum taban"
    },
    dimensions: "24 x 24 x 6 cm",
    stock: "Stokta Var (Demo Veri)"
  },
  {
    id: "tmx-303",
    name: "Antibakteriyel Havalandırmalı Diş Fırçalık & Macun Standı",
    category: "Banyo Ürünleri",
    categorySlug: "banyo",
    price: 159.00,
    oldPrice: 189.00,
    discount: "-16%",
    badge: "Hijyenik",
    isFeatured: false,
    rating: 4.7,
    reviewsCount: 38,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80"
    ],
    shortDescription: "Kolayca ayrılıp yıkanabilen 3 parçalı modüler gövde ve hızlı kuruma sağlayan havalandırma kanalları.",
    fullDescription: "Klasik diş fırçalıklarının dibinde oluşan su ve bakteri birikimini önlemek için tasarlanan sökülebilir ızgara tabanı sayesinde saniyeler içinde su altında tertemiz olur.",
    specs: {
      "Malzeme": "Bakteri Üretmeyen Polipropilen",
      "Bölmeler": "4 diş fırçası + 1 elektrikli fırça/macun yuvası",
      "Yıkama": "Tüm parçalar bulaşık makinesinde yıkanabilir"
    },
    dimensions: "18 x 9 x 11 cm",
    stock: "Stokta Var (Demo Veri)"
  },

  // TEMİZLİK ÜRÜNLERİ
  {
    id: "tmx-401",
    name: "Çift Hazneli Su Tahliyeli Döner Başlıklı Mop Seti",
    category: "Temizlik Ürünleri",
    categorySlug: "temizlik",
    price: 649.00,
    oldPrice: 799.00,
    discount: "-19%",
    badge: "Çok Satan",
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 312,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80"
    ],
    shortDescription: "Temiz ve kirli suyu birbirinden ayıran çift hazneli kova, paslanmaz çelik sap ve 2 adet mikrofiber bez.",
    fullDescription: "Gelişmiş santrifüj mekanizması sayesinde bezi sıkarken elinizi suya değdirmenize gerek kalmaz. Kirli su ayrı bir haznede toplanarak zeminlerinizin her zaman pırıl pırıl temiz suyla silinmesini sağlar. 360° dönebilen ince başlık koltuk ve dolap altlarına rahatça girer.",
    specs: {
      "Malzeme": "Darbe Dayanımlı Polipropilen & Paslanmaz Çelik Sap",
      "Kova Hacmi": "Toplam 9 Litre (Çift Bölme)",
      "Sap Uzunluğu": "132 cm (Teleskopik)",
      "Kutu İçeriği": "1x Kova, 1x Çelik Sap, 2x Yoğun Mikrofiber Paspas"
    },
    dimensions: "Kova: 39 x 23 x 20 cm",
    stock: "Stokta Var (Demo Veri)"
  },
  {
    id: "tmx-402",
    name: "Teleskopik Saplı Bükülebilir Mikrofiber Toz Alma Fırçası",
    category: "Temizlik Ürünleri",
    categorySlug: "temizlik",
    price: 189.90,
    oldPrice: 229.90,
    discount: "-17%",
    badge: "Ergonomik",
    isFeatured: false,
    rating: 4.8,
    reviewsCount: 71,
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1000&q=80"
    ],
    shortDescription: "2.4 metreye kadar uzayan alüminyum gövde ve 90 derece bükülebilen elektrostatik toz toplayıcı başlık.",
    fullDescription: "Tavan vantilatörleri, klima filtreleri, avizeler ve gardırop üstleri gibi ulaşılamayan yerleri merdiven kullanmadan güvenle temizleyin. Statik elektrik yükü sayesinde tozu etrafa saçmadan mıknatıs gibi çeker.",
    specs: {
      "Gövde": "Hafifletilmiş Alüminyum & ABS Kilitler",
      "Uzantı": "80 cm'den 240 cm'ye teleskopik ayar",
      "Başlık": "Yıkanabilir bükülebilir nano fiber kumaş"
    },
    dimensions: "Kapalı: 80 cm, Açık: 240 cm",
    stock: "Stokta Var (Demo Veri)"
  },
  {
    id: "tmx-403",
    name: "Sprey Hazneli Silikon Uçlu Pencere ve Cam Çekpası",
    category: "Temizlik Ürünleri",
    categorySlug: "temizlik",
    price: 149.00,
    oldPrice: null,
    discount: null,
    badge: "Pratik",
    isFeatured: false,
    rating: 4.6,
    reviewsCount: 49,
    image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=80"
    ],
    shortDescription: "Dahili 250ml deterjan püskürtme haznesi ve iz bırakmayan esnek termoplastik silikon sıyırıcı kanat.",
    fullDescription: "Ayrı sprey şişesi taşımadan tek elle cam, ayna ve duşakabin temizliği. İnce atomize sprey ucu deterjanı homojen dağıtır, esnek sıyırıcı bıçak damla ve iz bırakmadan yüzeyi kurular.",
    specs: {
      "Malzeme": "Polimer Gövde & Sıvı Silikon Bıçak",
      "Sprey Haznesi": "250 ml",
      "Bıçak Genişliği": "28 cm"
    },
    dimensions: "28 x 26 x 5 cm",
    stock: "Stokta Var (Demo Veri)"
  },

  // EV VE YAŞAM
  {
    id: "tmx-501",
    name: "3 Bölmeli Pedallı Atık Ayrıştırma Kutusu 45L",
    category: "Ev ve Yaşam",
    categorySlug: "ev-yasam",
    price: 890.00,
    oldPrice: 1050.00,
    discount: "-15%",
    badge: "Çevre Dostu",
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 142,
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1000&q=80"
    ],
    shortDescription: "Plastik, cam/metal ve evsel atıklar için renk kodlu iç kovalara ve amortisörlü sessiz kapağa sahip modern kutu.",
    fullDescription: "Sürdürülebilir bir yaşam alanı için evde geri dönüşümü kolaylaştırın. Çelik pedal mekanizması ve yavaş kapanan hidrolik kapak sistemi koku sızdırmaz. Çıkarılabilir 3 adet 15 litrelik kova torba değişimini zahmetsiz kılar.",
    specs: {
      "Malzeme": "Parmak İzi Tutmaz Dokulu Mat Polimer",
      "Toplam Hacim": "45 Litre (3x 15 Litre Bağımsız İç Kova)",
      "Kapak": "Sessiz yavaş kapanan Soft-Close sistem",
      "Pedal": "100.000 basıma dayanıklı güçlendirilmiş mekanizma"
    },
    dimensions: "60 x 32 x 48 cm",
    stock: "Stokta Var (Demo Veri)"
  },
  {
    id: "tmx-502",
    name: "Gizli Bölmeli Kablo Düzenleyici & Ahşap Kapaklı Şarj Kutusu",
    category: "Ev ve Yaşam",
    categorySlug: "ev-yasam",
    price: 269.00,
    oldPrice: 320.00,
    discount: "-16%",
    badge: "Favori",
    isFeatured: true,
    rating: 4.8,
    reviewsCount: 98,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80"
    ],
    shortDescription: "Uzatma prizleri ve adaptörleri şık bir şekilde gizleyen, yangına dayanıklı havalandırmalı kablo kutusu.",
    fullDescription: "Televizyon ünitesi veya çalışma masası arkasındaki kablo yığınını ortadan kaldırır. Isı tahliyesi için özel tasarlanan alt ızgaraları cihazların ısınmasını önlerken çocukların ve evcil hayvanların elektrik prizlerine temasını engeller.",
    specs: {
      "Malzeme": "Alev Geciktirici V0 Standart Polimer & Doğal Bambu Dokulu Kapak",
      "Çıkışlar": "Her iki yanda ve kapak üzerinde kablo geçiş yuvaları",
      "Uyum": "6'lı standart uzatma prizlerine tam uyumlu"
    },
    dimensions: "36 x 14 x 13 cm",
    stock: "Stokta Var (Demo Veri)"
  },
  {
    id: "tmx-503",
    name: "Minimalist Masaüstü Evrak & Tablet Standı Düzenleyici",
    category: "Ev ve Yaşam",
    categorySlug: "ev-yasam",
    price: 189.00,
    oldPrice: null,
    discount: null,
    badge: "Çalışma Alanı",
    isFeatured: false,
    rating: 4.7,
    reviewsCount: 36,
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80"
    ],
    shortDescription: "A4 evraklar, defterler ve tabletler için dikey mimari hatlara sahip estetik masaüstü düzenleyici.",
    fullDescription: "Çalışma masanızda ferah bir ortam yaratın. Ağırlık merkezi dengelenmiş tabanı sayesinde ağır ciltli kitap ve tabletleri bile devrilmeden dik tutar.",
    specs: {
      "Malzeme": "Yüksek Yoğunluklu Darbe Dayanımlı Polimer",
      "Bölme Sayısı": "4 kademeli dikey yuva",
      "Renk": "Derin Lacivert / Mat Antrasit"
    },
    dimensions: "26 x 21 x 18 cm",
    stock: "Stokta Var (Demo Veri)"
  },

  // BAHÇE ÜRÜNLERİ
  {
    id: "tmx-601",
    name: "Kendinden Su Hazneli Akıllı Drenajlı Saksı 32cm",
    category: "Bahçe Ürünleri",
    categorySlug: "bahce",
    price: 389.00,
    oldPrice: 460.00,
    discount: "-15%",
    badge: "Akıllı Tasarım",
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 118,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1000&q=80"
    ],
    shortDescription: "Bitkilerin köklerinden ihtiyaç duyduğu kadar su çekmesini sağlayan göstergeli su rezervuarlı saksı.",
    fullDescription: "Tatile gittiğinizde bitkilerinizin kurumasını engelleyin. Entegre su seviye şamandırası ne zaman su eklemeniz gerektiğini gösterir. Kök çürümesini engelleyen drenaj ızgarası ile salon ve balkon bitkileri için ideal ortam sunar.",
    specs: {
      "Malzeme": "UV Stabilizatörlü Dış Mekan Polipropileni (Güneşte Solmaz)",
      "Rezervuar Süresi": "3 haftaya kadar susuzluk koruması",
      "Çap / Hacim": "32 cm Çap / 14 Litre Toprak Hacmi"
    },
    dimensions: "Çap: 32 cm, Yükseklik: 30 cm",
    stock: "Stokta Var (Demo Veri)"
  },
  {
    id: "tmx-602",
    name: "Katlanabilir ve Yıkanabilir Bahçe Hasat Sepeti 35L",
    category: "Bahçe Ürünleri",
    categorySlug: "bahce",
    price: 229.00,
    oldPrice: 279.00,
    discount: "-18%",
    badge: "Çok Amaçlı",
    isFeatured: false,
    rating: 4.7,
    reviewsCount: 54,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=80"
    ],
    shortDescription: "Esnek gövdesiyle ezilme yapmayan, suyla kolayca yıkanabilen ergonomik çift saplı bahçe sepeti.",
    fullDescription: "Bahçede yaprak ve dal toplamadan çamaşır taşımaya, çocuk oyuncaklarından piknik malzemelerine kadar sayısız kullanım alanı olan ultra esnek ve kırılmaz kova-sepet.",
    specs: {
      "Malzeme": "Esnek Termoplastik Elastomer (TPE) & Polietilen",
      "Hacim": "35 Litre",
      "Dayanım": "50 kg yükleme testinden geçmiş güçlendirilmiş kulplar"
    },
    dimensions: "45 x 40 x 35 cm",
    stock: "Stokta Var (Demo Veri)"
  },
  {
    id: "tmx-603",
    name: "Ergonomik Ağızlıklı Hassas Bitki Sulama Kabı 2 Litre",
    category: "Bahçe Ürünleri",
    categorySlug: "bahce",
    price: 179.00,
    oldPrice: null,
    discount: null,
    badge: "Tasarım Ödüllü",
    isFeatured: false,
    rating: 4.8,
    reviewsCount: 62,
    image: "https://images.unsplash.com/photo-1599818816937-2930263f3387?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1599818816937-2930263f3387?auto=format&fit=crop&w=1000&q=80"
    ],
    shortDescription: "Uzun ve ince paslanmaz döküm ucuyla doğrudan bitki köküne su aktaran dengeli estetik sulak.",
    fullDescription: "Geniş dolum ağzı sayesinde musluk altında kolayca dolar. İnce dökme borusu suyun yapraklara sıçramadan tam kök bölgesine kontrollü olarak akmasını sağlar.",
    specs: {
      "Malzeme": "Gıda Sınıfı Parlak Polimer & Paslanmaz Metal Uç",
      "Kapasite": "2000 ml",
      "Kulp": "Dengeli ağırlık dağılımı sağlayan dairesel ergonomik sap"
    },
    dimensions: "35 x 14 x 22 cm",
    stock: "Stokta Var (Demo Veri)"
  }
];

// Helper Functions
function getProducts() {
  return TOMIX_PRODUCTS;
}

function getProductById(id) {
  if (!id) return null;
  return TOMIX_PRODUCTS.find(p => p.id === id) || null;
}

function getFeaturedProducts() {
  return TOMIX_PRODUCTS.filter(p => p.isFeatured);
}

function getProductsByCategory(categorySlug) {
  if (!categorySlug || categorySlug === "all") return TOMIX_PRODUCTS;
  return TOMIX_PRODUCTS.filter(p => p.categorySlug === categorySlug);
}

function getCategories() {
  return TOMIX_CATEGORIES;
}

function formatPrice(amount) {
  if (typeof amount !== "number") amount = parseFloat(amount) || 0;
  return amount.toLocaleString("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }) + " TL";
}

// Fallback image helper to prevent broken images
function handleImageError(imgElement, productName) {
  imgElement.onerror = null;
  imgElement.src = "assets/images/product-placeholder.svg";
}
