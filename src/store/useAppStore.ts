'use client';

import { create } from 'zustand';

interface AppState {
  locale: string;
  theme: 'light' | 'dark';
  isMenuOpen: boolean;
  setLocale: (locale: string) => void;
  setTheme: (theme: 'light' | 'dark') => void;
  toggleMenu: () => void;
  closeMenu: () => void;
}

const useAppStore = create<AppState>((set) => ({
  locale: 'zh',
  theme: 'light',
  isMenuOpen: false,
  setLocale: (locale) => set({ locale }),
  setTheme: (theme) => set({ theme }),
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
}));

export default useAppStore; 