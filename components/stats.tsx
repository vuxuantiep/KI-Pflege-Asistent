export function Stats() {
  return (
    <section className="py-12 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
          <div className="py-4 md:py-0">
            <p className="text-4xl font-bold text-slate-900 mb-2">&gt; 500</p>
            <p className="text-slate-600 font-medium">Integrierte Fachkräfte</p>
          </div>
          <div className="py-4 md:py-0">
            <p className="text-4xl font-bold text-slate-900 mb-2">&gt; 50</p>
            <p className="text-slate-600 font-medium">Partner-Einrichtungen</p>
          </div>
          <div className="py-4 md:py-0">
            <p className="text-4xl font-bold text-slate-900 mb-2">85 %</p>
            <p className="text-slate-600 font-medium">Höhere Bindungsquote</p>
          </div>
        </div>
      </div>
    </section>
  );
}
