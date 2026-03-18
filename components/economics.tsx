'use client';

import { motion } from 'motion/react';
import { CheckCircle2, HeartHandshake } from 'lucide-react';

export function Differentiation() {
  return (
    <section className="py-24 bg-white overflow-hidden relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-3">Warum itiep?</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Gemeinsam Pflege verändern
            </h2>
            <p className="text-xl text-slate-600 mb-4 leading-relaxed font-medium">
              Andere Systeme organisieren Prozesse.
            </p>
            <p className="text-xl text-teal-600 mb-8 leading-relaxed font-semibold">
              Wir unterstützen Menschen.
            </p>
            
            <ul className="space-y-4">
              {[
                'Fokus auf Integration statt nur Prozesse',
                'Unterstützung internationaler Pflegekräfte',
                'KI-Assistenz im Alltag',
                'Langfristige Mitarbeiterbindung'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-500 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm"
          >
            <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
              <HeartHandshake className="w-8 h-8 text-teal-700" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Der menschliche Faktor</h3>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              Technologie allein löst den Fachkräftemangel nicht. Es ist die Kombination aus intelligenter Assistenz und dem Fokus auf die Bedürfnisse der Menschen, die den Unterschied macht.
            </p>
            <div className="pt-6 border-t border-slate-200">
              <p className="text-base text-slate-500 italic font-medium">
                "Eine strategische Lösung für ein existenzielles Problem – nicht nur ein weiteres Tool."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
