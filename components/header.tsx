import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-xl">i</span>
          </div>
          <span className="text-2xl font-bold text-slate-900 tracking-tight">itiep</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#problem" className="text-base font-medium text-slate-600 hover:text-teal-600 transition-colors">Herausforderungen</Link>
          <Link href="#vorteile" className="text-base font-medium text-slate-600 hover:text-teal-600 transition-colors">Vorteile</Link>
          <Link href="#digital-check" className="text-base font-medium text-slate-600 hover:text-teal-600 transition-colors">Digitalisierungs-Check</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <a href="#digital-check" className="px-6 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-colors shadow-md">
            Demo Buchen
          </a>
        </div>
      </div>
    </header>
  );
}
