export default function Hero() {
    const handleScroll = (href) => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
            {/* Fond dégradé subtil */}
            <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-white pointer-events-none"
            />
            <div
                aria-hidden
                className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand-100/40 blur-3xl pointer-events-none"
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Texte */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-500 text-sm font-semibold px-4 py-2 rounded-full border border-brand-100">
                            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                            Nouveau — Version 2.0 disponible
                        </div>

                        <h1 className="text-5xl md:text-6xl font-extrabold text-ink leading-tight">
                            Le produit qui
                            <span className="text-brand-500"> change tout</span>
                        </h1>

                        <p className="text-xl text-ink-muted leading-relaxed max-w-lg">
                            Simplifiez votre quotidien, gagnez du temps et atteignez vos objectifs
                            plus rapidement que jamais — sans complexité inutile.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button onClick={() => handleScroll('#pricing')} className="btn-primary px-8 py-4 text-base">
                                Commencer gratuitement
                            </button>
                            <button onClick={() => handleScroll('#features')} className="btn-secondary px-8 py-4 text-base">
                                En savoir plus
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-8 pt-4">
                            {[
                                { value: '10 000+', label: 'Utilisateurs actifs' },
                                { value: '98%',     label: 'Satisfaction client' },
                                { value: '< 2min',  label: "Temps d'installation" },
                            ].map(({ value, label }) => (
                                <div key={label}>
                                    <div className="text-2xl font-bold text-ink">{value}</div>
                                    <div className="text-sm text-ink-muted">{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Illustration / Screenshot placeholder */}
                    <div className="relative">
                        <div className="bg-surface rounded-3xl border border-border shadow-2xl overflow-hidden aspect-[4/3] flex items-center justify-center">
                            <div className="text-center space-y-3 p-8">
                                <div className="w-16 h-16 rounded-2xl bg-brand-100 mx-auto flex items-center justify-center">
                                    <svg className="w-8 h-8 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <p className="text-ink-muted text-sm font-medium">
                                    Remplacer par une capture<br />ou illustration du produit
                                </p>
                                <p className="text-xs text-ink-muted/60">
                                    public/assets/images/hero.png
                                </p>
                            </div>
                        </div>

                        {/* Badge flottant */}
                        <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg border border-border p-4 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                                <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-ink">Nouveau client</div>
                                <div className="text-xs text-ink-muted">Il y a 2 minutes</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
