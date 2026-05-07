import type { StateCreator } from "zustand";
import { getRandomId } from "../utils/getRandomId";

export interface ClipPlane {
  id: string;
  title: string;
  isApplied: boolean;
}

export interface ClipPlaneSlice {
  clipPlanes: ClipPlane[];

  addClipPlane: () => void;
  setClipPlaneApplied: (id: string, val: boolean) => void;
}

export const createClipPlaneSlice: StateCreator<
  ClipPlaneSlice,
  [["zustand/devtools", never]],
  [],
  ClipPlaneSlice
> = (set) => {
  return {
    clipPlanes: [],

    addClipPlane: () => {
      set((state) => {
        const planes = state.clipPlanes;
        const newClipPlane = {
          id: getRandomId(),
          title: `Plane ${planes.length + 1}`,
          isApplied: true,
        };

        return {
          clipPlanes: [...state.clipPlanes, newClipPlane],
        };
      });
    },
    setClipPlaneApplied: (id, val) => {
      set((state) => ({
        clipPlanes: state.clipPlanes.map((plane) =>
          plane.id === id ? { ...plane, isApplied: val } : plane,
        ),
      }));
    },
  };
};
