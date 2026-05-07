import type { MRT_RowSelectionState } from "mantine-react-table";
import type { StateCreator } from "zustand";

interface AvailableDisplayMode {
  id: string;
  title: string;
  size: number;
  isDownloaded: boolean;
}

export interface Node {
  id: number | string;
  key: number | string;
  pid: number | string;
  title: string;
  availableModes: AvailableDisplayMode[];
  subRows: Node[];
  status?: number;
}

export type NodesTree = Node[];

// export const initialProductTree: NodesTree = [
//   {
//     id: "23WL_3p6L_PSU_4x4_850RE_1stGear_InterLoads_PO_13July21_v2022",
//     key: "23WL_3p6L_PSU_4x4_850RE_1stGear_InterLoads_PO_13July21_v2022",
//     pid: "",
//     title: "23WL_3p6L_PSU_4x4_850RE_1stGear_InterLoads_PO_13July21_v2022",
//     availableModes: [],
//     children: [
//       {
//         id: "geometry",
//         key: "geometry",
//         pid: "23WL_3p6L_PSU_4x4_850RE_1stGear_InterLoads_PO_13July21_v2022",
//         title: "Geometry",
//         availableModes: [],
//         children: [
//           {
//             id: "element_sets",
//             key: "element_sets",
//             pid: "geometry",
//             title: "Element Sets",
//             availableModes: [],
//             children: [
//               {
//                 id: "m10_bolt_tcase",
//                 key: "m10_bolt_tcase",
//                 pid: "element_sets",
//                 title: "M10_BOLT_TCASE",
//                 availableModes: [
//                   {
//                     id: "bounding_box",
//                     title: "Bounding Box",
//                     size: 10,
//                     isDownloaded: true,
//                   },
//                   {
//                     id: "wireframe",
//                     title: "Wireframe",
//                     size: 22.82,
//                     isDownloaded: false,
//                   },
//                   {
//                     id: "hidden_line",
//                     title: "Hidden Line",
//                     size: 32.31,
//                     isDownloaded: false,
//                   },
//                   {
//                     id: "shaded",
//                     title: "Shaded",
//                     size: 14.23,
//                     isDownloaded: false,
//                   },
//                   {
//                     id: "shaded_mesh",
//                     title: "Shaded Mesh",
//                     size: 32.31,
//                     isDownloaded: false,
//                   },
//                 ],
//                 children: [],
//               },
//               {
//                 id: "trans_case",
//                 key: "trans_case",
//                 pid: "element_sets",
//                 title: "TRANS_CASE",
//                 availableModes: [
//                   {
//                     id: "bounding_box",
//                     title: "Bounding Box",
//                     size: 10,
//                     isDownloaded: true,
//                   },
//                   {
//                     id: "wireframe",
//                     title: "Wireframe",
//                     size: 22.82,
//                     isDownloaded: false,
//                   },
//                   {
//                     id: "hidden_line",
//                     title: "Hidden Line",
//                     size: 32.31,
//                     isDownloaded: false,
//                   },
//                   {
//                     id: "shaded_mesh",
//                     title: "Shaded Mesh",
//                     size: 32.31,
//                     isDownloaded: false,
//                   },
//                 ],
//                 children: [],
//               },
//               {
//                 id: "tcase1",
//                 key: "tcase1",
//                 pid: "element_sets",
//                 title: "TCASE1",
//                 availableModes: [
//                   {
//                     id: "bounding_box",
//                     title: "Bounding Box",
//                     size: 10,
//                     isDownloaded: true,
//                   },
//                   {
//                     id: "point",
//                     title: "Point",
//                     size: 22.82,
//                     isDownloaded: false,
//                   },
//                   {
//                     id: "wireframe",
//                     title: "Wireframe",
//                     size: 22.82,
//                     isDownloaded: false,
//                   },
//                   {
//                     id: "shaded_mesh",
//                     title: "Shaded Mesh",
//                     size: 32.31,
//                     isDownloaded: false,
//                   },
//                 ],
//                 children: [],
//               },
//               {
//                 id: "m10_adapter_bolt",
//                 key: "m10_adapter_bolt",
//                 pid: "element_sets",
//                 title: "M10_ADAPTER_BOLTsdhbvjhsbvjsbfvjbsfvjh",
//                 availableModes: [
//                   {
//                     id: "bounding_box",
//                     title: "Bounding Box",
//                     size: 10,
//                     isDownloaded: true,
//                   },
//                   {
//                     id: "point",
//                     title: "Point",
//                     size: 22.82,
//                     isDownloaded: false,
//                   },
//                   {
//                     id: "wireframe",
//                     title: "Wireframe",
//                     size: 22.82,
//                     isDownloaded: false,
//                   },
//                   {
//                     id: "hidden_line",
//                     title: "Hidden Line",
//                     size: 32.31,
//                     isDownloaded: false,
//                   },
//                 ],
//                 children: [],
//               },
//               {
//                 id: "m10_bolt_front",
//                 key: "m10_bolt_front",
//                 pid: "element_sets",
//                 title: "M10_BOLT_FRONT",
//                 availableModes: [
//                   {
//                     id: "bounding_box",
//                     title: "Bounding Box",
//                     size: 10,
//                     isDownloaded: true,
//                   },
//                   {
//                     id: "wireframe",
//                     title: "Wireframe",
//                     size: 22.82,
//                     isDownloaded: false,
//                   },
//                   {
//                     id: "hidden_line",
//                     title: "Hidden Line",
//                     size: 32.31,
//                     isDownloaded: false,
//                   },
//                   {
//                     id: "shaded_mesh",
//                     title: "Shaded Mesh",
//                     size: 32.31,
//                     isDownloaded: false,
//                   },
//                 ],
//                 children: [],
//               },
//               // ...Array.from(Array(100)).map((i, j) => ({
//               //   id: j,
//               //   key: j,
//               //   pid: "element_sets",
//               //   title: "M10_BOLT_FRONT",
//               //   availableModes: ["wireframe", "hidden_line", "shaded_mesh"],
//               //   children: [],
//               // })),
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ];

export const initialProductTree: NodesTree = [
  {
    id: "23WL_3p6L_PSU_4x4_850RE_1stGear_InterLoads_PO_13July21_v2022",
    key: "23WL_3p6L_PSU_4x4_850RE_1stGear_InterLoads_PO_13July21_v2022",
    pid: "",
    title: "23WL_3p6L_PSU_4x4_850RE_1stGear_InterLoads_PO_13July21_v2022",
    availableModes: [],
    subRows: [
      {
        id: "geometry",
        key: "geometry",
        pid: "23WL_3p6L_PSU_4x4_850RE_1stGear_InterLoads_PO_13July21_v2022",
        title: "Geometry",
        availableModes: [],
        subRows: [
          {
            id: "element_sets",
            key: "element_sets",
            pid: "geometry",
            title: "Element Sets",
            availableModes: [],
            subRows: [
              {
                id: "m10_bolt_tcase",
                key: "m10_bolt_tcase",
                pid: "element_sets",
                title: "M10_BOLT_TCASE",
                availableModes: [
                  {
                    id: "bounding_box",
                    title: "Bounding Box",
                    size: 10,
                    isDownloaded: true,
                  },
                  {
                    id: "wireframe",
                    title: "Wireframe",
                    size: 22.82,
                    isDownloaded: false,
                  },
                  {
                    id: "hidden_line",
                    title: "Hidden Line",
                    size: 32.31,
                    isDownloaded: false,
                  },
                  {
                    id: "shaded",
                    title: "Shaded",
                    size: 14.23,
                    isDownloaded: false,
                  },
                  {
                    id: "shaded_mesh",
                    title: "Shaded Mesh",
                    size: 32.31,
                    isDownloaded: false,
                  },
                ],
                subRows: [],
              },
              {
                id: "trans_case",
                key: "trans_case",
                pid: "element_sets",
                title: "TRANS_CASE",
                availableModes: [
                  {
                    id: "bounding_box",
                    title: "Bounding Box",
                    size: 10,
                    isDownloaded: true,
                  },
                  {
                    id: "wireframe",
                    title: "Wireframe",
                    size: 22.82,
                    isDownloaded: false,
                  },
                  {
                    id: "hidden_line",
                    title: "Hidden Line",
                    size: 32.31,
                    isDownloaded: false,
                  },
                  {
                    id: "shaded_mesh",
                    title: "Shaded Mesh",
                    size: 32.31,
                    isDownloaded: false,
                  },
                ],
                subRows: [],
              },
              {
                id: "tcase1",
                key: "tcase1",
                pid: "element_sets",
                title: "TCASE1",
                availableModes: [
                  {
                    id: "bounding_box",
                    title: "Bounding Box",
                    size: 10,
                    isDownloaded: true,
                  },
                  {
                    id: "point",
                    title: "Point",
                    size: 22.82,
                    isDownloaded: false,
                  },
                  {
                    id: "wireframe",
                    title: "Wireframe",
                    size: 22.82,
                    isDownloaded: false,
                  },
                  {
                    id: "shaded_mesh",
                    title: "Shaded Mesh",
                    size: 32.31,
                    isDownloaded: false,
                  },
                ],
                subRows: [],
              },
              {
                id: "m10_adapter_bolt",
                key: "m10_adapter_bolt",
                pid: "element_sets",
                title: "M10_ADAPTER_BOLTsdhbvjhsbvjsbfvjbsfvjh",
                availableModes: [
                  {
                    id: "bounding_box",
                    title: "Bounding Box",
                    size: 10,
                    isDownloaded: true,
                  },
                  {
                    id: "point",
                    title: "Point",
                    size: 22.82,
                    isDownloaded: false,
                  },
                  {
                    id: "wireframe",
                    title: "Wireframe",
                    size: 22.82,
                    isDownloaded: false,
                  },
                  {
                    id: "hidden_line",
                    title: "Hidden Line",
                    size: 32.31,
                    isDownloaded: false,
                  },
                ],
                subRows: [],
              },
              {
                id: "m10_bolt_front",
                key: "m10_bolt_front",
                pid: "element_sets",
                title: "M10_BOLT_FRONT",
                availableModes: [
                  {
                    id: "bounding_box",
                    title: "Bounding Box",
                    size: 10,
                    isDownloaded: true,
                  },
                  {
                    id: "wireframe",
                    title: "Wireframe",
                    size: 22.82,
                    isDownloaded: false,
                  },
                  {
                    id: "hidden_line",
                    title: "Hidden Line",
                    size: 32.31,
                    isDownloaded: false,
                  },
                  {
                    id: "shaded_mesh",
                    title: "Shaded Mesh",
                    size: 32.31,
                    isDownloaded: false,
                  },
                ],
                subRows: [],
              },
              // ...Array.from(Array(100)).map((i, j) => ({
              //   id: j,
              //   key: j,
              //   pid: "element_sets",
              //   title: "M10_BOLT_FRONT",
              //   availableModes: [{
              //       id: "shaded_mesh",
              //       title: "Shaded Mesh",
              //       size: 32.31,
              //       isDownloaded: false,
              //     },],
              //   subRows: [],
              // })),
            ],
          },
        ],
      },
    ],
  },
];

export interface AssemblyTreeSlice {
  initialProductTree: NodesTree;
  productTree: NodesTree;
  rowSelection: MRT_RowSelectionState;
  checkedLeafNodes: Node[];
  uncheckedLeafNodes: Node[];

  setInitialProductTree: (val: NodesTree) => void;
  setProductTree: (val: NodesTree) => void;
  setRowSelection: (selection: MRT_RowSelectionState) => void;
  setCheckedLeafNodes: (nodes: Node[]) => void;
  setUncheckedLeafNodes: (nodes: Node[]) => void;
}

export const createAssemblyTreeSlice: StateCreator<
  AssemblyTreeSlice,
  [["zustand/devtools", never]],
  [],
  AssemblyTreeSlice
> = (set) => {
  return {
    initialProductTree,
    productTree: initialProductTree,
    rowSelection: {},
    checkedLeafNodes: [],
    uncheckedLeafNodes: [],

    setInitialProductTree: (val) => {
      set({ initialProductTree: val });
    },
    setProductTree: (val) => {
      set({ productTree: val });
    },
    setRowSelection: (selection) => {
      set({ rowSelection: selection });
    },
    setCheckedLeafNodes: (nodes) => {
      set({ checkedLeafNodes: nodes });
    },
    setUncheckedLeafNodes: (nodes) => {
      set({ uncheckedLeafNodes: nodes });
    },
  };
};
