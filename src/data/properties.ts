export interface Property {
  id: number;
  title: string;
  price: number;
  location: string;
  type: 'Satılık' | 'Kiralık';
  category: 'Daire' | 'Villa' | 'Arsa' | 'İşyeri';
  beds: number;
  baths: number;
  area: number;
  image: string;
  features: string[];
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Deniz Manzaralı Lüks Villa",
    price: 12500000,
    location: "Bodrum, Muğla",
    type: "Satılık",
    category: "Villa",
    beds: 5,
    baths: 4,
    area: 350,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    features: ["Havuz", "Bahçe", "Akıllı Ev", "Otopark"]
  },
  {
    id: 2,
    title: "Modern Şehir Dairesi",
    price: 4500000,
    location: "Kadıköy, İstanbul",
    type: "Satılık",
    category: "Daire",
    beds: 3,
    baths: 2,
    area: 140,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800",
    features: ["Metro Yakını", "Güvenlik", "Balkon"]
  },
  {
    id: 3,
    title: "Boğaz Manzaralı Rezidans",
    price: 25000,
    location: "Beşiktaş, İstanbul",
    type: "Kiralık",
    category: "Daire",
    beds: 2,
    baths: 1,
    area: 95,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800",
    features: ["Spor Salonu", "Resepsiyon", "Kapalı Havuz"]
  },
  {
    id: 4,
    title: "Doğa İçinde Müstakil Ev",
    price: 8750000,
    location: "Sapanca, Sakarya",
    type: "Satılık",
    category: "Villa",
    beds: 4,
    baths: 3,
    area: 280,
    image: "https://images.unsplash.com/photo-1449156001944-829427471261?auto=format&fit=crop&q=80&w=800",
    features: ["Şömine", "Geniş Bahçe", "Veranda"]
  },
  {
    id: 5,
    title: "Eşyalı Stüdyo Daire",
    price: 15000,
    location: "Nilüfer, Bursa",
    type: "Kiralık",
    category: "Daire",
    beds: 1,
    baths: 1,
    area: 55,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800",
    features: ["Eşyalı", "Merkezi Isıtma", "Yeni Bina"]
  },
  {
    id: 6,
    title: "Ticari İmarlı Arsa",
    price: 18000000,
    location: "Çeşme, İzmir",
    type: "Satılık",
    category: "Arsa",
    beds: 0,
    baths: 0,
    area: 1200,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
    features: ["Denize Sıfır", "İmarlı"]
  }
];
