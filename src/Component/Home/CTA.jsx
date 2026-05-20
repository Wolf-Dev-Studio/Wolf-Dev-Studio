import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Globe } from 'lucide-react';

const CTA_Home = () => {
    return (
        <section className="relative w-full h-[100dvh] bg-[#09090B] flex flex-col justify-between px-8 md:px-24 overflow-hidden">

            {/* Fondo Sentinel: Foco de luz Navy en el centro inferior para dar profundidad */}
            <div className="absolute inset-0 z-0">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(113,113,122,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(113,113,122,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            </div>

            {/* Top Spacer para balancear el layout full viewport */}
            <div className="h-12 relative z-10"></div>

            {/* Contenido Central (El verdadero gancho) */}
            <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center justify-center flex-grow">

                <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-xs uppercase tracking-[0.3em] text-blue-500 font-mono mb-6"
                >
                    ¿Listo para el siguiente nivel?
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl md:text-7xl font-serif text-white tracking-tight leading-[1.1] mb-8"
                >
                    Redefinamos el estándar <br /> de tu presencia digital.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-zinc-500 text-sm md:text-base max-w-lg mb-12 font-sans leading-relaxed"
                >
                    No creamos páginas web comunes. Diseñamos piezas de software exclusivas con ingeniería premium y rendimiento absoluto.
                </motion.p>

                {/* Botón de Conversión Magnético con Framer Motion */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <button className="group relative px-8 py-4 bg-white text-black font-sans font-medium text-sm rounded-sm flex items-center gap-3 overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(30,58,138,0.3)] transition-all duration-500">
                        {/* Efecto de barra de carga sutil al pasar el mouse por encima */}
                        <div className="absolute inset-0 w-0 bg-zinc-100 group-hover:w-full transition-all duration-500 ease-out z-0"></div>

                        <span className="relative z-10 flex items-center gap-2">
                            Iniciar un Proyecto
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                    </button>
                </motion.div>

            </div>

            {/* Footer Minimalista de la Lámina (Cierre institucional) */}
            <div className="relative z-10 border-t border-zinc-900/60 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-zinc-600">
                <div className="flex items-center gap-6">
                    <span className="flex items-center gap-2 hover:text-zinc-400 transition-colors cursor-pointer">
                        <Mail className="w-3.5 h-3.5 text-blue-900" /> info@wolfdev.studio
                    </span>
                    <span className="flex items-center gap-2">
                        <Globe className="w-3.5 h-3.5 text-zinc-800" /> Caracas, VZLA
                    </span>
                </div>

                <div className="flex items-center gap-4">
                    <span>© {new Date().getFullYear()} WOLF DEV STUDIO</span>
                    <div className="w-8 h-[1px] bg-zinc-800"></div>
                    <span className="text-blue-500 font-bold">04</span>
                </div>
            </div>

        </section>
    );
};

export default CTA_Home;