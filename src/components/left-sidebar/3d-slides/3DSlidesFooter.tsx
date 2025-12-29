import { Flex } from "@mantine/core";
import { IconCopyCheck, IconRestore, IconTrash } from "@tabler/icons-react";
import { LeftSidebarFooterIconItem } from "../../common/left-sidebar-footer-icon-item/LeftSidebarFooterIconItem";

export const ThreeDSlidesFooter = () => {
  return (
    <Flex direction={"row"} h={60} align={"center"} justify={"space-around"}>
      <LeftSidebarFooterIconItem icon={IconRestore} label="Setting" />
      <LeftSidebarFooterIconItem icon={IconCopyCheck} label="Duplicate" />
      <LeftSidebarFooterIconItem icon={IconTrash} label="Delete" />
    </Flex>
  );
};
