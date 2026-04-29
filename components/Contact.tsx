"use client"

import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-muted/30">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 skew-x-12 translate-x-32 -z-10" />
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto bg-background border border-border/50 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative blur */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-[50px]" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Let's build the future together.
              </h2>
              <p className="text-muted-foreground mb-8">
                Interested in our social ecosystem or enterprise APIs? Reach out to our team in Yangon. We're always looking for strategic partnerships.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-1">Partnerships</h4>
                  <p className="text-muted-foreground text-sm">partners@social-ltd.com.mm</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Careers</h4>
                  <p className="text-muted-foreground text-sm">join@social-ltd.com.mm</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Office Location</h4>
                  <p className="text-muted-foreground text-sm">Yangon Innovation Center<br/>Myanmar</p>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-6 rounded-2xl border border-border/50">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-background border border-input rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-background border border-input rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-background border border-input rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="How can we help?"
                  />
                </div>
                <Button className="w-full h-12 rounded-xl text-md font-medium group">
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
