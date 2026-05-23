import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Terminal, Mail, MapPin, } from 'lucide-react';

const Contact = ({ isOpen, onClose }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulación de envío - Aquí conectarías con Formspree, EmailJS o tu backend
        setTimeout(() => {
            setIsSubmitting(false);
            onClose();
        }, 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "100%" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-[100] bg-[#09090B] flex flex-col md:flex-row overflow-hidden"
                >

                    {/* BOTÓN CERRAR (Fijo arriba a la derecha) */}
                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 z-50 p-2 text-zinc-500 hover:text-white hover:bg-zinc-900 transition-all rounded-sm group"
                    >
                        <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                    </button>

                    {/* ------------------------------------------------------------------------- */}
                    {/* MITAD IZQUIERDA: Atmósfera y Datos (Terminal) */}
                    {/* ------------------------------------------------------------------------- */}
                    <div className="w-full md:w-1/2 h-full relative p-8 md:p-24 flex flex-col justify-center border-r border-zinc-900">
                        {/* Atmósfera abstracta */}
                        <div className="absolute inset-0 bg-sentinel-dots opacity-10 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />

                        <div className="relative z-10">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex items-center gap-3 text-blue-500 font-mono text-xs uppercase tracking-[0.4em] mb-6"
                            >
                                <Terminal className="w-4 h-4" />
                                <span>Establecer Conexión</span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-5xl md:text-6xl font-serif text-white tracking-tighter mb-8 leading-tight"
                            >
                                Inicia la <br />
                                <span className="text-zinc-500 italic">secuencia de forja.</span>
                            </motion.h2>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="space-y-6 font-mono text-xs text-zinc-400 mt-12"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-[#0C0C0E] border border-zinc-900 flex items-center justify-center text-blue-500 rounded-sm">
                                        <MapPin className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <span className="block text-[10px] tracking-widest text-zinc-600 mb-1">BASE DE OPERACIONES</span>
                                        <span>Caracas, Venezuela (Global Remote)</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* ------------------------------------------------------------------------- */}
                    {/* MITAD DERECHA: El Formulario */}
                    {/* ------------------------------------------------------------------------- */}

                    <div className="w-full md:w-1/2 h-full bg-[#0C0C0E] p-8 md:p-24 flex flex-col justify-center relative">

                        {/* Capa atmosférica interna sutil para la columna */}
                        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(30,58,138,0.02)_0%,transparent_70%)] pointer-events-none" />

                        <div className="w-full max-w-md mx-auto space-y-6 relative z-10">

                            {/* Encabezado del panel de accesos */}
                            <div className="mb-8 border-b border-zinc-900 pb-4">
                                <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase block mb-1">Puntos de Acceso Externo</span>
                                <h3 className="text-white font-serif text-xl tracking-wide">Selecciona un canal de comunicación</h3>
                            </div>

                            {/* 📥 CANAL 1: GMAIL DIRECTO (REDACTAR) */}
                            <motion.a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=yorbis.dev@gmail.com" // <--- CAMBIA POR TU CORREO REAL
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="group flex items-center justify-between p-6 bg-[#09090B] border border-zinc-900 hover:border-blue-900/50 transition-all duration-300 rounded-sm"
                            >
                                <div className="flex items-center gap-5">
                                    <div className="w-12 h-12 bg-[#0C0C0E] border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-blue-400 group-hover:border-blue-900/30 group-hover:shadow-[0_0_15px_rgba(30,58,138,0.2)] transition-all rounded-sm">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="block text-[9px] font-mono text-zinc-600 tracking-widest uppercase mb-0.5">Bandeja de Entrada</span>
                                        <span className="text-sm font-sans font-medium text-white tracking-wide group-hover:text-blue-100 transition-colors">Enviar Correo Electrónico</span>
                                    </div>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="w-4 h-4 text-zinc-700 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </motion.a>

                            {/* 📸 CANAL 2: INSTAGRAM DIRECTO */}
                            <motion.a
                                href="https://instagram.com/yorbis.dev" // <--- CAMBIA POR TU LINK DE INSTAGRAM
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="group flex items-center justify-between p-6 bg-[#09090B] border border-zinc-900 hover:border-blue-900/50 transition-all duration-300 rounded-sm"
                            >
                                <div className="flex items-center gap-5">
                                    <div className="w-12 h-12 bg-[#0C0C0E] border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-blue-400 group-hover:border-blue-900/30 group-hover:shadow-[0_0_15px_rgba(30,58,138,0.2)] transition-all rounded-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="block text-[9px] font-mono text-zinc-600 tracking-widest uppercase mb-0.5">Mensaje Directo</span>
                                        <span className="text-sm font-sans font-medium text-white tracking-wide group-hover:text-blue-100 transition-colors">Instagram Oficial</span>
                                    </div>
                                </div>
                            </motion.a>

                            {/* 💼 CANAL 3: LINKEDIN DIRECTO */}
                            <motion.a
                                href="https://linkedin.com/in/yorbis-lobo" // <--- CAMBIA POR TU LINK DE LINKEDIN
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="group flex items-center justify-between p-6 bg-[#09090B] border border-zinc-900 hover:border-blue-900/50 transition-all duration-300 rounded-sm"
                            >
                                <div className="flex items-center gap-5">
                                    <div className="w-12 h-12 bg-[#0C0C0E] border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-blue-400 group-hover:border-blue-900/30 group-hover:shadow-[0_0_15px_rgba(30,58,138,0.2)] transition-all rounded-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="block text-[9px] font-mono text-zinc-600 tracking-widest uppercase mb-0.5">Red Profesional</span>
                                        <span className="text-sm font-sans font-medium text-white tracking-wide group-hover:text-blue-100 transition-colors">LinkedIn Perfil</span>
                                    </div>
                                </div>
                            </motion.a>

                            {/* Indicador de estado del sistema en el footer */}
                            <div className="text-center pt-8 border-t border-zinc-950">
                                <span className="text-[9px] font-mono text-zinc-600 tracking-tighter block">
                                    sys.status: ENLACES_DE_CONEXION_LISTOS
                                </span>
                            </div>
                        </div>
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Contact;