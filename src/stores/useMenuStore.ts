import { create } from 'zustand';

interface MenuStore {
  isMenuOpen: boolean;
  isModalOpen: boolean;
  activateMenu: () => void;
  deactivateMenu: () => void;
  toggleMenu: () => void;
  openModal: () => void;
  closeModal: () => void;
}

export const useMenuStore = create<MenuStore>((set) => ({
  isMenuOpen: false,
  isModalOpen: false,
  activateMenu: () => set({ isMenuOpen: true }),
  deactivateMenu: () => set({ isMenuOpen: false }),
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  openModal: () => set({ isMenuOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));
