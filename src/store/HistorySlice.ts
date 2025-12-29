import type { StateCreator } from "zustand";

export interface HistorySlice {
  historyAppliedTo: string | null;

  setHistoryAppliedTo: (val: string | null) => void;
  undo: () => void;
  redo: () => void;
}

export const createHistorySlice: StateCreator<
  HistorySlice,
  [["zustand/devtools", never]],
  [],
  HistorySlice
> = (set) => {
  return {
    historyAppliedTo: null,

    setHistoryAppliedTo: (val) => {
      set({ historyAppliedTo: val });
    },
    undo: () => {
      set({});
    },
    redo: () => {
      set({});
    },
  };
};
