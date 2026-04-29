"use client"

import { useState, useEffect } from "react"
import { Activity, Server, Users, Zap } from "lucide-react"

export function NetworkStatus() {
  const [metrics, setMetrics] = useState({
    activeUsers: 12480,
    requestsPerSec: 450,
    serverLatency: 24,
    uptime: 99.99
  })

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 10) - 4,
        requestsPerSec: 400 + Math.floor(Math.random() * 100),
        serverLatency: 20 + Math.floor(Math.random() * 10),
        uptime: 99.99
      }))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-12 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap justify-between items-center gap-8">
          <div className="flex items-center gap-4 min-w-[200px]">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-bold font-mono tracking-tighter">
                {metrics.activeUsers.toLocaleString()}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
                Live Active Users
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 min-w-[200px]">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-bold font-mono tracking-tighter">
                {metrics.requestsPerSec}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
                Requests / Sec
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 min-w-[200px]">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-bold font-mono tracking-tighter">
                {metrics.serverLatency}ms
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
                Avg. Latency
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 min-w-[200px]">
            <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500">
              <Server className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-bold font-mono tracking-tighter">
                {metrics.uptime}%
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
                System Uptime
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
