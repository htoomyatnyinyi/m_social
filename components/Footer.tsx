"use client"

import * as React from "react"
import Link from "next/link"
import { Mail, MapPin, Phone, Loader2, CheckCircle2 } from "lucide-react"

export function Footer() {
  const [email, setEmail] = React.useState("")
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus("loading")
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        setStatus("success")
        setEmail("")
      } else {
        setStatus("error")
      }
    } catch (err) {
      setStatus("error")
    }
  }

  return (
    <footer className="border-t bg-muted/40 backdrop-blur-sm">
      <div className="container mx-auto px-6 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand & Newsletter */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                m
              </div>
              <span className="font-semibold text-xl tracking-tight">myanmar social</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              Empowering Myanmar's digital landscape with cutting-edge social connectivity and robust infrastructure.
            </p>
            
            <form className="space-y-3" onSubmit={handleSubscribe}>
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Subscribe to updates</label>
              
              {status === "success" ? (
                <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-500 bg-green-500/10 border border-green-500/20 rounded-lg px-3 py-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Thanks for subscribing!
                </div>
              ) : (
                <div className="flex gap-2 relative">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@example.com"
                    disabled={status === "loading"}
                    className="flex-1 bg-background border border-border rounded-lg px-3 py-2 text-xs outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
                  />
                  <button 
                    disabled={status === "loading" || !email}
                    className="bg-primary text-primary-foreground px-3 py-2 rounded-lg text-xs font-bold hover:brightness-110 transition-all disabled:opacity-50 flex items-center justify-center min-w-[60px]"
                  >
                    {status === "loading" ? <Loader2 className="w-4 h-4 animate-spin" /> : "Join"}
                  </button>
                </div>
              )}
              {status === "error" && (
                <p className="text-xs text-red-500">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-6">Solutions</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Social App Ecosystem
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Analytics Dashboard
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Backend Infrastructure
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  API Integration
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Careers (Yangon)
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-6">Connect</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>Yangon, Myanmar</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>hello@social-ltd.com.mm</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+95 1 234 567</span>
              </li>
            </ul>
            <div className="flex items-center gap-4 mt-6">
              {/* <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link> */}
              {/* <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link> */}
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} social_ltd (Brand 'm'). All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with ❤️ in Myanmar</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
