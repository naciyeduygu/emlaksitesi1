import { baseListings } from "./listings.js";
import { featuredListings, rotateGallery } from "./gallery.js";

const searchInput = document.getElementById("searchInput");
const typeSelect = document.getElementById("typeSelect");
const priceRange = document.getElementById("priceRange");
const maxPriceText = document.getElementById("maxPriceText");
const resultCount = document.getElementById("resultCount");
const listingGrid = document.getElementById("listingGrid");
const favoriteBadge = document.getElementById("favoriteBadge");

const detailModal = document.getElementById("detailModal");
const modalClose = document.getElementById("modalClose");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalPrice = document.getElementById("modalPrice");

const calcForm = document.getElementById("calcForm");
const monthlyIncome = document.getElementById("monthlyIncome");
const downPayment = document.getElementById("downPayment");
const termYears = document.getElementById("termYears");
const calcOutput = document.getElementById("calcOutput");

const contactForm = document.getElementById("contactForm");
const contactMessage = document.getElementById("contactMessage");

const state = {
  searchText: "",
  type: "Tum Tipler",
  maxPrice: 20000000,
  favorites: new Set(),
  heroIndex: 0,
};

function formatPrice(value) {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0,
  }).format(value);
}

function getFilteredListings() {
  return baseListings.filter((item) => {
    const typeMatch = state.type === "Tum Tipler" || item.type === state.type;
    const text = `${item.title} ${item.city} ${item.district}`.toLowerCase();
    const textMatch = text.includes(state.searchText.toLowerCase());
    const priceMatch = item.price <= state.maxPrice;
    return typeMatch && textMatch && priceMatch;
  });
}

function createListingCard(item) {
  const article = document.createElement("article");
  article.className = "listing-item";

  article.innerHTML = `
    <figure>
      <img src="${item.image}" alt="${item.title}" loading="lazy" />
    </figure>
    <div class="listing-body">
      <h3>${item.title}</h3>
      <p class="listing-meta">${item.city} / ${item.district} | ${item.area} m2 | ${item.rooms}</p>
      <p class="listing-price">${formatPrice(item.price)}</p>
      <div class="listing-actions">
        <button class="btn btn-primary" data-action="detail">Detay</button>
        <button class="btn btn-secondary" data-action="favorite">${
          state.favorites.has(item.id) ? "Favoriden Cikar" : "Favoriye Ekle"
        }</button>
      </div>
    </div>
  `;

  article.querySelector('[data-action="detail"]').addEventListener("click", () => {
    openDetail(item);
  });

  article.querySelector('[data-action="favorite"]').addEventListener("click", () => {
    toggleFavorite(item.id);
  });

  return article;
}

function renderListings() {
  const filtered = getFilteredListings();
  listingGrid.innerHTML = "";
  filtered.forEach((item) => {
    listingGrid.appendChild(createListingCard(item));
  });
  resultCount.textContent = String(filtered.length);

  if (!filtered.length) {
    listingGrid.innerHTML = "<p>Filtrelere uygun ilan bulunamadi. Lutfen kriterleri genisletin.</p>";
  }
}

function toggleFavorite(id) {
  if (state.favorites.has(id)) {
    state.favorites.delete(id);
  } else {
    state.favorites.add(id);
  }
  favoriteBadge.textContent = `Favori ${state.favorites.size}`;
  renderListings();
}

function openDetail(item) {
  modalImage.src = item.image;
  modalTitle.textContent = item.title;
  modalMeta.textContent = `${item.city} / ${item.district} | ${item.type} | ${item.area} m2 | ${item.rooms}`;
  modalPrice.textContent = formatPrice(item.price);
  detailModal.classList.add("is-open");
  detailModal.setAttribute("aria-hidden", "false");
}

function closeDetail() {
  detailModal.classList.remove("is-open");
  detailModal.setAttribute("aria-hidden", "true");
}

function updateHeroBackground() {
  const features = featuredListings(baseListings);
  const active = rotateGallery(features.length ? features : baseListings, state.heroIndex);
  if (!active) {
    return;
  }
  document.querySelector(".hero").style.backgroundImage =
    `linear-gradient(rgba(36, 95, 115, 0.84), rgba(36, 95, 115, 0.65)),` +
    `url("${active.image}")`;
  state.heroIndex += 1;
}

function runCalculator(event) {
  event.preventDefault();
  const income = Number(monthlyIncome.value) || 0;
  const down = Number(downPayment.value) || 0;
  const years = Math.max(Number(termYears.value) || 1, 1);
  const principal = income * 96;
  const maxPrice = principal + down;
  const monthlyEstimate = (maxPrice - down) / (years * 12);

  calcOutput.textContent = `Tahmini erisilebilir fiyat: ${formatPrice(maxPrice)} | Yaklasik aylik taksit: ${formatPrice(
    monthlyEstimate,
  )}`;
}

function submitContact(event) {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const fullName = formData.get("fullName");
  contactMessage.textContent = `${fullName}, talebiniz alindi. Ekibimiz 15 dakika icinde sizi arayacak.`;
  contactForm.reset();
}

searchInput.addEventListener("input", (event) => {
  state.searchText = event.target.value;
  renderListings();
});

typeSelect.addEventListener("change", (event) => {
  state.type = event.target.value;
  renderListings();
});

priceRange.addEventListener("input", (event) => {
  state.maxPrice = Number(event.target.value);
  maxPriceText.textContent = `Maksimum fiyat: ${formatPrice(state.maxPrice)}`;
  renderListings();
});

modalClose.addEventListener("click", closeDetail);
detailModal.addEventListener("click", (event) => {
  if (event.target === detailModal) {
    closeDetail();
  }
});

calcForm.addEventListener("submit", runCalculator);
contactForm.addEventListener("submit", submitContact);

renderListings();
runCalculator(new Event("submit"));
updateHeroBackground();
setInterval(updateHeroBackground, 6000);