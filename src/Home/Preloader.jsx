import React from 'react';
import logo from '../assets/Logo-Principal.png';

const Preloader = ({ isLoading }) => {
    return (
        <div
            className={`fixed inset-0 min-h-screen bg-[#0d2440] flex flex-col items-center justify-center z-50 
                 transition-transform duration-1000 ease-in-out 
                 ${isLoading ? 'translate-y-0' : '-translate-y-full'}`}
        >
            <img
                src={logo}
                alt="Wolf Dev Studio"
                className="h-24 w-auto animate-pulse drop-shadow-[0_0_20px_rgba(123,164,208,0.4)]"
            />
            <div className="mt-8 flex flex-col items-center gap-2">
                <p className="text-[#7ba4d0] font-mono text-xs tracking-[0.4em] uppercase">
                    Iniciando Sistema
                </p>
                <div className="w-32 h-[2px] bg-slate-800 overflow-hidden">
                    <div className="w-full h-full bg-[#7ba4d0] animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;