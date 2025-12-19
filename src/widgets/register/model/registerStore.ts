import { create } from 'zustand';

type RegisterState = {
  isLoginOpen: boolean;
  isRegisterOpen: boolean;
  toggleLogin: () => void;
  toggleRegister: () => void;
};

export const useRegisterStore = create<RegisterState>((set, get) => ({
  isLoginOpen: false,
  isRegisterOpen: false,
  toggleLogin: () => set({ isLoginOpen: !get().isLoginOpen }),
  toggleRegister: () => set({ isRegisterOpen: !get().isRegisterOpen }),
}));
