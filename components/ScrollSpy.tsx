"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const sections = [
  { id: "hero", label: "Home" },
  { id: "services", label: "Services" },
  { id: "developers", label: "Devs" },
  { id: "detailed", label: "Details" },
  { id: "network", label: "Nodes" },
  { id: "about", label: "About" },
  { id: "team", label: "Team" },
  { id: "news", label: "News" },
  { id: "security", label: "Security" },
  { id: "sponsor", label: "Sponsor" },
  { id: "contact", label: "Contact" },
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
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-6">
      {sections.map((section) => {
        const isActive = activeSection === section.id
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="group flex items-center gap-4 justify-end outline-none"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById(section.id)?.scrollIntoView({
                behavior: "smooth",
              })
            }}
          >
            <span 
              className={cn(
                "text-xs font-bold uppercase tracking-widest transition-all duration-300 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0",
                isActive ? "opacity-100 translate-x-0 text-primary" : "text-muted-foreground"
              )}
            >
              {section.label}
            </span>
            <div className="relative flex items-center justify-center">
              <div 
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  isActive 
                    ? "bg-primary scale-125 ring-4 ring-primary/20" 
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
