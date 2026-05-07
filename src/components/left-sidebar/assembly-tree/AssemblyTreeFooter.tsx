import { Flex } from "@mantine/core";
import { IconEye, IconMaximize, IconTag } from "@tabler/icons-react";
import { LeftSidebarFooterIconItem } from "../../common/left-sidebar-footer-icon-item/LeftSidebarFooterIconItem";

export const AssemblyTreeFooter = () => {
  return (
    <Flex direction={"row"} h={60} align={"center"} justify={"space-around"}>
      <LeftSidebarFooterIconItem icon={IconEye} label="Visibility" />
      <LeftSidebarFooterIconItem icon={IconTag} label="Label Parts" />
      <LeftSidebarFooterIconItem icon={IconMaximize} label="Fit to Screen" />
    </Flex>
  );
};
