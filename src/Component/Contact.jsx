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
                                        <svg viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="block text-[9px] font-mono text-zinc-600 tracking-widest uppercase mb-0.5">Mensaje Directo</span>
                                        <span className="text-sm font-sans font-medium text-white tracking-wide group-hover:text-blue-100 transition-colors">Instagram Oficial</span>
                                    </div>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="w-4 h-4 text-zinc-700 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                                />
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
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            className="w-5 h-5"
                                        />
                                    </div>
                                    <div>
                                        <span className="block text-[9px] font-mono text-zinc-600 tracking-widest uppercase mb-0.5">Red Profesional</span>
                                        <span className="text-sm font-sans font-medium text-white tracking-wide group-hover:text-blue-100 transition-colors">LinkedIn Perfil</span>
                                    </div>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="w-4 h-4 text-zinc-700 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                                />
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