import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedCollections from '../components/FeaturedCollections';
import Footer from '../components/Footer';
import IntroLoader from '../components/IntroLoader';
import { Link } from 'react-router-dom';

const Home = () => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        // If we've already seen the loader in this session, skip it
        const hasSeenLoader = sessionStorage.getItem('way2avail-loader');
        if (hasSeenLoader) {
            setShowLoader(false);
        }
    }, []);

    const handleLoaderComplete = () => {
        sessionStorage.setItem('way2avail-loader', 'true');
        setShowLoader(false);
    };

    return (
        <>
            {showLoader && <IntroLoader onComplete={handleLoaderComplete} />}
            {!showLoader && (
                <main className="bg-charcoal min-h-screen font-sans text-white">
                    <Navbar />
                    <HeroSection />

                    <div className="relative z-20 bg-charcoal">
                        {/* Split layout introducing the brand */}
                        <section id="heritage" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                                <div>
                                    <h2 className="text-3xl md:text-5xl font-serif mb-6 text-white uppercase tracking-wider">
                                        Legacy of <br /><span className="text-gold">Craftsmanship</span>
                                    </h2>
                                    <div className="w-12 h-[1px] bg-gold mb-8"></div>
                                    <p className="text-gray-400 leading-relaxed font-light text-lg">
                                        WAY2AVAIL INTERNATIONAL serves as the global nexus for India's most exquisite artisanal creations. Elevate your retail collection with our exclusive access catalogs.
                                    </p>
                                    <Link to="/auth" className="inline-block mt-10 px-6 py-3 border border-white/20 hover:border-gold hover:text-gold transition-colors duration-300 text-sm uppercase tracking-widest cursor-hover">
                                        Login / Sign Up
                                    </Link>
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-0 border-2 border-gold/30 translate-x-4 translate-y-4"></div>
                                    <img src={`${import.meta.env.BASE_URL}image/SUN HALO BUDDHA.jpeg`} alt="Heritage Craftsmanship" className="relative z-10 w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-[2s] cursor-hover" />
                                </div>
                            </div>
                        </section>

                        <FeaturedCollections />

                        {/* Portal CTA */}
                        <section className="py-32 relative overflow-hidden flex items-center justify-center">
                            <div className="absolute inset-0 bg-gold/5 z-0 pointer-events-none" />
                            <div className="relative z-10 text-center max-w-3xl px-6">
                                <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Join Our Network</h2>
                                <p className="text-xl text-gray-300 font-light mb-10">
                                    Register today for exclusive access to our wholesale catalog and international pricing.
                                </p>
                                <Link to="/auth" className="bg-gold text-charcoal px-10 py-4 font-semibold tracking-widest uppercase transition-transform hover:scale-105 inline-block cursor-hover">
                                    Login / Sign Up
                                </Link>
                            </div>
                        </section>

                        <Footer />
                    </div>
                </main>
            )}
        </>
    );
};

export default Home;
