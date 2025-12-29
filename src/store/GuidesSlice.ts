import type { StateCreator } from "zustand";

export interface GuideItem {
  id: string;
  title: string;
}

const allGuidesItems: GuideItem[] = [
  {
    id: "activity_bar",
    title: "Activity Bar",
  },
  {
    id: "animations",
    title: "Animations",
  },
  {
    id: "Assembly Tree",
    title: "Assembly Tree",
  },
  {
    id: "clip_planes_list",
    title: "Clip Planes List",
  },
  {
    id: "display_mode",
    title: "Display Mode",
  },
  {
    id: "getting_started",
    title: "Getting Started",
  },
  {
    id: "guides",
    title: "Guides",
  },
  {
    id: "history",
    title: "History",
  },
  {
    id: "labels",
    title: "Labels",
  },
  {
    id: "menus",
    title: "Menus",
  },
];

export interface GuidesSlice {
  guidesItems: GuideItem[];

  setGuidesItems: (items: GuideItem[]) => void;
}

export const createGuidesSlice: StateCreator<
  GuidesSlice,
  [["zustand/devtools", never]],
  [],
  GuidesSlice
> = (set) => {
  return {
    guidesItems: allGuidesItems,

    setGuidesItems: (val) => {
      set({ guidesItems: val });
    },
  };
};
