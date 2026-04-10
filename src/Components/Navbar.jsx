import React from 'react';
import logo from '../assets/Logo-Terciario.png';

const Navbar = () => {
    return (
        <nav className="bg-[#0d2440] border-b border-slate-800 px-6 py-6 z-10">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <div className="flex items-center gap-3">
                    <img src={logo} alt="Wolf Dev Studio" className="h-10 w-auto object-contain" />
                </div>
                <ul className="hidden md:flex gap-10 text-sm tracking-widest uppercase font-medium text-[#7ba4d0]">
                    <li className="hover:text-white transition-all cursor-pointer">Proyectos</li>
                    <li className="hover:text-white transition-all cursor-pointer">Servicios</li>
                    <li className="hover:text-white transition-all cursor-pointer">Contacto</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;