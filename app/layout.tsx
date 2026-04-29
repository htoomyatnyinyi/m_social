import { Geist, Geist_Mono } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/LanguageProvider"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "m | for myanmar",
  description: "Empowering Myanmar's digital landscape with cutting-edge social connectivity and infrastructure.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased scroll-smooth", fontMono.variable, "font-sans", geist.variable)}
    >
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main className="min-h-screen flex flex-col pt-16">
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
