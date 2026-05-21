import React, { useEffect, useRef } from 'react';
import Navbar from '../Component/Navbar';
import AboutHero from '../Component/About/Hero';
import AboutEthos from '../Component/About/AboutEthos';
import AboutKnowledge from '../Component/About/AboutKnowLedge';

const AboutView = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let currentY = 0;
        let targetY = 0;
        let ease = 0.075;
        let animationFrameId = null;

        const totalLaminas = 3;
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

            {/* Lámina 1: Conexión Personal (El Arquitecto) */}
            <div className="w-full h-screen transform-gpu will-change-transform flex-shrink-0">
                <AboutHero />
            </div>

            {/* Lámina 2: Ethos, Disciplina y Forma de Trabajo */}
            <div className="w-full h-screen transform-gpu will-change-transform flex-shrink-0">
                <AboutEthos />
            </div>

            {/* Lámina 3: Conocimiento, Stack y Futuro */}
            <div className="w-full h-screen transform-gpu will-change-transform flex-shrink-0">
                <AboutKnowledge />
            </div>
        </main>
    );
};

export default AboutView;