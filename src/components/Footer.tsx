import { Github, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tight">Donanım<span className="text-cyan-400">Dünyası</span></h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              En yeni bilgisayar parçaları ve oyuncu ekipmanları için tek adresiniz. Yüksek performans, uygun fiyat.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Hızlı Erişim</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Ana Sayfa</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Ürünler</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Kampanyalar</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Hakkımızda</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">İletişim</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-cyan-400" />
                Teknoloji Vadisi, No: 42, İstanbul
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-cyan-400" />
                +90 (212) 555 0123
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-cyan-400" />
                info@donanimdunyasi.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Bizi Takip Edin</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-cyan-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-cyan-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-cyan-600 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Donanım Dünyası. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
