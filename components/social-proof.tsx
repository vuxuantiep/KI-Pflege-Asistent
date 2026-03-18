'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export function SocialProof() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-3">Wie funktioniert's?</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Intuitiv &<br/>Wirksam
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed font-medium mb-8">
              Ab dem ersten Tag gut begleitet – mit klaren Abläufen, schneller Wissensvermittlung und echter Unterstützung für Pflegefachpersonal.
            </p>
            
            <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2000" 
                alt="Pflegekraft und Patient" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-slate-50 p-10 md:p-16 rounded-3xl"
          >
            <div className="absolute -top-6 -left-4 text-[120px] text-teal-100 font-serif leading-none select-none">"</div>
            <p className="relative z-10 text-2xl md:text-3xl text-slate-700 font-medium leading-relaxed italic pt-8">
              Erfolgreiche Integration endet nicht bei der Ankunft. Wir haben es uns zur Aufgabe gemacht, sprachliche und kulturelle Brücken zu bauen, damit internationale Pflegekräfte nicht nur ankommen, sondern als wertgeschätzte Kollegen langfristig bleiben.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
