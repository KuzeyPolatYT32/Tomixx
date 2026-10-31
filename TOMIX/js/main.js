/**
 * TOMIX - Premium E-Commerce Platform
 * Main Application Logic & Page Renderers
 */

// Global Product Card Component Renderer
function renderProductCard(product) {
  const isFav = window.FavoritesService ? FavoritesService.isFavorite(product.id) : false;

  return `
    <article class="product-card" data-product-id="${product.id}">
      <div class="product-card-media">
        <a href="product-detail.html?id=${product.id}" class="product-card-link" aria-label="${product.name}">
          <img src="${product.image}" alt="${product.name}" class="product-card-img" loading="lazy" onerror="handleImageError(this, '${product.name}')">
        </a>
        
        <div class="product-card-badges">
          ${product.badge ? `<span class="product-badge badge-${product.badge === 'Çok Satan' ? 'primary' : 'accent'}">${product.badge}</span>` : ""}
          ${product.discount ? `<span class="product-badge badge-discount">${product.discount}</span>` : ""}
        </div>

        <button type="button" class="btn-favorite-action ${isFav ? 'active' : ''}" data-fav-id="${product.id}" aria-label="Favorilere ekle/çıkar" title="${isFav ? 'Favorilerden Çıkar' : 'Favorilere Ekle'}">
          <svg class="icon-heart" width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? '#E11D48' : 'none'}" stroke="${isFav ? '#E11D48' : 'currentColor'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>

        <div class="product-card-hover-actions">
          <button type="button" class="btn-quick-add" data-add-cart="${product.id}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span>Hızlı Ekle</span>
          </button>
        </div>
      </div>

      <div class="product-card-body">
        <span class="product-card-category">${product.category}</span>
        <h3 class="product-card-title">
          <a href="product-detail.html?id=${product.id}">${product.name}</a>
        </h3>

        <div class="product-card-rating">
          <div class="rating-stars" aria-label="${product.rating} yıldız">
            ${Array.from({ length: 5 }).map((_, i) => `
              <svg width="13" height="13" viewBox="0 0 24 24" fill="${i < Math.floor(product.rating) ? '#F59E0B' : '#E2E8F0'}" stroke="none">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            `).join('')}
          </div>
          <span class="rating-score">${product.rating}</span>
          <span class="rating-count">(${product.reviewsCount})</span>
        </div>

        <div class="product-card-footer">
          <div class="product-card-prices">
            <span class="price-current">${formatPrice(product.price)}</span>
            ${product.oldPrice ? `<span class="price-old">${formatPrice(product.oldPrice)}</span>` : ""}
          </div>
          <a href="product-detail.html?id=${product.id}" class="btn-detail-link" aria-label="Ürünü İncele">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </article>
  `;
}

// Global Event Delegator for Product Actions
function setupProductCardListeners() {
  document.addEventListener("click", (e) => {
    // Add to cart click
    const addBtn = e.target.closest("[data-add-cart]");
    if (addBtn) {
      e.preventDefault();
      const id = addBtn.getAttribute("data-add-cart");
      if (window.CartService) {
        CartService.addItem(id, 1);
        addBtn.classList.add("added");
        setTimeout(() => addBtn.classList.remove("added"), 1000);
      }
      return;
    }

    // Toggle favorite click
    const favBtn = e.target.closest("[data-fav-id]");
    if (favBtn) {
      e.preventDefault();
      const id = favBtn.getAttribute("data-fav-id");
      if (window.FavoritesService) {
        const isNowFav = FavoritesService.toggleFavorite(id);
        favBtn.classList.toggle("active", isNowFav);
        const svg = favBtn.querySelector("svg");
        if (svg) {
          svg.setAttribute("fill", isNowFav ? "#E11D48" : "none");
          svg.setAttribute("stroke", isNowFav ? "#E11D48" : "currentColor");
        }
      }
      return;
    }
  });
}

// Scroll Entrance Observer
function initScrollObserver() {
  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        obs.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: "0px 0px -50px 0px",
    threshold: 0.1
  });

  document.querySelectorAll(".reveal, .reveal-up, .reveal-stagger").forEach(el => {
    observer.observe(el);
  });
}

// Page Specific Initializers
const PageHandlers = {
  // HOME PAGE INITIALIZER
  home() {
    const featuredGrid = document.getElementById("featured-products-grid");
    if (featuredGrid) {
      const featured = getFeaturedProducts();
      featuredGrid.innerHTML = featured.map(p => renderProductCard(p)).join("");
    }

    // Render Category Showcase cards if container exists
    const categoryGrid = document.getElementById("category-showcase-grid");
    if (categoryGrid) {
      const categories = getCategories();
      categoryGrid.innerHTML = categories.map((cat, index) => `
        <a href="products.html?category=${cat.slug}" class="category-card ${index === 0 ? 'category-card-large' : ''} ${index === 3 ? 'category-card-wide' : ''}">
          <div class="category-card-bg" style="background-image: url('${cat.image}');"></div>
          <div class="category-card-overlay"></div>
          <div class="category-card-content">
            <span class="category-badge-pill">${cat.badge}</span>
            <h3 class="category-card-title">${cat.name}</h3>
            <p class="category-card-desc">${cat.description}</p>
            <span class="category-link-text">
              Koleksiyonu Keşfet 
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </span>
          </div>
        </a>
      `).join("");
    }
  },

  // PRODUCTS CATALOG PAGE INITIALIZER
  products() {
    const grid = document.getElementById("catalog-products-grid");
    if (!grid) return;

    const urlParams = new URLSearchParams(window.location.search);
    let activeCategory = urlParams.get("category") || "all";
    let activeSearch = urlParams.get("search") || "";
    let activeSort = urlParams.get("sort") || "featured";
    let activeMaxPrice = 1200;

    const categoryButtons = document.querySelectorAll(".filter-category-btn");
    const sortSelect = document.getElementById("sort-select");
    const priceRangeInput = document.getElementById("price-range-input");
    const priceDisplay = document.getElementById("price-range-val");
    const searchInput = document.getElementById("catalog-search-input");
    const countDisplay = document.getElementById("filtered-count");
    const clearFiltersBtn = document.getElementById("clear-filters-btn");
    const activeFilterPills = document.getElementById("active-filter-pills");

    // Pre-fill search if in URL
    if (searchInput && activeSearch) {
      searchInput.value = activeSearch;
    }

    // Category button initial state
    categoryButtons.forEach(btn => {
      const slug = btn.getAttribute("data-category");
      if (slug === activeCategory) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    const updateCatalog = () => {
      let list = getProducts();

      // Category filter
      if (activeCategory !== "all") {
        list = list.filter(p => p.categorySlug === activeCategory);
      }

      // Search filter
      if (activeSearch) {
        const q = activeSearch.toLowerCase().trim();
        list = list.filter(p => 
          p.name.toLowerCase().includes(q) || 
          p.category.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q)
        );
      }

      // Price filter
      list = list.filter(p => p.price <= activeMaxPrice);

      // Sorting
      if (activeSort === "price-asc") {
        list.sort((a, b) => a.price - b.price);
      } else if (activeSort === "price-desc") {
        list.sort((a, b) => b.price - a.price);
      } else if (activeSort === "rating") {
        list.sort((a, b) => b.rating - a.rating);
      } else if (activeSort === "discount") {
        list.sort((a, b) => (b.oldPrice ? (b.oldPrice - b.price) : 0) - (a.oldPrice ? (a.oldPrice - a.price) : 0));
      } else if (activeSort === "featured") {
        list.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
      }

      // Update count
      if (countDisplay) {
        countDisplay.textContent = list.length;
      }

      // Render Pills
      if (activeFilterPills) {
        let pillsHtml = "";
        if (activeCategory !== "all") {
          const cat = TOMIX_CATEGORIES.find(c => c.slug === activeCategory);
          const catName = cat ? cat.name : activeCategory;
          pillsHtml += `<span class="filter-pill">${catName} <button type="button" data-remove-pill="category">&times;</button></span>`;
        }
        if (activeSearch) {
          pillsHtml += `<span class="filter-pill">"${activeSearch}" <button type="button" data-remove-pill="search">&times;</button></span>`;
        }
        if (activeMaxPrice < 1200) {
          pillsHtml += `<span class="filter-pill">Maks: ${activeMaxPrice} TL <button type="button" data-remove-pill="price">&times;</button></span>`;
        }
        activeFilterPills.innerHTML = pillsHtml;
      }

      // Render products
      if (list.length === 0) {
        grid.innerHTML = `
          <div class="catalog-empty-state">
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#737D87" stroke-width="1.5">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
            <h3>Aradığınız kriterlere uygun ürün bulunamadı</h3>
            <p>Filtreleri sıfırlayarak tüm TOMIX koleksiyonunu görüntüleyebilirsiniz.</p>
            <button type="button" id="reset-catalog-btn" class="btn btn-primary" style="margin-top:16px;">Tüm Filtreleri Sıfırla</button>
          </div>
        `;
        const resetBtn = document.getElementById("reset-catalog-btn");
        if (resetBtn) resetBtn.addEventListener("click", resetAllFilters);
      } else {
        grid.innerHTML = list.map(p => renderProductCard(p)).join("");
      }
    };

    const resetAllFilters = () => {
      activeCategory = "all";
      activeSearch = "";
      activeSort = "featured";
      activeMaxPrice = 1200;

      if (searchInput) searchInput.value = "";
      if (sortSelect) sortSelect.value = "featured";
      if (priceRangeInput) {
        priceRangeInput.value = 1200;
        if (priceDisplay) priceDisplay.textContent = "1.200 TL";
      }

      categoryButtons.forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-category") === "all");
      });

      // Update URL clean
      window.history.replaceState({}, "", window.location.pathname);
      updateCatalog();
    };

    // Category Buttons click
    categoryButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        categoryButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        activeCategory = btn.getAttribute("data-category");
        updateCatalog();
      });
    });

    // Sort select change
    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        activeSort = e.target.value;
        updateCatalog();
      });
    }

    // Price range change
    if (priceRangeInput) {
      priceRangeInput.addEventListener("input", (e) => {
        activeMaxPrice = parseInt(e.target.value, 10);
        if (priceDisplay) priceDisplay.textContent = formatPrice(activeMaxPrice);
        updateCatalog();
      });
    }

    // Search input
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        activeSearch = e.target.value;
        updateCatalog();
      });
    }

    // Clear filters button
    if (clearFiltersBtn) {
      clearFiltersBtn.addEventListener("click", resetAllFilters);
    }

    // Remove pill click
    if (activeFilterPills) {
      activeFilterPills.addEventListener("click", (e) => {
        const removeBtn = e.target.closest("[data-remove-pill]");
        if (!removeBtn) return;
        const type = removeBtn.getAttribute("data-remove-pill");
        if (type === "category") {
          activeCategory = "all";
          categoryButtons.forEach(b => b.classList.toggle("active", b.getAttribute("data-category") === "all"));
        } else if (type === "search") {
          activeSearch = "";
          if (searchInput) searchInput.value = "";
        } else if (type === "price") {
          activeMaxPrice = 1200;
          if (priceRangeInput) priceRangeInput.value = 1200;
          if (priceDisplay) priceDisplay.textContent = "1.200 TL";
        }
        updateCatalog();
      });
    }

    // Dynamically update category counts in sidebar
    const allProducts = getProducts();
    categoryButtons.forEach(btn => {
      const slug = btn.getAttribute("data-category");
      const countEl = btn.querySelector(".cat-count");
      if (countEl) {
        if (slug === "all") {
          countEl.textContent = allProducts.length;
        } else {
          const count = allProducts.filter(p => p.categorySlug === slug).length;
          countEl.textContent = count;
        }
      }
    });

    // Initial render
    updateCatalog();
  },

  // PRODUCT DETAIL PAGE INITIALIZER
  productDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id") || "tmx-101";
    const product = getProductById(productId);

    if (!product) {
      const container = document.getElementById("product-detail-container");
      if (container) {
        container.innerHTML = `
          <div class="product-not-found" style="text-align:center; padding: 80px 20px;">
            <h2>Ürün Bulunamadı</h2>
            <p>İncelemek istediğiniz ürün mevcut değil veya kaldırılmış olabilir.</p>
            <a href="products.html" class="btn btn-primary" style="margin-top:20px;">Ürünler Sayfasına Dön</a>
          </div>
        `;
      }
      return;
    }

    // Update document title
    document.title = `${product.name} | TOMIX`;

    // Populate Breadcrumb
    const breadcrumbCategory = document.getElementById("detail-crumb-category");
    const breadcrumbTitle = document.getElementById("detail-crumb-title");
    if (breadcrumbCategory) {
      breadcrumbCategory.textContent = product.category;
      breadcrumbCategory.href = `products.html?category=${product.categorySlug}`;
    }
    if (breadcrumbTitle) {
      breadcrumbTitle.textContent = product.name;
    }

    // Populate Main Gallery
    const mainImg = document.getElementById("detail-main-img");
    const thumbContainer = document.getElementById("detail-thumbnails");

    if (mainImg) {
      mainImg.src = product.image;
      mainImg.alt = product.name;
    }

    if (thumbContainer && product.gallery && product.gallery.length > 0) {
      thumbContainer.innerHTML = product.gallery.map((imgUrl, i) => `
        <button type="button" class="gallery-thumb-btn ${i === 0 ? 'active' : ''}" data-img-url="${imgUrl}" aria-label="Görsel ${i + 1}">
          <img src="${imgUrl}" alt="${product.name} Görsel ${i + 1}" onerror="handleImageError(this, '${product.name}')">
        </button>
      `).join("");

      thumbContainer.querySelectorAll(".gallery-thumb-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          thumbContainer.querySelectorAll(".gallery-thumb-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          const targetUrl = btn.getAttribute("data-img-url");
          if (mainImg) mainImg.src = targetUrl;
        });
      });
    }

    // Image Zoom Modal
    const zoomTrigger = document.getElementById("detail-zoom-trigger");
    const zoomModal = document.getElementById("image-zoom-modal");
    const zoomModalImg = document.getElementById("zoom-modal-img");
    const zoomClose = document.getElementById("zoom-modal-close");

    if (zoomTrigger && zoomModal && zoomModalImg) {
      zoomTrigger.addEventListener("click", () => {
        zoomModalImg.src = mainImg.src;
        zoomModal.classList.add("active");
      });
      if (zoomClose) {
        zoomClose.addEventListener("click", () => zoomModal.classList.remove("active"));
      }
      zoomModal.addEventListener("click", (e) => {
        if (e.target === zoomModal) zoomModal.classList.remove("active");
      });
    }

    // Populate Product Information
    const titleEl = document.getElementById("detail-product-title");
    const categoryEl = document.getElementById("detail-product-category");
    const badgeEl = document.getElementById("detail-product-badge");
    const priceCurrentEl = document.getElementById("detail-price-current");
    const priceOldEl = document.getElementById("detail-price-old");
    const discountEl = document.getElementById("detail-discount-tag");
    const shortDescEl = document.getElementById("detail-short-desc");
    const fullDescEl = document.getElementById("detail-full-desc");
    const ratingEl = document.getElementById("detail-rating-score");
    const reviewsEl = document.getElementById("detail-reviews-count");
    const stockEl = document.getElementById("detail-stock-badge");

    if (titleEl) titleEl.textContent = product.name;
    if (categoryEl) categoryEl.textContent = product.category;
    if (badgeEl) {
      if (product.badge) {
        badgeEl.textContent = product.badge;
        badgeEl.style.display = "inline-block";
      } else {
        badgeEl.style.display = "none";
      }
    }
    if (priceCurrentEl) priceCurrentEl.textContent = formatPrice(product.price);
    if (priceOldEl) {
      if (product.oldPrice) {
        priceOldEl.textContent = formatPrice(product.oldPrice);
        priceOldEl.style.display = "inline-block";
      } else {
        priceOldEl.style.display = "none";
      }
    }
    if (discountEl) {
      if (product.discount) {
        discountEl.textContent = product.discount;
        discountEl.style.display = "inline-block";
      } else {
        discountEl.style.display = "none";
      }
    }
    if (shortDescEl) shortDescEl.textContent = product.shortDescription;
    if (fullDescEl) fullDescEl.textContent = product.fullDescription;
    if (ratingEl) ratingEl.textContent = product.rating;
    if (reviewsEl) reviewsEl.textContent = `(${product.reviewsCount} Değerlendirme)`;
    if (stockEl) stockEl.textContent = product.stock;

    // Specs Table
    const specsContainer = document.getElementById("detail-specs-table");
    if (specsContainer && product.specs) {
      let rows = `
        <tr><td>Boyutlar</td><td><strong>${product.dimensions || '-'}</strong></td></tr>
      `;
      for (const [key, value] of Object.entries(product.specs)) {
        rows += `<tr><td>${key}</td><td>${value}</td></tr>`;
      }
      specsContainer.innerHTML = rows;
    }

    // Quantity Counter
    let currentQty = 1;
    const qtyInput = document.getElementById("detail-qty-input");
    const qtyMinus = document.getElementById("detail-qty-minus");
    const qtyPlus = document.getElementById("detail-qty-plus");

    if (qtyMinus && qtyPlus && qtyInput) {
      qtyMinus.addEventListener("click", () => {
        if (currentQty > 1) {
          currentQty--;
          qtyInput.value = currentQty;
        }
      });
      qtyPlus.addEventListener("click", () => {
        if (currentQty < 20) {
          currentQty++;
          qtyInput.value = currentQty;
        }
      });
      qtyInput.addEventListener("change", (e) => {
        let v = parseInt(e.target.value, 10);
        if (isNaN(v) || v < 1) v = 1;
        if (v > 20) v = 20;
        currentQty = v;
        qtyInput.value = currentQty;
      });
    }

    // Add to Cart Button
    const addToCartBtn = document.getElementById("detail-add-to-cart");
    if (addToCartBtn) {
      addToCartBtn.addEventListener("click", () => {
        if (window.CartService) {
          CartService.addItem(product.id, currentQty);
          addToCartBtn.classList.add("added");
          setTimeout(() => addToCartBtn.classList.remove("added"), 1000);
        }
      });
    }

    // Favorite Button
    const favBtn = document.getElementById("detail-fav-btn");
    if (favBtn && window.FavoritesService) {
      const isFav = FavoritesService.isFavorite(product.id);
      favBtn.classList.toggle("active", isFav);
      const svg = favBtn.querySelector("svg");
      if (svg) {
        svg.setAttribute("fill", isFav ? "#E11D48" : "none");
        svg.setAttribute("stroke", isFav ? "#E11D48" : "currentColor");
      }

      favBtn.addEventListener("click", () => {
        const status = FavoritesService.toggleFavorite(product.id);
        favBtn.classList.toggle("active", status);
        if (svg) {
          svg.setAttribute("fill", status ? "#E11D48" : "none");
          svg.setAttribute("stroke", status ? "#E11D48" : "currentColor");
        }
      });
    }

    // Related Products Grid
    const relatedGrid = document.getElementById("related-products-grid");
    if (relatedGrid) {
      const related = getProducts()
        .filter(p => p.categorySlug === product.categorySlug && p.id !== product.id)
        .slice(0, 4);
      
      // Fallback if not enough in same category
      if (related.length < 4) {
        const fillers = getProducts().filter(p => p.id !== product.id && !related.includes(p)).slice(0, 4 - related.length);
        related.push(...fillers);
      }

      relatedGrid.innerHTML = related.map(p => renderProductCard(p)).join("");
    }
  },

  // CART PAGE INITIALIZER
  cart() {
    const tableBody = document.getElementById("cart-items-tbody");
    const summaryCard = document.getElementById("cart-summary-box");
    const emptyState = document.getElementById("cart-empty-state");
    const contentArea = document.getElementById("cart-content-area");

    const renderCart = () => {
      const items = CartService.getItems();
      
      if (items.length === 0) {
        if (contentArea) contentArea.style.display = "none";
        if (emptyState) emptyState.style.display = "block";
        return;
      }

      if (contentArea) contentArea.style.display = "grid";
      if (emptyState) emptyState.style.display = "none";

      if (tableBody) {
        tableBody.innerHTML = items.map(item => `
          <tr class="cart-table-row" data-id="${item.id}">
            <td class="cart-col-product">
              <a href="product-detail.html?id=${item.id}" class="cart-product-thumb">
                <img src="${item.image}" alt="${item.name}" onerror="handleImageError(this, '${item.name}')">
              </a>
              <div class="cart-product-meta">
                <span class="cart-product-cat">${item.category}</span>
                <a href="product-detail.html?id=${item.id}" class="cart-product-title">${item.name}</a>
                <span class="cart-product-unit-mobile">${formatPrice(item.price)}</span>
              </div>
            </td>
            <td class="cart-col-price desktop-only">
              ${formatPrice(item.price)}
            </td>
            <td class="cart-col-quantity">
              <div class="cart-qty-stepper">
                <button type="button" class="btn-qty-step" data-step="minus" data-id="${item.id}">-</button>
                <input type="number" class="input-qty-step" value="${item.quantity}" min="1" max="50" data-id="${item.id}">
                <button type="button" class="btn-qty-step" data-step="plus" data-id="${item.id}">+</button>
              </div>
            </td>
            <td class="cart-col-total">
              <strong>${formatPrice(item.price * item.quantity)}</strong>
            </td>
            <td class="cart-col-remove">
              <button type="button" class="btn-cart-remove" data-remove-id="${item.id}" aria-label="Ürünü sepetten çıkar">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </button>
            </td>
          </tr>
        `).join("");
      }

      // Render Summary
      if (summaryCard) {
        const subtotal = CartService.getSubtotal();
        const shipping = CartService.getShippingFee();
        const total = CartService.getTotal();
        const remainingFree = CartService.getRemainingForFreeShipping();

        let shippingBanner = "";
        if (remainingFree > 0) {
          const progress = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
          shippingBanner = `
            <div class="free-shipping-progress">
              <p>Ücretsiz kargoya <strong>${formatPrice(remainingFree)}</strong> kaldı!</p>
              <div class="progress-bar-track">
                <div class="progress-bar-fill" style="width: ${progress}%;"></div>
              </div>
            </div>
          `;
        } else {
          shippingBanner = `
            <div class="free-shipping-success">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16A34A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Tebrikler! Siparişinizde <strong>Kargo Ücretsiz</strong>.</span>
            </div>
          `;
        }

        summaryCard.innerHTML = `
          <h3 class="summary-title">Sipariş Özeti</h3>
          ${shippingBanner}
          <div class="summary-line">
            <span>Ara Toplam</span>
            <span>${formatPrice(subtotal)}</span>
          </div>
          <div class="summary-line">
            <span>Kargo Ücreti</span>
            <span>${shipping === 0 ? '<strong style="color:#16A34A">Ücretsiz</strong>' : formatPrice(shipping)}</span>
          </div>
          <div class="summary-divider"></div>
          <div class="summary-total-line">
            <span>Genel Toplam</span>
            <span class="total-amount">${formatPrice(total)}</span>
          </div>
          <div class="summary-demo-notice">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2878C7" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            <p><strong>Demo Proje Bildirimi:</strong> Bu site bir demo projedir. Online ödeme ve gerçek sipariş işlemleri aktif değildir.</p>
          </div>
          <button type="button" class="btn btn-primary btn-block" id="btn-checkout-demo">Siparişi Tamamla (Demo)</button>
          <button type="button" class="btn btn-link btn-block" id="btn-clear-cart" style="margin-top:10px; color:#737D87; font-size:13px;">Sepeti Temizle</button>
        `;

        // Checkout button click handler
        const checkoutBtn = document.getElementById("btn-checkout-demo");
        if (checkoutBtn) {
          checkoutBtn.addEventListener("click", () => {
            Toast.show({
              title: "Demo Sipariş Bildirimi",
              message: "Bu site bir demo projedir. Gerçek sipariş veya ödeme işlemi alınmamaktadır.",
              type: "info",
              duration: 5000
            });
          });
        }

        // Clear cart button handler
        const clearBtn = document.getElementById("btn-clear-cart");
        if (clearBtn) {
          clearBtn.addEventListener("click", () => {
            if (confirm("Sepetinizdeki tüm ürünleri silmek istediğinize emin misiniz?")) {
              CartService.clearCart();
              renderCart();
            }
          });
        }
      }
    };

    // Stepper & Remove Handlers
    if (tableBody) {
      tableBody.addEventListener("click", (e) => {
        const stepBtn = e.target.closest("[data-step]");
        if (stepBtn) {
          const id = stepBtn.getAttribute("data-id");
          const step = stepBtn.getAttribute("data-step");
          const item = CartService.getItems().find(i => i.id === id);
          if (item) {
            const newQty = step === "plus" ? item.quantity + 1 : item.quantity - 1;
            CartService.updateQuantity(id, newQty);
            renderCart();
          }
          return;
        }

        const removeBtn = e.target.closest("[data-remove-id]");
        if (removeBtn) {
          const id = removeBtn.getAttribute("data-remove-id");
          CartService.removeItem(id);
          renderCart();
          return;
        }
      });

      tableBody.addEventListener("change", (e) => {
        const input = e.target.closest(".input-qty-step");
        if (input) {
          const id = input.getAttribute("data-id");
          let val = parseInt(input.value, 10);
          if (isNaN(val) || val < 1) val = 1;
          CartService.updateQuantity(id, val);
          renderCart();
        }
      });
    }

    // Listen to updates from other tabs or scripts
    window.addEventListener("tomix:cart-updated", renderCart);

    // Initial render
    renderCart();
  },

  // FAVORITES PAGE INITIALIZER
  favorites() {
    const grid = document.getElementById("favorites-products-grid");
    const emptyState = document.getElementById("favorites-empty-state");
    const countDisplay = document.getElementById("favorites-count-label");

    const renderFavorites = () => {
      const items = FavoritesService.getFavoriteProducts();

      if (countDisplay) {
        countDisplay.textContent = `${items.length} Ürün`;
      }

      if (items.length === 0) {
        if (grid) grid.style.display = "none";
        if (emptyState) emptyState.style.display = "block";
      } else {
        if (grid) {
          grid.style.display = "grid";
          grid.innerHTML = items.map(p => renderProductCard(p)).join("");
        }
        if (emptyState) emptyState.style.display = "none";
      }
    };

    window.addEventListener("tomix:favorites-updated", renderFavorites);
    renderFavorites();
  },

  // CONTACT PAGE INITIALIZER
  contact() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.querySelector("#contact-name")?.value.trim();
      const email = form.querySelector("#contact-email")?.value.trim();
      const subject = form.querySelector("#contact-subject")?.value.trim();
      const message = form.querySelector("#contact-message")?.value.trim();

      if (!name || !email || !message) {
        Toast.show({
          title: "Eksik Bilgi",
          message: "Lütfen ad, e-posta ve mesaj alanlarını doldurun.",
          type: "warning"
        });
        return;
      }

      Toast.show({
        title: "Mesajınız İletildi (Demo)",
        message: `Sayın ${name}, mesajınız simüle edilmiştir. Bu bir demo projedir.`,
        type: "success",
        duration: 5000
      });

      form.reset();
    });
  }
};

// Main Initialization on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  setupProductCardListeners();
  initScrollObserver();

  // Detect current page by body data-page or location pathname
  const page = document.body.getAttribute("data-page");

  if (page && PageHandlers[page]) {
    PageHandlers[page]();
  } else {
    const path = window.location.pathname;
    if (path.includes("products.html")) {
      PageHandlers.products();
    } else if (path.includes("product-detail.html")) {
      PageHandlers.productDetail();
    } else if (path.includes("cart.html")) {
      PageHandlers.cart();
    } else if (path.includes("favorites.html")) {
      PageHandlers.favorites();
    } else if (path.includes("contact.html")) {
      PageHandlers.contact();
    } else if (path.endsWith("index.html") || path.endsWith("/")) {
      PageHandlers.home();
    }
  }

  // Observe newly rendered content
  initScrollObserver();
});
