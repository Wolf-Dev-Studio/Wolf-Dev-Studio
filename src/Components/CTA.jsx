const FinalCTA = () => {
    return (
        <section className="py-32 bg-[#050505] px-6 border-y-2 border-[#1a1a1a] relative overflow-hidden flex items-center justify-center">

            {/* Fondo sutil para darle profundidad */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#7ba4d0]/10 via-[#050505] to-[#050505]"></div>

            <div className="max-w-3xl mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
                    ¿Listo para <span className="text-[#7ba4d0] block mt-2">Inicializar</span> tu proyecto?
                </h2>

                <p className="text-gray-400 text-sm md:text-base uppercase tracking-[0.2em] mb-12">
                    Hablemos de código, diseño y escalabilidad.
                </p>

                <a
                    href="mailto:tu-correo@gmail.com"
                    className="inline-flex items-center gap-3 px-10 py-5 border-2 border-[#7ba4d0] bg-[#050505] text-[#7ba4d0] hover:bg-[#7ba4d0] hover:text-[#050505] transition-colors font-black uppercase tracking-[0.2em] text-sm group"
                >
                    Contactar Ahora
                    <i className="bi bi-arrow-right text-xl group-hover:translate-x-2 transition-transform"></i>
                </a>
            </div>
        </section>
    );
};

export default FinalCTA;