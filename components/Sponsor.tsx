import { Button } from "@/components/ui/button"
import { Heart, Coffee, Wallet } from "lucide-react"

export function Sponsor() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute left-1/2 top-0 w-[800px] h-[400px] -translate-x-1/2 bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 text-red-500 mb-6">
            <Heart className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Support Our Mission
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Building independent, high-performance infrastructure for Myanmar requires significant resources. If you believe in our vision for the "m" brand, consider sponsoring us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Local Support */}
          <div className="bg-muted/30 border border-border/50 rounded-3xl p-8 text-center hover:border-primary/30 transition-colors flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6">
              <Wallet className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3">Local Payment</h3>
            <p className="text-muted-foreground mb-6 text-sm flex-1">
              Support us directly via local digital wallets (KBZPay, WavePay). Best for our supporters within Myanmar.
            </p>
            <Button variant="outline" className="w-full rounded-xl">View Details</Button>
          </div>

          {/* Coffee/Small Donation */}
          <div className="bg-background border-2 border-primary/20 shadow-xl shadow-primary/5 rounded-3xl p-8 text-center relative flex flex-col items-center transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
              Most Popular
            </div>
            <div className="w-14 h-14 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6">
              <Coffee className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3">Buy Us a Coffee</h3>
            <p className="text-muted-foreground mb-6 text-sm flex-1">
              A small gesture goes a long way in keeping our servers running and our developers fueled.
            </p>
            <Button className="w-full rounded-xl">Donate $5</Button>
          </div>

          {/* Corporate Sponsor */}
          <div className="bg-muted/30 border border-border/50 rounded-3xl p-8 text-center hover:border-primary/30 transition-colors flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-6">
              <Heart className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3">Corporate Sponsor</h3>
            <p className="text-muted-foreground mb-6 text-sm flex-1">
              For businesses who want their logo featured on our platform. Let's partner for Myanmar's digital future.
            </p>
            <Button variant="outline" className="w-full rounded-xl">Contact Us</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
