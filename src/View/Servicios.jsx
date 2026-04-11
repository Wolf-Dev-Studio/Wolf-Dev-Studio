import React from 'react';

const Servicios = () => {
    const servicios = [
        { id: "01", titulo: "Frontend Development", desc: "Desarrollo de interfaces rápidas y escalables con React y Tailwind CSS.", icon: "bi-code-slash" },
        { id: "02", titulo: "UI/UX Técnico", desc: "Diseño de sistemas visuales orientados a la experiencia del usuario y conversión.", icon: "bi-vector-pen" },
        { id: "03", titulo: "Optimización web", desc: "Mejora de rendimiento, SEO técnico y tiempos de carga para sitios existentes.", icon: "bi-lightning-charge" },
        { id: "04", titulo: "Migración y Modernización de Ecosistemas", desc: "Transformación de sitios estáticos o antiguos a arquitecturas modernas basadas en componentes.", icon: "bi-arrow-repeat" },
        { id: "05", titulo: "IA & Automatización Inteligente (Próximamente)", desc: "Integración de modelos de inteligencia artificial para automatizar flujos de trabajo complejos y toma de decisiones basada en datos.", icon: "bi-cpu" },
        { id: "06", titulo: "API & Backend Integration (Próximamente)", desc: "Desarrollo de arquitecturas de servidor y conexión de servicios externos para crear aplicaciones web dinámicas y totalmente integradas.", icon: "bi-database-fill-gear" }
    ];

    return (
        <section id="servicios" className="py-24 bg-[#050505] px-6 border-t-2 border-[#1a1a1a]">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-16">
                    <div className="h-[2px] w-12 bg-[#7ba4d0]"></div>
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white">
                        Nuestros <span className="text-[#7ba4d0]">Servicios</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {servicios.map((srv, index) => (
                        <div key={index} className="border-2 border-[#1a1a1a] p-8 hover:border-[#7ba4d0] transition-colors group">
                            <i className={`bi ${srv.icon} text-4xl text-[#1a1a1a] group-hover:text-[#7ba4d0] transition-colors mb-6 block`}></i>
                            <h3 className="text-white font-black uppercase tracking-widest mb-3">
                                {srv.titulo}
                            </h3>
                            <p className="text-gray-500 text-xs leading-relaxed uppercase tracking-[0.15em]">
                                {srv.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Servicios;