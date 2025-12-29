import { Flex, SegmentedControl, Text } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { useStore } from "../../../store";
import { CameraHeader } from "./CameraHeader";
import { MenuListItem } from "../../common/menu-list-item/MenuListItem";

export const Camera = () => {
  const cameraAngles = useStore((state) => state.cameraAngles);
  const selectedCameraAngle = useStore((state) => state.selectedCameraAngle);
  const selectedCameraType = useStore((state) => state.selectedCameraType);
  const selectCameraAngle = useStore((state) => state.selectCameraAngle);
  const selectCameraType = useStore((state) => state.selectCameraType);

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <CameraHeader />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <Flex
          direction="row"
          justify="space-between"
          align="center"
          px="lg"
          py="xs"
        >
          <Text>Mode:</Text>
          <SegmentedControl
            value={selectedCameraType}
            onChange={(val) =>
              selectCameraType(val as "orthographic" | "perspective")
            }
            data={[
              { label: "Orthographic", value: "orthographic" },
              { label: "Perspective", value: "perspective" },
            ]}
          />
        </Flex>
        <Text px="lg">System Provided:</Text>
        {cameraAngles.map((item) => (
          <MenuListItem
            key={item.id}
            label={item.title}
            rightIcon={selectedCameraAngle.id === item.id ? IconCheck : null}
            isActive={selectedCameraAngle.id === item.id}
            onClick={() => selectCameraAngle(item)}
          />
        ))}
      </LeftSidebarLayout.Content>
    </LeftSidebarLayout>
  );
};
