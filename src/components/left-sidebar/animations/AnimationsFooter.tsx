// import { Flex } from "@mantine/core";
// import {
//   IconPencil,
//   IconPlayerPause,
//   IconPlayerPlay,
//   IconTrash,
// } from "@tabler/icons-react";
// import { LeftSidebarFooterIconItem } from "../../common/left-sidebar-footer-icon-item/LeftSidebarFooterIconItem";
import { LeftSidebarFooterIcons } from "../../common/left-sidebar-footer-icons/LeftSidebarFooterIcons";

export const AnimationsFooter = ({
  handlePlay,
  handlePause,
  handleEdit,
  handleDelete,
}: {
  handlePlay: (e: React.MouseEvent) => void;
  handlePause: (e: React.MouseEvent) => void;
  handleEdit: (e: React.MouseEvent) => void;
  handleDelete: (e: React.MouseEvent) => void;
}) => {
  return (
    <LeftSidebarFooterIcons
      handlePlay={handlePlay}
      handlePause={handlePause}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
    // <Flex direction={"row"} h={60} align={"center"} justify={"space-around"}>
    //   <LeftSidebarFooterIconItem icon={IconPlayerPlay} label="Play" />
    //   <LeftSidebarFooterIconItem icon={IconPlayerPause} label="Pause" />
    //   <LeftSidebarFooterIconItem icon={IconPencil} label="Edit" />
    //   <LeftSidebarFooterIconItem icon={IconTrash} label="Delete" />
    // </Flex>
  );
};
