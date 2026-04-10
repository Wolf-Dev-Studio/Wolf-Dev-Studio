import React, { useState, useEffect } from 'react';
import Preloader from './Home/Preloader';
import Navbar from './Home/Navbar';
import Main from './Home/Main';
import Footer from './Home/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Proyectos from './Home/Proyectos';
//import Servicios from './Home/Servicios';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []); // <-- LÍNEA 17: Solo una vez.

  return (
    <BrowserRouter>
      <div className="relative overflow-hidden w-full min-h-screen flex flex-col bg-[#050505]">
        <Preloader isLoading={isLoading} />
        <Navbar />

        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/servicios" element={<Servicios />} />
          <Route path="/proyectos" element={<Proyectos />} /> */}
          {/* Si tienes un componente Contacto, puedes añadirlo aquí también */}
        </Routes>

        <Footer /> {/* <-- Lo volví a poner aquí para que sea persistente */}
      </div>
    </BrowserRouter>
  );
}

export default App;