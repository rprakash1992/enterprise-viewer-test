import { Flex } from "@mantine/core";
import { IconArrowBackUp, IconArrowForwardUp } from "@tabler/icons-react";
import { LeftSidebarFooterIconItem } from "../../common/left-sidebar-footer-icon-item/LeftSidebarFooterIconItem";

interface HoistoryFooterProps {
  undo: () => void;
  redo: () => void;
}

export const HistoryFooter = ({ undo, redo }: HoistoryFooterProps) => {
  return (
    <Flex direction={"row"} h={60} align={"center"} justify={"space-around"}>
      <LeftSidebarFooterIconItem
        icon={IconArrowBackUp}
        label="Undo"
        onClick={undo}
      />
      <LeftSidebarFooterIconItem
        icon={IconArrowForwardUp}
        label="Redo"
        onClick={redo}
      />
    </Flex>
  );
};
