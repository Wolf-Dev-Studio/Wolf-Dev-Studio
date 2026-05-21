import React, { useEffect, useRef } from 'react';
import Hero from '../Component/Home/Hero';
import Proyect from '../Component/Home/Proyect';
import Services from '../Component/Home/Service';
import CTA_Home from "../Component/Home/CTA";
import Navbar from '../Component/Navbar';

const Home = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Variables para la física del scroll suavizado (Lerp)
        let currentY = 0;     // Posición actual real del render
        let targetY = 0;      // Posición a la que quiere ir el usuario
        let ease = 0.075;     // Factor de suavizado (Menor número = más lento y sedoso. Intenta entre 0.05 y 0.1)
        let animationFrameId = null;

        const totalLaminas = 4;
        let currentLaminaIndex = 0;
        let isTransitioning = false;

        // Forzar scroll inicial a cero
        container.scrollTop = 0;

        const smoothScrollLoop = () => {
            // Algoritmo Lerp: Distancia actual + (Distancia destino - Distancia actual) * factor de suavizado
            currentY += (targetY - currentY) * ease;

            // Aplicamos el movimiento al contenedor
            container.scrollTop = Math.round(currentY);

            // Si aún no hemos llegado exactamente al destino, seguimos el loop de animación
            if (Math.abs(targetY - currentY) > 0.5) {
                animationFrameId = requestAnimationFrame(smoothScrollLoop);
            } else {
                currentY = targetY;
                container.scrollTop = targetY;
                isTransitioning = false;
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
            }
        };

        const handleWheel = (e) => {
            // Bloqueamos el scroll por defecto brusco del navegador
            e.preventDefault();
            if (isTransitioning) return;

            const windowHeight = window.innerHeight;

            // Detectar dirección del scroll de la rueda
            if (e.deltaY > 0 && currentLaminaIndex < totalLaminas - 1) {
                // Hacia abajo
                currentLaminaIndex++;
                isTransitioning = true;
            } else if (e.deltaY < 0 && currentLaminaIndex > 0) {
                // Hacia arriba
                currentLaminaIndex--;
                isTransitioning = true;
            }

            if (isTransitioning) {
                targetY = currentLaminaIndex * windowHeight;
                // Iniciamos el ciclo de animación fluida por GPU si no está corriendo
                if (!animationFrameId) {
                    animationFrameId = requestAnimationFrame(smoothScrollLoop);
                }
            }
        };

        // Escuchamos el evento de la rueda bloqueando el comportamiento nativo tosco
        container.addEventListener('wheel', handleWheel, { passive: false });

        // Ajustar posiciones si el usuario cambia el tamaño de la ventana (Resize)
        const handleResize = () => {
            targetY = currentLaminaIndex * window.innerHeight;
            currentY = targetY;
            container.scrollTop = targetY;
        };
        window.addEventListener('resize', handleResize);

        return () => {
            container.removeEventListener('wheel', handleWheel);
            window.removeEventListener('resize', handleResize);
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <main
            ref={containerRef}
            // NOTA: Eliminamos 'snap-y snap-mandatory' y 'scroll-smooth' de las clases
            className="h-screen overflow-hidden bg-[#09090B] selection:bg-blue-900 selection:text-white relative"
            style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'none'
            }}
        >
            <style dangerouslySetInnerHTML={{
                __html: `
                main::-webkit-scrollbar { display: none; }
            `}} />


            {/* Las láminas se mantienen fijas en su viewport, controladas quirúrgicamente por el script */}
            <div className="w-full h-screen transform-gpu will-change-transform flex-shrink-0">
                <Hero />
            </div>

            <div className="w-full h-screen transform-gpu will-change-transform flex-shrink-0">
                <Services />
            </div>

            <div className="w-full h-screen transform-gpu will-change-transform flex-shrink-0">
                <Proyect />
            </div>

            <div className="w-full h-screen transform-gpu will-change-transform flex-shrink-0">
                <CTA_Home />
            </div>
        </main >
    );
};

export default Home;