import { MessageCircle, Users, Image as ImageIcon, BarChart3, TrendingUp, Activity, Database, ShieldCheck, Zap } from "lucide-react"

export function DetailedFeatures() {
  return (
    <section id="detailed" className="py-24 overflow-hidden bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Dive deeper into our ecosystem
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every product in the m.co suite is designed with precision, focusing on user experience, data-driven decisions, and uncompromised performance.
          </p>
        </div>

        <div className="space-y-32">
          {/* Feature 1: Social App */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold tracking-tight mb-6 leading-tight">
                Myanmar's Next-Gen Social App
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Designed specifically for the local market, our social application provides a seamless, culturally relevant experience with deep integration of Myanmar fonts and local languages.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0 mt-1">
                    <MessageCircle className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Real-time Messaging</h4>
                    <p className="text-sm text-muted-foreground">Lightning-fast chat system with end-to-end encryption.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0 mt-1">
                    <ImageIcon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Rich Media Sharing</h4>
                    <p className="text-sm text-muted-foreground">High-quality photo and video sharing optimized for local networks.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-[4/3] w-full rounded-[2.5rem] bg-gradient-to-tr from-blue-500/10 to-purple-500/10 border border-border flex items-center justify-center p-8 overflow-hidden shadow-2xl">
                {/* Mock Social Feed */}
                <div className="w-full max-w-sm bg-background rounded-2xl shadow-lg border border-border/50 flex flex-col h-full overflow-hidden relative z-10">
                  <div className="h-14 border-b flex items-center px-4 justify-between bg-muted/20">
                    <div className="w-24 h-4 rounded-full bg-muted" />
                    <div className="w-8 h-8 rounded-full bg-primary/20" />
                  </div>
                  <div className="p-4 flex-1 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-muted shrink-0" />
                      <div className="space-y-2">
                        <div className="w-20 h-3 rounded-full bg-muted" />
                        <div className="w-12 h-2 rounded-full bg-muted/50" />
                      </div>
                    </div>
                    <div className="w-full h-32 rounded-xl bg-blue-500/10" />
                    <div className="flex gap-2">
                      <div className="w-1/2 h-3 rounded-full bg-muted/50" />
                      <div className="w-1/4 h-3 rounded-full bg-muted/50" />
                    </div>
                  </div>
                </div>
                {/* Decorative blob */}
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-500/20 rounded-full blur-[60px]" />
              </div>
            </div>
          </div>

          {/* Feature 2: Analytics Dashboard */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative aspect-[4/3] w-full rounded-[2.5rem] bg-gradient-to-tr from-purple-500/10 to-pink-500/10 border border-border flex items-center justify-center p-8 overflow-hidden shadow-2xl">
                 {/* Mock Dashboard */}
                 <div className="w-full h-full bg-background rounded-2xl shadow-lg border border-border/50 p-6 flex flex-col gap-6 relative z-10">
                   <div className="flex justify-between items-center mb-2">
                     <div className="w-32 h-5 rounded-full bg-muted" />
                     <div className="w-8 h-8 rounded-md bg-muted" />
                   </div>
                   <div className="grid grid-cols-3 gap-4">
                     <div className="h-20 rounded-xl bg-purple-500/10 border border-purple-500/20 flex flex-col justify-center p-3 gap-2">
                       <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mb-1"><Activity className="w-4 h-4 text-purple-500"/></div>
                       <div className="w-16 h-2 rounded-full bg-muted" />
                     </div>
                     <div className="h-20 rounded-xl bg-blue-500/10 border border-blue-500/20 flex flex-col justify-center p-3 gap-2">
                       <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mb-1"><TrendingUp className="w-4 h-4 text-blue-500"/></div>
                       <div className="w-16 h-2 rounded-full bg-muted" />
                     </div>
                     <div className="h-20 rounded-xl bg-green-500/10 border border-green-500/20 flex flex-col justify-center p-3 gap-2">
                       <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mb-1"><Users className="w-4 h-4 text-green-500"/></div>
                       <div className="w-16 h-2 rounded-full bg-muted" />
                     </div>
                   </div>
                   <div className="flex-1 rounded-xl border border-border bg-muted/10 relative overflow-hidden flex items-end">
                     {/* Fake Chart bars */}
                     <div className="absolute inset-0 flex items-end justify-between px-4 pt-8 gap-2">
                       {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                         <div key={i} className="w-full bg-purple-500/50 rounded-t-sm transition-all duration-1000" style={{ height: `${h}%` }} />
                       ))}
                     </div>
                   </div>
                 </div>
                 <div className="absolute -left-20 -top-20 w-64 h-64 bg-purple-500/20 rounded-full blur-[60px]" />
              </div>
            </div>

            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/10 text-purple-500 mb-6">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold tracking-tight mb-6 leading-tight">
                Powerful Analytics & Insights
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Make data-driven decisions with our comprehensive admin dashboard. Monitor user growth, engagement metrics, and system health in real-time.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Growth Tracking</h4>
                    <p className="text-sm text-muted-foreground">Visualize daily active users and retention rates with beautiful charts.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0 mt-1">
                    <Activity className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Live Moderation</h4>
                    <p className="text-sm text-muted-foreground">Advanced tools for community management and content moderation.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 3: Infrastructure */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-500/10 text-green-500 mb-6">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold tracking-tight mb-6 leading-tight">
                Enterprise-Grade Infrastructure
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our backend APIs are built to handle millions of requests. We utilize modern microservices architecture to ensure high availability and rapid scaling.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0 mt-1">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Ultra-Low Latency</h4>
                    <p className="text-sm text-muted-foreground">Optimized database queries and Edge caching for instant responses.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0 mt-1">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Data Privacy</h4>
                    <p className="text-sm text-muted-foreground">Strict compliance with local regulations and robust data encryption at rest.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-[4/3] w-full rounded-[2.5rem] bg-gradient-to-tr from-green-500/10 to-teal-500/10 border border-border flex items-center justify-center p-8 overflow-hidden shadow-2xl">
                {/* Mock Server Terminal/Logs */}
                <div className="w-full h-full bg-black/90 rounded-2xl shadow-lg border border-border/50 p-6 flex flex-col relative z-10 font-mono text-xs overflow-hidden">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="space-y-2 text-green-400 opacity-80">
                    <p>{`> starting api-gateway... [OK]`}</p>
                    <p>{`> connecting to primary db... [CONNECTED]`}</p>
                    <p>{`> cache-layer sync... 100%`}</p>
                    <p>{`> worker nodes scaling... 4 nodes active`}</p>
                    <p className="text-blue-400 mt-4">{`[INFO] Serving traffic on port 8080`}</p>
                    <div className="mt-4 border-t border-green-500/30 pt-4 flex gap-4">
                      <div className="flex-1">
                        <div className="text-muted-foreground">CPU Usage</div>
                        <div className="w-full h-2 bg-green-500/20 mt-1 rounded overflow-hidden">
                          <div className="w-[30%] h-full bg-green-500" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-muted-foreground">Memory</div>
                        <div className="w-full h-2 bg-green-500/20 mt-1 rounded overflow-hidden">
                          <div className="w-[45%] h-full bg-green-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-green-500/20 rounded-full blur-[60px]" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
