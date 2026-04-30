"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Heart,
  Coffee,
  Wallet,
  Copy,
  CheckCircle2,
  Loader2,
} from "lucide-react"
import { useLanguage } from "@/components/LanguageProvider"
import { Modal } from "@/components/Modal"

export function Sponsor() {
  const { t } = useLanguage()
  const [activeModal, setActiveModal] = React.useState<
    "local" | "donate" | null
  >(null)
  const [donateStatus, setDonateStatus] = React.useState<
    "idle" | "processing" | "success"
  >("idle")
  const [copiedType, setCopiedType] = React.useState<string | null>(null)
  const [showQR, setShowQR] = React.useState(false)

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopiedType(type)
    setTimeout(() => setCopiedType(null), 2000)
  }

  const handleDonate = () => {
    setDonateStatus("processing")
    setTimeout(() => {
      setDonateStatus("success")
    }, 2000)
  }

  const closeModals = () => {
    setActiveModal(null)
    setDonateStatus("idle")
    setShowQR(false)
  }

  return (
    <section
      id="sponsor"
      className="relative overflow-hidden border-t bg-background py-24"
    >
      {/* Soft gradient background */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-red-500/5 blur-[100px]" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10 text-red-500">
            <Heart className="h-6 w-6" />
          </div>
          <div className="mb-3 text-sm font-bold tracking-widest text-red-500 uppercase">
            {t("sponsor.badge")}
          </div>
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">
            {t("sponsor.title")}
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {t("sponsor.desc")}
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {/* Local Support */}
          <div className="group flex flex-col items-center rounded-3xl border border-border/50 bg-muted/30 p-8 text-center transition-all hover:border-primary/30">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500 transition-transform group-hover:scale-110">
              <Wallet className="h-7 w-7" />
            </div>
            <h3 className="mb-3 text-xl font-bold">
              {t("sponsor.local.title")}
            </h3>
            <p className="mb-6 flex-1 text-sm text-muted-foreground">
              {t("sponsor.local.desc")}
            </p>
            <Button
              variant="outline"
              onClick={() => setActiveModal("local")}
              className="w-full rounded-xl transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {t("sponsor.cta.details")}
            </Button>
          </div>

          {/* Coffee/Small Donation */}
          {/* <div className="relative flex transform flex-col items-center rounded-3xl border-2 border-primary bg-background p-8 text-center shadow-xl shadow-primary/10 transition-all hover:scale-[1.02] md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
              Most Popular
            </div>
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
              <Coffee className="h-7 w-7" />
            </div>
            <h3 className="mb-3 text-xl font-bold">
              {t("sponsor.coffee.title")}
            </h3>
            <p className="mb-6 flex-1 text-sm text-muted-foreground">
              {t("sponsor.coffee.desc")}
            </p>
            <Button
              onClick={() => setActiveModal("donate")}
              className="text-md h-12 w-full rounded-xl shadow-lg shadow-primary/20"
            >
              {t("sponsor.cta.donate")}
            </Button>
          </div> */}

          {/* Corporate Sponsor */}
          <div className="group flex flex-col items-center rounded-3xl border border-border/50 bg-muted/30 p-8 text-center transition-all hover:border-primary/30">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-500 transition-transform group-hover:scale-110">
              <Heart className="h-7 w-7" />
            </div>
            <h3 className="mb-3 text-xl font-bold">
              {t("sponsor.corporate.title")}
            </h3>
            <p className="mb-6 flex-1 text-sm text-muted-foreground">
              {t("sponsor.corporate.desc")}
            </p>
            <a href="#contact" className="w-full">
              <Button
                variant="outline"
                className="w-full rounded-xl transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {t("sponsor.cta.contact")}
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Local Payment Modal */}
      <Modal
        isOpen={activeModal === "local"}
        onClose={closeModals}
        title={t("sponsor.modal.local.title")}
      >
        <div className="custom-scrollbar max-h-[70vh] space-y-4 overflow-y-auto pr-2">
          {/* Myanmar Wallets */}
          <div className="flex items-center justify-between rounded-2xl border bg-muted/50 p-4">
            <div>
              <p className="mb-1 text-[10px] font-bold text-muted-foreground uppercase">
                {t("sponsor.modal.local.kbz")}
              </p>
              <p className="font-mono text-sm font-bold">09 123 456 789</p>
            </div>
            <Button
              size="sm"
              variant="outline"
              className="h-8 gap-2 rounded-full text-[10px]"
              onClick={() => handleCopy("09123456789", "kbz")}
            >
              {copiedType === "kbz" ? (
                <CheckCircle2 className="h-3 w-3 text-green-500" />
              ) : (
                <Copy className="h-3 w-3" />
              )}
              {t("sponsor.modal.local.copy")}
            </Button>
          </div>

          <div className="flex items-center justify-between rounded-2xl border bg-muted/50 p-4">
            <div>
              <p className="mb-1 text-[10px] font-bold text-muted-foreground uppercase">
                {t("sponsor.modal.local.wave")}
              </p>
              <p className="font-mono text-sm font-bold">09 987 654 321</p>
            </div>
            <Button
              size="sm"
              variant="outline"
              className="h-8 gap-2 rounded-full text-[10px]"
              onClick={() => handleCopy("09987654321", "wave")}
            >
              {copiedType === "wave" ? (
                <CheckCircle2 className="h-3 w-3 text-green-500" />
              ) : (
                <Copy className="h-3 w-3" />
              )}
              {t("sponsor.modal.local.copy")}
            </Button>
          </div>

          {/* PayPal */}
          <div className="flex items-center justify-between rounded-2xl border border-blue-500/20 bg-blue-500/5 p-4">
            <div>
              <p className="mb-1 text-[10px] font-bold text-blue-500 uppercase">
                {t("sponsor.modal.local.paypal")}
              </p>
              <p className="font-mono text-sm font-bold">paypal.me/msocial</p>
            </div>
            <Button
              size="sm"
              variant="outline"
              className="h-8 gap-2 rounded-full text-[10px]"
              onClick={() => handleCopy("https://paypal.me/msocial", "paypal")}
            >
              {copiedType === "paypal" ? (
                <CheckCircle2 className="h-3 w-3 text-green-500" />
              ) : (
                <Copy className="h-3 w-3" />
              )}
              {t("sponsor.modal.local.copy")}
            </Button>
          </div>

          {/* Thailand Bank */}
          <div className="space-y-4 rounded-2xl border border-primary/20 bg-primary/5 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="mb-1 text-[10px] font-bold text-primary uppercase">
                  {t("sponsor.modal.local.thaibank")}
                </p>
                <p className="font-mono text-sm font-bold">081-234-5678</p>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="h-8 gap-2 rounded-full text-[10px]"
                onClick={() => setShowQR(!showQR)}
              >
                {t("sponsor.modal.local.qr")}
              </Button>
            </div>
            {showQR && (
              <div className="flex animate-in flex-col items-center rounded-xl bg-white p-4 duration-300 zoom-in-95 fade-in">
                <img
                  src="/promptpay-qr.png"
                  alt="PromptPay QR"
                  className="mb-2 h-48 w-48"
                />
                <p className="text-[10px] text-muted-foreground">
                  Scan with any Thai Banking App
                </p>
              </div>
            )}
          </div>

          <Button
            className="mt-2 h-12 w-full rounded-2xl"
            onClick={closeModals}
          >
            {t("sponsor.modal.close")}
          </Button>
        </div>
      </Modal>

      {/* Donate Modal */}
      <Modal
        isOpen={activeModal === "donate"}
        onClose={closeModals}
        title={t("sponsor.modal.donate.title")}
      >
        <div className="py-4 text-center">
          {donateStatus === "idle" && (
            <div className="space-y-6">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                <Coffee className="h-10 w-10" />
              </div>
              <p className="text-muted-foreground">
                {t("sponsor.coffee.desc")}
              </p>
              <Button
                className="h-12 w-full rounded-2xl"
                onClick={handleDonate}
              >
                {t("sponsor.cta.donate")}
              </Button>
            </div>
          )}

          {donateStatus === "processing" && (
            <div className="space-y-6 py-8">
              <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
              <p className="animate-pulse font-medium">
                {t("sponsor.modal.donate.processing")}
              </p>
            </div>
          )}

          {donateStatus === "success" && (
            <div className="animate-in space-y-6 duration-500 zoom-in-95">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 text-green-500">
                <CheckCircle2 className="h-12 w-12" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-bold">
                  {t("sponsor.modal.donate.success")}
                </h4>
                <p className="text-muted-foreground">
                  {t("sponsor.modal.donate.thanks")}
                </p>
              </div>
              <Button className="h-12 w-full rounded-2xl" onClick={closeModals}>
                {t("sponsor.modal.close")}
              </Button>
            </div>
          )}
        </div>
      </Modal>
    </section>
  )
}
