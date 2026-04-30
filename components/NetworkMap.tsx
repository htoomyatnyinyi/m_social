import { Globe, Server, Zap, Shield } from "lucide-react"

const nodes = [
  { city: "Yangon", status: "Primary", latency: "5ms", x: "45%", y: "75%" },
  {
    city: "Mandalay",
    status: "Secondary",
    latency: "12ms",
    x: "50%",
    y: "45%",
  },
  { city: "Naypyidaw", status: "Edge", latency: "8ms", x: "48%", y: "60%" },
  // { city: "Taunggyi", status: "Edge", latency: "15ms", x: "60%", y: "55%" },
  {
    city: "Mawlamyine",
    status: "Primary",
    latency: "13ms",
    x: "50%",
    y: "90%",
  },
]

export function NetworkMap() {
  return (
    <section id="network" className="relative overflow-hidden py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <div className="flex-1">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/20 px-3 py-1 text-xs font-bold tracking-widest text-primary uppercase">
              <Globe className="h-4 w-4" />
              National Infrastructure
            </div>
            <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-5xl">
              Local nodes for <br />
              instant connectivity.
            </h2>
            <p className="mb-12 text-lg leading-relaxed text-zinc-400">
              We operate a sovereign cloud network across Myanmar. By placing
              our server nodes directly in key cities, we bypass international
              bottlenecks and deliver ultra-low latency for all "m" ecosystem
              services.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-primary">
                  <Zap className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold">Ultra-Low Latency</h4>
                <p className="text-xs text-zinc-500">
                  Average 15ms response time nationwide.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-primary">
                  <Shield className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold">Data Sovereignty</h4>
                <p className="text-xs text-zinc-500">
                  All user data stays within Myanmar borders.
                </p>
              </div>
            </div>
          </div>

          <div className="relative aspect-square w-full max-w-lg flex-1 lg:max-w-none">
            {/* Abstract Myanmar Map Mockup */}
            <div className="relative h-full w-full overflow-hidden rounded-[3rem] border border-white/5 bg-zinc-900/50 p-12 shadow-2xl backdrop-blur-sm">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3b82f6_0,transparent_70%)] opacity-20" />

              {/* Fake Map Shape (Geometric) */}
              <div className="relative flex h-full w-full items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  className="h-full w-full fill-current text-zinc-800 opacity-40"
                >
                  <path d="M40,10 L60,10 L70,30 L65,60 L55,90 L40,85 L35,60 L30,30 Z" />
                </svg>

                {/* Pulse Points (Nodes) */}
                {nodes.map((node, i) => (
                  <div
                    key={i}
                    className="group absolute cursor-pointer"
                    style={{ left: node.x, top: node.y }}
                  >
                    <div className="relative">
                      <div className="absolute -inset-4 rounded-full bg-primary/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
                      <div className="relative z-10 h-3 w-3 rounded-full bg-primary">
                        <div className="absolute inset-0 animate-ping rounded-full bg-primary opacity-75" />
                      </div>

                      {/* Tooltip */}
                      <div className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-4 -translate-x-1/2 translate-y-2 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        <div className="rounded-xl border border-white/10 bg-zinc-800 px-4 py-3 whitespace-nowrap shadow-2xl">
                          <div className="mb-1 text-xs font-bold text-white">
                            {node.city} Node
                          </div>
                          <div className="flex items-center gap-4 font-mono text-[10px] text-zinc-400">
                            <span className="flex items-center gap-1">
                              <Server className="h-3 w-3" /> {node.status}
                            </span>
                            <span className="flex items-center gap-1 text-green-400">
                              <Zap className="h-3 w-3" /> {node.latency}
                            </span>
                          </div>
                        </div>
                        <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-white/10 bg-zinc-800" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Status Indicator */}
            <div className="absolute -right-4 -bottom-4 z-20 rounded-2xl border border-white/10 bg-zinc-800 p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                <div className="text-[10px] font-bold tracking-widest text-zinc-300">
                  SYSTEMS: OPERATIONAL
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
