import type { StateCreator } from "zustand";

export interface PointLabel {
  id: string;
  title: string;
}

export interface PointLabelSlice {
  pointLabels: PointLabel[];
  selectedPointLabel: PointLabel | null;

  setPointLabel: (items: PointLabel[]) => void;
  addPointLabel: () => void;
  deletePointLabel: (id: string) => void;
  selectPointLabel: (val: PointLabel | null) => void;
}

export const createPointLabelSlice: StateCreator<
  PointLabelSlice,
  [["zustand/devtools", never]],
  [],
  PointLabelSlice
> = (set) => {
  return {
    pointLabels: [],
    selectedPointLabel: null,

    setPointLabel: (val) => {
      set({ pointLabels: val });
    },
    addPointLabel: () => {
      set((state) => {
        const newPointLabelId = state.pointLabels.length;
        const newPointLabel = {
          id: String(newPointLabelId),
          title: `Point label ${newPointLabelId}`,
        };
        return { pointLabels: [...state.pointLabels, newPointLabel] };
      });
    },
    deletePointLabel: (slideId) => {
      set((state) => ({
        pointLabels: [
          ...state.pointLabels.filter((slide) => slide.id !== slideId),
        ],
      }));
    },
    selectPointLabel: (val) => {
      set({ selectedPointLabel: val });
    },
  };
};
