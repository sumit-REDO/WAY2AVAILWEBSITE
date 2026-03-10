import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-charcoal">
            {/* Background Image Parallax */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 w-full h-[120%]"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal z-10" />
                <img
                    src="/image/hero.jpeg"
                    alt="WAY2AVAIL INTERNATIONAL"
                    className="w-full h-full object-cover object-center"
                />
            </motion.div>

            {/* Hero Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4"
            >
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-gold tracking-[0.3em] uppercase text-sm mb-6"
                >
                    Curated Artisanal Masterpieces
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif text-white uppercase tracking-wider mb-8"
                >
                    Wholesale <br />
                    <span className="text-gradient-gold">Excellence</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <a
                        href="#collections"
                        className="inline-block px-8 py-4 bg-transparent border border-gold text-gold hover:bg-gold hover:text-charcoal transition-all duration-300 font-sans tracking-widest uppercase text-sm cursor-hover"
                    >
                        Explore Catalog
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
            >
                <p className="text-white/50 text-xs tracking-[0.2em] mb-4 uppercase">Scroll</p>
                <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 w-full h-[30%] bg-gold"
                        animate={{
                            top: ['-30%', '100%'],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
