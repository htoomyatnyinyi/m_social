// import { Github, Twitter, Linkedin } from "lucide-react"

const team = [
  {
    name: "Htoo Myat Nyin Yi",
    role: "Founder & Lead Architect",
    bio: "Visionary behind the m ecosystem, specializing in distributed systems and Myanmar digital infrastructure.",
    image: "/team/htoo.jpg", // Placeholder
  },
  {
    name: "Kyaw Zay Ya",
    role: "Head of Mobile",
    bio: "Expert in building high-performance Android applications optimized for low-bandwidth environments.",
    image: "/team/kyaw.jpg",
  },
  {
    name: "May Thu",
    role: "UI/UX Director",
    bio: "Focuses on creating culturally resonant digital experiences for the Myanmar populace.",
    image: "/team/may.jpg",
  }
]

export function Team() {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Meet the Builders
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A dedicated team of engineers and designers based in Yangon, working to define the future of social connectivity in Myanmar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="relative aspect-square mb-6 overflow-hidden rounded-3xl bg-muted">
                {/* Placeholder for member image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent flex items-center justify-center">
                  <div className="text-4xl font-bold opacity-20">{member.name[0]}</div>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                    {/* <Twitter className="w-5 h-5" /> */}
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                    {/* <Linkedin className="w-5 h-5" /> */}
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                    {/* <Github className="w-5 h-5" /> */}
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <div className="text-primary text-sm font-semibold mb-4 uppercase tracking-wider">{member.role}</div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
