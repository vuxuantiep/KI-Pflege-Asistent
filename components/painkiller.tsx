'use client';

import { motion } from 'motion/react';
import { AlertTriangle, Clock, Languages, Users, FileWarning, Globe2 } from 'lucide-react';
import Image from 'next/image';

export function Painkiller() {
  return (
    <section id="problem" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-3">Die Herausforderung</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Die Realität in vielen Pflegeeinrichtungen
            </h3>
            
            <div className="space-y-4 mb-8">
              {[
                { icon: Languages, text: 'Sprachprobleme im Pflegealltag', color: 'text-amber-600', bg: 'bg-amber-100' },
                { icon: FileWarning, text: 'Unsicherheit bei Dokumentation', color: 'text-rose-600', bg: 'bg-rose-100' },
                { icon: Users, text: 'Missverständnisse im Team', color: 'text-sky-600', bg: 'bg-sky-100' },
                { icon: Globe2, text: 'Kulturelle Unterschiede', color: 'text-emerald-600', bg: 'bg-emerald-100' },
                { icon: Clock, text: 'Lange Einarbeitungszeit', color: 'text-indigo-600', bg: 'bg-indigo-100' },
                { icon: AlertTriangle, text: 'Hohe Fluktuation internationaler Pflegekräfte', color: 'text-red-600', bg: 'bg-red-100' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <div className={`w-10 h-10 rounded-full ${item.bg} flex items-center justify-center flex-shrink-0`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <span className="text-slate-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-slate-900 p-6 rounded-2xl border-l-4 border-teal-500 shadow-lg">
              <p className="text-lg text-slate-300 leading-relaxed">
                <strong className="text-white">Die Folge:</strong> hoher Stress im Team, steigende Kosten und instabile Personalplanung.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] md:h-[700px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2000" 
              alt="Pflegealltag Kommunikation" 
              fill 
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
