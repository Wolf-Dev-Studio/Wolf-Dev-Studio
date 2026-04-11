import React from 'react';

const Contacto = () => {
    return (
        <section id="contacto" className="py-24 bg-[#050505] px-6 border-t-2 border-[#1a1a1a]">
            <div className="max-w-4xl mx-auto">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">
                        Iniciar <span className="text-[#7ba4d0]">Secuencia</span>
                    </h2>
                    <p className="text-gray-500 text-xs uppercase tracking-[0.2em]">
                        Envía los detalles de tu proyecto y evaluaremos la viabilidad.
                    </p>
                </div>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col">
                            <label className="text-[10px] text-[#7ba4d0] font-bold uppercase tracking-widest mb-2">Nombre / Empresa</label>
                            <input type="text" className="bg-[#0a0a0a] border-2 border-[#1a1a1a] text-white p-4 focus:outline-none focus:border-[#7ba4d0] transition-colors" placeholder="EJ: WOLF MOTORS" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-[10px] text-[#7ba4d0] font-bold uppercase tracking-widest mb-2">Email de Contacto</label>
                            <input type="email" className="bg-[#0a0a0a] border-2 border-[#1a1a1a] text-white p-4 focus:outline-none focus:border-[#7ba4d0] transition-colors" placeholder="CORREO@DOMINIO.COM" />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-[10px] text-[#7ba4d0] font-bold uppercase tracking-widest mb-2">Especificaciones del Proyecto</label>
                        <textarea rows="5" className="bg-[#0a0a0a] border-2 border-[#1a1a1a] text-white p-4 focus:outline-none focus:border-[#7ba4d0] transition-colors resize-none" placeholder="DESCRIBE LA ARQUITECTURA O NECESIDAD..."></textarea>
                    </div>

                    <button type="button" className="w-full py-5 bg-[#7ba4d0] text-[#050505] font-black uppercase tracking-[0.2em] text-sm hover:bg-white transition-colors">
                        Transmitir Datos
                    </button>
                </form>

            </div>
        </section>
    );
};

export default Contacto;