const VALUES = [
    { title: 'Transparence',  desc: "Nous communiquons ouvertement sur nos décisions et nos progrès." },
    { title: 'Simplicité',    desc: "Chaque fonctionnalité doit être intuitive dès la première utilisation." },
    { title: "Impact d'abord", desc: "Nous mesurons notre succès à l'impact réel sur votre quotidien." },
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Image placeholder */}
                    <div className="relative order-2 lg:order-1">
                        <div className="bg-surface rounded-3xl border border-border overflow-hidden aspect-[4/3]
                                        flex items-center justify-center">
                            <div className="text-center space-y-2 p-8">
                                <div className="w-16 h-16 rounded-2xl bg-brand-100 mx-auto flex items-center justify-center">
                                    <svg className="w-8 h-8 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <p className="text-ink-muted text-sm font-medium">
                                    Photo équipe / bureau
                                </p>
                                <p className="text-xs text-ink-muted/60">public/assets/images/about.jpg</p>
                            </div>
                        </div>

                        {/* Badge expérience */}
                        <div className="absolute -top-4 -right-4 bg-brand-500 text-white rounded-2xl p-5 text-center shadow-xl">
                            <div className="text-3xl font-extrabold">5+</div>
                            <div className="text-xs font-medium mt-1 opacity-90">ans d'expérience</div>
                        </div>
                    </div>

                    {/* Contenu */}
                    <div className="order-1 lg:order-2 space-y-8">
                        <div>
                            <span className="text-brand-500 font-semibold text-sm uppercase tracking-widest">
                                À propos
                            </span>
                            <h2 className="section-title mt-3">
                                Nous croyons en un produit qui <span className="text-brand-500">vous respecte</span>
                            </h2>
                        </div>

                        <p className="text-ink-muted leading-relaxed text-lg">
                            Fondée en 2019, notre équipe de passionnés a une seule obsession :
                            créer des outils qui s'adaptent à vous, pas l'inverse. Nous combinons
                            design minimaliste et technologie robuste pour vous offrir le meilleur.
                        </p>

                        {/* Valeurs */}
                        <div className="space-y-4">
                            {VALUES.map(({ title, desc }) => (
                                <div key={title} className="flex gap-4 items-start">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center mt-0.5">
                                        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-ink">{title}</div>
                                        <div className="text-ink-muted text-sm mt-0.5">{desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
