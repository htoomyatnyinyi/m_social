import { Globe, Server, Zap, Shield } from "lucide-react"

const nodes = [
  { city: "Yangon", status: "Primary", latency: "5ms", x: "45%", y: "75%" },
  { city: "Mandalay", status: "Secondary", latency: "12ms", x: "50%", y: "45%" },
  { city: "Naypyidaw", status: "Edge", latency: "8ms", x: "48%", y: "60%" },
  { city: "Taunggyi", status: "Edge", latency: "15ms", x: "60%", y: "55%" },
]

export function NetworkMap() {
  return (
    <section id="network" className="py-24 bg-zinc-950 text-white overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/30">
              <Globe className="w-4 h-4" />
              National Infrastructure
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
              Local nodes for <br />
              instant connectivity.
            </h2>
            <p className="text-lg text-zinc-400 mb-12 leading-relaxed">
              We operate a sovereign cloud network across Myanmar. By placing our server nodes directly in key cities, we bypass international bottlenecks and deliver ultra-low latency for all "m" ecosystem services.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm">Ultra-Low Latency</h4>
                <p className="text-xs text-zinc-500">Average 15ms response time nationwide.</p>
              </div>
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm">Data Sovereignty</h4>
                <p className="text-xs text-zinc-500">All user data stays within Myanmar borders.</p>
              </div>
            </div>
          </div>

          <div className="flex-1 relative w-full aspect-square max-w-lg lg:max-w-none">
            {/* Abstract Myanmar Map Mockup */}
            <div className="relative w-full h-full border border-white/5 rounded-[3rem] bg-zinc-900/50 backdrop-blur-sm p-12 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,#3b82f6_0,transparent_70%)]" />

              {/* Fake Map Shape (Geometric) */}
              <div className="relative w-full h-full flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full text-zinc-800 fill-current opacity-40">
                  <path d="M40,10 L60,10 L70,30 L65,60 L55,90 L40,85 L35,60 L30,30 Z" />
                </svg>

                {/* Pulse Points (Nodes) */}
                {nodes.map((node, i) => (
                  <div
                    key={i}
                    className="absolute group cursor-pointer"
                    style={{ left: node.x, top: node.y }}
                  >
                    <div className="relative">
                      <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="w-3 h-3 bg-primary rounded-full relative z-10">
                        <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
                      </div>

                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 z-20 pointer-events-none">
                        <div className="bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 shadow-2xl whitespace-nowrap">
                          <div className="text-xs font-bold text-white mb-1">{node.city} Node</div>
                          <div className="flex items-center gap-4 text-[10px] text-zinc-400 font-mono">
                            <span className="flex items-center gap-1"><Server className="w-3 h-3" /> {node.status}</span>
                            <span className="flex items-center gap-1 text-green-400"><Zap className="w-3 h-3" /> {node.latency}</span>
                          </div>
                        </div>
                        <div className="w-2 h-2 bg-zinc-800 rotate-45 border-r border-b border-white/10 absolute left-1/2 -translate-x-1/2 -bottom-1" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Status Indicator */}
            <div className="absolute -right-4 -bottom-4 bg-zinc-800 border border-white/10 rounded-2xl p-4 shadow-xl z-20">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <div className="text-[10px] font-bold tracking-widest text-zinc-300">SYSTEMS: OPERATIONAL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
