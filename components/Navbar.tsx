"use client"

import * as React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Navbar() {
  const { setTheme, theme } = useTheme()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled
        ? "bg-background/80 backdrop-blur-md border-border"
        : "bg-transparent border-transparent"
        }`}
    >
      <div className="container mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl transition-transform group-hover:scale-105">
            m
          </div>
          <div>
            <span className="font-semibold text-sm tracking-tight hidden sm:block">
              myanmar
            </span>
            <span className="text-[8px] tracking-tight hidden sm:block">
              social
            </span>

          </div>
          {/* <text>social</text> */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/#services"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Services
          </Link>
          <Link
            href="/#about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="/#team"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Team
          </Link>
          <Link
            href="/#news"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            News
          </Link>
          <Link
            href="/#security"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Security
          </Link>
          <Link
            href="/#sponsor"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Sponsor
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Button
            variant="ghost"
            size="sm"
            className="rounded-full px-3 text-xs font-bold"
            onClick={() => {}}
          >
            MM
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full"
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          <Link href="/login" className="hidden md:block">
            <Button className="rounded-full px-6">
              Get Started
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border p-6 shadow-xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-6 items-center">
            <Link
              href="/#services"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={toggleMobileMenu}
            >
              Services
            </Link>
            <Link
              href="/#about"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
            <Link
              href="/#team"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={toggleMobileMenu}
            >
              Team
            </Link>
            <Link
              href="/#news"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={toggleMobileMenu}
            >
              News
            </Link>
            <Link
              href="/#sponsor"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={toggleMobileMenu}
            >
              Sponsor
            </Link>
            <Link
              href="/#contact"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
            <Link href="/login" className="w-full mt-4" onClick={toggleMobileMenu}>
              <Button className="w-full rounded-full">
                Get Started
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
