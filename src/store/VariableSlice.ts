import type { StateCreator } from "zustand";

export interface Variable {
  id: string;
  title: string;
}

const allVariables: Variable[] = [
  {
    id: "contact_pressure",
    title: "Contact Pressure",
  },
  {
    id: "stress_von_mises",
    title: "Stress - VonMises",
  },
  {
    id: "stress_max_principal",
    title: "Stress Maximum Principal",
  },
  {
    id: "stress_min_principal",
    title: "Stress Minimum Principal",
  },
  {
    id: "displacement",
    title: "Displacement",
  },
  {
    id: "1/damage",
    title: "1/Damage",
  },
  {
    id: "stress_ampl",
    title: "Stress Apml.",
  },
  {
    id: "mean_stress",
    title: "Mean Stress",
  },
];

export interface VariableSlice {
  variables: Variable[];
  appliedVariable: Variable;

  setVariables: (items: Variable[]) => void;
  applyVariable: (val: Variable) => void;
}

export const createVariableSlice: StateCreator<
  VariableSlice,
  [["zustand/devtools", never]],
  [],
  VariableSlice
> = (set) => {
  return {
    variables: allVariables,
    appliedVariable: {
      id: "displacement",
      title: "Displacement",
    },

    setVariables: (val) => {
      set({ variables: val });
    },
    applyVariable: (val) => {
      set({ appliedVariable: val });
    },
  };
};
