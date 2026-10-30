/**
 * SARL CRG ORAN — PLATEFORME 3D HAUT DE GAMME AQUAPRO & THERMOPRO
 * Comptoir de Robinetterie Générale (Îlot N°08, 4ème Périphérique, Es-Sénia, Oran)
 * Moteur 3D Interactif, Simulateur Hydro-Thermique, Affiches 3D & Devis Express B2B/B2C
 */

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
    badge: "Top Vente Miro",
    image: "assets/3d_faucet_cascade.svg",
    description: "Mitigeur haut de gamme avec bec déversant effet cascade naturelle. Fabriqué en Italie en laiton pur CW617N chromé miroir multicouche. Cartouche céramique haute endurance 35mm testée à plus de 500 000 ouvertures.",
    specs: {
      "Marque": "Miro Europe (100% Italie)",
      "Débit Nominal": "8.5 L/min (Éco-Aérateur)",
      "Cartouche": "Céramique 35 mm Sedal",
      "Pression Service": "1 à 10 Bars",
      "Garantie": "5 Ans SAV CRG Oran",
      "Norme": "Conformité Sanitaire ACS"
    },
    flowRate: 8.5,
    pressure: "3.5 Bar"
  },
  {
    id: "crg-13",
    name: "Chaudière Murale Gaz Mixte 24 kW ThermoPro CRG",
    category: "heating",
    finish: "thermal",
    brand: "CRG ThermoPro",
    priceDZD: 94000,
    oldPriceDZD: 108000,
    inStock: true,
    rating: 5.0,
    badge: "Flamme Haute Efficacité",
    image: "assets/products/chaudiere_gaz.png",
    description: "Chaudière murale mixte chauffage central et eau chaude sanitaire instantanée. Double échangeur thermique en acier inoxydable, modulation électronique de flamme basse consommation et sécurité complète.",
    specs: {
      "Puissance Thermique": "24 kW (Chauffage + ECS)",
      "Rendement": "93.4% Haute Performance",
      "Échangeur": "Double Inox 316L",
      "Évacuation": "Ventouse Coaxiale Étanche",
      "Affichage": "Digital LCD rétroéclairé",
      "Garantie CRG": "2 Ans Pièces & Support"
    },
    flowRate: 14.0,
    pressure: "3.0 Bar • 60°C"
  },
  {
    id: "crg-02",
    name: "Circulateur Électronique Wilo Yonos PICO 25/1-6",
    category: "pumps",
    finish: "chrome",
    brand: "Wilo (Allemagne)",
    priceDZD: 34500,
    oldPriceDZD: 39000,
    inStock: true,
    rating: 4.9,
    badge: "Technologie Allemande",
    image: "assets/3d_wilo_pump.svg",
    description: "Circulateur à rotor noyé à haute efficacité énergétique avec moteur synchrone ECM et affichage LED de consommation en temps réel. Indispensable pour chauffage central et boucles sanitaires.",
    specs: {
      "Fabricant": "Wilo Pumpen GmbH (Allemagne)",
      "Indice EEI": "≤ 0.20 (Classe A+)",
      "Hauteur Manométrique": "Jusqu'à 6 mètres",
      "Raccordement": "Fileté 1\"1/2 (DN25)",
      "Alimentation": "230 V / 50 Hz",
      "Garantie Dépôt": "2 Ans Officielle"
    },
    flowRate: 35.0,
    pressure: "PN 10 Bars"
  },
  {
    id: "crg-12",
    name: "Mitigeur Lavabo Miro Or Brossé Royal PVD",
    category: "bathroom",
    finish: "gold",
    brand: "Miro Europe (Italie)",
    priceDZD: 24500,
    oldPriceDZD: 29000,
    inStock: true,
    rating: 5.0,
    badge: "Édition Or Royal PVD",
    image: "assets/3d_faucet_gold.svg",
    description: "L'élégance absolue pour villas de prestige et hôtels. Revêtement Or Brossé par déposition physique en phase vapeur (PVD) inaltérable, anti-traces et résistant au calcaire.",
    specs: {
      "Finition": "Or Brossé Royal PVD",
      "Aérateur": "Neoperl Suisse silencieux",
      "Flexibles": "Inox tressé 3/8\" CSTB",
      "Cartouche": "Céramique 35mm Haute Précision",
      "Garantie": "5 Ans Totale CRG"
    },
    flowRate: 7.5,
    pressure: "3.5 Bar"
  },
  {
    id: "crg-04",
    name: "Colonne de Douche Thermostatique Noire Mat Miro",
    category: "shower",
    finish: "black",
    brand: "Miro Europe (Italie)",
    priceDZD: 46000,
    oldPriceDZD: 54000,
    inStock: true,
    rating: 5.0,
    badge: "Thermostatique 38°C",
    image: "assets/3d_shower_black.svg",
    description: "Colonne de douche intégrale avec mitigeur thermostatique sécurité 38°C anti-brûlure, ciel de pluie extra-plat 300x300mm en inox 304 noir mat PVD et douchette 3 jets.",
    specs: {
      "Ciel de Pluie": "Inox 304 Slim 300x300 mm",
      "Sécurité": "Verrouillage 38°C",
      "Traitement": "Noir Mat PVD anti-calcaire",
      "Inverseur": "3 Voies Laiton Massif",
      "Garantie": "5 Ans Certifiée"
    },
    flowRate: 12.5,
    pressure: "3.0 Bar"
  },
  {
    id: "crg-14",
    name: "Radiateur Aluminium Haute Émission Thermique (10 Élém.)",
    category: "heating",
    finish: "thermal",
    brand: "CRG ThermoPro",
    priceDZD: 19500,
    oldPriceDZD: 23000,
    inStock: true,
    rating: 4.9,
    badge: "Chauffe Ultra-Rapide",
    image: "assets/products/radiateur_alu.jpg",
    description: "Batterie de radiateur en alliage d'aluminium injecté sous pression à haut pouvoir calorifique. Double peinture époxy blanche par anaphorèse et résistance jusqu'à 16 bars.",
    specs: {
      "Entraxe": "500 mm Standard",
      "Puissance": "185 Watts / élément (1850W)",
      "Pression Essai": "24 Bars (Service 16 Bars)",
      "Conditionnement": "Batterie de 10 éléments",
      "Garantie": "10 Ans Anti-Corrosion"
    },
    flowRate: 22.0,
    pressure: "16 Bars Max"
  },
  {
    id: "crg-03",
    name: "Système Multicouche & Raccords à Sertir General Fittings",
    category: "piping",
    finish: "brass",
    brand: "General Fittings (Italie)",
    priceDZD: 4200,
    oldPriceDZD: 4900,
    inStock: true,
    rating: 4.9,
    badge: "Certifié CSTB / Italie",
    image: "assets/products/raccords_multicouche.jpg",
    description: "Gamme professionnelle de raccords italiens en laiton CW617N à sertir et compression, avec couronnes de tubes multicouche PER-Al-PER pour eau potable et chauffage central.",
    specs: {
      "Origine": "100% Made in Italy",
      "Alliage": "Laiton CW617N certifié",
      "Diamètres": "Ø16, Ø20, Ø26, Ø32, Ø40 mm",
      "Température": "Jusqu'à 95°C en continu",
      "Pression": "PN 10 Bars",
      "Agrément": "CSTBat / DVGW / ACS"
    },
    flowRate: 18.0,
    pressure: "10 Bars"
  },
  {
    id: "crg-06",
    name: "Vanne d'Arrêt à Sphère Laiton Forgé PN40 CRG",
    category: "industrial",
    finish: "brass",
    brand: "CRG Industriel",
    priceDZD: 3800,
    oldPriceDZD: 4500,
    inStock: true,
    rating: 4.9,
    badge: "Série Lourde PN40",
    image: "assets/products/vanne_boisseau.jpg",
    description: "Vanne à boisseau sphérique quart de tour en laiton matricé à chaud haute densité PN40. Passage intégral pour colonnes montantes, chaufferies et réseaux haute pression.",
    specs: {
      "Corps": "Laiton forgé nickelé CW617N",
      "Pression Nominale": "PN 40 Bars",
      "Diamètres": "Du DN15 (1/2\") au DN100 (4\")",
      "Étanchéité": "Sièges PTFE Vierge + Double Joint",
      "Poignée": "Acier traité gainé rouge"
    },
    flowRate: 55.0,
    pressure: "PN 40 Bars"
  },
  {
    id: "crg-07",
    name: "Pompe Centrifuge Multicellulaire Wilo / CRG 1.5 CV",
    category: "pumps",
    finish: "chrome",
    brand: "Wilo / CRG Pompes",
    priceDZD: 58000,
    oldPriceDZD: 67000,
    inStock: true,
    rating: 4.9,
    badge: "Surpression Immeuble",
    image: "assets/products/pompe_centrifuge.png",
    description: "Groupe de surpression silencieux à haut rendement pour alimentation d'immeubles, villas et réseaux d'irrigation. Bobinage 100% cuivre avec protection thermique.",
    specs: {
      "Débit Max": "6.0 m³/h (100 L/min)",
      "Hauteur HMT": "48 mètres (4.8 Bars)",
      "Turbine": "Laiton / Inox AISI 304",
      "Puissance": "1.1 kW (1.5 HP) - 230V",
      "Garantie": "2 Ans Dépôt Oran"
    },
    flowRate: 85.0,
    pressure: "4.8 Bars"
  },
  {
    id: "crg-05",
    name: "Caniveau de Douche à l'Italienne Inox 304 Alba",
    category: "shower",
    finish: "chrome",
    brand: "Alba Sanitaire",
    priceDZD: 14500,
    oldPriceDZD: 17200,
    inStock: true,
    rating: 4.8,
    badge: "Inox 304 Brossé",
    image: "assets/products/caniveau_inox.png",
    description: "Caniveau linéaire en acier inoxydable AISI 304 avec grille réversible (inox brossé ou à carreler), siphon anti-odeur démontable et pieds réglables.",
    specs: {
      "Longueurs Stock": "60 cm, 70 cm, 80 cm, 90 cm",
      "Débit Évacuation": "36 L/min",
      "Siphon": "Double garde d'eau anti-odeurs",
      "Matériau": "Inox 304 certifié",
      "Sortie": "Ø40 / Ø50 mm"
    },
    flowRate: 36.0,
    pressure: "Gravitaire"
  },
  {
    id: "crg-15",
    name: "Vase d'Expansion Chauffage & Sanitaire 24L - 100L",
    category: "heating",
    finish: "thermal",
    brand: "CIMM / CRG Thermique",
    priceDZD: 8900,
    oldPriceDZD: 10500,
    inStock: true,
    rating: 4.8,
    badge: "Membrane Haute Temp.",
    image: "assets/products/vase_expansion.png",
    description: "Vase d'expansion à membrane interchangeable EPDM pour absorber les dilatations d'eau des circuits de chauffage central et groupes de surpression.",
    specs: {
      "Capacités Stock": "24L, 50L, 80L, 100L",
      "Pression Max": "8 à 10 Bars",
      "Température": "-10°C à +100°C",
      "Membrane": "EPDM Qualité Alimentaire",
      "Finition": "Époxy Rouge Thermique"
    },
    flowRate: 25.0,
    pressure: "8.0 Bars"
  },
  {
    id: "crg-08",
    name: "Siphon de Sol Inox 304 Alba 150x150 Anti-Odeurs",
    category: "shower",
    finish: "chrome",
    brand: "Alba Sanitaire",
    priceDZD: 5800,
    oldPriceDZD: 6900,
    inStock: true,
    rating: 4.8,
    badge: "Inox Épais 2mm",
    image: "assets/products/siphon_sol.png",
    description: "Siphon de sol carré 150x150mm en inox 304 massif avec panier filtre amovible et clapet anti-retour d'odeurs et d'insectes.",
    specs: {
      "Dimensions": "150 x 150 mm",
      "Charge": "Classe K3 (300 kg)",
      "Sortie": "Ø50 mm",
      "Matériau": "Acier Inox AISI 304"
    },
    flowRate: 24.0,
    pressure: "Gravitaire"
  },
  {
    id: "crg-11",
    name: "Pressostat Électronique Servo-Contrôleur de Pompe",
    category: "pumps",
    finish: "black",
    brand: "Wilo / CRG Automatisme",
    priceDZD: 6900,
    oldPriceDZD: 8200,
    inStock: true,
    rating: 4.9,
    badge: "Stop Marche à Sec",
    image: "assets/products/servo_pressostat.jpg",
    description: "Contrôleur électronique automatique de pompe avec manomètre intégré. Démarre la pompe à l'ouverture du robinet et la coupe en cas de manque d'eau.",
    specs: {
      "Tension": "220-240V Monophasé",
      "Puissance Max": "1.5 kW (10A)",
      "Sécurité": "Protection anti-marche à sec",
      "Pression Démarrage": "1.5 à 3.0 Bars réglable"
    },
    flowRate: 40.0,
    pressure: "Max 10 Bars"
  },
  {
    id: "crg-09",
    name: "Manomètre Industriel Bain de Glycérine Inox 0-16 Bars",
    category: "industrial",
    finish: "chrome",
    brand: "CRG Industriel",
    priceDZD: 2600,
    oldPriceDZD: 3100,
    inStock: true,
    rating: 4.9,
    badge: "Haute Précision",
    image: "assets/products/manometre_industriel.png",
    description: "Manomètre radial en boîtier inox AISI 304 rempli de glycérine pure anti-vibrations pour chaufferies, collecteurs et stations de pompage.",
    specs: {
      "Cadran": "Ø63 mm Inox",
      "Échelles": "0-10 / 0-16 / 0-25 Bars",
      "Raccord": "1/4\" Laiton Radial",
      "Classe": "Précision 1.6"
    },
    flowRate: 10.0,
    pressure: "16 Bars"
  }
];

// Données des 3 Grandes Affiches Publicitaires 3D
const POSTERS_3D_DATA = [
  {
    title: "L'ALLIANCE DE L'EAU & DE LA FLAMME — OFFRE PHARE ORAN",
    kicker: "ROBINETTERIE LUXE MIRO EUROPE & CHAUFFAGE CENTRAL THERMOPRO",
    desc: "Profitez de la disponibilité immédiate au Dépôt du 4ème Périphérique Es-Sénia : Mitigeurs Italiens Miro Europe garantis 5 ans + Chaudières Gaz, Radiateurs Aluminium 185W/élém. et Vases d'expansion.",
    imgPrimary: "assets/3d_faucet_cascade.svg",
    imgSecondary: "assets/products/chaudiere_gaz.png",
    badge: "GARANTIE OFFICIELLE 5 ANS • PRIX GROS & DÉTAIL",
    waText: "Bonjour SARL CRG Oran, je souhaite commander / obtenir un devis sur l'Affiche Offre Eau & Flamme (Robinetterie Miro + Chauffage Central)."
  },
  {
    title: "PACK CHANTIERS, PROMOTEURS & ENTREPRISES BTPH",
    kicker: "POMPAGE ALLEMAND WILO • MULTICOUCHE GENERAL FITTINGS • VANNERIE PN40",
    desc: "Approvisionnement complet par palettes ou au détail : Circulateurs et groupes de surpression Wilo, tubes multicouche et raccords à sertir General Fittings (Italie) certifiés CSTB, et vannes boisseau sphérique PN40.",
    imgPrimary: "assets/3d_wilo_pump.svg",
    imgSecondary: "assets/products/raccords_multicouche.jpg",
    badge: "REMISE QUANTITATIVE CHANTIER • CERTIFICATS ACS/CSTB FOURNIS",
    waText: "Bonjour SARL CRG Oran, nous sommes une entreprise/installateur et souhaitons un devis Pack Chantier (Wilo + General Fittings + Vannerie PN40)."
  },
  {
    title: "COLLECTION ARCHITECTE : OR BROSSÉ ROYAL PVD & NOIR MAT",
    kicker: "DESIGN SANITAIRE HAUTE COUTURE POUR VILLAS & HÔTELS",
    desc: "Sublimez vos projets résidentiels avec nos colonnes de douche thermostatiques sécurité 38°C, mitigeurs cascade Or Royal PVD anti-calcaire et caniveaux de douche à l'italienne Inox 304 Alba.",
    imgPrimary: "assets/3d_shower_black.svg",
    imgSecondary: "assets/3d_faucet_gold.svg",
    badge: "FINITION PVD INALTÉRABLE • SHOWROOM 4ÈME PÉRIPHÉRIQUE",
    waText: "Bonjour SARL CRG Oran, je souhaite un devis pour la Collection Architecte Or Brossé Royal PVD & Noir Mat."
  }
];

// État Global
let currentCategory = "all";
let currentFinish = "all";
let searchQuery = "";
let currentSort = "featured";
let currentAudience = "pro"; // "pro" | "particulier"
let activeProductForModal = null;
let isWaterFlowing = false;
let heroAutoSpin = true;
let heroRotAngle = 0;
let heroMode = "aqua";
let quoteCart = [];

// Initialisation
document.addEventListener("DOMContentLoaded", () => {
  loadQuoteCart();
  updateDepotLiveStatus();
  renderProducts();
  setupFilterListeners();
  setupSearchListeners();
  setupAudienceSwitcher();
  setupViewToggle();
  setupHero3DStudio();
  setup3DTiltCards();
  setupModalEvents();
  setupQuoteDrawerEvents();
});

// Formatage DZD
function formatDZD(amount) {
  return new Intl.NumberFormat("fr-DZ", {
    style: "decimal",
    maximumFractionDigits: 0
  }).format(amount) + " DZD";
}

// Statut Dépôt Temps Réel (Sam-Jeu 08h-17h)
function updateDepotLiveStatus() {
  const statusText = document.getElementById("depot-status-text");
  if (!statusText) return;
  const now = new Date();
  const day = now.getDay(); // 0=Dim, 5=Ven, 6=Sam
  const hour = now.getHours();
  const isOpen = (day !== 5) && (hour >= 8 && hour < 17);
  if (isOpen) {
    statusText.textContent = "Dépôt 4ème Périphérique OUVERT • Chargement & Showroom Direct";
  } else {
    statusText.textContent = "Dépôt 4ème Périphérique (Sam-Jeu 08h-17h) • Devis WhatsApp 24h/7j Actif";
  }
}

// ============================================================================
// 1. STUDIO HOLOGRAPHIQUE 3D INTERACTIF (HERO) + PARTICULES EAU & FLAMME
// ============================================================================
function setupHero3DStudio() {
  const stage = document.getElementById("hero-holo-stage");
  const viewport = document.getElementById("holo-viewport-3d");
  const pivot = document.getElementById("holo-object-pivot");
  const productImg = document.getElementById("hero-3d-product-img");
  const rotSlider = document.getElementById("hero-rot-slider");
  const btnAutoSpin = document.getElementById("btn-hero-auto-spin");
  const btnOpenSim = document.getElementById("btn-hero-open-sim");
  const h1 = document.getElementById("hotspot-1");
  const h2 = document.getElementById("hotspot-2");
  const h3 = document.getElementById("hotspot-3");

  if (!viewport || !pivot) return;

  // Changement de Mode 3D (Eau / Flamme / PN40)
  document.querySelectorAll(".holo-mode-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".holo-mode-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      heroMode = btn.dataset.mode;

      stage.classList.remove("mode-aqua", "mode-flame", "mode-brass");
      stage.classList.add(`mode-${heroMode}`);

      if (heroMode === "aqua") {
        productImg.src = "assets/3d_faucet_cascade.svg";
        h1.innerHTML = `<span class="hotspot-ping"></span><span class="hotspot-text">Laiton Pur CW617N • Garantie 5 Ans</span>`;
        h2.innerHTML = `<span class="hotspot-ping ping-flame"></span><span class="hotspot-text">Aérateur Cascade • Norme ACS</span>`;
        h3.innerHTML = `<span class="hotspot-ping ping-gold"></span><span class="hotspot-text">Miro Europe (100% Italie)</span>`;
      } else if (heroMode === "flame") {
        productImg.src = "assets/products/chaudiere_gaz.png";
        h1.innerHTML = `<span class="hotspot-ping ping-flame"></span><span class="hotspot-text">Puissance 24 kW • Rendement 93.4%</span>`;
        h2.innerHTML = `<span class="hotspot-ping"></span><span class="hotspot-text">Double Échangeur Inox 316L</span>`;
        h3.innerHTML = `<span class="hotspot-ping ping-gold"></span><span class="hotspot-text">Chauffage Central & Eau Chaude</span>`;
      } else {
        productImg.src = "assets/products/vanne_boisseau.jpg";
        h1.innerHTML = `<span class="hotspot-ping ping-gold"></span><span class="hotspot-text">Laiton Forgé Matricé PN40</span>`;
        h2.innerHTML = `<span class="hotspot-ping ping-flame"></span><span class="hotspot-text">Tenue 40 Bars • Sièges PTFE</span>`;
        h3.innerHTML = `<span class="hotspot-ping"></span><span class="hotspot-text">Du DN15 (1/2") au DN100 (4")</span>`;
      }
    });
  });

  // Slider de rotation 3D
  if (rotSlider) {
    rotSlider.addEventListener("input", (e) => {
      heroAutoSpin = false;
      btnAutoSpin.classList.remove("spinning");
      heroRotAngle = parseFloat(e.target.value);
      pivot.style.transform = `rotateY(${heroRotAngle}deg) rotateX(4deg)`;
    });
  }

  // Interaction Souris / Tactile sur le Viewport 3D
  let isDragging = false;
  let startX = 0;

  viewport.addEventListener("pointerdown", (e) => {
    isDragging = true;
    heroAutoSpin = false;
    startX = e.clientX;
  });

  window.addEventListener("pointermove", (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    startX = e.clientX;
    heroRotAngle = Math.max(-55, Math.min(55, heroRotAngle + dx * 0.45));
    pivot.style.transform = `rotateY(${heroRotAngle}deg) rotateX(4deg)`;
    if (rotSlider) rotSlider.value = Math.max(-45, Math.min(45, heroRotAngle));
  });

  window.addEventListener("pointerup", () => {
    isDragging = false;
  });

  // Auto-Spin 3D
  if (btnAutoSpin) {
    btnAutoSpin.classList.add("spinning");
    btnAutoSpin.addEventListener("click", () => {
      heroAutoSpin = !heroAutoSpin;
      btnAutoSpin.classList.toggle("spinning", heroAutoSpin);
    });
  }

  let spinTime = 0;
  function animateHero3D() {
    if (heroAutoSpin && !isDragging) {
      spinTime += 0.018;
      heroRotAngle = Math.sin(spinTime) * 22;
      const tiltX = Math.cos(spinTime * 0.7) * 5;
      pivot.style.transform = `rotateY(${heroRotAngle.toFixed(2)}deg) rotateX(${tiltX.toFixed(2)}deg)`;
      if (rotSlider) rotSlider.value = Math.round(heroRotAngle);
    }
    requestAnimationFrame(animateHero3D);
  }
  requestAnimationFrame(animateHero3D);

  // Ouvrir le simulateur avec le produit du Hero
  if (btnOpenSim) {
    btnOpenSim.addEventListener("click", () => {
      const targetId = heroMode === "flame" ? "crg-13" : (heroMode === "brass" ? "crg-06" : "crg-01");
      window.openSimulatorModal(targetId);
      setTimeout(() => {
        if (!isWaterFlowing) startWaterFlow();
      }, 280);
    });
  }

  // Canvas de Particules 3D (Gouttes d'Eau Cyan & Étincelles Flamme)
  initHeroParticlesCanvas();
}

function initHeroParticlesCanvas() {
  const canvas = document.getElementById("hero-particles-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = canvas.offsetWidth || 500;
    canvas.height = canvas.offsetHeight || 390;
  }
  resize();
  window.addEventListener("resize", resize);

  const particles = Array.from({ length: 34 }, () => ({
    x: Math.random() * 500,
    y: Math.random() * 390,
    r: Math.random() * 2.8 + 1,
    vy: Math.random() * 0.9 + 0.35,
    vx: (Math.random() - 0.5) * 0.5,
    alpha: Math.random() * 0.65 + 0.2
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

      if (heroMode === "flame") {
        ctx.fillStyle = `rgba(255, ${Math.floor(110 + p.r * 35)}, 0, ${p.alpha})`;
        p.y -= p.vy * 1.25; // La flamme monte
        if (p.y < 0) { p.y = canvas.height; p.x = Math.random() * canvas.width; }
      } else if (heroMode === "brass") {
        ctx.fillStyle = `rgba(229, 184, 75, ${p.alpha})`;
        p.y -= p.vy * 0.6;
        if (p.y < 0) { p.y = canvas.height; p.x = Math.random() * canvas.width; }
      } else {
        ctx.fillStyle = `rgba(0, 240, 255, ${p.alpha})`;
        p.y += p.vy; // Les gouttes d'eau descendent
        if (p.y > canvas.height) { p.y = 0; p.x = Math.random() * canvas.width; }
      }
      p.x += p.vx;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
}

// ============================================================================
// 2. EFFET PARALLAXE 3D SUR LES AFFICHES & CARTES PRODUITS
// ============================================================================
function setup3DTiltCards() {
  const cards = document.querySelectorAll("[data-tilt-card]");
  cards.forEach(card => {
    card.addEventListener("pointermove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const px = (x / rect.width) - 0.5;
      const py = (y / rect.height) - 0.5;
      const rotY = px * 14;
      const rotX = -py * 12;
      card.style.transform = `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateY(-4px)`;
      card.style.setProperty("--glare-x", `${Math.round((x / rect.width) * 100)}%`);
      card.style.setProperty("--glare-y", `${Math.round((y / rect.height) * 100)}%`);
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0)";
    });
  });
}

// Modal Affiche 3D Plein Écran
window.openPosterModal = function(index) {
  const poster = POSTERS_3D_DATA[index];
  if (!poster) return;
  const backdrop = document.getElementById("poster-modal-backdrop");
  const body = document.getElementById("poster-modal-body");

  body.innerHTML = `
    <div style="display:grid; grid-template-columns: 1fr 1.1fr; gap:28px; align-items:center;">
      <div style="background:radial-gradient(circle, rgba(255,94,0,0.22) 0%, rgba(0,240,255,0.16) 50%, rgba(3,7,17,0.95) 90%); border:1px solid rgba(229,184,75,0.45); border-radius:18px; padding:28px; text-align:center; position:relative;">
        <img src="assets/crg_modern_logo.svg" alt="CRG Oran" style="height:52px; margin-bottom:18px;">
        <div style="display:flex; align-items:center; justify-content:center; gap:14px; min-height:220px;">
          <img src="${poster.imgPrimary}" alt="${poster.title}" style="max-height:200px; max-width:58%; object-fit:contain; filter:drop-shadow(0 14px 25px rgba(0,0,0,0.85));">
          <img src="${poster.imgSecondary}" alt="Secondaire" style="max-height:155px; max-width:40%; object-fit:contain; filter:drop-shadow(0 10px 20px rgba(0,0,0,0.8));">
        </div>
        <div style="margin-top:16px; display:inline-block; background:linear-gradient(135deg,#FF5E00,#E5B84B); color:#030711; font-weight:900; font-size:0.76rem; padding:6px 14px; border-radius:999px;">
          ${poster.badge}
        </div>
      </div>
      <div>
        <div style="color:#00F0FF; font-size:0.76rem; font-weight:800; letter-spacing:0.08em; margin-bottom:8px;">${poster.kicker}</div>
        <h2 style="font-family:'Outfit',sans-serif; font-size:1.85rem; font-weight:900; line-height:1.18; margin-bottom:14px;">${poster.title}</h2>
        <p style="color:#CBE0FF; font-size:0.95rem; line-height:1.65; margin-bottom:20px;">${poster.desc}</p>
        <div style="background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.1); border-radius:12px; padding:14px; margin-bottom:20px; font-size:0.84rem; color:#FFF;">
          📍 <strong>Dépôt & Showroom :</strong> Îlot N°08, Zone Industrielle, 4ème Périphérique, Es-Sénia — Oran<br>
          📞 <strong>Commercial :</strong> 0560 25 26 32 • <strong>Chantiers :</strong> 0560 12 02 69
        </div>
        <div style="display:flex; gap:12px; flex-wrap:wrap;">
          <a href="https://wa.me/213560252632?text=${encodeURIComponent(poster.waText)}" target="_blank" class="btn-submit-wa" style="text-decoration:none; flex:1;">
            💬 Profiter de cette Offre sur WhatsApp
          </a>
          <button onclick="window.print()" class="btn-submit-mail">
            🖨️ Imprimer l'Affiche
          </button>
        </div>
      </div>
    </div>
  `;

  backdrop.classList.add("open");
};

window.closePosterModal = function() {
  const backdrop = document.getElementById("poster-modal-backdrop");
  if (backdrop) backdrop.classList.remove("open");
};

// ============================================================================
// 3. CATALOGUE, FILTRES, PROFILS B2B/B2C & RENDU DES 14 PRODUITS 3D
// ============================================================================
function setupAudienceSwitcher() {
  const btnPro = document.getElementById("aud-btn-pro");
  const btnPart = document.getElementById("aud-btn-part");
  const banner = document.getElementById("catalog-audience-banner");

  if (!btnPro || !btnPart) return;

  btnPro.addEventListener("click", () => {
    currentAudience = "pro";
    btnPro.classList.add("active");
    btnPart.classList.remove("active");
    if (banner) {
      banner.innerHTML = `Affichage actif : <strong>Tarifs Gros HT Entreprises &amp; Chantiers</strong> — Ajoutez vos références au Devis Pro ou testez chaque produit dans le Simulateur 3D.`;
    }
    renderProducts();
  });

  btnPart.addEventListener("click", () => {
    currentAudience = "particulier";
    btnPart.classList.add("active");
    btnPro.classList.remove("active");
    if (banner) {
      banner.innerHTML = `Affichage actif : <strong>Mode Particulier, Villa &amp; Architecte</strong> — Sélectionnez vos équipements avec garantie officielle 5 ans et conseil showroom.`;
    }
    renderProducts();
  });
}

function setupViewToggle() {
  const btn3d = document.getElementById("btn-view-3d");
  const btnCompact = document.getElementById("btn-view-compact");
  const grid = document.getElementById("faucets-grid");
  if (!btn3d || !btnCompact || !grid) return;

  btn3d.addEventListener("click", () => {
    btn3d.classList.add("active");
    btnCompact.classList.remove("active");
    grid.classList.remove("compact-list");
  });

  btnCompact.addEventListener("click", () => {
    btnCompact.classList.add("active");
    btn3d.classList.remove("active");
    grid.classList.add("compact-list");
  });
}

function getFilteredProducts() {
  return CRG_CATALOG.filter(item => {
    if (currentCategory !== "all" && item.category !== currentCategory) return false;
    if (currentFinish !== "all" && item.finish !== currentFinish) return false;
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchBrand = item.brand.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      if (!matchName && !matchBrand && !matchDesc) return false;
    }
    return true;
  }).sort((a, b) => {
    if (currentSort === "price-asc") return a.priceDZD - b.priceDZD;
    if (currentSort === "price-desc") return b.priceDZD - a.priceDZD;
    if (currentSort === "rating") return b.rating - a.rating;
    return 0;
  });
}

function renderProducts() {
  const gridEl = document.getElementById("faucets-grid");
  const resultsCountEl = document.getElementById("results-count");
  if (!gridEl) return;

  const products = getFilteredProducts();
  if (resultsCountEl) {
    resultsCountEl.textContent = `${products.length} référence(s) certifiée(s) en stock au dépôt d'Oran`;
  }

  if (products.length === 0) {
    gridEl.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 55px 20px; text-align: center; background: rgba(10, 22, 46, 0.75); border: 1px dashed rgba(0, 240, 255, 0.35); border-radius: 18px;">
        <h3 style="color: #fff; font-size: 1.3rem; margin-bottom: 8px;">Aucune référence trouvée pour "${searchQuery}"</h3>
        <p style="color: #CBE0FF; font-size: 0.92rem; max-width: 520px; margin: 0 auto 18px;">
          Notre dépôt du 4ème Périphérique dispose de plus de 2 500 références en stock. Contactez directement le 0560 25 26 32.
        </p>
        <button class="btn btn-search-trigger" onclick="resetFilters()">Afficher tout le catalogue (14)</button>
      </div>
    `;
    return;
  }

  const priceSubLabel = currentAudience === "pro" ? "HT Gros" : "Prix Showroom";

  gridEl.innerHTML = products.map(item => `
    <article class="faucet-card" data-cat="${item.category}" id="card-${item.id}">
      <div class="card-media-wrap">
        <span class="card-badge">${item.badge}</span>
        <span class="card-3d-pill">3D 360°</span>
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
          <div class="current-price">${formatDZD(item.priceDZD)} <span style="font-size:0.72rem; color:#CBE0FF; font-weight:600;">${priceSubLabel}</span></div>
          <div class="old-price">${formatDZD(item.oldPriceDZD)}</div>
        </div>

        <p class="card-snippet">${item.description.substring(0, 96)}...</p>

        <div class="card-actions">
          <button class="btn-inspect" onclick="openSimulatorModal('${item.id}')">
            <span>🧊 Vue 3D &amp; Débit</span>
          </button>
          <button class="btn-add-devis" onclick="addToQuoteCart('${item.id}')">
            <span>➕ Ajouter Devis</span>
          </button>
          <a href="https://wa.me/213560252632?text=${encodeURIComponent(`Bonjour SARL CRG Oran, je souhaite un devis (${currentAudience === 'pro' ? 'Tarif Gros Entreprise' : 'Particulier'}) pour : ${item.name} (${formatDZD(item.priceDZD)})`)}" target="_blank" class="btn-direct-order">
            <span>💬 Commander / Devis WhatsApp Direct</span>
          </a>
        </div>
      </div>
    </article>
  `).join("");
}

window.resetFilters = function() {
  currentCategory = "all";
  currentFinish = "all";
  searchQuery = "";
  const searchInputEl = document.getElementById("water-search-input");
  if (searchInputEl) searchInputEl.value = "";
  document.querySelectorAll("#category-filter-group .pill-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.cat === "all");
  });
  document.querySelectorAll("#finish-filter-group .finish-pill").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.finish === "all");
  });
  renderProducts();
};

window.filterByBrandKeyword = function(kw) {
  searchQuery = kw;
  const searchInputEl = document.getElementById("water-search-input");
  if (searchInputEl) searchInputEl.value = kw;
  document.getElementById("catalogue-section").scrollIntoView({ behavior: "smooth" });
  renderProducts();
};

function setupFilterListeners() {
  document.querySelectorAll("#category-filter-group .pill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#category-filter-group .pill-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.cat;
      renderProducts();
    });
  });

  document.querySelectorAll("#finish-filter-group .finish-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#finish-filter-group .finish-pill").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFinish = btn.dataset.finish;
      renderProducts();
    });
  });

  const sortBySelect = document.getElementById("sort-by");
  if (sortBySelect) {
    sortBySelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderProducts();
    });
  }

  document.querySelectorAll(".quick-keywords .keyword-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      searchQuery = chip.dataset.query;
      const searchInputEl = document.getElementById("water-search-input");
      if (searchInputEl) searchInputEl.value = searchQuery;
      document.getElementById("catalogue-section").scrollIntoView({ behavior: "smooth" });
      renderProducts();
    });
  });
}

function setupSearchListeners() {
  const searchInputEl = document.getElementById("water-search-input");
  const btnTriggerSearch = document.getElementById("btn-trigger-search");

  if (searchInputEl) {
    searchInputEl.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderProducts();
    });
    searchInputEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        searchQuery = searchInputEl.value;
        document.getElementById("catalogue-section").scrollIntoView({ behavior: "smooth" });
        renderProducts();
      }
    });
  }

  if (btnTriggerSearch) {
    btnTriggerSearch.addEventListener("click", () => {
      if (searchInputEl) searchQuery = searchInputEl.value;
      document.getElementById("catalogue-section").scrollIntoView({ behavior: "smooth" });
      renderProducts();
    });
  }
}

// ============================================================================
// 4. MODALE D'INSPECTION 3D & SIMULATEUR HYDRO-THERMIQUE (EAU FROIDE / FLAMME)
// ============================================================================
window.openSimulatorModal = function(productId) {
  const product = CRG_CATALOG.find(p => p.id === productId);
  if (!product) return;

  activeProductForModal = product;

  const modalBackdrop = document.getElementById("water-modal-backdrop");
  const modalFaucetImg = document.getElementById("modal-faucet-img");
  const modalTitle = document.getElementById("modal-title");
  const modalBrand = document.getElementById("modal-brand");
  const modalPrice = document.getElementById("modal-price");
  const modalOldPrice = document.getElementById("modal-old-price");
  const modalDesc = document.getElementById("modal-desc");
  const modalSpecs = document.getElementById("modal-specs");
  const modalWhatsappLink = document.getElementById("modal-whatsapp-link");
  const rotRange = document.getElementById("modal-rot-range");
  const rotVal = document.getElementById("modal-rot-val");
  const tempRange = document.getElementById("modal-temp-range");
  const tempVal = document.getElementById("modal-temp-val");
  const stageWrapper = document.getElementById("modal-stage-3d-wrapper");

  modalFaucetImg.src = product.image;
  modalTitle.textContent = product.name;
  modalBrand.textContent = product.brand;
  modalPrice.textContent = formatDZD(product.priceDZD);
  modalOldPrice.textContent = "Tarif Public : " + formatDZD(product.oldPriceDZD);
  modalDesc.textContent = product.description;

  if (rotRange && stageWrapper) {
    rotRange.value = 0;
    rotVal.textContent = "0°";
    stageWrapper.style.transform = "rotateY(0deg)";
  }

  if (tempRange && tempVal) {
    const defaultTemp = product.category === "heating" ? 55 : 18;
    tempRange.value = defaultTemp;
    updateModalTemperature(defaultTemp);
  }

  modalSpecs.innerHTML = Object.entries(product.specs).map(([key, val]) => `
    <div class="spec-item">
      <span class="spec-label">${key}</span>
      <span class="spec-value">${val}</span>
    </div>
  `).join("");

  const waMsg = `Bonjour SARL CRG Oran, je souhaite commander / obtenir un devis pour :
• Produit : ${product.name}
• Marque : ${product.brand}
• Prix affiché : ${formatDZD(product.priceDZD)} HT
Merci de me confirmer la disponibilité au dépôt 4ème Périphérique.`;
  modalWhatsappLink.href = `https://wa.me/213560252632?text=${encodeURIComponent(waMsg)}`;

  stopWaterFlow();
  modalBackdrop.classList.add("open");
  document.body.style.overflow = "hidden";
};

function updateModalTemperature(temp) {
  const tempVal = document.getElementById("modal-temp-val");
  const jet = document.getElementById("water-jet-stream");
  if (!tempVal || !jet) return;

  if (temp >= 40) {
    tempVal.textContent = `${temp}°C • Flamme Chaude`;
    tempVal.style.color = "#FFB800";
    jet.classList.add("thermal-stream");
  } else {
    tempVal.textContent = `${temp}°C • Eau Pure`;
    tempVal.style.color = "#00F0FF";
    jet.classList.remove("thermal-stream");
  }
}

function startWaterFlow() {
  isWaterFlowing = true;
  const waterJetStream = document.getElementById("water-jet-stream");
  const waterBasin = document.getElementById("water-basin");
  const btnToggleWater = document.getElementById("btn-toggle-water");
  const waterBtnText = document.getElementById("water-btn-text");
  const flowReadout = document.getElementById("flow-readout");
  const tempRange = document.getElementById("modal-temp-range");

  waterJetStream.classList.add("flowing");
  waterBasin.classList.add("rippling");
  btnToggleWater.classList.add("active");
  waterBtnText.textContent = "Fermer la Vanne (Couper le Flux)";

  const rate = activeProductForModal ? activeProductForModal.flowRate : 8.5;
  const press = activeProductForModal ? activeProductForModal.pressure : "3.5 Bar";
  const temp = tempRange ? tempRange.value : 18;
  flowReadout.innerHTML = `<strong style="color:#00F0FF;">FLUX ACTIF :</strong> ${rate} L/min • Pression : ${press} • Temp : ${temp}°C`;
}

function stopWaterFlow() {
  isWaterFlowing = false;
  const waterJetStream = document.getElementById("water-jet-stream");
  const waterBasin = document.getElementById("water-basin");
  const btnToggleWater = document.getElementById("btn-toggle-water");
  const waterBtnText = document.getElementById("water-btn-text");
  const flowReadout = document.getElementById("flow-readout");

  if (waterJetStream) waterJetStream.classList.remove("flowing");
  if (waterBasin) waterBasin.classList.remove("rippling");
  if (btnToggleWater) btnToggleWater.classList.remove("active");
  if (waterBtnText) waterBtnText.textContent = "Ouvrir la Vanne & Tester le Débit";
  if (flowReadout) flowReadout.textContent = "Débit : 0.0 L/min (Vanne Fermée)";
}

function closeModal() {
  const modalBackdrop = document.getElementById("water-modal-backdrop");
  if (modalBackdrop) modalBackdrop.classList.remove("open");
  document.body.style.overflow = "";
  stopWaterFlow();
}

function setupModalEvents() {
  const btnCloseModal = document.getElementById("btn-close-modal");
  const modalBackdrop = document.getElementById("water-modal-backdrop");
  const btnToggleWater = document.getElementById("btn-toggle-water");
  const rotRange = document.getElementById("modal-rot-range");
  const rotVal = document.getElementById("modal-rot-val");
  const tempRange = document.getElementById("modal-temp-range");
  const stageWrapper = document.getElementById("modal-stage-3d-wrapper");
  const btnModalAddQuote = document.getElementById("btn-modal-add-quote");

  if (btnCloseModal) btnCloseModal.addEventListener("click", closeModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  if (btnToggleWater) {
    btnToggleWater.addEventListener("click", () => {
      if (isWaterFlowing) stopWaterFlow();
      else startWaterFlow();
    });
  }

  if (rotRange && stageWrapper) {
    rotRange.addEventListener("input", (e) => {
      const deg = e.target.value;
      rotVal.textContent = `${deg}°`;
      stageWrapper.style.transform = `rotateY(${deg}deg)`;
    });
  }

  if (tempRange) {
    tempRange.addEventListener("input", (e) => {
      updateModalTemperature(parseInt(e.target.value, 10));
      if (isWaterFlowing) startWaterFlow();
    });
  }

  if (btnModalAddQuote) {
    btnModalAddQuote.addEventListener("click", () => {
      if (activeProductForModal) {
        addToQuoteCart(activeProductForModal.id);
        closeModal();
        toggleQuoteDrawer(true);
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      window.closePosterModal();
      toggleQuoteDrawer(false);
    }
  });
}

// ============================================================================
// 5. PANIER DEVIS EXPRESS PRO (B2B & PARTICULIERS) + IMPRESSION PDF PROFORMA
// ============================================================================
function loadQuoteCart() {
  try {
    const saved = localStorage.getItem("crg_quote_cart_v2");
    if (saved) quoteCart = JSON.parse(saved);
  } catch (e) {
    quoteCart = [];
  }
  updateQuoteUI();
}

function saveQuoteCart() {
  try {
    localStorage.setItem("crg_quote_cart_v2", JSON.stringify(quoteCart));
  } catch (e) {}
  updateQuoteUI();
}

window.addToQuoteCart = function(productId) {
  const product = CRG_CATALOG.find(p => p.id === productId);
  if (!product) return;

  const existing = quoteCart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    quoteCart.push({
      id: product.id,
      name: product.name,
      brand: product.brand,
      priceDZD: product.priceDZD,
      image: product.image,
      qty: 1
    });
  }
  saveQuoteCart();
  toggleQuoteDrawer(true);
};

window.changeQuoteQty = function(productId, delta) {
  const idx = quoteCart.findIndex(item => item.id === productId);
  if (idx === -1) return;
  quoteCart[idx].qty += delta;
  if (quoteCart[idx].qty <= 0) {
    quoteCart.splice(idx, 1);
  }
  saveQuoteCart();
};

function updateQuoteUI() {
  const countBadge = document.getElementById("quote-count-badge");
  const dockCount = document.getElementById("dock-quote-count");
  const container = document.getElementById("drawer-items-container");
  const totalEl = document.getElementById("drawer-total-amount");

  const totalItems = quoteCart.reduce((acc, item) => acc + item.qty, 0);
  const totalAmount = quoteCart.reduce((acc, item) => acc + (item.priceDZD * item.qty), 0);

  if (countBadge) countBadge.textContent = totalItems;
  if (dockCount) dockCount.textContent = totalItems;
  if (totalEl) totalEl.textContent = formatDZD(totalAmount);

  if (!container) return;

  if (quoteCart.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:45px 15px; color:#7C99C4;">
        <div style="font-size:2.2rem; margin-bottom:10px;">📋</div>
        <strong style="color:#FFF; display:block; margin-bottom:6px;">Votre Devis Pro est vide</strong>
        <p style="font-size:0.82rem;">Cliquez sur "➕ Ajouter Devis" sur n'importe quel article du catalogue pour préparer votre bon de commande ou devis quantitatif.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = quoteCart.map(item => `
    <div class="drawer-item">
      <img src="${item.image}" alt="${item.name}">
      <div class="drawer-item-info">
        <h4>${item.name}</h4>
        <span>${formatDZD(item.priceDZD)} × ${item.qty} = ${formatDZD(item.priceDZD * item.qty)}</span>
      </div>
      <div class="drawer-qty-controls">
        <button class="qty-btn" onclick="changeQuoteQty('${item.id}', -1)">-</button>
        <span style="font-weight:800; font-size:0.85rem; min-width:18px; text-align:center;">${item.qty}</span>
        <button class="qty-btn" onclick="changeQuoteQty('${item.id}', 1)">+</button>
      </div>
    </div>
  `).join("");
}

window.toggleQuoteDrawer = function(open) {
  const backdrop = document.getElementById("quote-drawer-backdrop");
  if (!backdrop) return;
  backdrop.classList.toggle("open", open);
};

function setupQuoteDrawerEvents() {
  const btnOpen = document.getElementById("btn-open-drawer");
  const btnClose = document.getElementById("btn-close-drawer");
  const backdrop = document.getElementById("quote-drawer-backdrop");
  const btnSendWa = document.getElementById("btn-send-drawer-wa");
  const btnPrint = document.getElementById("btn-print-quote");
  const btnClear = document.getElementById("btn-clear-quote");

  if (btnOpen) btnOpen.addEventListener("click", () => toggleQuoteDrawer(true));
  if (btnClose) btnClose.addEventListener("click", () => toggleQuoteDrawer(false));
  if (backdrop) {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) toggleQuoteDrawer(false);
    });
  }

  if (btnClear) {
    btnClear.addEventListener("click", () => {
      quoteCart = [];
      saveQuoteCart();
    });
  }

  if (btnSendWa) {
    btnSendWa.addEventListener("click", () => {
      if (quoteCart.length === 0) {
        alert("Ajoutez d'abord au moins un article à votre Devis Pro.");
        return;
      }
      const clientName = document.getElementById("drawer-client-name")?.value || "Client Pro / Chantier";
      const clientPhone = document.getElementById("drawer-client-phone")?.value || "Non renseigné";
      const total = quoteCart.reduce((acc, i) => acc + i.priceDZD * i.qty, 0);

      const lines = quoteCart.map((i, idx) => `${idx + 1}. ${i.name} (Qté: ${i.qty}) — ${formatDZD(i.priceDZD * i.qty)} HT`).join("\n");
      const msg = `Bonjour SARL CRG Oran,\nVoici ma demande de Devis Pro :\n• Client / Entreprise : ${clientName}\n• Tél : ${clientPhone}\n\nARTICLES DEMANDÉS :\n${lines}\n\nTOTAL ESTIMATIF HT : ${formatDZD(total)}\nMerci de me confirmer la disponibilité et votre meilleure offre.`;

      window.open(`https://wa.me/213560252632?text=${encodeURIComponent(msg)}`, "_blank");
    });
  }

  if (btnPrint) {
    btnPrint.addEventListener("click", () => {
      if (quoteCart.length === 0) {
        alert("Ajoutez d'abord au moins un article à votre Devis Pro pour imprimer le Proforma.");
        return;
      }
      printOfficialProforma();
    });
  }
}

function printOfficialProforma() {
  const clientName = document.getElementById("drawer-client-name")?.value || "Entreprise / Client Particulier";
  const clientPhone = document.getElementById("drawer-client-phone")?.value || "";
  const totalHT = quoteCart.reduce((acc, i) => acc + i.priceDZD * i.qty, 0);
  const dateStr = new Date().toLocaleDateString("fr-FR");

  const rowsHtml = quoteCart.map((item, idx) => `
    <tr>
      <td style="padding:10px; border-bottom:1px solid #ddd;">${idx + 1}</td>
      <td style="padding:10px; border-bottom:1px solid #ddd;"><strong>${item.name}</strong><br><small>${item.brand}</small></td>
      <td style="padding:10px; border-bottom:1px solid #ddd; text-align:center;">${item.qty}</td>
      <td style="padding:10px; border-bottom:1px solid #ddd; text-align:right;">${formatDZD(item.priceDZD)}</td>
      <td style="padding:10px; border-bottom:1px solid #ddd; text-align:right; font-weight:bold;">${formatDZD(item.priceDZD * item.qty)}</td>
    </tr>
  `).join("");

  const win = window.open("", "_blank");
  if (!win) return;
  win.document.write(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <title>Devis Proforma — SARL CRG Oran</title>
      <style>
        body { font-family: Arial, sans-serif; color: #111; padding: 30px; }
        .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 3px solid #0055CC; padding-bottom: 15px; margin-bottom: 25px; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th { background: #07132B; color: #FFF; padding: 10px; text-align: left; }
      </style>
    </head>
    <body>
      <div class="header">
        <div>
          <h1 style="margin:0; color:#0055CC;">SARL CRG — COMPTOIR DE ROBINETTERIE GÉNÉRALE</h1>
          <p style="margin:4px 0; font-size:13px;">Îlot N°08, Zone Industrielle, 4ème Périphérique, Es-Sénia — Oran</p>
          <p style="margin:2px 0; font-size:13px;">Tél Commercial : 0560 25 26 32 | Support Chantier : 0560 12 02 69 | Fixe : 041 51 51 56</p>
        </div>
        <div style="text-align:right;">
          <h2 style="margin:0; color:#D50022;">DEVIS CONSULTATION PRO</h2>
          <p style="margin:4px 0;">Date : ${dateStr}</p>
          <p style="margin:2px 0;">Client : <strong>${clientName}</strong> ${clientPhone}</p>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Désignation & Marque</th>
            <th style="text-align:center;">Qté</th>
            <th style="text-align:right;">P.U. HT</th>
            <th style="text-align:right;">Total HT</th>
          </tr>
        </thead>
        <tbody>${rowsHtml}</tbody>
      </table>
      <div style="margin-top:25px; text-align:right; font-size:18px;">
        <strong>TOTAL ESTIMATIF HT : ${formatDZD(totalHT)}</strong>
      </div>
      <p style="margin-top:35px; font-size:12px; color:#555;">
        Document généré sur la plateforme officielle SARL CRG Oran. Sous réserve de confirmation des quantités au dépôt du 4ème Périphérique Es-Sénia.
      </p>
      <script>window.print();<\/script>
    </body>
    </html>
  `);
  win.document.close();
}

// ============================================================================
// 6. FORMULAIRE DE CONTACT EXPRESS B2B / PARTICULIER
// ============================================================================
window.handleExpressContact = function(e) {
  e.preventDefault();
  const name = document.getElementById("req-name").value.trim();
  const phone = document.getElementById("req-phone").value.trim();
  const profile = document.getElementById("req-profile").value;
  const subject = document.getElementById("req-subject").value;
  const details = document.getElementById("req-message").value.trim();

  const msg = `Bonjour SARL CRG Oran,
Nouvelle demande depuis le Portail 3D CRG :
• Nom / Entreprise : ${name}
• Téléphone : ${phone}
• Profil : ${profile}
• Objet : ${subject}
${details ? `• Détails : ${details}` : ""}
Merci de me recontacter.`;

  window.open(`https://wa.me/213560252632?text=${encodeURIComponent(msg)}`, "_blank");
};

window.sendExpressEmail = function() {
  const name = document.getElementById("req-name").value.trim() || "Client CRG";
  const phone = document.getElementById("req-phone").value.trim() || "";
  const profile = document.getElementById("req-profile").value;
  const subject = document.getElementById("req-subject").value;
  const details = document.getElementById("req-message").value.trim();

  const body = `Nom / Entreprise : ${name}\nTéléphone : ${phone}\nProfil : ${profile}\nObjet : ${subject}\nDétails : ${details}`;
  window.location.href = `mailto:contact@crg-oran.com?subject=${encodeURIComponent(subject + " - " + name)}&body=${encodeURIComponent(body)}`;
};
