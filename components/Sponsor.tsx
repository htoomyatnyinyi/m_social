"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Heart, Coffee, Wallet, Copy, CheckCircle2, Loader2 } from "lucide-react"
import { useLanguage } from "@/components/LanguageProvider"
import { Modal } from "@/components/Modal"

export function Sponsor() {
  const { t } = useLanguage()
  const [activeModal, setActiveModal] = React.useState<"local" | "donate" | null>(null)
  const [donateStatus, setDonateStatus] = React.useState<"idle" | "processing" | "success">("idle")
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
    <section id="sponsor" className="py-24 bg-background relative overflow-hidden border-t">
      {/* Soft gradient background */}
      <div className="absolute left-1/2 top-0 w-[800px] h-[400px] -translate-x-1/2 bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 text-red-500 mb-6">
            <Heart className="w-6 h-6" />
          </div>
          <div className="text-sm font-bold text-red-500 uppercase tracking-widest mb-3">
            {t("sponsor.badge")}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            {t("sponsor.title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("sponsor.desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Local Support */}
          <div className="bg-muted/30 border border-border/50 rounded-3xl p-8 text-center hover:border-primary/30 transition-all group flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Wallet className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3">{t("sponsor.local.title")}</h3>
            <p className="text-muted-foreground mb-6 text-sm flex-1">
              {t("sponsor.local.desc")}
            </p>
            <Button 
              variant="outline" 
              onClick={() => setActiveModal("local")}
              className="w-full rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {t("sponsor.cta.details")}
            </Button>
          </div>

          {/* Coffee/Small Donation */}
          <div className="bg-background border-2 border-primary shadow-xl shadow-primary/10 rounded-3xl p-8 text-center relative flex flex-col items-center transform md:-translate-y-4 transition-all hover:scale-[1.02]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
              Most Popular
            </div>
            <div className="w-14 h-14 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6">
              <Coffee className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3">{t("sponsor.coffee.title")}</h3>
            <p className="text-muted-foreground mb-6 text-sm flex-1">
              {t("sponsor.coffee.desc")}
            </p>
            <Button 
              onClick={() => setActiveModal("donate")}
              className="w-full rounded-xl h-12 text-md shadow-lg shadow-primary/20"
            >
              {t("sponsor.cta.donate")}
            </Button>
          </div>

          {/* Corporate Sponsor */}
          <div className="bg-muted/30 border border-border/50 rounded-3xl p-8 text-center hover:border-primary/30 transition-all group flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Heart className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3">{t("sponsor.corporate.title")}</h3>
            <p className="text-muted-foreground mb-6 text-sm flex-1">
              {t("sponsor.corporate.desc")}
            </p>
            <a href="#contact" className="w-full">
              <Button variant="outline" className="w-full rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors">
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
        <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
          {/* Myanmar Wallets */}
          <div className="p-4 bg-muted/50 rounded-2xl border flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase mb-1">{t("sponsor.modal.local.kbz")}</p>
              <p className="font-mono font-bold text-sm">09 123 456 789</p>
            </div>
            <Button 
              size="sm" 
              variant="outline" 
              className="gap-2 rounded-full h-8 text-[10px]"
              onClick={() => handleCopy("09123456789", "kbz")}
            >
              {copiedType === "kbz" ? <CheckCircle2 className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
              {t("sponsor.modal.local.copy")}
            </Button>
          </div>

          <div className="p-4 bg-muted/50 rounded-2xl border flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase mb-1">{t("sponsor.modal.local.wave")}</p>
              <p className="font-mono font-bold text-sm">09 987 654 321</p>
            </div>
            <Button 
              size="sm" 
              variant="outline" 
              className="gap-2 rounded-full h-8 text-[10px]"
              onClick={() => handleCopy("09987654321", "wave")}
            >
              {copiedType === "wave" ? <CheckCircle2 className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
              {t("sponsor.modal.local.copy")}
            </Button>
          </div>

          {/* PayPal */}
          <div className="p-4 bg-blue-500/5 rounded-2xl border border-blue-500/20 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold text-blue-500 uppercase mb-1">{t("sponsor.modal.local.paypal")}</p>
              <p className="font-mono font-bold text-sm">paypal.me/msocial</p>
            </div>
            <Button 
              size="sm" 
              variant="outline" 
              className="gap-2 rounded-full h-8 text-[10px]"
              onClick={() => handleCopy("https://paypal.me/msocial", "paypal")}
            >
              {copiedType === "paypal" ? <CheckCircle2 className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
              {t("sponsor.modal.local.copy")}
            </Button>
          </div>

          {/* Thailand Bank */}
          <div className="p-4 bg-primary/5 rounded-2xl border border-primary/20 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold text-primary uppercase mb-1">{t("sponsor.modal.local.thaibank")}</p>
                <p className="font-mono font-bold text-sm">081-234-5678</p>
              </div>
              <Button 
                size="sm" 
                variant="outline" 
                className="gap-2 rounded-full h-8 text-[10px]"
                onClick={() => setShowQR(!showQR)}
              >
                {t("sponsor.modal.local.qr")}
              </Button>
            </div>
            {showQR && (
              <div className="bg-white p-4 rounded-xl flex flex-col items-center animate-in fade-in zoom-in-95 duration-300">
                <img src="/promptpay-qr.png" alt="PromptPay QR" className="w-48 h-48 mb-2" />
                <p className="text-[10px] text-muted-foreground">Scan with any Thai Banking App</p>
              </div>
            )}
          </div>

          <Button className="w-full rounded-2xl h-12 mt-2" onClick={closeModals}>
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
        <div className="text-center py-4">
          {donateStatus === "idle" && (
            <div className="space-y-6">
              <div className="w-20 h-20 bg-orange-500/10 text-orange-500 rounded-full flex items-center justify-center mx-auto">
                <Coffee className="w-10 h-10" />
              </div>
              <p className="text-muted-foreground">{t("sponsor.coffee.desc")}</p>
              <Button className="w-full h-12 rounded-2xl" onClick={handleDonate}>
                {t("sponsor.cta.donate")}
              </Button>
            </div>
          )}
          
          {donateStatus === "processing" && (
            <div className="space-y-6 py-8">
              <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto" />
              <p className="font-medium animate-pulse">{t("sponsor.modal.donate.processing")}</p>
            </div>
          )}

          {donateStatus === "success" && (
            <div className="space-y-6 animate-in zoom-in-95 duration-500">
              <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-bold">{t("sponsor.modal.donate.success")}</h4>
                <p className="text-muted-foreground">{t("sponsor.modal.donate.thanks")}</p>
              </div>
              <Button className="w-full h-12 rounded-2xl" onClick={closeModals}>
                {t("sponsor.modal.close")}
              </Button>
            </div>
          )}
        </div>
      </Modal>
    </section>
  )
}
