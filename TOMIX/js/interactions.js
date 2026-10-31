/**
 * TOMIX - Premium E-Commerce Platform
 * Global UI Interactions, Toasts, Search Modal & Drawer
 */

// Toast Notification System
const Toast = {
  container: null,

  init() {
    if (!this.container) {
      this.container = document.createElement("div");
      this.container.className = "tomix-toast-container";
      this.container.setAttribute("aria-live", "polite");
      document.body.appendChild(this.container);
    }
  },

  show({ title = "Bildirim", message = "", type = "info", duration = 3800 }) {
    this.init();

    const toast = document.createElement("div");
    toast.className = `tomix-toast tomix-toast-${type}`;

    const icons = {
      success: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
      info: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,
      warning: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`
    };

    toast.innerHTML = `
      <div class="toast-icon">${icons[type] || icons.info}</div>
      <div class="toast-content">
        <div class="toast-title">${title}</div>
        <div class="toast-message">${message}</div>
      </div>
      <button class="toast-close" aria-label="Kapat">&times;</button>
    `;

    this.container.appendChild(toast);

    // Trigger enter animation
    requestAnimationFrame(() => {
      toast.classList.add("show");
    });

    const closeBtn = toast.querySelector(".toast-close");
    let timer = null;

    const removeToast = () => {
      toast.classList.remove("show");
      toast.classList.add("hide");
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    };

    closeBtn.addEventListener("click", removeToast);

    // Auto dismiss
    timer = setTimeout(removeToast, duration);

    // Pause on hover
    toast.addEventListener("mouseenter", () => clearTimeout(timer));
    toast.addEventListener("mouseleave", () => {
      timer = setTimeout(removeToast, 1800);
    });
  }
};

window.Toast = Toast;

// Search Modal System
const SearchModal = {
  overlay: null,
  input: null,
  resultsContainer: null,
  debounceTimer: null,

  init() {
    this.createModalDOM();
    this.bindEvents();
  },

  createModalDOM() {
    if (document.getElementById("tomix-search-overlay")) {
      this.overlay = document.getElementById("tomix-search-overlay");
      this.input = document.getElementById("tomix-search-input");
      this.resultsContainer = document.getElementById("tomix-search-results");
      return;
    }

    const overlay = document.createElement("div");
    overlay.id = "tomix-search-overlay";
    overlay.className = "tomix-search-overlay";
    overlay.innerHTML = `
      <div class="search-modal-backdrop"></div>
      <div class="search-modal-box">
        <div class="search-modal-header">
          <div class="search-input-wrapper">
            <svg class="search-input-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" id="tomix-search-input" placeholder="Mutfak kabı, organizer, saksı, banyo seti ara..." autocomplete="off">
            <button type="button" class="search-clear-btn" id="tomix-search-clear" style="display:none;" aria-label="Temizle">&times;</button>
          </div>
          <button type="button" class="search-modal-close" id="tomix-search-close" aria-label="Aramayı Kapat">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div class="search-quick-tags">
          <span class="quick-tag-label">Popüler:</span>
          <button type="button" class="quick-tag" data-tag="kiler">Kiler Kabı</button>
          <button type="button" class="quick-tag" data-tag="organizer">Organizer</button>
          <button type="button" class="quick-tag" data-tag="banyo">Banyo</button>
          <button type="button" class="quick-tag" data-tag="mop">Mop Seti</button>
          <button type="button" class="quick-tag" data-tag="saksı">Saksı</button>
        </div>

        <div class="search-results-area" id="tomix-search-results">
          <div class="search-initial-state">
            <p>Aramak istediğiniz ürün adını veya kategoriyi yazın.</p>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    this.overlay = overlay;
    this.input = document.getElementById("tomix-search-input");
    this.resultsContainer = document.getElementById("tomix-search-results");
  },

  bindEvents() {
    // Open trigger buttons
    document.querySelectorAll("[data-open-search]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        this.open();
      });
    });

    // Close triggers
    const closeBtn = document.getElementById("tomix-search-close");
    const backdrop = this.overlay.querySelector(".search-modal-backdrop");
    const clearBtn = document.getElementById("tomix-search-clear");

    if (closeBtn) closeBtn.addEventListener("click", () => this.close());
    if (backdrop) backdrop.addEventListener("click", () => this.close());

    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        this.input.value = "";
        clearBtn.style.display = "none";
        this.renderInitialState();
        this.input.focus();
      });
    }

    // Keyboard navigation (ESC to close, / to open)
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen()) {
        this.close();
      }
      if (e.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName) && !this.isOpen()) {
        e.preventDefault();
        this.open();
      }
    });

    // Input listening with debounce
    this.input.addEventListener("input", (e) => {
      const val = e.target.value.trim();
      clearBtn.style.display = val.length > 0 ? "block" : "none";

      clearTimeout(this.debounceTimer);
      if (val.length === 0) {
        this.renderInitialState();
        return;
      }
      this.debounceTimer = setTimeout(() => {
        this.performSearch(val);
      }, 180);
    });

    // Enter submits to products.html?search=...
    this.input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const query = this.input.value.trim();
        if (query) {
          window.location.href = `products.html?search=${encodeURIComponent(query)}`;
        }
      }
    });

    // Quick tag clicks
    this.overlay.querySelectorAll(".quick-tag").forEach(tag => {
      tag.addEventListener("click", () => {
        const query = tag.getAttribute("data-tag");
        this.input.value = query;
        clearBtn.style.display = "block";
        this.performSearch(query);
      });
    });
  },

  open() {
    this.overlay.classList.add("active");
    document.body.classList.add("search-modal-open");
    setTimeout(() => {
      this.input.focus();
    }, 100);
  },

  close() {
    this.overlay.classList.remove("active");
    document.body.classList.remove("search-modal-open");
  },

  isOpen() {
    return this.overlay && this.overlay.classList.contains("active");
  },

  renderInitialState() {
    this.resultsContainer.innerHTML = `
      <div class="search-initial-state">
        <p>Aramak istediğiniz ürün adını veya kategoriyi yazın.</p>
      </div>
    `;
  },

  performSearch(query) {
    const q = query.toLowerCase().trim();
    const products = getProducts();
    const matches = products.filter(p => {
      return p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        (p.badge && p.badge.toLowerCase().includes(q));
    });

    if (matches.length === 0) {
      this.resultsContainer.innerHTML = `
        <div class="search-empty-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#737D87" stroke-width="1.5">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
          <h4>"${query}" ile eşleşen ürün bulunamadı</h4>
          <p>Lütfen farklı bir arama terimi deneyin veya tüm kataloğumuzu inceleyin.</p>
          <a href="products.html" class="btn btn-secondary btn-sm" style="margin-top:12px;">Tüm Ürünleri Gör</a>
        </div>
      `;
      return;
    }

    let html = `
      <div class="search-results-summary">
        <span><strong>${matches.length}</strong> ürün bulundu:</span>
        <a href="products.html?search=${encodeURIComponent(query)}" class="search-view-all">Tüm sonuçları listele &rarr;</a>
      </div>
      <div class="search-items-list">
    `;

    matches.slice(0, 6).forEach(product => {
      html += `
        <a href="product-detail.html?id=${product.id}" class="search-item-card">
          <img src="${product.image}" alt="${product.name}" class="search-item-img" onerror="handleImageError(this, '${product.name}')">
          <div class="search-item-info">
            <span class="search-item-category">${product.category}</span>
            <h5 class="search-item-title">${product.name}</h5>
            <div class="search-item-price">
              <span class="price-current">${formatPrice(product.price)}</span>
              ${product.oldPrice ? `<span class="price-old">${formatPrice(product.oldPrice)}</span>` : ""}
            </div>
          </div>
          <span class="search-item-arrow">&rarr;</span>
        </a>
      `;
    });

    html += `</div>`;
    this.resultsContainer.innerHTML = html;
  }
};

window.SearchModal = SearchModal;

// Mobile Menu Navigation System
const MobileNav = {
  drawer: null,
  toggleBtn: null,
  backdrop: null,

  init() {
    this.drawer = document.getElementById("mobile-nav-drawer");
    this.toggleBtn = document.getElementById("mobile-nav-toggle");
    this.backdrop = document.getElementById("mobile-nav-backdrop");

    if (!this.drawer || !this.toggleBtn) return;

    this.toggleBtn.addEventListener("click", () => this.toggle());
    if (this.backdrop) {
      this.backdrop.addEventListener("click", () => this.close());
    }

    const closeBtn = document.getElementById("mobile-nav-close");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => this.close());
    }
  },

  toggle() {
    if (this.drawer.classList.contains("active")) {
      this.close();
    } else {
      this.open();
    }
  },

  open() {
    this.drawer.classList.add("active");
    if (this.backdrop) this.backdrop.classList.add("active");
    if (this.toggleBtn) this.toggleBtn.classList.add("open");
    document.body.classList.add("mobile-drawer-open");
  },

  close() {
    this.drawer.classList.remove("active");
    if (this.backdrop) this.backdrop.classList.remove("active");
    if (this.toggleBtn) this.toggleBtn.classList.remove("open");
    document.body.classList.remove("mobile-drawer-open");
  }
};

window.MobileNav = MobileNav;

// Header Scroll Observer
function initHeaderScroll() {
  const header = document.querySelector(".tomix-header");
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 25) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

// Global DOM Ready Handlers
document.addEventListener("DOMContentLoaded", () => {
  SearchModal.init();
  MobileNav.init();
  initHeaderScroll();

  // Update header counters on page load
  if (window.CartService) {
    const updateCartBadges = () => {
      const count = CartService.getTotalCount();
      document.querySelectorAll(".cart-counter-badge").forEach(badge => {
        badge.textContent = count;
        badge.style.display = count > 0 ? "flex" : "none";
      });
    };
    updateCartBadges();
    window.addEventListener("tomix:cart-updated", updateCartBadges);
  }

  if (window.FavoritesService) {
    const updateFavBadges = () => {
      const count = FavoritesService.getTotalCount();
      document.querySelectorAll(".fav-counter-badge").forEach(badge => {
        badge.textContent = count;
        badge.style.display = count > 0 ? "flex" : "none";
      });
    };
    updateFavBadges();
    window.addEventListener("tomix:favorites-updated", updateFavBadges);
  }

  // Handle Newsletter form demo submissions
  document.querySelectorAll(".newsletter-form").forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector("input[type='email']");
      if (input && input.value.trim()) {
        Toast.show({
          title: "Bülten Kaydı Başarılı",
          message: "TOMIX yeniliklerinden ve özel koleksiyonlardan ilk sizin haberiniz olacak.",
          type: "success"
        });
        input.value = "";
      }
    });
  });
});
