import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const SingleProjectLane = ({ project, index }) => {
    // Determinamos si el proyecto es par o impar (basado en el índice 0, 1, 2...)
    const isEven = index % 2 === 0;

    return (
        <section className="w-full h-full bg-[#09090B] flex items-center px-8 md:px-24 relative overflow-hidden border-b border-zinc-950">

            {/* ------------------------------------------------------------------------- */}
            {/* BACKGROUNDS ABSTRACTOS DINÁMICOS */}
            {/* ------------------------------------------------------------------------- */}

            {isEven ? (
                /* 🔵 DISEÑO IMPAR (Índices 0, 2, 4... Primera y Tercera lámina de proyectos) */
                /* Concepto: Nodos de Ingeniería y Foco Central */
                <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-40">
                    {/* Foco de luz Navy superior izquierda */}
                    <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-blue-700 rounded-full blur-[130px]" />

                    {/* Grilla técnica de puntos Sentinel */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px)] bg-[size:50px_50px]" />

                    {/* Nodos vectoriales abstractos con SVG */}
                    <svg className="absolute inset-0 w-full h-full stroke-blue-800" xmlns="http://www.w3.org/2000/svg">
                        <line x1="10%" y1="0" x2="10%" y2="100%" strokeDasharray="4 4" />
                        <line x1="0" y1="70%" x2="100%" y2="70%" strokeDasharray="4 4" />
                        <circle cx="10%" cy="70%" r="3" className="fill-blue-500 stroke-blue-500" />
                    </svg>
                </div>
            ) : (
                /* 📐 DISEÑO PAR (Índices 1, 3, 5... Segunda lámina de proyectos) */
                /* Concepto: Líneas de Flujo Isométricas y Foco Inferior */
                <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-40">
                    {/* Foco de luz Navy inferior derecha */}
                    <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-blue-950 rounded-full blur-[150px]" />

                    {/* Vectores diagonales limpios que cruzan la pantalla */}
                    <svg className="absolute inset-0 w-full h-full stroke-blue-500" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
                        <line x1="-10%" y1="20%" x2="110%" y2="80%" />
                        <line x1="-10%" y1="40%" x2="110%" y2="100%" strokeDasharray="8 4" />
                        {/* Un sutil acento en azul que cruza de fondo */}
                        <line x1="0" y1="10%" x2="100%" y2="40%" className="stroke-blue-900" strokeWidth="1.5" />
                    </svg>

                    {/* Textura de micro-puntos densos */}
                    <div className="absolute inset-0 bg-[radial-gradient(rgba(113,113,122,0.03)_1px)] bg-[size:24px_24px]" />
                </div>
            )}

            {/* ------------------------------------------------------------------------- */}
            {/* CONTENIDO DE LA LÁMINA (Flotando arriba con z-10) */}
            {/* ------------------------------------------------------------------------- */}
            <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-end">

                {/* Columna Izquierda: Metadatos e Ícono */}
                <div className="md:col-span-4 border-l border-zinc-900 pl-6 h-full flex flex-col justify-between py-2">
                    <div>
                        <span className="text-zinc-700 font-serif text-5xl font-bold block mb-4">
                            {project.id}.
                        </span>
                        <div className="inline-flex items-center gap-3 text-blue-500 p-3 bg-blue-950/20 border border-blue-900/10 rounded-sm mb-6">
                            {project.icon}
                        </div>
                        <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-1">
                            {project.subtitle}
                        </p>
                        <span className="text-[10px] font-mono text-zinc-600 tracking-tighter bg-zinc-900/40 px-2 py-0.5 rounded-sm">
                            {project.meta}
                        </span>
                    </div>

                    {/* Stack Tecnológico */}
                    <div className="mt-12 md:mt-24">
                        <span className="text-[10px] font-mono text-zinc-600 tracking-widest block mb-3">ENGINEERING STACK:</span>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, i) => (
                                <span key={i} className="text-[11px] font-mono px-2.5 py-1 bg-[#0C0C0E]/90 border border-zinc-900 text-zinc-400 rounded-sm backdrop-blur-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Columna Derecha: Título, Cuerpo y Acción */}
                <div className="md:col-span-8 flex flex-col justify-end">
                    <motion.h2
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-serif text-white tracking-tight mb-6"
                    >
                        {project.title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-400 text-sm md:text-base max-w-2xl font-sans leading-relaxed mb-10"
                    >
                        {project.desc}
                    </motion.p>

                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="w-fit">
                        <button className="group px-6 py-3 bg-transparent border border-zinc-800 text-zinc-300 text-xs font-mono tracking-widest uppercase rounded-sm flex items-center gap-3 hover:border-blue-950 hover:text-white hover:bg-blue-950/20 transition-all duration-300 backdrop-blur-sm">
                            Inspeccionar Proyecto
                            <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                        </button>
                    </motion.div>
                </div>

            </div>

            {/* Indicador de número de lámina inferior */}
            <div className="absolute bottom-8 right-8 md:right-24 text-[10px] font-mono text-zinc-800">
                SYS.LOC // 03 - {project.id}
            </div>
        </section>
    );
};

export default SingleProjectLane;