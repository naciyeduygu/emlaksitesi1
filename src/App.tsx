import { useState, useEffect } from 'react';
import { Home, Search, Menu, X, Phone, Mail, MapPin, Bed, Bath, Maximize, Filter, ChevronRight, Facebook, Instagram, Twitter } from 'lucide-react';
import { properties } from './data/properties';

export function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('Hepsi');
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const filtered = properties.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           p.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = filterType === 'Hepsi' || p.type === filterType;
      return matchesSearch && matchesType;
    });
    setFilteredProperties(filtered);
  }, [searchTerm, filterType]);

  return (
    <div className="min-h-screen font-sans">
      {/* Header */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-primary-indigo p-2 rounded-lg">
              <Home className="text-white w-6 h-6" />
            </div>
            <span className={`text-2xl font-bold ${scrolled ? 'text-primary-indigo' : 'text-white'}`}>Asil Emlak</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#" className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-primary-indigo' : 'text-white hover:text-primary-light'}`}>Anasayfa</a>
            <a href="#ilanlar" className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-primary-indigo' : 'text-white hover:text-primary-light'}`}>İlanlar</a>
            <a href="#hakkimizda" className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-primary-indigo' : 'text-white hover:text-primary-light'}`}>Hakkımızda</a>
            <a href="#iletisim" className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-primary-indigo' : 'text-white hover:text-primary-light'}`}>İletişim</a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className={scrolled ? 'text-black' : 'text-white'} /> : <Menu className={scrolled ? 'text-black' : 'text-white'} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl border-t animate-fade-in">
            <div className="flex flex-col p-4 space-y-4">
              <a href="#" className="text-gray-800 font-medium" onClick={() => setIsMenuOpen(false)}>Anasayfa</a>
              <a href="#ilanlar" className="text-gray-800 font-medium" onClick={() => setIsMenuOpen(false)}>İlanlar</a>
              <a href="#hakkimizda" className="text-gray-800 font-medium" onClick={() => setIsMenuOpen(false)}>Hakkımızda</a>
              <a href="#iletisim" className="text-gray-800 font-medium" onClick={() => setIsMenuOpen(false)}>İletişim</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Hayalinizdeki Evi Bizimle Bulun</h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">Güvenilir, şeffaf ve profesyonel emlak çözümleri ile 20 yıldır yanınızdayız.</p>
          
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Şehir, semt veya ilan adı ara..." 
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-indigo"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-4">
                <select 
                  className="bg-white text-gray-800 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-indigo min-w-[120px]"
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                >
                  <option value="Hepsi">Hepsi</option>
                  <option value="Satılık">Satılık</option>
                  <option value="Kiralık">Kiralık</option>
                </select>
                <button className="bg-primary-mahogany hover:bg-primary-mahogany/90 text-white px-8 py-3 rounded-xl font-bold transition-all transform hover:scale-105">
                  Ara
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="ilanlar" className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Öne Çıkan İlanlar</h2>
              <div className="h-1.5 w-20 bg-primary-indigo rounded-full"></div>
            </div>
            <div className="hidden md:flex space-x-2">
               <button 
                onClick={() => setFilterType('Hepsi')}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${filterType === 'Hepsi' ? 'bg-primary-indigo text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
               >
                Tümü
               </button>
               <button 
                onClick={() => setFilterType('Satılık')}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${filterType === 'Satılık' ? 'bg-primary-indigo text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
               >
                Satılık
               </button>
               <button 
                onClick={() => setFilterType('Kiralık')}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${filterType === 'Kiralık' ? 'bg-primary-indigo text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
               >
                Kiralık
               </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group border border-gray-100">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-primary-indigo text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
                      {property.type}
                    </span>
                    <span className="bg-white/90 backdrop-blur-sm text-primary-indigo px-3 py-1 rounded-lg text-xs font-bold uppercase">
                      {property.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-bold text-2xl drop-shadow-lg">
                      {property.price.toLocaleString('tr-TR')} ₺
                    </p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-primary-gray mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-indigo transition-colors">{property.title}</h3>
                  
                  <div className="flex justify-between items-center py-4 border-t border-gray-100 text-gray-600">
                    <div className="flex items-center">
                      <Bed className="w-5 h-5 mr-2 text-primary-indigo" />
                      <span className="text-sm font-medium">{property.beds} Yatak</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-5 h-5 mr-2 text-primary-indigo" />
                      <span className="text-sm font-medium">{property.baths} Banyo</span>
                    </div>
                    <div className="flex items-center">
                      <Maximize className="w-5 h-5 mr-2 text-primary-indigo" />
                      <span className="text-sm font-medium">{property.area} m²</span>
                    </div>
                  </div>

                  <button className="w-full mt-2 bg-primary-light hover:bg-primary-gray/20 text-primary-indigo font-bold py-3 rounded-xl transition-colors flex items-center justify-center group">
                    Detayları İncele
                    <ChevronRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProperties.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-xl font-medium">Aradığınız kriterlere uygun ilan bulunamadı.</p>
            </div>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section id="hakkimizda" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000" 
                  alt="About Us"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-primary-mahogany text-white p-10 rounded-3xl shadow-2xl hidden md:block">
                <p className="text-5xl font-bold mb-1">20+</p>
                <p className="text-lg font-medium opacity-90">Yıllık Tecrübe</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">Gayrimenkulde Profesyonelliğin ve Güvenin Adresi</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Asil Emlak olarak, müşterilerimize sadece bir ev değil, huzurlu bir yaşam alanı sunmayı hedefliyoruz. Denizcilikten ilham alan disiplinimiz ve modern vizyonumuzla, gayrimenkul danışmanlığında fark yaratıyoruz.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-indigo/10 p-3 rounded-xl mr-4">
                    <Filter className="text-primary-indigo w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Doğru Fiyatlandırma</h4>
                    <p className="text-gray-600">Piyasa analizi ile mülkünüzün gerçek değerini belirliyoruz.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-indigo/10 p-3 rounded-xl mr-4">
                    <Home className="text-primary-indigo w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Geniş Portföy</h4>
                    <p className="text-gray-600">Her bütçeye ve ihtiyaca uygun binlerce seçenek sunuyoruz.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="iletisim" className="bg-[#1a1a1a] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-primary-indigo p-2 rounded-lg">
                  <Home className="text-white w-6 h-6" />
                </div>
                <span className="text-2xl font-bold text-white">Asil Emlak</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Geleceğinize yatırım yaparken, güvenli ve profesyonel adımlarla yanınızdayız. En iyi gayrimenkul deneyimi için bizimle iletişime geçin.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-primary-indigo transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-primary-indigo transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-primary-indigo transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Hızlı Menü</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Anasayfa</a></li>
                <li><a href="#ilanlar" className="text-gray-400 hover:text-white transition-colors">Tüm İlanlar</a></li>
                <li><a href="#hakkimizda" className="text-gray-400 hover:text-white transition-colors">Hakkımızda</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Hizmetlerimiz</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sıkça Sorulan Sorular</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">İletişim Bilgileri</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-primary-indigo shrink-0" />
                  <span className="text-gray-400">Atatürk Caddesi, No:45, Kadıköy / İstanbul</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-primary-indigo shrink-0" />
                  <span className="text-gray-400">+90 (216) 123 45 67</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-primary-indigo shrink-0" />
                  <span className="text-gray-400">info@asilemlak.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">E-Bülten</h4>
              <p className="text-gray-400 mb-4">Yeni ilanlardan ilk siz haberdar olun.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="E-posta adresiniz" 
                  className="bg-white/5 border border-white/10 px-4 py-3 rounded-l-xl focus:outline-none focus:ring-1 focus:ring-primary-indigo flex-1"
                />
                <button className="bg-primary-indigo px-4 py-3 rounded-r-xl font-bold hover:bg-primary-indigo/90 transition-colors">
                  Kayıt Ol
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Asil Emlak. Tüm hakları saklıdır. Design by AI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
