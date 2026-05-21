import React from 'react';
import { motion } from 'framer-motion';
import { TerminalSquare, BookOpen, Rocket } from 'lucide-react';

const AboutKnowledge = () => {
  return (
    <section className="w-full h-full bg-[#09090B] flex items-center px-8 md:px-24 relative overflow-hidden">

      {/* Diseño abstracto Impar (Nodos y Grilla Técnica) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-blue-800 rounded-full blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">

        {/* Columna Visual: El Entorno de Trabajo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="w-full md:w-1/3 relative p-6 bg-[#0C0C0E]/80 border border-zinc-900 rounded-sm backdrop-blur-sm shadow-2xl"
        >
          <div className="flex items-center gap-2 mb-4 border-b border-zinc-900 pb-4">
            <TerminalSquare className="w-4 h-4 text-zinc-500" />
            <span className="text-zinc-600 font-mono text-xs">system_specs.sh</span>
          </div>
          <div className="space-y-4 font-mono text-[11px] text-zinc-400">
            <div>
              <span className="text-blue-500">OS:</span> Fedora Workstation (Linux Native)
            </div>
            <div>
              <span className="text-blue-500">STACK:</span> React.js, Tailwind, JavaScript
            </div>
            <div>
              <span className="text-blue-500">INFRA:</span> Docker, Local LLMs (Ollama)
            </div>
            <div>
              <span className="text-blue-500">STATUS:</span> Ing. Informática (En progreso)
            </div>
          </div>
        </motion.div>

        {/* Columna de Texto: Evolución y Futuro */}
        <div className="w-full md:w-2/3">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-5 h-5 text-blue-500" />
              <h3 className="text-2xl font-serif text-white">Bases Académicas & Aprendizaje</h3>
            </div>
            <p className="text-zinc-400 text-sm font-sans leading-relaxed pl-8 border-l border-zinc-900">
              Mi conocimiento no se basa solo en tutoriales de internet. Actualmente estoy forjando mis bases formales como estudiante de <b>Ingeniería en Informática</b>. Opero un entorno de desarrollo puramente en Linux, integrando tecnologías de vanguardia como modelos de Inteligencia Artificial locales (Docker/Ollama) y arquitecturas React ultrarrápidas.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-2">
              <Rocket className="w-5 h-5 text-blue-500" />
              <h3 className="text-2xl font-serif text-white">El futuro de Wolf Dev Studio</h3>
            </div>
            <p className="text-zinc-400 text-sm font-sans leading-relaxed pl-8 border-l border-zinc-900">
              Wolf no es un proyecto temporal; es el inicio de una agencia digital de élite. El objetivo a corto plazo es consolidar mi fluidez en inglés B2 para expandir el territorio. Cada proyecto que asumo hoy es una pieza fundamental de este imperio tecnológico en construcción.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutKnowledge;