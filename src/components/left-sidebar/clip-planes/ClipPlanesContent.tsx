import { Box, Button } from "@mantine/core";
import type { ClipPlane } from "../../../store/ClipPlaneSlice";
import { MenuListItem } from "../../common/menu-list-item/MenuListItem";

export const ClipPlanesContent = ({
  clipPlanes,
  addClipPlane,
  setClipPlaneApplied,
}: {
  clipPlanes: ClipPlane[];
  addClipPlane: () => void;
  setClipPlaneApplied: (id: string, val: boolean) => void;
}) => {
  return (
    <Box>
      <Button fullWidth onClick={addClipPlane} mb="lg">
        Add Clip Plane
      </Button>
      <Box>
        {clipPlanes.map((clipPlane) => (
          <MenuListItem
            key={clipPlane.id}
            label={clipPlane.title}
            withSwitch
            switchChecked={clipPlane.isApplied}
            onSwitchChange={(val) => setClipPlaneApplied(clipPlane.id, val)}
          />
        ))}
      </Box>
    </Box>
  );
};
