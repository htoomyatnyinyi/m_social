import { About } from "@/components/About"
import { Team } from "@/components/Team"
import { Security } from "@/components/Security"
import { Partners } from "@/components/Partners"

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-12 py-20">
      <About />
      <Team />
      <Security />
      <Partners />
    </div>
  )
}
