import { Hero } from "@/components/Hero"
import { ScrollSpy } from "@/components/ScrollSpy"
import { LiveSupport } from "@/components/LiveSupport"
import { NetworkStatus } from "@/components/NetworkStatus"
import { Partners } from "@/components/Partners"
import { ApkRelease } from "@/components/ApkRelease"
import { Features } from "@/components/Features"
import { DeveloperSection } from "@/components/DeveloperSection"
import { DetailedFeatures } from "@/components/DetailedFeatures"
import { NetworkMap } from "@/components/NetworkMap"
import { About } from "@/components/About"
import { Team } from "@/components/Team"
import { News } from "@/components/News"
import { Security } from "@/components/Security"
import { Careers } from "@/components/Careers"
import { Sponsor } from "@/components/Sponsor"
import { Faq } from "@/components/Faq"
import { Contact } from "@/components/Contact"

export default function Page() {
  return (
    <div className="flex flex-col">
      <ScrollSpy />
      {/* <LiveSupport /> */}
      <Hero />
      <NetworkStatus />
      {/* <Partners /> */}
      <ApkRelease />
      {/* <Features /> */}
      {/* <DeveloperSection /> */}
      {/* <DetailedFeatures /> */}
      {/* <NetworkMap /> */}
      <About />
      {/* <Team /> */}
      {/* <News /> */}
      <Security />
      {/* <Careers /> */}
      {/* <Sponsor /> */}
      <Faq />
      {/* <Contact /> */}
    </div>
  )
}
