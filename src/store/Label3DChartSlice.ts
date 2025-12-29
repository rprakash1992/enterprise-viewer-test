import type { StateCreator } from "zustand";

export interface Label3DChart {
  id: string;
  title: string;
}

export interface Label3DChartSlice {
  label3DCharts: Label3DChart[];
  selectedLabel3DChart: Label3DChart | null;

  setLabel3DCharts: (items: Label3DChart[]) => void;
  addLabel3DChart: () => void;
  selectLabel3DChart: (item: Label3DChart | null) => void;
}

export const createLabel3DChartSlice: StateCreator<
  Label3DChartSlice,
  [["zustand/devtools", never]],
  [],
  Label3DChartSlice
> = (set) => {
  return {
    label3DCharts: [],
    selectedLabel3DChart: null,

    setLabel3DCharts: (val) => {
      set({ label3DCharts: val });
    },
    addLabel3DChart: () => {
      set((state) => {
        const newLabel3DChartId = state.label3DCharts.length;
        const newLabel3DChart = {
          id: String(newLabel3DChartId),
          title: `Chart ${newLabel3DChartId}`,
        };
        return { label3DCharts: [...state.label3DCharts, newLabel3DChart] };
      });
    },
    selectLabel3DChart: (val) => {
      set({ selectedLabel3DChart: val });
    },
  };
};
