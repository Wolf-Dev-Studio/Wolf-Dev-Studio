import React from 'react';
import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';

const ServicesHero = () => {
    return (
        <section className="w-full h-full bg-[#09090B] flex flex-col justify-center items-center text-center px-8 relative overflow-hidden">

            {/* ------------------------------------------------------------------------- */}
            {/* CAPA ATMOSFÉRICA ABSTRACTA & HACES DE LUZ */}
            {/* ------------------------------------------------------------------------- */}
            <div className="absolute inset-0 z-0 pointer-events-none select-none">
                {/* Fondo base de Plano Técnico (Blueprint) */}
                <div className="absolute inset-0 opacity-[0.55]">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
                </div>

                {/* Haz de luz cónico central suave desde el "techo" */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[conic-gradient(from_180deg_at_50%_0%,rgba(30,58,138,0.15)_0%,transparent_30%,transparent_70%,rgba(30,58,138,0.15)_100%)] blur-2xl" />

                {/* Partículas vectoriales flotando (SVGs simples) */}
                <motion.svg
                    animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 left-1/4 w-12 h-12 stroke-blue-500"
                    viewBox="0 0 100 100"
                >
                    <path d="M0,50 Q25,0 50,50 T100,50" fill="none" strokeWidth="2" />
                </motion.svg>
                <motion.svg
                    animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
                    className="absolute bottom-1/3 right-1/5 w-16 h-16 stroke-blue-500"
                    viewBox="0 0 100 100"
                >
                    <circle cx="50" cy="50" r="40" fill="none" strokeWidth="1" strokeDasharray="5 5" />
                </motion.svg>

                {/* Viñeteado de fundido a negro profundo en bordes */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#09090B_100%)]" />
            </div>

            {/* ------------------------------------------------------------------------- */}
            {/* CONTENIDO REAL */}
            {/* ------------------------------------------------------------------------- */}
            <div className="relative z-10 max-w-4xl flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 text-blue-500 font-mono text-xs uppercase tracking-[0.4em] mb-6 px-4 py-2 bg-blue-950/20 border border-blue-900/30 rounded-sm"
                >
                    <Wrench className="w-4 h-4 animate-pulse" />
                    <span>Laboratorio de Ingeniería</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-serif text-white tracking-tighter mb-6 leading-tight"
                >
                    Forjamos activos <br className="hidden md:block" />
                    <span className="text-zinc-500 italic">digitales de precisión.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto font-sans leading-relaxed"
                >
                    No usamos plantillas. Entra a nuestro taller: aquí ensamblamos arquitecturas de software desde cero, optimizadas para dominar el mercado y aplastar a tu competencia.
                </motion.p>
            </div>

            {/* Indicador de sistema en la parte inferior */}
            <div className="absolute bottom-12 flex flex-col items-center gap-2 z-10">
                <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent animate-pulse"></div>
                <span className="text-[9px] font-mono text-zinc-600 tracking-widest uppercase">
                    Inicializando protocolos de servicio
                </span>
            </div>
        </section>
    );
};

export default ServicesHero;