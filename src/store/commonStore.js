import { create } from "zustand";

export const useCommonStore = create((set) => ({
  province: "همه استان ها",
  category: "همه مشاغل",
  setProvince: (newProvince) => set({ province: newProvince }),
  setCategory: (newCategory) => set({ category: newCategory }),
}));
