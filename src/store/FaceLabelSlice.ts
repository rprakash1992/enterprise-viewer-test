import type { StateCreator } from "zustand";

export interface FaceLabel {
  id: string;
  title: string;
}

export interface FaceLabelSlice {
  faceLabels: FaceLabel[];
  selectedFaceLabel: FaceLabel | null;

  setFaceLabels: (items: FaceLabel[]) => void;
  addFaceLabel: () => void;
  deleteFaceLabel: (id: string) => void;
  selectFaceLabel: (val: FaceLabel | null) => void;
}

export const createFaceLabelSlice: StateCreator<
  FaceLabelSlice,
  [["zustand/devtools", never]],
  [],
  FaceLabelSlice
> = (set) => {
  return {
    faceLabels: [],
    selectedFaceLabel: null,

    setFaceLabels: (val) => {
      set({ faceLabels: val });
    },
    addFaceLabel: () => {
      set((state) => {
        const newFaceLabelId = state.faceLabels.length;
        const newFaceLabel = {
          id: String(newFaceLabelId),
          title: `Face Label ${newFaceLabelId}`,
        };
        return { faceLabels: [...state.faceLabels, newFaceLabel] };
      });
    },
    deleteFaceLabel: (slideId) => {
      set((state) => ({
        faceLabels: [
          ...state.faceLabels.filter((slide) => slide.id !== slideId),
        ],
      }));
    },
    selectFaceLabel: (val) => {
      set({ selectedFaceLabel: val });
    },
  };
};
