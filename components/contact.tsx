'use client';

import { useState } from 'react';
import { motion } from 'motion/react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Kontaktieren Sie uns gerne!</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-12 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Vielen Dank!</h3>
              <p className="text-slate-600">Wir haben Ihre Nachricht erhalten und melden uns in Kürze.</p>
            </div>
          ) : (
            <>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Vor- und Nachname *</label>
                <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-slate-50 focus:bg-white" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">geschäftliche E-Mail-Adresse *</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-slate-50 focus:bg-white" required />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">Telefonnummer</label>
                <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-slate-50 focus:bg-white" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Ihre Nachricht</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all resize-none bg-slate-50 focus:bg-white" placeholder="Hier ist Platz für Ihr individuelles Anliegen. Was möchten Sie uns gerne mitteilen?"></textarea>
              </div>
              <button type="submit" className="px-8 py-3.5 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors shadow-md hover:shadow-lg w-full sm:w-auto">
                Senden
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
