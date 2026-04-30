"use client"

import * as React from "react"

type Language = "EN" | "MM"

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string) => string
}

// const translations: Record<Language, Record<string, string>> = {
//   EN: {
//     // Navbar
//     "nav.services": "Services",
//     "nav.developers": "Developers",
//     "nav.about": "About",
//     "nav.team": "Team",
//     "nav.news": "News",
//     "nav.security": "Security",
//     "nav.careers": "Careers",
//     "nav.sponsor": "Sponsor",
//     "nav.contact": "Contact",
//     "nav.getStarted": "Get Started",
//     // Hero
//     "hero.badge": "Welcome to m",
//     "hero.title1": "Myanmar's Next-Gen",
//     "hero.title2": "Digital Infrastructure.",
//     "hero.subtitle":
//       "A unified platform combining high-performance social networking with enterprise-grade developer APIs, built exclusively for Myanmar.",
//     "hero.cta.primary": "Download App",
//     "hero.cta.secondary": "Explore Platform",
//     "hero.metrics.products": "Core Products",
//     "hero.metrics.uptime": "Server Uptime",
//     "hero.metrics.hq": "Headquarters",
//     // About
//     "about.badge": "About social_ltd",
//     "about.title1": "Bridging the gap in",
//     "about.title2": "Myanmar's digital era.",
//     "about.p1":
//       'Founded in Yangon, <strong className="text-foreground">social_ltd</strong> was born from a vision to create digital platforms that truly resonate with the local culture. Our brand <strong className="text-foreground">m</strong> represents Myanmar\'s forward momentum.',
//     "about.p2":
//       "We don't just build apps; we build infrastructure. Our interconnected ecosystem comprising the social app, analytics dashboard, and backend servers work in unison to provide a world-class experience.",
//     "about.metrics.local": "Locally Developed",
//     "about.metrics.monitoring": "Server Monitoring",
//     "about.cta": "Read Our Full Story",
//     "about.status.title": "Systems Online",
//     "about.status.desc": "All servers active",
//     // APK Release
//     "apk.badge": "Early Access / Temporary Release",
//     "apk.title": 'Try the "m" Social App Beta',
//     "apk.desc":
//       "Be among the first to experience our new social platform. This is a temporary APK release for our early supporters in Myanmar. Sideloading is required.",
//     "apk.button": "Download APK (v0.1-beta)",
//     "apk.android": "Android 8.0+ Only",
//     // Sponsor
//     "sponsor.badge": "Support Our Mission",
//     "sponsor.title": "Invest in Myanmar's Future",
//     "sponsor.desc":
//       'Building independent, high-performance infrastructure for Myanmar requires significant resources. If you believe in our vision for the "m" brand, consider sponsoring us.',
//     "sponsor.local.title": "Local Payment",
//     "sponsor.local.desc":
//       "Support us directly via local digital wallets (KBZPay, WavePay). Best for our supporters within Myanmar.",
//     "sponsor.coffee.title": "Buy Us a Coffee",
//     "sponsor.coffee.desc":
//       "A small gesture goes a long way in keeping our servers running and our developers fueled.",
//     "sponsor.corporate.title": "Corporate Sponsor",
//     "sponsor.corporate.desc":
//       "For businesses who want their logo featured on our platform. Let's partner for Myanmar's digital future.",
//     "sponsor.cta.details": "View Details",
//     "sponsor.cta.donate": "Donate $5",
//     "sponsor.cta.contact": "Contact Us",
//     // Sponsor Modals
//     "sponsor.modal.local.title": "Local Digital Wallets",
//     "sponsor.modal.local.kbz": "KBZPay Account",
//     "sponsor.modal.local.wave": "WaveMoney Account",
//     "sponsor.modal.local.copy": "Copy Number",
//     "sponsor.modal.local.paypal": "PayPal (International)",
//     "sponsor.modal.local.thaibank": "Thailand Bank (PromptPay)",
//     "sponsor.modal.local.qr": "Show QR Code",
//     "sponsor.modal.donate.title": "Buy Us a Coffee",
//     "sponsor.modal.donate.processing": "Processing Donation...",
//     "sponsor.modal.donate.success": "Donation Successful!",
//     "sponsor.modal.donate.thanks":
//       "Thank you for supporting Myanmar's digital future!",
//     "sponsor.modal.close": "Close",
//   },
//   MM: {
//     // Navbar
//     "nav.services": "ဝန်ဆောင်မှုများ",
//     "nav.developers": "ဆော့ဖ်ဝဲရေးဆွဲသူများ",
//     "nav.about": "အကြောင်း",
//     "nav.team": "အဖွဲ့",
//     "nav.news": "သတင်းများ",
//     "nav.security": "လုံခြုံရေး",
//     "nav.careers": "အလုပ်အကိုင်",
//     "nav.sponsor": "ထောက်ပံ့ရန်",
//     "nav.contact": "ဆက်သွယ်ရန်",
//     "nav.getStarted": "စတင်ရန်",
//     "nav.support": "ကူညီပံ့ပိုးရန်",
//     // Hero
//     "hero.badge": "m မှ ကြိုဆိုပါတယ်",
//     "hero.title1": "မြန်မာနိုင်ငံ၏ မျိုးဆက်သစ်",
//     "hero.title2": "ဒစ်ဂျစ်တယ် အခြေခံအဆောက်အအုံ",
//     "hero.subtitle":
//       "မြန်မာနိုင်ငံအတွက် သီးသန့်တည်ဆောက်ထားသော မြန်နှုန်းမြင့် လူမှုကွန်ရက်နှင့် လုပ်ငန်းသုံး API များ ပေါင်းစပ်ထားသည့် တစ်ခုတည်းသော ပလက်ဖောင်း။",
//     "hero.cta.primary": "App ဒေါင်းလုဒ်လုပ်ရန်",
//     "hero.cta.secondary": "ပလက်ဖောင်းကို လေ့လာရန်",
//     "hero.metrics.products": "အဓိကထုတ်ကုန်များ",
//     "hero.metrics.uptime": "ဆာဗာ အလုပ်လုပ်ချိန်",
//     "hero.metrics.hq": "ရုံးချုပ်တည်နေရာ",
//     // About
//     "about.badge": "social_ltd အကြောင်း",
//     "about.title1": "မြန်မာ့ဒစ်ဂျစ်တယ်ခေတ်၏",
//     "about.title2": "ကွက်လပ်ကို ဖြည့်ဆည်းခြင်း။",
//     "about.p1":
//       'ရန်ကုန်မြို့တွင် စတင်တည်ထောင်ခဲ့သော <strong className="text-foreground">social_ltd</strong> သည် ဒေသခံယဉ်ကျေးမှုနှင့် အမှန်တကယ် ကိုက်ညီသော ဒစ်ဂျစ်တယ်ပလက်ဖောင်းများ ဖန်တီးရန် မျှော်မှန်းချက်ဖြင့် မွေးဖွားလာခြင်းဖြစ်သည်။ ကျွန်ုပ်တို့၏ အမှတ်တံဆိပ် <strong className="text-foreground">m</strong> သည် မြန်မာနိုင်ငံ၏ ရှေ့သို့ချီတက်မှုကို ကိုယ်စားပြုသည်။',
//     "about.p2":
//       "ကျွန်ုပ်တို့သည် App များကိုသာ တည်ဆောက်ခြင်းမဟုတ်ဘဲ အခြေခံအဆောက်အအုံများကိုပါ တည်ဆောက်ပါသည်။ လူမှုကွန်ရက် App၊ Analytics Dashboard နှင့် Backend Server များ ပါဝင်သော ကျွန်ုပ်တို့၏ ချက်ဆက်ထားသော ဂေဟစနစ်သည် ကမ္ဘာ့အဆင့်မီ အတွေ့အကြုံကို ပေးစွမ်းရန် ပူးပေါင်းလုပ်ဆောင်သည်။",
//     "about.metrics.local": "ပြည်တွင်းဖန်တီးမှု",
//     "about.metrics.monitoring": "ဆာဗာ စောင့်ကြည့်မှု",
//     "about.cta": "ကျွန်ုပ်တို့၏ ဇာတ်လမ်းအပြည့်အစုံဖတ်ရန်",
//     "about.status.title": "စနစ်များ အွန်လိုင်းပေါ်ရှိသည်",
//     "about.status.desc": "ဆာဗာများအားလုံး အလုပ်လုပ်နေပါသည်",
//     // APK Release
//     "apk.badge": "စောစီးစွာ အသုံးပြုနိုင်မှု / ယာယီ ထုတ်ဝေမှု",
//     "apk.title": '"m" Social App Beta ကို စမ်းသုံးကြည့်ပါ',
//     "apk.desc":
//       "ကျွန်ုပ်တို့၏ လူမှုကွန်ရက် ပလက်ဖောင်းသစ်ကို ပထမဆုံး အသုံးပြုသူများထဲတွင် ပါဝင်လိုက်ပါ။ ၎င်းသည် မြန်မာနိုင်ငံရှိ ကျွန်ုပ်တို့၏ စောစောစီးစီး အားပေးသူများအတွက် ယာယီ APK ထုတ်ဝေမှု ဖြစ်သည်။ Sideloading ပြုလုပ်ရန် လိုအပ်ပါသည်။",
//     "apk.button": "APK ဒေါင်းလုဒ်လုပ်ရန် (v0.1-beta)",
//     "apk.android": "Android 8.0+ သာ ရရှိနိုင်မည်",
//     // Sponsor
//     "sponsor.badge": "ကျွန်ုပ်တို့၏ ရည်မှန်းချက်ကို ကူညီရန်",
//     "sponsor.title": "မြန်မာနိုင်ငံ၏ အနာဂတ်အတွက် ရင်းနှီးမြှုပ်နှံပါ",
//     "sponsor.desc":
//       'မြန်မာနိုင်ငံအတွက် သီးခြားလွတ်လပ်ပြီး စွမ်းဆောင်ရည်မြင့်မားသော အခြေခံအဆောက်အအုံများ တည်ဆောက်ရန်အတွက် အရင်းအမြစ်များစွာ လိုအပ်ပါသည်။ သင်သည် "m" အမှတ်တံဆိပ်၏ မျှော်မှန်းချက်ကို ယုံကြည်ပါက ကျွန်ုပ်တို့ကို ထောက်ပံ့ကူညီရန် စဉ်းစားပေးပါ။',
//     "sponsor.local.title": "ပြည်တွင်း ငွေပေးချေမှု",
//     "sponsor.local.desc":
//       "ပြည်တွင်း ဒစ်ဂျစ်တယ်ပိုက်ဆံအိတ်များ (KBZPay, WavePay) မှတစ်ဆင့် တိုက်ရိုက်ကူညီနိုင်ပါသည်။ မြန်မာနိုင်ငံအတွင်းရှိ ကျွန်ုပ်တို့၏ အားပေးသူများအတွက် အကောင်းဆုံးဖြစ်သည်။",
//     "sponsor.coffee.title": "ကော်ဖီတစ်ခွက် တိုက်ကျွေးပါ",
//     "sponsor.coffee.desc":
//       "သေးငယ်သော အကူအညီတစ်ခုသည် ကျွန်ုပ်တို့၏ ဆာဗာများကို လည်ပတ်စေရန်နှင့် ကျွန်ုပ်တို့၏ developer များအား ခွန်အားဖြစ်စေရန် များစွာ အထောက်အကူပြုသည်။",
//     "sponsor.corporate.title": "လုပ်ငန်းသုံး အလှူရှင်",
//     "sponsor.corporate.desc":
//       "ကျွန်ုပ်တို့၏ ပလက်ဖောင်းပေါ်တွင် ၎င်းတို့၏ လိုဂိုကို ပြသလိုသော လုပ်ငန်းရှင်များအတွက် ဖြစ်သည်။ မြန်မာ့ဒစ်ဂျစ်တယ် အနာဂတ်အတွက် အတူတကွ ပူးပေါင်းဆောင်ရွက်ကြပါစို့။",
//     "sponsor.cta.details": "အသေးစိတ်ကြည့်ရန်",
//     "sponsor.cta.donate": "$၅ လှူဒါန်းရန်",
//     "sponsor.cta.contact": "ဆက်သွယ်ရန်",
//     // Sponsor Modals
//     "sponsor.modal.local.title": "ပြည်တွင်း ဒစ်ဂျစ်တယ်ပိုက်ဆံအိတ်များ",
//     "sponsor.modal.local.kbz": "KBZPay အကောင့်",
//     "sponsor.modal.local.wave": "WaveMoney အကောင့်",
//     "sponsor.modal.local.copy": "နံပါတ်ကူးယူရန်",
//     "sponsor.modal.local.paypal": "PayPal (နိုင်ငံတကာ)",
//     "sponsor.modal.local.thaibank": "ယိုးဒယားဘဏ် (PromptPay)",
//     "sponsor.modal.local.qr": "QR ကုဒ်ပြရန်",
//     "sponsor.modal.donate.title": "ကော်ဖီတစ်ခွက် တိုက်ကျွေးပါ",
//     "sponsor.modal.donate.processing": "လှူဒါန်းမှုကို လုပ်ဆောင်နေပါသည်...",
//     "sponsor.modal.donate.success": "လှူဒါန်းမှု အောင်မြင်ပါသည်!",
//     "sponsor.modal.donate.thanks":
//       "မြန်မာ့ဒစ်ဂျစ်တယ် အနာဂတ်အတွက် ကူညီပေးမှုကို ကျေးဇူးတင်ရှိပါသည်။",
//     "sponsor.modal.close": "ပိတ်ရန်",
//   },
// }

const translations: Record<Language, Record<string, string>> = {
  EN: {
    // Navbar
    "nav.services": "Projects",
    "nav.developers": "API",
    "nav.about": "My Story",
    "nav.team": "Support",
    "nav.news": "Updates",
    "nav.security": "Security",
    "nav.careers": "Collab",
    "nav.sponsor": "Donate",
    "nav.contact": "Contact",
    "nav.getStarted": "Try It Out",
    "nav.support": "Support My Work",
    "nav.faq": "FAQ",

    // Hero
    "hero.badge": "Myanmar Social Network",
    "hero.title1": "Social Network for",
    "hero.title2": "Local Digital Needs",
    "hero.subtitle":
      "Building essential social networking features and developer tools from the ground up, optimized for speed and local performance.",
    "hero.cta.primary": "Download App",
    "hero.cta.secondary": "View Projects",
    "hero.metrics.products": "Active Projects",
    "hero.metrics.uptime": "Server Uptime",
    "hero.metrics.hq": "Based in Myanmar",

    // About
    "about.badge": "About the Project",
    "about.title1": "Building piece by piece",
    "about.title2": "for our community",
    "about.p1":
      'I started <strong className="text-foreground">"m"</strong> on 1/1/2026. My vision is to create lightweight, reliable digital tools that actually work for the people of Myanmar.',
    "about.p2":
      "Right now, I'm focusing on the basics: a fast social app and stable backend servers. It's a journey of learning and building, one line of code at a time.",
    "about.metrics.local": "Solo Developed",
    "about.metrics.monitoring": "Active Server",
    "about.cta": "Follow the Journey",
    "about.status.title": "Systems Online",
    "about.status.desc": "Server is running smoothly",

    // APK Release
    "apk.badge": "Early Beta Release",
    "apk.title": 'Try the "m" Social App',
    "apk.desc":
      "Be an early supporter. This is a basic beta version of my social app project. Manual installation (sideloading) is required.",
    "apk.button": "Download APK (v0.1-beta)",
    "apk.android": "Android 8.0+ Only",

    // Sponsor
    "sponsor.badge": "Fuel the Project",
    "sponsor.title": "Support a Local Developer",
    "sponsor.desc":
      "Building and maintaining servers alone takes a lot of effort and resources. If you find my work useful, consider supporting the project.",
    "sponsor.local.title": "Local Wallets",
    "sponsor.local.desc":
      "Support via KBZPay or WavePay. This is the best way to help me keep the servers running.",
    "sponsor.coffee.title": "Buy Me a Coffee",
    "sponsor.coffee.desc":
      "A small donation helps me stay focused and covers basic hosting costs.",
    "sponsor.corporate.title": "Collaborate",
    "sponsor.corporate.desc":
      "For those who want to help grow this project or use my tools for their business.",
    "sponsor.cta.details": "View Details",
    "sponsor.cta.donate": "Donate $5",
    "sponsor.cta.contact": "Get in Touch",

    // Sponsor Modals
    "sponsor.modal.local.title": "Local Digital Wallets",
    "sponsor.modal.local.kbz": "KBZPay Account",
    "sponsor.modal.local.wave": "WaveMoney Account",
    "sponsor.modal.local.copy": "Copy Number",
    "sponsor.modal.local.paypal": "PayPal",
    "sponsor.modal.local.thaibank": "Thai Bank (PromptPay)",
    "sponsor.modal.local.qr": "Show QR Code",
    "sponsor.modal.donate.title": "Buy Me a Coffee",
    "sponsor.modal.donate.processing": "Processing...",
    "sponsor.modal.donate.success": "Thank you so much!",
    "sponsor.modal.donate.thanks":
      "Your support keeps this project alive. I appreciate it!",
    "sponsor.modal.close": "Close",

    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.desc":
      "Got questions about our beta release or ecosystem? We've got answers.",
    "faq.q1": "What makes the 'm' social app different from others?",
    "faq.a1":
      "Our platform is built from the ground up for Myanmar. This means native support for local languages, optimized data usage for local telecom networks, and a community focus that resonates with local culture.",
    "faq.q2": "Is the early access APK safe to install?",
    "faq.a2":
      "Yes. The APK provided in our beta release is compiled directly by our team. While you need to enable 'Install from Unknown Sources' to sideload it, it contains no malware and undergoes strict security checks.",
    "faq.q3": "How can I sponsor or partner with 'm' social?",
    "faq.a3":
      "You can use the local payment options in the Sponsor section above for direct contributions. For corporate partnerships or larger sponsorships, please use the Contact form, and our team will reach out.",
    "faq.q4": "Do you offer API access for third-party developers?",
    "faq.a4":
      "Yes, our robust server infrastructure is designed to be extensible. We will be releasing developer documentation and API keys for third-party integrations in Q3 of this year.",

    // Security
    "security.badge": "Cybersecurity First",
    "security.title1": "Welcome, Pentesters.",
    "security.title2": "Help us secure Myanmar.",
    "security.desc":
      "At <span class=\"font-semibold text-white\">'m'</span>, user privacy and data security are our highest priorities. We recognize the vital role that security researchers play in keeping the ecosystem safe.",
    "security.disclosure.title": "Responsible Disclosure",
    "security.disclosure.desc":
      "Found a vulnerability? We invite you to report it through our responsible disclosure program. We promise to review all submissions within 48 hours.",
    "security.halloffame.title": "Hall of Fame",
    "security.halloffame.desc":
      "Researchers who help us secure our infrastructure will be permanently recognized on our official Hall of Fame.",
    "security.terminal.header": "ENCRYPTED_CORE_SEC",
    "security.terminal.status": "Status: Vigilant",
    "security.terminal.sys": "[SYSTEM] Initializing security audit...",
    "security.terminal.info1": "[INFO] Scanning endpoint: /api/v1/auth/verify",
    "security.terminal.ok": "[OK] End-to-end encryption active",
    "security.terminal.warn":
      "[WARN] 12 unauthorized attempts blocked from 103.x.x.x",
    "security.terminal.info2":
      "[INFO] Integrity check: [####################] 100%",
    "security.terminal.comment1": "// We welcome researchers to test our ",
    "security.terminal.comment2": "// defenses and help protect Myanmar's",
    "security.terminal.comment3": "// digital infrastructure.",
    "security.terminal.contact": "$ contact: security@m.com",
    "security.scope.title": "Target Testing Scope (Queue)",
    "security.scope.target1": "API Auth Endpoints",
    "security.scope.target2": "Data Encryption Layer",
    "security.scope.target3": "User Metadata Storage",
    "security.scope.target4": "Sponsorship Payment Gateways",
    "security.scope.priority": "Priority",
    "security.scope.status.active": "Active",
    "security.scope.status.monitoring": "Monitoring",
    "security.remediation.title": "Remediation & Fix Process",
    "security.remediation.step1.title": "Verification",
    "security.remediation.step1.desc":
      "Our security team replicates and validates the vulnerability report.",
    "security.remediation.step2.title": "Patching",
    "security.remediation.step2.desc":
      "Developers roll out a hotfix to our isolated staging environment.",
    "security.remediation.step3.title": "Audit",
    "security.remediation.step3.desc":
      "Independent security review to ensure the fix doesn't create regressions.",
    "security.remediation.step4.title": "Deployment",
    "security.remediation.step4.desc":
      "Zero-downtime deployment to all Myanmar server nodes.",

    // Footer
    "footer.desc":
      "Empowering Myanmar's digital landscape with cutting-edge social connectivity and robust infrastructure.",
    "footer.newsletter.title": "Subscribe to updates",
    "footer.newsletter.placeholder": "email@example.com",
    "footer.newsletter.button": "Join",
    "footer.newsletter.success": "Thanks for subscribing!",
    "footer.newsletter.error": "Something went wrong. Please try again.",
    "footer.solutions.title": "Solutions",
    "footer.solutions.app": "Social App Ecosystem",
    "footer.solutions.analytics": "Analytics Dashboard",
    "footer.company.title": "Company",
    "footer.company.about": "About Us",
    "footer.company.privacy": "Privacy Policy",
    "footer.company.terms": "Terms of Service",
    "footer.connect.title": "Connect",
    "footer.connect.myanmar": "Myanmar",
    "footer.copyright": "© {year} 'm' social platform. All rights reserved.",
    "footer.madeWith": "Made with ❤️ in Myanmar",
  },
  MM: {
    // Navbar
    "nav.services": "ပရောဂျက်များ",
    "nav.developers": "API များ",
    "nav.about": "ကျွန်တော့်အကြောင်း",
    "nav.team": "ဝန်းရံသူများ",
    "nav.news": "သတင်းများ",
    "nav.security": "လုံခြုံရေး",
    "nav.careers": "ပူးပေါင်းရန်",
    "nav.sponsor": "ထောက်ပံ့ရန်",
    "nav.contact": "ဆက်သွယ်ရန်",
    "nav.getStarted": "စတင်ရန်",
    "nav.support": "ကျွန်တော့်ကို ကူညီရန်",
    "nav.faq": "အမေးအဖြေ",

    // Hero
    "hero.badge": "မြန်မာ့ လူမှုကွန်ရက်",
    "hero.title1": "မြန်မာနိုင်ငံသားများအတွက်",
    "hero.title2": "အခြေခံ လူမှုကွန်ရက်",
    "hero.subtitle":
      "မြန်မာနိုင်ငံ၏ လိုအပ်ချက်နှင့် ကိုက်ညီမည့် အခြေခံ လူမှုကွန်ရက်နှင့် နည်းပညာဝန်ဆောင်မှုများကို အစွမ်းကုန် ကြိုးစားတည်ဆောက်နေပါသည်။",
    "hero.cta.primary": "App ဒေါင်းလုဒ်လုပ်ရန်",
    "hero.cta.secondary": "လေ့လာကြည့်ရှုရန်",
    "hero.metrics.products": "လက်ရှိပရောဂျက်",
    "hero.metrics.uptime": "Server အလုပ်လုပ်နှုန်း",
    "hero.metrics.hq": "မြန်မာနိုင်ငံအခြေစိုက်",

    // About
    "about.badge": "Project အကြောင်း",
    "about.title1": "မြန်မာ့ဒစ်ဂျစ်တယ် အသိုက်အဝန်းအတွက်",
    "about.title2": "တစ်ဆင့်ချင်း တည်ဆောက်နေပါသည်။",
    "about.p1":
      '<strong className="text-foreground">"m"</strong> ကို ရန်ကုန်မြို့မှာ တစ်ဦးတည်း developer အနေနဲ့ စတင်ခဲ့တာပါ။ ဒေသခံအသုံးပြုသူတွေအတွက် အမှန်တကယ် အသုံးဝင်မယ့် ရိုးရှင်းမြန်ဆန်တဲ့ tool တွေ ဖန်တီးပေးဖို့ ရည်ရွယ်ပါတယ်။',
    "about.p2":
      "လက်ရှိမှာ အခြေခံအကျဆုံးဖြစ်တဲ့ Social App နဲ့ Backend API တွေကို အာရုံစိုက် တည်ဆောက်နေပါတယ်။ တစ်ဦးတည်း လုပ်ဆောင်နေတာဖြစ်လို့ လိုအပ်ချက်တွေ ရှိနိုင်ပေမဲ့ အမြဲမပြတ် ပိုကောင်းအောင် ပြင်ဆင်သွားမှာပါ။",
    "about.metrics.local": "တစ်ဦးတည်း ဖန်တီးမှု",
    "about.metrics.monitoring": "Server အခြေအနေ",
    "about.cta": "ဆက်လက်လေ့လာရန်",
    "about.status.title": "စနစ်များ အွန်လိုင်းပေါ်ရှိသည်",
    "about.status.desc": "Server ပုံမှန်အလုပ်လုပ်နေပါသည်",

    // APK Release
    "apk.badge": "စမ်းသပ်အသုံးပြုရန် (Beta Version)",
    "apk.title": '"m" Social App Beta ကို စမ်းသုံးကြည့်ပါ',
    "apk.desc":
      "ကျွန်တော့်ရဲ့ Social Platform အသစ်ကို အဦးဆုံး စမ်းသပ်အသုံးပြုသူများထဲမှာ ပါဝင်လိုက်ပါ။ ၎င်းသည် စောစီးစွာ အားပေးသူများအတွက် ယာယီထုတ်ဝေထားသော APK ဖြစ်ပြီး ဖုန်းထဲသို့ ထည့်သွင်းရန် Sideloading ပြုလုပ်ရပါမည်။",
    "apk.button": "APK ဒေါင်းလုဒ်လုပ်ရန် (v0.1-beta)",
    "apk.android": "Android 8.0 နှင့် အထက်သာ",

    // Sponsor
    "sponsor.badge": "ပရောဂျက်အတွက် အထောက်အပံ့",
    "sponsor.title": "မြန်မာ့လူမှုကွန်ရက် တစ်ခုအတွက်",
    "sponsor.desc":
      "ဖန်တီးသူ တစ်ဦးတည်း အနေနဲ့ ကိုယ်ပိုင်စွမ်းဆောင်ရည်မြင့် နည်းပညာများ တည်ဆောက်ရန်နှင့် Computer Server (ကွန်ပျုတာ ဆာဗာ) ဖိုးများအတွက် အရင်းအမြစ်များစွာ လိုအပ်ပါသည်။ ကျွန်တော့်ရဲ့ ကြိုးစားမှုကို ယုံကြည်ရင် ထောက်ပံ့ကူညီပေးနိုင်ပါတယ်။",
    "sponsor.local.title": "ပြည်တွင်း ငွေပေးချေမှုစနစ်များ",
    "sponsor.local.desc":
      "KBZPay သို့မဟုတ် CB Bank တို့နဲ့ တိုက်ရိုက်ကူညီနိုင်ပါတယ်။ ဒါဟာ ကျွန်တော့်ရဲ့ Server တွေကို ဆက်လက်လည်ပတ်နိုင်ဖို့ အကောင်းဆုံး အထောက်အပံ့ ဖြစ်ပါတယ်။",
    "sponsor.coffee.title": "ကော်ဖီတစ်ခွက် တိုက်ကျွေးပါ",
    "sponsor.coffee.desc":
      "သေးငယ်တဲ့ အကူအညီတစ်ခုဟာ ကျွန်တော့်ကို အလုပ်အာရုံစိုက်နိုင်စေဖို့နဲ့ Server ကုန်ကျစရိတ်တွေအတွက် များစွာ အထောက်အကူပြုပါတယ်။",
    "sponsor.corporate.title": "ပူးပေါင်းဆောင်ရွက်ရန်",
    "sponsor.corporate.desc":
      "ဤ Project ကို အတူတူ ကြီးထွားလာအောင် လုပ်ဆောင်ချင်သူများ သို့မဟုတ် ကျွန်တော့်ရဲ့ tool တွေကို လုပ်ငန်းသုံးဖို့ စိတ်ဝင်စားသူများအတွက်ပါ။",
    "sponsor.cta.details": "အသေးစိတ်ကြည့်ရန်",
    "sponsor.cta.donate": "$၅ လှူဒါန်းရန်",
    "sponsor.cta.contact": "ဆက်သွယ်ရန်",

    // Sponsor Modals
    "sponsor.modal.local.title": "ပြည်တွင်း ဒစ်ဂျစ်တယ် ပိုက်ဆံအိတ်များ",
    "sponsor.modal.local.kbz": "KBZPay အကောင့်",
    "sponsor.modal.local.wave": "CB Bank အကောင့်",
    "sponsor.modal.local.copy": "နံပါတ်ကူးယူရန်",
    "sponsor.modal.local.paypal": "PayPal",
    "sponsor.modal.local.thaibank": "ယိုးဒယားဘဏ် (PromptPay)",
    "sponsor.modal.local.qr": "QR ကုဒ်ပြရန်",
    "sponsor.modal.donate.title": "လက်ဖက်ရည်ဖိုး",
    "sponsor.modal.donate.processing": "လုပ်ဆောင်နေပါသည်...",
    "sponsor.modal.donate.success": "အထူးကျေးဇူးတင်ရှိပါသည်!",
    "sponsor.modal.donate.thanks":
      "မြန်မာ့ဒစ်ဂျစ်တယ် အနာဂတ်အတွက် ကူညီပေးမှုကို အထူးကျေးဇူးတင်ရှိပါသည်။",
    "sponsor.modal.close": "ပိတ်ရန်",

    // FAQ
    "faq.title": "အမေးများသော မေးခွန်းများ",
    "faq.desc":
      "Beta ဗားရှင်း သို့မဟုတ် ကျွန်ုပ်တို့၏ ဂေဟစနစ်နှင့် ပတ်သက်ပြီး သိလိုသည်များ ရှိပါသလား? ဤနေရာတွင် အဖြေများ ရှိပါသည်။",
    "faq.q1": "'m' social app က တခြား app တွေနဲ့ ဘာကွာခြားပါသလဲ?",
    "faq.a1":
      "ကျွန်ုပ်တို့၏ ပလက်ဖောင်းကို မြန်မာနိုင်ငံအတွက် အခြေခံမှစ၍ တည်ဆောက်ထားခြင်း ဖြစ်ပါသည်။ ဆိုလိုသည်မှာ မြန်မာဘာသာစကားကို အပြည့်အဝ ထောက်ခံပေးခြင်း၊ ပြည်တွင်း အော်ပရေတာများ၏ ကွန်ရက်များနှင့် ကိုက်ညီအောင် ဒေတာအသုံးပြုမှုကို လျှော့ချထားခြင်းနှင့် မြန်မာ့ယဉ်ကျေးမှုနှင့် ကိုက်ညီသော လူမှုဝန်းကျင်ကို အဓိကထားခြင်းတို့ ဖြစ်ပါသည်။",
    "faq.q2":
      "စမ်းသပ်အသုံးပြုရန် ထုတ်ဝေထားသော APK ကို ထည့်သွင်းရန် စိတ်ချရပါသလား?",
    "faq.a2":
      "ဟုတ်ကဲ့ စိတ်ချရပါသည်။ ကျွန်ုပ်တို့၏ beta release တွင် ပေးထားသော APK သည် ကျွန်ုပ်တို့အဖွဲ့ကိုယ်တိုင် တိုက်ရိုက်ထုတ်လုပ်ထားခြင်း ဖြစ်ပါသည်။ 'Install from Unknown Sources' ကို ခွင့်ပြုရန် လိုအပ်သော်လည်း မည်သည့် malware မှ မပါဝင်ဘဲ လုံခြုံရေး စစ်ဆေးမှုများ ပြုလုပ်ထားပါသည်။",
    "faq.q3": "'m' social ကို ဘယ်လို ထောက်ပံ့ပေးနိုင်မလဲ?",
    "faq.a3":
      "အထက်ဖော်ပြပါ Sponsor ကဏ္ဍရှိ ပြည်တွင်း ငွေပေးချေမှုစနစ်များမှတစ်ဆင့် တိုက်ရိုက်ထောက်ပံ့နိုင်ပါသည်။ လုပ်ငန်းအလိုက် ပူးပေါင်းဆောင်ရွက်လိုပါက Contact form မှတစ်ဆင့် ဆက်သွယ်နိုင်ပြီး ကျွန်ုပ်တို့အဖွဲ့မှ ပြန်လည်ဆက်သွယ်ပေးပါမည်။",
    "faq.q4": "တခြား developer များအတွက် API အသုံးပြုခွင့် ပေးပါသလား?",
    "faq.a4":
      "ဟုတ်ကဲ့ ပေးပါသည်။ ကျွန်ုပ်တို့၏ server အခြေခံအဆောက်အအုံကို ချဲ့ထွင်နိုင်အောင် ဒီဇိုင်းထုတ်ထားပါသည်။ ယခုနှစ် တတိယသုံးလပတ် (Q3) တွင် developer documentation နှင့် API keys များကို ထုတ်ပြန်ပေးသွားပါမည်။",

    // Security
    "security.badge": "ဆိုက်ဘာလုံခြုံရေး ဦးစားပေး",
    "security.title1": "Pentester များ ကြိုဆိုပါတယ်",
    "security.title2": "မြန်မာနိုင်ငံအတွက် လုံခြုံရေးကို ကူညီပေးပါ",
    "security.desc":
      "<span class=\"font-semibold text-white\">'m'</span> တွင် အသုံးပြုသူများ၏ ကိုယ်ရေးအချက်အလက် လုံခြုံရေးသည် ကျွန်ုပ်တို့၏ အဓိက ဦးစားပေး ဖြစ်ပါသည်။ စနစ်လုံခြုံရေးအတွက် သုတေသီများ၏ အရေးပါသော အခန်းကဏ္ဍကို ကျွန်ုပ်တို့ အသိအမှတ်ပြုပါသည်။",
    "security.disclosure.title": "တာဝန်ယူမှုရှိသော ထုတ်ဖော်မှု",
    "security.disclosure.desc":
      "လုံခြုံရေး အားနည်းချက် တွေ့ရှိပါသလား? ကျွန်ုပ်တို့၏ responsible disclosure program မှတစ်ဆင့် တိုင်ကြားနိုင်ပါသည်။ တိုင်ကြားချက်များကို ၄၈ နာရီအတွင်း စစ်ဆေးပေးသွားမည်ဟု ကတိပြုပါသည်။",
    "security.halloffame.title": "Hall of Fame (ဂုဏ်ပြုမှတ်တမ်း)",
    "security.halloffame.desc":
      "ကျွန်ုပ်တို့၏ အခြေခံအဆောက်အအုံကို ပိုမိုလုံခြုံအောင် ကူညီပေးသော သုတေသီများကို ကျွန်ုပ်တို့၏ Hall of Fame တွင် အမြဲတမ်း မှတ်တမ်းတင် ဂုဏ်ပြုသွားမည် ဖြစ်ပါသည်။",
    "security.terminal.header": "ENCRYPTED_CORE_SEC",
    "security.terminal.status": "အခြေအနေ: စောင့်ကြည့်နေသည်",
    "security.terminal.sys": "[SYSTEM] လုံခြုံရေးစစ်ဆေးမှု စတင်နေသည်...",
    "security.terminal.info1":
      "[INFO] endpoint ကို စစ်ဆေးနေသည်: /api/v1/auth/verify",
    "security.terminal.ok": "[OK] End-to-end encryption အလုပ်လုပ်နေသည်",
    "security.terminal.warn":
      "[WARN] 103.x.x.x မှ ခွင့်ပြုချက်မရှိဘဲ ကြိုးပမ်းမှု ၁၂ ကြိမ်ကို တားဆီးထားသည်",
    "security.terminal.info2":
      "[INFO] Integrity စစ်ဆေးမှု: [####################] 100%",
    "security.terminal.comment1": "// ကျွန်ုပ်တို့၏ စနစ်များကို စမ်းသပ်ပြီး ",
    "security.terminal.comment2": "// မြန်မာနိုင်ငံ၏ ဒစ်ဂျစ်တယ် လုံခြုံရေးကို",
    "security.terminal.comment3": "// ကူညီကာကွယ်ပေးရန် ဖိတ်ခေါ်ပါသည်။",
    "security.terminal.contact": "$ ဆက်သွယ်ရန်: security@m.com",
    "security.scope.title": "စစ်ဆေးရန် သတ်မှတ်ထားသော နယ်ပယ်များ",
    "security.scope.target1": "API Auth Endpoints",
    "security.scope.target2": "Data Encryption Layer",
    "security.scope.target3": "User Metadata Storage",
    "security.scope.target4": "Sponsorship Payment Gateways",
    "security.scope.priority": "ဦးစားပေး",
    "security.scope.status.active": "စစ်ဆေးနေဆဲ",
    "security.scope.status.monitoring": "စောင့်ကြည့်နေဆဲ",
    "security.remediation.title": "အားနည်းချက် ပြင်ဆင်မှု လုပ်ငန်းစဉ်",
    "security.remediation.step1.title": "စစ်ဆေးအတည်ပြုခြင်း (Verification)",
    "security.remediation.step1.desc":
      "ကျွန်ုပ်တို့၏ လုံခြုံရေးအဖွဲ့မှ တိုင်ကြားချက်ကို ပြန်လည်စမ်းသပ် အတည်ပြုပါသည်။",
    "security.remediation.step2.title": "Patching (ပြင်ဆင်ခြင်း)",
    "security.remediation.step2.desc":
      "Developer များမှ ပြင်ဆင်ချက်ကို သီးခြား staging environment တွင် စတင်လုပ်ဆောင်ပါသည်။",
    "security.remediation.step3.title": "Audit (စစ်ဆေးခြင်း)",
    "security.remediation.step3.desc":
      "ပြင်ဆင်ချက်ကြောင့် တခြားစနစ်များ ထိခိုက်မှုရှိမရှိ လွတ်လပ်သော အဖွဲ့မှ ပြန်လည်စစ်ဆေးပါသည်။",
    "security.remediation.step4.title": "Deployment (ဖြန့်ဝေခြင်း)",
    "security.remediation.step4.desc":
      "ပြင်ဆင်ပြီးသော စနစ်ကို မြန်မာပြည်ရှိ server များအားလုံးသို့ downtime မရှိဘဲ ဖြန့်ဝေပါသည်။",

    // Footer
    "footer.desc":
      "မြန်မာနိုင်ငံ၏ ဒစ်ဂျစ်တယ်ကမ္ဘာကို ခေတ်မီလူမှုကွန်ရက်နှင့် ခိုင်မာသော နည်းပညာအခြေခံအဆောက်အအုံများဖြင့် အားဖြည့်ပေးနေပါသည်။",
    "footer.newsletter.title": "နောက်ဆုံးရသတင်းများ ရယူရန်",
    "footer.newsletter.placeholder": "email@example.com",
    "footer.newsletter.button": "စာရင်းသွင်းရန်",
    "footer.newsletter.success": "စာရင်းသွင်းမှု အောင်မြင်ပါသည်။ ကျေးဇူးတင်ပါသည်။",
    "footer.newsletter.error": "တစ်ခုခုမှားယွင်းနေပါသည်။ ပြန်လည်ကြိုးစားပေးပါ။",
    "footer.solutions.title": "ဝန်ဆောင်မှုများ",
    "footer.solutions.app": "Social App ဂေဟစနစ်",
    "footer.solutions.analytics": "Analytics Dashboard",
    "footer.company.title": "ကုမ္ပဏီ" ,
    "footer.company.about": "ကျွန်ုပ်တို့အကြောင်း",
    "footer.company.privacy": "ကိုယ်ရေးအချက်အလက် မူဝါဒ",
    "footer.company.terms": "စည်းကမ်းသတ်မှတ်ချက်များ",
    "footer.connect.title": "ဆက်သွယ်ရန်",
    "footer.connect.myanmar": "မြန်မာနိုင်ငံ",
    "footer.copyright": "© {year} 'm' social platform. မူပိုင်ခွင့်အားလုံး ရရှိပြီးဖြစ်သည်။",
    "footer.madeWith": "မြန်မာနိုင်ငံတွင် ❤️ ဖြင့် ဖန်တီးထားပါသည်။",
  },
}
const LanguageContext = React.createContext<LanguageContextType | undefined>(
  undefined
)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = React.useState<Language>("EN")

  // Simple translation function
  const t = React.useCallback(
    (key: string) => {
      return translations[lang][key] || key
    },
    [lang]
  )

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
