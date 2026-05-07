import type { StateCreator } from "zustand";

export interface PointToPoint {
  id: string;
  title: string;
}

export interface PointToPointSlice {
  pointToPoints: PointToPoint[];
  selectedPointToPoint: PointToPoint | null;

  setPointToPoints: (items: PointToPoint[]) => void;
  addPointToPoint: () => void;
  deletePointToPoint: (id: string) => void;
  selectPointToPoint: (val: PointToPoint | null) => void;
}

export const createPointToPointSlice: StateCreator<
  PointToPointSlice,
  [["zustand/devtools", never]],
  [],
  PointToPointSlice
> = (set) => {
  return {
    pointToPoints: [],
    selectedPointToPoint: null,

    setPointToPoints: (val) => {
      set({ pointToPoints: val });
    },
    addPointToPoint: () => {
      set((state) => {
        const newPointToPointId = state.pointToPoints.length;
        const newPointToPoint = {
          id: String(newPointToPointId),
          title: `Point to Point ${newPointToPointId}`,
        };
        return { pointToPoints: [...state.pointToPoints, newPointToPoint] };
      });
    },
    deletePointToPoint: (slideId) => {
      set((state) => ({
        pointToPoints: [
          ...state.pointToPoints.filter((slide) => slide.id !== slideId),
        ],
      }));
    },
    selectPointToPoint: (val) => {
      set({ selectedPointToPoint: val });
    },
  };
};
