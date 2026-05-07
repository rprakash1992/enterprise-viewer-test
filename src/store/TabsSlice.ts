import type { StateCreator } from "zustand";
import IconMenu from "../assets/icons/IconMenu";
import IconDisplayModes from "../assets/icons/IconDisplayModes";
import IconAssemblyTree from "../assets/icons/IconAssemblyTree";
import IconColorMapEdit from "../assets/icons/IconColorMapEdit";
import IconClipPlaneList from "../assets/icons/IconClipPlaneList";
import IconSlides from "../assets/icons/IconSlides";
import IconGuides from "../assets/icons/IconGuides";
import IconAbout from "../assets/icons/IconAbout";
import IconLabels from "../assets/icons/IconLabels";

export type MenuItemType = "permanent" | "temporary";

export interface TabItem {
  id: string;
  label: string;
  icon: any;
  type?: MenuItemType;
}

export const permanentTabItemsObj: any = {
  menus: {
    label: "Menus",
    icon: IconMenu,
  },
  display_modes: {
    label: "Display Modes",
    icon: IconDisplayModes,
  },
  assembly_tree: {
    label: "Assembly Tree",
    icon: IconAssemblyTree,
  },
  color_map_edit: {
    label: "Color Map Edit",
    icon: IconColorMapEdit,
  },
  labels: {
    label: "Labels",
    icon: IconLabels,
  },
  clip_planes_list: {
    label: "Clip Planes List",
    icon: IconClipPlaneList,
  },
  "3d_slides": {
    label: "3D Slides",
    icon: IconSlides,
  },
  guides: {
    label: "Guides",
    icon: IconGuides,
  },
  about: {
    label: "About",
    icon: IconAbout,
  },
};

const allTabItems: TabItem[] = [
  {
    id: "menus",
    label: "Menus",
    icon: IconMenu,
  },
  {
    id: "display_modes",
    label: "Display Modes",
    icon: IconDisplayModes,
  },
  {
    id: "assembly_tree",
    label: "Assembly Tree",
    icon: IconAssemblyTree,
  },
  {
    id: "color_map_edit",
    label: "Color Map Edit",
    icon: IconColorMapEdit,
  },
  {
    id: "labels",
    label: "Labels",
    icon: IconLabels,
  },
  {
    id: "clip_planes_list",
    label: "Clip Planes List",
    icon: IconClipPlaneList,
  },
  {
    id: "3d_slides",
    label: "3D Slides",
    icon: IconSlides,
  },
  {
    id: "guides",
    label: "Guides",
    icon: IconGuides,
  },
  {
    id: "about",
    label: "About",
    icon: IconAbout,
  },
];

export interface TabSlice {
  top: number;
  tabItems: TabItem[];

  setTop: (val: number) => void;
  setTabItems: (tabItems: TabItem[]) => void;
  insertTabItem: (menuItem: TabItem) => void;
  filterTempTabItems: () => void;
}

export const createTabSlice: StateCreator<
  TabSlice,
  [["zustand/devtools", never]],
  [],
  TabSlice
> = (set) => {
  return {
    top: 0,
    tabItems: allTabItems,

    setTop: (val) => {
      set({ top: val });
    },
    setTabItems: (val) => {
      set({ tabItems: val });
    },
    insertTabItem: (newItem) => {
      set((state) => ({ tabItems: [...state.tabItems, newItem] }));
    },
    filterTempTabItems: () => {
      set((state) => ({
        tabItems: state.tabItems.filter((item) => item.type !== "temporary"),
      }));
    },
  };
};
