"use client";

import { create } from "zustand";

export interface UseSidebarStore {
  open: boolean;
  setOpen: (n: boolean) => void;
  toggleOpen: () => void;
}

export const useSidebarStore = create<UseSidebarStore>((set) => ({
  open: false,
  setOpen: (n) => set({ open: n }),
  toggleOpen: () => set((s) => ({ open: !s.open })),
}));
