"use client"

import * as React from "react"

type Language = "EN" | "MM"

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  EN: {
    // Navbar
    "nav.services": "Services",
    "nav.developers": "Developers",
    "nav.about": "About",
    "nav.team": "Team",
    "nav.news": "News",
    "nav.security": "Security",
    "nav.careers": "Careers",
    "nav.sponsor": "Sponsor",
    "nav.contact": "Contact",
    "nav.getStarted": "Get Started",
    // Hero
    "hero.badge": "Welcome to m",
    "hero.title1": "Myanmar's Next-Gen",
    "hero.title2": "Digital Infrastructure.",
    "hero.subtitle": "A unified platform combining high-performance social networking with enterprise-grade developer APIs, built exclusively for Myanmar.",
    "hero.cta.primary": "Download App",
    "hero.cta.secondary": "Explore Platform",
    "hero.metrics.products": "Core Products",
    "hero.metrics.uptime": "Server Uptime",
    "hero.metrics.hq": "Headquarters",
    // About
    "about.badge": "About social_ltd",
    "about.title1": "Bridging the gap in",
    "about.title2": "Myanmar's digital era.",
    "about.p1": "Founded in Yangon, <strong className=\"text-foreground\">social_ltd</strong> was born from a vision to create digital platforms that truly resonate with the local culture. Our brand <strong className=\"text-foreground\">m</strong> represents Myanmar's forward momentum.",
    "about.p2": "We don't just build apps; we build infrastructure. Our interconnected ecosystem comprising the social app, analytics dashboard, and backend servers work in unison to provide a world-class experience.",
    "about.metrics.local": "Locally Developed",
    "about.metrics.monitoring": "Server Monitoring",
    "about.cta": "Read Our Full Story",
    "about.status.title": "Systems Online",
    "about.status.desc": "All servers active",
    // APK Release
    "apk.badge": "Early Access / Temporary Release",
    "apk.title": "Try the \"m\" Social App Beta",
    "apk.desc": "Be among the first to experience our new social platform. This is a temporary APK release for our early supporters in Myanmar. Sideloading is required.",
    "apk.button": "Download APK (v0.1-beta)",
    "apk.android": "Android 8.0+ Only",
    // Sponsor
    "sponsor.badge": "Support Our Mission",
    "sponsor.title": "Invest in Myanmar's Future",
    "sponsor.desc": "Building independent, high-performance infrastructure for Myanmar requires significant resources. If you believe in our vision for the \"m\" brand, consider sponsoring us.",
    "sponsor.local.title": "Local Payment",
    "sponsor.local.desc": "Support us directly via local digital wallets (KBZPay, WavePay). Best for our supporters within Myanmar.",
    "sponsor.coffee.title": "Buy Us a Coffee",
    "sponsor.coffee.desc": "A small gesture goes a long way in keeping our servers running and our developers fueled.",
    "sponsor.corporate.title": "Corporate Sponsor",
    "sponsor.corporate.desc": "For businesses who want their logo featured on our platform. Let's partner for Myanmar's digital future.",
    "sponsor.cta.details": "View Details",
    "sponsor.cta.donate": "Donate $5",
    "sponsor.cta.contact": "Contact Us",
    // Sponsor Modals
    "sponsor.modal.local.title": "Local Digital Wallets",
    "sponsor.modal.local.kbz": "KBZPay Account",
    "sponsor.modal.local.wave": "WaveMoney Account",
    "sponsor.modal.local.copy": "Copy Number",
    "sponsor.modal.local.paypal": "PayPal (International)",
    "sponsor.modal.local.thaibank": "Thailand Bank (PromptPay)",
    "sponsor.modal.local.qr": "Show QR Code",
    "sponsor.modal.donate.title": "Buy Us a Coffee",
    "sponsor.modal.donate.processing": "Processing Donation...",
    "sponsor.modal.donate.success": "Donation Successful!",
    "sponsor.modal.donate.thanks": "Thank you for supporting Myanmar's digital future!",
    "sponsor.modal.close": "Close",
  },
  MM: {
    // Navbar
    "nav.services": "ဝန်ဆောင်မှုများ",
    "nav.developers": "ဆော့ဖ်ဝဲရေးဆွဲသူများ",
    "nav.about": "အကြောင်း",
    "nav.team": "အဖွဲ့",
    "nav.news": "သတင်းများ",
    "nav.security": "လုံခြုံရေး",
    "nav.careers": "အလုပ်အကိုင်",
    "nav.sponsor": "ထောက်ပံ့ရန်",
    "nav.contact": "ဆက်သွယ်ရန်",
    "nav.getStarted": "စတင်ရန်",
    "nav.support": "ကူညီပံ့ပိုးရန်",
    // Hero
    "hero.badge": "m မှ ကြိုဆိုပါတယ်",
    "hero.title1": "မြန်မာနိုင်ငံ၏ မျိုးဆက်သစ်",
    "hero.title2": "ဒစ်ဂျစ်တယ် အခြေခံအဆောက်အအုံ",
    "hero.subtitle": "မြန်မာနိုင်ငံအတွက် သီးသန့်တည်ဆောက်ထားသော မြန်နှုန်းမြင့် လူမှုကွန်ရက်နှင့် လုပ်ငန်းသုံး API များ ပေါင်းစပ်ထားသည့် တစ်ခုတည်းသော ပလက်ဖောင်း။",
    "hero.cta.primary": "App ဒေါင်းလုဒ်လုပ်ရန်",
    "hero.cta.secondary": "ပလက်ဖောင်းကို လေ့လာရန်",
    "hero.metrics.products": "အဓိကထုတ်ကုန်များ",
    "hero.metrics.uptime": "ဆာဗာ အလုပ်လုပ်ချိန်",
    "hero.metrics.hq": "ရုံးချုပ်တည်နေရာ",
    // About
    "about.badge": "social_ltd အကြောင်း",
    "about.title1": "မြန်မာ့ဒစ်ဂျစ်တယ်ခေတ်၏",
    "about.title2": "ကွက်လပ်ကို ဖြည့်ဆည်းခြင်း။",
    "about.p1": "ရန်ကုန်မြို့တွင် စတင်တည်ထောင်ခဲ့သော <strong className=\"text-foreground\">social_ltd</strong> သည် ဒေသခံယဉ်ကျေးမှုနှင့် အမှန်တကယ် ကိုက်ညီသော ဒစ်ဂျစ်တယ်ပလက်ဖောင်းများ ဖန်တီးရန် မျှော်မှန်းချက်ဖြင့် မွေးဖွားလာခြင်းဖြစ်သည်။ ကျွန်ုပ်တို့၏ အမှတ်တံဆိပ် <strong className=\"text-foreground\">m</strong> သည် မြန်မာနိုင်ငံ၏ ရှေ့သို့ချီတက်မှုကို ကိုယ်စားပြုသည်။",
    "about.p2": "ကျွန်ုပ်တို့သည် App များကိုသာ တည်ဆောက်ခြင်းမဟုတ်ဘဲ အခြေခံအဆောက်အအုံများကိုပါ တည်ဆောက်ပါသည်။ လူမှုကွန်ရက် App၊ Analytics Dashboard နှင့် Backend Server များ ပါဝင်သော ကျွန်ုပ်တို့၏ ချက်ဆက်ထားသော ဂေဟစနစ်သည် ကမ္ဘာ့အဆင့်မီ အတွေ့အကြုံကို ပေးစွမ်းရန် ပူးပေါင်းလုပ်ဆောင်သည်။",
    "about.metrics.local": "ပြည်တွင်းဖန်တီးမှု",
    "about.metrics.monitoring": "ဆာဗာ စောင့်ကြည့်မှု",
    "about.cta": "ကျွန်ုပ်တို့၏ ဇာတ်လမ်းအပြည့်အစုံဖတ်ရန်",
    "about.status.title": "စနစ်များ အွန်လိုင်းပေါ်ရှိသည်",
    "about.status.desc": "ဆာဗာများအားလုံး အလုပ်လုပ်နေပါသည်",
    // APK Release
    "apk.badge": "စောစီးစွာ အသုံးပြုနိုင်မှု / ယာယီ ထုတ်ဝေမှု",
    "apk.title": "\"m\" Social App Beta ကို စမ်းသုံးကြည့်ပါ",
    "apk.desc": "ကျွန်ုပ်တို့၏ လူမှုကွန်ရက် ပလက်ဖောင်းသစ်ကို ပထမဆုံး အသုံးပြုသူများထဲတွင် ပါဝင်လိုက်ပါ။ ၎င်းသည် မြန်မာနိုင်ငံရှိ ကျွန်ုပ်တို့၏ စောစောစီးစီး အားပေးသူများအတွက် ယာယီ APK ထုတ်ဝေမှု ဖြစ်သည်။ Sideloading ပြုလုပ်ရန် လိုအပ်ပါသည်။",
    "apk.button": "APK ဒေါင်းလုဒ်လုပ်ရန် (v0.1-beta)",
    "apk.android": "Android 8.0+ သာ ရရှိနိုင်မည်",
    // Sponsor
    "sponsor.badge": "ကျွန်ုပ်တို့၏ ရည်မှန်းချက်ကို ကူညီရန်",
    "sponsor.title": "မြန်မာနိုင်ငံ၏ အနာဂတ်အတွက် ရင်းနှီးမြှုပ်နှံပါ",
    "sponsor.desc": "မြန်မာနိုင်ငံအတွက် သီးခြားလွတ်လပ်ပြီး စွမ်းဆောင်ရည်မြင့်မားသော အခြေခံအဆောက်အအုံများ တည်ဆောက်ရန်အတွက် အရင်းအမြစ်များစွာ လိုအပ်ပါသည်။ သင်သည် \"m\" အမှတ်တံဆိပ်၏ မျှော်မှန်းချက်ကို ယုံကြည်ပါက ကျွန်ုပ်တို့ကို ထောက်ပံ့ကူညီရန် စဉ်းစားပေးပါ။",
    "sponsor.local.title": "ပြည်တွင်း ငွေပေးချေမှု",
    "sponsor.local.desc": "ပြည်တွင်း ဒစ်ဂျစ်တယ်ပိုက်ဆံအိတ်များ (KBZPay, WavePay) မှတစ်ဆင့် တိုက်ရိုက်ကူညီနိုင်ပါသည်။ မြန်မာနိုင်ငံအတွင်းရှိ ကျွန်ုပ်တို့၏ အားပေးသူများအတွက် အကောင်းဆုံးဖြစ်သည်။",
    "sponsor.coffee.title": "ကော်ဖီတစ်ခွက် တိုက်ကျွေးပါ",
    "sponsor.coffee.desc": "သေးငယ်သော အကူအညီတစ်ခုသည် ကျွန်ုပ်တို့၏ ဆာဗာများကို လည်ပတ်စေရန်နှင့် ကျွန်ုပ်တို့၏ developer များအား ခွန်အားဖြစ်စေရန် များစွာ အထောက်အကူပြုသည်။",
    "sponsor.corporate.title": "လုပ်ငန်းသုံး အလှူရှင်",
    "sponsor.corporate.desc": "ကျွန်ုပ်တို့၏ ပလက်ဖောင်းပေါ်တွင် ၎င်းတို့၏ လိုဂိုကို ပြသလိုသော လုပ်ငန်းရှင်များအတွက် ဖြစ်သည်။ မြန်မာ့ဒစ်ဂျစ်တယ် အနာဂတ်အတွက် အတူတကွ ပူးပေါင်းဆောင်ရွက်ကြပါစို့။",
    "sponsor.cta.details": "အသေးစိတ်ကြည့်ရန်",
    "sponsor.cta.donate": "$၅ လှူဒါန်းရန်",
    "sponsor.cta.contact": "ဆက်သွယ်ရန်",
    // Sponsor Modals
    "sponsor.modal.local.title": "ပြည်တွင်း ဒစ်ဂျစ်တယ်ပိုက်ဆံအိတ်များ",
    "sponsor.modal.local.kbz": "KBZPay အကောင့်",
    "sponsor.modal.local.wave": "WaveMoney အကောင့်",
    "sponsor.modal.local.copy": "နံပါတ်ကူးယူရန်",
    "sponsor.modal.local.paypal": "PayPal (နိုင်ငံတကာ)",
    "sponsor.modal.local.thaibank": "ယိုးဒယားဘဏ် (PromptPay)",
    "sponsor.modal.local.qr": "QR ကုဒ်ပြရန်",
    "sponsor.modal.donate.title": "ကော်ဖီတစ်ခွက် တိုက်ကျွေးပါ",
    "sponsor.modal.donate.processing": "လှူဒါန်းမှုကို လုပ်ဆောင်နေပါသည်...",
    "sponsor.modal.donate.success": "လှူဒါန်းမှု အောင်မြင်ပါသည်!",
    "sponsor.modal.donate.thanks": "မြန်မာ့ဒစ်ဂျစ်တယ် အနာဂတ်အတွက် ကူညီပေးမှုကို ကျေးဇူးတင်ရှိပါသည်။",
    "sponsor.modal.close": "ပိတ်ရန်",
  }
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = React.useState<Language>("EN")

  // Simple translation function
  const t = React.useCallback((key: string) => {
    return translations[lang][key] || key
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = React.useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
