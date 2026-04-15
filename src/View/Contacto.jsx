import React from 'react';

const copiarCorreo = () => {
    const email = "yorbis.dev@gmail.com";
    navigator.clipboard.writeText(email);
    // El alert que confirma la acción
    alert("SISTEMA: Correo copiado al portapapeles. Listo para transmitir.");
};

const Contacto = () => {
    return (
        <section id="contacto" className="pt-45 pb-24 bg-[#050505] px-6 border-t-2 border-[#1a1a1a]">
            <div className="max-w-4xl mx-auto">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">
                        Iniciar <span className="text-[#7ba4d0]">Secuencia</span>
                    </h2>
                    <p className="text-gray-500 text-xs uppercase tracking-[0.2em]">
                        Selecciona un canal para contactarme
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Botón de Correo con Copiado y Alert */}
                    <button
                        onClick={copiarCorreo}
                        className="flex flex-col items-center justify-center p-12 bg-[#0a0a0a] border-2 border-[#1a1a1a] hover:border-[#7ba4d0] transition-all duration-300 group relative overflow-hidden"
                    >
                        <div className="absolute top-0 w-full h-1 bg-[#1a1a1a] group-hover:bg-[#7ba4d0] transition-colors"></div>

                        <span className="text-[10px] text-[#7ba4d0] font-bold uppercase tracking-widest mb-3 group-hover:text-white transition-colors">
                            Click para Copiar Email
                        </span>
                        <span className="text-white font-bold tracking-widest text-sm md:text-base group-hover:text-[#7ba4d0] transition-colors">
                            YORBIS.DEV@GMAIL.COM
                        </span>
                    </button>

                    {/* Enlace de Instagram (Mantiene el mismo estilo visual) */}
                    <a
                        href="https://instagram.com/yorbis.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center p-12 bg-[#0a0a0a] border-2 border-[#1a1a1a] hover:border-[#7ba4d0] transition-all duration-300 group relative overflow-hidden"
                    >
                        <div className="absolute top-0 w-full h-1 bg-[#1a1a1a] group-hover:bg-[#7ba4d0] transition-colors"></div>

                        <span className="text-[10px] text-[#7ba4d0] font-bold uppercase tracking-widest mb-3 group-hover:text-white transition-colors">
                            Instagram
                        </span>
                        <span className="text-white font-bold tracking-widest text-sm md:text-base group-hover:text-[#7ba4d0] transition-colors">
                            @yorbis.dev
                        </span>
                    </a>

                </div>
            </div>
        </section>
    );
};


export default Contacto;