"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/components/LanguageProvider"

export function Faq() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  const faqs = [
    {
      question: t("faq.q1"),
      answer: t("faq.a1"),
    },
    {
      question: t("faq.q2"),
      answer: t("faq.a2"),
    },
    {
      question: t("faq.q3"),
      answer: t("faq.a3"),
    },
    {
      question: t("faq.q4"),
      answer: t("faq.a4"),
    },
  ]

  return (
    <section className="relative bg-muted/20 py-24" id="faq">
      <div className="container mx-auto max-w-4xl px-6 lg:px-12">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">
            {t("faq.title")}
          </h2>
          <p className="text-lg text-muted-foreground">{t("faq.desc")}</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={cn(
                  "overflow-hidden rounded-2xl border border-border/50 bg-background transition-all duration-300",
                  isOpen
                    ? "border-primary/30 shadow-md shadow-primary/5"
                    : "hover:border-primary/20"
                )}
              >
                <button
                  className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300",
                      isOpen ? "rotate-180 text-primary" : ""
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "overflow-hidden px-6 leading-relaxed text-muted-foreground transition-all duration-300 ease-in-out",
                    isOpen
                      ? "max-h-[500px] pb-5 opacity-100"
                      : "max-h-0 opacity-0"
                  )}
                >
                  {faq.answer}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
