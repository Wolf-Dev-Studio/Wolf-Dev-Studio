import React from 'react';
import { motion } from 'framer-motion';
import { UserCircle, ScanLine } from 'lucide-react';

const AboutHero = () => {
    return (
        <section className="w-full h-full bg-[#09090B] flex items-center px-8 md:px-24 relative overflow-hidden">

            {/* ------------------------------------------------------------------------- */}
            {/* CAPA ATMOSFÉRICA (Focalizada a la izquierda) */}
            {/* ------------------------------------------------------------------------- */}
            <div className="absolute inset-0 z-0 pointer-events-none select-none">
                {/* Grilla de puntos base */}
                <div className="absolute inset-0 bg-sentinel-dots opacity-10"></div>

                {/* Foco de luz intenso desplazado a la izquierda para iluminar el texto */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/40 rounded-full blur-[150px]" />

                {/* Haz cónico sutil en la izquierda */}
                <div className="absolute -top-40 -left-20 w-[600px] h-[600px] bg-[conic-gradient(from_90deg_at_0%_0%,rgba(30,58,138,0.1)_0%,transparent_50%)] blur-2xl opacity-60" />
            </div>

            {/* ------------------------------------------------------------------------- */}
            {/* GRID DE CONTENIDO (2 Columnas) */}
            {/* ------------------------------------------------------------------------- */}
            <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

                {/* COLUMNA IZQUIERDA: Textos y Copy (7 columnas) */}
                <div className="md:col-span-7 flex flex-col justify-center text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-blue-500 font-mono text-xs uppercase tracking-[0.4em] mb-8 flex items-center gap-3 w-fit px-3 py-1 bg-[#09090B]/80 border border-blue-900/30 rounded-sm backdrop-blur-sm"
                    >
                        <UserCircle className="w-4 h-4" />
                        <span>Detrás del Sistema</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-[5rem] font-serif text-white tracking-tighter mb-8 leading-[1.05]"
                    >
                        No hablas con una <br className="hidden lg:block" />
                        agencia genérica. <br />
                        <span className="text-zinc-500 italic">Hablas con el arquitecto.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-400 text-sm md:text-base max-w-lg font-sans leading-relaxed"
                    >
                        Bienvenido. Soy la mente maestra detrás de Wolf Dev Studio. No me escondo detrás de plantillas ni ejecutivos de cuenta; diseño, construyo y optimizo cada línea de código de tu proyecto con mis propias manos.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-12 flex items-center gap-3 text-[10px] font-mono text-zinc-600 tracking-widest"
                    >
                        <span>CONOCE MI ÉTICA DE TRABAJO</span>
                        <div className="w-12 h-[1px] bg-blue-900"></div>
                    </motion.div>
                </div>

                {/* COLUMNA DERECHA: Foto Perfil Operativo (5 columnas) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="md:col-span-5 relative w-full aspect-[4/5] md:aspect-[3/4] group"
                >
                    {/* Marco tecnológico sutil */}
                    <div className="absolute -inset-4 border border-zinc-900/50 rounded-sm opacity-50 z-0"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-blue-500/50 z-20"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-blue-500/50 z-20"></div>

                    {/* Contenedor de la imagen */}
                    <div className="relative w-full h-full bg-[#0C0C0E] border border-zinc-900 rounded-sm overflow-hidden z-10">

                        {/* TU FOTO AQUÍ */}
                        <img
                            src="/assets/yorbis-wolf.webp" // Reemplaza con tu ruta
                            alt="Yorbis Lobo - Arquitecto"
                            className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out transform group-hover:scale-105"
                        />

                        {/* Overlay inferior para fundir la base de la foto con el negro */}
                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#09090B] to-transparent z-10 pointer-events-none"></div>

                        {/* Metadatos en la foto estilo HUD */}
                        <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                            <ScanLine className="w-4 h-4 text-blue-500 group-hover:animate-pulse" />
                            <div className="flex flex-col">
                                <span className="text-[9px] font-mono text-blue-500 tracking-widest uppercase">ID.Operativo</span>
                                <span className="text-xs font-serif text-white tracking-wider">Y. LOBO</span>
                            </div>
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default AboutHero;