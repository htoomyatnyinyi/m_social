"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, User, Lock, Loader2, AlertCircle } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Please enter both email and password.")
      return
    }

    setIsLoading(true)

    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Mock authentication check
    if (email.includes("@") && password.length >= 6) {
      // Success - redirect to dashboard
      router.push("/dashboard")
    } else {
      setIsLoading(false)
      setError("Invalid credentials. Password must be at least 6 characters.")
    }
  }

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

          <form className="space-y-6" onSubmit={handleLogin}>
            {error && (
              <div className="bg-destructive/10 text-destructive text-sm px-4 py-3 rounded-xl flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {error}
              </div>
            )}
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1.5" htmlFor="email">Email</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input 
                    id="email"
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com.mm"
                    disabled={isLoading}
                    className="w-full bg-background border border-input rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/50 transition-all disabled:opacity-50"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-sm font-medium" htmlFor="password">Password</label>
                  <Link href="#" className="text-xs text-primary hover:underline disabled:opacity-50">Forgot password?</Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input 
                    id="password"
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    disabled={isLoading}
                    className="w-full bg-background border border-input rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/50 transition-all disabled:opacity-50"
                  />
                </div>
              </div>
            </div>

            <Button type="submit" disabled={isLoading} className="w-full h-12 rounded-xl text-md font-medium">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Authenticating...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
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
