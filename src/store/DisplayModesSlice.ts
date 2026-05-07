import type { StateCreator } from "zustand";
import { IconBoundingBox } from "../assets/icons/IconBoundingBox";
import { IconPoint } from "../assets/icons/IconPoint";
import { IconWireframe } from "../assets/icons/IconWireframe";
import { IconHiddenLine } from "../assets/icons/IconHiddenLine";
import IconShaded from "../assets/icons/IconShaded";
import { IconShadedMesh } from "../assets/icons/IconShadedMesh";
import { IconTransparent } from "../assets/icons/IconTransparent";
// import { Selection } from "../enums";
import { DEFAULT_DISPLAY_MODE } from "../constants";
import type { AssemblyTreeSlice, Node } from "./AssemblyTreeSlice";
import { setNodesAsDownloaded } from "../utils/productTree";

export type Selection = "all_parts" | "selected_parts" | "unselected_parts";

export interface DisplayModeItem {
  id: string;
  label: string;
  icon: any;
}

const allDisplayModesItems: DisplayModeItem[] = [
  {
    id: "bounding_box",
    label: "Bounding Box",
    icon: IconBoundingBox,
  },
  {
    id: "point",
    label: "Point",
    icon: IconPoint,
  },
  {
    id: "wireframe",
    label: "Wireframe",
    icon: IconWireframe,
  },
  {
    id: "hidden_line",
    label: "Hidden Line",
    icon: IconHiddenLine,
  },
  {
    id: "shaded",
    label: "Shaded",
    icon: IconShaded,
  },
  {
    id: "shaded_mesh",
    label: "Shaded Mesh",
    icon: IconShadedMesh,
  },
  {
    id: "transparent",
    label: "Transparent",
    icon: IconTransparent,
  },
];

export const calcDownloadSize = (
  displayModeAppliedTo: Selection | null,
  selectedDisplayModeId: string,
  checkedLeafNodes: Node[],
  uncheckedLeafNodes: Node[],
): number => {
  // if (displayModeAppliedTo === Selection.SELECTED_PARTS) {
  if (displayModeAppliedTo === "selected_parts") {
    return checkedLeafNodes.reduce(
      (acc, curr) =>
        acc +
        curr.availableModes.find((mode) => mode.id === selectedDisplayModeId)
          ?.size!,
      0,
    );
  } else if (displayModeAppliedTo === "unselected_parts") {
    return uncheckedLeafNodes.reduce(
      (acc, curr) =>
        acc +
        curr.availableModes.find((mode) => mode.id === selectedDisplayModeId)
          ?.size!,
      0,
    );
  } else if (displayModeAppliedTo === "all_parts") {
    const arr = Array.from(
      new Set([...checkedLeafNodes, ...uncheckedLeafNodes]),
    );
    return arr.reduce(
      (acc, curr) =>
        acc +
        curr.availableModes.find((mode) => mode.id === selectedDisplayModeId)
          ?.size!,
      0,
    );
  } else {
    return 0;
  }
};

export const findIsDisplayModeDownloaded = (
  displayModeId: string,
  displayModeAppliedTo: Selection | null,
  checkedLeafNodes: Node[],
  uncheckedLeafNodes: Node[],
): boolean => {
  if (displayModeId === DEFAULT_DISPLAY_MODE) {
    return true;
  } else if (displayModeAppliedTo === "selected_parts") {
    if (checkedLeafNodes.length === 0) return false;
    return checkedLeafNodes.every(
      (node) =>
        node?.availableModes?.find((mode) => mode.id === displayModeId)
          ?.isDownloaded,
    );
  } else if (displayModeAppliedTo === "unselected_parts") {
    if (uncheckedLeafNodes.length === 0) return false;
    return uncheckedLeafNodes.every(
      (node) =>
        node?.availableModes?.find((mode) => mode.id === displayModeId)
          ?.isDownloaded,
    );
  } else if (displayModeAppliedTo === "all_parts") {
    const arr = Array.from(
      new Set([...checkedLeafNodes, ...uncheckedLeafNodes]),
    );
    return arr.every(
      (node) =>
        node?.availableModes?.find((mode) => mode.id === displayModeId)
          ?.isDownloaded,
    );
  } else {
    return false;
  }
};

export const getIsDisplayModeDisabled = (
  item: DisplayModeItem,
  displayModeAppliedTo: Selection | null,
  checkedLeafNodes: Node[],
  uncheckedLeafNodes: Node[],
) => {
  if (item.id === DEFAULT_DISPLAY_MODE) {
    return false;
  } else if (displayModeAppliedTo === "selected_parts") {
    if (checkedLeafNodes.length === 0) return true;
    return checkedLeafNodes.some(
      (node) => !node?.availableModes?.map((mode) => mode.id).includes(item.id),
    );
  } else if (displayModeAppliedTo === "unselected_parts") {
    if (uncheckedLeafNodes.length === 0) return true;
    return uncheckedLeafNodes.some(
      (node) => !node?.availableModes?.map((mode) => mode.id).includes(item.id),
    );
  } else if (displayModeAppliedTo === "all_parts") {
    const arr = Array.from(
      new Set([...checkedLeafNodes, ...uncheckedLeafNodes]),
    );
    return arr.some(
      (node) => !node?.availableModes?.map((mode) => mode.id).includes(item.id),
    );
  } else {
    return true;
  }
};

export interface DisplayModesSlice {
  displayModesItems: DisplayModeItem[];
  displayModeAppliedTo: Selection | null;
  selectedDisplayModeId: string;
  appliedDisplayModeId: string | null;
  isDownloading: boolean;

  setDisplayModeItems: (items: DisplayModeItem[]) => void;
  setDisplayModeAppliedTo: (val: Selection | null) => void;
  selectDisplayMode: (val: string) => void;
  applyDisplayMode: (val: string | null) => void;
  setIsDownloading: (val: boolean) => void;
  handleDownloadDisplayModes: () => void;
}

export const createDisplayModesSlice: StateCreator<
  DisplayModesSlice & AssemblyTreeSlice,
  [["zustand/devtools", never]],
  [],
  DisplayModesSlice
> = (set, get) => {
  return {
    displayModesItems: allDisplayModesItems,
    displayModeAppliedTo: "selected_parts",
    selectedDisplayModeId: DEFAULT_DISPLAY_MODE,
    appliedDisplayModeId: null,
    isDownloading: false,

    setDisplayModeItems: (val) => {
      set({ displayModesItems: val });
    },
    setDisplayModeAppliedTo: (val) => {
      set({ displayModeAppliedTo: val });
    },
    selectDisplayMode: (val) => {
      set({ selectedDisplayModeId: val });
    },
    applyDisplayMode: (val) => {
      set({ appliedDisplayModeId: val });
    },
    setIsDownloading: (val) => {
      set({ isDownloading: val });
    },
    handleDownloadDisplayModes: async () => {
      const {
        setIsDownloading,
        selectedDisplayModeId,
        displayModeAppliedTo,
        checkedLeafNodes,
        uncheckedLeafNodes,
        productTree,
        setProductTree,
        setInitialProductTree,
        setCheckedLeafNodes,
        setUncheckedLeafNodes,
      } = get();

      setIsDownloading(true);
      setTimeout(() => {
        // let nodes: (string | number)[] = [];

        if (displayModeAppliedTo === "selected_parts") {
          const nodes = checkedLeafNodes.map((node) => node.id);
          const newProductTree = setNodesAsDownloaded(
            productTree,
            nodes,
            selectedDisplayModeId,
          );
          setProductTree(newProductTree);
          setInitialProductTree(newProductTree);
          setCheckedLeafNodes(
            checkedLeafNodes.map((node) => ({
              ...node,
              availableModes: node.availableModes.map((mode) =>
                mode.id === selectedDisplayModeId
                  ? { ...mode, isDownloaded: true }
                  : mode,
              ),
            })),
          );
        } else if (displayModeAppliedTo === "unselected_parts") {
          const nodes = uncheckedLeafNodes.map((node) => node.id);
          const newProductTree = setNodesAsDownloaded(
            productTree,
            nodes,
            selectedDisplayModeId,
          );
          setProductTree(newProductTree);
          setInitialProductTree(newProductTree);
          setUncheckedLeafNodes(
            uncheckedLeafNodes.map((node) => ({
              ...node,
              availableModes: node.availableModes.map((mode) =>
                mode.id === selectedDisplayModeId
                  ? { ...mode, isDownloaded: true }
                  : mode,
              ),
            })),
          );
        } else if (displayModeAppliedTo === "all_parts") {
          const arr = Array.from(
            new Set([...checkedLeafNodes, ...uncheckedLeafNodes]),
          );
          const nodes = arr.map((node) => node.id);
          const newProductTree = setNodesAsDownloaded(
            productTree,
            nodes,
            selectedDisplayModeId,
          );
          setProductTree(newProductTree);
          setInitialProductTree(newProductTree);
        }
        setIsDownloading(false);
      }, 1000);
    },
  };
};
