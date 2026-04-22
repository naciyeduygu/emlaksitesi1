import { X, Trash2, ShoppingCart } from 'lucide-react';
import { Product } from '../data/products';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cart: Product[];
  onRemove: (id: number) => void;
  onClear: () => void;
}

export function CartModal({ isOpen, onClose, cart, onRemove, onClear }: CartProps) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Cart Drawer */}
      <div className="relative w-full max-w-md bg-slate-900 h-full shadow-2xl border-l border-slate-800 flex flex-col animate-slide-in">
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/50 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <ShoppingCart className="text-cyan-400" />
            <h2 className="text-xl font-bold text-white">Sepetim ({cart.length})</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-full transition-colors"
          >
            <X className="text-slate-400" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-slate-500 space-y-4">
              <ShoppingCart size={64} className="opacity-20" />
              <p>Sepetinizde ürün bulunmamaktadır.</p>
              <button 
                onClick={onClose}
                className="text-cyan-400 hover:text-cyan-300 font-medium"
              >
                Alışverişe Başla
              </button>
            </div>
          ) : (
            cart.map((item, index) => (
              <div 
                key={`${item.id}-${index}`} 
                className="bg-slate-800 rounded-lg p-3 flex gap-4 border border-slate-700 group hover:border-slate-600 transition-colors"
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-20 h-20 object-cover rounded-md bg-slate-900"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-white font-medium line-clamp-1">{item.name}</h3>
                    <p className="text-slate-400 text-sm">{item.category}</p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-cyan-400 font-bold">{item.price.toLocaleString('tr-TR')} ₺</span>
                    <button 
                      onClick={() => onRemove(index)}
                      className="text-red-400 hover:text-red-300 p-1 hover:bg-red-400/10 rounded transition-colors"
                      title="Kaldır"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-4 border-t border-slate-800 bg-slate-900">
            <div className="flex justify-between items-center mb-4">
              <span className="text-slate-400">Toplam Tutar</span>
              <span className="text-2xl font-bold text-white">{total.toLocaleString('tr-TR')} ₺</span>
            </div>
            <div className="space-y-2">
              <button className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-cyan-900/20">
                Siparişi Tamamla
              </button>
              <button 
                onClick={onClear}
                className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium py-2 rounded-lg transition-colors border border-slate-700"
              >
                Sepeti Temizle
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
