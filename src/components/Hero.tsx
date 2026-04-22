import { ArrowRight, ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2000"
          alt="Gaming Setup" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/60" />
      </div>

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 bg-cyan-900/30 text-cyan-400 px-4 py-2 rounded-full border border-cyan-800 backdrop-blur-sm animate-fade-in-up">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
            <span className="text-sm font-medium">Yeni Sezon Ürünleri Stokta</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Performansı <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Zirveye</span> Taşıyın
          </h1>
          
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            En yeni nesil ekran kartları, işlemciler ve oyuncu ekipmanları ile bilgisayarınızı bir üst seviyeye çıkarın. Profesyonellerin tercihi Donanım Dünyası.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-lg font-bold transition-all hover:scale-105 shadow-lg shadow-cyan-900/20 group">
              Alışverişe Başla
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-medium border border-slate-700 transition-colors">
              Kategorileri İncele
              <ChevronRight className="text-slate-400" />
            </button>
          </div>
        </div>

        <div className="flex-1 hidden md:block relative">
          <div className="relative z-10 bg-slate-800/50 backdrop-blur-xl p-6 rounded-2xl border border-slate-700 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="flex items-center justify-between mb-4 border-b border-slate-700 pb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs text-slate-500 font-mono">system_stats.log</span>
            </div>
            <div className="space-y-3 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-cyan-400">GPU Usage</span>
                <span className="text-white">99%</span>
              </div>
              <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                <div className="bg-cyan-500 h-full w-[99%]" />
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-purple-400">CPU Temp</span>
                <span className="text-white">65°C</span>
              </div>
              <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                <div className="bg-purple-500 h-full w-[45%]" />
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-green-400">FPS</span>
                <span className="text-white">240+</span>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl -z-10 animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse delay-700" />
        </div>
      </div>
    </div>
  );
}
