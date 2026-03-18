'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, User, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

interface Message {
  id: string;
  type: 'bot' | 'user';
  text: string;
  options?: string[];
}

export function ChatDemo() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      text: 'Hallo! Lassen Sie uns in 2 Minuten herausfinden, wie wir Sie unterstützen können. Arbeiten in Ihrer Einrichtung bereits internationale Pflegekräfte?',
      options: ['Ja', 'Nein'],
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleOptionClick = (option: string, messageId: string) => {
    // Remove options from the current message
    setMessages(prev => prev.map(msg => msg.id === messageId ? { ...msg, options: undefined } : msg));
    
    // Add user message
    setMessages(prev => [...prev, { id: Date.now().toString(), type: 'user', text: option }]);
    
    // Simulate typing
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      
      const userMessageCount = messages.filter(m => m.type === 'user').length + 1;
      
      if (userMessageCount === 1) {
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          type: 'bot',
          text: 'Verstehe. Wo entstehen aktuell die größten Herausforderungen in Ihrem Pflegealltag?',
          options: ['Dokumentation', 'Sprachprobleme', 'Ausbildung', 'Personalmangel', 'IT Probleme'],
        }]);
      } else if (userMessageCount === 2) {
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          type: 'bot',
          text: 'Das ist ein bekanntes Problem. Wie viel Zeit kostet Sie die Einarbeitung neuer internationaler Kräfte im Durchschnitt?',
          options: ['Bis zu 3 Monate', '3-6 Monate', 'Über 6 Monate'],
        }]);
      } else if (userMessageCount === 3) {
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          type: 'bot',
          text: 'Welche Software nutzen Sie aktuell für die Pflegedokumentation?',
          options: ['Medifox', 'Connext Vivendi', 'DAN', 'Andere'],
        }]);
      } else if (userMessageCount === 4) {
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          type: 'bot',
          text: 'Vielen Dank für Ihre Antworten! Wir suchen aktuell Einrichtungen für unser Pilotprojekt. Möchten Sie an einem Pilotprojekt teilnehmen?',
          options: ['Ja, gerne', 'Vielleicht später'],
        }]);
      } else if (userMessageCount === 5) {
        setIsFinished(true);
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          type: 'bot',
          text: 'Klasse! Lassen Sie uns in einem kurzen Interview herausfinden, wie wir itiep in Ihrer Einrichtung einsetzen können.',
        }]);
      }
    }, 800);
  };

  return (
    <section id="digital-check" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-light text-slate-900 tracking-tight mb-4">
            Digitalisierungs-Check <span className="font-semibold text-teal-700">starten</span>
          </h2>
          <p className="text-lg text-slate-600">
            Beantworten Sie 5 kurze Fragen – dauert nur 2 Minuten.
          </p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden flex flex-col h-[600px]">
          {/* Chat Header */}
          <div className="bg-teal-700 px-6 py-4 flex items-center shadow-md z-10">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-4 backdrop-blur-sm">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold">itiep Assistenz</h3>
              <p className="text-teal-100 text-xs flex items-center">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
                Online
              </p>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 bg-slate-50/50 space-y-6">
            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div 
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.type === 'bot' && (
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                      <Bot className="w-4 h-4 text-teal-700" />
                    </div>
                  )}
                  
                  <div className={`max-w-[80%] ${msg.type === 'user' ? 'order-1' : 'order-2'}`}>
                    <div 
                      className={`p-4 rounded-2xl shadow-sm text-sm sm:text-base leading-relaxed ${
                        msg.type === 'user' 
                          ? 'bg-teal-600 text-white rounded-tr-sm' 
                          : 'bg-white text-slate-800 border border-slate-100 rounded-tl-sm'
                      }`}
                    >
                      {msg.text}
                    </div>
                    
                    {/* Options */}
                    {msg.options && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {msg.options.map((opt, i) => (
                          <button
                            key={i}
                            onClick={() => handleOptionClick(opt, msg.id)}
                            className="px-4 py-2 bg-white border border-teal-200 text-teal-700 rounded-full text-sm font-medium hover:bg-teal-50 hover:border-teal-300 transition-colors shadow-sm"
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {msg.type === 'user' && (
                    <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center ml-3 flex-shrink-0 mt-1">
                      <User className="w-4 h-4 text-slate-500" />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
            
            {isTyping && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                  <Bot className="w-4 h-4 text-teal-700" />
                </div>
                <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-sm shadow-sm flex items-center space-x-2">
                  <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </motion.div>
            )}
            
            {isFinished && !isTyping && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="flex justify-center mt-8"
              >
                <button className="flex items-center px-8 py-4 bg-teal-600 text-white rounded-full font-semibold text-lg hover:bg-teal-700 hover:shadow-lg hover:-translate-y-1 transition-all group">
                  <Calendar className="w-5 h-5 mr-2" />
                  Interview Termin buchen
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            )}
            <div ref={chatEndRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
