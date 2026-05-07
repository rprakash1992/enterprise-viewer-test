import type { StateCreator } from "zustand";

export type LabelType =
  | "twoDNote"
  | "threePointArcLength"
  | "pointLabel"
  | "pointToPoint"
  | "twoDPlot";

export interface LabelBase {
  id: string;
  title: string;
  bgColor: string;
  borderColor: string;
  bgImage: string;
  showBorder: boolean;
  showBg: boolean;
  visibility: boolean;
  checked: boolean;
  labelType: LabelType;
}

export interface TwoDNote extends LabelBase {
  autoFit: boolean;
}

export interface ThreePointArcLength extends LabelBase {
  autoFit: boolean;
}

export interface PointLabel extends LabelBase {
  autoFit: boolean;
}

export interface PointToPoint extends LabelBase {
  autoFit: boolean;
}

export interface TwoDPlot extends LabelBase {
  xAxisTitle: string;
  yAxisTitle: string;
  xAxisValue: string;
  yAxisValue: string;
}

export type Label =
  | TwoDNote
  | ThreePointArcLength
  | PointLabel
  | PointToPoint
  | TwoDPlot;

export interface LabelSlice {
  labels: Label[];
  labelType: LabelType;

  selectAllLabels: (labelType?: LabelType) => void;
  setLabels: (items: Label[]) => void;
  addLabel: (newNote: Label) => void;
  selectLabel: (labelId: string) => void;
  updateLabel: (item: Label) => void;
  deleteLabel: (labelType?: LabelType) => void;
}

export const createLabelSlice: StateCreator<
  LabelSlice,
  [["zustand/devtools", never]],
  [],
  LabelSlice
> = (set) => {
  return {
    labels: [],
    labelType: "twoDNote",

    selectAllLabels: (labelType) => {
      set((state) => {
        let newL = state.labels;
        if (labelType) {
          const l1 = state.labels.filter(
            (label) => label.labelType === labelType,
          );
          const allChecked = l1.every((label) => label.checked);
          newL = state.labels.map((label) => ({
            ...label,
            checked:
              label.labelType === labelType
                ? allChecked
                  ? false
                  : true
                : false,
          }));
        } else {
          const allChecked = state.labels.every((label) => label.checked);
          newL = state.labels.map((label) => ({
            ...label,
            checked: allChecked ? false : true,
          }));
        }

        return {
          labels: newL,
        };
      });
    },
    setLabels: (val) => {
      set({ labels: val });
    },
    addLabel: (newNote) => {
      set((state) => ({ labels: [...state.labels, newNote] }));
    },
    selectLabel: (noteId) => {
      set((state) => ({
        labels: state.labels.map((label) =>
          label.id === noteId ? { ...label, checked: !label.checked } : label,
        ),
      }));
    },
    updateLabel: (label) => {
      set((state) => ({
        labels: state.labels.map((n) => (n.id === label.id ? label : n)),
      }));
    },
    deleteLabel: (labelType) => {
      set((state) => {
        let newL = state.labels;
        if (labelType) {
          newL = state.labels.filter((label) =>
            label.labelType === labelType ? !label.checked : true,
          );
        } else {
          newL = state.labels.filter((label) => !label.checked);
        }

        return {
          labels: newL,
        };
      });
    },
  };
};
