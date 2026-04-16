import React, { useState } from 'react';

const Navbar = () => {
    // Estado para controlar abrir/cerrar el menú móvil
    const [isOpen, setIsOpen] = useState(false);

    // Función para alternar el menú
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#0d2440]/90 backdrop-blur-md border-b border-[#1a1a1a]">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* LOGO: Wolf Dev Studio */}
                <a href="/">
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div className="w-8 h-8 border-2 border-[#7ba4d0] rotate-45 flex items-center justify-center group-hover:bg-[#7ba4d0] transition-all duration-300">
                            <span className="text-white font-black -rotate-45 text-xs">W</span>
                        </div>
                        <h1 className="text-xl font-black tracking-tighter text-white">
                            WOLF <span className="text-[#7ba4d0]">DEV</span> STUDIO
                        </h1>
                    </div>
                </a>

                {/* LINKS DE NAVEGACIÓN (Desktop) */}
                <div className="hidden md:flex items-center gap-10">
                    <a href="/proyectos" className="text-[11px] uppercase tracking-[0.2em] text-gray-400 hover:text-[#7ba4d0] font-bold transition-colors relative group">Proyectos</a>
                    <a href="/servicios" className="text-[11px] uppercase tracking-[0.2em] text-gray-400 hover:text-[#7ba4d0] font-bold transition-colors relative group">Servicios</a>
                    <a href="/sobre-mi" className="text-[11px] uppercase tracking-[0.2em] text-gray-400 hover:text-[#7ba4d0] font-bold transition-colors relative group">Sobre Mi</a>
                    <a href="/contacto" className="text-[11px] uppercase tracking-[0.2em] text-gray-400 hover:text-[#7ba4d0] font-bold transition-colors relative group">Contacto</a>
                </div>

                {/* CONTROLES DERECHA (Botón + Icono Hamburguesa) */}
                <div className="flex items-center gap-3 md:gap-0">

                    {/* BOTÓN DE ACCIÓN (CTA) - Visible siempre */}
                    <a href='/contacto' className="px-4 py-2 border border-[#7ba4d0] text-[#7ba4d0] text-[9px] sm:text-[10px] uppercase tracking-widest font-black hover:bg-[#7ba4d0] hover:text-white transition-all duration-300 rounded-[2px]">
                        Empezar Proyecto
                    </a>

                    {/* BOTÓN HAMBURGUESA (Solo Mobile) */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden ml-2 text-[#7ba4d0] focus:outline-none transition-transform duration-300"
                    >
                        {isOpen ? (
                            // Icono de Cerrar (X)
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        ) : (
                            // Icono de Menú (Barras)
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        )}
                    </button>
                </div>

            </div>

            {/* MENÚ MÓVIL DESPLEGABLE */}
            <div
                className={`md:hidden absolute top-20 left-0 w-full bg-[#0d2440]/95 backdrop-blur-md border-b border-[#1a1a1a] transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-64 border-t' : 'max-h-0 border-transparent opacity-0'
                    }`}
            >
                <div className="flex flex-col items-center py-6 gap-6">
                    {/* Agregué onClick={toggleMenu} para que se cierre automático al tocar un link */}
                    <a href="/proyectos" onClick={toggleMenu} className="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-[#7ba4d0] font-bold transition-colors">Proyectos</a>
                    <a href="/servicios" onClick={toggleMenu} className="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-[#7ba4d0] font-bold transition-colors">Servicios</a>
                    <a href="/sobre-mi" onClick={toggleMenu} className="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-[#7ba4d0] font-bold transition-colors">Sobre Mi</a>
                    <a href="/contacto" onClick={toggleMenu} className="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-[#7ba4d0] font-bold transition-colors">Contacto</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;