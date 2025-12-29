import { Box, Text } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { ToolbarPositionHeader } from "./ToolbarPositionHeader";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { useStore } from "../../../store";
import { MenuListItem } from "../../common/menu-list-item/MenuListItem";
import type { ToolbarPosition as ToolbarPositionType } from "../../../store/ToolbarPositionSlice";

export const ToolbarPosition = () => {
  const toolbarPositions = useStore((state) => state.toolbarPositions);
  const toolbarOrientations = useStore((state) => state.toolbarOrientations);
  const selectedToolbar = useStore((state) => state.selectedToolbar);
  const selectedToolbarPosition = useStore(
    (state) => state.selectedToolbarPosition
  );
  const selectedToolbarOrientation = useStore(
    (state) => state.selectedToolbarOrientation
  );
  const selectToolbarPosition = useStore(
    (state) => state.selectToolbarPosition
  );
  const selectToolbarOrientation = useStore(
    (state) => state.selectToolbarOrientation
  );

  const handleSelectToolbarPosition = (item: ToolbarPositionType) => {
    selectToolbarPosition({
      ...selectedToolbarPosition,
      [selectedToolbar?.id!]: item.id,
    });
  };

  const handleSelectToolbarOrientation = (item: ToolbarPositionType) => {
    selectToolbarOrientation({
      ...selectedToolbarOrientation,
      [selectedToolbar?.id!]: item.id,
    });
  };

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <ToolbarPositionHeader selectedToolbar={selectedToolbar} />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <Box mb="lg">
          <Text px="lg">Position:</Text>
          {toolbarPositions.map((item) => (
            <MenuListItem
              key={item.id}
              label={item.title}
              rightIcon={
                selectedToolbarPosition[selectedToolbar?.id!] === item.id
                  ? IconCheck
                  : null
              }
              isActive={
                selectedToolbarPosition[selectedToolbar?.id!] === item.id
              }
              onClick={() => handleSelectToolbarPosition(item)}
            />
          ))}
        </Box>
        <Box>
          <Text px="lg">Orientation:</Text>
          {toolbarOrientations.map((item) => (
            <MenuListItem
              key={item.id}
              label={item.title}
              rightIcon={
                selectedToolbarOrientation[selectedToolbar?.id!] === item.id
                  ? IconCheck
                  : null
              }
              isActive={
                selectedToolbarOrientation[selectedToolbar?.id!] === item.id
              }
              onClick={() => handleSelectToolbarOrientation(item)}
            />
          ))}
        </Box>
      </LeftSidebarLayout.Content>
    </LeftSidebarLayout>
  );
};
