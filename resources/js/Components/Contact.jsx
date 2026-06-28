import { useForm } from '@inertiajs/react';

export default function Contact() {
    const { data, setData, post, processing, errors, wasSuccessful, reset } = useForm({
        name:    '',
        email:   '',
        subject: '',
        message: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post('/contact', {
            onSuccess: () => reset(),
        });
    };

    return (
        <section id="contact" className="py-24 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Infos */}
                    <div className="space-y-8">
                        <div>
                            <span className="text-brand-500 font-semibold text-sm uppercase tracking-widest">
                                Contact
                            </span>
                            <h2 className="section-title mt-3">
                                Une question ? <br />
                                <span className="text-brand-500">On vous répond.</span>
                            </h2>
                            <p className="text-ink-muted mt-4 leading-relaxed">
                                Notre équipe est disponible du lundi au vendredi, de 9h à 18h.
                                Réponse garantie sous 24h ouvrées.
                            </p>
                        </div>

                        <div className="space-y-5">
                            {[
                                {
                                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                                    label: 'Email',
                                    value: 'contact@monproduit.fr',
                                },
                                {
                                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
                                    label: 'Téléphone',
                                    value: '+33 1 23 45 67 89',
                                },
                                {
                                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />,
                                    label: 'Adresse',
                                    value: '123 rue de la Paix, 75001 Paris',
                                },
                            ].map(({ icon, label, value }) => (
                                <div key={label} className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-5 h-5 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            {icon}
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-xs font-semibold text-ink-muted uppercase tracking-wide">{label}</div>
                                        <div className="text-ink font-medium mt-0.5">{value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Formulaire */}
                    <div className="bg-white rounded-3xl border border-border p-8 shadow-sm">
                        {wasSuccessful ? (
                            <div className="text-center py-12 space-y-4">
                                <div className="w-16 h-16 rounded-full bg-success/10 mx-auto flex items-center justify-center">
                                    <svg className="w-8 h-8 text-success" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-ink">Message envoyé !</h3>
                                <p className="text-ink-muted">Nous vous répondons dans les 24h ouvrées.</p>
                            </div>
                        ) : (
                            <form onSubmit={submit} className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-ink mb-1.5">Nom</label>
                                        <input
                                            type="text"
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            placeholder="Votre nom"
                                            className="w-full rounded-xl border-border focus:border-brand-500 focus:ring-brand-500 text-sm"
                                        />
                                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-ink mb-1.5">Email</label>
                                        <input
                                            type="email"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            placeholder="vous@email.com"
                                            className="w-full rounded-xl border-border focus:border-brand-500 focus:ring-brand-500 text-sm"
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-ink mb-1.5">Sujet</label>
                                    <input
                                        type="text"
                                        value={data.subject}
                                        onChange={(e) => setData('subject', e.target.value)}
                                        placeholder="De quoi s'agit-il ?"
                                        className="w-full rounded-xl border-border focus:border-brand-500 focus:ring-brand-500 text-sm"
                                    />
                                    {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-ink mb-1.5">Message</label>
                                    <textarea
                                        rows={5}
                                        value={data.message}
                                        onChange={(e) => setData('message', e.target.value)}
                                        placeholder="Décrivez votre besoin..."
                                        className="w-full rounded-xl border-border focus:border-brand-500 focus:ring-brand-500 text-sm resize-none"
                                    />
                                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="btn-primary w-full py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {processing ? 'Envoi en cours…' : 'Envoyer le message'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
