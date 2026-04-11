import React from 'react';
import Fondo from '../assets/IMG-Bienvenida.webp';
import SerLandingPage from '../assets/LandingPage.webp';
import SerTiendaOnline from '../assets/Store-Online.webp';
import SerAppWeb from '../assets/App-Web.webp';


const Main = () => {
    return (
        // MAIN: Sigue siendo el contenedor principal con fondo negro puro
        <main className="flex-grow bg-[#050505] text-[#e7f0fa] flex flex-col">

            {/* --- SECCIÓN 1: PORTADA (HERO) --- */}
            {/* Le añadimos 'overflow-hidden' para que la imagen muera en el borde de esta sección */}
            <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 py-20 text-center overflow-hidden">

                {/* --- CAPA DE IMAGEN DE FONDO (AHORA VIVE SOLO AQUÍ) --- */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={Fondo}
                        alt="Background"
                        className="w-full h-full object-cover opacity-50 grayscale brightness-50"
                    />
                    {/* El degradado asegura una transición suave hacia el negro de la siguiente sección */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/50 via-transparent to-[#050505]"></div>
                </div>

                {/* --- CONTENIDO DEL HERO --- */}
                <div className="relative z-10 max-w-4xl">
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
            </section>

            {/* --- SECCIÓN 2: NUESTROS SERVICIOS --- */}
            {/* Como ya no tiene imagen detrás, su fondo será el negro sólido del <main> */}
            <section className="relative z-10 flex flex-col items-center px-4 py-20 max-w-7xl mx-auto w-full">

                <div className="text-center mb-16">
                    <h3 className="text-3xl font-bold text-[#7ba4d0] mb-4">Alguno de Nuestros Servicios</h3>
                    <p className="text-gray-400">Desarrollo de software a medida para Startups, empresas y organizaciones</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 w-full">
                    {/* Tarjeta 1 */}
                    <div className="flex-1 bg-white/5 border border-white/10 p-8 rounded-lg hover:border-[#7ba4d0] hover:bg-white/10 transition-all duration-300">
                        <img className='h-48 w-full object-cover' src={SerLandingPage} alt="" />
                        <h3 className="text-xl font-bold mb-4 text-white">Creación de Landing Pages</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Diseñamos y desarrollamos landing pages optimizadas para convertir visitantes en clientes.</p>
                    </div>

                    {/* Tarjeta 2 */}
                    <div className="flex-1 bg-white/5 border border-white/10 p-8 rounded-lg hover:border-[#7ba4d0] hover:bg-white/10 transition-all duration-300">
                        <img className='h-48 w-full object-cover' src={SerTiendaOnline} alt="" />
                        <h3 className="text-xl font-bold mb-4 text-white">Creación de Tiendas Online</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Creamos tiendas online profesionales y optimizadas para ventas, con pasarelas de pago integradas y gestión de inventario.</p>
                    </div>

                    {/* Tarjeta 3 */}
                    <div className="flex-1 bg-white/5 border border-white/10 p-8 rounded-lg hover:border-[#7ba4d0] hover:bg-white/10 transition-all duration-300">
                        <img className='h-48 w-full object-cover' src={SerAppWeb} alt="" />
                        <h3 className="text-xl font-bold mb-4 text-white">Creación de Apps Web</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Desarrollamos aplicaciones web personalizadas para automatizar procesos, mejorar la eficiencia y ofrecer experiencias digitales.</p>
                    </div>
                </div>
            </section>

            {/* --- SECCIÓN 3: Sobre mi --- */}
            <section className="w-[90%] mx-auto my-20 bg-[#0f172a] border border-[#a0c4e8] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
                <div className="flex-1 space-y-4">
                    <h3 className="text-3xl font-bold text-[#7ba4d0]">Sobre mí</h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                        Soy un apasionado por la tecnología y el rendimiento. En Wolf Dev Studio,
                        combino la precisión técnica con un diseño minimalista para crear soluciones
                        digitales que no solo funcionan, sino que escalan. Mi enfoque es similar al
                        entrenamiento de alto rendimiento: consistencia, técnica y resultados.
                    </p>
                </div>

                <div className="w-full md:w-1/3 aspect-square bg-[#1e293b] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                    <img
                        src="/tu-foto.jpg" // Asegúrate de poner la ruta correcta
                        alt="Yorbis - Lead Developer"
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>



            {/* --- SECCIÓN 4: NUESTROS PROYECTOS --- */}
            <section className="max-w-7xl mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <h3 className="text-4xl font-black tracking-tighter text-white mb-4">Nuestros Proyectos</h3>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Explora algunos de nuestros trabajos más recientes, donde la funcionalidad se encuentra con el diseño de vanguardia.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Proyecto 1 */}
                    <div className="group bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl overflow-hidden hover:border-[#7ba4d0]/50 transition-all duration-300">
                        <div className="h-48 overflow-hidden">
                            <img src="/proyecto1.jpg" alt="E-commerce Project" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="p-6">
                            <h4 className="text-xl font-bold text-white mb-2">Wolf Automobile</h4>
                            <p className="text-gray-400 text-sm">Plataforma de gestión y venta de vehículos con enfoque en optimización de inventario.</p>
                        </div>
                    </div>

                    {/* Proyecto 2 */}
                    <div className="group bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl overflow-hidden hover:border-[#7ba4d0]/50 transition-all duration-300">
                        <div className="h-48 overflow-hidden">
                            <img src="/proyecto2.jpg" alt="App Project" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="p-6">
                            <h4 className="text-xl font-bold text-white mb-2">Fitness Tracker Pro</h4>
                            <p className="text-gray-400 text-sm">Aplicación web para el control de rutinas y volumen de carga para atletas de alto rendimiento.</p>
                        </div>
                    </div>

                    {/* Proyecto 3 */}
                    <div className="group bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl overflow-hidden hover:border-[#7ba4d0]/50 transition-all duration-300">
                        <div className="h-48 overflow-hidden">
                            <img src="/proyecto3.jpg" alt="Landing Project" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="p-6">
                            <h4 className="text-xl font-bold text-white mb-2">Industrial Landing</h4>
                            <p className="text-gray-400 text-sm">Diseño de alta conversión para empresas del sector metalúrgico y automotriz.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};


export default Main;