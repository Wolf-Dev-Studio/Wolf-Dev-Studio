import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GraduationCap, ShieldAlert, CarFront } from 'lucide-react';

const TopProjects = () => {
    // Variantes para la entrada fluida de las láminas del bento
    const bentoVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (delay) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: delay,
                ease: [0.16, 1, 0.3, 1]
            }
        })
    };

    const projects = [
        {
            id: '01',
            title: 'UEP Monseñor Castillo (Moca)',
            tag: 'Plataforma Institucional',
            desc: 'Migración completa a una arquitectura modular en React. Optimizada al extremo para una carga instantánea (First Contentful Paint < 1s), facilitando el acceso a control de estudios, noticias y FAQ dinámicos para estudiantes y representantes.',
            icon: <GraduationCap className="w-5 h-5 text-blue-400" />,
            tech: ['React', 'Tailwind', 'Vercel', 'SEO Pro'],
            size: 'md:col-span-2 md:row-span-2', // Proyecto Estrella (Ocupa más espacio)
            delay: 0.1
        },
        {
            id: '02',
            title: 'Wolf Dealer Management',
            tag: 'Software Automotriz',
            desc: 'Portal premium de gestión y exhibición de vehículos alemanes e importados con filtros de ingeniería avanzada.',
            icon: <CarFront className="w-5 h-5 text-zinc-400 group-hover:text-blue-400 transition-colors" />,
            tech: ['React', 'Framer Motion'],
            size: 'md:col-span-1 md:row-span-1',
            delay: 0.3
        },
        {
            id: '03',
            title: 'Sovereign AI Nexus',
            tag: 'Integración Local',
            desc: 'Dashboard de auditoría de costos automatizado mediante modelos LLM locales corriendo de forma soberana.',
            icon: <ShieldAlert className="w-5 h-5 text-zinc-400 group-hover:text-blue-400 transition-colors" />,
            tech: ['Ollama', 'Docker', 'Tailwind'],
            size: 'md:col-span-1 md:row-span-1',
            delay: 0.5
        }
    ];

    return (
        <section className="relative w-full h-[100dvh] bg-[#09090B] flex flex-col justify-center px-8 md:px-24 overflow-hidden">

            {/* Fondo Sentinel Grid sutil */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,58,138,0.05)_0%,transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(113,113,122,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(113,113,122,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col h-full justify-between py-12">

                {/* Encabezado */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-4"
                >
                    <div>
                        <span className="text-blue-500 font-serif italic text-lg mb-2 block">Portafolio</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight">Proyectos Insignia</h2>
                    </div>
                    <p className="text-zinc-500 text-sm max-w-xs md:text-right font-sans">
                        Casos de éxito reales donde la velocidad de carga y la estética premium se fusionan.
                    </p>
                </motion.div>

                {/* Distribución Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 my-auto h-[65%] min-h-[420px]">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            custom={project.delay}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={bentoVariants}
                            className={`${project.size} group relative bg-[#0C0C0E] border border-zinc-900 rounded-sm p-8 flex flex-col justify-between hover:border-blue-900/40 transition-all duration-500 overflow-hidden`}
                        >
                            {/* Degradados sutiles en hover */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            {/* Top info */}
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2.5 bg-zinc-900/80 border border-zinc-800 rounded-sm group-hover:border-blue-900/30 transition-colors">
                                            {project.icon}
                                        </div>
                                        <span className="text-xs uppercase tracking-widest text-zinc-500">{project.tag}</span>
                                    </div>
                                    <span className="text-zinc-800 font-serif text-lg font-bold">{project.id}.</span>
                                </div>

                                <h3 className={`font-serif text-white group-hover:text-blue-400 transition-colors duration-300 ${project.size.includes('md:col-span-2') ? 'text-3xl mb-4' : 'text-xl mb-2'}`}>
                                    {project.title}
                                </h3>

                                <p className={`text-zinc-500 font-sans leading-relaxed transition-colors group-hover:text-zinc-400 ${project.size.includes('md:col-span-2') ? 'text-sm md:text-base max-w-xl' : 'text-xs'}`}>
                                    {project.desc}
                                </p>
                            </div>

                            {/* Bottom Info: Tech Stack & Link */}
                            <div className="relative z-10 flex items-center justify-between mt-6 pt-4 border-t border-zinc-900/80 group-hover:border-blue-900/20 transition-colors">
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="text-[10px] tracking-wider font-mono px-2 py-0.5 bg-[#020203] border border-zinc-900 text-zinc-400 rounded-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="text-zinc-600 group-hover:text-white transition-colors p-1">
                                    <ExternalLink className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Indicador de cierre de lámina */}
                <div className="flex items-center gap-4 text-zinc-600 text-xs tracking-widest font-mono">
                    <span className="text-blue-500 font-bold">03</span>
                    <div className="w-12 h-[1px] bg-zinc-800"></div>
                    <span>WOLF DEV STUDIO ARCHIVE</span>
                </div>

            </div>
        </section>
    );
};

export default TopProjects;