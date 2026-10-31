/**
 * TOMIX - Premium E-Commerce Platform
 * Shopping Cart Management System (localStorage backed)
 */

const CART_STORAGE_KEY = "tomix_cart_items";
const FREE_SHIPPING_THRESHOLD = 350.00;
const STANDARD_SHIPPING_FEE = 39.90;

const CartService = {
  // Get all items in cart
  getItems() {
    try {
      const data = localStorage.getItem(CART_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Cart read error:", e);
      return [];
    }
  },

  // Save items to localStorage
  saveItems(items) {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
      this.dispatchUpdateEvent();
    } catch (e) {
      console.error("Cart save error:", e);
    }
  },

  // Add item to cart
  addItem(productId, quantity = 1) {
    const product = getProductById(productId);
    if (!product) return false;

    const items = this.getItems();
    const existingIndex = items.findIndex(item => item.id === productId);

    if (existingIndex > -1) {
      items[existingIndex].quantity += quantity;
    } else {
      items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        quantity: quantity
      });
    }

    this.saveItems(items);
    
    // Dispatch toast notification
    if (window.Toast) {
      window.Toast.show({
        title: "Sepete Eklendi",
        message: `${product.name} (${quantity} adet) sepetinize eklendi.`,
        type: "success"
      });
    }

    return true;
  },

  // Remove item completely
  removeItem(productId) {
    let items = this.getItems();
    const product = getProductById(productId);
    items = items.filter(item => item.id !== productId);
    this.saveItems(items);

    if (window.Toast && product) {
      window.Toast.show({
        title: "Ürün Çıkarıldı",
        message: `${product.name} sepetinizden kaldırıldı.`,
        type: "info"
      });
    }
  },

  // Update quantity (+1, -1, or direct number)
  updateQuantity(productId, quantity) {
    let items = this.getItems();
    const index = items.findIndex(item => item.id === productId);

    if (index > -1) {
      if (quantity <= 0) {
        this.removeItem(productId);
        return;
      }
      items[index].quantity = quantity;
      this.saveItems(items);
    }
  },

  // Clear all items
  clearCart() {
    localStorage.removeItem(CART_STORAGE_KEY);
    this.dispatchUpdateEvent();
  },

  // Total count of distinct or sum of items
  getTotalCount() {
    const items = this.getItems();
    return items.reduce((sum, item) => sum + item.quantity, 0);
  },

  // Subtotal calculation
  getSubtotal() {
    const items = this.getItems();
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  },

  // Shipping calculation
  getShippingFee() {
    const subtotal = this.getSubtotal();
    if (subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD) {
      return 0;
    }
    return STANDARD_SHIPPING_FEE;
  },

  // Grand total
  getTotal() {
    return this.getSubtotal() + this.getShippingFee();
  },

  // Remaining amount for free shipping
  getRemainingForFreeShipping() {
    const subtotal = this.getSubtotal();
    if (subtotal >= FREE_SHIPPING_THRESHOLD) return 0;
    return FREE_SHIPPING_THRESHOLD - subtotal;
  },

  // Trigger event for UI reactivity
  dispatchUpdateEvent() {
    window.dispatchEvent(new CustomEvent("tomix:cart-updated", {
      detail: {
        count: this.getTotalCount(),
        subtotal: this.getSubtotal(),
        total: this.getTotal()
      }
    }));
  }
};

// Make available globally
window.CartService = CartService;
