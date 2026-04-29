import { DetailedFeatures } from "@/components/DetailedFeatures"
import { ApkRelease } from "@/components/ApkRelease"

export default function SolutionsPage() {
  return (
    <div className="flex flex-col gap-12 py-20">
      <div className="container mx-auto px-6 lg:px-12 text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Our Solutions</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Deep dive into the technology powering Myanmar's next-generation social ecosystem.
        </p>
      </div>
      <DetailedFeatures />
      <ApkRelease />
    </div>
  )
}
