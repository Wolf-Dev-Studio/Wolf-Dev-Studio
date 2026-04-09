import React from 'react';

const Main = () => {
    return (
        <main className="flex-grow bg-[#050505] text-[#e7f0fa] flex flex-col items-center justify-center px-4 py-20">
            <div className="max-w-4xl text-center">
                <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-tight drop-shadow-[0_0_35px_rgba(123,164,208,0.2)]">
                    WOLF <span className="text-[#7ba4d0]">DEV</span> STUDIO
                </h1>
                <p className="mt-8 text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
                    Ingeniería de software con precisión mecánica. Construyendo el futuro digital.
                </p>

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