import { create } from "zustand";

type UserState = {
    accessToken: string;
    isAuth: boolean;
    setAccessToken: (token: string) => void;
    setIsAuth: (boolean: boolean) => void;
};

export const useUser = create<UserState>((set, get) => ({
    accessToken: "",
    isAuth: false,
    setIsAuth: (boolean) => set({ isAuth: boolean }),
    setAccessToken: (token) => set({ accessToken: token }),
}));
