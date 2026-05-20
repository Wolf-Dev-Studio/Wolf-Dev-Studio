import React from 'react';
import { motion } from 'framer-motion';
import { Hexagon } from 'lucide-react';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-0 left-0 w-full z-50 px-8 py-6 flex items-center justify-between"
        >
            {/* Logo Section */}
            <div className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                    <Hexagon className="w-8 h-8 text-blue-900 transition-all duration-300 group-hover:text-blue-500" strokeWidth={1.5} />
                    {/* Pequeño destello interno del logo */}
                    <div className="absolute inset-0 bg-blue-900 blur-md opacity-40 group-hover:opacity-70 transition-opacity"></div>
                </div>
                <span className="text-white font-serif tracking-widest text-sm font-medium">
                    WOLF DEV
                </span>
            </div>

            {/* Center Links (Ocultos en móviles, visibles en pantallas grandes) */}
            <ul className="hidden md:flex items-center gap-8">
                {['Inicio', 'Por qué Wolf', 'Servicios', 'Proyectos', 'Sobre mí'].map((item) => (
                    <li key={item}>
                        <a
                            href={`#${item.toLowerCase()}`}
                            className="text-zinc-400 text-sm hover:text-white transition-colors duration-300"
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Right Action Button */}
            <div>
                <button className="px-6 py-2 text-sm text-zinc-300 border border-zinc-800 rounded-md hover:border-blue-900 hover:text-white hover:bg-blue-900/10 hover:shadow-[0_0_15px_rgba(30,58,138,0.3)] transition-all duration-300">
                    Contacto
                </button>
            </div>
        </motion.nav>
    );
};

export default Navbar;