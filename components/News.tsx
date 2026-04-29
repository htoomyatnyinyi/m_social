import { ArrowRight } from "lucide-react"
import Link from "next/link"

const news = [
  {
    title: "m ecosystem reaches 10,000 active users in first week",
    date: "Oct 24, 2023",
    category: "Milestone",
    excerpt: "We are thrilled to announce that our beta platform has seen unprecedented growth in the Yangon region..."
  },
  {
    title: "New high-performance server node launched in Mandalay",
    date: "Oct 20, 2023",
    category: "Infrastructure",
    excerpt: "To ensure ultra-low latency for our users in Upper Myanmar, we have deployed a new edge server node..."
  },
  {
    title: "social_ltd partners with local NGOs for digital literacy",
    date: "Oct 15, 2023",
    category: "Impact",
    excerpt: "As part of our commitment to Myanmar, we are launching a series of workshops to empower rural communities..."
  }
]

export function News() {
  return (
    <section id="news" className="py-24 bg-muted/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Latest from m.co
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay updated with the latest developments, milestones, and stories from the social_ltd team.
            </p>
          </div>
          <Link href="#" className="inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all">
            View all news
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-background border border-border/50 rounded-3xl p-8 h-full flex flex-col hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5">
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                  {item.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all">
                  Read article
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
