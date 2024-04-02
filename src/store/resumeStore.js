import { create } from "zustand";

export const useResumeStore = create((set) => ({
  page: 1,
  increasepage: () =>
    set((state) => ({
      page: state.page + 1,
    })),
  decreasepage: () =>
    set((state) => ({
      page: state.page <= 1 ? state.page : state.page - 1,
    })),
}));
