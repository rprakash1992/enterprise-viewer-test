import type { StateCreator } from "zustand";

interface MouseControlItem {
  control: string | null;
  action: string | null;
}

export interface MouseControl {
  id: string;
  title: string;
  items: MouseControlItem[];
}

const allMouseControls: MouseControl[] = [
  {
    id: "vcollab",
    title: "VCollab",
    items: [
      {
        control: "Right",
        action: "PAN",
      },
      {
        control: "Left",
        action: "ROTATE",
      },
      {
        control: "None",
        action: "POINT_ZOOM_IN",
      },
      {
        control: "None",
        action: "POINT_ZOOM_OUT",
      },
      {
        control: "Middle",
        action: "ZOOM_IN",
      },
      {
        control: "Middle",
        action: "ZOOM_OUT",
      },
    ],
  },
  {
    id: "abaqus",
    title: "Abaqus",
    items: [
      {
        control: "Ctrl+Alt+Middle",
        action: "PAN",
      },
      {
        control: "Ctrl+Alt+Left",
        action: "ROTATE",
      },
      {
        control: "None",
        action: "POINT_ZOOM_IN",
      },
      {
        control: "None",
        action: "POINT_ZOOM_OUT",
      },
      {
        control: "Ctrl+Alt+Right",
        action: "ZOOM_IN",
      },
      {
        control: "Ctrl+Alt+Right",
        action: "ZOOM_OUT",
      },
    ],
  },
  {
    id: "solid_works",
    title: "Solid Works",
    items: [
      {
        control: "Ctrl+Middle",
        action: "PAN",
      },
      {
        control: "Middle",
        action: "ROTATE",
      },
      {
        control: "None",
        action: "POINT_ZOOM_IN",
      },
      {
        control: "None",
        action: "POINT_ZOOM_OUT",
      },
      {
        control: "Shift+Middle",
        action: "ZOOM_IN",
      },
      {
        control: "Shift+Middle",
        action: "ZOOM_OUT",
      },
    ],
  },
  {
    id: "hyper_view",
    title: "Hyper View",
    items: [
      {
        control: "Ctrl+Middle",
        action: "PAN",
      },
      {
        control: "Middle",
        action: "ROTATE",
      },
      {
        control: "None",
        action: "POINT_ZOOM_IN",
      },
      {
        control: "None",
        action: "POINT_ZOOM_OUT",
      },
      {
        control: "Shift+Middle",
        action: "ZOOM_IN",
      },
      {
        control: "Shift+Middle",
        action: "ZOOM_OUT",
      },
    ],
  },
  {
    id: "pro_engineer",
    title: "Pro Engineer",
    items: [
      {
        control: "Ctrl+Middle",
        action: "PAN",
      },
      {
        control: "Middle",
        action: "ROTATE",
      },
      {
        control: "None",
        action: "POINT_ZOOM_IN",
      },
      {
        control: "None",
        action: "POINT_ZOOM_OUT",
      },
      {
        control: "Shift+Middle",
        action: "ZOOM_IN",
      },
      {
        control: "Shift+Middle",
        action: "ZOOM_OUT",
      },
    ],
  },
  {
    id: "nx",
    title: "NX",
    items: [
      {
        control: "Middle Right",
        action: "PAN",
      },
      {
        control: "Middle",
        action: "ROTATE",
      },
      {
        control: "None",
        action: "POINT_ZOOM_IN",
      },
      {
        control: "None",
        action: "POINT_ZOOM_OUT",
      },
      {
        control: "Left Middle",
        action: "ZOOM_IN",
      },
      {
        control: "Left Middle",
        action: "ZOOM_OUT",
      },
    ],
  },
];

export interface MouseControlSlice {
  systemMouseControls: MouseControl[];
  userMouseControls: MouseControl[];
  selectedMouseControl: MouseControl;

  setSystemMouseControls: (val: MouseControl[]) => void;
  setUserMouseControls: (val: MouseControl[]) => void;
  selectMouseControl: (val: MouseControl) => void;
}

export const createMouseControlSlice: StateCreator<
  MouseControlSlice,
  [["zustand/devtools", never]],
  [],
  MouseControlSlice
> = (set) => {
  return {
    systemMouseControls: allMouseControls,
    userMouseControls: [],
    selectedMouseControl: allMouseControls[0],

    setSystemMouseControls: (val) => {
      set({ systemMouseControls: val });
    },
    setUserMouseControls: (val) => {
      set({ userMouseControls: val });
    },
    selectMouseControl: (val) => {
      set({ selectedMouseControl: val });
    },
  };
};
