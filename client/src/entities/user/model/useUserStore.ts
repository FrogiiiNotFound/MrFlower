import { create } from "zustand";

type UserState = {
    isAuth: boolean;
};

export const useUser = create<UserState>((set, get) => ({
    isAuth: false,
    setIsAuth: () => set({ isAuth: !get().isAuth }),
}));
