import { create } from 'zustand';

type RegisterState = {
  isRegisterOpen: boolean;
  toggleRegister: () => void;
};

export const useRegisterStore = create<RegisterState>((set, get) => ({
  isRegisterOpen: false,
  toggleRegister: () => set({ isRegisterOpen: !get().isRegisterOpen }),
}));
