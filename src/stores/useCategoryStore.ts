import { create } from 'zustand';

interface CategoryStore {
  selectedCategories: string[];
  toggleCategory: (categoryName: string) => void;
  resetCategories: () => void;
}

export const useCategoryStore = create<CategoryStore>((set) => ({
  selectedCategories: ['식당'],
  toggleCategory: (categoryName) =>
    set((state) => {
      const isSelected = state.selectedCategories.includes(categoryName);
      return {
        selectedCategories: isSelected
          ? state.selectedCategories.filter((name) => name !== categoryName)
          : [...state.selectedCategories, categoryName],
      };
    }),
  resetCategories: () =>
    set({
      selectedCategories: ['식당'],
    }),
}));
