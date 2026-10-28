/**
 * CRG AQUAPRO — Application Moderne de Découverte & Simulation Robinetterie
 * SARL CRG Oran — Comptoir de Robinetterie Générale (4ème Périphérique, Es-Sénia)
 */

// Catalogue des Produits Officiels CRG Oran
const CRG_CATALOG = [
  {
    id: "crg-01",
    name: "Mitigeur Lavabo Miro Cascade Elite (Italie)",
    category: "bathroom",
    finish: "chrome",
    brand: "Miro Europe (Italie)",
    priceDZD: 18500,
    oldPriceDZD: 22000,
    inStock: true,
    rating: 4.9,
    reviews: 142,
    badge: "Top Vente Miro",
    image: "assets/products/mitigeur_luxe.png",
    description: "Mitigeur haut de gamme avec bec déversant effet cascade naturelle. Fabriqué en Italie en laiton pur CW617N chromé miroir multicouche. Cartouche céramique haute endurance 35mm testée à plus de 500 000 ouvertures.",
    specs: {
      "Marque": "Miro Europe (100% Made in Italy)",
      "Débit Standard": "8.5 L/min (Régulateur Éco Intégré)",
      "Cartouche": "Céramique 35 mm Sedal",
      "Pression de Service": "3 à 5 Bars (Max 10 Bars)",
      "Garantie Usine": "5 Ans avec SAV CRG Oran",
      "Attestation": "Conformité Sanitaire ACS / CE"
    },
    flowRate: 8.5,
    pressure: "3.5 Bar"
  },
  {
    id: "crg-02",
    name: "Circulateur Électronique Wilo Yonos PICO 25/1-6",
    category: "pumps",
    finish: "chrome",
    brand: "Wilo (Allemagne)",
    priceDZD: 34500,
    oldPriceDZD: 39000,
    rating: 4.9,
    badge: "Haute Efficacité Wilo",
    image: "assets/products/wilo_circulateur.png",
    description: "Circulateur à rotor noyé à haute efficacité énergétique avec moteur synchrone ECM. Idéal pour installations de chauffage central et boucles de recirculation sanitaire collective ou résidentielle.",
    specs: {
      "Marque": "Wilo Pumpen GmbH",
      "Indice Rendement EEI": "≤ 0.20 (Top Classe A)",
      "Hauteur Manométrique": "Jusqu'à 6 mètres",
      "Raccordement": "Fileté 1\"1/2 (DN25)",
      "Alimentation": "230 V / 50 Hz monophasé",
      "Garantie Dépôt": "2 Ans Garantie Dépôt Oran"
    },
    flowRate: 35.0,
    pressure: "PN 10"
  },
  {
    id: "crg-03",
    name: "Système Multicouche & Raccords à Sertir General Fittings",
    category: "piping",
    finish: "brass",
    brand: "General Fittings (Italie)",
    priceDZD: 4200,
    oldPriceDZD: 4900,
    rating: 4.8,
    badge: "Agrément CSTB / Dépôt",
    image: "assets/products/raccords_multicouche.jpg",
    description: "Gamme complète de raccords italiens à sertir profil TH/U et couronnes de tubes multicouche PER-Al-PER isolés pour eau potable et chauffage. Zéro fuite garanti.",
    specs: {
      "Fabricant": "General Fittings SpA (Italie)",
      "Matériau Raccords": "Laiton CW617N antidézincification",
      "Diamètres en Stock": "Ø16, Ø20, Ø26, Ø32 mm",
      "Température Max": "95°C en continu",
      "Pression Nominale": "10 Bars",
      "Certification": "CSTBat / DVGW / ACS"
    },
    flowRate: 15.0,
    pressure: "10 Bars"
  },
  {
    id: "crg-04",
    name: "Colonne de Douche Thermostatique Noire Mat Miro",
    category: "shower",
    finish: "black",
    brand: "Miro Europe",
    priceDZD: 46000,
    oldPriceDZD: 54000,
    rating: 5.0,
    badge: "Finition Ultra-Black",
    image: "assets/products/kit_douche.jpg",
    description: "Colonne de douche intégrale avec mitigeur thermostatique à sécurité 38°C anti-brûlure, ciel de pluie extra-plat en inox 304 noir mat traité PVD et douchette à main multi-jets hydro-relaxants.",
    specs: {
      "Ciel de Pluie": "Inox 304 Slim 300x300 mm",
      "Sécurité Enfant": "Blocage température 38°C",
      "Traitement": "Noir Mat PVD anti-traces de calcaire",
      "Flexible": "Anti-torsion PVC renforcé 1.50 m",
      "Garantie": "5 Ans pièces & cartouche"
    },
    flowRate: 12.0,
    pressure: "3 Bar"
  },
  {
    id: "crg-05",
    name: "Caniveau de Douche à l'Italienne Inox 304 Alba",
    category: "shower",
    finish: "chrome",
    brand: "Alba Sanitaire",
    priceDZD: 14500,
    oldPriceDZD: 17200,
    rating: 4.8,
    badge: "Inox Brossé Pro",
    image: "assets/products/caniveau_inox.png",
    description: "Caniveau de douche linéaire avec grille réversible en acier inoxydable 304, garde d'eau anti-odeur démontable et pieds de nivellement ajustables pour chantiers de villas et hôtels.",
    specs: {
      "Longueur": "60 cm, 80 cm, 100 cm au choix",
      "Débit d'Évacuation": "36 Litres / minute",
      "Garde d'eau": "Siphon sec anti-remontée d'odeurs",
      "Finition": "Inox AISI 304 brossé miroir",
      "Sortie": "Ø40 / Ø50 mm orientable"
    },
    flowRate: 36.0,
    pressure: "Évacuation"
  },
  {
    id: "crg-06",
    name: "Vanne à Sphère Laiton Forgé PN40 CRG Industriel",
    category: "industrial",
    finish: "brass",
    brand: "CRG Industriel",
    priceDZD: 3800,
    oldPriceDZD: 4500,
    rating: 4.9,
    badge: "Robinetterie Lourde PN40",
    image: "assets/products/vanne_boisseau.jpg",
    description: "Vanne d'arrêt quart de tour en laiton matricé à chaud haute résistance PN40. Passage intégral pour réseaux d'eau sous pression, irrigation, colonnes montantes et chaufferies.",
    specs: {
      "Corps": "Laiton forgé nickelé CW617N",
      "Sphère": "Laiton chromé dur sur sièges PTFE",
      "Pression Nominale": "PN 40 Bars",
      "Diamètres Disponibles": "Du 1/2\" (15/21) au 4\" (100/110)",
      "Poignée": "Acier galvanisé avec gaine PVC rouge",
      "Usage": "Eau potable, Chauffage, Fluides neutres"
    },
    flowRate: 50.0,
    pressure: "PN 40 Bars"
  },
  {
    id: "crg-07",
    name: "Pompe Centrifuge Électrique Wilo Initial Line",
    category: "pumps",
    finish: "chrome",
    brand: "Wilo (Allemagne)",
    priceDZD: 58000,
    oldPriceDZD: 67000,
    rating: 4.9,
    badge: "Surpression Chantier",
    image: "assets/products/pompe_centrifuge.png",
    description: "Groupe de surpression centrifuge mono-étagé pour adduction d'eau, bâches à eau de résidences et surpression d'immeubles. Bobinage 100% cuivre avec protection thermique intégrée.",
    specs: {
      "Débit Maximum": "Jusqu'à 6 m³/heure",
      "Hauteur de Refoulement": "HMT 48 mètres",
      "Corps de Pompe": "Fonte traitée cataphorèse",
      "Puissance": "1.1 kW / 1.5 CV (230V)",
      "Garantie": "2 Ans par Wilo Algérie / CRG"
    },
    flowRate: 80.0,
    pressure: "4.8 Bar"
  },
  {
    id: "crg-08",
    name: "Siphon de Sol Inox Alba Anti-Remontée",
    category: "shower",
    finish: "chrome",
    brand: "Alba Sanitaire",
    priceDZD: 5800,
    oldPriceDZD: 6900,
    rating: 4.7,
    badge: "Inox 304 Épais",
    image: "assets/products/siphon_sol.png",
    description: "Siphon de sol 150x150 mm en acier inoxydable avec panier filtrant récupérateur de débris et clapet anti-odeurs automatique pour locaux humides, cuisines pros et terrasses.",
    specs: {
      "Dimensions Grille": "150 x 150 mm épaisseur 2 mm",
      "Sortie": "Verticale ou latérale Ø50 mm",
      "Capacité": "24 L/min",
      "Résistance": "Charge K3 (300 kg)",
      "Matériau": "Inox 304 certifié alimentaire"
    },
    flowRate: 24.0,
    pressure: "Écoulement Gravitaire"
  },
  {
    id: "crg-09",
    name: "Manomètre de Précision à Bain de Glycérine CRG",
    category: "industrial",
    finish: "chrome",
    brand: "CRG Industriel",
    priceDZD: 2600,
    oldPriceDZD: 3100,
    rating: 4.9,
    badge: "Amortissement Pulsations",
    image: "assets/products/manometre_industriel.png",
    description: "Manomètre radial à bain de glycérine pour mesure et contrôle des surpressions hydrauliques sans vibration d'aiguille. Idéal pour collecteurs de pompage et réseaux incendie.",
    specs: {
      "Cadran": "Diamètre 63 mm inox",
      "Échelle": "0 à 10 Bars / 0 à 16 Bars / 0 à 25 Bars",
      "Raccord": "1/4\" mâle en laiton",
      "Liquide d'Amortissement": "Glycérine pure à 99.7%",
      "Classe de Précision": "Classe 1.6"
    },
    flowRate: 0.0,
    pressure: "0-16 Bars"
  },
  {
    id: "crg-10",
    name: "Robinet de Puisage Quart de Tour Laiton Forgé",
    category: "bathroom",
    finish: "brass",
    brand: "CRG Industriel",
    priceDZD: 1650,
    oldPriceDZD: 1950,
    rating: 4.8,
    badge: "Raccord Nez Rapide",
    image: "assets/products/robinet_jardin.jpg",
    description: "Robinet de service extérieur avec raccord cannelé pour tuyau d'arrosage. Mécanisme 1/4 de tour à bille laiton chromé et double joint torique d'étanchéité.",
    specs: {
      "Raccord Mural": "1/2\" (15/21) ou 3/4\" (20/27)",
      "Sortie": "Embout démontable pour raccord rapide",
      "Pression": "PN 25 Bars",
      "Résistance au Gel": "Corps laiton forgé résistant",
      "Emballage": "Boîte de 10 pièces gros"
    },
    flowRate: 18.0,
    pressure: "PN 25"
  },
  {
    id: "crg-11",
    name: "Pressostat Automatique & Servo-Contrôleur de Pompe",
    category: "pumps",
    finish: "black",
    brand: "Wilo / Italtecnica",
    priceDZD: 6900,
    oldPriceDZD: 8200,
    rating: 4.9,
    badge: "Protection Pompe",
    image: "assets/products/servo_pressostat.jpg",
    description: "Contrôleur électronique de débit et de pression (Brio / Presscontrol) pour automatiser le démarrage et l'arrêt de la pompe de surpression lors de l'ouverture d'un robinet.",
    specs: {
      "Tension": "220-240V 50/60Hz",
      "Intensité Max": "10 A / 1.5 kW",
      "Pression de Démarrage": "Réglable 1.5 à 3.0 Bars",
      "Protection": "Coupure automatique si coupure d'eau",
      "Manomètre": "Intégré en façade"
    },
    flowRate: 40.0,
    pressure: "Max 10 Bars"
  },
  {
    id: "crg-12",
    name: "Mitigeur Lavabo Miro Or Brossé Royal PVD",
    category: "bathroom",
    finish: "gold",
    brand: "Miro Europe (Italie)",
    priceDZD: 24500,
    oldPriceDZD: 29000,
    rating: 5.0,
    badge: "Finition Or Royal PVD",
    image: "assets/products/mitigeur_luxe.png",
    description: "L'élégance suprême pour projets hôteliers et villas haut de gamme. Revêtement or brossé par déposition physique en phase vapeur (PVD) insensible aux rayures et au ternissement.",
    specs: {
      "Finition": "Doré Or Brossé Traité PVD",
      "Aérateur": "Neoperl Suisse brise-jet économique",
      "Flexibles Fournis": "Tressés inox 3/8\" certifiés CSTB",
      "Cartouche": "Céramique silencieuse 35mm",
      "Garantie": "5 Ans Totale"
    },
    flowRate: 6.5,
    pressure: "3.5 Bar"
  }
];

// État Global de l'Application
let currentCategory = "all";
let currentFinish = "all";
let searchQuery = "";
let currentSort = "featured";
let activeProductForModal = null;
let isWaterFlowing = false;

// Sélecteurs DOM
const gridEl = document.getElementById("faucets-grid");
const resultsCountEl = document.getElementById("results-count");
const searchInputEl = document.getElementById("water-search-input");
const btnTriggerSearch = document.getElementById("btn-trigger-search");
const sortBySelect = document.getElementById("sort-by");

// Sélecteurs Modal Simulateur
const modalBackdrop = document.getElementById("water-modal-backdrop");
const btnCloseModal = document.getElementById("btn-close-modal");
const modalFaucetImg = document.getElementById("modal-faucet-img");
const waterJetStream = document.getElementById("water-jet-stream");
const waterBasin = document.getElementById("water-basin");
const btnToggleWater = document.getElementById("btn-toggle-water");
const waterBtnText = document.getElementById("water-btn-text");
const flowReadout = document.getElementById("flow-readout");

const modalTitle = document.getElementById("modal-title");
const modalBrand = document.getElementById("modal-brand");
const modalPrice = document.getElementById("modal-price");
const modalOldPrice = document.getElementById("modal-old-price");
const modalDesc = document.getElementById("modal-desc");
const modalSpecs = document.getElementById("modal-specs");
const modalWhatsappLink = document.getElementById("modal-whatsapp-link");

// Initialisation au chargement
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  setupFilterListeners();
  setupSearchListeners();
  setupModalEvents();
});

// Formatage en Dinars Algériens (DZD)
function formatDZD(amount) {
  return new Intl.NumberFormat("fr-DZ", {
    style: "decimal",
    maximumFractionDigits: 0
  }).format(amount) + " DZD";
}

// Filtrage et Rendu des Produits
function getFilteredProducts() {
  return CRG_CATALOG.filter(item => {
    // Filtre Rayon
    if (currentCategory !== "all" && item.category !== currentCategory) {
      return false;
    }
    // Filtre Finition
    if (currentFinish !== "all" && item.finish !== currentFinish) {
      return false;
    }
    // Recherche Textuelle
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchBrand = item.brand.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      if (!matchName && !matchBrand && !matchDesc) {
        return false;
      }
    }
    return true;
  }).sort((a, b) => {
    if (currentSort === "price-asc") return a.priceDZD - b.priceDZD;
    if (currentSort === "price-desc") return b.priceDZD - a.priceDZD;
    if (currentSort === "rating") return b.rating - a.rating;
    return 0; // featured
  });
}

// Rendu HTML de la Grille de Produits
function renderProducts() {
  const products = getFilteredProducts();
  resultsCountEl.textContent = `${products.length} référence(s) en stock au dépôt d'Oran`;

  if (products.length === 0) {
    gridEl.innerHTML = `
      <div class="empty-state-card" style="grid-column: 1 / -1; padding: 60px 20px; text-align: center; background: rgba(0, 113, 220, 0.05); border: 1px dashed rgba(0, 240, 255, 0.3); border-radius: 18px;">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00F0FF" stroke-width="1.8" style="margin-bottom: 16px;">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <h3 style="color: #fff; font-size: 1.3rem; margin-bottom: 8px;">Aucune référence trouvée pour cette recherche</h3>
        <p style="color: #8bb2de; font-size: 0.95rem; max-width: 500px; margin: 0 auto 20px;">
          Contactez directement le service commercial CRG au 0560 25 26 32 pour vérifier les arrivages usines ou commander sur mesure.
        </p>
        <button class="btn btn-search-trigger" onclick="resetFilters()">Réinitialiser les Filtres</button>
      </div>
    `;
    return;
  }

  gridEl.innerHTML = products.map(item => `
    <article class="faucet-card" id="card-${item.id}">
      <div class="card-media-wrap">
        <span class="card-badge">${item.badge}</span>
        <img src="${item.image}" alt="${item.name}" class="faucet-thumb" loading="lazy">
        <div class="card-brand-overlay">${item.brand}</div>
      </div>

      <div class="card-content">
        <div class="card-top-row">
          <span class="stock-status">✓ En Stock Dépôt Oran</span>
          <span class="card-rating">★ ${item.rating}</span>
        </div>

        <h3 class="faucet-name">${item.name}</h3>

        <div class="price-row">
          <div class="current-price">${formatDZD(item.priceDZD)} <span style="font-size:0.75rem; color:#8bb2de; font-weight:normal;">HT Gros</span></div>
          <div class="old-price">${formatDZD(item.oldPriceDZD)}</div>
        </div>

        <p class="card-snippet">${item.description.substring(0, 95)}...</p>

        <div class="card-actions">
          <button class="btn btn-inspect" onclick="openSimulatorModal('${item.id}')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
            </svg>
            <span>Tester Débit (Fenêtre)</span>
          </button>
          
          <a href="https://wa.me/213560252632?text=${encodeURIComponent(`Bonjour CRG Oran, je souhaite un devis gros pour : ${item.name} (Réf: ${item.id})`)}" target="_blank" class="btn btn-direct-order" title="Devis WhatsApp Immédiat">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.181-.076.355.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.174.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
            </svg>
            <span>Devis Gros</span>
          </a>
        </div>
      </div>
    </article>
  `).join("");
}

// Réinitialisation des filtres
function resetFilters() {
  currentCategory = "all";
  currentFinish = "all";
  searchQuery = "";
  searchInputEl.value = "";
  document.querySelectorAll("#category-filter-group .pill-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.cat === "all");
  });
  document.querySelectorAll("#finish-filter-group .finish-pill").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.finish === "all");
  });
  renderProducts();
}

// Configuration des Boutons de Filtrage
function setupFilterListeners() {
  // Rayons
  document.querySelectorAll("#category-filter-group .pill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#category-filter-group .pill-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.cat;
      renderProducts();
    });
  });

  // Finitions
  document.querySelectorAll("#finish-filter-group .finish-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#finish-filter-group .finish-pill").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFinish = btn.dataset.finish;
      renderProducts();
    });
  });

  // Tri
  if (sortBySelect) {
    sortBySelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderProducts();
    });
  }

  // Mots-clés rapides
  document.querySelectorAll(".quick-keywords .keyword-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      searchQuery = chip.dataset.query;
      searchInputEl.value = searchQuery;
      renderProducts();
    });
  });
}

// Configuration de la Recherche
function setupSearchListeners() {
  if (searchInputEl) {
    searchInputEl.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderProducts();
    });

    searchInputEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        searchQuery = searchInputEl.value;
        renderProducts();
      }
    });
  }

  if (btnTriggerSearch) {
    btnTriggerSearch.addEventListener("click", () => {
      searchQuery = searchInputEl.value;
      renderProducts();
    });
  }
}

// ============================================================================
// GESTION DU MODAL ET SIMULATEUR DE JET D'EAU HYDRAULIQUE
// ============================================================================

window.openSimulatorModal = function(productId) {
  const product = CRG_CATALOG.find(p => p.id === productId);
  if (!product) return;

  activeProductForModal = product;
  
  // Remplir les données dans le modal
  modalFaucetImg.src = product.image;
  modalTitle.textContent = product.name;
  modalBrand.textContent = product.brand;
  modalPrice.textContent = formatDZD(product.priceDZD);
  modalOldPrice.textContent = "Tarif Public : " + formatDZD(product.oldPriceDZD);
  modalDesc.textContent = product.description;

  // Rendu des Spécifications
  modalSpecs.innerHTML = Object.entries(product.specs).map(([key, val]) => `
    <div class="spec-item">
      <span class="spec-label">${key}</span>
      <span class="spec-value">${val}</span>
    </div>
  `).join("");

  // Lien Devis WhatsApp Pré-Rempli
  const waMsg = `Salam CRG Oran, je suis intéressé par le produit professionnel suivant :
• Désignation : ${product.name}
• Marque : ${product.brand}
• Réf : ${product.id}
• Prix affiché : ${formatDZD(product.priceDZD)} HT
Merci de me transmettre la fiche technique et le tarif gros pour chantier.`;
  modalWhatsappLink.href = `https://wa.me/213560252632?text=${encodeURIComponent(waMsg)}`;

  // Réinitialiser le flux d'eau (fermé au départ)
  stopWaterFlow();

  // Afficher le modal avec animation
  modalBackdrop.classList.add("open");
  document.body.style.overflow = "hidden"; // Verrouillage scroll arrière-plan
};

function closeModal() {
  modalBackdrop.classList.remove("open");
  document.body.style.overflow = "";
  stopWaterFlow();
}

function startWaterFlow() {
  isWaterFlowing = true;
  waterJetStream.classList.add("flowing");
  waterBasin.classList.add("rippling");
  btnToggleWater.classList.add("active");
  waterBtnText.textContent = "Fermer le Robinet (Couper le Débit)";
  
  const rate = activeProductForModal ? activeProductForModal.flowRate : 8.5;
  const press = activeProductForModal ? activeProductForModal.pressure : "3.5 Bar";
  flowReadout.innerHTML = `<span style="color:#00F0FF; font-weight:700;">DÉBIT ACTIF :</span> ${rate} L/min • Pression : ${press} (Test Hydraulique Réussi)`;
}

function stopWaterFlow() {
  isWaterFlowing = false;
  waterJetStream.classList.remove("flowing");
  waterBasin.classList.remove("rippling");
  btnToggleWater.classList.remove("active");
  waterBtnText.textContent = "Tester le Robinet (Ouvrir l'Eau)";
  flowReadout.textContent = "Débit : 0.0 L/min (Vanne Fermée)";
}

function toggleWaterFlow() {
  if (isWaterFlowing) {
    stopWaterFlow();
  } else {
    startWaterFlow();
  }
}

function setupModalEvents() {
  if (btnCloseModal) {
    btnCloseModal.addEventListener("click", closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  // Touche Echap
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop.classList.contains("open")) {
      closeModal();
    }
  });

  // Bouton Ouvrir/Fermer l'Eau
  if (btnToggleWater) {
    btnToggleWater.addEventListener("click", toggleWaterFlow);
  }
}
