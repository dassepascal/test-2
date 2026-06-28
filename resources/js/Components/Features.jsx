const FEATURES = [
    {
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M13 10V3L4 14h7v7l9-11h-7z" />
        ),
        title: 'Ultra rapide',
        description: 'Performances optimisées pour une expérience fluide, même avec de gros volumes de données.',
    },
    {
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        ),
        title: 'Sécurisé par défaut',
        description: 'Chiffrement de bout en bout, authentification forte et conformité RGPD incluse.',
    },
    {
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        ),
        title: 'Synchronisation temps réel',
        description: 'Vos données se synchronisent instantanément sur tous vos appareils, partout dans le monde.',
    },
    {
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        ),
        title: 'Analytiques avancées',
        description: "Tableaux de bord en temps réel pour suivre vos KPIs et prendre de meilleures décisions.",
    },
    {
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        ),
        title: 'Collaboration équipe',
        description: "Invitez votre équipe, définissez les rôles et travaillez ensemble sans frictions.",
    },
    {
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        ),
        title: 'API & Intégrations',
        description: 'Connectez vos outils existants via notre API REST et nos 50+ intégrations natives.',
    },
];

export default function Features() {
    return (
        <section id="features" className="py-24 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* En-tête */}
                <div className="text-center mb-16">
                    <span className="text-brand-500 font-semibold text-sm uppercase tracking-widest">
                        Fonctionnalités
                    </span>
                    <h2 className="section-title mt-3">
                        Tout ce dont vous avez besoin
                    </h2>
                    <p className="section-subtitle">
                        Un ensemble complet d'outils pensés pour vous faire gagner du temps
                        et vous concentrer sur l'essentiel.
                    </p>
                </div>

                {/* Grille */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {FEATURES.map(({ icon, title, description }) => (
                        <div key={title} className="card group">
                            <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-5
                                            group-hover:bg-brand-500 transition-colors duration-300">
                                <svg className="w-6 h-6 text-brand-500 group-hover:text-white transition-colors duration-300"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {icon}
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-ink mb-2">{title}</h3>
                            <p className="text-ink-muted leading-relaxed text-sm">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
