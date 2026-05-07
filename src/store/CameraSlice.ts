import type { StateCreator } from "zustand";

export type CameraType = "orthographic" | "perspective"

export interface CameraAngle {
  id: string;
  title: string;
}

const allCameraAngles: CameraAngle[] = [
  {
    id: "front",
    title: "Front",
  },
  {
    id: "back",
    title: "Back",
  },
  {
    id: "left",
    title: "Left",
  },
  {
    id: "right",
    title: "Right",
  },
  {
    id: "top",
    title: "Top",
  },
  {
    id: "bottom",
    title: "Bottom",
  },
  {
    id: "isometric",
    title: "Isometric",
  },
];

export interface CameraSlice {
  cameraAngles: CameraAngle[];
  selectedCameraAngle: CameraAngle;
  selectedCameraType: CameraType;

  selectCameraAngle: (val: CameraAngle) => void;
  selectCameraType: (val: CameraType) => void;
}

export const createCameraSlice: StateCreator<
  CameraSlice,
  [["zustand/devtools", never]],
  [],
  CameraSlice
> = (set) => {
  return {
    cameraAngles: allCameraAngles,
    selectedCameraAngle: {
      id: "front",
      title: "Front",
    },
    selectedCameraType: "orthographic",

    selectCameraAngle: (val) => {
      set({ selectedCameraAngle: val });
    },
    selectCameraType: (val) => {
      set({ selectedCameraType: val });
    },
  };
};
