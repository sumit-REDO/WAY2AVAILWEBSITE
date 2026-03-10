import React from 'react';
import { motion } from 'framer-motion';

const IntroLoader = ({ onComplete }) => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
            onAnimationComplete={onComplete}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal pointer-events-none"
        >
            <div className="relative flex flex-col items-center">
                {/* SVG Drawing Effect for W */}
                <svg width="120" height="120" viewBox="0 0 100 100" className="mb-6">
                    <motion.path
                        d="M10,20 L30,80 L50,40 L70,80 L90,20"
                        fill="transparent"
                        stroke="#D4AF37"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                </svg>

                {/* Text Fade In */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-center"
                >
                    <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-[0.2em] text-white">
                        WAY2AVAIL
                    </h1>
                    <p className="mt-4 text-gold tracking-[0.3em] uppercase text-sm font-light">
                        International
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default IntroLoader;
