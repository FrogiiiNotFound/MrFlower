import { create } from "zustand";
import type { CartItem } from "./types";

type CartState = {
    cart: CartItem[];
    addToCart: (product: CartItem) => void;
    removeFromCart: (product: CartItem) => void;
};

export const useCartStore = create<CartState>((set, get) => ({
    cart: [],
    addToCart: (item) => set({ cart: [...get().cart, item] }),
    removeFromCart: (item) =>
        set({ cart: get().cart.filter((i) => i !== item) }),
}));
