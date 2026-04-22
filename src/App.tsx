import { FormEvent, useMemo, useState } from "react";

type PropertyType = "Daire" | "Villa" | "Ofis";

type Listing = {
  id: number;
  title: string;
  city: string;
  district: string;
  type: PropertyType;
  price: number;
  area: number;
  rooms: string;
  image: string;
  featured?: boolean;
};

const listings: Listing[] = [
  {
    id: 1,
    title: "Deniz Manzarali Akilli Daire",
    city: "Istanbul",
    district: "Kadikoy",
    type: "Daire",
    price: 6250000,
    area: 145,
    rooms: "3+1",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "Bahceli Modern Villa",
    city: "Izmir",
    district: "Urla",
    type: "Villa",
    price: 12800000,
    area: 310,
    rooms: "5+1",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
    featured: true,
  },
  {
    id: 3,
    title: "Merkezi Konumda Premium Ofis",
    city: "Ankara",
    district: "Cankaya",
    type: "Ofis",
    price: 4850000,
    area: 180,
    rooms: "4 Oda",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 4,
    title: "Genis Terasli Aile Dairesi",
    city: "Bursa",
    district: "Nilufer",
    type: "Daire",
    price: 3780000,
    area: 162,
    rooms: "4+1",
    image:
      "https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 5,
    title: "Yatirimlik Plaza Ofisi",
    city: "Istanbul",
    district: "Maslak",
    type: "Ofis",
    price: 7120000,
    area: 205,
    rooms: "6 Oda",
    image:
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 6,
    title: "Havuzlu Site Icinde Villa",
    city: "Antalya",
    district: "Dosemealti",
    type: "Villa",
    price: 15600000,
    area: 355,
    rooms: "6+1",
    image:
      "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?auto=format&fit=crop&w=1400&q=80",
  },
];

function formatPrice(price: number): string {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0,
  }).format(price);
}

function App() {
  const [searchText, setSearchText] = useState("");
  const [selectedType, setSelectedType] = useState<string>("Tum Tipler");
  const [maxPrice, setMaxPrice] = useState(20000000);
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [monthlyIncome, setMonthlyIncome] = useState(125000);
  const [downPayment, setDownPayment] = useState(1500000);
  const [termYears, setTermYears] = useState(10);
  const [toastMessage, setToastMessage] = useState("");

  const filteredListings = useMemo(() => {
    return listings.filter((item) => {
      const typeMatch = selectedType === "Tum Tipler" || item.type === selectedType;
      const textMatch =
        item.title.toLowerCase().includes(searchText.toLowerCase()) ||
        item.city.toLowerCase().includes(searchText.toLowerCase()) ||
        item.district.toLowerCase().includes(searchText.toLowerCase());
      const priceMatch = item.price <= maxPrice;
      return typeMatch && textMatch && priceMatch;
    });
  }, [maxPrice, searchText, selectedType]);

  const maxAffordable = useMemo(() => {
    const repaymentCapacity = monthlyIncome * 96;
    return Math.max(repaymentCapacity + downPayment, 0);
  }, [downPayment, monthlyIncome]);

  const estimatedMonthlyPayment = useMemo(() => {
    if (!selectedListing) {
      return 0;
    }

    const principal = Math.max(selectedListing.price - downPayment, 0);
    const months = termYears * 12;
    const monthlyRate = 0.029;

    if (principal <= 0) {
      return 0;
    }

    const factor = Math.pow(1 + monthlyRate, months);
    return (principal * monthlyRate * factor) / (factor - 1);
  }, [downPayment, selectedListing, termYears]);

  const featuredListing = listings.find((item) => item.featured) ?? listings[0];

  const handleFavorite = (id: number) => {
    setFavorites((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  };

  const handleLeadSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setToastMessage("Talebiniz alindi. 15 dakika icinde sizi arayacagiz.");
    setTimeout(() => setToastMessage(""), 2800);
  };

  return (
    <div className="bg-[#F2F0EF] text-slate-900 selection:bg-[#245F73] selection:text-white">
      <header className="relative isolate min-h-screen overflow-hidden">
        <img
          src={featuredListing.image}
          alt="MaviKapi Emlak vitrin gorseli"
          className="hero-zoom absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#245F73]/90 via-[#245F73]/70 to-[#733E24]/65" />

        <nav className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 text-[#F2F0EF]">
          <a href="#" className="text-2xl font-bold tracking-wide">
            MaviKapi Emlak
          </a>
          <div className="hidden gap-7 text-sm font-semibold md:flex">
            <a href="#ilanlar" className="nav-link">
              Ilanlar
            </a>
            <a href="#degerleme" className="nav-link">
              Degerleme
            </a>
            <a href="#iletisim" className="nav-link">
              Iletisim
            </a>
          </div>
          <span className="text-sm font-medium">Favori: {favorites.length}</span>
        </nav>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-6xl items-center px-6 pb-14">
          <div className="max-w-2xl text-[#F2F0EF]">
            <p className="text-xl font-semibold tracking-wide">MaviKapi Emlak</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-6xl">
              Dogru semtte, dogru m2 ile hayatinizi yeniden konumlandirin.
            </h1>
            <p className="mt-6 max-w-xl text-base text-[#F2F0EF]/90 sm:text-lg">
              Guvenilir ilanlar, dogrulanmis fiyatlar ve sonuc odakli danismanlik ile satin alma ve kiralama surecini tek panelde yonetin.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#ilanlar"
                className="rounded-md bg-[#733E24] px-7 py-3 text-sm font-semibold text-[#F2F0EF] transition hover:bg-[#5f311b]"
              >
                Ilanlari Incele
              </a>
              <a
                href="#iletisim"
                className="rounded-md border border-[#F2F0EF] px-7 py-3 text-sm font-semibold text-[#F2F0EF] transition hover:bg-[#F2F0EF] hover:text-[#245F73]"
              >
                Danismanla Konus
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="ilanlar" className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold text-[#245F73]">Canli Ilan Akisi</h2>
          <p className="mt-3 max-w-2xl text-slate-700">
            Sehir, tip ve fiyat filtresiyle ilanlari aninda daraltin. Her ilan butonu, detay ve teklif surecini tek adimda baslatir.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <input
              type="text"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              placeholder="Sehir, ilce veya ilan ara"
              className="w-full rounded-md border border-[#BBBDBC] bg-white px-4 py-3 text-sm outline-none ring-[#245F73] focus:ring-2"
            />
            <select
              value={selectedType}
              onChange={(event) => setSelectedType(event.target.value)}
              className="w-full rounded-md border border-[#BBBDBC] bg-white px-4 py-3 text-sm outline-none ring-[#245F73] focus:ring-2"
            >
              <option>Tum Tipler</option>
              <option>Daire</option>
              <option>Villa</option>
              <option>Ofis</option>
            </select>
            <div className="rounded-md border border-[#BBBDBC] bg-white px-4 py-3">
              <label className="text-xs text-slate-600">Maksimum Fiyat: {formatPrice(maxPrice)}</label>
              <input
                type="range"
                min={2000000}
                max={20000000}
                step={250000}
                value={maxPrice}
                onChange={(event) => setMaxPrice(Number(event.target.value))}
                className="mt-2 w-full accent-[#245F73]"
              />
            </div>
            <div className="rounded-md bg-[#245F73] px-4 py-3 text-[#F2F0EF]">
              <p className="text-xs">Sonuc</p>
              <p className="mt-1 text-2xl font-bold">{filteredListings.length}</p>
              <p className="text-xs">Uygun ilan bulundu</p>
            </div>
          </div>

          <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {filteredListings.map((listing, index) => (
              <article
                key={listing.id}
                className="listing-enter overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-[#BBBDBC]/60"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <img src={listing.image} alt={listing.title} className="h-52 w-full object-cover" />
                <div className="space-y-4 px-5 py-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#733E24]">
                        {listing.type} - {listing.city}
                      </p>
                      <h3 className="mt-1 text-lg font-bold text-[#245F73]">{listing.title}</h3>
                      <p className="text-sm text-slate-600">{listing.district}</p>
                    </div>
                    <button
                      onClick={() => handleFavorite(listing.id)}
                      className="rounded-sm border border-[#BBBDBC] px-3 py-1 text-xs font-semibold transition hover:border-[#245F73] hover:text-[#245F73]"
                    >
                      {favorites.includes(listing.id) ? "Kayitli" : "Favori"}
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-sm text-slate-700">
                    <span>{listing.area} m2</span>
                    <span>{listing.rooms}</span>
                    <span className="font-semibold text-[#733E24]">{formatPrice(listing.price)}</span>
                  </div>

                  <button
                    onClick={() => setSelectedListing(listing)}
                    className="w-full rounded-md bg-[#245F73] px-4 py-2.5 text-sm font-semibold text-[#F2F0EF] transition hover:bg-[#1a4f60]"
                  >
                    Detay ve Odeme Plani
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="degerleme" className="bg-[#BBBDBC]/35 py-16">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-[#245F73]">Butceye Gore Degerleme</h2>
              <p className="mt-3 max-w-xl text-slate-700">
                Geliriniz ve pesinatiniza gore tahmini satin alma gucunuzu gorun. Uygun ilanlari saniyeler icinde secin.
              </p>
              <div className="mt-8 space-y-4 rounded-md bg-white p-6 ring-1 ring-[#BBBDBC]">
                <label className="block text-sm font-medium text-slate-700">
                  Aylik Gelir (TL)
                  <input
                    type="number"
                    min={0}
                    value={monthlyIncome}
                    onChange={(event) => setMonthlyIncome(Number(event.target.value))}
                    className="mt-1 w-full rounded-md border border-[#BBBDBC] px-3 py-2 outline-none ring-[#245F73] focus:ring-2"
                  />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                  Pesinat (TL)
                  <input
                    type="number"
                    min={0}
                    value={downPayment}
                    onChange={(event) => setDownPayment(Number(event.target.value))}
                    className="mt-1 w-full rounded-md border border-[#BBBDBC] px-3 py-2 outline-none ring-[#245F73] focus:ring-2"
                  />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                  Vade (Yil)
                  <input
                    type="range"
                    min={5}
                    max={20}
                    value={termYears}
                    onChange={(event) => setTermYears(Number(event.target.value))}
                    className="mt-2 w-full accent-[#733E24]"
                  />
                  <span className="text-xs text-slate-600">{termYears} yil</span>
                </label>
              </div>
            </div>

            <div className="flex items-end">
              <div className="w-full rounded-md bg-[#245F73] p-8 text-[#F2F0EF]">
                <p className="text-sm">Tahmini Satin Alma Limiti</p>
                <p className="mt-2 text-4xl font-bold">{formatPrice(maxAffordable)}</p>
                <p className="mt-4 text-sm text-[#F2F0EF]/85">
                  Bu hesaplama bilgilendirme amaclidir. Kredi skoru ve banka kosullarina gore degisebilir.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="iletisim" className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold text-[#245F73]">Saha Ekibiyle Iletisim</h2>
          <p className="mt-3 max-w-2xl text-slate-700">
            Portfoyunuzdeki gayrimenkuller icin profesyonel cekim, pazarlama ve alici eleme surecini ayni gun baslatiyoruz.
          </p>
          <form onSubmit={handleLeadSubmit} className="mt-8 grid gap-4 md:grid-cols-3">
            <input
              required
              type="text"
              placeholder="Ad Soyad"
              className="rounded-md border border-[#BBBDBC] bg-white px-4 py-3 text-sm outline-none ring-[#245F73] focus:ring-2"
            />
            <input
              required
              type="tel"
              placeholder="Telefon"
              className="rounded-md border border-[#BBBDBC] bg-white px-4 py-3 text-sm outline-none ring-[#245F73] focus:ring-2"
            />
            <button
              type="submit"
              className="rounded-md bg-[#733E24] px-4 py-3 text-sm font-semibold text-[#F2F0EF] transition hover:bg-[#5f311b]"
            >
              Ucretsiz Ekspertiz Talebi Gonder
            </button>
          </form>
        </section>
      </main>

      {selectedListing && (
        <div className="fixed inset-0 z-30 flex items-end justify-center bg-slate-950/60 p-4 sm:items-center">
          <div className="modal-rise w-full max-w-lg rounded-md bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-[#245F73]">{selectedListing.title}</h3>
            <p className="mt-2 text-sm text-slate-700">
              {selectedListing.city} - {selectedListing.district} - {selectedListing.area} m2
            </p>
            <div className="mt-6 space-y-2 rounded-md bg-[#F2F0EF] p-4 text-sm">
              <p className="flex items-center justify-between">
                <span>Ilan Fiyati</span>
                <strong>{formatPrice(selectedListing.price)}</strong>
              </p>
              <p className="flex items-center justify-between">
                <span>Pesinat</span>
                <strong>{formatPrice(downPayment)}</strong>
              </p>
              <p className="flex items-center justify-between border-t border-[#BBBDBC] pt-2 text-[#733E24]">
                <span>Tahmini Aylik Odeme</span>
                <strong>{formatPrice(estimatedMonthlyPayment)}</strong>
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setSelectedListing(null)}
                className="flex-1 rounded-md border border-[#BBBDBC] px-4 py-2 text-sm font-semibold"
              >
                Kapat
              </button>
              <a
                href="#iletisim"
                onClick={() => setSelectedListing(null)}
                className="flex-1 rounded-md bg-[#245F73] px-4 py-2 text-center text-sm font-semibold text-[#F2F0EF]"
              >
                Danisman Ata
              </a>
            </div>
          </div>
        </div>
      )}

      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-40 rounded-md bg-[#245F73] px-5 py-3 text-sm font-medium text-[#F2F0EF] shadow-lg">
          {toastMessage}
        </div>
      )}

      <footer className="border-t border-[#BBBDBC] bg-[#F2F0EF] py-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-6 text-sm text-slate-600 sm:flex-row">
          <p>2026 MaviKapi Emlak. Tum haklari saklidir.</p>
          <p>Kurumsal: satis@mavikapi.com | 0850 777 01 01</p>
        </div>
      </footer>
    </div>
  );
}

export { App };