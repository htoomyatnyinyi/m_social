"use client"

import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-muted/30 py-24"
    >
      <div className="absolute top-0 right-0 -z-10 h-full w-1/2 translate-x-32 skew-x-12 bg-primary/5" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border/50 bg-background p-8 shadow-2xl md:p-12">
          {/* Decorative blur */}
          <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/20 blur-[50px]" />

          <div className="relative z-10 grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Let's build the future together.
              </h2>
              <p className="mb-8 text-muted-foreground">
                Interested in our social ecosystem or enterprise APIs? Reach out
                to our team in Yangon. We're always looking for strategic
                partnerships.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="mb-1 font-semibold">Partnerships</h4>
                  <p className="text-sm text-muted-foreground">
                    partners@social-ltd.com.mm
                  </p>
                </div>
                <div>
                  <h4 className="mb-1 font-semibold">Careers</h4>
                  <p className="text-sm text-muted-foreground">
                    join@social-ltd.com.mm
                  </p>
                </div>
                <div>
                  <h4 className="mb-1 font-semibold">Office Location</h4>
                  <p className="text-sm text-muted-foreground">
                    Yangon Innovation Center
                    <br />
                    Myanmar
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border/50 bg-muted/30 p-6">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-all outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Please enter your name..."
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-all outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Please enter your email..."
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm transition-all outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Please enter your message..."
                  />
                </div>
                <Button
                  type="submit"
                  className="text-md group h-12 w-full rounded-xl font-medium"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
