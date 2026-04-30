const partners = [
  { name: "KBZ Bank", logo: "/partners/kbz.svg" },
  { name: "Wave Money", logo: "/partners/wave.svg" },
  { name: "CB Bank", logo: "/partners/cb.svg" },
  { name: "MPT", logo: "/partners/mpt.svg" },
  { name: "Ooredoo", logo: "/partners/ooredoo.svg" },
  { name: "Telenor", logo: "/partners/telenor.svg" },
]

export function Partners() {
  return (
    <section className="border-y border-border/50 bg-muted/5 py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold tracking-[0.2em] text-muted-foreground/60 uppercase">
            Powering Digital Myanmar with
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12 opacity-50 grayscale transition-all duration-500 hover:grayscale-0 md:gap-20">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center"
            >
              {/* Mock Logo */}
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-xs font-bold">
                  {partner.name[0]}
                </div>
                <span className="text-lg font-bold tracking-tighter">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
