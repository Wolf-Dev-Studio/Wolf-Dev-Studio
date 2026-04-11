import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b-2 border-[#1a1a1a] last:border-b-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex justify-between items-center text-left group"
            >
                <span className="text-xs md:text-sm uppercase tracking-[0.2em] font-black text-gray-300 group-hover:text-[#7ba4d0] transition-colors">
                    {question}
                </span>
                <span className={`text-[#7ba4d0] transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                    <i className="bi bi-plus-lg text-xl"></i>
                </span>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 pb-6' : 'max-h-0'}`}>
                <p className="text-gray-500 text-sm leading-relaxed font-medium max-w-2xl">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const questions = [
        {
            question: "¿Qué tecnologías utilizan para los proyectos?",
            answer: "Trabajamos principalmente con el stack moderno: React, Tailwind CSS y Node.js, garantizando interfaces rápidas, escalables y con un diseño técnico de alto nivel."
        },
        {
            question: "¿Cuánto tiempo toma el desarrollo de una landing page?",
            answer: "Dependiendo de la complejidad, una landing page optimizada de Wolf Dev Studio suele estar lista en un periodo de 5 a 10 días hábiles."
        },
        {
            question: "¿Qué sucede una vez que el proyecto se entrega?",
            answer: "Al finalizar el desarrollo, te entregamos la propiedad total del código y los activos. Además, incluimos un periodo de soporte técnico gratuito para asegurar que todo funcione a la perfección y ofrecemos planes de mantenimiento opcionales para futuras actualizaciones."
        },
        {
            question: "¿Cómo es el proceso de pago y entrega?",
            answer: "Trabajamos con hitos claros: análisis inicial, propuesta de diseño, desarrollo activo y despliegue final. Los pagos se gestionan de forma segura según el avance del proyecto."
        }
    ];

    return (
        <section id="preguntas" className="py-20 bg-[#050505] px-6">
            <div className="max-w-4xl mx-auto">
                {/* Encabezado de Sección */}
                <div className="flex items-center gap-4 mb-16">
                    <div className="h-[2px] w-12 bg-[#7ba4d0]"></div>
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white">
                        Preguntas <span className="text-[#7ba4d0]">Frecuentes</span>
                    </h2>
                </div>

                {/* Lista de Acordeones */}
                <div className="border-t-2 border-[#1a1a1a]">
                    {questions.map((q, index) => (
                        <FAQItem key={index} question={q.question} answer={q.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;