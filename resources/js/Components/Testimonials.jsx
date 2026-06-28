import { useState } from 'react';

const TESTIMONIALS = [
    {
        name:    'Sophie Martin',
        role:    'Directrice Marketing, Acme Corp',
        avatar:  'SM',
        rating:  5,
        quote:   "MonProduit a transformé notre façon de travailler. En 3 semaines, nous avons réduit nos délais de 40%. Je le recommande à toutes les équipes qui veulent aller plus vite.",
        color:   'bg-purple-100 text-purple-700',
    },
    {
        name:    'Julien Dupont',
        role:    'CTO, StartupXYZ',
        avatar:  'JD',
        rating:  5,
        quote:   "L'API est un rêve — bien documentée, stable, et le support répond en moins d'une heure. Rare de trouver ça chez un éditeur SaaS. On ne reviendra jamais en arrière.",
        color:   'bg-blue-100 text-blue-700',
    },
    {
        name:    'Amira Benali',
        role:    'Freelance Designer',
        avatar:  'AB',
        rating:  5,
        quote:   "Interface magnifique, onboarding en 5 minutes chrono. Exactement ce dont j'avais besoin pour gérer mes clients sans prise de tête. Le plan Starter suffit amplement.",
        color:   'bg-green-100 text-green-700',
    },
];

function Stars({ count }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className={`w-5 h-5 ${i < count ? 'text-yellow-400' : 'text-border'}`}
                    fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

export default function Testimonials() {
    const [active, setActive] = useState(0);

    return (
        <section id="testimonials" className="py-24 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <span className="text-brand-500 font-semibold text-sm uppercase tracking-widest">
                        Témoignages
                    </span>
                    <h2 className="section-title mt-3">Ils nous font confiance</h2>
                    <p className="section-subtitle">
                        Plus de 10 000 utilisateurs dans 40 pays nous font confiance chaque jour.
                    </p>
                </div>

                {/* Grille desktop */}
                <div className="hidden md:grid md:grid-cols-3 gap-6">
                    {TESTIMONIALS.map(({ name, role, avatar, rating, quote, color }) => (
                        <div key={name} className="card flex flex-col gap-5">
                            <Stars count={rating} />
                            <p className="text-ink-muted leading-relaxed text-sm flex-1">"{quote}"</p>
                            <div className="flex items-center gap-3 pt-2 border-t border-border">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${color}`}>
                                    {avatar}
                                </div>
                                <div>
                                    <div className="font-semibold text-ink text-sm">{name}</div>
                                    <div className="text-xs text-ink-muted">{role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Carousel mobile */}
                <div className="md:hidden">
                    <div className="card flex flex-col gap-5">
                        <Stars count={TESTIMONIALS[active].rating} />
                        <p className="text-ink-muted leading-relaxed text-sm">
                            "{TESTIMONIALS[active].quote}"
                        </p>
                        <div className="flex items-center gap-3 pt-2 border-t border-border">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${TESTIMONIALS[active].color}`}>
                                {TESTIMONIALS[active].avatar}
                            </div>
                            <div>
                                <div className="font-semibold text-ink text-sm">{TESTIMONIALS[active].name}</div>
                                <div className="text-xs text-ink-muted">{TESTIMONIALS[active].role}</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center gap-2 mt-6">
                        {TESTIMONIALS.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
                                    i === active ? 'bg-brand-500' : 'bg-border'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
