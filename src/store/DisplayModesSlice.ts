import type { StateCreator } from "zustand";
import { IconBoundingBox } from "../assets/icons/IconBoundingBox";
import { IconPoint } from "../assets/icons/IconPoint";
import { IconWireframe } from "../assets/icons/IconWireframe";
import { IconHiddenLine } from "../assets/icons/IconHiddenLine";
import IconShaded from "../assets/icons/IconShaded";
import { IconShadedMesh } from "../assets/icons/IconShadedMesh";
import { IconTransparent } from "../assets/icons/IconTransparent";

export interface DisplayModeItem {
  id: string;
  label: string;
  icon: any;
  size: number;
}

const allDisplayModesItems: DisplayModeItem[] = [
  {
    id: "bounding_box",
    label: "Bounding Box",
    icon: IconBoundingBox,
    size: 10,
  },
  {
    id: "point",
    label: "Point",
    icon: IconPoint,
    size: 14.23,
  },
  {
    id: "wireframe",
    label: "Wireframe",
    icon: IconWireframe,
    size: 22.82,
  },
  {
    id: "hidden-line",
    label: "Hidden Line",
    icon: IconHiddenLine,
    size: 32.31,
  },
  {
    id: "shaded",
    label: "Shaded",
    icon: IconShaded,
    size: 14.23,
  },
  {
    id: "shaded_mesh",
    label: "Shaded Mesh",
    icon: IconShadedMesh,
    size: 32.31,
  },
  {
    id: "transparent",
    label: "Transparent",
    icon: IconTransparent,
    size: 14.23,
  },
];

export interface DisplayModesSlice {
  displayModesItems: DisplayModeItem[];
  displayModeAppliedTo: string | null;
  selectedDisplayMode: DisplayModeItem | null;
  appliedDisplayModes: string[];
  downloadedDisplayModes: string[];

  setDisplayModeItems: (items: DisplayModeItem[]) => void;
  setDisplayModeAppliedTo: (val: string | null) => void;
  selectDisplayMode: (val: DisplayModeItem | null) => void;
  setAppliedDisplayModes: (modes: string[]) => void;
  setDownloadedDisplayModes: (modes: string[]) => void;
  applyDisplayMode: (itemId: string) => void;
  handleDownloadAndShow: () => void;
}

export const createDisplayModesSlice: StateCreator<
  DisplayModesSlice,
  [["zustand/devtools", never]],
  [],
  DisplayModesSlice
> = (set) => {
  return {
    displayModesItems: allDisplayModesItems,
    displayModeAppliedTo: null,
    selectedDisplayMode: null,
    appliedDisplayModes: ["bounding_box"],
    downloadedDisplayModes: ["bounding_box"],

    setDisplayModeItems: (val) => {
      set({ displayModesItems: val });
    },
    setDisplayModeAppliedTo: (val) => {
      set({ displayModeAppliedTo: val });
    },
    selectDisplayMode: (val) => {
      set({ selectedDisplayMode: val });
    },
    setAppliedDisplayModes: (val) => {
      set({ appliedDisplayModes: val });
    },
    setDownloadedDisplayModes: (val) => {
      set({ downloadedDisplayModes: val });
    },
    applyDisplayMode: (itemId) => {
      set((state) => ({
        appliedDisplayModes: [...state.appliedDisplayModes, itemId],
      }));
    },
    handleDownloadAndShow: () => {
      set({});
    },
  };
};
