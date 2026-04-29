"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, User, Lock } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Visual Side */}
      <div className="hidden md:flex flex-1 bg-muted/30 relative overflow-hidden items-center justify-center border-r">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/10 pointer-events-none" />
        <div className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 text-center px-12">
          <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-3xl mx-auto mb-8 shadow-xl">
            m
          </div>
          <h2 className="text-3xl font-bold mb-4">Welcome to the Portal</h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Access your analytics dashboard, manage your APIs, and control your enterprise integrations.
          </p>
        </div>
      </div>

      {/* Login Form Side */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 relative bg-background">
        <Link 
          href="/" 
          className="absolute top-8 left-8 sm:left-12 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="w-full max-w-md">
          <div className="mb-10">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Sign in</h1>
            <p className="text-muted-foreground">Enter your details to access your account.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1.5" htmlFor="email">Email</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input 
                    id="email"
                    type="email" 
                    placeholder="name@company.com.mm"
                    className="w-full bg-background border border-input rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-sm font-medium" htmlFor="password">Password</label>
                  <Link href="#" className="text-xs text-primary hover:underline">Forgot password?</Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input 
                    id="password"
                    type="password" 
                    placeholder="••••••••"
                    className="w-full bg-background border border-input rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
              </div>
            </div>

            <Link href="/dashboard" className="block">
              <Button className="w-full h-12 rounded-xl text-md font-medium">
                Sign In
              </Button>
            </Link>
          </form>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link href="#contact" className="text-primary hover:underline font-medium">
              Contact Sales
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
