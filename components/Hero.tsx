"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight, Globe2 } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32 min-h-[90vh] flex items-center">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] animate-pulse -top-40 -right-40" />
        <div className="absolute w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[80px] animate-pulse delay-700 bottom-0 left-0" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 border backdrop-blur-sm mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-ping" />
            <span className="text-sm font-medium text-muted-foreground">For myanmar</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Connect the nation.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
              Empower the future.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
            Brand <strong className="text-foreground">m.co</strong> by <strong className="text-foreground">htoomyatnyinyi</strong> delivers cutting-edge social platforms,
            powerful analytics dashboards, and robust server infrastructure tailored for Myanmar.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <Button size="lg" className="w-full sm:w-auto rounded-full h-14 px-8 text-lg group">
              Explore Our Ecosystem
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full h-14 px-8 text-lg bg-background/50 backdrop-blur-md hover:bg-muted/50">
              <Globe2 className="mr-2 w-5 h-5" />
              Myanmar Market Insights
            </Button>
          </div>

          {/* Metrics/Trust signals */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-border/50 animate-in fade-in duration-1000 delay-500">
            <div>
              <div className="text-3xl font-bold mb-1">3+</div>
              <div className="text-sm text-muted-foreground">Core Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">99.9%</div>
              <div className="text-sm text-muted-foreground">Server Uptime</div>
            </div>
            <div className="hidden md:block">
              <div className="text-3xl font-bold mb-1">Yangon</div>
              <div className="text-sm text-muted-foreground">Headquarters</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
