import Image from "next/image"
import { Button } from "@/components/ui/button"

export function About() {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              About social_ltd
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Bridging the gap in <br/>
              Myanmar's digital era.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Founded in Yangon, <strong className="text-foreground">social_ltd</strong> was born from a vision to create digital platforms that truly resonate with the local culture. Our brand <strong className="text-foreground">m</strong> represents Myanmar's forward momentum.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We don't just build apps; we build infrastructure. Our interconnected ecosystem comprising the social app, analytics dashboard, and backend servers work in unison to provide a world-class experience.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="border-l-2 border-primary pl-4">
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Locally Developed</div>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <div className="text-3xl font-bold mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Server Monitoring</div>
              </div>
            </div>

            <Button size="lg" className="rounded-full">
              Read Our Full Story
            </Button>
          </div>

          {/* Visual Content (Abstract/Generated graphic placeholder) */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square w-full max-w-md mx-auto lg:max-w-none">
              {/* Decorative shapes instead of direct image to ensure it looks good without assets */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-[2.5rem] transform rotate-3" />
              <div className="absolute inset-0 bg-background border border-border/50 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col">
                {/* Mock UI Header */}
                <div className="h-12 border-b flex items-center px-4 gap-2 bg-muted/30">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                {/* Mock UI Content */}
                <div className="p-8 flex-1 flex flex-col gap-6 bg-grid-pattern relative">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                  <div className="w-full h-32 rounded-2xl bg-gradient-to-r from-primary/20 to-blue-500/20 relative z-10" />
                  <div className="w-3/4 h-8 rounded-lg bg-muted relative z-10" />
                  <div className="w-full h-4 rounded bg-muted/50 relative z-10" />
                  <div className="w-5/6 h-4 rounded bg-muted/50 relative z-10" />
                  
                  {/* Floating badge */}
                  <div className="absolute -right-6 bottom-12 bg-background border shadow-xl rounded-2xl p-4 flex items-center gap-4 z-20 animate-bounce-slow">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold">✓</div>
                    <div>
                      <div className="text-sm font-bold">Systems Online</div>
                      <div className="text-xs text-muted-foreground">All servers active</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
