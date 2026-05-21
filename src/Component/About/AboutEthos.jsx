import React from 'react';
import { motion } from 'framer-motion';
import { Target, ShieldCheck, Cpu } from 'lucide-react';

const AboutEthos = () => {
    return (
        <section className="w-full h-full bg-[#09090B] flex items-center px-8 md:px-24 relative overflow-hidden">

            {/* Diseño abstracto Par (Líneas isométricas de disciplina/dirección) */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-blue-900/70 rounded-full blur-[150px]" />
                <svg className="absolute inset-0 w-full h-full stroke-blue-800" strokeWidth="1">
                    <line x1="-10%" y1="20%" x2="110%" y2="80%" />
                    <line x1="-10%" y1="40%" x2="110%" y2="100%" strokeDasharray="8 4" />
                </svg>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

                {/* Columna Izquierda: Título y Filosofía */}
                <div className="md:col-span-5">
                    <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-6">
                        Disciplina de hierro. <br />
                        <span className="text-zinc-500 italic">Precisión mecánica.</span>
                    </h2>
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6 font-sans">
                        Entiendo el desarrollo de software como entiendo la ingeniería de alto rendimiento: cada pieza tiene una función vital. No hay lugar para código basura, atajos o sistemas inestables.
                    </p>
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-sans">
                        Llevo la mentalidad de un entrenamiento de alta intensidad a mi terminal. Planifico la arquitectura, ejecuto bajo estrés y optimizo hasta que el rendimiento sea perfecto. Tu proyecto no es un experimento; es una máquina diseñada para dominar.
                    </p>
                </div>

                {/* Columna Derecha: Pilares de Trabajo (Cards minimalistas) */}
                <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="p-6 bg-[#0C0C0E] border border-zinc-900 rounded-sm">
                        <Target className="w-5 h-5 text-blue-500 mb-4" />
                        <h3 className="text-white font-serif text-lg mb-2">Enfoque Quirúrgico</h3>
                        <p className="text-zinc-500 text-xs font-sans">Tomo pocos clientes a la vez. Cuando asumo tu proyecto, recibe toda mi capacidad de procesamiento. Cero distracciones.</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="p-6 bg-[#0C0C0E] border border-zinc-900 rounded-sm">
                        <Cpu className="w-5 h-5 text-blue-500 mb-4" />
                        <h3 className="text-white font-serif text-lg mb-2">Estructura Modular</h3>
                        <p className="text-zinc-500 text-xs font-sans">Construyo las webs como motores preparados: fáciles de actualizar, escalables y con mantenimientos predecibles.</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="p-6 bg-[#0C0C0E] border border-zinc-900 rounded-sm sm:col-span-2">
                        <ShieldCheck className="w-5 h-5 text-blue-500 mb-4" />
                        <h3 className="text-white font-serif text-lg mb-2">Transparencia Radical</h3>
                        <p className="text-zinc-500 text-xs font-sans">Trabajo codo a codo contigo. Sabrás exactamente qué estoy programando, por qué lo estoy haciendo y cómo impactará en las métricas de tu negocio.</p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default AboutEthos;