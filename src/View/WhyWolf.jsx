import React, { useEffect, useRef } from 'react';
import Navbar from '../Component/Navbar';
import ManifestoSection from '../Component/Why-Wolf/hero';
import PilarSection from '../Component/Why-Wolf/PilarSection';

const WhyWolfView = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Variables de física para el cálculo del Lerp (Deslizamiento de seda)
        let currentY = 0;     // Posición real renderizada en pantalla
        let targetY = 0;      // Destino calculado al que debe ir la lámina
        let ease = 0.075;     // Factor de fricción (Modificar entre 0.05 y 0.1 para ajustar la densidad)
        let animationFrameId = null;

        const totalLaminas = 2; // El Manifiesto y los Pilares
        let currentLaminaIndex = 0;
        let isTransitioning = false;

        // Aseguramos que la vista inicie arriba
        container.scrollTop = 0;

        const smoothScrollLoop = () => {
            // Algoritmo matemático Lerp de interpolación lineal
            currentY += (targetY - currentY) * ease;
            container.scrollTop = Math.round(currentY);

            // Continuar el ciclo de animación si falta distancia por recorrer
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
            // Interceptamos y anulamos el scroll tosco por defecto del navegador
            e.preventDefault();
            if (isTransitioning) return;

            const windowHeight = window.innerHeight;

            // Evaluamos la dirección de la rueda del ratón
            if (e.deltaY > 0 && currentLaminaIndex < totalLaminas - 1) {
                // Scroll hacia abajo -> Siguiente lámina
                currentLaminaIndex++;
                isTransitioning = true;
            } else if (e.deltaY < 0 && currentLaminaIndex > 0) {
                // Scroll hacia arriba -> Lámina anterior
                currentLaminaIndex--;
                isTransitioning = true;
            }

            if (isTransitioning) {
                targetY = currentLaminaIndex * windowHeight;
                // Disparamos el loop sincronizado con la GPU
                if (!animationFrameId) {
                    animationFrameId = requestAnimationFrame(smoothScrollLoop);
                }
            }
        };

        // Escucha activa del evento wheel bloqueando el comportamiento pasivo nativo
        container.addEventListener('wheel', handleWheel, { passive: false });

        // Recalcular posiciones si el cliente estira o encoge la ventana
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
            // Pasamos a overflow-hidden para remover las barras y comportamientos mecánicos bruscos
            className="h-screen overflow-hidden bg-[#09090B] relative select-none"
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

            {/* Lámina 2.1: El Manifiesto */}
            <div className="w-full h-screen transform-gpu will-change-transform flex-shrink-0">
                <ManifestoSection />
            </div>

            {/* Lámina 2.2: La Matriz de Confianza (FAQ Killer) */}
            <div className="w-full h-screen transform-gpu will-change-transform flex-shrink-0">
                <PilarSection />
            </div>
        </main>
    );
};

export default WhyWolfView;