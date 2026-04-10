import React from 'react';
import Fondo from '../assets/IMG-Bienvenida.webp';

const Main = () => {
    return (
        <main className="relative flex-grow bg-[#050505] text-[#e7f0fa] flex flex-col items-center justify-center px-4 py-20 overflow-hidden">

            {/* --- CONTENEDOR DE IMAGEN DE FONDO --- */}
            <div className="absolute inset-0 z-0">
                <img
                    src={Fondo} // Cambia esto por la ruta de tu imagen
                    alt="Background"
                    className="w-full h-full object-cover opacity-20 grayscale"
                />
                {/* Degradado para que el fondo se funda con el negro puro de tu marca */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/50 via-transparent to-[#050505]"></div>
            </div>

            {/* --- CONTENIDO PRINCIPAL --- */}
            <div className="relative z-10 max-w-4xl text-center">
                <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-tight drop-shadow-[0_0_35px_rgba(123,164,208,0.2)]">
                    WOLF <span className="text-[#7ba4d0]">DEV</span> STUDIO
                </h1>

                <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
                    <button className="bg-[#7ba4d0] text-[#0d2440] px-10 py-4 font-bold rounded-sm hover:bg-white transition-all duration-300">
                        VER PROYECTOS
                    </button>
                    <button className="border border-[#7ba4d0] text-[#7ba4d0] px-10 py-4 font-bold rounded-sm hover:bg-[#7ba4d0] hover:text-[#0d2440] transition-all duration-300">
                        CONTACTAR
                    </button>
                </div>
            </div>

        </main>
    );
};

export default Main;