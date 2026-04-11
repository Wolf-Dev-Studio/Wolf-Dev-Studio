const Process = () => {
    const steps = [
        { num: "01", title: "Análisis", desc: "Definición de objetivos y arquitectura del proyecto." },
        { num: "02", title: "Diseño", desc: "Creación de interfaz visual y experiencia de usuario." },
        { num: "03", title: "Desarrollo", desc: "Codificación estructurada con React y Tailwind." },
        { num: "04", title: "Despliegue", desc: "Lanzamiento y pruebas de rendimiento en producción." }
    ];

    return (
        <section id="proceso" className="py-24 bg-[#050505] px-6 border-t-2 border-[#1a1a1a]">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-16">
                    <div className="h-[2px] w-12 bg-[#7ba4d0]"></div>
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white">
                        Sistema de <span className="text-[#7ba4d0]">Trabajo</span>
                    </h2>
                </div>

                {/* Cuadrícula de 1 columna en móvil, 4 en PC */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <div key={index} className="border-2 border-[#1a1a1a] p-8 hover:border-[#7ba4d0] transition-colors duration-300 group relative overflow-hidden bg-[#0a0a0a]">
                            {/* Número grande de fondo */}
                            <span className="absolute -right-4 -bottom-4 text-[#1a1a1a] font-black text-8xl group-hover:text-[#7ba4d0] opacity-50 group-hover:opacity-10 transition-all duration-500 pointer-events-none">
                                {step.num}
                            </span>

                            <h3 className="text-white font-black uppercase tracking-widest mt-4 mb-3 relative z-10">
                                <span className="text-[#7ba4d0] mr-2">{step.num}.</span>{step.title}
                            </h3>
                            <p className="text-gray-500 text-xs leading-relaxed uppercase tracking-[0.15em] relative z-10">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;