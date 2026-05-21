import React, { useEffect, useRef } from 'react';
import Navbar from '../Component/Navbar';
import ServicesHero from '../Component/Servicios/Hero';
import ServicesBento from '../Component/Servicios/Bento';
import CustomServices from '../Component/Servicios/Custom';

const ServicesView = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let currentY = 0;
        let targetY = 0;
        let ease = 0.075;
        let animationFrameId = null;

        const totalLaminas = 3; // Hero, Bento, Custom
        let currentLaminaIndex = 0;
        let isTransitioning = false;

        container.scrollTop = 0;

        const smoothScrollLoop = () => {
            currentY += (targetY - currentY) * ease;
            container.scrollTop = Math.round(currentY);

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
            e.preventDefault();
            if (isTransitioning) return;

            const windowHeight = window.innerHeight;

            if (e.deltaY > 0 && currentLaminaIndex < totalLaminas - 1) {
                currentLaminaIndex++;
                isTransitioning = true;
            } else if (e.deltaY < 0 && currentLaminaIndex > 0) {
                currentLaminaIndex--;
                isTransitioning = true;
            }

            if (isTransitioning) {
                targetY = currentLaminaIndex * windowHeight;
                if (!animationFrameId) {
                    animationFrameId = requestAnimationFrame(smoothScrollLoop);
                }
            }
        };

        container.addEventListener('wheel', handleWheel, { passive: false });

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
            className="h-screen overflow-hidden bg-[#09090B] relative select-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'none' }}
        >
            <style dangerouslySetInnerHTML={{ __html: `main::-webkit-scrollbar { display: none; }` }} />

            {/* Lámina 1: El Taller / Laboratorio */}
            <div className="w-full h-screen transform-gpu will-change-transform flex-shrink-0">
                <ServicesHero />
            </div>

            {/* Lámina 2: El Bento Grid de Servicios Base */}
            <div className="w-full h-screen transform-gpu will-change-transform flex-shrink-0">
                <ServicesBento />
            </div>

            {/* Lámina 3: Soluciones Personalizadas */}
            <div className="w-full h-screen transform-gpu will-change-transform flex-shrink-0">
                <CustomServices />
            </div>
        </main>
    );
};

export default ServicesView;