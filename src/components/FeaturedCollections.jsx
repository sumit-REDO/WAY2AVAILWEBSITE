import React from 'react';
import { motion } from 'framer-motion';

const collections = [
    {
        id: 1,
        title: 'Colorful Auto Rickshaw',
        category: 'Handcrafted Decor',
        image: `${import.meta.env.BASE_URL}image/COLOURFULL AUTO RICKSHAW.jpeg`,
    },
    {
        id: 2,
        title: 'Intricate Wooden Elephant',
        category: 'Traditional Art',
        image: `${import.meta.env.BASE_URL}image/INTRICA WOODEN ELEPHANT.jpeg`,
    },
    {
        id: 3,
        title: 'Udaipur Tea Trolley',
        category: 'Premium Furniture',
        image: `${import.meta.env.BASE_URL}image/UDAIPUR TEA TROLLEY.jpeg`,
    },
    {
        id: 4,
        title: 'Hand Painted Cycle Rickshaw',
        category: 'Heritage Models',
        image: `${import.meta.env.BASE_URL}image/HAND PAINTED CYCLE RICKHSHAW.jpeg`,
    },
    {
        id: 5,
        title: 'Sun Halo Buddha',
        category: 'Spiritual Decor',
        image: `${import.meta.env.BASE_URL}image/SUN HALO BUDDHA.jpeg`,
    },
    {
        id: 6,
        title: 'Nesting Doll',
        category: 'Aesthetic Curios',
        image: `${import.meta.env.BASE_URL}image/NESTING DOLL.jpeg`,
    },
    {
        id: 7,
        title: 'Penguin Case',
        category: 'Novelty Boxes',
        image: `${import.meta.env.BASE_URL}image/PENGUIN CASE.jpeg`,
    },
    {
        id: 8,
        title: 'Sun Motif',
        category: 'Wall Art',
        image: `${import.meta.env.BASE_URL}image/SUN.jpeg`,
    }
];

const FeaturedCollections = () => {
    return (
        <section id="collections" className="py-24 bg-charcoal relative">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="text-gold tracking-[0.2em] uppercase text-sm mb-4 block">Our Portfolio</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white">Featured Collections</h2>
                    <div className="w-24 h-[1px] bg-gold mx-auto mt-8"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {collections.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative cursor-hover block h-[400px] overflow-hidden bg-charcoalLight rounded-sm"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                            <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-gold text-xs tracking-widest uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {item.category}
                                </span>
                                <h3 className="text-xl font-serif text-white">{item.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCollections;
