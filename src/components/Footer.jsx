import React from 'react';
import { Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#0a0a0a] border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <Globe className="w-6 h-6 text-gold" />
                            <span className="font-serif font-semibold text-xl tracking-wider text-white">
                                WAY2AVAIL <span className="text-gold">INTL.</span>
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            Global purveyors of artisanal Indian legacy. Fostering wholesale excellence and international trade partnerships since inception.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-serif tracking-wider mb-6">Sitemap</h4>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors text-sm cursor-hover">Home</Link></li>
                            <li><Link to="/#collections" className="text-gray-400 hover:text-gold transition-colors text-sm cursor-hover">Collections</Link></li>
                            <li><Link to="/auth" className="text-gray-400 hover:text-gold transition-colors text-sm cursor-hover">Login / Sign Up</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-serif tracking-wider mb-6">Inquiries</h4>
                        <ul className="space-y-3">
                            <li className="text-gray-400 text-sm">partnership@way2avail.com</li>
                            <li className="text-gray-400 text-sm">New Delhi, India</li>
                            <li className="text-gray-400 text-sm">+91 (XX) XXXX-XXXX</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-xs tracking-widest uppercase mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} WAY2AVAIL INTERNATIONAL. All Rights Reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs uppercase cursor-hover">Privacy</a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs uppercase cursor-hover">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
