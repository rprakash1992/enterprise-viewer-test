import type { StateCreator } from "zustand";

export interface TwoDPlot {
  id: string;
  title: string;
}

export interface TwoDPlotsSlice {
  twoDPlots: TwoDPlot[];
  selectedTwoDPlot: TwoDPlot | null;

  setTwoDPlots: (items: TwoDPlot[]) => void;
  addTwoDPlot: () => void;
  selectTwoDPlot: (item: TwoDPlot | null) => void;
}

export const createTwoDPlotsSlice: StateCreator<
  TwoDPlotsSlice,
  [["zustand/devtools", never]],
  [],
  TwoDPlotsSlice
> = (set) => {
  return {
    twoDPlots: [],
    selectedTwoDPlot: null,

    setTwoDPlots: (val) => {
      set({ twoDPlots: val });
    },
    addTwoDPlot: () => {
      set((state) => {
        const newPlotId = state.twoDPlots.length;
        const newPlot = {
          id: String(newPlotId),
          title: `Plot ${newPlotId}`,
        };
        return { twoDPlots: [...state.twoDPlots, newPlot] };
      });
    },
    selectTwoDPlot: (val) => {
      set({ selectedTwoDPlot: val });
    },
  };
};
