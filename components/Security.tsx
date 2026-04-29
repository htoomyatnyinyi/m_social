"use client"

import { ShieldAlert, Lock, Terminal, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Security() {
  return (
    <section id="security" className="py-24 bg-zinc-950 text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/30">
              <ShieldAlert className="w-4 h-4" />
              Cybersecurity First
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Welcome, Pentesters. <br />
              Help us secure Myanmar.
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
              At <span className="text-white font-semibold">social_ltd</span>, user privacy and data security are our highest priorities. We recognize the vital role that security researchers play in keeping the ecosystem safe.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <Terminal className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Responsible Disclosure</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Found a vulnerability? We invite you to report it through our responsible disclosure program. We promise to review all submissions within 48 hours.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <Heart className="w-6 h-6 text-red-500 shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Hall of Fame</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Researchers who help us secure our infrastructure will be permanently recognized on our official Hall of Fame.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full px-8 bg-primary hover:brightness-110">
                View Security Policy
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 border-white/20 hover:bg-white/5 text-white">
                Submit a Report
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square w-full max-w-md mx-auto bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden group">
              {/* Animated scanning effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-primary/40 animate-scan z-20" />

              <div className="h-full flex flex-col font-mono text-[10px] md:text-xs text-primary/80 overflow-hidden">
                <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-white font-bold tracking-widest flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    ENCRYPTED_CORE_SEC
                  </span>
                  <span className="text-zinc-500 uppercase">Status: Vigilant</span>
                </div>

                <div className="space-y-2 opacity-60 group-hover:opacity-100 transition-opacity">
                  <p className="text-zinc-500">{`[SYSTEM] Initializing security audit...`}</p>
                  <p>{`[INFO] Scanning endpoint: /api/v1/auth/verify`}</p>
                  <p className="text-green-500">{`[OK] End-to-end encryption active`}</p>
                  <p className="text-yellow-500">{`[WARN] 12 unauthorized attempts blocked from 103.x.x.x`}</p>
                  <p>{`[INFO] Integrity check: [####################] 100%`}</p>
                  <p className="text-blue-400 mt-4">{`// We welcome researchers to test our `}</p>
                  <p className="text-blue-400">{`// defenses and help protect Myanmar's`}</p>
                  <p className="text-blue-400">{`// digital infrastructure.`}</p>
                  <p className="mt-4 text-white">{`$ contact: security@social-ltd.com.mm`}</p>
                </div>
              </div>

              {/* Decorative shield icon in background */}
              <ShieldAlert className="absolute -bottom-10 -right-10 w-48 h-48 opacity-5 text-white pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Security Testing Queue & Remediation */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-16">
          {/* Security Testing Queue */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-primary" />
              Target Testing Scope (Queue)
            </h3>
            <div className="space-y-4">
              {[
                { target: "API Auth Endpoints", priority: "Critical", status: "Active" },
                { target: "Data Encryption Layer", priority: "High", status: "Active" },
                { target: "User Metadata Storage", priority: "Medium", status: "Monitoring" },
                { target: "Sponsorship Payment Gateways", priority: "High", status: "Active" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                  <div>
                    <div className="text-sm font-semibold">{item.target}</div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Priority: {item.priority}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${item.status === "Active" ? "bg-green-500 animate-pulse" : "bg-blue-500"}`} />
                    <span className="text-[10px] text-zinc-400 font-mono uppercase">{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Remediation Process */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-primary" />
              Remediation & Fix Process
            </h3>
            <div className="relative space-y-8 ml-4">
              <div className="absolute left-[-16px] top-2 bottom-2 w-px bg-primary/20" />
              
              {[
                { title: "Verification", desc: "Our security team replicates and validates the vulnerability report." },
                { title: "Patching", desc: "Developers roll out a hotfix to our isolated staging environment." },
                { title: "Audit", desc: "Independent security review to ensure the fix doesn't create regressions." },
                { title: "Deployment", desc: "Zero-downtime deployment to all Myanmar server nodes." },
              ].map((step, i) => (
                <div key={i} className="relative pl-4">
                  <div className="absolute left-[-20px] top-1.5 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  <h4 className="text-sm font-bold text-white mb-1">{step.title}</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
      `}</style>
    </section>
  )
}
