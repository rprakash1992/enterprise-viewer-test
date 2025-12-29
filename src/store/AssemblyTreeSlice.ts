import type { StateCreator } from "zustand";

export interface NormalNode {
  id: number | string;
  name: string;
}

export interface GroupNode {
  id: number | string;
  name: string;
  items: Array<NormalNode | GroupNode>;
}

export type NodesTree = Array<NormalNode | GroupNode>;

export const initialProductTree2 = [
  {
    id: 1,
    name: "Table",
    items: [
      { id: 3, name: "Bar Table" },
      { id: 4, name: "Dining" },
      { id: 5, name: "Coffee Table" },
    ],
  },
  {
    id: 2,
    name: "Chairs",
    items: [
      {
        id: 6,
        name: "High Chair",
        items: [{ id: 11, name: "Foldable" }],
      },
      { id: 7, name: "Bar Stool" },
      {
        id: 8,
        name: "Office Chairs",
        items: [
          {
            id: 9,
            name: "Executive",
          },
          { id: 10, name: "Balance" },
        ],
      },
    ],
  },
];

export const initialProductTree: NodesTree = [
  {
    id: "23WL_3p6L_PSU_4x4_850RE_1stGear_InterLoads_PO_13July21_v2022",
    name: "23WL_3p6L_PSU_4x4_850RE",
    items: [
      {
        id: "geometry",
        name: "Geometry",
        items: [
          {
            id: "element_sets",
            name: "Element Sets",
            items: [
              {
                id: "m10_bolt_tcase",
                name: "M10_BOLT_TCASE",
              },
              {
                id: "trans_case",
                name: "TRANS_CASE",
              },
              {
                id: "tcase1",
                name: "TCASE1",
              },
              {
                id: "m10_adapter_bolt",
                name: "M10_ADAPTER_BOLT",
              },
              {
                id: "m10_bolt_front",
                name: "M10_BOLT_FRONT",
              },
            ],
          },
        ],
      },
    ],
  },
];

export interface AssemblyTreeSlice {
  productTree: NodesTree;

  setProductTree: (val: NodesTree) => void;
  handleClickOne: () => void;
  handleClickTwo: () => void;
}

export const createAssemblyTreeSlice: StateCreator<
  AssemblyTreeSlice,
  [["zustand/devtools", never]],
  [],
  AssemblyTreeSlice
> = (set) => {
  return {
    productTree: initialProductTree,

    setProductTree: (val) => {
      set({ productTree: val });
    },
    handleClickOne: () => {
      set({});
    },
    handleClickTwo: () => {
      set({});
    },
  };
};
