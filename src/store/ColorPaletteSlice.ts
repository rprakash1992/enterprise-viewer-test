import type { StateCreator } from "zustand";

export interface ColorPalette {
  id: string;
  title: string;
}

export interface ColorPaletteSlice {
  systemColorPalettes: ColorPalette[];
  appliedColorPalette: ColorPalette;
  setColorPaletteApplied: (val: ColorPalette) => void;
}

const systemColorPalettes = [
  { id: "vcollab", title: "VCollab" },
  { id: "abaqus", title: "Abaqus" },
];

export const createColorPaletteSlice: StateCreator<
  ColorPaletteSlice,
  [["zustand/devtools", never]],
  [],
  ColorPaletteSlice
> = (set) => {
  return {
    systemColorPalettes,
    appliedColorPalette: { id: "vcollab", title: "VCollab" },

    setColorPaletteApplied: (val) => {
      set({ appliedColorPalette: val });
    },
  };
};
