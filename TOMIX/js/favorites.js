/**
 * TOMIX - Premium E-Commerce Platform
 * Favorites Management System (localStorage backed)
 */

const FAVORITES_STORAGE_KEY = "tomix_favorite_items";

const FavoritesService = {
  // Get all favorite product IDs
  getFavoriteIds() {
    try {
      const data = localStorage.getItem(FAVORITES_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Favorites read error:", e);
      return [];
    }
  },

  // Save favorite IDs
  saveFavoriteIds(ids) {
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(ids));
      this.dispatchUpdateEvent();
    } catch (e) {
      console.error("Favorites save error:", e);
    }
  },

  // Check if an ID is favorited
  isFavorite(productId) {
    const ids = this.getFavoriteIds();
    return ids.includes(productId);
  },

  // Toggle favorite status
  toggleFavorite(productId) {
    let ids = this.getFavoriteIds();
    const product = getProductById(productId);
    const exists = ids.includes(productId);

    if (exists) {
      ids = ids.filter(id => id !== productId);
      this.saveFavoriteIds(ids);
      if (window.Toast && product) {
        window.Toast.show({
          title: "Favorilerden Çıkarıldı",
          message: `${product.name} favoriler listenizden kaldırıldı.`,
          type: "info"
        });
      }
      return false; // now not favorite
    } else {
      ids.push(productId);
      this.saveFavoriteIds(ids);
      if (window.Toast && product) {
        window.Toast.show({
          title: "Favorilere Eklendi",
          message: `${product.name} favorilerinize kaydedildi.`,
          type: "success"
        });
      }
      return true; // now favorite
    }
  },

  // Remove from favorites
  removeFavorite(productId) {
    let ids = this.getFavoriteIds();
    ids = ids.filter(id => id !== productId);
    this.saveFavoriteIds(ids);
  },

  // Get full product objects that are in favorites
  getFavoriteProducts() {
    const ids = this.getFavoriteIds();
    return ids.map(id => getProductById(id)).filter(p => p !== null);
  },

  // Get total count of favorites
  getTotalCount() {
    return this.getFavoriteIds().length;
  },

  // Dispatch update event
  dispatchUpdateEvent() {
    window.dispatchEvent(new CustomEvent("tomix:favorites-updated", {
      detail: {
        count: this.getTotalCount(),
        items: this.getFavoriteIds()
      }
    }));
  }
};

window.FavoritesService = FavoritesService;
