import type { StateCreator } from "zustand";

export interface BackgroundSlice {
  selectedBgColor: string;
  selectedBgImage: string;

  setBgColor: (val: string) => void;
  setBgImage: (val: string) => void;
}

export const createBackgroundSlice: StateCreator<
  BackgroundSlice,
  [["zustand/devtools", never]],
  [],
  BackgroundSlice
> = (set) => {
  return {
    selectedBgColor: "#fff",
    selectedBgImage: "",

    setBgColor: (val) => {
      set({ selectedBgColor: val });
    },
    setBgImage: (val) => {
      set({ selectedBgImage: val });
    },
  };
};
