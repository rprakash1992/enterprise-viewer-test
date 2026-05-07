import { Box, Flex, SegmentedControl } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { LabelText } from "../../common/label-text/LabelText";
import { MenuListItem } from "../../common/menu-list-item/MenuListItem";
import type { CameraAngle, CameraType } from "../../../store/CameraSlice";

interface CameraContentProps {
  selectedCameraType: CameraType;
  selectedCameraAngle: CameraAngle;
  cameraAngles: CameraAngle[];
  selectCameraType: (val: CameraType) => void;
  selectCameraAngle: (val: CameraAngle) => void;
}

export const CameraContent = ({
  selectedCameraType,
  selectedCameraAngle,
  cameraAngles,
  selectCameraType,
  selectCameraAngle,
}: CameraContentProps) => {
  return (
    <Box>
      <Flex direction="row" justify="space-between" align="center" mb="lg">
        <LabelText text="Mode:" />
        <SegmentedControl
          value={selectedCameraType}
          onChange={(val) => selectCameraType(val as CameraType)}
          data={[
            { label: "Orthographic", value: "orthographic" },
            { label: "Perspective", value: "perspective" },
          ]}
        />
      </Flex>
      <LabelText text="System Provided:" mb="xs" />
      {cameraAngles.map((item) => (
        <MenuListItem
          key={item.id}
          label={item.title}
          rightIcon={selectedCameraAngle.id === item.id ? IconCheck : null}
          isActive={selectedCameraAngle.id === item.id}
          onClick={() => selectCameraAngle(item)}
        />
      ))}
    </Box>
  );
};
