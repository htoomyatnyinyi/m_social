import { Geist, Geist_Mono } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/LanguageProvider"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { cn } from "@/lib/utils"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "m | Myanmar's Next-Gen Social Network",
  description:
    "Connect, share, and build with 'm', the digital social ecosystem designed specifically for Myanmar. Lightweight, secure, and optimized for local performance.",
  keywords: [
    "Myanmar Social Network",
    "Burmese Social App",
    "Digital Myanmar",
    "Social Media Myanmar",
    "m-social",
    "Myanmar Tech",
    "Myanmar Developer",
  ],
  authors: [{ name: "m project team" }],
  openGraph: {
    title: "m | Myanmar's Next-Gen Social Network",
    description:
      "The digital social ecosystem designed specifically for Myanmar. Optimized for local performance and community needs.",
    url: "https://m-social.com", // Replace with actual URL
    siteName: "m Social",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "m | Myanmar's Next-Gen Social Network",
    description:
      "The digital social ecosystem designed specifically for Myanmar. Optimized for local performance.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
      className={cn(
        "scroll-smooth antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main className="flex min-h-screen flex-col pt-16">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
