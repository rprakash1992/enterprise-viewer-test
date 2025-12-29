import type { StateCreator } from "zustand";

export interface Transient {
  id: string;
  title: string;
}

export interface TransientSlice {
  transients: Transient[];
  selectedTransient: Transient | null;

  setTransients: (items: Transient[]) => void;
  addTransient: () => void;
  deleteTransient: (id: string) => void;
  selectTransient: (val: Transient | null) => void;
}

export const createTransientSlice: StateCreator<
  TransientSlice,
  [["zustand/devtools", never]],
  [],
  TransientSlice
> = (set) => {
  return {
    transients: [],
    selectedTransient: null,

    setTransients: (val) => {
      set({ transients: val });
    },
    addTransient: () => {
      set((state) => {
        const newTransientId = state.transients.length;
        const newTransient = {
          id: String(newTransientId),
          title: `Transient ${newTransientId}`,
        };
        return { transients: [...state.transients, newTransient] };
      });
    },
    deleteTransient: (slideId) => {
      set((state) => ({
        transients: [
          ...state.transients.filter((slide) => slide.id !== slideId),
        ],
      }));
    },
    selectTransient: (val) => {
      set({ selectedTransient: val });
    },
  };
};
