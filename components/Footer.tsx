"use client"

import * as React from "react"
import Link from "next/link"
import { Mail, MapPin, Phone, Loader2, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/components/LanguageProvider"
import { SITE_CONFIG } from "@/lib/config"

export function Footer() {
  const { t } = useLanguage()
  const [email, setEmail] = React.useState("")
  const [status, setStatus] = React.useState<
    "idle" | "loading" | "success" | "error"
  >("idle")

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus("loading")
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        setStatus("success")
        setEmail("")
      } else {
        setStatus("error")
      }
    } catch (err) {
      setStatus("error")
    }
  }

  return (
    <footer className="border-t bg-muted/40 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12 md:py-16 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand & Newsletter */}
          <div className="col-span-1 md:col-span-1">
            <Link
              href="/"
              className="group mb-6 flex items-center gap-2"
              aria-label="m Myanmar Social Home"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xl font-bold text-primary-foreground">
                m
              </div>
              <span className="text-xl font-semibold tracking-tight">
                myanmar social
              </span>
            </Link>
            <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
              {t("footer.desc")}
            </p>

            <form className="space-y-3" onSubmit={handleSubscribe}>
              <label
                htmlFor="newsletter-email"
                className="text-xs font-bold tracking-widest text-muted-foreground uppercase"
              >
                {t("footer.newsletter.title")}
              </label>

              {status === "success" ? (
                <div className="flex items-center gap-2 rounded-lg border border-green-500/20 bg-green-500/10 px-3 py-2 text-sm text-green-600 dark:text-green-500">
                  <CheckCircle2 className="h-4 w-4" />
                  {t("footer.newsletter.success")}
                </div>
              ) : (
                <div className="relative flex gap-2">
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("footer.newsletter.placeholder")}
                    disabled={status === "loading"}
                    className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-xs outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
                    aria-label="Email for newsletter"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading" || !email}
                    className="flex min-w-[60px] items-center justify-center rounded-lg bg-primary px-3 py-2 text-xs font-bold text-primary-foreground transition-all hover:brightness-110 disabled:opacity-50"
                    aria-label="Join newsletter"
                  >
                    {status === "loading" ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      t("footer.newsletter.button")
                    )}
                  </button>
                </div>
              )}
              {status === "error" && (
                <p className="text-xs text-red-500">
                  {t("footer.newsletter.error")}
                </p>
              )}
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 font-semibold">{t("footer.solutions.title")}</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {t("footer.solutions.app")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {t("footer.solutions.analytics")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-6 font-semibold">{t("footer.company.title")}</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#about"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {t("footer.company.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {t("footer.company.privacy")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {t("footer.company.terms")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 font-semibold">{t("footer.connect.title")}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{t("footer.connect.myanmar")}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span>{SITE_CONFIG.links.support}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span>{SITE_CONFIG.links.phone}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            {t("footer.copyright").replace("{year}", new Date().getFullYear().toString())}
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{t("footer.madeWith")}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
