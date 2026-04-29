import { Briefcase, MapPin, ArrowRight, Code, Palette, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

const jobs = [
  { 
    title: "Senior Fullstack Engineer", 
    department: "Engineering", 
    location: "Yangon",
    type: "Full-time",
    icon: Code 
  },
  { 
    title: "UI/UX Designer", 
    department: "Product", 
    location: "Yangon",
    type: "Full-time",
    icon: Palette 
  },
  { 
    title: "Security Researcher", 
    department: "Security", 
    location: "Remote/Yangon",
    type: "Contract",
    icon: Globe 
  },
]

export function Careers() {
  return (
    <section id="careers" className="py-24 bg-muted/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
              <Briefcase className="w-4 h-4" />
              Join the Mission
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Build the future of <br/>
              digital Myanmar.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're looking for passionate individuals to join our Yangon-based team. Help us scale the "m" ecosystem and empower millions of users.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background border rounded-full px-4 py-2 shadow-sm">
            <MapPin className="w-4 h-4 text-primary" />
            Yangon Innovation Center
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {jobs.map((job, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-background border border-border/50 rounded-3xl p-8 h-full flex flex-col hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5">
                <div className={`w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <job.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {job.title}
                </h3>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-muted px-2 py-1 rounded-md">{job.department}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-muted px-2 py-1 rounded-md">{job.type}</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold mt-auto group-hover:gap-3 transition-all text-primary">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="ghost" className="text-muted-foreground hover:text-primary">
            Don't see a fit? Send us an open application.
          </Button>
        </div>
      </div>
    </section>
  )
}
