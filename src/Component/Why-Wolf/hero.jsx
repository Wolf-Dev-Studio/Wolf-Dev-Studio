import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen md:h-[100dvh] bg-[#070708] flex items-center px-6 md:px-24 overflow-hidden select-none">

            {/* ─── ABSTRACCIÓN MINIMALISTA (BACKGROUND) ─── */}
            {/* 1. Patrón de puntos geométricos finos y nativos */}
            <div className="absolute inset-0 bg-[radial-gradient(#13131a_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

            {/* 2. Un único orbe de luz difusa detrás del gráfico para dar profundidad */}
            <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-blue-900/60 rounded-full blur-[120px] pointer-events-none hidden md:block" />

            {/* 3. Línea estructural fina (Eje de diseño) */}
            <div className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-800 to-transparent" />

            {/* ─── CONTENIDO ─── */}
            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center w-full py-20 md:py-0">

                {/* Columna de Texto (60%) */}
                <div className="md:col-span-7 flex flex-col justify-center">
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.5em] mb-6 block"
                    >
                        Nuestra Filosofía
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl md:text-6xl font-sans font-normal tracking-tight text-white leading-[1.15] mb-8"
                    >
                        El software común <br />
                        <span className="text-zinc-600 font-light">destruye marcas.</span> <br />
                        La ingeniería de precisión <br />
                        <span className="bg-gradient-to-r from-white via-zinc-200 to-blue-500 bg-clip-text text-transparent font-medium">
                            las escala.
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-zinc-500 text-sm md:text-base max-w-xl leading-relaxed font-normal"
                    >
                        Mientras otros ensamblan plantillas pesadas y obsoletas, nosotros esculpimos código nativo. Eliminamos la fricción técnica para que tu única preocupación sea el crecimiento de tu negocio. No diseñamos pantallas; arquitectamos activos digitales.
                    </motion.p>
                </div>

                {/* Columna Visual (40% - Módulo Flotante Limpio) */}
                <div className="md:col-span-5 flex justify-center md:justify-end w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-[420px] h-[280px] border border-zinc-900/60 rounded-md p-8 bg-[#0a0a0c]/40 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between overflow-hidden group"
                    >
                        {/* Esquina superior derecha decorativa */}
                        <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-zinc-800/40 pointer-events-none group-hover:border-blue-500/30 transition-colors duration-500" />

                        {/* Gráfico de rendimiento */}
                        <div className="w-full h-full flex items-center justify-center">
                            <svg viewBox="0 0 200 100" className="w-full h-32 overflow-visible">
                                <defs>
                                    {/* Degradado para la línea del gráfico */}
                                    <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                                        <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.2" />
                                        <stop offset="50%" stopColor="#3b82f6" />
                                        <stop offset="100%" stopColor="#60a5fa" />
                                    </linearGradient>
                                </defs>

                                {/* Línea guía horizontal base */}
                                <line x1="0" y1="90" x2="200" y2="90" stroke="#18181b" strokeWidth="1" strokeDasharray="4 4" />

                                <motion.path
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.8, ease: [0.215, 0.610, 0.355, 1.000], delay: 0.3 }}
                                    d="M0,90 Q40,85 80,45 T190,10"
                                    fill="none"
                                    stroke="url(#lineGradient)"
                                    strokeWidth="2"
                                />
                                <motion.circle
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1.6, type: "spring", stiffness: 200 }}
                                    cx="190" cy="10" r="3.5"
                                    fill="#60a5fa"
                                    className="shadow-xl"
                                />
                            </svg>
                        </div>

                        {/* Texto de referencia técnico inferior */}
                        <div className="flex items-center justify-between mt-4">
                            <div className="text-[9px] font-mono text-zinc-600 tracking-wider uppercase group-hover:text-zinc-400 transition-colors duration-500">
                                CORE PERFORMANCE // 100% LIGHTHOUSE
                            </div>
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping opacity-70" style={{ animationDuration: '3s' }} />
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Hero;