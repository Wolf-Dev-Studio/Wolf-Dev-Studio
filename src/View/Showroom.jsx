import React, { useEffect, useRef } from 'react';
import Navbar from '../Component/Navbar';
import ProjectsHero from '../Component/Showroom/Hero';
import SingleProjectLane from '../Component/Showroom/Proyect';

// Íconos e info de tus proyectos reales y conceptuales para el Showroom
import { GraduationCap, CarFront, ShieldAlert } from 'lucide-react';

const ProjectsView = () => {
    const containerRef = useRef(null);

    const projectImages = {
        imageMoca: "../src/assets/MOCA.webp",
        imageDealer: "../src/assets/Dealer.webp",
        imageIA: "../src/assets/IA.webp",
    };

    const showroomProjects = [
        {
            id: '01',
            title: 'UEP Monseñor Castillo',
            subtitle: 'PLATAFORMA INSTITUCIONAL',
            desc: 'Reingeniería total para la unidad educativa. Desarrollamos una arquitectura modular en React que despliega un ecosistema ultrarrápido para control de estudios, gestión de notas y canales informativos con carga instantánea y optimización SEO quirúrgica.',
            tech: ['React.js', 'Tailwind CSS', 'Vercel', 'SEO Pro', 'Framer Motion'],
            icon: <GraduationCap className="w-6 h-6" />,
            meta: '100% LIGHTHOUSE PERFORMANCE',
            bgImage: projectImages.imageMoca
        },
        {
            id: '02',
            title: 'Wolf Dealer Hub',
            subtitle: 'SOFTWARE AUTOMOTRIZ',
            desc: 'Ecosistema digital premium enfocado en la exhibición, filtrado y gestión de vehículos alemanes de alto rendimiento. Interfaz limpia con transiciones de aceleración por hardware que emulan la precisión de la ingeniería automotriz.',
            tech: ['React', 'Tailwind', 'Context API', 'Vector Graphics'],
            icon: <CarFront className="w-6 h-6" />,
            meta: 'HIGH-INTENSITY INTERACTION',
            bgImage: projectImages.imageDealer
        },
        {
            id: '03',
            title: 'Sovereign AI Nexus',
            subtitle: 'INTEGRACIÓN LOCAL',
            desc: 'Panel de control inteligente y auditoría de datos empresariales mediante el despliegue de modelos de lenguaje grandes (LLMs) ejecutados localmente en entornos Docker de forma 100% privada y soberana.',
            tech: ['Ollama', 'Docker', 'React', 'Tailwind', 'Python'],
            icon: <ShieldAlert className="w-6 h-6" />,
            meta: 'LOCAL INTELLIGENCE ARCHITECTURE',
            bgImage: projectImages.imageIA
        }
    ];

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let currentY = 0;
        let targetY = 0;
        let ease = 0.075; // Misma fricción premium para mantener la consistencia
        let animationFrameId = null;

        // El Hero + los 3 proyectos = 4 láminas en total
        const totalLaminas = 1 + showroomProjects.length;
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
    }, [showroomProjects.length]);

    return (
        <main
            ref={containerRef}
            className="h-screen overflow-hidden bg-[#09090B] relative"
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

            {/* Lámina 3.1: Hero del Showroom Tech */}
            <div className="w-full h-screen transform-gpu will-change-transform flex-shrink-0">
                <ProjectsHero />
            </div>

            {/* Láminas Dinámicas: Un componente único por proyecto */}
            {showroomProjects.map((project, index) => (
                <div key={project.id} className="w-full h-screen transform-gpu will-change-transform flex-shrink-0">
                    <SingleProjectLane project={project} index={index} />
                </div>
            ))}
        </main>
    );
};

export default ProjectsView;