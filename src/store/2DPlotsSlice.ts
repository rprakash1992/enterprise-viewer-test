import type { StateCreator } from "zustand";

export interface TwoDPlot {
  id: string;
  title: string;
  xAxisTitle: string;
  yAxisTitle: string;
  xAxisValue: string;
  yAxisValue: string;
  bgColor: string;
  borderColor: string;
  bgImage: string;
  showBorder: boolean;
  showBg: boolean;
  visibility: boolean;
  checked: boolean;
}

export interface TwoDPlotsSlice {
  twoDPlots: TwoDPlot[];

  selectAllTwoDPlots: () => void;
  setTwoDPlots: (items: TwoDPlot[]) => void;
  addTwoDPlot: (newPlot: TwoDPlot) => void;
  selectTwoDPlot: (plotId: string) => void;
  updateTwoDPlot: (item: TwoDPlot) => void;
  deleteTwoDPlot: () => void;
}

export const createTwoDPlotsSlice: StateCreator<
  TwoDPlotsSlice,
  [["zustand/devtools", never]],
  [],
  TwoDPlotsSlice
> = (set) => {
  return {
    twoDPlots: [],

    selectAllTwoDPlots: () => {
      set((state) => {
        const allChecked = state.twoDPlots.every((note) => note.checked);

        return {
          twoDPlots: state.twoDPlots.map((n) => ({
            ...n,
            checked: allChecked ? false : true,
          })),
        };
      });
    },
    setTwoDPlots: (val) => {
      set({ twoDPlots: val });
    },
    addTwoDPlot: (newPlot) => {
      set((state) => ({ twoDPlots: [...state.twoDPlots, newPlot] }));
    },
    selectTwoDPlot: (plotId) => {
      set((state) => ({
        twoDPlots: state.twoDPlots.map((note) =>
          note.id === plotId ? { ...note, checked: !note.checked } : note,
        ),
      }));
    },
    updateTwoDPlot: (note) => {
      set((state) => ({
        twoDPlots: state.twoDPlots.map((n) => (n.id === note.id ? note : n)),
      }));
    },
    deleteTwoDPlot: () => {
      set((state) => ({
        twoDPlots: state.twoDPlots.filter((note) => !note.checked),
      }));
    },
  };
};
