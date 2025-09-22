import { create } from "zustand";

export interface Embed {
  embedTitle: string;
  embedSource: string;
}

export interface WatchStore {
  // Main Embed URL
  mainEmbedURL: string;
  setMainEmbedURL: (n: string) => void;

  // Season State
  activeSeason: number;
  setActiveSeason: (n: number) => void;

  // Active Episode
  activeEpisode: number;
  setActiveEpisode: (n: number) => void;

  // Embed State
  embed: Embed | null;
  setEmbed: (n: Embed | null) => void;

  // Reset
  reset: () => void;
}

export const useWatchStore = create<WatchStore>((set) => ({
  // Main Embed URL
  mainEmbedURL: "",
  setMainEmbedURL: (n) => set({ mainEmbedURL: n }),

  // Season State
  activeSeason: 1,
  setActiveSeason: (n) => set({ activeSeason: n }),

  // Episode State
  activeEpisode: 1,
  setActiveEpisode: (n) => set({ activeEpisode: n }),

  //  Embed State
  embed: null,
  setEmbed: (n) => set({ embed: n }),

  // Reset Handler
  reset: () => set({ activeSeason: 1, activeEpisode: 1, embed: null }),
}));
