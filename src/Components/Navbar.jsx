import React from 'react';
import logo from '../assets/Logo-Terciario.png';

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 bg-[#0d2440]/80 backdrop-blur-md border-b border-[#1a1a1a]">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* LOGO: Wolf Dev Studio */}
                <div className="flex items-center gap-2 group cursor-pointer">
                    {/* Icono geométrico minimalista en lugar del provisional */}
                    <div className="w-8 h-8 border-2 border-[#7ba4d0] rotate-45 flex items-center justify-center group-hover:bg-[#7ba4d0] transition-all duration-300">
                        <span className="text-white font-black -rotate-45 text-xs">W</span>
                    </div>
                    <h1 className="text-xl font-black tracking-tighter text-white">
                        WOLF <span className="text-[#7ba4d0]">DEV</span> STUDIO
                    </h1>
                </div>

                {/* LINKS DE NAVEGACIÓN */}
                <div className="hidden md:flex items-center gap-10">
                    {['Proyectos', 'Servicios', 'Sobre mí', 'Contacto'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                            className="text-[11px] uppercase tracking-[0.2em] text-gray-400 hover:text-[#7ba4d0] font-bold transition-colors relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#7ba4d0] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* BOTÓN DE ACCIÓN (CTA) */}
                <button className="px-5 py-2 border border-[#7ba4d0] text-[#7ba4d0] text-[10px] uppercase tracking-widest font-black hover:bg-[#7ba4d0] hover:text-white transition-all duration-300 rounded-[2px]">
                    Empezar Proyecto
                </button>

            </div>
        </nav>
    );
};

export default Navbar;