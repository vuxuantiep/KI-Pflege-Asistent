'use client';

import { motion } from 'motion/react';
import { MessageSquare, FileText, GraduationCap } from 'lucide-react';

const features = [
  {
    title: 'Pflege Sprach-Coach',
    description: 'Übersetzt medizinische Fachbegriffe und hilft bei der Kommunikation mit Ärzten und Patienten im Pflegealltag. Erklärt Regeln und Abläufe.',
    icon: MessageSquare,
  },
  {
    title: 'Dokumentations-Assistent',
    description: 'Erstellt automatisch professionelle Pflegeberichte aus einfachen Stichpunkten oder Spracheingaben. Reduziert Fehler und Stress.',
    icon: FileText,
  },
  {
    title: 'Ausbildungs-Coach',
    description: 'Erklärt Pflegeprozesse, Hygienevorschriften und Arbeitsabläufe Schritt-für-Schritt für eine schnellere Einarbeitung neuer Mitarbeiter.',
    icon: GraduationCap,
  }
];

export function Features() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Drei KI-Agenten für Ihren Pflegealltag</h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Unsere KI-Lösung ist speziell auf die Bedürfnisse von internationalen Pflegekräften zugeschnitten und lässt sich einfach über WhatsApp nutzen.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-5 sm:mb-6">
                <feature.icon className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
