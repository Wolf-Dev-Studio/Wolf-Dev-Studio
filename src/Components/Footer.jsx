import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-[#0d2440] border-t border-[#1a1a1a] pt-16 pb-8 px-6 mt-20">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Columna 1: Branding */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-black tracking-tighter text-white">
                            WOLF <span className="text-[#7ba4d0]">DEV</span> STUDIO
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                            Desarrollo de software de alto rendimiento. Elevamos tu presencia digital con precisión técnica y diseño minimalista.
                        </p>
                    </div>

                    {/* Columna 2: Navegación Rápida */}
                    <div className="flex flex-col space-y-3">
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2">Explorar</h4>
                        <a href="proyectos" className="text-gray-400 hover:text-[#7ba4d0] text-sm transition-colors">Proyectos</a>
                        <a href="servicios" className="text-gray-400 hover:text-[#7ba4d0] text-sm transition-colors">Servicios</a>
                        <a href="sobre-mi" className="text-gray-400 hover:text-[#7ba4d0] text-sm transition-colors">Sobre Mi</a>
                        <a href="contacto" className="text-gray-400 hover:text-[#7ba4d0] text-sm transition-colors">Contacto</a>
                    </div>

                    {/* Columna 3: Social & Contacto */}
                    <div className="flex flex-col space-y-3">
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2">Conectar</h4>
                        <a href="https://github.com/LoboYorbis" target="_blank" className="text-gray-400 hover:text-[#7ba4d0] text-sm transition-colors flex items-center gap-2">
                            GitHub
                        </a>
                        <a href="https://linkedin.com/in/tu-perfil" target="_blank" className="text-gray-400 hover:text-[#7ba4d0] text-sm transition-colors flex items-center gap-2">
                            LinkedIn
                        </a>
                        <p className="text-gray-500 text-sm mt-2">Caracas, Venezuela</p>
                    </div>
                </div>

                {/* Línea final de Copyright */}
                <div className="pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-[10px] uppercase tracking-widest">
                        © 2026 Wolf Dev Studio. High Performance Development.
                    </p>
                    <div className="flex gap-4 text-[10px] text-gray-600 uppercase tracking-widest">
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;