import { create } from 'zustand';

type LoginState = {
  isLoginOpen: boolean;
  toggleLogin: () => void;
};

export const useLoginStore = create<LoginState>((set, get) => ({
  isLoginOpen: false,
  toggleLogin: () => set({ isLoginOpen: !get().isLoginOpen }),
}));
