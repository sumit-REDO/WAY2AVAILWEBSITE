import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, UserPlus, ArrowRight, ArrowLeft, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        company: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`${isLogin ? 'Login' : 'Signup'} attempt for`, formData);
    };

    return (
        <div className="min-h-screen flex flex-col bg-charcoal">
            <Navbar />

            <main className="flex-grow flex items-center justify-center pt-32 pb-20 px-4 relative overflow-hidden">
                {/* Background elements */}
                <div className="absolute top-1/4 left-10 w-96 h-96 bg-gold/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-bronze/5 rounded-full blur-[120px]" />

                <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 items-start">
                    
                    {/* Auth Form Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="glass p-8 md:p-12 rounded-sm border border-white/5 relative overflow-hidden h-full flex flex-col justify-center"
                    >
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>

                        <div className="mb-10 text-center">
                            {isLogin ? (
                                <Lock className="w-8 h-8 text-gold mx-auto mb-6" />
                            ) : (
                                <UserPlus className="w-8 h-8 text-gold mx-auto mb-6" />
                            )}
                            <h1 className="text-3xl font-serif text-white tracking-wider mb-2">
                                {isLogin ? 'Welcome Back' : 'Create Account'}
                            </h1>
                            <p className="text-gray-400 text-sm font-light">
                                {isLogin 
                                    ? 'Access your wholesale account and exclusive catalogs.' 
                                    : 'Apply for a global partnership account today.'}
                            </p>
                        </div>

                        {/* Tabs */}
                        <div className="flex mb-8 border-b border-white/10">
                            <button 
                                onClick={() => setIsLogin(true)}
                                className={`flex-1 pb-3 text-sm font-semibold uppercase tracking-widest transition-colors cursor-hover ${isLogin ? 'text-gold border-b-2 border-gold' : 'text-gray-500 hover:text-white'}`}
                            >
                                Login
                            </button>
                            <button 
                                onClick={() => setIsLogin(false)}
                                className={`flex-1 pb-3 text-sm font-semibold uppercase tracking-widest transition-colors cursor-hover ${!isLogin ? 'text-gold border-b-2 border-gold' : 'text-gray-500 hover:text-white'}`}
                            >
                                Sign Up
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6 flex-grow">
                            <AnimatePresence mode="wait">
                                {!isLogin && (
                                    <motion.div
                                        key="signup-fields"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="space-y-6 overflow-hidden"
                                    >
                                        <div>
                                            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required={!isLogin}
                                                className="w-full bg-charcoalLight/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors duration-300 font-sans cursor-hover"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Company Name</label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                required={!isLogin}
                                                className="w-full bg-charcoalLight/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors duration-300 font-sans cursor-hover"
                                                placeholder="Your Business Ltd."
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div>
                                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Business Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-charcoalLight/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors duration-300 font-sans cursor-hover"
                                    placeholder="partner@company.com"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between items-end mb-2">
                                    <label className="block text-xs uppercase tracking-widest text-gray-500">Password</label>
                                    {isLogin && (
                                        <a href="#" className="text-xs text-gold hover:text-white transition-colors cursor-hover">Forgot Password?</a>
                                    )}
                                </div>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-charcoalLight/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors duration-300 font-sans cursor-hover"
                                    placeholder="••••••••"
                                />
                            </div>

                            {isLogin && (
                                <div className="flex items-center text-xs mt-2">
                                    <label className="flex items-center text-gray-400 cursor-hover">
                                        <input type="checkbox" className="mr-2 accent-gold bg-charcoal border-white/20" />
                                        Remember me
                                    </label>
                                </div>
                            )}

                            <button
                                type="submit"
                                className="w-full bg-gold text-charcoal py-4 mt-8 font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] flex justify-center items-center gap-2 group cursor-hover"
                            >
                                {isLogin ? 'Authenticate' : 'Submit Application'}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                        
                        <div className="mt-8 text-center pt-6 border-t border-white/10">
                            <Link to="/" className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-widest cursor-hover">
                                <ArrowLeft className="w-3 h-3" /> Return Home
                            </Link>
                        </div>
                    </motion.div>

                    {/* Contact Details Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col justify-center h-full px-6 md:px-10 py-12 lg:py-0"
                    >
                        <h2 className="text-3xl font-serif text-white mb-8">Get In Touch</h2>
                        <p className="text-gray-400 font-light mb-12 leading-relaxed">
                            For direct inquiries regarding wholesale pricing, custom orders, or international shipping logistics, please reach out to our dedicated support team.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-charcoalLight/30 group-hover:border-gold group-hover:bg-gold/10 transition-colors">
                                    <Mail className="w-5 h-5 text-gold" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold tracking-wider text-sm mb-1 uppercase">Email Us</h4>
                                    <a href="mailto:partnership@way2avail.com" className="text-gray-400 hover:text-white transition-colors cursor-hover">partnership@way2avail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-charcoalLight/30 group-hover:border-gold group-hover:bg-gold/10 transition-colors">
                                    <Phone className="w-5 h-5 text-gold" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold tracking-wider text-sm mb-1 uppercase">Call Us</h4>
                                    <p className="text-gray-400">+91 (XX) XXXX-XXXX</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-charcoalLight/30 group-hover:border-gold group-hover:bg-gold/10 transition-colors">
                                    <MapPin className="w-5 h-5 text-gold" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold tracking-wider text-sm mb-1 uppercase">Visit Us</h4>
                                    <p className="text-gray-400 leading-relaxed">
                                        Craftsmanship District,<br />
                                        New Delhi, India 1100xx
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Auth;
