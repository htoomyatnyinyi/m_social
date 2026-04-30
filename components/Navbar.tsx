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
      className={`fixed z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "top-0 border-b bg-background/70 shadow-md backdrop-blur-xl"
          : "top-0 border-transparent bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2"
          aria-label="m Myanmar Social Home"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xl font-bold text-primary-foreground transition-transform group-hover:scale-105">
            m
          </div>
          <div>
            <span className="hidden text-sm font-semibold tracking-tight sm:block">
              myanmar
            </span>
            <span className="hidden text-[8px] tracking-tight sm:block">
              social
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden cursor-pointer items-center gap-8 md:flex">
          {/* <Link
            href="/#services"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("nav.services")}
          </Link> */}
          {/* <Link
            href="/#developers"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("nav.developers")}
          </Link> */}
          <Link
            href="/#about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("nav.about")}
          </Link>
          {/* <Link
            href="/#team"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("nav.team")}
          </Link> */}
          {/* <Link
            href="/#news"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("nav.news")}
          </Link> */}
          <Link
            href="/#security"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("nav.security")}
          </Link>
          <Link
            href="/#faq"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("nav.faq")}
          </Link>
          {/* <Link
            href="/#careers"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("nav.careers")}
          </Link> */}
          {/* <Link
            href="/#sponsor"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("nav.sponsor")}
          </Link> */}
          {/* <Link
            href="/#contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("nav.contact")}
          </Link> */}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Language Toggle */}
          <div className="hidden items-center rounded-full border border-border/50 bg-muted/50 p-1 sm:flex">
            <button
              onClick={() => setLang("EN")}
              className={`rounded-full px-3 py-1.5 text-xs font-bold transition-all ${lang === "EN" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("MM")}
              className={`rounded-full px-3 py-1.5 text-xs font-bold transition-all ${lang === "MM" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
            >
              MM
            </button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="rounded-full px-3 text-xs font-bold sm:hidden"
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
            <Sun className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          </Button>

          {/* <Link href="/#sponsor" className="hidden md:block">
            <Button className="rounded-full px-6 shadow-md hover:shadow-lg transition-all active:scale-95">
              {t("nav.support")}
            </Button>
          </Link> */}

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full animate-in border-b border-border bg-background p-6 shadow-xl slide-in-from-top-2 md:hidden">
          <nav className="flex flex-col items-center gap-6">
            {/* <Link
              href="/#services"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={toggleMobileMenu}
            >
              {t("nav.services")}
            </Link> */}
            <Link
              href="/#about"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={toggleMobileMenu}
            >
              {t("nav.about")}
            </Link>

            <Link
              href="/#security"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={toggleMobileMenu}
            >
              {t("nav.security")}
            </Link>
            <Link
              href="/#faq"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={toggleMobileMenu}
            >
              {t("nav.faq")}
            </Link>
            {/* <Link
              href="/#team"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={toggleMobileMenu}
            >
              {t("nav.team")}
            </Link>
            <Link
              href="/#news"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={toggleMobileMenu}
            >
              {t("nav.news")}
            </Link>
            <Link
              href="/#sponsor"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={toggleMobileMenu}
            >
              {t("nav.sponsor")}
            </Link>
            <Link
              href="/#contact"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={toggleMobileMenu}
            >
              {t("nav.contact")}
            </Link>
            <Link
              href="/#sponsor"
              className="mt-4 w-full"
              onClick={toggleMobileMenu}
            >
              <Button className="text-md h-12 w-full rounded-full">
                {t("nav.support")}
              </Button>
            </Link> */}
          </nav>
        </div>
      )}
    </header>
  )
}
