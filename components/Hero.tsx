"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Globe2 } from "lucide-react"
import { useLanguage } from "@/components/LanguageProvider"
import { SITE_CONFIG } from "@/lib/config"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-background" />
      <div className="pointer-events-none absolute -top-[40%] -left-[10%] h-[70%] w-[70%] rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-[20%] -right-[20%] h-[60%] w-[60%] rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex animate-in items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 duration-700 fade-in slide-in-from-bottom-4">
            <span className="flex h-2 w-2 animate-pulse rounded-full bg-primary bg-sky-500" />
            <span className="text-xs font-medium text-muted-foreground">
              {t("hero.badge")}
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-8 animate-in text-5xl font-extrabold tracking-tight duration-1000 fade-in slide-in-from-bottom-6 md:text-7xl">
            {t("hero.title1")} <br className="hidden md:block" />
            <br />
            <span className="text-transparentx bg-gradient-to-r from-primary to-blue-600 bg-clip-text">
              {t("hero.title2")}
            </span>
          </h1>
          <br />

          {/* Subtitle */}
          <p className="mx-auto mb-12 max-w-2xl animate-in text-lg leading-relaxed text-muted-foreground delay-150 duration-1000 fade-in slide-in-from-bottom-8 md:text-xl">
            {t("hero.subtitle")}
          </p>

          {/* CTAs */}
          <div className="flex animate-in flex-col items-center justify-center gap-4 delay-300 duration-1000 slide-in-from-bottom-10 fade-in sm:flex-row">
            <a
              href={SITE_CONFIG.apkDownloadUrl}
              download
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="text-md h-14 w-full gap-2 rounded-full px-8 shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 sm:w-auto"
              >
                {t("hero.cta.primary")}
                <ArrowRight className="h-5 w-5" />
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
          {/* <div className="mt-20 grid animate-in grid-cols-2 gap-8 border-t border-border/50 pt-8 delay-500 duration-1000 fade-in md:grid-cols-3">
            <div>
              <div className="mb-1 text-3xl font-bold">3+</div>
              <div className="text-sm text-muted-foreground">
                {t("hero.metrics.products")}
              </div>
            </div>
            <div>
              <div className="mb-1 text-3xl font-bold">95.9%</div>
              <div className="text-sm text-muted-foreground">
                {t("hero.metrics.uptime")}
              </div>
            </div>
            <div className="hidden md:block">
              <div className="mb-1 text-3xl font-bold">Coming Soon</div>
              <div className="text-sm text-muted-foreground">
                {t("hero.metrics.hq")}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
