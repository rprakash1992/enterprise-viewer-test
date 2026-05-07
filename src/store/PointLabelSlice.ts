import type { StateCreator } from "zustand";

export interface PointLabel {
  id: string;
  title: string;
  bgColor: string;
  borderColor: string;
  bgImage: string;
  showBorder: boolean;
  showBg: boolean;
  autoFit: boolean;
  visibility: boolean;
  checked: boolean;
}

export interface PointLabelSlice {
  pointLabels: PointLabel[];

  selectAllPointLabels: () => void;
  setPointLabels: (items: PointLabel[]) => void;
  addPointLabel: (newLabel: PointLabel) => void;
  selectPointLabel: (id: string) => void;
  updatePointLabel: (item: PointLabel) => void;
  deletePointLabel: () => void;
}

export const createPointLabelSlice: StateCreator<
  PointLabelSlice,
  [["zustand/devtools", never]],
  [],
  PointLabelSlice
> = (set) => {
  return {
    pointLabels: [],

    selectAllPointLabels: () => {
      set((state) => {
        const allChecked = state.pointLabels.every((label) => label.checked);
        return {
          pointLabels: state.pointLabels.map((label) => ({
            ...label,
            checked: allChecked ? false : true,
          })),
        };
      });
    },
    setPointLabels: (val) => {
      set({ pointLabels: val });
    },
    addPointLabel: (newNote) => {
      set((state) => ({ pointLabels: [...state.pointLabels, newNote] }));
    },
    selectPointLabel: (id) => {
      set((state) => ({
        pointLabels: state.pointLabels.map((label) =>
          label.id === id ? { ...label, checked: !label.checked } : label,
        ),
      }));
    },
    updatePointLabel: (item) => {
      set((state) => ({
        pointLabels: state.pointLabels.map((label) =>
          label.id === item.id ? item : label,
        ),
      }));
    },
    deletePointLabel: () => {
      set((state) => ({
        pointLabels: state.pointLabels.filter((label) => !label.checked),
      }));
    },
  };
};
