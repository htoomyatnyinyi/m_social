"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Globe2 } from "lucide-react"
import { useLanguage } from "@/components/LanguageProvider"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute -top-[40%] -left-[10%] w-[70%] h-[70%] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] -right-[20%] w-[60%] h-[60%] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />

      <div className="container relative mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-muted-foreground">{t("hero.badge")}</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            {t("hero.title1")} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
              {t("hero.title2")}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
            {t("hero.subtitle")}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <a href="/m-social-v0.2-beta.apk" download className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto gap-2 rounded-full text-md h-14 px-8 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
                {t("hero.cta.primary")}
                <ArrowRight className="w-5 h-5" />
              </Button>

            </a>
            {/* <a href="#features" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 rounded-full text-md h-14 px-8 bg-background/50 backdrop-blur-sm border-border hover:bg-accent/50 transition-all">
                <Globe2 className="w-5 h-5" />
                {t("hero.cta.secondary")}
              </Button>
            </a> */}
          </div>

          {/* Metrics/Trust signals */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-border/50 animate-in fade-in duration-1000 delay-500">
            <div>
              <div className="text-3xl font-bold mb-1">3+</div>
              <div className="text-sm text-muted-foreground">{t("hero.metrics.products")}</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">99.9%</div>
              <div className="text-sm text-muted-foreground">{t("hero.metrics.uptime")}</div>
            </div>
            <div className="hidden md:block">
              <div className="text-3xl font-bold mb-1">Yangon</div>
              <div className="text-sm text-muted-foreground">{t("hero.metrics.hq")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
