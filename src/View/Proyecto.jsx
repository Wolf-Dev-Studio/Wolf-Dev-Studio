import React from 'react';
import Swal from 'sweetalert2'
import 'animate.css';
import Dealer from '../assets/Dealer.jpg'
import Gear from '../assets/Gear.jpg'
import SpareSpart from '../assets/SpareSpart.jpg'
import FocusTracker from '../assets/Fitnes.jpg'
import AdminWallet from '../assets/Finance.jpg'
import LogisticDelivery from '../assets/Logistic.jpg'
import LuxuryHub from '../assets/Luxury.jpg'

const mostrarAlerta = (e, link) => {
    // Verificamos si el link está vacío
    if (link === "" || !link) {

        // 🔥 ESTA ES LA MAGIA: Detiene la navegación por defecto del navegador
        e.preventDefault();

        Swal.fire({
            title: "Próximamente...",
            text: "Este proyecto está en desarrollo, apenas concluya lo publicaré.",
            icon: "info",
            confirmButtonText: "Entendido",
            confirmButtonColor: "#7ba4d0",
            background: "#050505",
            color: "#fff",
            customClass: {
                popup: 'animate__animated animate__fadeIn animate__fadeOut'
            }
        });
    }
};


const Proyectos = () => {
    const proyectos = [
        {
            nombre: "Wolf Motor Hub",
            categoria: "Web App / React",
            desc: "Plataforma de gestión y catálogo de vehículos de alto rendimiento.",
            img: Dealer, // Cambiarás esto por la ruta de tu imagen
            link: "https://github.com/Wolf-Dev-Studio/Wolf_Motors_Hub",
            link2: "https://wolf-motor-hub.web.app/" // Link a tu repo o demo
        },
        {
            nombre: "Wolf Gear",
            categoria: "E-Commerce",
            desc: "Próximo desarrollo: Catálogo de ropa deportiva.",
            img: Gear,
            link: "",
            link2: ""
        },
        {
            nombre: "Wolf Spare Parts",
            categoria: "E-Commerce",
            desc: "Próximo desarrollo: Catálogo técnico de piezas y herramientas.",
            img: SpareSpart,
            link: "",
            link2: ""
        },
        {
            nombre: "Wolf Focus Tracker",
            categoria: "App Web / App Movil",
            desc: "Próximo desarrollo: App web para el seguimiento de hábitos y metas.",
            img: FocusTracker,
            link: "",
            link2: ""
        },
        {
            nombre: "Wolf Admin Wallet",
            categoria: "App Web / App Movil",
            desc: "Próximo desarrollo: App web y movil para la gestión de finanzas personales.",
            img: AdminWallet,
            link: "",
            link2: ""
        },
        {
            nombre: "Wolf Logistic And Delivery",
            categoria: "App Web / App Movil",
            desc: "Próximo desarrollo: App web y movil para la gestión de logística y entregas.",
            img: LogisticDelivery,
            link: "",
            link2: ""
        },
        {
            nombre: "Wolf Luxury Hub",
            categoria: "E-Commerce",
            desc: "Próximo desarrollo: Catálogo de productos de lujo y accesorios.",
            img: LuxuryHub,
            link: "",
            link2: ""
        },

    ];

    return (
        <section id="proyectos" className="py-24 bg-[#050505] px-6 border-t-2 border-[#1a1a1a]">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-16 justify-end">
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white text-right">
                        Proyectos <span className="text-[#7ba4d0]">Personales</span>
                    </h2>
                    <div className="h-[2px] w-12 bg-[#7ba4d0]"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {proyectos.map((proyecto, index) => (
                        <div key={index} className="group ">
                            {/* Contenedor de Imagen con efecto Hover */}
                            <a href={proyecto.link2 || "#"}
                                onClick={(e) => mostrarAlerta(e, proyecto.link2)} target="_blank" rel="noopener noreferrer">
                                <div className="border-2 border-[#1a1a1a] overflow-hidden mb-6 relative">
                                    <div className="absolute inset-0 bg-[#7ba4d0]/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                                        <span className="bg-[#050505] border-2 border-[#7ba4d0] text-[#7ba4d0] px-6 py-2 font-black uppercase tracking-widest text-xs">
                                            Ver Proyecto
                                        </span>
                                    </div>
                                    <img
                                        src={proyecto.img}
                                        alt={proyecto.nombre}
                                        className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                                    />
                                </div>
                            </a>

                            {/* Información del Proyecto */}
                            <div className="flex justify-between items-start">
                                <div>
                                    <span className="text-[#7ba4d0] text-[10px] uppercase font-bold tracking-[0.2em]">
                                        {proyecto.categoria}
                                    </span>
                                    <span className="text-[#7ba4d0] text-[10px] uppercase font-bold tracking-[0.2em]">
                                        {proyecto.desc}
                                    </span>
                                    <h3 className="text-white font-black text-xl uppercase tracking-widest mt-2">
                                        {proyecto.nombre}
                                    </h3>
                                </div>
                                <a href={proyecto.link || "#"} onClick={(e) => mostrarAlerta(e, proyecto.link)} className="w-10 h-10 border-2 border-[#1a1a1a] flex items-center justify-center text-gray-500 hover:text-[#7ba4d0] hover:border-[#7ba4d0] transition-colors rounded-full">
                                    <i className="bi bi-arrow-up-right text-lg"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Proyectos;