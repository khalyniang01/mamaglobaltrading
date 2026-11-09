/**
 * Mama Global Trading - Official Interactive Script
 * Features: E-Commerce Cart, WhatsApp Order Generator, Filter/Search, Modals & Toast
 * Author: Antigravity Assistant
 */

// Global State
const productsData = [
    {
        id: 1,
        title: "Creme main🌸",
        category: "beaute",
        categoryName: "Soins des Mains",
        price: 500,
        image: "assets/images/craime main.jpeg",
        description: "Crèmes mains hydratantes, nourrissantes et délicatement parfumées (Pêche, Avocat, Fraise, Thé Vert, Citron...). Pénètre rapidement sans laisser de film gras pour des mains douces, soyeuses et subtilement parfumées toute la journée. Disponible à l'unité ou en packs dégressifs grossiste.",
        packs: [
            { name: "Pack 12 pcs", count: 12, price: 3000, unitNote: "250 F/u" },
            { name: "Pack 24 pcs", count: 24, price: 5000, unitNote: "~208 F/u" },
            { name: "Pack 50 pcs", count: 50, price: 8500, unitNote: "170 F/u" },
            { name: "Pack 100 pcs", count: 100, price: 15000, unitNote: "150 F/u" }
        ]
    },
    {
        id: 2,
        title: "Masque Lèvres Collagène Fruit",
        category: "beaute",
        categoryName: "Soins des Lèvres",
        price: 500,
        image: "assets/images/mask-lip-set.jpeg",
        description: "Patchs lèvres hydrogel concentrés au collagène végétal et extraits de 9 fruits (Myrtille, Avocat, Noix de coco, Pêche, Miel, Fraise...). Repulpe, répare les gerçures et redonne de l'éclat aux lèvres. Disponible à l'unité ou en packs grossiste.",
        packs: [
            { name: "Pack 12 pcs", count: 12, price: 2500, unitNote: "~208 F/u" },
            { name: "Pack 24 pcs", count: 24, price: 4000, unitNote: "~166 F/u" },
            { name: "Pack 50 pcs", count: 50, price: 7500, unitNote: "150 F/u" },
            { name: "Pack 100 pcs", count: 100, price: 13500, unitNote: "135 F/u" }
        ]
    },
    {
        id: 3,
        title: "Masque Visage SADOER Eclat",
        category: "beaute",
        categoryName: "Soins du Visage",
        price: 500,
        image: "assets/images/mask-face-hero.jpeg",
        description: "Masques en tissu infusés aux actifs naturels bienfaisants : Miel nourrissant, Framboise antioxydante, Coco hydratante, Avoine apaisante et Orange tonifiante. Hydratation immédiate pour un teint lumineux et frais. Disponible à l'unité ou en packs grossiste.",
        packs: [
            { name: "Pack 12 pcs", count: 12, price: 2500, unitNote: "~208 F/u" },
            { name: "Pack 24 pcs", count: 24, price: 4500, unitNote: "~187 F/u" },
            { name: "Pack 50 pcs", count: 50, price: 8500, unitNote: "170 F/u" },
            { name: "Pack 100 pcs", count: 100, price: 15000, unitNote: "150 F/u" }
        ]
    },
    {
        id: 4,
        title: "Masques Anticernes Hydrogel",
        category: "beaute",
        categoryName: "Soins Regard",
        price: 500,
        image: "assets/images/mask-eye-set.jpeg",
        description: "Patchs yeux enrichis au Collagène, Acide Hyaluronique, 24K Gold et Algues marines. Dégonfle les poches, estompe les cernes foncés et lisse les ridules du contour de l'œil après une longue journée. Disponible à l'unité ou en packs grossiste.",
        packs: [
            { name: "Pack 12 pcs", count: 12, price: 2500, unitNote: "~208 F/u" },
            { name: "Pack 24 pcs", count: 24, price: 4500, unitNote: "~187 F/u" },
            { name: "Pack 50 pcs", count: 50, price: 7500, unitNote: "150 F/u" },
            { name: "Pack 100 pcs", count: 100, price: 13500, unitNote: "135 F/u" }
        ]
    },
    {
        id: 5,
        title: "Gloss Fruité Shine High",
        category: "beaute",
        categoryName: "Lèvres & Beauté",
        price: 500,
        priceOnDemand: true,
        image: "assets/images/gloss-collection.jpeg",
        description: "Brillant à lèvres scintillant effet miroir non collant, formule enrichie en huiles nourrissantes et vitamine E aux délicieux parfums fruités. Tarif sur devis ou dégressif selon quantité (discuter le prix)."
    },
    {
        id: 6,
        title: "Chouchou en Soie & Satin de Luxe",
        category: "beaute",
        categoryName: "Accessoires Cheveux",
        price: 500,
        image: "assets/images/scrunchie-luxury.jpeg",
        description: "Véritable chouchou en satin soyeux haute qualité anti-casse et anti-frisottis. Préserve la fibre capillaire, sublime vos queues de cheval et chignons sans laisser de traces. Disponible à l'unité (500 FCFA) ou en packs revendeurs dégressifs (12, 24, 50, 100 pcs).",
        packs: [
            { name: "Pack 12 pcs", count: 12, price: 3000, unitNote: "250 F/u" },
            { name: "Pack 24 pcs", count: 24, price: 6000, unitNote: "250 F/u" },
            { name: "Pack 50 pcs", count: 50, price: 10000, unitNote: "200 F/u" },
            { name: "Pack 100 pcs", count: 100, price: 20000, unitNote: "200 F/u" }
        ]
    },
    {
        id: 7,
        title: "Bloc Note Élégant Rose & Or",
        category: "papeterie",
        categoryName: "Papeterie & Bureau",
        price: null,
        priceOnDemand: true,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
        description: "Carnet de notes chic avec couverture rigide aux accents rose poudré et dorures. Papier épais premium ligné pour organiser vos projets professionnels. Personnalisation possible (discuter le prix)."
    },
    {
        id: 8,
        title: "Stylo Fourrure Douce Glamour",
        category: "papeterie",
        categoryName: "Papeterie Fantaisie",
        price: 500,
        image: "https://images.unsplash.com/photo-1585336261026-77e8b6eeebae?auto=format&fit=crop&w=600&q=80",
        description: "Stylo à bille gel surmonté d'un pompon en fourrure ultra douce et soyeuse. Écriture fluide et précise, apporte une touche glamour et raffinée sur votre bureau à 500 FCFA."
    },
    {
        id: 9,
        title: "Stylo Effaçable Précision",
        category: "papeterie",
        categoryName: "Papeterie & Bureau",
        price: 500,
        image: "https://images.unsplash.com/photo-1569683795645-b62e50fbf103?auto=format&fit=crop&w=600&q=80",
        description: "Stylo à encre thermosensible gel effaçable instantanément par friction sans abîmer le papier. Parfait pour les prises de notes soignées sans ratures à 500 FCFA."
    },
    {
        id: 10,
        title: "Bouteille en Verre Sweet Happy",
        category: "papeterie",
        categoryName: "Lifestyle & Boisson",
        price: 2500,
        image: "assets/images/bottle-glass.jpeg",
        description: "Gourde tendance en verre borosilicate transparent avec couvercle hermétique rose et paille intégrée. Pratique, écologique et élégante pour emporter vos boissons au quotidien à 2 500 FCFA."
    },
    {
        id: 11,
        title: "Pack Cadeau Prestige MGT",
        category: "cadeaux",
        categoryName: "Coffrets & Fêtes",
        price: null,
        priceOnDemand: true,
        image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80",
        description: "Coffret cadeau luxueux confectionné sur-mesure : sélection de gloss, masques visage, chouchou en soie, crème pour les mains et stylo pailleté dans un écrin rose et or. Composition et tarif personnalisés (discuter le prix)."
    },
    {
        id: 12,
        title: "Eau de Parfum Sensuelle MGT",
        category: "parfumerie",
        categoryName: "Parfumerie de Luxe",
        price: null,
        priceOnDemand: true,
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80",
        description: "Fragrance envoûtante mêlant délicatesse florale, vanille ambrée et musc blanc. Sillage raffiné et tenue longue durée tout au long de vos journées dakaroises (discuter le prix)."
    },
    {
        id: 13,
        title: "Brume Corporelle Envoûtante",
        category: "parfumerie",
        categoryName: "Parfumerie & Brumes",
        price: null,
        priceOnDemand: true,
        image: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=600&q=80",
        description: "Brume légère et vivifiante pour le corps et les cheveux. Voile de fraîcheur gourmand qui laisse sur la peau un parfum subtil, frais et irrésistible après la douche (discuter le prix)."
    },
    {
        id: 14,
        title: "Pack Revendeur Starter (27 pcs)",
        category: "cadeaux",
        categoryName: "Packs Revendeurs",
        price: 8000,
        image: "assets/images/gloss-poster.jpeg",
        description: "Pack Starter idéal pour démarrer votre propre business beauté avec un petit budget ! Contient 27 articles très demandés :\n• 15 Gloss Shine High\n• 3 Crèmes mains hydratantes\n• 3 Masques lèvres collagène\n• 3 Masques visage éclat\n• 3 Masques cernes hydrogel\n\n💰 Rentabilité estimée :\n• Revente des 12 soins à 500 F = 6 000 FCFA\n• Revente des 15 gloss à 700 F (ou 3 pour 2 000 F) = 10 000 FCFA\n• Total des ventes : 16 000 FCFA (soit 8 000 FCFA de bénéfice net, 100% de rentabilité !)"
    },
    {
        id: 15,
        title: "Pack Revendeur Maxi Business (51 pcs) 🛍️",
        category: "cadeaux",
        categoryName: "Packs Revendeurs",
        price: 13500,
        image: "assets/images/gloss-glam-logo.jpeg",
        description: "L'offre revendeur n°1 de Mama Global Trading ! Contient 51 articles tendance :\n• 15 Gloss ultra-brillants\n• 12 Chouchous en soie de luxe\n• 12 Crèmes mains hydratantes\n• 4 Masques lèvres collagène\n• 4 Masques anticernes hydrogel\n• 4 Masques visage éclat SADOER\n\n💣 Rentabilité calculée :\n• 36 masques, chouchous et crèmes vendus à 500 F = 18 000 FCFA\n• 15 gloss vendus à 700 F l'unité (ou 3 pour 2 000 F) = 10 000 FCFA\n• Total des ventes : 28 000 FCFA minimum 🥳\n• Bénéfice net pour vous : +14 500 FCFA (Investissement 13 500 F rentabilisé à plus de 107%) !"
    }
];

// Shopping Cart State
let cart = JSON.parse(localStorage.getItem('mgt_cart')) || [];
const WA_PHONE = "221711718888";
const EMAIL_CONTACT = "mamaglobaltrading2024@gmail.com";

// DOM Elements
document.addEventListener("DOMContentLoaded", () => {
    initNavbarScroll();
    initMobileMenu();
    initSearch();
    initCatalogFilters();
    initPackTabs();
    initFaqAccordion();
    initCartUI();
    renderCart();
    initScrollToTop();
});

/* --------------------------------------------------------------------------
   1. Navbar & Mobile Menu
   -------------------------------------------------------------------------- */
function initNavbarScroll() {
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
}

function initMobileMenu() {
    const mobileToggle = document.getElementById("mobileToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-link");

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            mobileToggle.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                mobileToggle.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });

        // Close when clicking outside
        document.addEventListener("click", (e) => {
            if (navMenu.classList.contains("active") && !navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                mobileToggle.classList.remove("active");
                navMenu.classList.remove("active");
            }
        });
    }
}

/* --------------------------------------------------------------------------
   2. Search System
   -------------------------------------------------------------------------- */
function initSearch() {
    const searchBtn = document.getElementById("searchBtn");
    const searchBar = document.getElementById("searchBar");
    const closeSearch = document.getElementById("closeSearch");
    const globalSearchInput = document.getElementById("globalSearchInput");
    const catalogSearchInput = document.getElementById("catalogSearchInput");

    if (searchBtn && searchBar) {
        searchBtn.addEventListener("click", () => {
            searchBar.classList.toggle("open");
            if (searchBar.classList.contains("open")) {
                globalSearchInput.focus();
            }
        });
    }

    if (closeSearch && searchBar) {
        closeSearch.addEventListener("click", () => {
            searchBar.classList.remove("open");
        });
    }

    if (globalSearchInput) {
        globalSearchInput.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase().trim();
            if (catalogSearchInput) {
                catalogSearchInput.value = query;
            }
            filterProducts(query, "all");
            // Scroll to catalog smoothly
            document.getElementById("produits").scrollIntoView({ behavior: "smooth" });
        });
    }

    if (catalogSearchInput) {
        catalogSearchInput.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase().trim();
            const activeTab = document.querySelector(".filter-btn.active");
            const filter = activeTab ? activeTab.getAttribute("data-filter") : "all";
            filterProducts(query, filter);
        });
    }
}

/* --------------------------------------------------------------------------
   3. Catalog Filtering
   -------------------------------------------------------------------------- */
function initCatalogFilters() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.getAttribute("data-filter");
            const catalogSearchInput = document.getElementById("catalogSearchInput");
            const query = catalogSearchInput ? catalogSearchInput.value.toLowerCase().trim() : "";
            filterProducts(query, filter);
        });
    });
}

function filterProducts(query = "", category = "all") {
    const cards = document.querySelectorAll(".product-card");
    let matchCount = 0;

    cards.forEach(card => {
        const cardCat = card.getAttribute("data-category");
        const title = card.querySelector(".product-title").textContent.toLowerCase();
        const brief = card.querySelector(".product-brief").textContent.toLowerCase();

        const matchesCat = (category === "all" || cardCat === category);
        const matchesQuery = (query === "" || title.includes(query) || brief.includes(query));

        if (matchesCat && matchesQuery) {
            card.style.display = "flex";
            matchCount++;
        } else {
            card.style.display = "none";
        }
    });
}

/* --------------------------------------------------------------------------
   4. Shopping Cart System
   -------------------------------------------------------------------------- */
function initCartUI() {
    const cartBtn = document.getElementById("cartBtn");
    const closeCartBtn = document.getElementById("closeCartBtn");
    const cartOverlay = document.getElementById("cartOverlay");

    if (cartBtn) cartBtn.addEventListener("click", openCart);
    if (closeCartBtn) closeCartBtn.addEventListener("click", closeCart);
    if (cartOverlay) cartOverlay.addEventListener("click", closeCart);
}

function openCart() {
    document.getElementById("cartDrawer").classList.add("active");
    document.getElementById("cartOverlay").classList.add("active");
}

function closeCart() {
    document.getElementById("cartDrawer").classList.remove("active");
    document.getElementById("cartOverlay").classList.remove("active");
}

function addToCart(productId, title, price, image, quantity = 1) {
    const existingIndex = cart.findIndex(item => item.id === productId);

    if (existingIndex > -1) {
        cart[existingIndex].qty += quantity;
    } else {
        cart.push({
            id: productId,
            title: title,
            price: price,
            image: image,
            qty: quantity
        });
    }

    saveCart();
    renderCart();
    openCart();
    showToast(`"${title}" ajouté au panier !`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
    showToast("Article retiré du panier.");
}

function updateCartQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) {
            removeFromCart(productId);
            return;
        }
        saveCart();
        renderCart();
    }
}

function clearCart() {
    if (confirm("Voulez-vous vraiment vider votre panier ?")) {
        cart = [];
        saveCart();
        renderCart();
        showToast("Le panier a été vidé.");
    }
}

function saveCart() {
    localStorage.setItem("mgt_cart", JSON.stringify(cart));
}

function renderCart() {
    const cartBadge = document.getElementById("cartBadge");
    const cartCountTitle = document.getElementById("cartCountTitle");
    const cartItemsList = document.getElementById("cartItemsList");
    const cartFooter = document.getElementById("cartFooter");
    const cartTotalAmount = document.getElementById("cartTotalAmount");

    const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
    const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

    if (cartBadge) cartBadge.textContent = totalQty;
    if (cartCountTitle) cartCountTitle.textContent = totalQty;

    if (cart.length === 0) {
        cartItemsList.innerHTML = `
            <div class="cart-empty-state">
                <i class="fa-solid fa-basket-shopping"></i>
                <p>Votre panier est actuellement vide.</p>
                <button class="btn btn-outline-pink btn-sm" onclick="closeCart()">Découvrir nos produits</button>
            </div>
        `;
        if (cartFooter) cartFooter.style.display = "none";
        return;
    }

    if (cartFooter) cartFooter.style.display = "block";
    if (cartTotalAmount) cartTotalAmount.textContent = `${totalPrice.toLocaleString("fr-FR")} FCFA`;

    let html = "";
    cart.forEach(item => {
        const itemSubtotal = item.price * item.qty;
        html += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}" class="cart-item-img">
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.title}</h4>
                    <div class="cart-item-price">${itemSubtotal.toLocaleString("fr-FR")} FCFA (${item.price.toLocaleString("fr-FR")} FCFA/u)</div>
                    <div class="cart-item-qty">
                        <button class="qty-small-btn" onclick="updateCartQty(${item.id}, -1)">-</button>
                        <span class="qty-val">${item.qty}</span>
                        <button class="qty-small-btn" onclick="updateCartQty(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Supprimer">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        `;
    });

    cartItemsList.innerHTML = html;
}

function checkoutWhatsApp() {
    if (cart.length === 0) {
        showToast("Votre panier est vide.");
        return;
    }

    const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    let message = `Bonjour Madame Diallo / Mama Global Trading,\n\nJe souhaite passer la commande suivante depuis votre site web :\n\n`;

    cart.forEach((item, index) => {
        message += `${index + 1}. *${item.title}* x${item.qty} = ${(item.price * item.qty).toLocaleString("fr-FR")} FCFA\n`;
    });

    message += `\n*TOTAL : ${totalPrice.toLocaleString("fr-FR")} FCFA*\n`;
    message += `\n📍 Adresse de livraison : Dakar (Parcelles Assainies / Autre quartier à préciser)\n`;
    message += `💳 Mode de paiement souhaité : Wave / Orange Money / Espèces\n\n`;
    message += `Merci de me confirmer la disponibilité et le délai de livraison !`;

    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${WA_PHONE}?text=${encoded}`;
    window.open(waUrl, "_blank");
}

/* --------------------------------------------------------------------------
   5. Bulk Wholesale Packs Functions
   -------------------------------------------------------------------------- */
function initPackTabs() {
    const tabBtns = document.querySelectorAll(".pack-tab-btn");
    const tabPanes = document.querySelectorAll(".pack-tab-pane");
    if (!tabBtns.length) return;

    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const target = btn.getAttribute("data-pack-tab");
            tabBtns.forEach(b => b.classList.remove("active"));
            tabPanes.forEach(p => p.classList.remove("active"));

            btn.classList.add("active");
            const activePane = document.getElementById(`pack-pane-${target}`);
            if (activePane) activePane.classList.add("active");
        });
    });
}

function selectPack(packName, price, quantity, categoryName) {
    const cat = categoryName ? ` (${categoryName})` : "";
    const message = `Bonjour Mama Global Trading,\n\nJe souhaite commander le *${packName}*${cat} (${quantity} pièces) au tarif officiel de *${price.toLocaleString("fr-FR")} FCFA*.\n\nPouvez-vous me confirmer la disponibilité et les modalités de livraison à Dakar ?\n\nMerci !`;
    const waUrl = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
}

function onCardPackChange(selectEl, productId) {
    const card = selectEl.closest(".product-card");
    if (!card) return;

    const [priceStr, packName] = selectEl.value.split("|");
    const price = parseInt(priceStr, 10);
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    const isUnit = packName === "unit";
    const itemTitle = isUnit ? product.title : `${product.title} (${packName})`;

    // Update displayed price in card
    const priceEl = card.querySelector(".product-price");
    if (priceEl) {
        priceEl.innerHTML = `${price.toLocaleString("fr-FR")} <span class="currency">FCFA</span> ${!isUnit ? `<small style="font-size:0.75rem; color:var(--text-muted); font-weight:700;">(${packName})</small>` : ''}`;
    }

    // Update Add to Cart button
    const cartBtn = card.querySelector(".btn-add-cart");
    if (cartBtn) {
        cartBtn.onclick = () => addToCart(product.id, itemTitle, price, product.image);
    }

    // Update WhatsApp button
    const waBtn = card.querySelector(".btn-wa-quick");
    if (waBtn) {
        const msg = isUnit
            ? `Bonjour, je veux commander le produit ${product.title} (${price.toLocaleString("fr-FR")} FCFA)`
            : `Bonjour, je veux commander le ${itemTitle} au tarif de ${price.toLocaleString("fr-FR")} FCFA`;
        waBtn.href = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(msg)}`;
    }
}

/* --------------------------------------------------------------------------
   6. Product Quick View Modal
   -------------------------------------------------------------------------- */
let currentModalProduct = null;

function openProductModal(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    currentModalProduct = product;
    document.getElementById("modalProductImg").src = product.image;
    document.getElementById("modalProductCat").textContent = product.categoryName;
    document.getElementById("modalProductTitle").textContent = product.title;
    document.getElementById("modalProductDesc").textContent = product.description;
    document.getElementById("modalQtyInput").value = 1;

    // Handle pack options if available
    let packSelector = document.getElementById("modalPackSelectWrap");
    if (!packSelector) {
        packSelector = document.createElement("div");
        packSelector.id = "modalPackSelectWrap";
        const priceRow = document.getElementById("modalProductPrice").parentElement;
        priceRow.after(packSelector);
    }

    const qtySelector = document.querySelector(".modal-qty-selector");
    const addBtn = document.getElementById("modalAddToCartBtn");
    const waBtn = document.getElementById("modalWhatsAppOrderBtn");

    if (product.priceOnDemand) {
        document.getElementById("modalProductPrice").innerHTML = '<i class="fa-solid fa-comments"></i> Discuter le prix';
        packSelector.style.display = "none";
        if (qtySelector) qtySelector.style.display = "none";
        if (addBtn) addBtn.style.display = "none";

        waBtn.innerHTML = '<i class="fa-brands fa-whatsapp"></i> Discuter le prix sur WhatsApp';
        waBtn.style.width = "100%";
        waBtn.style.justifyContent = "center";
        waBtn.onclick = () => {
            const msg = `Bonjour Mama Global Trading,\n\nJe suis intéressé(e) par :\n- *${product.title}*\n\nJe souhaite demander le tarif et discuter du prix selon la quantité souhaitée.\n\nMerci de me donner vos meilleurs prix et conditions !`;
            window.open(`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(msg)}`, "_blank");
        };
    } else {
        document.getElementById("modalProductPrice").textContent = `${product.price.toLocaleString("fr-FR")} FCFA`;
        if (qtySelector) qtySelector.style.display = "flex";
        if (addBtn) addBtn.style.display = "inline-flex";
        waBtn.innerHTML = '<i class="fa-brands fa-whatsapp"></i> Acheter sur WhatsApp';
        waBtn.style.width = "";
        waBtn.style.justifyContent = "";

        let selectedPrice = product.price;
        let selectedTitle = product.title;

        if (product.packs && product.packs.length > 0) {
            packSelector.style.display = "block";
            packSelector.innerHTML = `
                <div style="margin-bottom:14px; background:#fff0f5; padding:12px 14px; border-radius:var(--radius-sm); border:1.5px dashed var(--border-pink);">
                    <label style="font-size:0.85rem; font-weight:800; color:var(--primary-pink-dark); display:block; margin-bottom:8px;">
                        <i class="fa-solid fa-box-open"></i> Choisissez votre format / Pack Grossiste :
                    </label>
                    <select id="modalPackDropdown" style="width:100%; padding:9px 12px; border-radius:var(--radius-sm); border:1.5px solid var(--border-pink); font-family:inherit; font-weight:700; font-size:0.9rem; background:#fff; outline:none; color:var(--heading-color);">
                        <option value="unit">À l'unité - ${product.price.toLocaleString("fr-FR")} FCFA</option>
                        ${product.packs.map((p, idx) => `<option value="${idx}">${p.name} - ${p.price.toLocaleString("fr-FR")} FCFA (${p.unitNote || ''})</option>`).join("")}
                    </select>
                </div>
            `;

            const packDropdown = document.getElementById("modalPackDropdown");
            packDropdown.onchange = (e) => {
                const val = e.target.value;
                if (val === "unit") {
                    selectedPrice = product.price;
                    selectedTitle = product.title;
                } else {
                    const chosen = product.packs[parseInt(val, 10)];
                    selectedPrice = chosen.price;
                    selectedTitle = `${product.title} (${chosen.name})`;
                }
                document.getElementById("modalProductPrice").textContent = `${selectedPrice.toLocaleString("fr-FR")} FCFA`;
            };
        } else {
            packSelector.style.display = "none";
        }

        // Action buttons in modal
        addBtn.onclick = () => {
            const qty = parseInt(document.getElementById("modalQtyInput").value) || 1;
            addToCart(product.id, selectedTitle, selectedPrice, product.image, qty);
            closeProductModal();
        };

        waBtn.onclick = () => {
            const qty = parseInt(document.getElementById("modalQtyInput").value) || 1;
            const total = selectedPrice * qty;
            const msg = `Bonjour Mama Global Trading,\n\nJe souhaite commander :\n- *${selectedTitle}* (Quantité: ${qty})\n- Total : ${total.toLocaleString("fr-FR")} FCFA\n\nMerci de me donner les détails pour la livraison à Dakar !`;
            window.open(`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(msg)}`, "_blank");
        };
    }

    document.getElementById("productModalOverlay").classList.add("open");
}

function closeProductModal() {
    document.getElementById("productModalOverlay").classList.remove("open");
}

function changeModalQty(delta) {
    const input = document.getElementById("modalQtyInput");
    let val = parseInt(input.value) || 1;
    val += delta;
    if (val < 1) val = 1;
    input.value = val;
}

// Close modal when clicking outside
window.addEventListener("click", (e) => {
    const modalOverlay = document.getElementById("productModalOverlay");
    if (e.target === modalOverlay) {
        closeProductModal();
    }
    const imageOverlay = document.getElementById("imageModalOverlay");
    if (e.target === imageOverlay) {
        closeImageModal();
    }
});

/* --------------------------------------------------------------------------
   7. Image Lightbox Modal
   -------------------------------------------------------------------------- */
function openImageModal(src, title) {
    document.getElementById("imageModalSrc").src = src;
    document.getElementById("imageModalTitle").textContent = title;
    document.getElementById("imageModalOverlay").classList.add("open");
}

function closeImageModal() {
    document.getElementById("imageModalOverlay").classList.remove("open");
}

/* --------------------------------------------------------------------------
   8. Floating WhatsApp Widget
   -------------------------------------------------------------------------- */
function toggleWaPopup() {
    const popup = document.getElementById("waPopup");
    popup.classList.toggle("active");
}

function sendWaPreset(text) {
    const msg = `Bonjour Mama Global Trading,\n\n${text}`;
    window.open(`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(msg)}`, "_blank");
    toggleWaPopup();
}

/* --------------------------------------------------------------------------
   9. Contact Form Handlers
   -------------------------------------------------------------------------- */
function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("formName").value;
    const phone = document.getElementById("formPhone").value;
    const email = document.getElementById("formEmail").value || "Non renseigné";
    const subject = document.getElementById("formSubject").value;
    const message = document.getElementById("formMessage").value;

    const waMsg = `*NOUVELLE DEMANDE DE CONTACT (SITE MGT)*\n\n` +
        `👤 *Nom :* ${name}\n` +
        `📞 *Téléphone :* ${phone}\n` +
        `✉️ *Email :* ${email}\n` +
        `📋 *Objet :* ${subject}\n\n` +
        `💬 *Message :*\n${message}`;

    window.open(`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(waMsg)}`, "_blank");
    showToast("Redirection vers WhatsApp en cours...");
    document.getElementById("contactForm").reset();
}

function sendViaEmail() {
    const name = document.getElementById("formName").value;
    const phone = document.getElementById("formPhone").value;
    const subject = document.getElementById("formSubject").value;
    const message = document.getElementById("formMessage").value;

    if (!name || !phone || !message) {
        alert("Veuillez remplir au moins votre nom, téléphone et message avant d'envoyer par email.");
        return;
    }

    const emailSubject = encodeURIComponent(`Demande MGT - ${subject} (${name})`);
    const emailBody = encodeURIComponent(
        `Nom: ${name}\nTéléphone: ${phone}\nSujet: ${subject}\n\nMessage:\n${message}\n\nEnvoyé depuis le site web Mama Global Trading.`
    );

    window.location.href = `mailto:${EMAIL_CONTACT}?subject=${emailSubject}&body=${emailBody}`;
    showToast("Ouverture de votre messagerie email...");
}

/* --------------------------------------------------------------------------
   10. FAQ Accordion
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const questionBtn = item.querySelector(".faq-question");
        questionBtn.addEventListener("click", () => {
            const isActive = item.classList.contains("active");
            faqItems.forEach(i => i.classList.remove("active"));
            if (!isActive) {
                item.classList.add("active");
            }
        });
    });
}

/* --------------------------------------------------------------------------
   11. Scroll To Top & Toast
   -------------------------------------------------------------------------- */
function initScrollToTop() {
    const backToTopBtn = document.getElementById("backToTop");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add("visible");
        } else {
            backToTopBtn.classList.remove("visible");
        }
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function showToast(message) {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateX(50px)";
        toast.style.transition = "all 0.3s ease";
        setTimeout(() => toast.remove(), 300);
    }, 3200);
}

