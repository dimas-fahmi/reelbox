import { create } from "zustand";
import { MovieResult, SearchResult, TVShowResult } from "../types/tmdb";

export interface UseSearchStore {
  data?: SearchResult<MovieResult[] & TVShowResult[]>;
  setData: (
    n: SearchResult<MovieResult[] & TVShowResult[]> | undefined
  ) => void;
}

export const useSearchStore = create<UseSearchStore>((set) => ({
  data: undefined,
  setData: (n) => set({ data: n }),
}));
