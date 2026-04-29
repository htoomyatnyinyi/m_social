import { Hero } from "@/components/Hero"
import { ScrollSpy } from "@/components/ScrollSpy"
import { LiveSupport } from "@/components/LiveSupport"
import { NetworkStatus } from "@/components/NetworkStatus"
import { Partners } from "@/components/Partners"
import { Features } from "@/components/Features"
import { News } from "@/components/News"

export default function Page() {
  return (
    <div className="flex flex-col">
      <ScrollSpy />
      <LiveSupport />
      <Hero />
      <NetworkStatus />
      <Partners />
      <Features />
      <News />
      
      {/* Short CTA to other pages can be added here if needed */}
    </div>
  )
}
