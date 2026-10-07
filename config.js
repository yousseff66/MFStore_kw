/* ====== عدّل هنا بس — الصفحة كلها بتتبني من الملف ده ======
   لتغيير اللوجو: بدّل ملف logo.png أو غيّر المسار تحت.
   لإضافة لينك: انسخ سطر وغيّر الـ title والـ url.
   type بياخد: instagram | tiktok | whatsapp | web | map | phone | facebook | email */
window.SITE = {
  logo: "logo.png",
  name: "MF",
  tagline: { ar: "طبخ سهل. طعم رهيب.", en: "Easy cooking. Great taste." },
  about:   { ar: "مجمدات وصوصات وأكتر", en: "Frozen foods, sauces & more" },
  colors: { bg: "#C8102E", bgDark: "#7A0A1C", card: "#FFFFFF", text: "#7A0A1C", accent: "#FFD23F" },
  background: "background.jpg",
  sections: [
    { title: { ar: "تواصل معانا", en: "Follow & chat" }, links: [
      { type: "web",       title: { ar: "موقعنا", en: "Website" }, sub: { ar: "mf-food.com.kw", en: "mf-food.com.kw" }, url: "http://mf-food.com.kw/" },
      { type: "app",       title: { ar: "تطبيق MF", en: "MF App" }, sub: { ar: "متوفر على App Store", en: "Available on the App Store" }, url: "https://apps.apple.com/app/id6446793961" },
      { type: "instagram", title: { ar: "إنستجرام الخليج", en: "Instagram – Gulf" }, sub: { ar: "@mffood", en: "@mffood" }, url: "https://www.instagram.com/mffood?stkn=MTRsZzVpeDBtOWV3dA==" },
      { type: "instagram", title: { ar: "إنستجرام الكويت", en: "Instagram – Kuwait" }, sub: { ar: "@mfstorekw", en: "@mfstorekw" }, url: "https://www.instagram.com/mfstorekw?stkn=MzAzNHhzMXBwY2pj" },
      { type: "tiktok",    title: { ar: "تيك توك", en: "TikTok" }, sub: { ar: "@mffoodkw", en: "@mffoodkw" }, url: "https://www.tiktok.com/@mffoodkw?_r=1&_t=ZS-9ALvxnhF8lx" },
      { type: "whatsapp",  title: { ar: "واتساب", en: "WhatsApp" }, sub: { ar: "اطلب أو اسأل", en: "Order or ask" }, url: "https://wa.me/message/LNT76FWPWHDIG1" }
    ]},
    { title: { ar: "فروعنا", en: "Our branches" }, links: [
      { type: "map", image: "showekh.png", title: { ar: "فرع الشويخ", en: "Shuwaikh branch" }, sub: { ar: "افتح على الخريطة", en: "Open in Maps" }, url: "https://maps.app.goo.gl/ULNwkgMUfQdzPy2L6" },
      { type: "map", image: "gren.png", title: { ar: "فرع القرين", en: "Qurain branch" },   sub: { ar: "افتح على الخريطة", en: "Open in Maps" }, url: "https://maps.app.goo.gl/E6HdZAJiri8wEe2r6" },
      { type: "map", image: "jahra.png", title: { ar: "فرع الجهراء", en: "Jahra branch" },   sub: { ar: "افتح على الخريطة", en: "Open in Maps" }, url: "https://maps.app.goo.gl/jG9h2eZLUzhscsDU7" }
    ]}
  ]
};