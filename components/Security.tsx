"use client"

import * as React from "react"
import { ShieldAlert, Lock, Terminal, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/LanguageProvider"

export function Security() {
  const { t } = useLanguage()

  return (
    <section id="security" className="relative overflow-hidden py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-full opacity-10">
        <div className="absolute top-0 left-1/4 h-full w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
        <div className="absolute top-0 left-2/4 h-full w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
        <div className="absolute top-0 left-3/4 h-full w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/20 px-3 py-1 text-xs font-bold tracking-widest text-primary uppercase">
              <ShieldAlert className="h-4 w-4" />
              {t("security.badge")}
            </div>
            <h2 className="mb-6 text-3xl leading-tight font-bold tracking-tight md:text-5xl">
              {t("security.title1")} <br />
              {t("security.title2")}
            </h2>
            <p
              className="mb-8 text-lg leading-relaxed text-zinc-400"
              dangerouslySetInnerHTML={{ __html: t("security.desc") }}
            />

            <div className="mb-10 space-y-6">
              <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                <Terminal className="h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h4 className="mb-1 font-bold">
                    {t("security.disclosure.title")}
                  </h4>
                  <p className="text-sm leading-relaxed text-zinc-500">
                    {t("security.disclosure.desc")}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                <Heart className="h-6 w-6 shrink-0 text-red-500" />
                <div>
                  <h4 className="mb-1 font-bold">
                    {t("security.halloffame.title")}
                  </h4>
                  <p className="text-sm leading-relaxed text-zinc-500">
                    {t("security.halloffame.desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="group relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-8 shadow-2xl">
              {/* Animated scanning effect */}
              <div className="animate-scan absolute top-0 left-0 z-20 h-1 w-full bg-primary/40" />

              <div className="flex h-full flex-col overflow-hidden font-mono text-[10px] text-primary/80 md:text-xs">
                <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="flex items-center gap-2 font-bold tracking-widest text-white">
                    <Lock className="h-4 w-4" />
                    {t("security.terminal.header")}
                  </span>
                  <span className="text-zinc-500 uppercase">
                    {t("security.terminal.status")}
                  </span>
                </div>

                <div className="space-y-2 transition-opacity group-hover:opacity-100">
                  <p className="text-zinc-500">{t("security.terminal.sys")}</p>
                  <p>{t("security.terminal.info1")}</p>
                  <p className="text-green-500">{t("security.terminal.ok")}</p>
                  <p className="text-yellow-500">
                    {t("security.terminal.warn")}
                  </p>
                  <p>{t("security.terminal.info2")}</p>
                  <p className="mt-4 text-blue-400">
                    {t("security.terminal.comment1")}
                  </p>
                  <p className="text-blue-400">
                    {t("security.terminal.comment2")}
                  </p>
                  <p className="text-blue-400">
                    {t("security.terminal.comment3")}
                  </p>
                  <p className="mt-4 text-white">
                    {t("security.terminal.contact")}
                  </p>
                </div>
              </div>

              {/* Decorative shield icon in background */}
              <ShieldAlert className="pointer-events-none absolute -right-10 -bottom-10 h-48 w-48 text-white opacity-5" />
            </div>
          </div>
        </div>

        {/* Security Testing Queue & Remediation */}
        <div className="mt-24 grid grid-cols-1 gap-12 border-t border-white/10 pt-16 md:grid-cols-2">
          {/* Security Testing Queue */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">
              <Terminal className="h-5 w-5 text-primary" />
              {t("security.scope.title")}
            </h3>
            <div className="space-y-4">
              {[
                {
                  target: t("security.scope.target1"),
                  priority: "Critical",
                  status: t("security.scope.status.active"),
                },
                {
                  target: t("security.scope.target2"),
                  priority: "High",
                  status: t("security.scope.status.active"),
                },
                {
                  target: t("security.scope.target3"),
                  priority: "Medium",
                  status: t("security.scope.status.monitoring"),
                },
                {
                  target: t("security.scope.target4"),
                  priority: "High",
                  status: t("security.scope.status.active"),
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-4"
                >
                  <div>
                    <div className="text-sm font-semibold">{item.target}</div>
                    <div className="mt-1 text-[10px] tracking-widest text-zinc-500 uppercase">
                      {t("security.scope.priority")}: {item.priority}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${item.status === t("security.scope.status.active") ? "animate-pulse bg-green-500" : "bg-blue-500"}`}
                    />
                    <span className="font-mono text-[10px] text-zinc-400 uppercase">
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Remediation Process */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">
              <ShieldAlert className="h-5 w-5 text-primary" />
              {t("security.remediation.title")}
            </h3>
            <div className="relative ml-4 space-y-8">
              <div className="absolute top-2 bottom-2 left-[-16px] w-px bg-primary/20" />

              {[
                {
                  title: t("security.remediation.step1.title"),
                  desc: t("security.remediation.step1.desc"),
                },
                {
                  title: t("security.remediation.step2.title"),
                  desc: t("security.remediation.step2.desc"),
                },
                {
                  title: t("security.remediation.step3.title"),
                  desc: t("security.remediation.step3.desc"),
                },
                {
                  title: t("security.remediation.step4.title"),
                  desc: t("security.remediation.step4.desc"),
                },
              ].map((step, i) => (
                <div key={i} className="relative pl-4">
                  <div className="absolute top-1.5 left-[-20px] h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  <h4 className="mb-1 text-sm font-bold text-white">
                    {step.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-zinc-500">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            top: 0%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
      `}</style>

      {/* <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-full bg-primary px-8 hover:brightness-110"
              >
                View Security Policy
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-white/20 px-8 text-white hover:bg-white/5"
              >
                Submit a Report
              </Button>
            </div> */}
    </section>
  )
}
