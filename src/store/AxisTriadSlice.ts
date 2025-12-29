import type { StateCreator } from "zustand";

export interface AxisTriadPosition {
  id: string;
  title: string;
}

const allAxisTriadPositions: AxisTriadPosition[] = [
  {
    id: "top_left",
    title: "Top Left",
  },
  {
    id: "top_center",
    title: "Top Center",
  },
  {
    id: "top_right",
    title: "Top Right",
  },
  {
    id: "middle_left",
    title: "Middle Left",
  },
  {
    id: "middle_right",
    title: "Middle Right",
  },
  {
    id: "bottom_left",
    title: "Bottom Left",
  },
  {
    id: "bottom_center",
    title: "Bottom Center",
  },
  {
    id: "bottom_right",
    title: "Bottom Right",
  },
  {
    id: "custom",
    title: "Custom",
  },
];

export interface AxisTriadPositionSlice {
  axisTriadPositions: AxisTriadPosition[];
  selectedAxisTriadPosition: AxisTriadPosition;

  setAxisTriadPositions: (items: AxisTriadPosition[]) => void;
  selectAxisTriadPosition: (item: AxisTriadPosition) => void;
}

export const createAxisTriadPositionSlice: StateCreator<
  AxisTriadPositionSlice,
  [["zustand/devtools", never]],
  [],
  AxisTriadPositionSlice
> = (set) => {
  return {
    axisTriadPositions: allAxisTriadPositions,
    selectedAxisTriadPosition: {
      id: "top_left",
      title: "Top Left",
    },

    setAxisTriadPositions: (val) => {
      set({ axisTriadPositions: val });
    },
    selectAxisTriadPosition: (val) => {
      set({ selectedAxisTriadPosition: val });
    },
  };
};
