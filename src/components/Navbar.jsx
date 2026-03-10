import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs) => twMerge(clsx(inputs));

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Collections', path: '/#collections' },
        { name: 'Heritage', path: '/#heritage' },
        { name: 'Login / Sign Up', path: '/auth' },
    ];

    return (
        <header
            className={cn(
                'fixed top-0 w-full z-50 transition-all duration-300 pointer-events-auto',
                isScrolled ? 'py-4 glass border-b border-white/5' : 'py-6 bg-transparent'
            )}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 group cursor-hover">
                    <Globe className="w-6 h-6 text-gold group-hover:rotate-180 transition-transform duration-700" />
                    <span className="font-serif font-semibold text-xl tracking-wider text-white">
                        WAY2AVAIL <span className="text-gold">INTL.</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={cn(
                                'text-sm uppercase tracking-widest font-medium transition-colors duration-300 relative group',
                                location.pathname === link.path ? 'text-gold' : 'text-gray-300 hover:text-white'
                            )}
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white cursor-hover focus:outline-none"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden absolute top-full left-0 w-full glass flex flex-col items-center justify-center space-y-8"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-2xl font-serif text-white hover:text-gold transition-colors duration-300"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
