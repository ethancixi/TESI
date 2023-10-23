import { create } from "zustand";

export const useLogin = create((set) => ({
  isLoggedIn: true,
  changeIsLoggedIn: () => set((isLoggedIn) => ({ isLoggedIn: !isLoggedIn })),
}));
