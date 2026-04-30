"use client"

import { useState, useEffect } from "react"
import { Activity, Server, Users, Zap } from "lucide-react"

export function NetworkStatus() {
  const [metrics, setMetrics] = useState({
    activeUsers: 120,
    requestsPerSec: 50,
    serverLatency: 42,
    uptime: 95.9,
  })

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 10) + 4,
        requestsPerSec: 100 + Math.floor(Math.random() * 100),
        serverLatency: 20 + Math.floor(Math.random() * 10),
        uptime: 95.9,
      }))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="overflow-hidden py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <div className="flex min-w-[200px] items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20 text-green-500">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <div className="font-mono text-2xl font-bold tracking-tighter">
                {metrics.activeUsers.toLocaleString()}
              </div>
              <div className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
                Live Active Users
              </div>
            </div>
          </div>

          <div className="flex min-w-[200px] items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 text-blue-500">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <div className="font-mono text-2xl font-bold tracking-tighter">
                {metrics.requestsPerSec}
              </div>
              <div className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
                Requests / Sec
              </div>
            </div>
          </div>

          <div className="flex min-w-[200px] items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20 text-purple-500">
              <Activity className="h-6 w-6" />
            </div>
            <div>
              <div className="font-mono text-2xl font-bold tracking-tighter">
                {metrics.serverLatency}ms
              </div>
              <div className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
                Avg. Latency
              </div>
            </div>
          </div>

          <div className="flex min-w-[200px] items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/20 text-yellow-500">
              <Server className="h-6 w-6" />
            </div>
            <div>
              <div className="font-mono text-2xl font-bold tracking-tighter">
                {metrics.uptime}%
              </div>
              <div className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
                System Uptime
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
