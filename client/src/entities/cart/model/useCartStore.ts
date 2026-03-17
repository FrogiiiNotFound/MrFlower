import { create } from "zustand";
import type { CartItem } from "./types";

type CartState = {
    cart: CartItem[];
    addToCart: (product: CartItem) => void;
    increaseAmount: (id: string) => void;
    decreaseAmount: (id: string) => void;
    removeFromCart: (id: string) => void;
};

export const useCartStore = create<CartState>((set, get) => ({
    cart: [],
    addToCart: (item) => set({ cart: [...get().cart, item] }),
    increaseAmount: (id) =>
        set({
            cart: get().cart.map((item) =>
                item.id === id ? { ...item, amount: item.amount + 1 } : item,
            ),
        }),
    decreaseAmount: (id) =>
        set({
            cart: get().cart.map((item) =>
                item.id === id ? { ...item, amount: item.amount - 1 } : item,
            ),
        }),
    removeFromCart: (id: string) =>
        set({
            cart: get().cart.filter((item) => item.id !== id),
        }),
}));
