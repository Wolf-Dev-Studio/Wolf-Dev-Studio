import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Lock, Layers, Cpu } from 'lucide-react'; // Asegúrate de tener lucide-react instalado

const PilarSection = () => {
    const pillars = [
        {
            title: "Velocidad Absoluta",
            desc: "Garantizamos un puntaje de 100% en Lighthouse. Cada milisegundo que tu web ahorra se traduce directamente en retención de clientes.",
            icon: <Zap className="w-5 h-5" />,
            tag: "PERFORMANCE"
        },
        {
            title: "Soberanía Digital",
            desc: "Eres dueño total de tu código. Sin suscripciones a constructores visuales, sin dependencias. Tu activo, tus reglas.",
            icon: <Lock className="w-5 h-5" />,
            tag: "OWNERSHIP"
        },
        {
            title: "Escalabilidad Modular",
            desc: "Arquitectura basada en componentes de React. Tu plataforma puede evolucionar de una landing a un ecosistema complejo sin reconstrucciones.",
            icon: <Layers className="w-5 h-5" />,
            tag: "STRUCTURE"
        },
        {
            title: "Optimización Inteligente",
            desc: "SEO técnico nativo y carga adaptativa. Utilizamos las últimas tecnologías de Vercel para que tu web sea invisible para el lag y visible para Google.",
            icon: <Cpu className="w-5 h-5" />,
            tag: "FUTURE-PROOF"
        }
    ];

    return (
        <section className="relative w-full min-h-screen md:h-[100dvh] bg-[#030303] flex flex-col justify-center px-6 md:px-24 overflow-hidden select-none">

            {/* ─── ARTE ABSTRACTO EN PURO CODIGO (BACKGROUND) ─── */}

            {/* 1. Malla de Blueprint de Ingeniería */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f0f13_1px,transparent_1px),linear-gradient(to_bottom,#0f0f13_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70" />

            {/* 2. Orbes de Energía Asimétricos (Efecto de iluminación difuminada) */}
            <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
            <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none" />

            {/* 3. Vectores Tecnológicos Lineales (Crosshairs y Guías) */}
            <div className="absolute top-12 left-12 w-8 h-8 border-t border-l border-zinc-800 pointer-events-none" />
            <div className="absolute top-12 right-12 w-8 h-8 border-t border-r border-zinc-800 pointer-events-none" />
            <div className="absolute bottom-12 left-12 w-8 h-8 border-b border-l border-zinc-800 pointer-events-none" />
            <div className="absolute bottom-12 right-12 w-8 h-8 border-b border-r border-zinc-800 pointer-events-none" />

            {/* Línea decorativa de radar horizontal continua */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-900 to-transparent pointer-events-none" />

            {/* ─── CONTENIDO PRINCIPAL ─── */}
            <div className="relative z-10 max-w-7xl mx-auto w-full py-12 md:py-0">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 md:gap-y-16">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.7, ease: [0.215, 0.610, 0.355, 1.000] }}
                            className="group relative flex flex-col gap-4 p-6 md:p-8 rounded-lg border border-zinc-900/40 bg-zinc-950/20 backdrop-blur-md hover:border-blue-900/50 hover:bg-zinc-950/40 transition-all duration-500 shadow-2xl overflow-hidden"
                        >
                            {/* Línea de escaneo láser abstracta al pasar el mouse */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

                            {/* Encabezado de la tarjeta */}
                            <div className="flex items-center justify-between">
                                <div className="text-blue-400 p-2.5 bg-blue-950/10 border border-blue-900/20 rounded-md group-hover:text-blue-300 group-hover:bg-blue-950/30 group-hover:border-blue-500/30 transition-all duration-500">
                                    {pillar.icon}
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-zinc-800 rounded-full group-hover:bg-blue-500 transition-colors duration-500" />
                                    <span className="text-[10px] font-mono text-zinc-600 tracking-[0.2em] group-hover:text-blue-400/80 transition-colors duration-500">
                                        {pillar.tag}
                                    </span>
                                </div>
                            </div>

                            {/* Título */}
                            <h3 className="text-xl md:text-2xl font-sans font-medium tracking-tight text-zinc-100 group-hover:text-white transition-colors duration-300">
                                {pillar.title}
                            </h3>

                            {/* Descripción */}
                            <p className="text-zinc-500 text-sm leading-relaxed max-w-md group-hover:text-zinc-400 transition-colors duration-500">
                                {pillar.desc}
                            </p>

                            {/* Mini indicador geométrico abstracto inferior derecho */}
                            <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-zinc-800 group-hover:border-blue-500 transition-colors duration-500" />
                        </motion.div>
                    ))}
                </div>

                {/* Cierre de la vista (Footer del Componente) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-16 md:mt-24 flex items-center gap-6 text-zinc-600"
                >
                    <div className="h-[1px] w-16 bg-zinc-900 relative">
                        {/* Nodo brillante en la línea */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]" />
                    </div>
                    <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-zinc-500">
                        WOLF DEV STUDIO • CORE PILLARS
                    </span>
                </motion.div>

            </div>
        </section>
    );
};

export default PilarSection;