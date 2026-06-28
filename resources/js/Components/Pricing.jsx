import { useState } from 'react';

const PLANS = [
    {
        name:        'Starter',
        monthly:     0,
        annual:      0,
        description: 'Pour démarrer et explorer sans engagement.',
        cta:         'Commencer gratuitement',
        featured:    false,
        features: [
            '1 utilisateur',
            '5 projets',
            '1 Go de stockage',
            'Support communauté',
        ],
        missing: ['API Access', 'Analytiques avancées', 'SLA 99,9%'],
    },
    {
        name:        'Pro',
        monthly:     29,
        annual:      23,
        description: 'Pour les équipes qui veulent aller plus loin.',
        cta:         'Essai gratuit 14 jours',
        featured:    true,
        features: [
            '10 utilisateurs',
            'Projets illimités',
            '100 Go de stockage',
            'Support prioritaire',
            'API Access',
            'Analytiques avancées',
        ],
        missing: ['SLA 99,9%'],
    },
    {
        name:        'Enterprise',
        monthly:     null,
        annual:      null,
        description: 'Pour les grandes organisations avec des besoins spécifiques.',
        cta:         'Nous contacter',
        featured:    false,
        features: [
            'Utilisateurs illimités',
            'Projets illimités',
            'Stockage illimité',
            'Support dédié 24/7',
            'API Access',
            'Analytiques avancées',
            'SLA 99,9%',
        ],
        missing: [],
    },
];

function Check() {
    return (
        <svg className="w-4 h-4 text-success flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
    );
}

function Cross() {
    return (
        <svg className="w-4 h-4 text-border flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
    );
}

export default function Pricing() {
    const [annual, setAnnual] = useState(false);

    const handleCta = (plan) => {
        if (plan.name === 'Enterprise' || plan.name === 'Starter') {
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
        } else {
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="pricing" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12">
                    <span className="text-brand-500 font-semibold text-sm uppercase tracking-widest">
                        Tarifs
                    </span>
                    <h2 className="section-title mt-3">Des prix clairs, sans surprise</h2>
                    <p className="section-subtitle">
                        Commencez gratuitement. Évoluez à votre rythme.
                    </p>

                    {/* Toggle mensuel / annuel */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <span className={`text-sm font-medium ${!annual ? 'text-ink' : 'text-ink-muted'}`}>Mensuel</span>
                        <button
                            onClick={() => setAnnual(!annual)}
                            className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none ${
                                annual ? 'bg-brand-500' : 'bg-border'
                            }`}
                        >
                            <span className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-300 ${
                                annual ? 'translate-x-6' : 'translate-x-0'
                            }`} />
                        </button>
                        <span className={`text-sm font-medium ${annual ? 'text-ink' : 'text-ink-muted'}`}>
                            Annuel
                            <span className="ml-1.5 bg-success/10 text-success text-xs font-semibold px-2 py-0.5 rounded-full">
                                -20%
                            </span>
                        </span>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 items-start">
                    {PLANS.map((plan) => (
                        <div
                            key={plan.name}
                            className={`rounded-2xl border p-8 flex flex-col gap-6 transition-shadow duration-300 ${
                                plan.featured
                                    ? 'border-brand-500 bg-brand-500 text-white shadow-2xl shadow-brand-500/20 scale-105'
                                    : 'border-border bg-white hover:shadow-lg'
                            }`}
                        >
                            {plan.featured && (
                                <div className="text-center">
                                    <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        Populaire
                                    </span>
                                </div>
                            )}

                            <div>
                                <h3 className={`text-xl font-bold ${plan.featured ? 'text-white' : 'text-ink'}`}>
                                    {plan.name}
                                </h3>
                                <p className={`text-sm mt-1 ${plan.featured ? 'text-white/70' : 'text-ink-muted'}`}>
                                    {plan.description}
                                </p>
                            </div>

                            <div>
                                {plan.monthly === null ? (
                                    <div className={`text-3xl font-extrabold ${plan.featured ? 'text-white' : 'text-ink'}`}>
                                        Sur devis
                                    </div>
                                ) : (
                                    <div className="flex items-end gap-1">
                                        <span className={`text-5xl font-extrabold ${plan.featured ? 'text-white' : 'text-ink'}`}>
                                            {annual ? plan.annual : plan.monthly}€
                                        </span>
                                        <span className={`text-sm mb-2 ${plan.featured ? 'text-white/70' : 'text-ink-muted'}`}>
                                            / mois
                                        </span>
                                    </div>
                                )}
                                {annual && plan.monthly !== null && plan.monthly > 0 && (
                                    <p className={`text-xs mt-1 ${plan.featured ? 'text-white/70' : 'text-ink-muted'}`}>
                                        Facturé {plan.annual * 12}€/an
                                    </p>
                                )}
                            </div>

                            <button
                                onClick={() => handleCta(plan)}
                                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                                    plan.featured
                                        ? 'bg-white text-brand-500 hover:bg-brand-50'
                                        : 'btn-primary'
                                }`}
                            >
                                {plan.cta}
                            </button>

                            <ul className="space-y-3">
                                {plan.features.map((f) => (
                                    <li key={f} className="flex items-center gap-3 text-sm">
                                        <Check />
                                        <span className={plan.featured ? 'text-white' : 'text-ink'}>
                                            {f}
                                        </span>
                                    </li>
                                ))}
                                {plan.missing.map((f) => (
                                    <li key={f} className="flex items-center gap-3 text-sm opacity-40">
                                        <Cross />
                                        <span className={plan.featured ? 'text-white' : 'text-ink-muted'}>
                                            {f}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
