import { Code2, Cpu, Globe, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DeveloperSection() {
  return (
    <section id="developers" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500 text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-500/20">
              <Code2 className="w-4 h-4" />
              Built for Developers
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Powerful APIs for the <br/>
              Myanmar ecosystem.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Integrate the "m" social graph and high-speed infrastructure into your own applications. Our SDKs are designed for simplicity, performance, and local connectivity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-foreground font-bold">
                  <Rocket className="w-4 h-4 text-indigo-500" />
                  Quick Setup
                </div>
                <p className="text-sm text-muted-foreground">Start building in minutes with our comprehensive SDKs.</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-foreground font-bold">
                  <Cpu className="w-4 h-4 text-indigo-500" />
                  Low Latency
                </div>
                <p className="text-sm text-muted-foreground">Direct peering with local ISPs ensures 20ms response times.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full px-8 bg-indigo-600 hover:bg-indigo-700 text-white">
                Read API Docs
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8">
                Request API Key
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="bg-zinc-950 rounded-[2rem] border border-white/10 p-6 shadow-2xl relative overflow-hidden group">
              {/* Fake Window Controls */}
              <div className="flex gap-1.5 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <span className="ml-4 text-[10px] text-zinc-500 font-mono">m_sdk_initialize.ts</span>
              </div>

              {/* Code Snippet */}
              <pre className="font-mono text-xs md:text-sm text-indigo-300 leading-relaxed overflow-x-auto p-4 bg-black/40 rounded-xl border border-white/5">
                <code>
{`import { mSDK } from "@m-co/sdk";

// Initialize for Myanmar market
const m = new mSDK({
  apiKey: "m_live_yangon_7x8k2...",
  region: "mm-south-1",
  latencyOptimize: true
});

// Fetch local social trends
const trends = await m.social.getTrends({
  city: "Yangon",
  limit: 5
});

console.log("Trending in Yangon:", trends);`}
                </code>
              </pre>

              {/* Success Badge */}
              <div className="absolute bottom-10 right-10 bg-green-500/10 border border-green-500/20 rounded-lg p-3 flex items-center gap-3 backdrop-blur-md animate-in slide-in-from-right-4 duration-1000">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-white uppercase">Network</div>
                  <div className="text-[10px] text-green-500 font-mono">Yangon Node: Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
