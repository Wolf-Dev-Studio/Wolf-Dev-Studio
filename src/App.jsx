import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Vistas (Páginas)
import Home from './View/Home';
import WhyWolf from './View/WhyWolf';
import Showroom from './View/Showroom';
import Service from './View/Service';
import AboutView from './View/AboutMe';

// Componentes Globales
import Navbar from './Component/Navbar'; // Tu menú de navegación
import Contact from './Component/Contact'; // El Takeover de contacto que creamos

function App() {
  // Estado maestro que controla si el Takeover de contacto está visible o no
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <BrowserRouter>
      {/* 1. EL NAVBAR GLOBAL 
        Al ponerlo fuera de <Routes>, se renderiza una sola vez y no se recarga al cambiar de vista. 
        Le pasamos la función que abre el contacto.
      */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* 2. EL MOTOR DE RUTAS */}
      <Routes>
        {/* Redirección automática: si entra a la raíz "/", lo manda a "/inicio" */}
        <Route path="/" element={<Navigate to="/inicio" replace />} />

        {/* Rutas en minúsculas y sin tildes (Buenas prácticas de SEO/URL) */}
        <Route path="/inicio" element={<Home />} />
        <Route path="/por-que-wolf" element={<WhyWolf />} />
        <Route path="/proyectos" element={<Showroom />} />
        <Route path="/servicios" element={<Service />} />
        <Route path="/sobre-mi" element={<AboutView />} />
      </Routes>

      <Contact
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </BrowserRouter>
  );
}

export default App;