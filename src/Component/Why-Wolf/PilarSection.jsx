import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Lock, Layers, Cpu } from 'lucide-react';

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
        <section className="relative w-full h-[100dvh] bg-[#09090B] flex flex-col justify-center px-8 md:px-24">
            <div className="relative z-10 max-w-7xl mx-auto w-full">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group flex flex-col gap-4 p-8 border-l border-zinc-900 hover:border-blue-900 transition-all duration-500">

                            <div className="flex items-center justify-between">
                                <div className="text-blue-500 p-2 bg-blue-950/20 rounded-sm">
                                    {pillar.icon}
                                </div>
                                <span className="text-[10px] font-mono text-zinc-700 tracking-widest group-hover:text-blue-900 transition-colors">
                                    {pillar.tag}
                                </span>
                            </div>

                            <h3 className="text-xl md:text-2xl font-serif text-white group-hover:text-blue-400 transition-colors">
                                {pillar.title}
                            </h3>

                            <p className="text-zinc-500 text-sm leading-relaxed max-w-md group-hover:text-zinc-300 transition-colors">
                                {pillar.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Cierre de la vista */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 flex items-center gap-6 text-zinc-700"
                >
                    <div className="h-[1px] w-24 bg-zinc-900"></div>
                    <span className="text-xs font-mono tracking-widest">WOLF DEV STUDIO • POR QUÉ NOSOTROS</span>
                </motion.div>

            </div>
        </section >
    );
};

export default PilarSection;