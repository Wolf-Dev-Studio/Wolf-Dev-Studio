import React, { useState } from 'react';

const TechStack = () => {
    const techs = ['React', 'Tailwind CSS', 'JavaScript', 'Node.js', 'Git', 'Figma'];

    return (
        <section id="stack" className="py-20 bg-[#050505] px-6 border-t-2 border-[#1a1a1a]">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest text-gray-400 mb-10">
                    Infraestructura <span className="text-[#7ba4d0]">Técnica</span>
                </h2>

                {/* Contenedor Flex para las etiquetas */}
                <div className="flex flex-wrap justify-center gap-4">
                    {techs.map((tech, index) => (
                        <div
                            key={index}
                            className="px-6 py-3 border-2 border-[#1a1a1a] text-gray-500 hover:text-[#7ba4d0] hover:border-[#7ba4d0] transition-all duration-300 cursor-default font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs hover:-translate-y-1">
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;