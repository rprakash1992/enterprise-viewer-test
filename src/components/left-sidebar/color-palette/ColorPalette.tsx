import LeftSidebarLayout from "../LeftSidebarLayout";
import { ColorPaletteHeader } from "./ColorPaletteHeader";
import { ColorPaletteContent } from "./ColorPaletteContent";
import { useStore } from "../../../store";

export const ColorPalette = () => {
  const systemColorPalettes = useStore((state) => state.systemColorPalettes);
  const appliedColorPalette = useStore((state) => state.appliedColorPalette);
  const setColorPaletteApplied = useStore(
    (state) => state.setColorPaletteApplied,
  );

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <ColorPaletteHeader />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <ColorPaletteContent
          systemColorPalettes={systemColorPalettes}
          appliedColorPalette={appliedColorPalette}
          setColorPaletteApplied={setColorPaletteApplied}
        />
      </LeftSidebarLayout.Content>
    </LeftSidebarLayout>
  );
};
