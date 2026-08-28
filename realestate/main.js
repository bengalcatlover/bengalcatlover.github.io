

```javascript
// ==========================================
// Kanagawa Premier Realty — main.js
// ==========================================

(function () {
  "use strict";

  // ========== DATA ==========
  const properties = [
    {
      id: 1,
      title: "Minatomirai Grand Harbor Penthouse",
      type: "Penthouse",
      price: 1987000,
      priceFormatted: "$1,987,000",
      priceMonthly: "$10,800/mo",
      location: "Minatomirai, Yokohama, Kanagawa",
      area: "Yokohama",
      bedrooms: 3,
      bathrooms: 2,
      sqm: 142,
      description: "A rare waterfront penthouse commanding cinematic views across Yokohama Bay and the illuminated skyline. Floor-to-ceiling glass, a private corner terrace and exquisitely composed interiors create an atmosphere of quiet sophistication. Residents enjoy concierge service, a private lounge, fitness facilities and direct access to Minatomirai's dining and cultural destinations. International schools and central Tokyo are within convenient reach.",
      features: ["Panoramic bay views", "Private corner terrace", "24-hour concierge", "Residents' fitness suite", "Secure underground parking", "Pet friendly"],
      imagePlaceholder: "Ultra-luxury penthouse living room in Minatomirai at blue hour, floor-to-ceiling windows overlooking Yokohama Bay and Ferris wheel, contemporary Japanese interiors, sculptural lighting, cream stone and dark walnut, editorial architectural photography",
      lat: 35.4579,
      lng: 139.6328,
      dateAdded: "2025-01-15"
    },
    {
      id: 2,
      title: "The Bluff Residence, Yamate",
      type: "House",
      price: 1633000,
      priceFormatted: "$1,633,000",
      priceMonthly: "$8,900/mo",
      location: "Yamate, Yokohama, Kanagawa",
      area: "Yokohama",
      bedrooms: 4,
      bathrooms: 3,
      sqm: 218,
      description: "Set behind mature trees on Yokohama's storied Bluff, this gracious residence balances international elegance with Japanese craftsmanship. Generous reception rooms open to a secluded garden designed for year-round color and effortless entertaining. The flexible four-bedroom plan includes a private study and guest suite. Yokohama International School, Motomachi and Harbor View Park are all close at hand.",
      features: ["Private landscaped garden", "Guest suite", "Dedicated home office", "Two-car garage", "Underfloor heating", "International school access"],
      imagePlaceholder: "Elegant modern luxury house in Yokohama Yamate, limestone and cedar facade, landscaped private garden, warm evening light, refined international architecture with Japanese details, premium real estate photography",
      lat: 35.4381,
      lng: 139.6512,
      dateAdded: "2025-02-01"
    },
    {
      id: 3,
      title: "Yuigahama Ocean Villa",
      type: "House",
      price: 1253000,
      priceFormatted: "$1,253,000",
      priceMonthly: "$7,200/mo",
      location: "Yuigahama, Kamakura, Kanagawa",
      area: "Kamakura",
      bedrooms: 3,
      bathrooms: 2,
      sqm: 176,
      description: "Moments from the sands of Yuigahama, this serene coastal villa has been conceived as a private retreat for contemporary family life. A soaring living space opens onto a broad timber terrace, while carefully framed windows capture ocean light and seasonal skies. Natural stone, oak and hand-finished plaster lend warmth throughout. Kamakura Station, bilingual services and celebrated restaurants are readily accessible.",
      features: ["Ocean-view roof terrace", "Walk to Yuigahama Beach", "Double-height living room", "Outdoor shower", "Custom oak kitchen", "Surfboard storage"],
      imagePlaceholder: "Luxury coastal villa near Yuigahama Beach in Kamakura, double-height glass living room, natural oak and pale stone interiors, ocean-view timber terrace, soft morning sunlight, sophisticated Japanese resort architecture",
      lat: 35.3114,
      lng: 139.5416,
      dateAdded: "2025-02-10"
    },
    {
      id: 4,
      title: "Isshiki Coastal Sanctuary",
      type: "House",
      price: 1467000,
      priceFormatted: "$1,467,000",
      priceMonthly: "$8,100/mo",
      location: "Isshiki, Hayama, Kanagawa",
      area: "Hayama",
      bedrooms: 4,
      bathrooms: 3,
      sqm: 231,
      description: "An exceptionally private Hayama residence where sea, sky and architecture meet in perfect balance. Expansive entertaining rooms flow toward an infinity-edge pool and terraces oriented to the setting sun. The principal suite occupies its own tranquil wing, complemented by three guest or family bedrooms. Isshiki Beach and the Imperial Villa grounds are a short stroll away.",
      features: ["Infinity-edge pool", "Sunset ocean views", "Principal suite wing", "Chef's kitchen", "Private courtyard", "Three-car parking"],
      imagePlaceholder: "Exceptional luxury house in Hayama overlooking Sagami Bay, infinity pool reflecting sunset, minimalist stone and timber architecture, lush subtropical landscaping, sophisticated coastal lifestyle photography",
      lat: 35.2633,
      lng: 139.5821,
      dateAdded: "2025-03-05"
    },
    {
      id: 5,
      title: "Enoshima Horizon Residence",
      type: "Apartment",
      price: 853000,
      priceFormatted: "$853,000",
      priceMonthly: "$4,900/mo",
      location: "Katase Kaigan, Shonan, Kanagawa",
      area: "Shonan",
      bedrooms: 2,
      bathrooms: 2,
      sqm: 104,
      description: "This luminous corner residence presents uninterrupted views of Enoshima, Sagami Bay and Mount Fuji on clear winter days. The open-plan living room and full-width balcony are designed for relaxed coastal entertaining. Natural materials and discreet integrated storage bring calm to the generous two-bedroom interior. Beach access, rail connections and Shonan's renowned cafés are all moments away.",
      features: ["Mount Fuji views", "Full-width ocean balcony", "Corner residence", "Beach access", "Residents' lounge", "Pet friendly"],
      imagePlaceholder: "High-end oceanfront apartment in Shonan with direct view of Enoshima and distant Mount Fuji, expansive balcony, understated contemporary interiors, linen upholstery, natural wood, bright coastal daylight",
      lat: 35.3092,
      lng: 139.4836,
      dateAdded: "2025-03-12"
    },
    {
      id: 6,
      title: "Hiroyama Hilltop Estate",
      type: "House",
      price: 1833000,
      priceFormatted: "$1,833,000",
      priceMonthly: "$9,800/mo",
      location: "Hiroyama, Zushi, Kanagawa",
      area: "Zushi",
      bedrooms: 5,
      bathrooms: 4,
      sqm: 286,
      description: "Occupying a commanding hilltop position, this distinguished estate surveys the coastline from Zushi to Enoshima. A sequence of beautifully proportioned rooms opens to landscaped terraces, an outdoor kitchen and a private pool. The five-bedroom plan offers abundant space for family, guests and live-in support. Privacy, security and proximity to international communities make this an outstanding primary or weekend residence.",
      features: ["Private swimming pool", "Sweeping coastal views", "Outdoor entertaining kitchen", "Guest accommodation", "Home cinema", "Gated entrance"],
      imagePlaceholder: "Grand hilltop luxury estate in Hiroyama Zushi, panoramic Sagami Bay views, private pool and expansive terraces, elegant modern Japanese architecture, sunset atmosphere, world-class real estate editorial",
      lat: 35.2931,
      lng: 139.5678,
      dateAdded: "2025-03-20"
    },
    {
      id: 7,
      title: "Bashamichi Heritage Residence",
      type: "Apartment",
      price: 1100000,
      priceFormatted: "$1,100,000",
      priceMonthly: "$6,200/mo",
      location: "Bashamichi, Yokohama, Kanagawa",
      area: "Yokohama",
      bedrooms: 3,
      bathrooms: 2,
      sqm: 121,
      description: "A refined urban residence in one of Yokohama's most architecturally distinguished quarters. Bespoke joinery, veined stone and bronze accents complement expansive windows overlooking the historic port district. The elegant three-bedroom layout includes a discreet work-from-home library and superb entertaining kitchen. Bashamichi Station, Kannai and the waterfront are within an easy walk.",
      features: ["Historic district views", "Bespoke interior finishes", "Private library", "Concierge service", "Wine storage", "Direct station access"],
      imagePlaceholder: "Refined luxury apartment in Yokohama Bashamichi, bespoke walnut joinery, pale marble kitchen, bronze details, large windows over historic port architecture, elegant evening ambience",
      lat: 35.4495,
      lng: 139.6364,
      dateAdded: "2025-04-01"
    },
    {
      id: 8,
      title: "Kita-Kamakura Garden House",
      type: "House",
      price: 967000,
      priceFormatted: "$967,000",
      priceMonthly: "$5,600/mo",
      location: "Yamanouchi, Kamakura, Kanagawa",
      area: "Kamakura",
      bedrooms: 4,
      bathrooms: 2,
      sqm: 194,
      description: "Enveloped by maple, bamboo and moss, this beautifully restored residence embodies the contemplative spirit of Kita-Kamakura. Traditional proportions are elevated by modern comfort, including radiant heating, a contemporary kitchen and meticulously renewed services. Sliding glass panels connect the living rooms to a private garden and tea pavilion. Historic temples, wooded trails and Kita-Kamakura Station are nearby.",
      features: ["Japanese landscaped garden", "Private tea pavilion", "Restored timber detailing", "Radiant floor heating", "Modern chef's kitchen", "Temple district setting"],
      imagePlaceholder: "Restored luxury Japanese house in Kita-Kamakura, private moss and maple garden, tea pavilion, traditional timber structure blended with contemporary glass, tranquil diffused light, architectural magazine photography",
      lat: 35.3372,
      lng: 139.5452,
      dateAdded: "2025-04-10"
    },
    {
      id: 9,
      title: "Shonan T-Site Sky Penthouse",
      type: "Penthouse",
      price: 653000,
      priceFormatted: "$653,000",
      priceMonthly: "$3,900/mo",
      location: "Tsujido, Shonan, Kanagawa",
      area: "Shonan",
      bedrooms: 3,
      bathrooms: 2,
      sqm: 98,
      description: "A sophisticated penthouse offering effortless access to Shonan's beaches, shopping and creative community. Sunlit interiors extend to a generous roof terrace with views toward Mount Fuji and the Tanzawa mountains. The efficient three-bedroom plan is equally suited to family life, remote work or a refined coastal base. Express rail services provide a comfortable connection to Yokohama and central Tokyo.",
      features: ["Private roof terrace", "Mount Fuji outlook", "Top-floor corner position", "Coworking lounge", "Family-friendly community", "Secure parking"],
      imagePlaceholder: "Contemporary Shonan penthouse with private rooftop terrace, distant Mount Fuji view, elegant neutral interiors, modern Japanese furniture, abundant daylight, premium residential photography",
      lat: 35.3389,
      lng: 139.4448,
      dateAdded: "2025-04-18"
    },
    {
      id: 10,
      title: "Zushi Marina Seafront Suite",
      type: "Apartment",
      price: 480000,
      priceFormatted: "$480,000",
      priceMonthly: "$3,100/mo",
      location: "Kotsubo, Zushi, Kanagawa",
      area: "Zushi",
      bedrooms: 2,
      bathrooms: 1,
      sqm: 82,
      description: "Positioned directly above the marina, this polished two-bedroom residence captures sparkling water views from its living room and private balcony. The renovated interior combines crisp contemporary lines with relaxed Mediterranean-inspired tones. Residents enjoy landscaped grounds, marina dining and immediate access to sailing and coastal recreation. Kamakura and central Zushi are only a short drive away.",
      features: ["Direct marina views", "Renovated interior", "Private balcony", "Marina dining access", "Resort-style grounds", "Weekend-home potential"],
      imagePlaceholder: "Luxury renovated apartment at Zushi Marina, balcony overlooking yachts and blue water, refined Mediterranean-inspired neutral decor, bright white stone and pale wood, elegant coastal resort photography",
      lat: 35.2998,
      lng: 139.5539,
      dateAdded: "2025-05-01"
    }
  ];

  const i18n = {
    en: {
      "nav.home": "Home",
      "nav.search": "Search",
      "nav.about": "About",
      "nav.services": "Services",
      "nav.areas": "Areas",
      "nav.faq": "FAQ",
      "nav.contact": "Contact",
      "nav.favorites": "Favorites",
      "hero.headline": "Find Your Home in Kanagawa, Japan",
      "hero.subtext": "Distinctive homes, bilingual expertise and discreet guidance for international families, investors and global professionals.",
      "hero.cta.explore": "Explore Properties",
      "hero.cta.advisor": "Speak with an Advisor",
      "featured.title": "Featured Properties",
      "intro.text": "From Yokohama's illuminated waterfront to the serene shores of Kamakura, Hayama and Shonan, discover a considered collection of exceptional Kanagawa residences. Our bilingual advisors make every stage of renting, purchasing and relocating to Japan clear, personal and effortless.",
      "search.title": "Search Properties",
      "filter.area": "Area",
      "filter.area.all": "All Areas",
      "filter.type": "Property Type",
      "filter.type.all": "All Types",
      "filter.bedrooms": "Bedrooms",
      "filter.bedrooms.all": "Any",
      "filter.price": "Price Range",
      "filter.price.all": "Any Price",
      "filter.price.under500": "Under $500K",
      "filter.price.500to1m": "$500K – $1M",
      "filter.price.1mto1_5m": "$1M – $1.5M",
      "filter.price.over1_5m": "Over $1.5M",
      "sort.label": "Sort by",
      "sort.priceAsc": "Price: Low to High",
      "sort.priceDesc": "Price: High to Low",
      "sort.newest": "Newest First",
      "btn.viewDetails": "View Details",
      "btn.save": "Save to Favorites",
      "btn.saved": "Saved ♥",
      "btn.remove": "Remove",
      "btn.backToSearch": "← Back to Search",
      "detail.bedrooms": "Bedrooms",
      "detail.bathrooms": "Bathrooms",
      "detail.sqm": "sqm",
      "detail.features": "Features",
      "detail.location": "Location",
      "detail.monthly": "Monthly",
      "favorites.title": "Your Favorites",
      "favorites.empty": "You haven't saved any properties yet.",
      "about.title": "About Us",
      "about.mission.title": "Our Mission",
      "about.values.title": "Our Values",
      "about.company": "Kanagawa Premier Realty",
      "about.description": "Kanagawa Premier Realty is a bilingual residential advisory specializing in exceptional homes throughout Yokohama and coastal Kanagawa. Since 2010, we have represented international families, executives and private investors with discretion, local intelligence and an exacting standard of service. Our support extends beyond the transaction to relocation, documentation, property management and the practical details of establishing a life in Japan.",
      "about.mission": "Bridging Japan's real estate to the world through trusted advice, cultural fluency and an unwavering commitment to our clients.",
      "services.title": "Our Services",
      "staff.title": "Our Team",
      "areas.title": "Explore Areas",
      "faq.title": "Frequently Asked Questions",
      "contact.title": "Contact Us",
      "contact.address": "Harbor View Tower 8F, 2-3-5 Minatomirai, Nishi-ku, Yokohama, Kanagawa 220-0012, Japan",
      "contact.phone": "+81 (0)45-555-0188",
      "contact.email": "concierge@kanagawapremier.jp",
      "form.name": "Full Name",
      "form.email": "Email Address",
      "form.phone": "Phone Number",
      "form.nationality": "Nationality (Optional)",
      "form.inquiryType": "Inquiry Type",
      "form.inquiryType.rental": "Rental",
      "form.inquiryType.purchase": "Purchase",
      "form.inquiryType.investment": "Investment",
      "form.inquiryType.relocation": "Relocation",
      "form.inquiryType.other": "Other",
      "form.area": "Preferred Area",
      "form.budget": "Budget",
      "form.message": "Message",
      "form.submit": "Send Inquiry",
      "form.success": "Thank you! Your inquiry has been submitted. We will be in touch shortly.",
      "form.error.name": "Please enter your full name.",
      "form.error.email": "Please enter a valid email address.",
      "form.error.message": "Please enter your message.",
      "results.count": "{count} properties found",
      "results.none": "No properties match your criteria. Please adjust your filters.",
      "footer.rights": "© 2025 Kanagawa Premier Realty. All rights reserved.",
      "lightbox.close": "Close",
      "lightbox.prev": "Previous",
      "lightbox.next": "Next"
    },
    ja: {
      "nav.home": "ホーム",
      "nav.search": "物件検索",
      "nav.about": "会社概要",
      "nav.services": "サービス",
      "nav.areas": "エリア",
      "nav.faq": "よくある質問",
      "nav.contact": "お問い合わせ",
      "nav.favorites": "お気に入り",
      "hero.headline": "神奈川で、理想の住まいを。",
      "hero.subtext": "横浜から湘南・鎌倉・葉山まで。外国人のお客様とご家族へ、英語対応による上質で安心な住まい探しをご提供します。",
      "hero.cta.explore": "物件を探す",
      "hero.cta.advisor": "アドバイザーに相談",
      "featured.title": "注目の物件",
      "intro.text": "横浜の華やかなウォーターフロントから鎌倉・葉山・湘南の穏やかな海岸まで、厳選された神奈川の上質な住まいをご紹介します。バイリンガルアドバイザーが賃貸・購入・転居のすべてを分かりやすく、丁寧にサポートいたします。",
      "search.title": "物件検索",
      "filter.area": "エリア",
      "filter.area.all": "すべてのエリア",
      "filter.type": "物件タイプ",
      "filter.type.all": "すべてのタイプ",
      "filter.bedrooms": "寝室数",
      "filter.bedrooms.all": "指定なし",
      "filter.price": "価格帯",
      "filter.price.all": "指定なし",
      "filter.price.under500": "$500K未満",
      "filter.price.500to1m": "$500K – $1M",
      "filter.price.1mto1_5m": "$1M – $1.5M",
      "filter.price.over1_5m": "$1.5M以上",
      "sort.label": "並び替え",
      "sort.priceAsc": "価格：安い順",
      "sort.priceDesc": "価格：高い順",
      "sort.newest": "新着順",
      "btn.viewDetails": "詳細を見る",
      "btn.save": "お気に入りに追加",
      "btn.saved": "保存済み ♥",
      "btn.remove": "削除",
      "btn.backToSearch": "← 検索に戻る",
      "detail.bedrooms": "寝室",
      "detail.bathrooms": "浴室",
      "detail.sqm": "㎡",
      "detail.features": "特徴",
      "detail.location": "所在地",
      "detail.monthly": "月額",
      "favorites.title": "お気に入り",
      "favorites.empty": "お気に入り物件はまだありません。",
      "about.title": "会社概要",
      "about.mission.title": "ミッション",
      "about.values.title": "私たちの価値観",
      "about.company": "Kanagawa Premier Realty",
      "about.description": "Kanagawa Premier Realtyは、横浜および神奈川沿岸部の上質な住まいを専門とするバイリンガル不動産アドバイザリーです。2010年の創業以来、外国人のご家族、エグゼクティブ、個人投資家の皆様に、誠実できめ細やかなサービスをご提供してまいりました。",
      "about.mission": "信頼できるアドバイス、文化的理解、そしてお客様への揺るぎないコミットメントを通じて、日本の不動産を世界につなぎます。",
      "services.title": "サービス",
      "staff.title": "チーム紹介",
      "areas.title": "エリア紹介",
      "faq.title": "よくある質問",
      "contact.title": "お問い合わせ",
      "contact.address": "〒220-0012 神奈川県横浜市西区みなとみらい2-3-5 ハーバービュータワー8F",
      "contact.phone": "+81 (0)45-555-0188",
      "contact.email": "concierge@kanagawapremier.jp",
      "form.name": "お名前",
      "form.email": "メールアドレス",
      "form.phone": "電話番号",
      "form.nationality": "国籍（任意）",
      "form.inquiryType": "お問い合わせ種別",
      "form.inquiryType.rental": "賃貸",
      "form.inquiryType.purchase": "購入",
      "form.inquiryType.investment": "投資",
      "form.inquiryType.relocation": "転居サポート",
      "form.inquiryType.other": "その他",
      "form.area": "ご希望エリア",
      "form.budget": "ご予算",
      "form.message": "メッセージ",
      "form.submit": "送信する",
      "form.success": "お問い合わせありがとうございます。担当者より折り返しご連絡いたします。",
      "form.error.name": "お名前を入力してください。",
      "form.error.email": "有効なメールアドレスを入力してください。",
      "form.error.message": "メッセージを入力してください。",
      "results.count": "{count}件の物件が見つかりました",
      "results.none": "条件に一致する物件がありません。フィルターを調整してください。",
      "footer.rights": "© 2025 Kanagawa Premier Realty. All rights reserved.",
      "lightbox.close": "閉じる",
      "lightbox.prev": "前へ",
      "lightbox.next": "次へ"
    }
  };

  const servicesData = [
    { title: "Rental Brokerage", titleJa: "賃貸仲介", description: "A curated search for high-quality apartments and houses, including foreign-resident-friendly options. We coordinate viewings, negotiate terms and explain deposits, guarantor requirements and lease documentation in English.", descriptionJa: "外国人対応可能な上質なアパート・一戸建ての物件探しをサポート。内見の調整、条件交渉、敷金・保証人・契約書類の英語での説明まで対応します。" },
    { title: "Property Purchase", titleJa: "物件購入", description: "Independent guidance for acquiring a primary residence, second home or legacy property in Japan. Our advisors oversee market analysis, due diligence, negotiations, bilingual document review and completion.", descriptionJa: "自宅、セカンドハウス、資産としての不動産購入を独立した立場からサポート。市場分析、デューデリジェンス、交渉、バイリンガルでの書類確認から完了まで対応します。" },
    { title: "Investment Advisory", titleJa: "投資アドバイザリー", description: "Research-led advice for international buyers seeking income, capital preservation or long-term exposure to Japanese real estate. We assess location, yield, operating costs, liquidity and exit strategy.", descriptionJa: "収益、資産保全、長期投資を目的とした海外投資家向けの調査に基づくアドバイス。立地、利回り、運営コスト、流動性、出口戦略を評価します。" },
    { title: "Relocation Support", titleJa: "転居サポート", description: "Practical assistance for a seamless arrival, from neighborhood orientation and school guidance to utilities, banking introductions, internet setup and move-in coordination.", descriptionJa: "スムーズな入居のための実務サポート。地域案内、学校選び、ライフライン手続き、銀行口座開設、インターネット設定、引越し調整まで対応します。" },
    { title: "Property Management", titleJa: "プロパティマネジメント", description: "Attentive management for overseas and domestic owners, including tenant liaison, rent administration, inspections, maintenance coordination and bilingual reporting.", descriptionJa: "海外・国内オーナー向けのきめ細やかな管理サービス。入居者対応、賃料管理、点検、修繕調整、バイリンガルでの報告を行います。" },
    { title: "Contract and Documentation Support", titleJa: "契約・書類サポート", description: "Clear English-language support for applications, leases, purchase agreements and related procedures. Where specialist advice is required, we coordinate with qualified judicial scriveners, tax accountants and immigration professionals.", descriptionJa: "申込書、賃貸契約、売買契約および関連手続きの英語でのサポート。必要に応じて、司法書士、税理士、入管専門家との連携も行います。" }
  ];

  const staffData = [
    { name: "Aiko Tanaka-Williams", role: "Managing Director and Licensed Real Estate Transaction Specialist", roleJa: "代表取締役 / 宅地建物取引士", bio: "Raised between Yokohama and London, Aiko brings more than 15 years of experience advising international families and private clients. Fluent in Japanese and English, she specializes in luxury residential acquisitions, cross-cultural negotiations and discreet off-market searches.", bioJa: "横浜とロンドンで育ち、15年以上にわたり外国人家族や個人顧客へのアドバイスを行ってきました。日英バイリンガルで、高級住宅の取得、異文化交渉、非公開物件の紹介を専門としています。" },
    { name: "Daniel Chen", role: "Director of International Investment", roleJa: "海外投資部門ディレクター", bio: "Born in Singapore and educated in the United States and Japan, Daniel advises overseas buyers on residential investment and portfolio strategy. He works in English, Mandarin and Japanese, translating local market detail into clear, commercially grounded recommendations.", bioJa: "シンガポール生まれ、米国と日本で教育を受けたダニエルは、海外投資家への住宅投資・ポートフォリオ戦略のアドバイスを行います。英語・中国語・日本語を駆使し、現地市場の情報を分かりやすくお伝えします。" },
    { name: "Sofia Martinez", role: "Senior Relocation and Leasing Advisor", roleJa: "シニア転居・賃貸アドバイザー", bio: "Originally from Spain, Sofia has made Yokohama home for more than a decade. Drawing on her own relocation experience, she guides executives and families through home searches, school selection and move-in logistics in English, Spanish and conversational Japanese.", bioJa: "スペイン出身で、10年以上横浜に在住。自身の転居経験を活かし、エグゼクティブやご家族の住まい探し、学校選び、引越し手配を英語・スペイン語・日本語でサポートします。" }
  ];

  const areasData = [
    { name: "Yokohama", nameJa: "横浜", description: "Cosmopolitan, connected and framed by one of Japan's most recognizable waterfronts, Yokohama offers an exceptional balance of urban energy and residential ease. Minatomirai appeals to those seeking contemporary towers and concierge living, while Yamate and Motomachi offer leafy streets, international heritage and proximity to established schools. Direct rail links place central Tokyo within practical commuting distance.", descriptionJa: "日本を代表するウォーターフロントを擁する国際都市・横浜は、都市の活気と住みやすさを兼ね備えています。みなとみらいのタワーマンション、山手・元町の緑豊かな街並みと国際的な教育環境が魅力です。" },
    { name: "Kamakura", nameJa: "鎌倉", description: "Kamakura combines historic temples, wooded hills and a relaxed coastal rhythm less than an hour from central Tokyo. Residences range from restored timber homes in Kita-Kamakura to modern villas near Yuigahama and Shichirigahama. The area is especially prized by creative professionals and families seeking nature, culture and a strong sense of community.", descriptionJa: "歴史ある寺社、緑の丘陵、穏やかな海辺の暮らしが都心から1時間圏内で楽しめる鎌倉。北鎌倉の古民家から由比ヶ浜のモダンヴィラまで、多彩な住まいが揃います。" },
    { name: "Hayama", nameJa: "葉山", description: "Hayama is a discreet seaside enclave known for sheltered beaches, sailing culture and spectacular sunsets across Sagami Bay. Spacious villas, private gardens and ocean-view estates define its upper market. Its unhurried atmosphere attracts executives, entrepreneurs and families seeking privacy without losing access to Yokohama and Tokyo.", descriptionJa: "穏やかなビーチ、セーリング文化、相模湾に沈む夕日で知られる葉山は、広々としたヴィラやプライベートガーデン付きの邸宅が並ぶ、落ち着いた海辺のエリアです。" },
    { name: "Shonan", nameJa: "湘南", description: "Stretching along the coast around Fujisawa, Tsujido and Enoshima, Shonan offers an energetic blend of beach culture and modern convenience. New residential developments, excellent shopping and dependable rail connections make it attractive for both year-round living and weekend escapes. On clear days, many coastal homes enjoy unforgettable views of Mount Fuji.", descriptionJa: "藤沢・辻堂・江ノ島を中心とする湘南エリアは、ビーチカルチャーと都市的利便性が融合した活気あるエリアです。富士山の眺望も魅力のひとつです。" },
    { name: "Zushi", nameJa: "逗子", description: "Zushi combines a welcoming international community with a compact town center, sandy beach and easy access to both Kamakura and Hayama. Hillside neighborhoods such as Hiroyama offer privacy and panoramic sea views, while Kotsubo provides marina-side living. Direct rail services to Yokohama and Tokyo add everyday practicality to its resort-like character.", descriptionJa: "国際的なコミュニティ、コンパクトな街並み、砂浜のビーチ、鎌倉・葉山へのアクセスが揃う逗子。披露山の丘陵地や小坪のマリーナなど多様な住環境が魅力です。" }
  ];

  const faqData = [
    { q: "Can a foreign national buy property in Japan?", qJa: "外国人は日本で不動産を購入できますか？", a: "Yes. Japan generally places no citizenship or residency restriction on foreign ownership of freehold land, houses or condominium units. Purchasing property does not, however, automatically grant residency, a visa or permanent residence.", aJa: "はい。日本では原則として、外国人による土地・建物・マンションの所有に国籍や居住地の制限はありません。ただし、不動産購入により在留資格やビザが自動的に付与されるわけではありません。" },
    { q: "Do I need to live in Japan to complete a purchase?", qJa: "購入手続きのために日本に住んでいる必要がありますか？", a: "No. Non-resident buyers may acquire Japanese real estate, although additional documentation and identity verification will be required. A local representative may also be appointed by power of attorney for certain procedures when the buyer cannot attend in person.", aJa: "いいえ。非居住者でも日本の不動産を取得できますが、追加書類や本人確認が必要になります。現地に来られない場合は委任状により代理人を立てることも可能です。" },
    { q: "Can foreigners obtain a Japanese mortgage?", qJa: "外国人は日本の住宅ローンを組めますか？", a: "Financing is possible, but eligibility varies considerably by lender. Japanese banks often consider residency status, permanent residency, domestic income, employment history, Japanese-language ability and the size of the down payment. Non-resident buyers should generally be prepared to purchase in cash or explore specialist international financing.", aJa: "融資を受けることは可能ですが、金融機関により条件は大きく異なります。在留資格、永住権、国内収入、勤務歴、日本語能力、頭金の額などが審査対象となります。非居住者の方は現金購入か海外の融資機関の利用もご検討ください。" },
    { q: "What additional costs should I budget for when buying?", qJa: "購入時にどのような追加費用がかかりますか？", a: "As a broad guide, acquisition costs often total approximately 6% to 10% of the purchase price. These may include brokerage fees, registration and license tax, judicial scrivener fees, stamp duty, property acquisition tax, loan costs and prorated management or property-tax payments.", aJa: "目安として、購入価格の約6%〜10%の諸費用がかかることが一般的です。仲介手数料、登録免許税、司法書士報酬、印紙税、不動産取得税、融資関連費用、日割り管理費・固定資産税などが含まれます。" },
    { q: "What taxes apply after I own the property?", qJa: "所有後にどのような税金がかかりますか？", a: "Owners are generally responsible for annual fixed asset tax and city planning tax. Condominium owners also pay monthly management and reserve-fund charges. Rental income and any future capital gain may create additional Japanese tax obligations, so advice from a qualified tax professional is recommended.", aJa: "毎年の固定資産税・都市計画税が課されます。マンションの場合は月額の管理費・修繕積立金も発生します。賃料収入やキャピタルゲインには別途課税される場合がありますので、税理士への相談をお勧めします。" },
    { q: "What is the difference between freehold and leasehold property?", qJa: "所有権と借地権の違いは何ですか？", a: "Freehold ownership includes the building and the associated land interest. Leasehold ownership gives the buyer rights to use land for a defined term under specific conditions. Lease length, renewal provisions, transfer consent and ground rent should be reviewed carefully before purchase.", aJa: "所有権は建物と土地の権利を含みます。借地権は一定期間・条件のもとで土地を使用する権利です。借地期間、更新条件、譲渡承諾、地代について購入前に慎重に確認することが重要です。" },
    { q: "How long does a typical purchase take?", qJa: "購入手続きにはどのくらいの期間がかかりますか？", a: "A straightforward cash purchase may complete in approximately four to eight weeks after an offer is accepted. Mortgage approval, overseas documentation, complex title matters or additional due diligence can extend the schedule.", aJa: "現金購入の場合、申込み受理後おおむね4〜8週間で完了することが多いです。住宅ローン審査、海外書類の取得、権利関係の調査などにより期間が延びる場合があります。" },
    { q: "Will contracts and important matters be explained in English?", qJa: "契約書や重要事項は英語で説明してもらえますか？", a: "The legally controlling documents are normally prepared in Japanese. Our bilingual advisors provide clear English explanations and coordinate translated reference materials where appropriate. The statutory explanation of important matters is delivered by a licensed Real Estate Transaction Specialist.", aJa: "法的に有効な書類は日本語で作成されます。当社のバイリンガルアドバイザーが英語での丁寧な説明と参考翻訳資料の手配を行います。重要事項説明は宅地建物取引士が法定の手続きに基づいて行います。" },
    { q: "Can I buy property in Japan as an investment and rent it out?", qJa: "投資目的で購入し、賃貸に出すことはできますか？", a: "Yes, subject to building rules, lease regulations and any applicable local restrictions. Investors should evaluate net yield after management fees, reserve contributions, taxes, insurance, vacancy and maintenance rather than relying only on headline rent.", aJa: "はい。管理規約、賃貸借規制、地域の制限に従う必要があります。投資家の方は、表面利回りだけでなく、管理費、修繕積立金、税金、保険、空室率、維持費を差し引いた実質利回りで判断されることをお勧めします。" }
  ];

  // ========== STATE ==========
  let currentLang = localStorage.getItem("kpr_lang") || "en";
  let currentFilters = { area: "", type: "", bedrooms: "", price: "" };
  let currentSort = "newest";
  let currentPage = detectPage();
  let lightboxImages = [];
  let lightboxIndex = 0;

  // ========== UTILITIES ==========
  function detectPage() {
    const path = window.location.pathname.toLowerCase();
    const params = new URLSearchParams(window.location.search);
    if (params.has("property")) return "detail";
    if (path.includes("about")) return "about";
    if (path.includes("service")) return "services";
    if (path.includes("area")) return "areas";
    if (path.includes("faq")) return "faq";
    if (path.includes("contact")) return "contact";
    if (path.includes("favorite")) return "favorites";
    if (path.includes("search")) return "search";
    return "index";
  }

  function t(key) {
    return (i18n[currentLang] && i18n[currentLang][key]) || (i18n.en[key]) || key;
  }

  function $(selector, parent) {
    return (parent || document).querySelector(selector);
  }

  function $$(selector, parent) {
    return Array.from((parent || document).querySelectorAll(selector));
  }

  function createElement(tag, attrs, children) {
    const el = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "className") el.className = attrs[k];
        else if (k === "innerHTML") el.innerHTML = attrs[k];
        else if (k === "textContent") el.textContent = attrs[k];
        else if (k.startsWith("on")) el.addEventListener(k.slice(2).toLowerCase(), attrs[k]);
        else el.setAttribute(k, attrs[k]);
      });
    }
    if (children) {
      (Array.isArray(children) ? children : [children]).forEach(function (c) {
        if (typeof c === "string") el.appendChild(document.createTextNode(c));
        else if (c) el.appendChild(c);
      });
    }
    return el;
  }

  function formatPrice(num) {
    return "$" + num.toLocaleString("en-US");
  }

  // ========== FAVORITES (localStorage) ==========
  function getFavorites() {
    try {
      return JSON.parse(localStorage.getItem("kpr_favorites")) || [];
    } catch (e) {
      return [];
    }
  }

  function saveFavorites(ids) {
    localStorage.setItem("kpr_favorites", JSON.stringify(ids));
    updateFavoriteBadge();
  }

  function toggleFavorite(id) {
    var favs = getFavorites();
    var idx = favs.indexOf(id);
    if (idx > -1) {
      favs.splice(idx, 1);
    } else {
      favs.push(id);
    }
    saveFavorites(favs);
    return favs.indexOf(id) > -1;
  }

  function isFavorite(id) {
    return getFavorites().indexOf(id) > -1;
  }

  function updateFavoriteBadge() {
    var badge = $("#fav-badge");
    if (badge) {
      var count = getFavorites().length;
      badge.textContent = count;
      badge.style.display = count > 0 ? "inline-flex" : "none";
    }
  }

  // ========== FILTERING & SORTING ==========
  function filterProperties() {
    var results = properties.slice();

    if (currentFilters.area) {
      results = results.filter(function (p) { return p.area === currentFilters.area; });
    }
    if (currentFilters.type) {
      results = results.filter(function (p) { return p.type === currentFilters.type; });
    }
    if (currentFilters.bedrooms) {
      var bd = parseInt(currentFilters.bedrooms, 10);
      if (bd === 5) {
        results = results.filter(function (p) { return p.bedrooms >= 5; });
      } else {
        results = results.filter(function (p) { return p.bedrooms === bd; });
      }
    }
    if (currentFilters.price) {
      switch (currentFilters.price) {
        case "under500":
          results = results.filter(function (p) { return p.price < 500000; });
          break;
        case "500to1m":
          results = results.filter(function (p) { return p.price >= 500000 && p.price < 1000000; });
          break;
        case "1mto1_5m":
          results = results.filter(function (p) { return p.price >= 1000000 && p.price < 1500000; });
          break;
        case "over1_5m":
          results = results.filter(function (p) { return p.price >= 1500000; });
          break;
      }
    }

    switch (currentSort) {
      case "priceAsc":
        results.sort(function (a, b) { return a.price - b.price; });
        break;
      case "priceDesc":
        results.sort(function (a, b) { return b.price - a.price; });
        break;
      case "newest":
      default:
        results.sort(function (a, b) { return new Date(b.dateAdded) - new Date(a.dateAdded); });
        break;
    }

    return results;
  }

  // ========== PROPERTY CARD ==========
  function createPropertyCard(prop, options) {
    options = options || {};
    var fav = isFavorite(prop.id);

    var card = createElement("article", { className: "property-card", "data-id": prop.id });

    // Image
    var imgWrap = createElement("div", { className: "property-card__image" });
    var img = createElement("div", {
      className: "property-card__img-placeholder",
      title: prop.imagePlaceholder,
      innerHTML: '<div class="property-card__img-overlay"><span class="property-card__type-badge">' + prop.type + '</span></div>' +
        '<div class="property-card__img-text">' + escapeHtml(prop.title) + '</div>'
    });
    img.style.cssText = "background:linear-gradient(135deg,#1a2a3a 0%,#2d4a5a 50%,#1a3a4a 100%);height:220px;display:flex;align-items:flex-end;justify-content:center;position:relative;border-radius:8px 8px 0 0;cursor:pointer;";
    img.addEventListener("click", function () {
      openLightbox([prop.imagePlaceholder], 0);
    });
    imgWrap.appendChild(img);
    card.appendChild(imgWrap);

    // Content
    var content = createElement("div", { className: "property-card__content" });

    var titleEl = createElement("h3", { className: "property-card__title", textContent: prop.title });
    content.appendChild(titleEl);

    var locEl = createElement("p", { className: "property-card__location", textContent: prop.location });
    content.appendChild(locEl);

    var priceRow = createElement("div", { className: "property-card__price-row" });
    priceRow.appendChild(createElement("span", { className: "property-card__price", textContent: prop.priceFormatted }));
    priceRow.appendChild(createElement("span", { className: "property-card__price-monthly", textContent: prop.priceMonthly }));
    content.appendChild(priceRow);

    var stats = createElement("div", { className: "property-card__stats" });
    stats.innerHTML =
      '<span>' + prop.bedrooms + ' <small data-i18n="detail.bedrooms">' + t("detail.bedrooms") + '</small></span>' +
      '<span>' + prop.bathrooms + ' <small data-i18n="detail.bathrooms">' + t("detail.bathrooms") + '</small></span>' +
      '<span>' + prop.sqm + ' <small data-i18n="detail.sqm">' + t("detail.sqm") + '</small></span>';
    content.appendChild(stats);

    // Actions
    var actions = createElement("div", { className: "property-card__actions" });

    var detailBtn = createElement("a", {
      className: "btn btn--primary btn--sm",
      href: "?property=" + prop.id,
      "data-i18n": "btn.viewDetails",
      textContent: t("btn.viewDetails")
    });
    actions.appendChild(detailBtn);

    var favBtn = createElement("button", {
      className: "btn btn--outline btn--sm btn--fav" + (fav ? " btn--fav-active" : ""),
      "data-i18n": fav ? "btn.saved" : "btn.save",
      textContent: fav ? t("btn.saved") : t("btn.save"),
      "data-property-id": prop.id
    });
    favBtn.addEventListener("click", function () {
      var nowFav = toggleFavorite(prop.id);
      favBtn.textContent = nowFav ? t("btn.saved") : t("btn.save");
      favBtn.setAttribute("data-i18n", nowFav ? "btn.saved" : "btn.save");
      favBtn.classList.toggle("btn--fav-active", nowFav);
      if (options.onFavChange) options.onFavChange();
    });
    actions.appendChild(favBtn);

    if (options.showRemove) {
      var removeBtn = createElement("button", {
        className: "btn btn--danger btn--sm",
        "data-i18n": "btn.remove",
        textContent: t("btn.remove")
      });
      removeBtn.addEventListener("click", function () {
        toggleFavorite(prop.id);
        card.remove();
        if (options.onFavChange) options.onFavChange();
      });
      actions.appendChild(removeBtn);
    }

    content.appendChild(actions);
    card.appendChild(content);

    return card;
  }

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  // ========== RENDER SECTIONS ==========

  // -- Search / Filter Section
  function renderSearchSection(container) {
    container.innerHTML = "";

    var section = createElement("section", { className: "search-section", id: "search" });

    var title = createElement("h2", { className: "section-title", "data-i18n": "search.title", textContent: t("search.title") });
    section.appendChild(title);

    // Filters bar
    var filtersBar = createElement("div", { className: "filters-bar" });

    // Area
    var areaGroup = createFilterGroup("filter.area", "filter-area", [
      { value: "", label: t("filter.area.all") },
      { value: "Yokohama", label: "Yokohama" },
      { value: "Kamakura", label: "Kamakura" },
      { value: "Hayama", label: "Hayama" },
      { value: "Shonan", label: "Shonan" },
      { value: "Zushi", label: "Zushi" }
    ], currentFilters.area);
    filtersBar.appendChild(areaGroup);

    // Type
    var typeGroup = createFilterGroup("filter.type", "filter-type", [
      { value: "", label: t("filter.type.all") },
      { value: "Penthouse", label: "Penthouse" },
      { value: "House", label: "House" },
      { value: "Apartment", label: "Apartment" }
    ], currentFilters.type);
    filtersBar.appendChild(typeGroup);

    // Bedrooms
    var bedGroup = createFilterGroup("filter.bedrooms", "filter-bedrooms", [
      { value: "", label: t("filter.bedrooms.all") },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5+" }
    ], currentFilters.bedrooms);
    filtersBar.appendChild(bedGroup);

    // Price
    var priceGroup = createFilterGroup("filter.price", "filter-price", [
      { value: "", label: t("filter.price.all") },
      { value: "under500", label: t("filter.price.under500") },
      { value: "500to1m", label: t("filter.price.500to1m") },
      { value: "1mto1_5m", label: t("filter.price.1mto1_5m") },
      { value: "over1_5m", label: t("filter.price.over1_5m") }
    ], currentFilters.price);
    filtersBar.appendChild(priceGroup);

    // Sort
    var sortGroup = createFilterGroup("sort.label", "filter-sort", [
      { value: "newest", label: t("sort.newest") },
      { value: "priceAsc", label: t("sort.priceAsc") },
      { value: "priceDesc", label: t("sort.priceDesc") }
    ], currentSort);
    filtersBar.appendChild(sortGroup);

    section.appendChild(filtersBar);

    // Results count
    var resultsInfo = createElement("div", { className: "results-info", id: "results-info" });
    section.appendChild(resultsInfo);

    // Results grid
    var grid = createElement("div", { className: "property-grid", id: "property-grid" });
    section.appendChild(grid);

    container.appendChild(section);

    // Bind events
    bindFilterEvents();
    renderResults();
  }

  function createFilterGroup(labelKey, id, options, currentValue) {
    var group = createElement("div", { className: "filter-group" });
    var label = createElement("label", { "for": id, "data-i18n": labelKey, textContent: t(labelKey) });
    var select = createElement("select", { id: id, className: "filter-select" });

    options.forEach(function (opt) {
      var option = createElement("option", { value: opt.value, textContent: opt.label });
      if (opt.value === currentValue) option.selected = true;
      select.appendChild(option);
    });

    group.appendChild(label);
    group.appendChild(select);
    return group;
  }

  function bindFilterEvents() {
    var areaSelect = $("#filter-area");
    var typeSelect = $("#filter-type");
    var bedSelect = $("#filter-bedrooms");
    var priceSelect = $("#filter-price");
    var sortSelect = $("#filter-sort");

    if (areaSelect) areaSelect.addEventListener("change", function () { currentFilters.area = this.value; renderResults(); });
    if (typeSelect) typeSelect.addEventListener("change", function () { currentFilters.type = this.value; renderResults(); });
    if (bedSelect) bedSelect.addEventListener("change", function () { currentFilters.bedrooms = this.value; renderResults(); });
    if (priceSelect) priceSelect.addEventListener("change", function () { currentFilters.price = this.value; renderResults(); });
    if (sortSelect) sortSelect.addEventListener("change", function () { currentSort = this.value; renderResults(); });
  }

  function renderResults() {
    var grid = $("#property-grid");
    var info = $("#results-info");
    if (!grid) return;

    var results = filterProperties();
    grid.innerHTML = "";

    if (info) {
      if (results.length > 0) {
        info.textContent = t("results.count").replace("{count}", results.length);
        info.className = "results-info";
      } else {
        info.textContent = t("results.none");
        info.className = "results-info results-info--empty";
      }
    }

    results.forEach(function (prop) {
      grid.appendChild(createPropertyCard(prop));
    });
  }

  // -- Featured Section (Index)
  function renderFeaturedSection(container) {
    var section = createElement("section", { className: "featured-section", id: "featured" });

    var title = createElement("h2", { className: "section-title", "data-i18n": "featured.title", textContent: t("featured.title") });
    section.appendChild(title);

    var grid = createElement("div", { className: "property-grid" });

    // Show first 4 properties as featured
    var featured = properties.slice(0, 4);
    featured.forEach(function (prop) {
      grid.appendChild(createPropertyCard(prop));
    });

    section.appendChild(grid);
    container.appendChild(section);
  }

  // -- Hero Section
  function renderHero(container) {
    var hero = createElement("section", { className: "hero", id: "hero" });
    hero.innerHTML =
      '<div class="hero__content">' +
      '<h1 class="hero__headline" data-i18n="hero.headline">' + escapeHtml(t("hero.headline")) + '</h1>' +
      '<p class="hero__subtext" data-i18n="hero.subtext">' + escapeHtml(t("hero.subtext")) + '</p>' +
      '<div class="hero__actions">' +
      '<a href="#search" class="btn btn--primary btn--lg" data-i18n="hero.cta.explore">' + escapeHtml(t("hero.cta.explore")) + '</a>' +
      '<a href="#contact" class="btn btn--outline btn--lg" data-i18n="hero.cta.advisor">' + escapeHtml(t("hero.cta.advisor")) + '</a>' +
      '</div>' +
      '</div>';
    container.appendChild(hero);
  }

  // -- Intro Section
  function renderIntro(container) {
    var section = createElement("section", { className: "intro-section" });
    section.innerHTML = '<p class="intro-text" data-i18n="intro.text">' + escapeHtml(t("intro.text")) + '</p>';
    container.appendChild(section);
  }

  // -- Property Detail
  function renderDetailPage(container) {
    var params = new URLSearchParams(window.location.search);
    var id = parseInt(params.get("property"), 10);
    var prop = properties.find(function (p) { return p.id === id; });

    if (!prop) {
      container.innerHTML = '<div class="detail-not-found"><h2>Property not found</h2><a href="/" class="btn btn--primary">Return Home</a></div>';
      return;
    }

    var detail = createElement("section", { className: "detail-section" });

    // Back button
    var backBtn = createElement("a", {
      href: "javascript:history.back()",
      className: "btn btn--outline btn--sm detail-back",
      "data-i18n": "btn.backToSearch",
      textContent: t("btn.backToSearch")
    });
    detail.appendChild(backBtn);

    // Image gallery
    var gallery = createElement("div", { className: "detail-gallery" });
    var mainImg = createElement("div", {
      className: "detail-gallery__main",
      title: prop.imagePlaceholder
    });
    mainImg.style.cssText = "background:linear-gradient(135deg,#1a2a3a 0%,#2d4a5a 50%,#1a3a4a 100%);min-height:400px;border-radius:12px;display:flex;align-items:center;justify-content:center;cursor:pointer;position:relative;";
    mainImg.innerHTML = '<div style="color:#fff;padding:2rem;text-align:center;max-width:600px;opacity:0.8;font-size:0.9rem;">' + escapeHtml(prop.imagePlaceholder) + '</div>' +
      '<div class="detail-gallery__zoom" title="View Gallery">🔍</div>';
    mainImg.addEventListener("click", function () {
      openLightbox([prop.imagePlaceholder, prop.imagePlaceholder + " — alternate angle", prop.imagePlaceholder + " — detail view"], 0);
    });
    gallery.appendChild(mainImg);

    // Thumbnail strip (simulated)
    var thumbs = createElement("div", { className: "detail-gallery__thumbs" });
    for (var i = 0; i < 3; i++) {
      var thumb = createElement("div", { className: "detail-gallery__thumb" + (i === 0 ? " active" : "") });
      thumb.style.cssText = "background:linear-gradient(135deg,#