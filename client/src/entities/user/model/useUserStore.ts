import { create } from "zustand";

type UserState = {
    accessToken: string;
    isAuth: boolean;
    setAccessToken: (token: string) => void;
    setIsAuth: () => void;
};

export const useUser = create<UserState>((set, get) => ({
    accessToken: "",
    isAuth: false,
    setIsAuth: () => set({ isAuth: !get().isAuth }),
    setAccessToken: (token) => set({ accessToken: token }),
}));
