import { create } from "zustand";
import type { CartItem } from "./types";

type CartState = {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (item: CartItem) => void;
};

export const useCartStore = create<CartState>((set, get) => ({
    cart: [],
    addToCart: (item) => set({ cart: [...get().cart, item] }),
    removeFromCart: (item: CartItem) =>
        set({ cart: get().cart.filter((i) => i !== item) }),
}));
