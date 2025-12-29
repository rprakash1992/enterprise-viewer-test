import type { StateCreator } from "zustand";

export interface EigenVector {
  id: string;
  title: string;
}

export interface VectorAnimationSlice {
  eigenVectors: EigenVector[];
  selectedEigenVector: EigenVector | null;

  setEigenVectors: (items: EigenVector[]) => void;
  addEigenVector: () => void;
  deleteEigenVector: (id: string) => void;
  selectEigenVector: (val: EigenVector | null) => void;
}

export const createVectorAnimationSlice: StateCreator<
  VectorAnimationSlice,
  [["zustand/devtools", never]],
  [],
  VectorAnimationSlice
> = (set) => {
  return {
    eigenVectors: [],
    selectedEigenVector: null,

    setEigenVectors: (val) => {
      set({ eigenVectors: val });
    },
    addEigenVector: () => {
      set((state) => {
        const newEigenVectorId = state.eigenVectors.length;
        const newEigenVector = {
          id: String(newEigenVectorId),
          title: `Eigen Vector ${newEigenVectorId}`,
        };
        return { eigenVectors: [...state.eigenVectors, newEigenVector] };
      });
    },
    deleteEigenVector: (slideId) => {
      set((state) => ({
        eigenVectors: [
          ...state.eigenVectors.filter((slide) => slide.id !== slideId),
        ],
      }));
    },
    selectEigenVector: (val) => {
      set({ selectedEigenVector: val });
    },
  };
};
