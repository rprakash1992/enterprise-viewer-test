import type { StateCreator } from "zustand";

export interface TwoDNote {
  id: string;
  title: string;
}

export interface ThreePointArcLengthSlice {
  threePointArcLengths: TwoDNote[];
  selectedThreePointArcLength: TwoDNote | null;

  setThreePointArcLengths: (items: TwoDNote[]) => void;
  addThreePointArcLength: () => void;
  selectThreePointArcLength: (item: TwoDNote | null) => void;
}

export const createThreePointArcLengthSlice: StateCreator<
  ThreePointArcLengthSlice,
  [["zustand/devtools", never]],
  [],
  ThreePointArcLengthSlice
> = (set) => {
  return {
    threePointArcLengths: [],
    selectedThreePointArcLength: null,

    setThreePointArcLengths: (val) => {
      set({ threePointArcLengths: val });
    },
    addThreePointArcLength: () => {
      set((state) => {
        const newThreePointArcLengthId = state.threePointArcLengths.length;
        const newThreePointArcLength = {
          id: String(newThreePointArcLengthId),
          title: `Item ${newThreePointArcLengthId}`,
        };
        return {
          threePointArcLengths: [
            ...state.threePointArcLengths,
            newThreePointArcLength,
          ],
        };
      });
    },
    selectThreePointArcLength: (val) => {
      set({ selectedThreePointArcLength: val });
    },
  };
};
