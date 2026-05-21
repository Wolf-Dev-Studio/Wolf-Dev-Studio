import React from 'react';
import { motion } from 'framer-motion';

const ProjectsHero = () => {
    return (
        <section className="w-full h-full bg-[#09090B] flex flex-col justify-center items-center text-center px-8 relative">
            {/* Luz central difuminada de fondo */}
            <div className="absolute w-[500px] h-[500px] bg-blue-700/20 rounded-full blur-[150px] pointer-events-none z-0"></div>

            <div className="relative z-10 max-w-3xl">
                <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="text-blue-500 font-mono text-xs uppercase tracking-[0.5em] mb-4 block"
                >
                    Wolf Dev Studio Archive
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-8xl font-serif text-white tracking-tighter mb-6"
                >
                    Tech Showroom
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-zinc-500 text-sm md:text-base max-w-md mx-auto font-sans leading-relaxed"
                >
                    Una exhibición curada de sistemas digitales de alto impacto, arquitecturas modulares nativas e ingeniería premium a medida.
                </motion.p>
            </div>

            {/* Indicador industrial abajo */}
            <div className="absolute bottom-12 flex items-center gap-3 text-[10px] font-mono text-zinc-600 tracking-widest">
                <span>SCROLL PARA EXPLORAR</span>
                <div className="w-12 h-[1px] bg-zinc-900"></div>
                <span className="text-blue-500 animate-pulse">DEPLOYED v2.0</span>
            </div>
        </section>
    );
};

export default ProjectsHero;