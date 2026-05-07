import type { StateCreator } from "zustand";

export interface PointToPoint {
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

export interface PointToPointSlice {
  pointToPoints: PointToPoint[];

  selectAllPointToPoints: () => void;
  setPointToPoints: (items: PointToPoint[]) => void;
  addPointToPoint: (newItem: PointToPoint) => void;
  selectPointToPoint: (id: string) => void;
  updatePointToPoint: (item: PointToPoint) => void;
  deletePointToPoint: () => void;
}

export const createPointToPointSlice: StateCreator<
  PointToPointSlice,
  [["zustand/devtools", never]],
  [],
  PointToPointSlice
> = (set) => {
  return {
    pointToPoints: [],

    selectAllPointToPoints: () => {
      set((state) => {
        const allChecked = state.pointToPoints.every((item) => item.checked);
        return {
          pointToPoints: state.pointToPoints.map((item) => ({
            ...item,
            checked: allChecked ? false : true,
          })),
        };
      });
    },
    setPointToPoints: (val) => {
      set({ pointToPoints: val });
    },
    addPointToPoint: (newItem) => {
      set((state) => ({ pointToPoints: [...state.pointToPoints, newItem] }));
    },
    selectPointToPoint: (id) => {
      set((state) => ({
        pointToPoints: state.pointToPoints.map((item) =>
          item.id === id ? { ...item, checked: !item.checked } : item,
        ),
      }));
    },
    updatePointToPoint: (item) => {
      set((state) => ({
        pointToPoints: state.pointToPoints.map((p) =>
          p.id === item.id ? item : p,
        ),
      }));
    },
    deletePointToPoint: () => {
      set((state) => ({
        pointToPoints: state.pointToPoints.filter((item) => !item.checked),
      }));
    },
  };
};
