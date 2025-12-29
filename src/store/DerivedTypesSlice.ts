import type { StateCreator } from "zustand";

export interface DerivedTypeItem {
  id: string;
  title: string;
  items?: DerivedTypeItem[];
}

// export type DerivedType = DerivedTypeItem[];

const allDerivedTypes: DerivedTypeItem[] = [
  {
    id: "scalers",
    title: "Scaler",
    items: [
      {
        id: "Scaler",
        title: "Scaler",
      },
    ],
  },
  {
    id: "vectors",
    title: "Vectors",
    items: [
      {
        id: "x",
        title: "X",
      },
      {
        id: "y",
        title: "Y",
      },
      {
        id: "z",
        title: "Z",
      },
      {
        id: "magnitude",
        title: "Magnitude",
      },
    ],
  },
  {
    id: "6dof",
    title: "6DoF",
    items: [
      {
        id: "transationalX",
        title: "Transational X",
      },
      {
        id: "transationalY",
        title: "Transational Y",
      },
      {
        id: "transationalZ",
        title: "Transational Z",
      },
      {
        id: "transational-magnitude",
        title: "Transational Magnitude",
      },
      {
        id: "rotationalX",
        title: "Rotational X",
      },
      {
        id: "rotationalY",
        title: "Rotational Y",
      },
      {
        id: "rotationalZ",
        title: "Rotational Z",
      },
      {
        id: "rotational-magnitude",
        title: "Rotational Magnitude",
      },
    ],
  },
  {
    id: "stress-tensor",
    title: "Stress Tensor",
    items: [
      {
        id: "xx",
        title: "XX",
      },
      {
        id: "yy",
        title: "YY",
      },
      {
        id: "zz",
        title: "ZZ",
      },
      {
        id: "xy",
        title: "XY",
      },
      {
        id: "yz",
        title: "YZ",
      },
      {
        id: "zy",
        title: "ZX",
      },
      {
        id: "von-mises-stress",
        title: "Von Mises Stress",
      },
    ],
  },
];

export interface DerivedTypesSlice {
  derivedTypes: DerivedTypeItem[];
  appliedDerivedType: DerivedTypeItem;

  setDerivedTypes: (items: DerivedTypeItem[]) => void;
  applyDerivedType: (val: DerivedTypeItem) => void;
}

export const createDerivedTypesSlice: StateCreator<
  DerivedTypesSlice,
  [["zustand/devtools", never]],
  [],
  DerivedTypesSlice
> = (set) => {
  return {
    derivedTypes: allDerivedTypes,
    appliedDerivedType: {
      id: "rotationalX",
      title: "Rotational X",
    },

    setDerivedTypes: (val) => {
      set({ derivedTypes: val });
    },
    applyDerivedType: (val) => {
      set({ appliedDerivedType: val });
    },
  };
};
