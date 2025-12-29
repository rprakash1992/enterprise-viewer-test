import type { StateCreator } from "zustand";

export interface Step {
  id: string;
  title: string;
}

const allSteps: Step[] = [
  {
    id: "noname",
    title: "noname",
  },
  {
    id: "l1m1",
    title: "L1M1",
  },
  {
    id: "l2m1",
    title: "L2M1",
  },
  {
    id: "l3m1",
    title: "L3M1",
  },
  {
    id: "l4m0",
    title: "L4M0",
  },
];

export interface StepsSlice {
  steps: Step[];
  appliedStep: Step;

  setSteps: (items: Step[]) => void;
  applyStep: (val: Step) => void;
}

export const createStepsSlice: StateCreator<
  StepsSlice,
  [["zustand/devtools", never]],
  [],
  StepsSlice
> = (set) => {
  return {
    steps: allSteps,
    appliedStep: {
      id: "l1m1",
      title: "L1M1",
    },

    setSteps: (val) => {
      set({ steps: val });
    },
    applyStep: (val) => {
      set({ appliedStep: val });
    },
  };
};
