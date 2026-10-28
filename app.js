/* ==========================================================================
   WALMART AQUAPRO : MOTEUR ET BASE DE DONNÉES ROBINETTERIE MODERNE
   ========================================================================== */

const FAUCETS_CATALOG = [
  {
    id: "wal-01",
    name: "Robinet Salle de Bain Cascade Haute Définition 'AquaFlow Luxe'",
    brand: "BWE Waterfall Pro",
    cat: "bathroom",
    finish: "black",
    price: 49.99,
    oldPrice: 79.99,
    savings: "$30.00 (37% de Rabais)",
    rating: 4.8,
    reviews: 2140,
    walmartBadge: "Rollback Deal",
    waterSense: "1.2 GPM (Éco)",
    flowRate: 1.2,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
    walmartUrl: "https://www.walmart.com/search?q=waterfall+bathroom+faucet+matte+black",
    desc: "Bec verseur large créant un rideau d'eau laminaire ultra-apaisant. Cartouche en céramique étanche testée 500 000 cycles, finition noir mat anti-traces d'empreintes et anti-calcaire.",
    specs: [
      "Type : Monotrou ou 3 trous avec plaque incluse",
      "Débit : 1.2 Gallons/min Certifié WaterSense",
      "Matériau : Laiton massif sans plomb CW617N",
      "Garantie : Garantie à vie limitée constructeur"
    ]
  },
  {
    id: "wal-02",
    name: "Mitigeur Cuisine Commercial avec Douchette Rétractable 360°",
    brand: "Moen Commercial",
    cat: "kitchen",
    finish: "chrome",
    price: 119.00,
    oldPrice: 169.00,
    savings: "$50.00 (Rollback)",
    rating: 4.9,
    reviews: 4890,
    walmartBadge: "Walmart's Choice",
    waterSense: "1.5 GPM PowerClean",
    flowRate: 1.5,
    image: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=600&q=80",
    walmartUrl: "https://www.walmart.com/search?q=moen+kitchen+faucet+pull+down+chrome",
    desc: "Technologie PowerClean offrant 50% de puissance de jet en plus tout en économisant l'eau. Ressort professionnel en acier inoxydable et système d'amarrage magnétique Reflex.",
    specs: [
      "Hauteur : 42 cm avec col de cygne ergonomique",
      "Modes de jet : Aéré standard, Jet concentré Power, Pause",
      "Rotation : 360 degrés pour éviers doubles",
      "Finition : Chrome miroir résistant aux rayures"
    ]
  },
  {
    id: "wal-03",
    name: "Robinet Automatique Sans Contact Infrarouge Hygiène Pro",
    brand: "Delta Sensor Smart",
    cat: "sensor",
    finish: "chrome",
    price: 89.95,
    oldPrice: 139.99,
    savings: "$50.04 (Économie Pro)",
    rating: 4.7,
    reviews: 1320,
    walmartBadge: "Top Hygiène 2026",
    waterSense: "1.0 GPM Ultra-Éco",
    flowRate: 1.0,
    image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=600&q=80",
    walmartUrl: "https://www.walmart.com/search?q=delta+touchless+bathroom+faucet",
    desc: "Détection de mouvement infrarouge intelligente à double capteur. Fermeture automatique après 30 secondes pour prévenir tout débordement. Fonctionne sur piles ou secteur.",
    specs: [
      "Capteur : Infrarouge réactif à 0.2 seconde",
      "Alimentation : 4 piles AA (durée 2 ans)",
      "Robinet mélangeur sous lavabo eau chaude/froide inclus",
      "Norme : Sans plomb NSF/ANSI 61"
    ]
  },
  {
    id: "wal-04",
    name: "Système de Douche Thermostatique Pluie Plafonnier & Douchette",
    brand: "Kohler HydroLux",
    cat: "shower",
    finish: "gold",
    price: 249.99,
    oldPrice: 349.99,
    savings: "$100.00 (Remise Luxe)",
    rating: 4.9,
    reviews: 950,
    walmartBadge: "Sélection Prestige",
    waterSense: "1.8 GPM Jet Pluie",
    flowRate: 1.8,
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=600&q=80",
    walmartUrl: "https://www.walmart.com/search?q=kohler+shower+system+brushed+gold",
    desc: "Ciel de pluie extra-large de 30 cm en laiton brossé finition or royal. Mitigeur thermostatique de sécurité verrouillé à 38°C pour éviter les brûlures accidentelles.",
    specs: [
      "Ciel de douche : 300 x 300 mm Inox & Picots silicone",
      "Mitigeur : Thermostatique haute précision anti-choc thermique",
      "Corps : Laiton lourd anti-corrosion",
      "Finition : Doré brossé PVD inaltérable"
    ]
  },
  {
    id: "wal-05",
    name: "Robinet d'Évier Moderne Col de Cygne Or Brossé Minimaliste",
    brand: "Kraus Oletto",
    cat: "bathroom",
    finish: "gold",
    price: 74.50,
    oldPrice: 105.00,
    savings: "$30.50 (Rabais Vedette)",
    rating: 4.8,
    reviews: 1780,
    walmartBadge: "Meilleure Vente",
    waterSense: "1.2 GPM Aérateur Neoperl",
    flowRate: 1.2,
    image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=600&q=80",
    walmartUrl: "https://www.walmart.com/search?q=kraus+bathroom+faucet+brushed+gold",
    desc: "Silhouette sculpturale et pureté des lignes nordiques. Aérateur suisse Neoperl réduisant les éclaboussures et économisant 20% d'eau tout en préservant une pression dense.",
    specs: [
      "Cartouche : Disques céramiques Kerox",
      "Installation : 1 trou rapide avec raccords flexibles QuickConnect",
      "Hauteur : 21 cm dégagement optimal",
      "Finition : Laiton brossé or mat anti-oxydation"
    ]
  },
  {
    id: "wal-06",
    name: "Mitigeur Cuisine Industriel avec Robinet Eau Filtrée Intégré",
    brand: "Forious 2-en-1 HydroFilter",
    cat: "kitchen",
    finish: "black",
    price: 84.99,
    oldPrice: 129.99,
    savings: "$45.00 (Rollback)",
    rating: 4.8,
    reviews: 3120,
    walmartBadge: "Double Fonction",
    waterSense: "1.5 GPM + Purificateur",
    flowRate: 1.5,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
    walmartUrl: "https://www.walmart.com/search?q=forious+kitchen+faucet+filter+black",
    desc: "Élimine le besoin d'installer un second robinet pour votre filtre sous évier : intègre deux conduits séparés pour l'eau du réseau et l'eau potable purifiée.",
    specs: [
      "Conduits : Indépendants sans contact eau brute / filtrée",
      "Douchette : Rétractable 50 cm avec contrepoids",
      "Corps : Acier inoxydable SUS 304 qualité alimentaire",
      "Finition : Noir mat cuit au four résistant aux chocs"
    ]
  },
  {
    id: "wal-07",
    name: "Robinet Lavabo Cascade Verre Transparent & Laiton Chromé",
    brand: "Vessel Waterfall Glass",
    cat: "bathroom",
    finish: "chrome",
    price: 58.80,
    oldPrice: 89.00,
    savings: "$30.20 (Offre Spéciale)",
    rating: 4.6,
    reviews: 1410,
    walmartBadge: "Design Verre",
    waterSense: "1.2 GPM Laminaire",
    flowRate: 1.2,
    image: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=600&q=80",
    walmartUrl: "https://www.walmart.com/search?q=glass+waterfall+bathroom+faucet",
    desc: "Disque en verre trempé translucide laissant admirer le trajet de l'eau avant son écoulement en cascade. Idéal pour vasques sur plan modernes.",
    specs: [
      "Disque : Verre trempé haute résistance aux chocs thermiques",
      "Cartouche : Céramique étanche garantie 10 ans",
      "Raccordement : Flexibles inox certifiés DVGW",
      "Hauteur : Compatible vasque posée et encastrée"
    ]
  },
  {
    id: "wal-08",
    name: "Robinet Mural Encastrable Double Manette Nickel Brossé",
    brand: "Pfister Wall-Mount Pro",
    cat: "bathroom",
    finish: "nickel",
    price: 139.00,
    oldPrice: 199.00,
    savings: "$60.00 (Rollback)",
    rating: 4.9,
    reviews: 870,
    walmartBadge: "Gain de Place",
    waterSense: "1.2 GPM Pression Régulée",
    flowRate: 1.2,
    image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=600&q=80",
    walmartUrl: "https://www.walmart.com/search?q=pfister+wall+mount+bathroom+faucet+brushed+nickel",
    desc: "Fixation murale libérant 100% de la surface du plan de toilette. Corps encastré en laiton massif avec vannes quart de tour ultra-douces.",
    specs: [
      "Longueur du bec : 21 cm projection idéale",
      "Entraxe : 20 cm standard installation murale",
      "Boîtier d'encastrement fourni avec niveau à bulle",
      "Finition : Nickel brossé résistant aux taches d'eau"
    ]
  }
];

// État de l'application
const state = {
  searchQuery: "",
  category: "all",
  finish: "all",
  sortBy: "featured",
  activeProduct: null,
  isWaterFlowing: false
};

// Initialisation au chargement
document.addEventListener("DOMContentLoaded", () => {
  renderFaucets();
  setupListeners();
});

function setupListeners() {
  // Champ de recherche dynamique
  const searchInput = document.getElementById("water-search-input");
  const searchBtn = document.getElementById("btn-trigger-search");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      renderFaucets();
    });
  }

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", () => {
      state.searchQuery = searchInput.value.toLowerCase().trim();
      renderFaucets();
    });
  }

  // Mots-clés rapides
  document.querySelectorAll(".keyword-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const q = chip.dataset.query;
      if (searchInput) searchInput.value = q;
      state.searchQuery = q.toLowerCase();
      renderFaucets();
    });
  });

  // Filtre par catégorie
  document.querySelectorAll("#category-filter-group .pill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#category-filter-group .pill-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.category = btn.dataset.cat;
      renderFaucets();
    });
  });

  // Filtre par finition
  document.querySelectorAll("#finish-filter-group .finish-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#finish-filter-group .finish-pill").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.finish = btn.dataset.finish;
      renderFaucets();
    });
  });

  // Tri des produits
  const sortSelect = document.getElementById("sort-by");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.sortBy = e.target.value;
      renderFaucets();
    });
  }

  // Fermeture modale
  const modalCloseBtn = document.getElementById("btn-close-modal");
  const modalBackdrop = document.getElementById("water-modal-backdrop");

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  // Simulateur Jet d'Eau
  const btnToggleWater = document.getElementById("btn-toggle-water");
  if (btnToggleWater) {
    btnToggleWater.addEventListener("click", toggleWaterFlow);
  }

  // Copier référence
  const btnCopyRef = document.getElementById("btn-copy-ref");
  if (btnCopyRef) {
    btnCopyRef.addEventListener("click", () => {
      if (!state.activeProduct) return;
      navigator.clipboard.writeText(state.activeProduct.name + " (" + state.activeProduct.brand + ")");
      btnCopyRef.innerText = "✓ Référence Copiée !";
      setTimeout(() => {
        btnCopyRef.innerText = "Copier la Référence";
      }, 2000);
    });
  }
}

// Rendu des Cartes Faucets
function renderFaucets() {
  const container = document.getElementById("faucets-grid");
  const countDisplay = document.getElementById("results-count");
  if (!container) return;

  let filtered = FAUCETS_CATALOG.filter(item => {
    const matchCat = state.category === "all" || item.cat === state.category;
    const matchFinish = state.finish === "all" || item.finish === state.finish;
    const searchText = (item.name + " " + item.brand + " " + item.desc + " " + item.finish).toLowerCase();
    const matchSearch = state.searchQuery === "" || searchText.includes(state.searchQuery);
    return matchCat && matchFinish && matchSearch;
  });

  // Tri
  if (state.sortBy === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  if (countDisplay) {
    countDisplay.innerText = `${filtered.length} modèle${filtered.length > 1 ? "s" : ""} disponible${filtered.length > 1 ? "s" : ""}`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <div style="font-size: 3rem; margin-bottom: 12px;">💧</div>
        <h3 style="font-size: 1.3rem; margin-bottom: 8px;">Aucun robinet ne correspond à ces critères</h3>
        <p style="color: var(--text-muted);">Essayez de modifier votre recherche ou réinitialisez les filtres de finition.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    return `
      <div class="faucet-card" id="card-${item.id}">
        <div>
          <div class="card-image-box">
            <img src="${item.image}" alt="${escapeHtml(item.name)}" class="card-img" loading="lazy">
            <span class="card-walmart-tag">${item.walmartBadge}</span>
            <span class="card-water-rate">${item.waterSense}</span>
          </div>

          <div class="card-info">
            <div class="card-brand">${escapeHtml(item.brand)}</div>
            <h3 class="card-title">${escapeHtml(item.name)}</h3>
            
            <div class="card-rating-row">
              <span>★ ${item.rating.toFixed(1)}</span>
              <span class="card-reviews-count">(${item.reviews} avis)</span>
            </div>

            <div class="card-price-row">
              <span class="card-price-now">$${item.price.toFixed(2)}</span>
              <span class="card-price-was">$${item.oldPrice.toFixed(2)}</span>
              <span class="card-savings-pill">${item.savings}</span>
            </div>
          </div>
        </div>

        <div class="card-actions-grid">
          <button class="btn-inspect" onclick="openInspectionModal('${item.id}')">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            <span>Inspecter</span>
          </button>
          
          <a href="${item.walmartUrl}" target="_blank" class="btn-buy-walmart" title="Voir les prix et avis sur Walmart">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm0 14a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1zm9-5a1 1 0 0 1 1 1 1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h4zm-14 0a1 1 0 0 1 1 1 1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h4z"/></svg>
            <span>Sur Walmart</span>
          </a>
        </div>
      </div>
    `;
  }).join("");
}

// Ouvrir la Fenêtre Modale d'Inspection & Simulateur Jet d'Eau
function openInspectionModal(productId) {
  const item = FAUCETS_CATALOG.find(f => f.id === productId);
  if (!item) return;

  state.activeProduct = item;
  state.isWaterFlowing = false;

  // Remplissage des éléments
  document.getElementById("modal-faucet-img").src = item.image;
  document.getElementById("modal-title").innerText = item.name;
  document.getElementById("modal-brand").innerText = item.brand;
  document.getElementById("modal-price").innerText = `$${item.price.toFixed(2)}`;
  document.getElementById("modal-old-price").innerText = `$${item.oldPrice.toFixed(2)}`;
  document.getElementById("modal-save").innerText = item.savings;
  document.getElementById("modal-rating").innerText = `★ ${item.rating.toFixed(1)} (${item.reviews.toLocaleString()} avis certifiés Walmart)`;
  document.getElementById("modal-desc").innerText = item.desc;
  document.getElementById("modal-walmart-badge").innerText = item.walmartBadge;
  document.getElementById("modal-watersense-badge").innerText = `💧 ${item.waterSense}`;
  document.getElementById("modal-walmart-link").href = item.walmartUrl;

  // Spécifications
  const specsContainer = document.getElementById("modal-specs");
  if (specsContainer) {
    specsContainer.innerHTML = item.specs.map(s => `<div class="spec-item">• ${escapeHtml(s)}</div>`).join("");
  }

  // Réinitialiser le jet d'eau
  resetWaterSimulator();

  // Afficher la fenêtre
  document.getElementById("water-modal-backdrop").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("water-modal-backdrop").classList.remove("active");
  document.body.style.overflow = "";
  resetWaterSimulator();
}

// Contrôle du Simulateur de Jet d'Eau
function toggleWaterFlow() {
  state.isWaterFlowing = !state.isWaterFlowing;
  
  const jet = document.getElementById("water-jet-stream");
  const basin = document.getElementById("water-basin");
  const btn = document.getElementById("btn-toggle-water");
  const readout = document.getElementById("flow-readout");

  if (state.isWaterFlowing) {
    jet.classList.add("flowing");
    basin.classList.add("active");
    btn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      </svg>
      <span>Couper l'Arrivée d'Eau</span>
    `;
    btn.style.background = "linear-gradient(135deg, #FF453A 0%, #B81810 100%)";
    btn.style.color = "#FFF";
    readout.innerHTML = `<span style="color: #00F0FF; font-weight: 800;">Débit Actif : ${state.activeProduct ? state.activeProduct.flowRate : 1.2} GPM</span> (Pression Idéale 3.0 Bars)`;
  } else {
    resetWaterSimulator();
  }
}

function resetWaterSimulator() {
  state.isWaterFlowing = false;
  const jet = document.getElementById("water-jet-stream");
  const basin = document.getElementById("water-basin");
  const btn = document.getElementById("btn-toggle-water");
  const readout = document.getElementById("flow-readout");

  if (jet) jet.classList.remove("flowing");
  if (basin) basin.classList.remove("active");
  if (btn) {
    btn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
      </svg>
      <span>Ouvrir le Robinet (Tester le Débit)</span>
    `;
    btn.style.background = "";
    btn.style.color = "";
  }
  if (readout) {
    readout.innerText = "Débit : 0.0 GPM (Robinet Fermé)";
  }
}

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
