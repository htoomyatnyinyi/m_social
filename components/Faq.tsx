"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What makes the 'm' social app different from others?",
    answer: "Our platform is built from the ground up for Myanmar. This means native support for local languages, optimized data usage for local telecom networks, and a community focus that resonates with local culture.",
  },
  {
    question: "Is the early access APK safe to install?",
    answer: "Yes. The APK provided in our beta release is compiled directly by our team. While you need to enable 'Install from Unknown Sources' to sideload it, it contains no malware and undergoes strict security checks.",
  },
  {
    question: "How can I sponsor or partner with social_ltd?",
    answer: "You can use the local payment options in the Sponsor section above for direct contributions. For corporate partnerships or larger sponsorships, please use the Contact form, and our Yangon team will reach out.",
  },
  {
    question: "Do you offer API access for third-party developers?",
    answer: "Yes, our robust server infrastructure is designed to be extensible. We will be releasing developer documentation and API keys for third-party integrations in Q3 of this year.",
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <section className="py-24 bg-muted/20 relative">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions about our beta release or ecosystem? We've got answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div 
                key={index} 
                className={cn(
                  "border border-border/50 rounded-2xl bg-background overflow-hidden transition-all duration-300",
                  isOpen ? "border-primary/30 shadow-md shadow-primary/5" : "hover:border-primary/20"
                )}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <ChevronDown 
                    className={cn(
                      "w-5 h-5 text-muted-foreground transition-transform duration-300 shrink-0",
                      isOpen ? "rotate-180 text-primary" : ""
                    )} 
                  />
                </button>
                
                <div 
                  className={cn(
                    "px-6 text-muted-foreground leading-relaxed overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "pb-5 max-h-40 opacity-100" : "max-h-0 opacity-0"
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
