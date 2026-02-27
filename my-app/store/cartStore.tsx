import { create } from "zustand"
import { Product } from "@/types/product"

export interface CartItem extends Product {
  cartItemId: string
}

interface CartState {
  cart: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (cartItemId: string) => void
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],

  addToCart: (product) =>
    set((state) => ({
      cart: [
        ...state.cart,
        {
          ...product,
          cartItemId: crypto.randomUUID(), // ✅ unique
        },
      ],
    })),

  removeFromCart: (cartItemId) =>
    set((state) => ({
      cart: state.cart.filter(
        (item) => item.cartItemId !== cartItemId
      ),
    })),
}))