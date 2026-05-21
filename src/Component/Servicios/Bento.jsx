import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Zap, BrainCircuit, Layout, Search } from 'lucide-react';

const ServicesBento = () => {
    const services = [
        {
            title: "Desarrollo Nativo",
            desc: "Arquitecturas modernas en React. Interfaces limpias, modulares y construidas desde la primera línea de código.",
            icon: <Code2 className="w-5 h-5" />,
            colSpan: "md:col-span-2",
            delay: 0.1
        },
        {
            title: "Performance Extrema",
            desc: "Optimización quirúrgica para lograr un 100% en Lighthouse. Webs que cargan antes de que el usuario parpadee.",
            icon: <Zap className="w-5 h-5" />,
            colSpan: "md:col-span-1",
            delay: 0.2
        },
        {
            title: "Infraestructura e IA Local",
            desc: "Despliegue de modelos de lenguaje (LLMs) ejecutados en entornos seguros de Docker. Inteligencia privada para tu negocio.",
            icon: <BrainCircuit className="w-5 h-5" />,
            colSpan: "md:col-span-1",
            delay: 0.3
        },
        {
            title: "Diseño UI/UX Élite",
            desc: "Interfaces de alta costura, modo oscuro profundo y animaciones de hardware acelerado. Estética que convierte.",
            icon: <Layout className="w-5 h-5" />,
            colSpan: "md:col-span-1",
            delay: 0.4
        },
        {
            title: "Auditoría & SEO Técnico",
            desc: "Estructuras semánticas y metadatos dinámicos para que tu proyecto sea rastreado y priorizado por los motores de búsqueda.",
            icon: <Search className="w-5 h-5" />,
            colSpan: "md:col-span-1",
            delay: 0.5
        }
    ];

    return (
        <section className="w-full h-full bg-[#09090B] flex items-center justify-center px-8 md:px-24 relative overflow-hidden">

            {/* ------------------------------------------------------------------------- */}
            {/* CAPA ABSTRACTA & HACES DE LUZ DE DATOS */}
            {/* ------------------------------------------------------------------------- */}
            <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-30">
                <div className="absolute inset-0 bg-sentinel-dots" />

                {/* Haces de luz lineales (Data-lines) cruzando la grilla */}
                <motion.div
                    animate={{ x: [-1000, 1000] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                />
                <motion.div
                    animate={{ x: [1000, -1000] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}
                    className="absolute top-2/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                />
            </div>

            {/* ------------------------------------------------------------------------- */}
            {/* CONTENIDO REAL */}
            {/* ------------------------------------------------------------------------- */}
            <div className="relative z-10 w-full max-w-6xl">
                <div className="mb-10 flex items-center gap-6">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                    <h2 className="text-3xl font-serif text-white tracking-tight">Capacidades del Taller</h2>
                    <div className="flex-grow h-[1px] bg-blue-500"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {services.map((srv, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: srv.delay, duration: 0.5 }}
                            className={`group relative p-8 bg-[#0C0C0E] border border-zinc-900 hover:border-blue-900/50 transition-all duration-500 rounded-sm overflow-hidden ${srv.colSpan}`}
                        >
                            {/* Resplandor interno sutil constante, intenso en hover */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,58,138,0.03)_0%,transparent_70%)] group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <div className="w-10 h-10 mb-6 flex items-center justify-center bg-zinc-900/50 border border-zinc-800 text-zinc-400 group-hover:text-blue-400 group-hover:border-blue-900/30 group-hover:shadow-[0_0_15px_rgba(30,58,138,0.3)] transition-all rounded-sm backdrop-blur-sm">
                                    {srv.icon}
                                </div>
                                <h3 className="text-xl font-serif text-white mb-3 group-hover:text-blue-50 transition-colors">{srv.title}</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed font-sans">{srv.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesBento;