import { Head } from '@inertiajs/react';
import Navbar       from '@/Components/Navbar';
import Hero         from '@/Components/Hero';
import Features     from '@/Components/Features';
import About        from '@/Components/About';
import Testimonials from '@/Components/Testimonials';
import Pricing      from '@/Components/Pricing';
import Contact      from '@/Components/Contact';
import Footer       from '@/Components/Footer';

export default function Landing({ flash }) {
    return (
        <>
            <Head title="Accueil" />
            <Navbar />
            <main>
                <Hero />
                <Features />
                <About />
                <Testimonials />
                <Pricing />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
