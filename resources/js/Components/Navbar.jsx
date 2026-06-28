import { useState, useEffect } from 'react';

const NAV_LINKS = [
    { label: 'Produit',          href: '#hero' },
    { label: 'Fonctionnalités',  href: '#features' },
    { label: 'À propos',         href: '#about' },
    { label: 'Témoignages',      href: '#testimonials' },
    { label: 'Tarifs',           href: '#pricing' },
    { label: 'Contact',          href: '#contact' },
];

export default function Navbar() {
    const [scrolled,     setScrolled]     = useState(false);
    const [menuOpen,     setMenuOpen]     = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: '-40% 0px -55% 0px' },
        );

        NAV_LINKS.forEach(({ href }) => {
            const el = document.querySelector(href);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setMenuOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
                scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-border' : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center">
                            {/* Remplacer par <img src="/assets/logo/logo.png" alt="Logo" className="w-8 h-8 object-contain" /> */}
                            <span className="text-white font-bold text-lg">M</span>
                        </div>
                        <span className="font-bold text-xl text-ink">MonProduit</span>
                    </a>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {NAV_LINKS.map(({ label, href }) => (
                            <a
                                key={href}
                                href={href}
                                onClick={(e) => handleNavClick(e, href)}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                                    activeSection === href.slice(1)
                                        ? 'text-brand-500 bg-brand-50'
                                        : 'text-ink-muted hover:text-ink hover:bg-surface'
                                }`}
                            >
                                {label}
                            </a>
                        ))}
                    </nav>

                    {/* CTA desktop */}
                    <div className="hidden md:flex items-center gap-3">
                        <a
                            href="#pricing"
                            onClick={(e) => handleNavClick(e, '#pricing')}
                            className="btn-primary text-sm py-2"
                        >
                            Démarrer gratuitement
                        </a>
                    </div>

                    {/* Hamburger mobile */}
                    <button
                        className="md:hidden p-2 rounded-lg text-ink-muted hover:bg-surface"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Menu"
                    >
                        {menuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile menu */}
                {menuOpen && (
                    <div className="md:hidden border-t border-border bg-white py-3 space-y-1">
                        {NAV_LINKS.map(({ label, href }) => (
                            <a
                                key={href}
                                href={href}
                                onClick={(e) => handleNavClick(e, href)}
                                className="block px-4 py-2 text-sm font-medium text-ink-muted hover:text-ink hover:bg-surface rounded-lg"
                            >
                                {label}
                            </a>
                        ))}
                        <div className="px-4 pt-2">
                            <a
                                href="#pricing"
                                onClick={(e) => handleNavClick(e, '#pricing')}
                                className="btn-primary w-full text-sm py-2"
                            >
                                Démarrer gratuitement
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
