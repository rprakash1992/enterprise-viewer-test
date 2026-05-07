import { Flex } from "@mantine/core";
import {
  IconCopyCheck,
  IconEye,
  IconEyeOff,
  IconEyeSpark,
  IconRestore,
  IconTrash,
} from "@tabler/icons-react";
import { LeftSidebarFooterIconItem } from "../left-sidebar-footer-icon-item/LeftSidebarFooterIconItem";

interface LeftSidebarFooterIconsProps {
  handlePlay?: (e: React.MouseEvent) => void;
  handlePause?: (e: React.MouseEvent) => void;
  handleEdit?: (e: React.MouseEvent) => void;
  handleUpdate?: (e: React.MouseEvent) => void;
  handleDuplicate?: (e: React.MouseEvent) => void;
  handleShow?: (e: React.MouseEvent) => void;
  handleHide?: (e: React.MouseEvent) => void;
  handleInvert?: (e: React.MouseEvent) => void;
  handleDelete?: (e: React.MouseEvent) => void;
}

export const LeftSidebarFooterIcons = ({
  handlePlay,
  handlePause,
  handleEdit,
  handleUpdate,
  handleDuplicate,
  handleShow,
  handleHide,
  handleInvert,
  handleDelete,
}: LeftSidebarFooterIconsProps) => (
  <Flex direction="row" h={60} align="center" justify="space-around">
    {handlePlay && (
      <LeftSidebarFooterIconItem
        icon={IconRestore}
        label="Play"
        onClick={handlePlay}
      />
    )}
    {handlePause && (
      <LeftSidebarFooterIconItem
        icon={IconRestore}
        label="Pause"
        onClick={handlePause}
      />
    )}
    {handleEdit && (
      <LeftSidebarFooterIconItem
        icon={IconRestore}
        label="Edit"
        onClick={handleEdit}
      />
    )}
    {handleUpdate && (
      <LeftSidebarFooterIconItem
        icon={IconRestore}
        label="Update"
        onClick={handleUpdate}
      />
    )}
    {handleDuplicate && (
      <LeftSidebarFooterIconItem
        icon={IconCopyCheck}
        label="Duplicate"
        onClick={handleDuplicate}
      />
    )}
    {handleShow && (
      <LeftSidebarFooterIconItem
        icon={IconEye}
        label="Show"
        onClick={handleShow}
      />
    )}
    {handleHide && (
      <LeftSidebarFooterIconItem
        icon={IconEyeOff}
        label="Hide"
        onClick={handleHide}
      />
    )}
    {handleInvert && (
      <LeftSidebarFooterIconItem
        icon={IconEyeSpark}
        label="Invert"
        onClick={handleInvert}
      />
    )}
    {handleDelete && (
      <LeftSidebarFooterIconItem
        icon={IconTrash}
        label="Delete"
        onClick={handleDelete}
      />
    )}
  </Flex>
);
