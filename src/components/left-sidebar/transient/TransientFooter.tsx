import { Flex } from "@mantine/core";
import {
  IconPencil,
  IconPlayerPause,
  IconPlayerPlay,
  IconTrash,
} from "@tabler/icons-react";
import { LeftSidebarFooterIconItem } from "../../common/left-sidebar-footer-icon-item/LeftSidebarFooterIconItem";

export const TransientFooter = () => {
  return (
    <Flex direction={"row"} h={60} align={"center"} justify={"space-around"}>
      <LeftSidebarFooterIconItem icon={IconPlayerPlay} label="Play" />
      <LeftSidebarFooterIconItem icon={IconPlayerPause} label="Pause" />
      <LeftSidebarFooterIconItem icon={IconPencil} label="Edit" />
      <LeftSidebarFooterIconItem icon={IconTrash} label="Delete" />
    </Flex>
  );
};
