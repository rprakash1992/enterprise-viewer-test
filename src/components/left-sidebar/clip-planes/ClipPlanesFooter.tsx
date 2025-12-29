import { Flex } from "@mantine/core";
import {
  IconCopyCheck,
  IconPencil,
  // IconRotateRectangle,
  IconTrash,
} from "@tabler/icons-react";
import { LeftSidebarFooterIconItem } from "../../common/left-sidebar-footer-icon-item/LeftSidebarFooterIconItem";
import IconGeometryTransform from "../../../assets/icons/IconGeometryTransform";

export const ClipPlanesFooter = () => {
  return (
    <Flex direction={"row"} h={60} align={"center"} justify={"space-around"}>
      <LeftSidebarFooterIconItem icon={IconPencil} label="Setting" />
      {/* <LeftSidebarFooterIconItem icon={IconRotateRectangle} label="Transform" /> */}
      <LeftSidebarFooterIconItem icon={IconGeometryTransform} label="Transform" />
      <LeftSidebarFooterIconItem icon={IconCopyCheck} label="Duplicate" />
      <LeftSidebarFooterIconItem icon={IconTrash} label="Delete" />
    </Flex>
  );
};
