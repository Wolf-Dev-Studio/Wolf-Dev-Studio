import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Cpu, Zap, ArrowUpRight } from 'lucide-react';

const ServicesSection = () => {
    // Configuración de las animaciones para las tarjetas
    const cardVariants = {
        hidden: (direction) => ({
            opacity: 0,
            x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
            y: direction === 'bottom' ? 50 : 0,
        }),
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1], // Beziér de lujo (suave al final)
            },
        },
    };

    const services = [
        {
            id: '01',
            title: 'Desarrollo Web Premium',
            description: 'Interfaces de alto impacto visual con rendimiento quirúrgico. Landings y plataformas que cargan en menos de 1 segundo.',
            icon: <Layout className="w-6 h-6" />,
            direction: 'left',
        },
        {
            id: '02',
            title: 'Arquitecturas Modulares',
            description: 'Construimos sistemas escalables en React. Código limpio, mantenible y optimizado para el crecimiento de tu marca.',
            icon: <Cpu className="w-6 h-6" />,
            direction: 'bottom',
        },
        {
            id: '03',
            title: 'Optimización & IA',
            description: 'Implementación de lógica avanzada y modelos locales para automatizar procesos. 100% garantizado en Google Lighthouse.',
            icon: <Zap className="w-6 h-6" />,
            direction: 'right',
        },
    ];

    return (
        <section className="relative w-full h-[100dvh] bg-[#09090B] flex flex-col justify-center px-8 md:px-24 overflow-hidden">

            {/* Fondo con textura sutil de la agencia */}
            <div className="absolute inset-0 z-0 opacity-30">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(113,113,122,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(113,113,122,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full">

                {/* Cabecera de la Lámina */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-blue-500 font-serif italic text-lg mb-4 block">Servicios</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                        Soluciones de ingeniería <br /> diseñadas para el éxito.
                    </h2>
                </motion.div>

                {/* Grilla de Tarjetas (Láminas de Servicio) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            custom={service.direction}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={cardVariants}
                            className="group relative bg-[#0C0C0E] border border-zinc-900 p-10 rounded-sm hover:border-blue-900/50 transition-all duration-500 flex flex-col justify-between h-[400px]"
                        >
                            {/* Efecto de resplandor interno en hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-8">
                                    <span className="text-zinc-700 font-serif text-xl group-hover:text-blue-500 transition-colors">
                                        {service.id}.
                                    </span>
                                    <div className="p-3 bg-zinc-900/50 rounded-full text-zinc-400 group-hover:text-blue-400 transition-colors">
                                        {service.icon}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-serif text-white mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                                    {service.description}
                                </p>
                            </div>

                            {/* Botón de acción sutil al final de la tarjeta */}
                            <div className="relative z-10 flex items-center gap-2 text-zinc-600 group-hover:text-white transition-colors cursor-pointer mt-8">
                                <span className="text-xs uppercase tracking-widest font-medium">Saber más</span>
                                <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;