'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export function Survey() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="survey" className="py-16 md:py-24 bg-white border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Helfen Sie uns, die Pflege zu verbessern</h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600">
            Nehmen Sie an unserer kurzen Umfrage teil und sichern Sie sich die Chance auf ein kostenloses 30-Tage Pilotprojekt.
          </p>
        </div>

        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-teal-50 border border-teal-200 rounded-2xl p-6 sm:p-10 text-center shadow-sm"
          >
            <div className="flex justify-center mb-4 sm:mb-6">
              <CheckCircle2 className="h-12 w-12 sm:h-16 sm:w-16 text-teal-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-2 sm:mb-3">Vielen Dank für Ihr Feedback!</h3>
            <p className="text-sm sm:text-lg text-slate-600">
              Ihre Antworten helfen uns, den KI-Assistenten optimal auf Ihre Bedürfnisse abzustimmen. Wir melden uns in Kürze bei Ihnen.
            </p>
          </motion.div>
        ) : (
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit} 
            className="bg-slate-50 p-5 sm:p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm"
          >
            <div className="space-y-6 sm:space-y-8">
              <div>
                <label className="block text-sm sm:text-base font-semibold text-slate-900 mb-3 sm:mb-4">
                  1. Beschäftigen Sie internationale Pflegekräfte (z.B. aus Vietnam)?
                </label>
                <div className="space-y-2 sm:space-y-3">
                  {['Ja, viele', 'Ja, einige', 'Nein, aber geplant', 'Nein'].map((option) => (
                    <label key={option} className="flex items-center space-x-3 p-2.5 sm:p-3 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 cursor-pointer transition-colors">
                      <input type="radio" name="q1" value={option} className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600 focus:ring-teal-500 border-slate-300" required />
                      <span className="text-sm sm:text-base text-slate-700 font-medium">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm sm:text-base font-semibold text-slate-900 mb-3 sm:mb-4">
                  2. Was ist die größte Herausforderung bei der Einarbeitung?
                </label>
                <div className="space-y-2 sm:space-y-3">
                  {['Sprachbarrieren / Fachbegriffe', 'Komplexe Pflegedokumentation', 'Unterschiedliche Arbeitskultur', 'Zeitmangel des Stammpersonals'].map((option) => (
                    <label key={option} className="flex items-center space-x-3 p-2.5 sm:p-3 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 cursor-pointer transition-colors">
                      <input type="radio" name="q2" value={option} className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600 focus:ring-teal-500 border-slate-300" required />
                      <span className="text-sm sm:text-base text-slate-700 font-medium">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm sm:text-base font-semibold text-slate-900 mb-3 sm:mb-4">
                  3. Wie viel Zeit verbringen Ihre Pflegekräfte täglich mit Dokumentation?
                </label>
                <div className="space-y-2 sm:space-y-3">
                  {['Weniger als 1 Stunde', '1-2 Stunden', 'Mehr als 2 Stunden'].map((option) => (
                    <label key={option} className="flex items-center space-x-3 p-2.5 sm:p-3 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 cursor-pointer transition-colors">
                      <input type="radio" name="q3" value={option} className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600 focus:ring-teal-500 border-slate-300" required />
                      <span className="text-sm sm:text-base text-slate-700 font-medium">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm sm:text-base font-semibold text-slate-900 mb-3 sm:mb-4">
                  4. Hätten Sie Interesse an einem kostenlosen 30-Tage Pilotprojekt?
                </label>
                <div className="space-y-2 sm:space-y-3">
                  {['Ja, sehr gerne', 'Vielleicht später', 'Nein'].map((option) => (
                    <label key={option} className="flex items-center space-x-3 p-2.5 sm:p-3 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 cursor-pointer transition-colors">
                      <input type="radio" name="q4" value={option} className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600 focus:ring-teal-500 border-slate-300" required />
                      <span className="text-sm sm:text-base text-slate-700 font-medium">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-2 sm:pt-4">
                <button type="submit" className="w-full py-3 sm:py-4 px-6 bg-teal-600 text-white rounded-xl font-semibold text-base sm:text-lg hover:bg-teal-700 transition-colors shadow-sm">
                  Umfrage absenden
                </button>
              </div>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
}
