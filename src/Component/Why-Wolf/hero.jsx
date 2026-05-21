import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative w-full h-[100dvh] bg-[#09090B] flex items-center px-8 md:px-24 overflow-hidden">
            <div className="absolute inset-0 bg-sentinel-dots opacity-20 pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

                {/* Columna de Texto (60%) */}
                <div className="md:col-span-7">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-blue-500 font-mono text-xs uppercase tracking-[0.4em] mb-6 block"
                    >
                        Nuestra Filosofía
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl md:text-6xl font-serif text-white leading-[1.1] mb-8"
                    >
                        El software común <br />
                        <span className="italic text-zinc-500">destruye marcas.</span> <br />
                        La ingeniería de precisión <br />
                        las escala.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-zinc-400 text-sm md:text-lg max-w-xl leading-relaxed font-light"
                    >
                        Mientras otros ensamblan plantillas pesadas y obsoletas, nosotros esculpimos código nativo. Eliminamos la fricción técnica para que tu única preocupación sea el crecimiento de tu negocio. No diseñamos pantallas; arquitectamos activos digitales.
                    </motion.p>
                </div>

                {/* Columna Visual (40% - Gráfico Minimalista) */}
                <div className="md:col-span-5 flex justify-center">
                    <div className="relative w-full max-w-[400px] h-[300px] border border-zinc-900 rounded-sm p-8 bg-[#0C0C0E]/50 backdrop-blur-sm">
                        {/* Simulación de gráfico de rendimiento */}
                        <svg viewBox="0 0 200 100" className="w-full h-full overflow-visible">
                            <motion.path
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                                d="M0,80 Q50,75 80,40 T180,10"
                                fill="none"
                                stroke="#1E3A8A"
                                strokeWidth="2"
                            />
                            <motion.circle
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 1.5 }}
                                cx="180" cy="10" r="4" fill="#3B82F6"
                            />
                        </svg>
                        <div className="absolute bottom-6 left-8 text-[10px] font-mono text-zinc-600 tracking-tighter">
                            RENDIMIENTO WOLF DEV STUDIO (100% LIGHTHOUSE)
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;