import type { StateCreator } from "zustand";

export interface NormalNode {
  id: string;
  name: string;
  type: "normal";
  checked: boolean;
  isRoot?: boolean;
}

export interface GroupNode {
  id: string;
  name: string;
  type: "group";
  isRoot?: boolean;
  checked: boolean;
  children: Array<NormalNode | GroupNode>;
}

export type NodesTree = Array<NormalNode | GroupNode>;

const data2: NodesTree = [
  {
    id: "1",
    name: "One",
    type: "group" as "group",
    checked: false,
    children: [
      {
        id: "2",
        name: "Two",
        type: "group" as "group",
        checked: false,
        children: [
          {
            id: "3",
            name: "Three",
            type: "normal" as "normal",
            checked: false,
          },
          {
            id: "4",
            name: "Four",
            type: "normal" as "normal",
            checked: false,
          },
        ],
      },
      {
        id: "5",
        name: "Five",
        type: "group" as "group",
        checked: false,
        children: [
          {
            id: "6",
            name: "Six",
            type: "group" as "group",
            checked: false,
            children: [
              {
                id: "7",
                name: "Seven",
                type: "normal" as "normal",
                checked: false,
              },
            ],
          },
          {
            id: "8",
            name: "Eight",
            type: "normal" as "normal",
            checked: false,
          },
        ],
      },
    ],
  },
];

export const initialProductTree: NodesTree = [
  {
    id: "23WL_3p6L_PSU_4x4_850RE_1stGear_InterLoads_PO_13July21_v2022",
    name: "23WL_3p6L_PSU_4x4_850RE",
    checked: false,
    type: "group",
    children: [
      {
        id: "geometry",
        name: "Geometry",
        type: "group" as "group",
        checked: false,
        children: [
          {
            id: "element_sets",
            name: "Element Sets",
            type: "group" as "group",
            checked: false,
            children: [
              {
                id: "m10_bolt_tcase",
                name: "M10_BOLT_TCASE",
                type: "normal" as "normal",
                checked: false,
              },
              {
                id: "trans_case",
                name: "TRANS_CASE",
                type: "normal" as "normal",
                checked: false,
              },
              {
                id: "tcase1",
                name: "TCASE1",
                type: "normal" as "normal",
                checked: false,
              },
              {
                id: "m10_adapter_bolt",
                name: "M10_ADAPTER_BOLT",
                type: "normal" as "normal",
                checked: false,
              },
              {
                id: "m10_bolt_front",
                name: "M10_BOLT_FRONT",
                type: "normal" as "normal",
                checked: false,
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
