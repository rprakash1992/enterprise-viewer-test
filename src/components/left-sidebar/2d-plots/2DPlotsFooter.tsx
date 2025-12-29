import { Flex } from "@mantine/core";
import {
  IconEye,
  IconEyeOff,
  IconEyeSpark,
  IconTrash,
} from "@tabler/icons-react";
import { LeftSidebarFooterIconItem } from "../../common/left-sidebar-footer-icon-item/LeftSidebarFooterIconItem";

export const TwoDPlotsFooter = () => {
  return (
    <Flex direction={"row"} h={60} align={"center"} justify={"space-around"}>
      <LeftSidebarFooterIconItem icon={IconEye} label="Show" />
      <LeftSidebarFooterIconItem icon={IconEyeOff} label="Hide" />
      <LeftSidebarFooterIconItem icon={IconEyeSpark} label="Invert" />
      <LeftSidebarFooterIconItem icon={IconTrash} label="Delete" />
    </Flex>
  );
};
