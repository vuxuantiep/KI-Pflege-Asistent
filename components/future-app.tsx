'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Apple, Play, Mic, Languages, FileCheck, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';

export function FutureApp() {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 4);
    }, 3000); // Change step every 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Phone Mockup Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-[320px] lg:max-w-none lg:w-[400px] flex justify-center"
          >
            {/* Decorative background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-teal-100 to-sky-50 rounded-full blur-3xl -z-10"></div>
            
            {/* Phone Frame */}
            <div className="relative w-[300px] h-[620px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-4 border-slate-800">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-b-3xl z-20"></div>
              
              {/* Screen */}
              <div className="relative w-full h-full bg-slate-50 rounded-[2.25rem] overflow-hidden flex flex-col">
                
                {/* App Header (Duolingo-like friendly vibe) */}
                <div className="bg-white pt-12 pb-4 px-6 shadow-sm z-10 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bold text-slate-800 text-lg tracking-tight">CareMate</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                    <span className="text-sm font-bold text-slate-600">VN</span>
                  </div>
                </div>

                {/* App Content */}
                <div className="flex-1 p-5 overflow-y-auto space-y-4 bg-slate-50">
                  
                  {/* Friendly Greeting */}
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                    <p className="text-slate-800 font-medium text-sm">Chào buổi sáng! 👋</p>
                    <p className="text-slate-500 text-xs mt-1">Ich bin dein ruhiger Begleiter für heute. Keine Angst vor Fehlern!</p>
                  </div>

                  {/* Feature Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-sky-100 p-4 rounded-2xl flex flex-col items-center justify-center text-center gap-2 border-b-4 border-sky-200 active:border-b-0 active:translate-y-1 transition-all cursor-pointer">
                      <Mic className="w-6 h-6 text-sky-600" />
                      <span className="text-xs font-bold text-sky-800">Sprach-Doku</span>
                    </div>
                    <div className="bg-teal-100 p-4 rounded-2xl flex flex-col items-center justify-center text-center gap-2 border-b-4 border-teal-200 active:border-b-0 active:translate-y-1 transition-all cursor-pointer">
                      <Languages className="w-6 h-6 text-teal-600" />
                      <span className="text-xs font-bold text-teal-800">Übersetzer</span>
                    </div>
                    <div className="bg-indigo-100 p-4 rounded-2xl flex flex-col items-center justify-center text-center gap-2 border-b-4 border-indigo-200 active:border-b-0 active:translate-y-1 transition-all cursor-pointer">
                      <FileCheck className="w-6 h-6 text-indigo-600" />
                      <span className="text-xs font-bold text-indigo-800">Audit-Report</span>
                    </div>
                    <div className="bg-rose-100 p-4 rounded-2xl flex flex-col items-center justify-center text-center gap-2 border-b-4 border-rose-200 active:border-b-0 active:translate-y-1 transition-all cursor-pointer">
                      <HeartHandshake className="w-6 h-6 text-rose-600" />
                      <span className="text-xs font-bold text-rose-800">Kultur-Guide</span>
                    </div>
                  </div>

                  {/* Animated Live Translation Example */}
                  <div className="mt-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 min-h-[180px] flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Speech2Care Live</span>
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-center">
                      <AnimatePresence mode="popLayout">
                        {animationStep === 0 && (
                          <motion.div
                            key="listening"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="flex flex-col items-center justify-center text-slate-400 py-4"
                          >
                            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-2">
                              <Mic className="w-6 h-6 text-slate-400 animate-pulse" />
                            </div>
                            <span className="text-xs font-medium">Höre zu...</span>
                          </motion.div>
                        )}

                        {animationStep >= 1 && (
                          <motion.div
                            key="input"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-sm text-slate-600 italic mb-3"
                          >
                            "Bệnh nhân đau bụng nhiều..."
                          </motion.div>
                        )}

                        {animationStep >= 2 && (
                          <motion.div
                            key="correction"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-teal-50 p-3 rounded-xl border border-teal-100 mb-3"
                          >
                            <p className="text-sm font-medium text-teal-900">Patient klagt über starke Abdominalschmerzen.</p>
                            <p className="text-[10px] text-teal-600 mt-1 flex items-center gap-1 font-semibold uppercase tracking-wide">
                              <Sparkles className="w-3 h-3" /> Fachdeutsch
                            </p>
                          </motion.div>
                        )}

                        {animationStep >= 3 && (
                          <motion.div
                            key="audit"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-indigo-50 p-2.5 rounded-lg border border-indigo-100 flex items-center gap-2"
                          >
                            <FileCheck className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                            <span className="text-xs font-medium text-indigo-800 leading-tight">Audit-Report für Pflegekasse generiert</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                </div>

                {/* App Navigation */}
                <div className="bg-white border-t border-slate-100 px-6 py-4 flex justify-between items-center pb-6">
                  <div className="w-6 h-6 rounded-full bg-teal-500"></div>
                  <div className="w-6 h-6 rounded-full bg-slate-200"></div>
                  <div className="w-6 h-6 rounded-full bg-slate-200"></div>
                  <div className="w-6 h-6 rounded-full bg-slate-200"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-8"
          >
            <h3 className="text-sky-500 font-bold tracking-wide uppercase text-sm mb-3">Die App</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Dein ruhiger Begleiter im Pflegealltag
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Die KI ist der "ruhige Begleiter", der die Angst vor Fehlern in der fremden Sprache nimmt. Mit einem einfachen, freundlichen Design – inspiriert von bekannten Lern-Apps – geben wir internationalen Fachkräften Sicherheit ab dem ersten Tag.
            </p>

            <div className="space-y-6 mb-10">
              {[
                {
                  icon: Languages,
                  title: 'Sprachassistenz & Fachdeutsch',
                  desc: 'Gleichzeitige Übersetzung (z.B. Vietnamesisch / Deutsch) und automatische Korrektur in korrektes medizinisches Vokabular.'
                },
                {
                  icon: Mic,
                  title: 'Speech2Care: Automatische Doku',
                  desc: 'Spracheingabe wird nicht nur übersetzt, sondern direkt in medizinisches Fachdeutsch korrigiert. Berichte auf Knopfdruck sparen Zeit und verhindern Fehler.'
                },
                {
                  icon: ShieldCheck,
                  title: 'Compliance-Reports für Pflegekassen',
                  desc: 'Integrierte, automatische Audit-Reports beweisen, dass die ausländische Fachkraft alle Dokumentationspflichten korrekt erfüllt hat.'
                },
                {
                  icon: HeartHandshake,
                  title: 'Kulturelles Onboarding',
                  desc: 'Interaktives Lernen der deutschen Arbeitskultur, Hierarchien und Kommunikationsstile.'
                },
                {
                  icon: Sparkles,
                  title: 'Spätere Erweiterung',
                  desc: 'Ausbau zu einer umfassenden Vermittlungsplattform für vietnamesische Pflegekräfte.'
                }
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-teal-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold">{feature.title}</h4>
                    <p className="text-slate-600 text-sm mt-1">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition-colors">
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-[10px] leading-none text-slate-300 mb-1">Download on the</div>
                  <div className="text-sm font-semibold leading-none">App Store</div>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition-colors">
                <Play className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-[10px] leading-none text-slate-300 mb-1">GET IT ON</div>
                  <div className="text-sm font-semibold leading-none">Google Play</div>
                </div>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
