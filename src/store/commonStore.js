import { create } from "zustand";

export const useCommonStore = create((set) => ({
  province: { title: "همه استان ها", province_id: 0 },
  category: { title: "همه مشاغل", category_id: 0 },
  search: "",
  setCategory: (category_id, title) =>
    set({ category: { title, id: category_id } }),
  setProvince: (province_id, title) =>
    set({ province: { title, id: province_id } }),
  setSearch: (search) => set({ search }),
}));
