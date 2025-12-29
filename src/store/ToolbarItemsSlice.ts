import type { StateCreator } from "zustand";
import IconPopOut from "../assets/icons/IconPopout";

export interface ToolbarItem {
  id: string;
  title: string;
  icon: any;
}

const allToolbarItems: ToolbarItem[] = [
  {
    id: "popout",
    title: "Popout",
    icon: IconPopOut,
  },
  {
    id: "undo",
    title: "Undo",
    icon: IconPopOut,
  },
  {
    id: "redo",
    title: "Redo",
    icon: IconPopOut,
  },
  {
    id: "fullscreen",
    title: "Fullscreen",
    icon: IconPopOut,
  },
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
  {
    id: "fit_view",
    title: "Fit View",
    icon: IconPopOut,
  },
  {
    id: "pick_&_move",
    title: "Pick & Move",
    icon: IconPopOut,
  },
  {
    id: "arrange_labels",
    title: "Arrange Labels",
    icon: IconPopOut,
  },
  {
    id: "reset",
    title: "Reset",
    icon: IconPopOut,
  },
];

export interface ToolbarItemsSlice {
  toolbarItems: ToolbarItem[];
  checkedToolbarItems: string[];

  setToolbarItems: (items: ToolbarItem[]) => void;
  checkToolbarItem: (item: string) => void;
  setCheckedToolbarItems: (items: string[]) => void;
}

export const createToolbarItemsSlice: StateCreator<
  ToolbarItemsSlice,
  [["zustand/devtools", never]],
  [],
  ToolbarItemsSlice
> = (set) => {
  return {
    toolbarItems: allToolbarItems,
    checkedToolbarItems: [],

    setToolbarItems: (val) => {
      set({ toolbarItems: val });
    },
    checkToolbarItem: (item) => {
      set((state) => {
        const prevItems = state.checkedToolbarItems;
        const newItems = prevItems.includes(item)
          ? prevItems.filter((item) => !item)
          : [...prevItems, item];

        return {
          checkedToolbarItems: newItems,
        };
      });
    },
    setCheckedToolbarItems: (val) => {
      set({ checkedToolbarItems: val });
    },
  };
};
