'use client';

import { motion } from 'motion/react';
import { Search, UserPlus, HeartHandshake, Languages, BookOpen, Users } from 'lucide-react';

export function Concept() {
  return (
    <section id="konzept" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-gradient-to-bl from-teal-50 to-sky-50 rounded-full blur-3xl opacity-60 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-3">Unser Konzept</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            Ganzheitliche Integration in 3 Phasen
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            Wir bieten mehr als nur Software: Pflege-KI inklusive Integrationsberatung und Begleitung. 
            Unser Hauptfokus liegt auf der Integration von Fachkräften aus Vietnam, den Philippinen, Indien, der Ukraine und weiteren Ländern.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 relative pt-4">
          {/* SVG Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-[64px] left-[16%] right-[16%] h-32 z-0 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 1000 100" preserveAspectRatio="none" className="overflow-visible">
              <defs>
                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#5eead4" stopOpacity="0" />
                  <stop offset="10%" stopColor="#5eead4" />
                  <stop offset="50%" stopColor="#38bdf8" />
                  <stop offset="90%" stopColor="#5eead4" />
                  <stop offset="100%" stopColor="#5eead4" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              {/* Base dashed line */}
              <path 
                d="M 0,50 C 250,50 350,20 500,20 C 650,20 750,50 1000,50" 
                fill="none" 
                stroke="#f1f5f9" 
                strokeWidth="4" 
                strokeDasharray="8 8"
              />
              
              {/* Animated fill line */}
              <motion.path 
                d="M 0,50 C 250,50 350,20 500,20 C 650,20 750,50 1000,50" 
                fill="none" 
                stroke="url(#line-gradient)" 
                strokeWidth="4"
                strokeDasharray="1000"
                initial={{ strokeDashoffset: 1000 }}
                whileInView={{ strokeDashoffset: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
              />
              
              {/* Moving glowing dot 1 */}
              <motion.path 
                d="M 0,50 C 250,50 350,20 500,20 C 650,20 750,50 1000,50" 
                fill="none" 
                stroke="#0ea5e9" 
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray="1 1000"
                initial={{ strokeDashoffset: 1000 }}
                whileInView={{ strokeDashoffset: [1000, -1] }}
                viewport={{ once: true }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
                className="drop-shadow-[0_0_8px_rgba(14,165,233,0.8)]"
              />
              
              {/* Moving glowing dot 2 */}
              <motion.path 
                d="M 0,50 C 250,50 350,20 500,20 C 650,20 750,50 1000,50" 
                fill="none" 
                stroke="#14b8a6" 
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray="1 1000"
                initial={{ strokeDashoffset: 1000 }}
                whileInView={{ strokeDashoffset: [1000, -1] }}
                viewport={{ once: true }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 2.5 }}
                className="drop-shadow-[0_0_8px_rgba(20,184,166,0.8)]"
              />
            </svg>
          </div>

          {/* Phase 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative z-10 h-full"
          >
            <motion.div 
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col h-full group"
            >
              <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-teal-100 mx-auto group-hover:scale-110 group-hover:bg-teal-100 transition-all duration-300">
                <Search className="h-8 w-8" />
              </div>
              <div className="text-center mb-6">
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full mb-3 group-hover:bg-teal-50 group-hover:text-teal-700 transition-colors">Phase 1</span>
                <h4 className="text-2xl font-bold text-slate-900">Recruiting Unterstützung</h4>
              </div>
              <p className="text-slate-600 leading-relaxed text-center flex-grow">
                Enge Zusammenarbeit mit Recruitingfirmen im Ausland. Wir helfen Ihnen, die passenden Talente zu finden und bereiten den Weg für einen reibungslosen Start in Deutschland.
              </p>
            </motion.div>
          </motion.div>

          {/* Phase 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-10 h-full lg:-mt-4 lg:mb-4"
          >
            <motion.div 
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-800 flex flex-col h-full group"
            >
              <div className="w-16 h-16 bg-teal-500/20 text-teal-400 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-teal-500/30 mx-auto group-hover:scale-110 group-hover:bg-teal-500/30 transition-all duration-300">
                <UserPlus className="h-8 w-8" />
              </div>
              <div className="text-center mb-6">
                <span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider rounded-full mb-3 group-hover:bg-teal-500/30 transition-colors">Phase 2</span>
                <h4 className="text-2xl font-bold text-white">Onboarding & Einarbeitung</h4>
              </div>
              <p className="text-slate-300 leading-relaxed text-center flex-grow">
                Strukturierte Unterstützung in den ersten Wochen. Wir begleiten die Einarbeitung auf Station, erklären Abläufe und sorgen für ein schnelles Einleben im neuen Arbeitsumfeld.
              </p>
            </motion.div>
          </motion.div>

          {/* Phase 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative z-10 h-full"
          >
            <motion.div 
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col h-full group"
            >
              <div className="w-16 h-16 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-sky-100 mx-auto group-hover:scale-110 group-hover:bg-sky-100 transition-all duration-300">
                <HeartHandshake className="h-8 w-8" />
              </div>
              <div className="text-center mb-6">
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full mb-3 group-hover:bg-sky-50 group-hover:text-sky-700 transition-colors">Phase 3</span>
                <h4 className="text-2xl font-bold text-slate-900">Laufende Begleitung</h4>
              </div>
              <p className="text-slate-600 leading-relaxed text-center flex-grow">
                Dauerhafte Unterstützung bei Arbeitskultur (Umgangsformen, Hierarchien) und Sprachbarrieren durch unsere KI-Assistenz und medizinische Übersetzung.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Highlight Features */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-slate-50 p-6 rounded-2xl flex items-start gap-4 transition-all hover:bg-white hover:shadow-lg border border-transparent hover:border-slate-100"
          >
            <Languages className="w-8 h-8 text-teal-600 flex-shrink-0" />
            <div>
              <h5 className="font-bold text-slate-900 mb-2">KI-Sprachassistenz</h5>
              <p className="text-sm text-slate-600">Unterstützt Deutsch, Vietnamesisch, Tagalog (Philippinen), Hindi, Ukrainisch und weitere Sprachen. Inklusive medizinischer Fachübersetzung.</p>
            </div>
          </motion.div>
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-slate-50 p-6 rounded-2xl flex items-start gap-4 transition-all hover:bg-white hover:shadow-lg border border-transparent hover:border-slate-100"
          >
            <BookOpen className="w-8 h-8 text-sky-600 flex-shrink-0" />
            <div>
              <h5 className="font-bold text-slate-900 mb-2">Arbeitskultur-Coaching</h5>
              <p className="text-sm text-slate-600">Vermittlung von deutschen Umgangsformen, Hierarchieverständnis und kulturellen Besonderheiten im Pflegealltag.</p>
            </div>
          </motion.div>
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-slate-50 p-6 rounded-2xl flex items-start gap-4 transition-all hover:bg-white hover:shadow-lg border border-transparent hover:border-slate-100"
          >
            <Users className="w-8 h-8 text-fuchsia-600 flex-shrink-0" />
            <div>
              <h5 className="font-bold text-slate-900 mb-2">Der Mehrwert</h5>
              <p className="text-sm text-slate-600">Nachhaltige Lösung des Fachkräftemangels durch erfolgreiches und langfristiges Onboarding aus dem Ausland.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
