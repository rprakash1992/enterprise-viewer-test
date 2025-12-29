import type { StateCreator } from "zustand";

export interface ToolbarPosition {
  id: string;
  title: string;
}

const allToolbarPositions: ToolbarPosition[] = [
  {
    id: "top_right",
    title: "Top Right",
  },
  {
    id: "top_left",
    title: "Top Left",
  },
  {
    id: "top_middle",
    title: "Top Middle",
  },
  {
    id: "bottom_middle",
    title: "Bottom Middle",
  },
  {
    id: "top_center",
    title: "Top Center",
  },
  {
    id: "middle_right",
    title: "Middle Right",
  },
  {
    id: "middle_left",
    title: "Middle Left",
  },
  {
    id: "bottom_left",
    title: "Bottom Left",
  },
  // {
  //   id: "bottom_center",
  //   title: "Bottom Center",
  // },
  {
    id: "bottom_right",
    title: "Bottom Right",
  },
  {
    id: "custom",
    title: "Custom",
  },
];

const allToolbarOrientations: ToolbarPosition[] = [
  {
    id: "horizontal",
    title: "Horizontal",
  },
  {
    id: "vertical",
    title: "Vertical",
  },
  {
    id: "auto",
    title: "Auto",
  },
];

export interface ToolbarPositionSlice {
  toolbarPositions: ToolbarPosition[];
  toolbarOrientations: ToolbarPosition[];
  selectedToolbarPosition: any;
  selectedToolbarOrientation: any;

  setToolbarPositions: (items: ToolbarPosition[]) => void;
  setToolbarOrientations: (items: ToolbarPosition[]) => void;
  selectToolbarPosition: (item: any) => void;
  selectToolbarOrientation: (item: any) => void;
}

export const createToolbarPositionSlice: StateCreator<
  ToolbarPositionSlice,
  [["zustand/devtools", never]],
  [],
  ToolbarPositionSlice
> = (set) => {
  return {
    toolbarPositions: allToolbarPositions,
    toolbarOrientations: allToolbarOrientations,
    // selectedToolbarPosition: {
    //   id: "top_right",
    //   title: "Top Right",
    // },
    // selectedToolbarOrientation: {
    //   id: "horizontal",
    //   title: "Horizontal",
    // },
    selectedToolbarPosition: {
      fullscreen: "top_right",
      presentation: "bottom_middle",
      popout: "top_right",
    },
    selectedToolbarOrientation: {
      fullscreen: "horizontal",
      presentation: "horizontal",
      popout: "horizontal",
    },

    setToolbarPositions: (val) => {
      set({ toolbarPositions: val });
    },
    setToolbarOrientations: (val) => {
      set({ toolbarOrientations: val });
    },
    selectToolbarPosition: (val) => {
      set({ selectedToolbarPosition: val });
    },
    selectToolbarOrientation: (val) => {
      set({ selectedToolbarOrientation: val });
    },
  };
};
