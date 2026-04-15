import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import Preloader from './Components/Preloader';
import Navbar from './Components/Navbar';
import FloatingContact from './Components/FloatingContact';
import Main from './View/Home';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Proyectos from './View/Proyecto';
import Servicios from './View/Servicios';
import Contacto from './View/Contacto';
import SobreMi from './View/SobreMi';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []); // <-- LÍNEA 17: Solo una vez.

  return (
    <BrowserRouter>
      <div className="relative overflow-hidden w-full min-h-screen flex flex-col bg-[#050505]">
        <Preloader isLoading={isLoading} />
        <Navbar />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
        </Routes>
        <FloatingContact />
        <Footer /> {/* <-- Lo volví a poner aquí para que sea persistente */}
      </div>
    </BrowserRouter>
  );
}

export default App;