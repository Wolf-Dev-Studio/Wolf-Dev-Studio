import React, { useState } from 'react';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Datos de tus redes
  const actions = [
    { name: 'GitHub', icon: <i className="bi bi-github"></i>, link: 'https://github.com/tu-usuario', color: 'bg-[#1a1a1a]' },
    { name: 'LinkedIn', icon: <i className="bi bi-linkedin"></i>, link: 'https://linkedin.com/in/tu-perfil', color: 'bg-[#0077b5]' },
    { name: 'Instagram', icon: <i className="bi bi-instagram"></i>, link: 'https://instagram.com/tu-perfil', color: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]' },
    { name: 'Email', icon: <i className="bi bi-envelope-fill"></i>, link: 'mailto:tu-correo@gmail.com', color: 'bg-[#7ba4d0] text-[#050505]' },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-center gap-4">

      {/* Burbujas Secundarias (Solo aparecen si isOpen es true) */}
      <div className={`flex flex-col gap-3 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        {actions.map((action, index) => (
          <a key={index} href={action.link} target="_blank" className={`${action.color} w-12 h-12 rounded-full flex items-center justify-center text-white text-xl shadow-lg hover:scale-110 transition-transform`}>
            {action.icon}
          </a>
        ))}
      </div>

      {/* Botón Principal (Trigger) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full border-2 border-[#7ba4d0] bg-[#050505] flex items-center justify-center shadow-[0_0_20px_rgba(123,164,208,0.3)] transition-all duration-500 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
      >
        {/* Usamos el mismo rombo del logo para que sea coherente */}
        <div className="w-8 h-8 border-2 border-[#7ba4d0] rotate-45 flex items-center justify-center">
          <span className="text-[#7ba4d0] font-black -rotate-45 text-xl">W</span>
        </div>
      </button>
    </div>
  );
};

export default FloatingContact;