import { create } from "zustand";
import { Song } from "@/interfaces/song";


interface State {
    isPlaying: boolean;
    currentMusic: { song: Song; songs: Song[] };
    setIsPlaying: (isPlaying: boolean) => void;
    setCurrentMusic: (currentMusic: { song: Song; songs: Song[] }) => void;
}

export const usePlayerStore = create<State>((set) => ({
  isPlaying: false,
  currentMusic: { song: {} as Song, songs: [] },
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentMusic: (currentMusic) => set({ currentMusic }),
}))