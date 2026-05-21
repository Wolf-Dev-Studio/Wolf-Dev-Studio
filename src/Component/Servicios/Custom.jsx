import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

const CustomServices = () => {
    return (
        <section className="w-full h-full bg-[#09090B] flex items-center px-8 md:px-24 relative overflow-hidden">

            {/* ------------------------------------------------------------------------- */}
            {/* CAPA ABSTRACTA & REACTOR DE FORJA DERECHO */}
            {/* ------------------------------------------------------------------------- */}
            <div className="absolute inset-0 z-0 pointer-events-none select-none">
                {/* Haz de luz cónico intenso superior derecho (El Reactor) */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[conic-gradient(from_225deg_at_100%_0%,rgba(30,58,138,0.2)_0%,transparent_25%,transparent_75%,rgba(30,58,138,0.2)_100%)] blur-3xl opacity-80" />
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-950/15 rounded-full blur-[120px]" />

                {/* Líneas abstractas curvas (Flujo Magnético) rodeando la zona terminal */}
                <svg className="absolute top-0 right-0 w-1/2 h-full stroke-blue-900/20" strokeWidth="1" fill="none" viewBox="0 0 400 800">
                    <motion.path
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.5 }}
                        d="M400,100 Q200,200 300,400 T200,700"
                    />
                    <motion.path
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2.5, delay: 0.7 }}
                        d="M400,200 Q250,300 350,500 T250,800"
                        strokeDasharray="5 5"
                    />
                </svg>
            </div>

            {/* ------------------------------------------------------------------------- */}
            {/* CONTENIDO REAL */}
            {/* ------------------------------------------------------------------------- */}
            <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Columna de Texto */}
                <div>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-blue-500 font-mono text-xs uppercase tracking-widest block mb-4"
                    >
                        Ingeniería a la Medida
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-4xl md:text-5xl font-serif text-white leading-tight mb-6"
                    >
                        ¿Tu proyecto exige <br />
                        <span className="text-zinc-500 italic">una arquitectura única?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-400 text-base leading-relaxed mb-8 max-w-md"
                    >
                        Sistemas de gestión interna, integración de bases de datos complejas, pasarelas de pago o migraciones de servidores. Si requiere código lógico avanzado, nosotros trazamos el plano y lo construimos.
                    </motion.p>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group flex items-center gap-4 px-6 py-3 bg-white text-black text-xs font-bold font-mono tracking-widest uppercase hover:bg-zinc-200 transition-colors rounded-sm"
                    >
                        Iniciar Configuración
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </div>

                {/* Columna Visual: Simulación de Terminal/Consola con resplandor de proyección */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative p-6 bg-[#0C0C0E]/80 border border-zinc-900 rounded-sm font-mono text-xs text-zinc-500 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-sm"
                >
                    {/* Luz de proyección azul tenue detrás de la terminal */}
                    <div className="absolute -inset-2 bg-blue-950/10 rounded-sm blur-xl z-0" />

                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-4 border-b border-zinc-900 pb-4">
                            <Terminal className="w-4 h-4 text-blue-800" />
                            <span className="text-zinc-600">wolf_custom_deploy.sh</span>
                        </div>
                        <div className="space-y-3">
                            <p><span className="text-blue-500">~</span> $ initialize_custom_req --client="New"</p>
                            <p className="text-zinc-400"> Analizando requerimientos estructurales...</p>
                            <p className="text-zinc-400"> Definiendo stack tecnológico ideal...</p>
                            <p className="text-zinc-400"> Calculando escalabilidad del sistema...</p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.5, repeat: Infinity, repeatType: "reverse", duration: 1 }}
                                className="text-white mt-4"
                            >
                                [ Esperando inputs del cliente_ ]
                            </motion.p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default CustomServices;