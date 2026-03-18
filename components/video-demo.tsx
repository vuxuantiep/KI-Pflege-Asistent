'use client';

import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { useState, useRef } from 'react';

export function VideoDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-3">Produktdemo</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            KI-Pflege-Assistenz in Aktion
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            Erleben Sie, wie unsere Plattform internationale Pflegekräfte vom ersten Tag an begleitet und Pflegeteams spürbar entlastet.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-slate-900 aspect-video ring-1 ring-slate-200/50"
        >
          {!isPlaying && (
            <div 
              className="absolute inset-0 z-10 flex items-center justify-center bg-slate-900/40 group cursor-pointer transition-all duration-300 hover:bg-slate-900/30" 
              onClick={handlePlay}
            >
              <div className="w-20 h-20 bg-teal-500 text-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(20,184,166,0.5)] transform group-hover:scale-110 transition-all duration-300">
                <Play className="w-8 h-8 ml-1" fill="currentColor" />
              </div>
            </div>
          )}
          
          <video 
            ref={videoRef}
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000"
            controls={isPlaying}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            {/* Placeholder video from Google's standard test video bucket */}
            <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" type="video/mp4" />
            Ihr Browser unterstützt das Video-Tag nicht.
          </video>
        </motion.div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <h4 className="font-bold text-slate-900 mb-2 text-lg">Nahtlose Integration</h4>
            <p className="text-sm text-slate-600">Überwindung von Sprachbarrieren direkt am Patientenbett durch Echtzeit-Übersetzung.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <h4 className="font-bold text-slate-900 mb-2 text-lg">Kulturelles Onboarding</h4>
            <p className="text-sm text-slate-600">Interaktives Lernen von Stationsabläufen, Hierarchien und der Teamkultur.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <h4 className="font-bold text-slate-900 mb-2 text-lg">Entlastung im Alltag</h4>
            <p className="text-sm text-slate-600">Weniger Rückfragen an Kollegen und mehr Sicherheit bei der Pflegedokumentation.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
