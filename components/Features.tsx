import { Smartphone, LayoutDashboard, Server, Shield, Zap, Globe2 } from "lucide-react"

const features = [
  {
    title: "Social App Ecosystem",
    description: "A highly engaging, culturally tailored social networking application built for the Myanmar populace. Fostering authentic connections.",
    icon: Smartphone,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time data visualization and administrative control panel. Understand your user metrics and growth trajectories at a glance.",
    icon: LayoutDashboard,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    title: "Robust Server API",
    description: "High-performance backend infrastructure designed for scale. Secure, fast, and reliable RESTful and GraphQL APIs.",
    icon: Server,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    title: "Bank-Grade Security",
    description: "End-to-end encryption and advanced data protection protocols ensuring user privacy is maintained at all times.",
    icon: Shield,
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
  {
    title: "Lightning Fast Delivery",
    description: "Optimized content delivery networks across Southeast Asia ensuring zero latency for media-rich social interactions.",
    icon: Zap,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  {
    title: "Localized Experience",
    description: "Deep integration with Myanmar fonts, language processing, and local payment gateways for a seamless user journey.",
    icon: Globe2,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
]

export function Features() {
  return (
    <section id="services" className="py-24 bg-muted/20 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            The <span className="text-primary">m</span> Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We provide an end-to-end suite of digital products. From the user's palm to the server rack, social_ltd controls the entire vertical to ensure unmatched quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-3xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 overflow-hidden"
            >
              {/* Hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
