"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const sections = [
  { id: "hero", label: "Home" },
  // { id: "services", label: "Services" },
  // { id: "developers", label: "Devs" },
  // { id: "detailed", label: "Details" },
  // { id: "network", label: "Nodes" },
  { id: "about", label: "About" },
  // { id: "team", label: "Team" },
  // { id: "news", label: "News" },
  { id: "security", label: "Security" },
  // { id: "careers", label: "Join Us" },
  // { id: "sponsor", label: "Sponsor" },
  { id: "faq", label: "FAQ" },
  // { id: "contact", label: "Contact" },
]

export function ScrollSpy() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="fixed top-1/2 right-8 z-40 hidden -translate-y-1/2 flex-col gap-6 xl:flex">
      {sections.map((section) => {
        const isActive = activeSection === section.id
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="group flex items-center justify-end gap-4 outline-none"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById(section.id)?.scrollIntoView({
                behavior: "smooth",
              })
            }}
          >
            <span
              className={cn(
                "-translate-x-4 text-xs font-bold tracking-widest uppercase opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100",
                isActive
                  ? "translate-x-0 text-primary opacity-100"
                  : "text-muted-foreground"
              )}
            >
              {section.label}
            </span>
            <div className="relative flex items-center justify-center">
              <div
                className={cn(
                  "h-2 w-2 rounded-full transition-all duration-300",
                  isActive
                    ? "scale-125 bg-primary ring-4 ring-primary/20"
                    : "bg-muted-foreground/30 group-hover:bg-muted-foreground/60"
                )}
              />
            </div>
          </a>
        )
      })}
    </div>
  )
}
