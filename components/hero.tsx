'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center justify-center text-center bg-white">
      {/* Abstract Gradient Shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-gradient-to-tr from-sky-200/60 via-teal-200/60 to-fuchsia-200/60 blur-3xl rounded-full opacity-60 -z-10"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 rounded-full bg-slate-100 text-slate-700 font-semibold text-xs sm:text-sm tracking-wider uppercase border border-slate-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse mr-2 flex-shrink-0"></span>
            itiep - Die KI-Assistenz
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 tracking-tight mb-8 leading-[1.1]">
            Internationale Pflegekräfte kommen – <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-sky-600">aber bleiben sie auch?</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Wir helfen Ihnen, internationale Pflegekräfte erfolgreich zu integrieren, Kommunikation zu verbessern und langfristig zu binden.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#digital-check" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-all text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 group w-full sm:w-auto">
              Digitalisierungs-Check starten
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
