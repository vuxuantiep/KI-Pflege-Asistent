'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Smartphone, Zap, Shield, Sparkles, Bot, User, Languages } from 'lucide-react';

interface Message {
  id: string;
  type: 'bot' | 'user';
  text: string;
  options?: string[];
}

const translations: Record<string, any> = {
  'Deutsch': {
    greeting: 'Wie kann ich dir heute auf der Station helfen?',
    options: ['Übersetzung', 'Dokumentationshilfe', 'Ablauf auf Station'],
    transPrompt: 'Gerne. Welchen Begriff oder Satz möchtest du übersetzen?',
    docPrompt: 'Ich helfe dir bei der Dokumentation. Bitte beschreibe kurz die Situation in deinen eigenen Worten.',
    culturePrompt: 'Alles klar. Was genau möchtest du über die Abläufe oder die Kultur auf der Station wissen?',
    transResult: 'Hier ist die passende Formulierung für dich: "Ich werde jetzt Ihren Blutdruck messen." Soll ich dir die Aussprache vorlesen?',
    yesNo: ['Ja, bitte', 'Nein, danke'],
    end: 'Super! Wenn du weitere Fragen hast, bin ich jederzeit für dich da.',
    newQuestion: 'Neue Frage stellen',
    changeLang: 'Sprache ändern'
  },
  'Tiếng Việt': {
    greeting: 'Hôm nay tôi có thể giúp gì cho bạn tại trạm điều dưỡng?',
    options: ['Dịch thuật', 'Hỗ trợ tài liệu', 'Quy trình trạm'],
    transPrompt: 'Tuyệt vời. Bạn muốn dịch từ hoặc câu nào?',
    docPrompt: 'Tôi sẽ giúp bạn tài liệu. Vui lòng mô tả ngắn gọn tình huống.',
    culturePrompt: 'Được rồi. Bạn muốn biết chính xác điều gì về quy trình hoặc văn hóa?',
    transResult: 'Đây là cách diễn đạt phù hợp: "Ich werde jetzt Ihren Blutdruck messen." (Tôi sẽ đo huyết áp cho bạn bây giờ). Bạn có muốn tôi đọc phát âm không?',
    yesNo: ['Có, làm ơn', 'Không, cảm ơn'],
    end: 'Tuyệt vời! Nếu bạn có thêm câu hỏi, tôi luôn ở đây để giúp đỡ.',
    newQuestion: 'Đặt câu hỏi mới',
    changeLang: 'Thay đổi ngôn ngữ'
  },
  'Tagalog': {
    greeting: 'Paano ko kayo matutulungan sa istasyon ngayon?',
    options: ['Pagsasalin', 'Tulong sa Dokumentasyon', 'Proseso sa Istasyon'],
    transPrompt: 'Sige. Anong salita o pangungusap ang gusto mong isalin?',
    docPrompt: 'Tutulungan kita sa dokumentasyon. Pakilarawan nang maikli ang sitwasyon.',
    culturePrompt: 'Maliwanag. Ano ang gusto mong malaman tungkol sa mga proseso o kultura?',
    transResult: 'Narito ang tamang pagpapahayag: "Ich werde jetzt Ihren Blutdruck messen." (Susukatin ko na ngayon ang iyong presyon ng dugo). Gusto mo bang basahin ko ang pagbigkas?',
    yesNo: ['Oo, pakiusap', 'Hindi, salamat'],
    end: 'Ayos! Kung mayroon kang karagdagang mga katanungan, nandito lang ako palagi para tumulong.',
    newQuestion: 'Magtanong ng bago',
    changeLang: 'Palitan ang wika'
  },
  'English': {
    greeting: 'How can I help you on the ward today?',
    options: ['Translation', 'Documentation Help', 'Ward Procedures'],
    transPrompt: 'Sure. Which term or sentence would you like to translate?',
    docPrompt: 'I will help you with the documentation. Please briefly describe the situation.',
    culturePrompt: 'Alright. What exactly would you like to know about the procedures or culture?',
    transResult: 'Here is the appropriate phrasing: "Ich werde jetzt Ihren Blutdruck messen." (I will measure your blood pressure now). Should I read the pronunciation to you?',
    yesNo: ['Yes, please', 'No, thanks'],
    end: 'Great! If you have any more questions, I am always here to help.',
    newQuestion: 'Ask a new question',
    changeLang: 'Change language'
  },
  'Українська': {
    greeting: 'Чим я можу допомогти вам сьогодні у відділенні?',
    options: ['Переклад', 'Допомога з документацією', 'Процедури у відділенні'],
    transPrompt: 'Звісно. Який термін чи речення ви хотіли б перекласти?',
    docPrompt: 'Я допоможу вам з документацією. Будь ласка, коротко опишіть ситуацію.',
    culturePrompt: 'Зрозуміло. Що саме ви хотіли б дізнатися про процедури чи культуру?',
    transResult: 'Ось відповідне формулювання: "Ich werde jetzt Ihren Blutdruck messen." (Зараз я виміряю ваш артеріальний тиск). Прочитати вам вимову?',
    yesNo: ['Так, будь ласка', 'Ні, дякую'],
    end: 'Чудово! Якщо у вас є ще запитання, я завжди готовий допомогти.',
    newQuestion: 'Поставити нове запитання',
    changeLang: 'Змінити мову'
  }
};

const initialMessage: Message = {
  id: '1',
  type: 'bot',
  text: 'Hallo! / Xin chào! / Hello! Bitte wähle deine Sprache / Please select your language:',
  options: ['Deutsch', 'Tiếng Việt', 'Tagalog', 'English', 'Українська'],
};

export function AiApp() {
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [isTyping, setIsTyping] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('Deutsch');
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleOptionClick = (option: string, messageId: string) => {
    setMessages(prev => prev.map(msg => msg.id === messageId ? { ...msg, options: undefined } : msg));
    setMessages(prev => [...prev, { id: Date.now().toString(), type: 'user', text: option }]);
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      const userMessageCount = messages.filter(m => m.type === 'user').length + 1;
      
      if (userMessageCount === 1) {
        const lang = translations[option] ? option : 'Deutsch';
        setSelectedLanguage(lang);
        const t = translations[lang];
        
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          type: 'bot',
          text: t.greeting,
          options: t.options,
        }]);
      } else if (userMessageCount === 2) {
        const t = translations[selectedLanguage];
        const isTranslation = option === t.options[0];
        const isDoc = option === t.options[1];
        
        if (isTranslation) {
          setMessages(prev => [...prev, {
            id: Date.now().toString(),
            type: 'bot',
            text: t.transPrompt,
            options: ['"Blutdruck messen"', '"Schichtübergabe"', '"Patient hat Schmerzen"'],
          }]);
        } else if (isDoc) {
          setMessages(prev => [...prev, {
            id: Date.now().toString(),
            type: 'bot',
            text: t.docPrompt,
          }]);
        } else {
          setMessages(prev => [...prev, {
            id: Date.now().toString(),
            type: 'bot',
            text: t.culturePrompt,
            options: ['"Wie spreche ich den Arzt an?"', '"Was ist bei der Übergabe wichtig?"'],
          }]);
        }
      } else if (userMessageCount === 3) {
        const t = translations[selectedLanguage];
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          type: 'bot',
          text: t.transResult,
          options: t.yesNo,
        }]);
      } else if (userMessageCount === 4) {
        const t = translations[selectedLanguage];
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          type: 'bot',
          text: t.end,
          options: [t.newQuestion, t.changeLang],
        }]);
      } else {
        const t = translations[selectedLanguage];
        if (option === t.changeLang) {
          setSelectedLanguage('Deutsch');
          setMessages([{ ...initialMessage, id: Date.now().toString() }]);
        } else {
          setMessages(prev => [...prev, {
            id: Date.now().toString(),
            type: 'bot',
            text: t.greeting,
            options: t.options,
          }]);
        }
      }
    }, 1000);
  };

  return (
    <section id="ai-app" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-teal-400 font-semibold tracking-wide uppercase text-sm mb-3">Die KI-App</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Ihre digitale Assistenz für den Pflegealltag
          </h3>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed font-medium">
            Entdecken Sie, wie unsere KI-gestützte App die Integration und Kommunikation in Ihrer Einrichtung revolutioniert.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {[
              {
                icon: Smartphone,
                title: 'Immer griffbereit',
                description: 'Die App ist direkt auf den Smartphones der Pflegekräfte verfügbar – für schnelle Hilfe am Patientenbett.'
              },
              {
                icon: Zap,
                title: 'Echtzeit-Übersetzung',
                description: 'Fachbegriffe und Alltagsgespräche werden sofort übersetzt, um Missverständnisse zu vermeiden.'
              },
              {
                icon: Shield,
                title: 'Datenschutzkonform',
                description: 'Alle Daten werden sicher und nach höchsten deutschen Datenschutzstandards verarbeitet.'
              },
              {
                icon: Sparkles,
                title: 'Kulturelle Sensibilität',
                description: 'Die KI berücksichtigt kulturelle Nuancen und hilft bei der Vermittlung von Werten und Normen.'
              }
            ].map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-teal-500/30">
                  <feature.icon className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-sky-500/20 rounded-[3rem] blur-3xl"></div>
            
            {/* Interactive Chat UI replacing the image */}
            <div className="relative h-[600px] rounded-[2rem] overflow-hidden border border-slate-700 shadow-2xl bg-slate-800 flex flex-col">
              {/* App Header */}
              <div className="bg-slate-900 px-6 py-4 flex items-center justify-between border-b border-slate-700 z-10">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center mr-4 border border-teal-500/30">
                    <Bot className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">itiep Mentor</h3>
                    <p className="text-teal-400 text-xs flex items-center">
                      <span className="w-2 h-2 bg-teal-400 rounded-full mr-2 animate-pulse"></span>
                      Online
                    </p>
                  </div>
                </div>
                
                {/* Language Switcher */}
                {selectedLanguage && messages.length > 1 && (
                  <button 
                    onClick={() => {
                      setMessages([{ ...initialMessage, id: Date.now().toString() }]);
                    }}
                    className="flex items-center gap-2 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-full border border-slate-600 transition-colors"
                  >
                    <Languages className="w-3 h-3" />
                    {selectedLanguage}
                  </button>
                )}
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent">
                <AnimatePresence initial={false}>
                  {messages.map((msg) => (
                    <motion.div 
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {msg.type === 'bot' && (
                        <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                          <Bot className="w-4 h-4 text-teal-400" />
                        </div>
                      )}
                      
                      <div className={`max-w-[85%] ${msg.type === 'user' ? 'order-1' : 'order-2'}`}>
                        <div 
                          className={`p-4 rounded-2xl shadow-sm text-sm leading-relaxed ${
                            msg.type === 'user' 
                              ? 'bg-teal-600 text-white rounded-tr-sm' 
                              : 'bg-slate-700 text-slate-100 rounded-tl-sm'
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
                                className="px-4 py-2 bg-slate-800 border border-slate-600 text-teal-400 rounded-full text-sm font-medium hover:bg-slate-700 hover:border-teal-500 transition-colors shadow-sm"
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {msg.type === 'user' && (
                        <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center ml-3 flex-shrink-0 mt-1">
                          <User className="w-4 h-4 text-slate-300" />
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
                    <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                      <Bot className="w-4 h-4 text-teal-400" />
                    </div>
                    <div className="bg-slate-700 p-4 rounded-2xl rounded-tl-sm shadow-sm flex items-center space-x-2">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </motion.div>
                )}
                <div ref={chatEndRef} />
              </div>
              
              {/* Quote overlay at the bottom to match the previous design intent */}
              <div className="bg-slate-900/90 backdrop-blur-md border-t border-slate-700 p-6">
                <p className="text-sm font-medium text-slate-300 mb-1">"Die App ist wie ein digitaler Mentor, der immer da ist, wenn man ihn braucht."</p>
                <p className="text-xs text-teal-400">Pflegekraft aus Vietnam</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
