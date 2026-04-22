import { Plus } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group flex flex-col h-full">
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-slate-900/80 text-cyan-400 text-xs font-bold px-2 py-1 rounded backdrop-blur-sm border border-slate-700">
          {product.category}
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 min-h-[3.5rem]">{product.name}</h3>
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-bold text-cyan-400">{product.price.toLocaleString('tr-TR')} ₺</span>
          
          <button 
            onClick={() => onAddToCart(product)}
            className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
          >
            <Plus size={16} />
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
}
