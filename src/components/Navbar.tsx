import { ShoppingCart, Monitor, Search } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

export function Navbar({ cartCount, onCartClick }: NavbarProps) {
  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg border-b border-slate-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Monitor className="h-8 w-8 text-cyan-400" />
          <span className="text-xl font-bold tracking-tight">Donanım<span className="text-cyan-400">Dünyası</span></span>
        </div>
        
        <div className="hidden md:flex flex-1 mx-8 relative max-w-md">
          <input 
            type="text" 
            placeholder="Ürün ara..." 
            className="w-full bg-slate-800 border border-slate-700 rounded-full py-2 px-4 pl-10 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
          />
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
        </div>

        <div className="flex items-center space-x-6">
          <ul className="hidden md:flex space-x-6 text-sm font-medium">
            <li className="hover:text-cyan-400 cursor-pointer transition-colors">Ana Sayfa</li>
            <li className="hover:text-cyan-400 cursor-pointer transition-colors">Ürünler</li>
            <li className="hover:text-cyan-400 cursor-pointer transition-colors">Kampanyalar</li>
          </ul>

          <button 
            onClick={onCartClick} 
            className="relative p-2 hover:bg-slate-800 rounded-full transition-colors group"
          >
            <ShoppingCart className="h-6 w-6 text-slate-300 group-hover:text-cyan-400" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-cyan-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
