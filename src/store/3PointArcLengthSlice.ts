import type { StateCreator } from "zustand";

export interface ThreePointArcLength {
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

export interface ThreePointArcLengthSlice {
  threePointArcLengths: ThreePointArcLength[];

  selectAllThreePointArcLengths: () => void;
  setThreePointArcLengths: (items: ThreePointArcLength[]) => void;
  addThreePointArcLength: (newArc: ThreePointArcLength) => void;
  selectThreePointArcLength: (arcId: string) => void;
  updateThreePointArcLength: (item: ThreePointArcLength) => void;
  deleteThreePointArcLength: () => void;
}

export const createThreePointArcLengthSlice: StateCreator<
  ThreePointArcLengthSlice,
  [["zustand/devtools", never]],
  [],
  ThreePointArcLengthSlice
> = (set) => {
  return {
    threePointArcLengths: [],

    selectAllThreePointArcLengths: () => {
      set((state) => {
        const allChecked = state.threePointArcLengths.every(
          (arc) => arc.checked,
        );

        return {
          threePointArcLengths: state.threePointArcLengths.map((arc) => ({
            ...arc,
            checked: allChecked ? false : true,
          })),
        };
      });
    },
    setThreePointArcLengths: (val) => {
      set({ threePointArcLengths: val });
    },
    addThreePointArcLength: (newArc) => {
      set((state) => ({
        threePointArcLengths: [...state.threePointArcLengths, newArc],
      }));
    },
    selectThreePointArcLength: (arcId) => {
      set((state) => ({
        threePointArcLengths: state.threePointArcLengths.map((arc) =>
          arc.id === arcId ? { ...arc, checked: !arc.checked } : arc,
        ),
      }));
    },
    updateThreePointArcLength: (arc) => {
      set((state) => ({
        threePointArcLengths: state.threePointArcLengths.map((n) =>
          n.id === arc.id ? arc : n,
        ),
      }));
    },
    deleteThreePointArcLength: () => {
      set((state) => ({
        threePointArcLengths: state.threePointArcLengths.filter(
          (arc) => !arc.checked,
        ),
      }));
    },
  };
};
