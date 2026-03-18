'use client';

import { motion } from 'motion/react';
import { ShieldCheck, Globe, FileCheck, Users, GraduationCap, Handshake } from 'lucide-react';

const features = [
  {
    title: 'Sprachhilfe in Echtzeit',
    description: 'Sofortige Unterstützung für Pflegekräfte im Alltag, um Sprachbarrieren direkt am Patientenbett zu überwinden.',
    icon: Globe,
  },
  {
    title: 'Unterstützung bei Dokumentation',
    description: 'Automatisierte Übersetzung und Korrektur in medizinisches Fachdeutsch für fehlerfreie Pflegeberichte.',
    icon: FileCheck,
  },
  {
    title: 'Kommunikationshilfe im Team',
    description: 'Vermeidet Missverständnisse bei Übergaben und fördert ein reibungsloses Miteinander auf Station.',
    icon: Users,
  },
  {
    title: 'Kultur- und Integrationsbegleitung',
    description: 'Erklärt deutsche Arbeitsabläufe, Hierarchien und Umgangsformen für ein besseres Ankommen.',
    icon: ShieldCheck,
  },
  {
    title: 'Digitale Einarbeitung & Schulung',
    description: 'Strukturierte Begleitung durch die ersten Monate, um Sicherheit und Fachwissen aufzubauen.',
    icon: GraduationCap,
  },
  {
    title: 'Recruiting-Unterstützung',
    description: 'Enge Zusammenarbeit mit Recruitingfirmen im Ausland für einen reibungslosen und erfolgreichen Start.',
    icon: Handshake,
  }
];

export function FeaturesNew() {
  return (
    <section id="vorteile" className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-3">Die Lösung</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Moderne Integration ohne Kompromisse
          </h3>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed font-medium">
            Keine komplizierte IT-Integration notwendig – sofort einsatzbereit.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all group"
            >
              <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <feature.icon className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
