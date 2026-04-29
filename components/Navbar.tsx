"use client"

import * as React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

import { useLanguage } from "@/components/LanguageProvider"

export function Navbar() {
  const { setTheme, theme } = useTheme()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const { lang, setLang, t } = useLanguage()

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
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
        ? "top-0 bg-background/70 backdrop-blur-xl border-b shadow-md"
        : "top-0 bg-transparent border-transparent"
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
            {t("nav.services")}
          </Link>
          <Link
            href="/#developers"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("nav.developers")}
          </Link>
          <Link
            href="/#about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("nav.about")}
          </Link>
          <Link
            href="/#team"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("nav.team")}
          </Link>
          <Link
            href="/#news"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("nav.news")}
          </Link>
          <Link
            href="/#security"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("nav.security")}
          </Link>
          <Link
            href="/#careers"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("nav.careers")}
          </Link>
          <Link
            href="/#sponsor"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("nav.sponsor")}
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("nav.contact")}
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Language Toggle */}
          <div className="hidden sm:flex items-center bg-muted/50 rounded-full p-1 border border-border/50">
            <button
              onClick={() => setLang("EN")}
              className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all ${lang === "EN" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("MM")}
              className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all ${lang === "MM" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              MM
            </button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="sm:hidden rounded-full px-3 text-xs font-bold"
            onClick={() => setLang(lang === "EN" ? "MM" : "EN")}
          >
            {lang}
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

          <Link href="/#sponsor" className="hidden md:block">
            <Button className="rounded-full px-6 shadow-md hover:shadow-lg transition-all active:scale-95">
              {t("nav.support")}
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
              {t("nav.services")}
            </Link>
            <Link
              href="/#about"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={toggleMobileMenu}
            >
              {t("nav.about")}
            </Link>
            <Link
              href="/#team"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={toggleMobileMenu}
            >
              {t("nav.team")}
            </Link>
            <Link
              href="/#news"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={toggleMobileMenu}
            >
              {t("nav.news")}
            </Link>
            <Link
              href="/#sponsor"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={toggleMobileMenu}
            >
              {t("nav.sponsor")}
            </Link>
            <Link
              href="/#contact"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={toggleMobileMenu}
            >
              {t("nav.contact")}
            </Link>
            <Link href="/#sponsor" className="w-full mt-4" onClick={toggleMobileMenu}>
              <Button className="w-full rounded-full h-12 text-md">
                {t("nav.support")}
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
