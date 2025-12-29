import type { StateCreator } from "zustand";
import type { ToolbarItem } from "./ToolbarItemsSlice";
import IconPopOut from "../assets/icons/IconPopout";

export interface Toolbar {
  id: string;
  title: string;
  isEditable: boolean;
  isDeletable: boolean;
  isTransformable: boolean;
  items: ToolbarItem[];
}

export const defaultToolbars: Toolbar[] = [
  {
    id: "fullscreen",
    title: "Full Screen",
    isEditable: false,
    isDeletable: false,
    isTransformable: true,
    items: [
      {
        id: "fullscreen",
        title: "Fullscreen",
        icon: IconPopOut,
      },
    ],
  },
  {
    id: "presentation",
    title: "Presentation",
    isEditable: false,
    isDeletable: false,
    isTransformable: true,
    items: [
      {
        id: "previous_slide",
        title: "Previous Slide",
        icon: IconPopOut,
      },
      {
        id: "next_slide",
        title: "Next Slide",
        icon: IconPopOut,
      },
      {
        id: "update_slide",
        title: "Update Slide",
        icon: IconPopOut,
      },
      {
        id: "add_slide",
        title: "Add Slide",
        icon: IconPopOut,
      },
    ],
  },
  {
    id: "popout",
    title: "Popout",
    isEditable: false,
    isDeletable: false,
    isTransformable: true,
    items: [
      {
        id: "arrange_labels",
        title: "Arrange Labels",
        icon: IconPopOut,
      },
      {
        id: "pick_&_move",
        title: "Pick & Move",
        icon: IconPopOut,
      },
      {
        id: "reset",
        title: "Reset",
        icon: IconPopOut,
      },
      {
        id: "fit_view",
        title: "Fit View",
        icon: IconPopOut,
      },
    ],
  },
];

export interface ToolbarsSlice {
  toolbars: Toolbar[];
  selectedToolbar: Toolbar | null;

  setToolbars: (items: Toolbar[]) => void;
  addToolbar: (item: Toolbar) => void;
  selectToolbar: (item: Toolbar | null) => void;
}

export const createToolbarSlice: StateCreator<
  ToolbarsSlice,
  [["zustand/devtools", never]],
  [],
  ToolbarsSlice
> = (set) => {
  return {
    toolbars: defaultToolbars,
    selectedToolbar: defaultToolbars[0],

    setToolbars: (val) => {
      set({ toolbars: val });
    },
    addToolbar: (newItem) => {
      set((state) => ({ toolbars: [...state.toolbars, newItem] }));
    },
    selectToolbar: (val) => {
      set({ selectedToolbar: val });
    },
  };
};
