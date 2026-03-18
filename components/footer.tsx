import { Bot } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center shadow-sm">
                <span className="text-white font-bold">i</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">itiep</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Die KI-Assistenz für eine erfolgreiche Integration und langfristige Bindung internationaler Pflegekräfte.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Ressourcen</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Presse</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">FAQ</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Downloads</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li className="text-slate-400 text-sm">
                <a href="mailto:vuxuantiep@gmail.com" className="hover:text-white transition-colors">vuxuantiep@gmail.com</a>
              </li>
              <li className="text-slate-400 text-sm">
                <a href="tel:01781868683" className="hover:text-white transition-colors">+49 178 1868683</a>
              </li>
              <li className="text-slate-400 text-sm mt-6">
                <span className="block text-white mb-1">Servicezeiten</span>
                Mo - Fr 9.00 - 17.00 Uhr
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} itiep. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Impressum</a>
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
