import React from 'react';

const SobreMi = () => {
    // Array de hitos técnicos para la línea de tiempo (recreando la Experiencia Laboral)
    const technicalMilestones = [
        {
            title: "Lanzamiento de WOLF DEV STUDIO",
            meta: "2026 | Caracas, VZ",
            desc: "Iniciación de la firma de desarrollo industrial. Codificación estructurada del Home y ecosistema visual."
        },
        {
            title: "Launch of WOLF MOTOR HUB",
            meta: "2026 | Web App / React",
            desc: "Desarrollo de plataforma técnica y catálogo automotriz de alto rendimiento."
        },
        {
            title: "Próximamente: WOLF GEAR",
            meta: "En Desarrollo | E-Commerce",
            desc: "Tienda especializada en ropa deportiva y equipo deportivo."
        },
        {
            title: "Próximamente: WOLF Spares Parts",
            meta: "Próximamente | E-Commerce",
            desc: "Tienda especializada en repuestos automotrices."
        },
        {
            title: "Próximamente: WOLF Focus Tracker",
            meta: "Próximamente | System Admin / App Movil",
            desc: "Panel de control para monitoreo de enfoque y productividad."
        },
        {
            title: "Próximamente: WOLF Admin Wallet",
            meta: "Próximamente | System Admin",
            desc: "Panel de control para monitoreo técnico y entornos Linux."
        }
    ];

    return (
        <section id="sobre-mi" className="py-24 bg-[#050505] px-6 border-t-2 border-[#1a1a1a]">
            {/* Contenedor principal que recrea el currículum de dos columnas con bordes industriales */}
            <div className="max-w-6xl mx-auto border-2 border-[#1a1a1a] p-10 bg-[#0a0a0a] shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* COLUMNA IZQUIERDA: Tipo Sidebar, en negro (Info Técnica y Competencias) */}
                    <div className="space-y-8">

                        {/* Foto de Perfil Circular Técnica (Estilo WOLF) */}
                        <div className="w-40 h-40 rounded-full border-4 border-[#1a1a1a] p-2 mx-auto flex items-center justify-center bg-[#050505] relative mb-10 overflow-hidden group">
                            <div className="w-32 h-32 border-2 border-[#7ba4d0] rotate-45 flex items-center justify-center bg-[#050505] z-10 transition-transform duration-300 group-hover:rotate-[225deg]">
                                <span className="text-[#7ba4d0] font-black -rotate-45 text-5xl tracking-tighter transition-transform duration-300 group-hover:rotate-[135deg]">W</span>
                            </div>
                        </div>

                        {/* Ficha Técnica (Recreando Contacto en la imagen) */}
                        <div className="border-t-2 border-[#1a1a1a] pt-8">
                            <h4 className="text-[#7ba4d0] text-[10px] font-black uppercase tracking-widest mb-3">Ficha Técnica</h4>
                            <ul className="space-y-4 text-xs text-gray-400 uppercase tracking-wide">
                                {[
                                    { key: 'Ubicación', val: 'Caracas, VZ' },
                                    { key: 'Especialidad', val: 'Frontend Developer' },
                                    { key: 'Formación', val: 'Informatica & Computación' },
                                    { key: 'Stack Base', val: 'React / Tailwind' }
                                ].map(item => (
                                    <li key={item.key} className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#7ba4d0] rounded-full"></span>
                                        <p>{item.key}: {item.val}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Competencias (Recreando Habilidades en la imagen) */}
                        <div className="border-t-2 border-[#1a1a1a] pt-8">
                            <h4 className="text-[#7ba4d0] text-[10px] font-black uppercase tracking-widest mb-3">Competencias</h4>
                            <div className="flex flex-wrap gap-2">
                                {['React.js', 'Tailwind', 'JavaScript ES6+', 'Linux Admin', 'Git', 'UI/UX'].map(skill => (
                                    <span key={skill} className="px-2 py-1 border border-[#1a1a1a] text-[#7ba4d0] text-[9px] font-bold uppercase tracking-wider">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* COLUMNA DERECHA: Contenido Principal (Perfil y Hitos Técnicos) */}
                    <div className="md:col-span-2 space-y-12">

                        {/* Encabezado del Currículum (Como Pedro Fernández) */}
                        <div className="mb-10">
                            <h1 className="text-white text-5xl font-black uppercase tracking-tighter mb-2">Yorbis Lobo</h1>
                            <h3 className="text-[#7ba4d0] text-xl font-bold uppercase tracking-[0.3em] mb-10 flex items-center gap-3">INGENIERÍA FRONTEND</h3>
                        </div>

                        {/* Perfil Técnico (Como Acerca de mí) */}
                        <div>
                            <h3 className="text-white text-xl font-black uppercase tracking-widest mb-4">Perfil Técnico</h3>
                            <p className="text-gray-400 text-sm leading-relaxed uppercase tracking-wider max-w-2xl">
                                Firma de desarrollo enfocada en la construcción de infraestructura digital robusta. Especializados en el stack moderno de React y la optimización técnica bajo entornos Unix/Linux. Nuestro enfoque combina la disciplina del entrenamiento de alto rendimiento con la precisión del código limpio.
                            </p>
                        </div>

                        {/* Hitos de Desarrollo (Como Experiencia Laboral con línea de tiempo) */}
                        <div>
                            <h3 className="text-white text-xl font-black uppercase tracking-widest mb-8">Hitos de Desarrollo</h3>

                            {/* Contenedor de la línea de tiempo vertical */}
                            <div className="relative pl-8 border-l-2 border-[#1a1a1a]">
                                {technicalMilestones.map((milestone, index) => (
                                    <div key={index} className="flex flex-col mb-10 last:mb-0 relative">
                                        {/* El punto de la línea de tiempo */}
                                        <div className="absolute left-[-6px] w-3 h-3 bg-[#7ba4d0] rounded-full border-2 border-[#0a0a0a]"></div>

                                        {/* Contenido del Hito */}
                                        <div className="pl-4">
                                            <h4 className="text-white text-lg font-black uppercase tracking-widest mb-1">
                                                {milestone.title}
                                            </h4>
                                            <p className="text-[#7ba4d0] text-xs font-bold uppercase mb-2">
                                                {milestone.meta}
                                            </p>
                                            <p className="text-gray-500 text-xs leading-relaxed uppercase tracking-wide">
                                                {milestone.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SobreMi;