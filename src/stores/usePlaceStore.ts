import create from 'zustand';

interface ModalState {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export const useStore = create<ModalState>((set) => ({
  isModalOpen: false,
  setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
  isMenuOpen: false,
  setIsMenuOpen: (isOpen) => set({ isMenuOpen: isOpen }),
}));
