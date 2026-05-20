import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative w-full h-[100dvh] flex flex-col items-center justify-center bg-[#09090B] overflow-hidden">

            {/* Fondo con textura de puntos (Grid) y degradado base */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,58,138,0.1)_0%,transparent_60%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(113,113,122,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(113,113,122,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            </div>

            {/* Contenido Principal */}
            <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl">

                {/* Elemento Visual Abstracto Levitando (Orbe Azul) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="mb-12 relative flex items-center justify-center"
                >
                    {/* Capas de resplandor (Azul Navy) */}
                    <div className="absolute w-32 h-32 bg-blue-900/30 rounded-full blur-2xl animate-pulse"></div>
                    <div className="absolute w-24 h-24 bg-blue-800/40 rounded-full blur-xl"></div>

                    <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="relative w-20 h-20 rounded-full border border-blue-500/30 bg-[#020203]/80 backdrop-blur-sm flex items-center justify-center shadow-[0_0_30px_rgba(30,58,138,0.6)]"
                    >
                        <Code2 className="w-8 h-8 text-blue-400" strokeWidth={1} />
                    </motion.div>
                </motion.div>

                {/* Título Principal (Serif, alto contraste) */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-serif text-white mb-8 tracking-tight leading-tight"
                >
                    Ingeniería Premium para <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500">
                        Marcas Visionarias
                    </span>
                </motion.h1>

                {/* Botones de Acción */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 mb-8"
                >
                    {/* Botón Primario (Azul Navy) */}
                    <button className="px-8 py-3 bg-blue-900 text-white font-medium rounded text-sm hover:bg-blue-800 hover:shadow-[0_0_20px_rgba(30,58,138,0.5)] transition-all duration-300">
                        Iniciar Proyecto
                    </button>

                    {/* Botón Secundario (Gris/Transparente) */}
                    <button className="px-8 py-3 bg-transparent text-zinc-300 border border-zinc-800 font-medium rounded text-sm hover:bg-zinc-900 hover:text-white transition-all duration-300">
                        Ver Portafolio
                    </button>
                </motion.div>

                {/* Texto pequeño inferior (Gris Cemento) */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-xs md:text-sm text-zinc-500 max-w-md"
                >
                    Desarrollo de software a medida. Arquitecturas modulares. <br />
                    Optimización absoluta. 100% en Lighthouse garantizado.
                </motion.p>

            </div>
        </section>
    );
};

export default Hero;