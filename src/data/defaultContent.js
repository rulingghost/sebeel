export const defaultContent = {
  general: {
    siteName: "SEEBEL",
    siteTitle: "Seebel Yazılım | Yeni Nesil Mobil ve Web Teknolojileri",
    logoText: "SEEBEL",
    logoDot: ".",
    logoImage: "",
    tagLine: "Yeni Nesil Mobil & Web Uygulama Geliştirme",
    adminPin: "1234",
    primaryColor: "#3b82f6",
    announcement: {
      enabled: true,
      text: "🚀 Web3, AI ve Canlı Yayın Altyapılarında %100 Yerli & Global Çözümler!",
      buttonText: "Projelerimizi İnceleyin",
      buttonUrl: "/projelerimiz"
    },
    seo: {
      metaDescription: "Seebel Yazılım - Canlı yayın, Kripto, Fintek, Web3 ve Mobil Oyun odaklı yeni nesil yazılım şirketi.",
      metaKeywords: "mobil uygulama, yazılım geliştirme, flutter, react native, web3, canlı yayın",
      ogImage: "/images/live_stream_app_1784991404839.png"
    }
  },
  
  navigation: [
    {
      id: "nav-home",
      label: "Ana Sayfa",
      path: "/",
      isDropdown: false,
      children: []
    },
    {
      id: "nav-corporate",
      label: "Kurumsal",
      path: "/hakkimizda",
      isDropdown: true,
      children: [
        { id: "sub-about", label: "Hakkımızda", path: "/hakkimizda" },
        { id: "sub-team", label: "Ekibimiz", path: "/ekibimiz" },
        { id: "sub-careers", label: "Kariyer", path: "/kariyer" }
      ]
    },
    {
      id: "nav-services",
      label: "Hizmetlerimiz",
      path: "/hizmetlerimiz",
      isDropdown: true,
      children: [
        { id: "sub-live", label: "Canlı Yayın Platformları", path: "/hizmetler/canli-yayin" },
        { id: "sub-crypto", label: "Kripto ve Finans", path: "/hizmetler/kripto" },
        { id: "sub-game", label: "Mobil Oyunlar", path: "/hizmetler/oyun" },
        { id: "sub-voice", label: "Sesli Sohbet Odaları", path: "/hizmetler/sesli-sohbet" },
        { id: "sub-chat", label: "Modern Chat Uygulamaları", path: "/hizmetler/chat" }
      ]
    },
    {
      id: "nav-projects",
      label: "Projelerimiz",
      path: "/projelerimiz",
      isDropdown: false,
      children: []
    },
    {
      id: "nav-contact",
      label: "İletişim",
      path: "/iletisim",
      isDropdown: false,
      children: []
    }
  ],

  ctaButton: {
    label: "İletişime Geç",
    path: "/iletisim"
  },

  hero: {
    slides: [
      {
        id: "slide-1",
        badge: "Yenilikçi Çözümler",
        title: "Dijital Dönüşümün Zirvesi",
        subtitle: "Kullanıcı deneyimini merkeze alan, yüksek performanslı ve premium mobil uygulamalarla markanızı milyonlara ulaştırın.",
        primaryButton: "Projenizi Başlatın",
        primaryButtonUrl: "#services",
        secondaryButton: "Referanslarımız",
        secondaryButtonUrl: "#contact",
        icon: "Smartphone",
        image: "",
        theme: "blue",
        stats: [
          { label: "Kullanıcı Odaklı", value: "UX/UI Tasarım" },
          { label: "Genişletilebilir", value: "Modern Altyapı" }
        ],
        badge1Text: "Özel Çözümler",
        badge2Text: "App Store Ready"
      },
      {
        id: "slide-2",
        badge: "Fintech & Web3",
        title: "Finansın Geleceği Cebinizde",
        subtitle: "Bankacılık standartlarında güvenlik sunan kripto para borsaları ve yeni nesil finansal mobil uygulamalar geliştiriyoruz.",
        primaryButton: "Finansal Çözümler",
        primaryButtonUrl: "#services",
        secondaryButton: "Detaylı Bilgi",
        secondaryButtonUrl: "#contact",
        icon: "Shield",
        image: "",
        theme: "gold",
        stats: [
          { label: "Endüstri Standardı", value: "Üst Düzey Güvenlik" },
          { label: "Gecikmesiz", value: "Gerçek Zamanlı Veri" }
        ],
        badge1Text: "Cold Storage",
        badge2Text: "Bank-Grade Security"
      },
      {
        id: "slide-3",
        badge: "Sosyal & Medya",
        title: "Kesintisiz İletişim Kusursuz Yayın",
        subtitle: "Binlerce anlık kullanıcıyı destekleyen, düşük gecikmeli canlı yayın platformları ve sesli sohbet odaları inşa ediyoruz.",
        primaryButton: "Yayın Teknolojileri",
        primaryButtonUrl: "#services",
        secondaryButton: "Örnekleri İncele",
        secondaryButtonUrl: "#contact",
        icon: "Radio",
        image: "",
        theme: "rose",
        stats: [
          { label: "%99.9 Uptime", value: "Kesintisiz Bağlantı" },
          { label: "Yüksek Kapasite", value: "Eşzamanlı Kullanıcı" }
        ],
        badge1Text: "Low-Latency",
        badge2Text: "WebRTC Engine"
      }
    ]
  },

  about: {
    badge: "Neden Seebel Yazılım?",
    title: "Neden",
    titleHighlight: "Seebel Yazılım?",
    description: "Biz sadece kod yazmıyoruz, dijital dünyada kalıcı izler bırakan, kullanıcıları kendine çeken deneyimler inşa ediyoruz. Yüksek performans, güvenlik ve göz alıcı tasarımlar DNA'mızda var.",
    features: [
      {
        id: "af-1",
        icon: "ShieldCheck",
        title: "Üst Düzey Güvenlik",
        description: "Kripto ve sohbet uygulamalarında endüstri standartlarında şifreleme ve veri güvenliği sağlıyoruz."
      },
      {
        id: "af-2",
        icon: "Zap",
        title: "Yüksek Performans",
        description: "Milyonlarca kullanıcıya aynı anda hizmet verebilen optimize edilmiş, gecikmesiz altyapılar kuruyoruz."
      },
      {
        id: "af-3",
        icon: "Globe",
        title: "Global Standartlar",
        description: "Sadece yerel değil, küresel pazarda rekabet edebilecek kalitede, çok dilli ve modern arayüzler tasarlıyoruz."
      }
    ],
    stats: [
      { id: "stat-1", value: "1M+", label: "Aktif Kullanıcı Kapasitesi" },
      { id: "stat-2", value: "99.9%", label: "Uptime Garantisi" }
    ],
    techStack: ["React", "Node.js", "WebRTC", "Solidity"]
  },

  aboutUsPage: {
    badge: "Biz Kimiz?",
    title: "Teknolojiyi Sanata",
    titleHighlight: "Dönüştürüyoruz",
    subtitle: "Seebel Yazılım olarak, mobil teknoloji dünyasında sıradanlığı reddediyor; yüz binlerce kullanıcının aynı anda sorunsuz deneyim yaşadığı, yüksek performanslı ve premium uygulamalar geliştiriyoruz.",
    vision: {
      title: "Vizyonumuz",
      description: "Türkiye'den çıkan ve global arenada milyonlarca aktif kullanıcıya hizmet veren, kendi kategorisinde dünya lideri mobil uygulama projelerinin mimarı olmak. Sadece yazılım değil, bir ekosistem yaratmak."
    },
    mission: {
      title: "Misyonumuz",
      description: "Müşterilerimizin fikirlerini, uçtan uca şifrelenmiş güvenlik altyapıları, düşük gecikmeli canlı yayın teknolojileri ve blockchain inovasyonları ile gerçeğe dönüştürmek; onlara rekabetçi avantaj sağlamak."
    },
    stats: [
      { id: "aus-1", value: "50+", label: "Başarılı Proje" },
      { id: "aus-2", value: "10M+", label: "Aktif Kullanıcı" },
      { id: "aus-3", value: "12", label: "Ülkeye İhracat" },
      { id: "aus-4", value: "%99.9", label: "Sunucu Uptime" }
    ],
    cultureTitle: "Çalışma Kültürümüz",
    cultureSubtitle: "Sürekli öğrenen, yenilikleri kovalayan ve kod kalitesinden asla ödün vermeyen bir ekibiz.",
    culture: [
      {
        id: "cult-1",
        icon: "Code",
        title: "Temiz Kod (Clean Code)",
        description: "Sürdürülebilir ve ölçeklenebilir yazılım mimarileri inşa ediyoruz."
      },
      {
        id: "cult-2",
        icon: "Users",
        title: "Çevik (Agile) Yönetim",
        description: "Hızlı iterasyonlar ile müşteri geri bildirimlerini anında ürüne yansıtıyoruz."
      }
    ]
  },

  services: {
    sectionTitle: "Uzmanlık",
    sectionTitleHighlight: "Alanlarımız",
    sectionSubtitle: "Sektördeki en zorlu ve rekabetçi alanlarda, küresel standartlarda mobil ürünler geliştiriyoruz.",
    items: [
      {
        id: "srv-1",
        title: "Canlı Yayın Platformları",
        description: "Yüksek çözünürlüklü, düşük gecikmeli, binlerce eşzamanlı kullanıcıyı destekleyen premium canlı yayın uygulamaları.",
        icon: "Play",
        image: "/images/live_stream_app_1784991404839.png",
        color: "#ec4899",
        path: "/hizmetler/canli-yayin"
      },
      {
        id: "srv-2",
        title: "Kripto ve Finans",
        description: "Güvenli, hızlı ve şık arayüzlü kripto para alım-satım ve takip uygulamaları.",
        icon: "TrendingUp",
        image: "/images/crypto_app_1784991420700.png",
        color: "#f59e0b",
        path: "/hizmetler/kripto"
      },
      {
        id: "srv-3",
        title: "Mobil Oyunlar",
        description: "Sürükleyici grafikler ve akıcı oynanış sunan etkileşimli mobil oyun projeleri.",
        icon: "Gamepad2",
        image: "/images/game_app_1784991440781.png",
        color: "#8b5cf6",
        path: "/hizmetler/oyun"
      },
      {
        id: "srv-4",
        title: "Sesli Sohbet Odaları",
        description: "Net ses kalitesi ve moderasyon araçlarıyla donatılmış topluluk odaklı sesli sohbet uygulamaları.",
        icon: "Mic",
        image: "/images/voice_chat_app_1784991462257.png",
        color: "#ef4444",
        path: "/hizmetler/sesli-sohbet"
      },
      {
        id: "srv-5",
        title: "Modern Chat Uygulamaları",
        description: "Uçtan uca şifreli, anlık mesajlaşma ve dosya paylaşımını destekleyen modern sohbet çözümleri.",
        icon: "MessageSquare",
        image: "/images/chat_app_1784991472725.png",
        color: "#10b981",
        path: "/hizmetler/chat"
      }
    ]
  },

  projects: {
    sectionTitle: "Tamamlanan",
    sectionTitleHighlight: "Projelerimiz",
    sectionSubtitle: "Farklı sektörlerde, global standartlarda geliştirip yayınladığımız bazı örnek mobil uygulama projelerimizi inceleyin.",
    categories: [
      { id: "all", label: "Tümü" },
      { id: "live", label: "Canlı Yayın" },
      { id: "crypto", label: "Kripto & Fintek" },
      { id: "game", label: "Oyun" },
      { id: "voice", label: "Sesli Sohbet" },
      { id: "chat", label: "Mesajlaşma" }
    ],
    items: [
      { id: 1, title: "StreamMax", category: "live", image: "/images/live_stream_app_1784991404839.png", desc: "Twitch alternatif, e-spor odaklı canlı yayın platformu. 500K+ aktif kullanıcı.", link: "/hizmetler/canli-yayin", buttonText: "Projeyi İncele" },
      { id: 2, title: "CoinVault", category: "crypto", image: "/images/crypto_app_1784991420700.png", desc: "Soğuk cüzdan entegrasyonlu ve sıfır komisyonlu yeni nesil yerli kripto para borsası.", link: "/hizmetler/kripto", buttonText: "Projeyi İncele" },
      { id: 3, title: "Nebula Quest", category: "game", image: "/images/game_app_1784991440781.png", desc: "Unreal Engine 5 ile geliştirilmiş, 60 FPS çok oyunculu uzay strateji oyunu.", link: "/hizmetler/oyun", buttonText: "Projeyi İncele" },
      { id: 4, title: "SoundRoom", category: "voice", image: "/images/voice_chat_app_1784991462257.png", desc: "AI tabanlı gürültü engelleme özelliğiyle öne çıkan, toplantı ve sohbet odaklı sesli oda uygulaması.", link: "/hizmetler/sesli-sohbet", buttonText: "Projeyi İncele" },
      { id: 5, title: "CryptoTrade Pro", category: "crypto", image: "/images/crypto_app_1784991420700.png", desc: "Gelişmiş türev işlem tahtası ve anlık analiz araçları sunan profesyonel borsa mobil uygulaması.", link: "/hizmetler/kripto", buttonText: "Projeyi İncele" },
      { id: 6, title: "CipherChat", category: "chat", image: "/images/chat_app_1784991472725.png", desc: "Askeri düzeyde uçtan uca şifreleme ve kendini yok eden mesajlar sunan kurumsal haberleşme uygulaması.", link: "/hizmetler/chat", buttonText: "Projeyi İncele" }
    ]
  },

  contact: {
    badge: "Bize Ulaşın",
    title: "Projelerinizi",
    titleHighlight: "Hayata Geçirelim",
    subtitle: "Yeni nesil mobil uygulama fikriniz mi var? Seebel Yazılım'ın uzman ekibiyle iletişime geçin, teknolojinin sınırlarını birlikte aşalım.",
    email: "hello@seebelyazilim.com",
    phone: "+90 (555) 123 45 67",
    address: "Büyükdere Cad. No: 123, Levent, Beşiktaş / İstanbul",
    workingHours: "Hafta içi 09:00 - 18:00",
    form: {
      title: "Mesaj Gönderin",
      buttonText: "Mesajı Gönder",
      successTitle: "✓ Mesajınız Başarıyla Alındı!",
      successSubtitle: "Ekibimiz en kısa sürede sizinle iletişime geçecektir. Teşekkür ederiz.",
      servicesList: [
        "Canlı Yayın Platformu",
        "Kripto ve Fintek",
        "Mobil Oyun",
        "Sesli Sohbet / Chat",
        "Özel Mobil & Web Yazılım",
        "Diğer"
      ]
    },
    socialLinks: [
      { id: "soc-1", platform: "Globe", label: "Web Sitesi", url: "https://seebelyazilim.com", icon: "Globe" },
      { id: "soc-2", platform: "Twitter", label: "X / Twitter", url: "https://twitter.com", icon: "Hash" },
      { id: "soc-3", platform: "Discord", label: "Discord", url: "https://discord.com", icon: "MessageCircle" }
    ]
  },

  footer: {
    description: "Yenilikçi, güvenli ve performans odaklı premium mobil uygulamalar geliştiren, geleceği şekillendiren teknoloji partneriniz.",
    copyright: "Seebel Yazılım. Tüm hakları saklıdır.",
    legalLinks: [
      { id: "leg-1", label: "KVKK Aydınlatma Metni", url: "/yasal/kvkk" },
      { id: "leg-2", label: "Çerez Politikası", url: "/yasal/cerez-politikasi" }
    ],
    columns: [
      {
        id: "fcol-1",
        title: "Hizmetler",
        links: [
          { id: "fcl-1", label: "Canlı Yayın Uygulamaları", url: "/hizmetler/canli-yayin" },
          { id: "fcl-2", label: "Kripto & Finans", url: "/hizmetler/kripto" },
          { id: "fcl-3", label: "Mobil Oyunlar", url: "/hizmetler/oyun" },
          { id: "fcl-4", label: "Sesli Sohbet Odaları", url: "/hizmetler/sesli-sohbet" },
          { id: "fcl-5", label: "Chat Uygulamaları", url: "/hizmetler/chat" }
        ]
      },
      {
        id: "fcol-2",
        title: "Kurumsal",
        links: [
          { id: "fcl-6", label: "Hakkımızda", url: "/hakkimizda" },
          { id: "fcl-7", label: "Ekibimiz", url: "/ekibimiz" },
          { id: "fcl-8", label: "Kariyer", url: "/kariyer" },
          { id: "fcl-9", label: "Gizlilik Politikası", url: "/yasal/gizlilik-politikasi" },
          { id: "fcl-10", label: "Kullanım Şartları", url: "/yasal/kullanim-sartlari" }
        ]
      }
    ]
  },

  team: {
    title: "Yenilikçi",
    titleHighlight: "Ekibimiz",
    subtitle: "Yüzlerce başarılı projeye imza atan, kendi alanında uzman, yenilikçi ve tutkulu profesyonellerden oluşan dev bir aileyiz.",
    members: [
      { id: "tm-1", name: "Ahmet Yılmaz", role: "Kurucu & CEO", image: "https://i.pravatar.cc/150?img=11", website: "https://ahmet.dev", twitter: "https://twitter.com", email: "ahmet@seebelyazilim.com" },
      { id: "tm-2", name: "Ayşe Demir", role: "CTO", image: "https://i.pravatar.cc/150?img=5", website: "#", twitter: "https://twitter.com", email: "ayse@seebelyazilim.com" },
      { id: "tm-3", name: "Caner Kılıç", role: "Lead Mobile Developer", image: "https://i.pravatar.cc/150?img=15", website: "#", twitter: "https://twitter.com", email: "caner@seebelyazilim.com" },
      { id: "tm-4", name: "Elif Şahin", role: "UI/UX Tasarım Lideri", image: "https://i.pravatar.cc/150?img=20", website: "#", twitter: "https://twitter.com", email: "elif@seebelyazilim.com" },
      { id: "tm-5", name: "Burak Çelik", role: "Blockchain Uzmanı", image: "https://i.pravatar.cc/150?img=33", website: "#", twitter: "https://twitter.com", email: "burak@seebelyazilim.com" },
      { id: "tm-6", name: "Zeynep Kaya", role: "Pazarlama Direktörü", image: "https://i.pravatar.cc/150?img=44", website: "#", twitter: "https://twitter.com", email: "zeynep@seebelyazilim.com" }
    ]
  },

  careers: {
    title: "Geleceği Birlikte",
    titleHighlight: "Kodlayalım",
    subtitle: "Teknolojinin sınırlarını zorlayan projelerde yer almak ve küresel çapta etki yaratacak mobil uygulamalar geliştirmek istiyorsanız, Seebel Yazılım ailesine katılın.",
    positionsTitle: "Açık Pozisyonlar",
    applyButtonText: "Başvur",
    applyEmail: "kariyer@seebelyazilim.com",
    jobs: [
      { id: "job-1", title: "Senior React Native Developer", type: "Tam Zamanlı", location: "Hibrit / İstanbul", department: "Mobil Geliştirme", timeText: "Aktif İlan" },
      { id: "job-2", title: "Blockchain Smart Contract Engineer", type: "Tam Zamanlı", location: "Uzaktan", department: "Web3 & Fintek", timeText: "Aktif İlan" },
      { id: "job-3", title: "UI/UX Designer", type: "Tam Zamanlı", location: "Hibrit / İstanbul", department: "Tasarım", timeText: "Aktif İlan" },
      { id: "job-4", title: "Backend Developer (Node.js/Go)", type: "Tam Zamanlı", location: "Uzaktan", department: "Sunucu & Bulut", timeText: "Aktif İlan" }
    ]
  },

  serviceDetails: {
    liveStream: {
      badge: "Medya & Eğlence",
      title: "Kesintisiz",
      titleHighlight: "Canlı Yayın",
      subtitle: "Milyonlarca anlık izleyiciyi destekleyen, ultra düşük gecikmeli (Ultra-Low Latency) ve 4K çözünürlüğe kadar yayın kalitesi sunan mobil yayın platformları tasarlıyoruz. Kendi 'Twitch' veya 'Bigo Live' konseptli uygulamanızı inşa edin.",
      buttonText: "Demo Talep Et",
      buttonUrl: "/iletisim",
      image: "/images/live_stream_app_1784991404839.png",
      statValue: "100K+",
      statLabel: "Anlık İzleyici Kapasitesi",
      featuresTitle: "Teknolojik Altyapımız",
      featuresSubtitle: "Gelişmiş protokoller ve bulut mimarisi ile kusursuz yayın kalitesi.",
      features: [
        { id: "lsf-1", icon: "Video", title: "WebRTC & HLS Protokolleri", desc: "1 saniyenin altında gecikme süreleri ile gerçek zamanlı yayın deneyimi." },
        { id: "lsf-2", icon: "Server", title: "Otomatik Ölçeklendirme", desc: "İzleyici sayısındaki ani artışlarda bile çökmeyen bulut sunucu mimarisi." },
        { id: "lsf-3", icon: "Users", title: "İnteraktif Özellikler", desc: "Anlık hediyeleşme, çoklu konuk alma, PK savaşları ve sanal efektler." },
        { id: "lsf-4", icon: "Shield", title: "Gelişmiş Moderasyon", desc: "Yapay zeka destekli içerik filtreleme ve otomatik yayın kesme sistemleri." }
      ]
    },
    crypto: {
      badge: "Finans & Web3",
      title: "Geleceğin",
      titleHighlight: "Kripto & Fintek",
      subtitle: "Bankacılık standartlarında güvenlik, sıfır veri kaybı ve mikrosaniye hızında emir işleme motorlarıyla donatılmış yeni nesil kripto para borsaları ve DeFi cüzdan uygulamaları geliştiriyoruz.",
      buttonText: "Uzmanla Görüş",
      buttonUrl: "/iletisim",
      image: "/images/crypto_app_1784991420700.png",
      statValue: "$2.4M / sn",
      statLabel: "Anlık İşlem Hacmi",
      featuresTitle: "Finansal Altyapı Özellikleri",
      featuresSubtitle: "En yüksek güvenlik standartları ve modern finans teknolojileri (FinTech).",
      features: [
        { id: "crf-1", icon: "Lock", title: "Askeri Düzey Şifreleme", desc: "Soğuk cüzdan mimarisi ve AES-256 şifreleme ile kullanıcı varlıklarının mutlak güvenliği." },
        { id: "crf-2", icon: "LineChart", title: "Gerçek Zamanlı Veri", desc: "WebSocket destekli, saniyenin binde biri hızında güncellenen canlı borsa grafikleri." },
        { id: "crf-3", icon: "Wallet", title: "Web3 Cüzdan Entegrasyonu", desc: "MetaMask, WalletConnect ve donanım cüzdanları ile kusursuz etkileşim." },
        { id: "crf-4", icon: "ShieldCheck", title: "KYC/AML Sistemleri", desc: "Uluslararası standartlara uygun, yapay zeka destekli anında kimlik doğrulama modülleri." }
      ]
    },
    games: {
      badge: "Oyun & Eğlence",
      title: "Yüksek Kaliteli",
      titleHighlight: "Mobil Oyunlar",
      subtitle: "Unity ve Unreal Engine motorları ile geliştirilen, 60 FPS akıcılığında çok oyunculu (multiplayer) mobil oyunlar ve oyun içi ekonomi sistemleri.",
      buttonText: "Oyun Projenizi Başlatın",
      buttonUrl: "/iletisim",
      image: "/images/game_app_1784991440781.png",
      statValue: "60 FPS",
      statLabel: "Ultra Akıcı Grafik Motoru",
      featuresTitle: "Oyun Geliştirme Dinamikleri",
      featuresSubtitle: "Sıfır gecikmeli sunucu senkronizasyonu ve göz alıcı görsel efektler.",
      features: [
        { id: "gmf-1", icon: "Gamepad2", title: "Multiplayer Altyapı", desc: "Global sunucu ağları üzerinden binlerce eşzamanlı oyuncu desteği." },
        { id: "gmf-2", icon: "Zap", title: "Cross-Platform", desc: "iOS ve Android cihazlarda birebir aynı performans ve grafik kalitesi." },
        { id: "gmf-3", icon: "Trophy", title: "Liderlik Tabloları", desc: "Sezonluk turnuvalar, klan savaşları ve küresel sıralama sistemleri." },
        { id: "gmf-4", icon: "Shield", title: "Anti-Cheat Koruması", desc: "Hileleri ve bellek manipülasyonlarını anında tespit eden güvenlik katmanı." }
      ]
    },
    voiceChat: {
      badge: "Ses & Topluluk",
      title: "Kristal Netliğinde",
      titleHighlight: "Sesli Sohbet Odaları",
      subtitle: "Clubhouse ve Discord benzeri, yüzlerce kişinin aynı anda konuşabildiği, yapay zeka gürültü filtreleme teknolojili sesli topluluk uygulamaları.",
      buttonText: "Ses Altyapısını İnceleyin",
      buttonUrl: "/iletisim",
      image: "/images/voice_chat_app_1784991462257.png",
      statValue: "< 150ms",
      statLabel: "Ultra Düşük Ses Gecikmesi",
      featuresTitle: "Akustik ve Ses Teknolojileri",
      featuresSubtitle: "Gelişmiş ses kodekleri ve oda moderasyon sistemleri.",
      features: [
        { id: "vcf-1", icon: "Mic", title: "AI Gürültü Engelleme", desc: "Arka plan gürültülerini ve yankıyı yok eden akıllı ses işleme." },
        { id: "vcf-2", icon: "RadioTower", title: "3D Uzamsal Ses (Spatial)", desc: "Kullanıcıların sanal odadaki konumuna göre dinamik ses derinliği." },
        { id: "vcf-3", icon: "Users", title: "Geniş Sahne Kapasitesi", desc: "Tek bir odada 50+ konuşmacı ve 5000+ dinleyici desteği." },
        { id: "vcf-4", icon: "Settings", title: "Detaylı Moderasyon", desc: "Mikrofon susturma, sahneye davet etme ve otomatik oda kuralları." }
      ]
    },
    textChat: {
      badge: "İletişim & Güvenlik",
      title: "Uçtan Uca Şifreli",
      titleHighlight: "Mesajlaşma & Chat",
      subtitle: "Telegram ve WhatsApp standartlarında, gizliliğin ön planda olduğu, kendini yok eden mesajlar ve medya paylaşımına sahip güvenli chat çözümleri.",
      buttonText: "Chat Çözümünü Keşfedin",
      buttonUrl: "/iletisim",
      image: "/images/chat_app_1784991472725.png",
      statValue: "E2E Encrypted",
      statLabel: "Signal Protokolü Koruması",
      featuresTitle: "Haberleşme Mimarisi",
      featuresSubtitle: "Hızlı mesaj iletimi, kanallar ve zengin medya entegrasyonu.",
      features: [
        { id: "tcf-1", icon: "MessageSquare", title: "Anlık Mesajlaşma", desc: "WebSocket ve MQTT protokolleri ile milisaniyeler içinde teslimat." },
        { id: "tcf-2", icon: "ShieldCheck", title: "Uçtan Uca Şifreleme", desc: "Mesajların sadece alıcı ve gönderici tarafından okunabilme garantisi." },
        { id: "tcf-3", icon: "Bot", title: "Bot ve Otomasyon", desc: "Akıllı chatbotlar, webhooklar ve API entegrasyon desteği." },
        { id: "tcf-4", icon: "Share2", title: "Yüksek Boyutlu Medya", desc: "4K video, ses kaydı ve dosya transferinde optimize sıkıştırma." }
      ]
    }
  },

  servicesPage: {
    title: "Tüm",
    titleHighlight: "Hizmetlerimiz",
    subtitle: "Uçtan uca çözümler ürettiğimiz uygulama ekosistemlerini detaylıca inceleyin."
  },

  faq: {
    badge: "Merak Edilenler",
    title: "Sıkça Sorulan",
    titleHighlight: "Sorular (SSS)",
    subtitle: "Proje süreçlerimiz, teknolojilerimiz ve iş birliği modellerimiz hakkında en çok sorulan soruların yanıtları.",
    items: [
      {
        id: "faq-1",
        question: "Bir mobil uygulamanın geliştirme süreci ortalama ne kadar sürer?",
        answer: "Projenin kapsamına ve özelliklerine bağlı olarak MVP (Minimum Uygulanabilir Ürün) aşaması ortalama 4-8 hafta, tam kapsamlı kurumsal projeler ise 8-16 hafta arasında tamamlanmaktadır."
      },
      {
        id: "faq-2",
        question: "Hangi mobil teknolojileri ve kütüphaneleri kullanıyorsunuz?",
        answer: "Modern, yüksek performanslı ve çapraz platform destekli React Native, Flutter, Swift, Kotlin, Node.js, WebRTC ve blockchain entegrasyonlarında Solidity teknolojilerini kullanıyoruz."
      },
      {
        id: "faq-3",
        question: "Yayın sonrasında teknik destek ve bakım sağlıyor musunuz?",
        answer: "Evet, projeler yayınlandıktan sonra App Store ve Google Play güncellemeleri, sunucu izleme (monitoring), güvenlik yamaları ve performans optimizasyonu dahil 7/24 SLA garantili destek sunuyoruz."
      },
      {
        id: "faq-4",
        question: "Proje fikrimizin gizliliği nasıl korunuyor?",
        answer: "Görüşmelerimizin başında karşılıklı bağlayıcı Gizlilik Sözleşmesi (NDA) imzalıyoruz. Tüm kod ve fikri mülkiyet hakları %100 müşterimize aittir."
      }
    ]
  },

  testimonials: {
    badge: "Referans Görüşleri",
    title: "Müşterilerimiz",
    titleHighlight: "Ne Diyor?",
    subtitle: "Birlikte global başarılara imza attığımız iş ortaklarımızın ve girişimcilerin deneyimleri.",
    items: [
      {
        id: "test-1",
        name: "Kerem Aksoy",
        role: "Kurucu Ortak, StreamGlobal",
        avatar: "https://i.pravatar.cc/150?img=12",
        rating: 5,
        comment: "Canlı yayın platformumuzun 100K+ anlık kullanıcıya ulaşırken sıfır kesintiyle çalışması Seebel ekibinin mühendislik başarısıdır. Kesinlikle tavsiye ederim."
      },
      {
        id: "test-2",
        name: "Selin Vural",
        role: "Ürün Direktörü, BitVault App",
        avatar: "https://i.pravatar.cc/150?img=25",
        rating: 5,
        comment: "Kripto cüzdan ve borsa uygulamamızın hem arayüzü hem de güvenlik denetimleri tam zamanında ve kusursuz teslim edildi."
      },
      {
        id: "test-3",
        name: "Mert Karaca",
        role: "Oyun Yapımcısı, ApexGames",
        avatar: "https://i.pravatar.cc/150?img=32",
        rating: 5,
        comment: "Multiplayer mobil oyunumuzun sunucu mimarisi ve 60 FPS optimizasyonu harika yapıldı. Global mağazada ilk 10'a girdik."
      }
    ]
  },

  legal: {
    kvkk: {
      title: "KVKK Aydınlatma Metni",
      subtitle: "6698 Sayılı Kişisel Verilerin Korunması Kanunu Kapsamında Bilgilendirme",
      lastUpdated: "2026",
      content: `Seebel Yazılım olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, veri sorumlusu sıfatıyla kişisel verilerinizin güvenliğine ve gizliliğine azami önem vermekteyiz.

1. Kişisel Verilerin İşlenme Amacı:
Kişisel verileriniz; sizlere sunduğumuz mobil yazılım geliştirme, danışmanlık ve teknik destek hizmetlerinin yürütülmesi, iletişim faaliyetlerinin gerçekleştirilmesi ve yasal yükümlülüklerin yerine getirilmesi amacıyla işlenmektedir.

2. Veri Güvenliği:
Kişisel verileriniz, endüstri standardı şifreleme yöntemleri ve güvenli sunucu altyapıları ile korunmakta olup yetkisiz erişimlere karşı sürekli denetlenmektedir.

3. Haklarınız:
KVKK'nın 11. maddesi kapsamında; verilerinizin işlenip işlenmediğini öğrenme, silinmesini veya düzeltilmesini talep etme hakkına sahipsiniz.`
    },
    privacy: {
      title: "Gizlilik Politikası",
      subtitle: "Kullanıcı Gizliliği ve Veri Koruma Prensiplerimiz",
      lastUpdated: "2026",
      content: `Bu Gizlilik Politikası, Seebel Yazılım web sitesi ve mobil uygulamalarımızı kullandığınızda toplanan bilgilerin nasıl kullanıldığını açıklamaktadır.

1. Toplanan Bilgiler:
İletişim formları veya doğrudan başvurularınız esnasında tarafımıza iletilen ad, soyad, e-posta adresi ve telefon bilgileri gizli tutulur.

2. Üçüncü Taraflarla Paylaşım:
Kişisel bilgileriniz hiçbir şart altında üçüncü şahıslara satılmaz, kiralanmaz veya ticari amaçla devredilmez.

3. İletişim:
Gizlilik politikamız ile ilgili her türlü soru için hello@seebelyazilim.com adresinden bizimle iletişime geçebilirsiniz.`
    },
    cookies: {
      title: "Çerez (Cookie) Politikası",
      subtitle: "Web Sitemizde Kullanılan Çerezler ve Amaçları",
      lastUpdated: "2026",
      content: `Web sitemizin performansını artırmak, kullanıcı deneyimini iyileştirmek ve güvenliği sağlamak amacıyla çerezler (cookies) kullanılmaktadır.

1. Zorunlu Çerezler:
Sitenin temel fonksiyonlarının çalışması ve güvenlik için gerekli teknik çerezlerdir.

2. Analitik Çerezler:
Ziyaretçi trafiğini ve sayfa kullanım istatistiklerini anonim olarak analiz etmek için kullanılır.

3. Çerez Tercihlerini Yönetme:
Tarayıcınızın ayarlarından çerezleri dilediğiniz zaman engelleyebilir veya silebilirsiniz.`
    },
    terms: {
      title: "Kullanım Şartları",
      subtitle: "Hizmet Şartları ve Yasal Koşullar",
      lastUpdated: "2026",
      content: `Seebel Yazılım web sitesini ziyaret ederek ve hizmetlerimizi kullanarak aşağıdaki kullanım şartlarını kabul etmiş sayılırsınız.

1. Fikri Mülkiyet:
Web sitesinde yer alan tüm tasarım, logo, metin ve görsellerin telif hakları Seebel Yazılım'a aittir.

2. Sorumluluk Sınırları:
Web sitemizdeki içerikler bilgilendirme amaçlıdır. Yazılım projeleri taraflar arasında imzalanan özel sözleşmelerle yürütülür.

3. Değişiklik Hakkı:
Seebel Yazılım, kullanım şartlarını önceden bildirmeksizin güncelleme hakkını saklı tutar.`
    }
  }
};


