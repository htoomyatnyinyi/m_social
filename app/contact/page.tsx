import { Contact } from "@/components/Contact"
import { Faq } from "@/components/Faq"
import { Sponsor } from "@/components/Sponsor"

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-12 py-20">
      <div className="container mx-auto px-6 lg:px-12 text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Connect With Us</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Have questions or want to support our mission? We're here to help.
        </p>
      </div>
      <Contact />
      <Faq />
      <Sponsor />
    </div>
  )
}
