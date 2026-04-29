"use client"

import { Button } from "@/components/ui/button"
import { Download, Smartphone, AlertCircle } from "lucide-react"
import { useLanguage } from "@/components/LanguageProvider"

export function ApkRelease() {
  const { t } = useLanguage()

  return (
    <section className="py-12 bg-primary/5 relative border-y border-primary/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-background border border-primary/20 p-8 rounded-3xl shadow-lg shadow-primary/5 relative overflow-hidden">

          {/* Decorative background */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />

          <div className="flex-1 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 text-xs font-semibold mb-4 border border-yellow-500/20">
              <AlertCircle className="w-3.5 h-3.5" />
              {t("apk.badge")}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
              {t("apk.title")}
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl">
              {t("apk.desc")}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="/m-social-v0.2-beta.apk" download className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto gap-2 rounded-xl text-md h-12 shadow-md shadow-primary/20 group">
                  <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                  {t("apk.button")}
                </Button>
              </a>
              <div className="text-sm text-muted-foreground flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                {t("apk.android")}
              </div>
            </div>
          </div>

          {/* Visual abstract for the app */}
          <div className="hidden md:flex w-48 h-48 relative z-10 shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-500 rounded-3xl rotate-6 opacity-20" />
            <div className="absolute inset-0 bg-background border border-border rounded-3xl -rotate-3 flex items-center justify-center shadow-xl">
              <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-4xl shadow-inner">
                m
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
