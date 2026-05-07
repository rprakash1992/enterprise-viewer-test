import type { StateCreator } from "zustand";
import type { Selection } from "./DisplayModesSlice";

export interface DisplayModeItem {
  id: string;
  label: string;
  icon: any;
}

export interface GeometryTransformSlice {
  geometryTransformAppliedTo: Selection | null;

  setGeometryTransformAppliedTo: (val: Selection | null) => void;
}

export const createGeometryTransformSlice: StateCreator<
  GeometryTransformSlice,
  [["zustand/devtools", never]],
  [],
  GeometryTransformSlice
> = (set) => {
  return {
    geometryTransformAppliedTo: "selected_parts",

    setGeometryTransformAppliedTo: (val) => {
      set({ geometryTransformAppliedTo: val });
    },
  };
};
