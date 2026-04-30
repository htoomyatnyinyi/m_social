"use client"

import { Button } from "@/components/ui/button"
import { Download, Smartphone, AlertCircle } from "lucide-react"
import { useLanguage } from "@/components/LanguageProvider"
import { SITE_CONFIG } from "@/lib/config"

export function ApkRelease() {
  const { t } = useLanguage()

  return (
    <section className="relative border-y border-primary/10 bg-primary/5 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl border border-primary/20 bg-background p-8 shadow-lg shadow-primary/5 md:flex-row">
          {/* Decorative background */}
          <div className="pointer-events-none absolute top-0 right-0 -mt-32 -mr-32 h-64 w-64 rounded-full bg-primary/10 blur-[80px]" />

          <div className="z-10 flex-1">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-xs font-semibold text-yellow-600 dark:text-yellow-500">
              <AlertCircle className="h-3.5 w-3.5" />
              {t("apk.badge")}
            </div>
            <h2 className="mb-3 text-2xl font-bold tracking-tight md:text-3xl">
              {t("apk.title")}
            </h2>
            <p className="mb-6 max-w-xl text-muted-foreground">
              {t("apk.desc")}
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <a
                href={SITE_CONFIG.apkDownloadUrl}
                download
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="text-md group h-12 w-full gap-2 rounded-xl shadow-md shadow-primary/20 sm:w-auto"
                >
                  <Download className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
                  {t("apk.button")}
                </Button>
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Smartphone className="h-4 w-4" />
                {t("apk.android")}
              </div>
            </div>
          </div>

          {/* Visual abstract for the app */}
          <div className="relative z-10 hidden h-48 w-48 shrink-0 md:flex">
            <div className="absolute inset-0 rotate-6 rounded-3xl bg-gradient-to-br from-primary to-blue-500 opacity-20" />
            <div className="absolute inset-0 flex -rotate-3 items-center justify-center rounded-3xl border border-border bg-background shadow-xl">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-4xl font-bold text-primary-foreground shadow-inner">
                m
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
