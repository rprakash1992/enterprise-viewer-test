import type { StateCreator } from "zustand";

export interface FaceLabel {
  id: string;
  title: string;
  bgColor: string;
  borderColor: string;
  bgImage: string;
  showBorder: boolean;
  showBg: boolean;
  autoFit: boolean;
  checked: boolean;
}

export interface FaceLabelSlice {
  faceLabels: FaceLabel[];

  setFaceLabels: (items: FaceLabel[]) => void;
  addFaceLabel: (val: FaceLabel) => void;
  updateFaceLabel: (val: FaceLabel) => void;
  deleteFaceLabel: () => void;
  selectFaceLabel: (noteId: string) => void;
}

export const createFaceLabelSlice: StateCreator<
  FaceLabelSlice,
  [["zustand/devtools", never]],
  [],
  FaceLabelSlice
> = (set) => {
  return {
    faceLabels: [],

    setFaceLabels: (val) => {
      set({ faceLabels: val });
    },
    addFaceLabel: (faceLabel) => {
      set((state) => ({ faceLabels: [...state.faceLabels, faceLabel] }));
    },
    updateFaceLabel: (note) => {
      set((state) => ({
        faceLabels: state.faceLabels.map((n) => (n.id === note.id ? note : n)),
      }));
    },
    selectFaceLabel: (labellId) => {
      set((state) => ({
        faceLabels: state.faceLabels.map((label) =>
          label.id === labellId ? { ...label, checked: !label.checked } : label,
        ),
      }));
    },
    deleteFaceLabel: () => {
      set((state) => ({
        faceLabels: state.faceLabels.filter((label) => !label.checked),
      }));
    },
  };
};
