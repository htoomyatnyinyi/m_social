"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/LanguageProvider"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="overflow-hidden py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              {t("about.badge")}
            </div>
            <h2 className="mb-6 text-3xl leading-tight font-bold tracking-tight md:text-5xl">
              {t("about.title1")} <br />
              {t("about.title2")}
            </h2>
            <p
              className="mb-6 text-lg leading-relaxed text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: t("about.p1") }}
            />
            <p
              className="mb-8 text-lg leading-relaxed text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: t("about.p2") }}
            />

            <div className="mb-8 grid grid-cols-2 gap-6">
              <div className="border-l-2 border-primary pl-4">
                <div className="mb-1 text-3xl font-bold">100%</div>
                <div className="text-sm text-muted-foreground">
                  {t("about.metrics.local")}
                </div>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <div className="mb-1 text-3xl font-bold">24/7</div>
                <div className="text-sm text-muted-foreground">
                  {t("about.metrics.monitoring")}
                </div>
              </div>
            </div>

            {/* <Button size="lg" className="rounded-full">
              {t("about.cta")}
            </Button> */}
          </div>

          {/* Visual Content (Abstract/Generated graphic placeholder) */}
          <div className="relative order-1 lg:order-2">
            <div className="relative mx-auto aspect-square w-full max-w-md md:aspect-[4/3] lg:aspect-square lg:max-w-none">
              {/* Decorative shapes instead of direct image to ensure it looks good without assets */}
              <div className="absolute inset-0 rotate-3 transform rounded-[2.5rem] bg-gradient-to-tr from-primary/20 to-blue-500/20" />
              <div className="absolute inset-0 flex flex-col overflow-hidden rounded-[2.5rem] border border-border/50 bg-background shadow-2xl">
                {/* Mock UI Header */}
                <div className="flex h-12 items-center gap-2 border-b bg-muted/30 px-4">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                {/* Mock UI Content */}
                <div className="bg-grid-pattern relative flex flex-1 flex-col gap-6 p-8">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                  <div className="relative z-10 h-32 w-full rounded-2xl bg-gradient-to-r from-primary/20 to-blue-500/20" />
                  <div className="relative z-10 h-8 w-3/4 rounded-lg bg-muted" />
                  <div className="relative z-10 h-4 w-full rounded bg-muted/50" />
                  <div className="relative z-10 h-4 w-5/6 rounded bg-muted/50" />

                  {/* Floating badge */}
                  <div className="animate-bounce-slow absolute -right-6 bottom-12 z-20 flex items-center gap-4 rounded-2xl border bg-background p-4 shadow-xl">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 font-bold text-green-500">
                      ✓
                    </div>
                    <div>
                      <div className="text-sm font-bold">
                        {t("about.status.title")}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {t("about.status.desc")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
