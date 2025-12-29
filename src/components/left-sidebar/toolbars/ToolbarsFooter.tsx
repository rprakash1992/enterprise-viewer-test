import { Flex } from "@mantine/core";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import { LeftSidebarFooterIconItem } from "../../common/left-sidebar-footer-icon-item/LeftSidebarFooterIconItem";
import IconGeometryTransform from "../../../assets/icons/IconGeometryTransform";

interface ToolbarsFooterProps {
  isEditable: boolean;
  isTransformable: boolean;
  isDeletable: boolean;
  onEditClick: () => void;
  onTransformClick: () => void;
  onDeleteClick: () => void;
}

export const ToolbarsFooter = ({
  isEditable,
  isTransformable,
  isDeletable,
  onEditClick,
  onTransformClick,
  onDeleteClick,
}: ToolbarsFooterProps) => {
  return (
    <Flex direction={"row"} h={60} align={"center"} justify={"space-around"}>
      <LeftSidebarFooterIconItem
        icon={IconPencil}
        label="Edit"
        isDisabled={!isEditable}
        onClick={onEditClick}
      />
      <LeftSidebarFooterIconItem
        icon={IconGeometryTransform}
        label="Transform"
        isDisabled={!isTransformable}
        onClick={onTransformClick}
      />
      <LeftSidebarFooterIconItem
        icon={IconTrash}
        label="Delete"
        isDisabled={!isDeletable}
        onClick={onDeleteClick}
      />
    </Flex>
  );
};
