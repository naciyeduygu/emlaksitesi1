export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "NVIDIA GeForce RTX 4090",
    category: "Ekran Kartı",
    price: 75000,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=500",
    description: "En üst düzey oyun ve render performansı için tasarlanmış amiral gemisi."
  },
  {
    id: 2,
    name: "AMD Ryzen 9 7950X",
    category: "İşlemci",
    price: 22000,
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=500",
    description: "16 çekirdek, 32 iş parçacığı ile sınırları zorlayan işlemci gücü."
  },
  {
    id: 3,
    name: "Corsair Vengeance 32GB DDR5",
    category: "RAM",
    price: 4500,
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&q=80&w=500",
    description: "6000MHz hızında çalışan yüksek performanslı DDR5 bellek kiti."
  },
  {
    id: 4,
    name: "Samsung 990 PRO 2TB NVMe SSD",
    category: "Depolama",
    price: 6000,
    image: "https://images.unsplash.com/photo-1628557044797-f21a177c37ec?auto=format&fit=crop&q=80&w=500",
    description: "7450 MB/s okuma hızı ile ışık hızında veri transferi."
  },
  {
    id: 5,
    name: "ASUS ROG MAXIMUS Z790",
    category: "Anakart",
    price: 28000,
    image: "https://images.unsplash.com/photo-1544652478-6653e09f1826?auto=format&fit=crop&q=80&w=500",
    description: "Overclock tutkunları için özel tasarlanmış premium anakart."
  },
  {
    id: 6,
    name: "NVIDIA GeForce RTX 4070 Ti",
    category: "Ekran Kartı",
    price: 35000,
    image: "https://images.unsplash.com/photo-1555618568-9b19980072b2?auto=format&fit=crop&q=80&w=500",
    description: "1440p oyunculuk için mükemmel fiyat/performans dengesi."
  },
  {
    id: 7,
    name: "Intel Core i7-13700K",
    category: "İşlemci",
    price: 14500,
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&q=80&w=500",
    description: "Oyun ve çoklu görevler için hibrit mimari teknolojisi."
  },
  {
    id: 8,
    name: "NZXT H9 Flow Case",
    category: "Kasa",
    price: 5500,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=500",
    description: "Mükemmel hava akışı sağlayan çift odalı modern bilgisayar kasası."
  }
];
