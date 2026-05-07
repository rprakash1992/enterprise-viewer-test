import { Box } from "@mantine/core";
import { LabelText } from "../../common/label-text/LabelText";
import { MenuListItem } from "../../common/menu-list-item/MenuListItem";
import type { ColorPalette } from "../../../store/ColorPaletteSlice";

interface ColorPaletteContentInterface {
  systemColorPalettes: ColorPalette[];
  appliedColorPalette: ColorPalette;
  setColorPaletteApplied: (val: ColorPalette) => void;
}

export const ColorPaletteContent = ({
  systemColorPalettes,
  appliedColorPalette,
  setColorPaletteApplied,
}: ColorPaletteContentInterface) => {
  return (
    <Box>
      <LabelText text="System Provided:" mb="xs" />
      {systemColorPalettes.map((colorPalette) => (
        <MenuListItem
          label={colorPalette.title}
          onClick={() => setColorPaletteApplied(colorPalette)}
          isActive={appliedColorPalette.id === colorPalette.id}
        />
      ))}
    </Box>
  );
};
