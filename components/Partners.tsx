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
        <section className="py-20 bg-muted/5 border-y border-border/50">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-12">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
                        Powering Digital Myanmar with
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {partners.map((partner) => (
                        <div key={partner.name} className="flex items-center justify-center">
                            {/* Mock Logo */}
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center font-bold text-xs">
                                    {partner.name[0]}
                                </div>
                                <span className="font-bold text-lg tracking-tighter">{partner.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
