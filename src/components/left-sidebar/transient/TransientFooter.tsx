import { LeftSidebarFooterIcons } from "../../common/left-sidebar-footer-icons/LeftSidebarFooterIcons";

export const TransientFooter = ({
  handlePlay,
  handlePause,
  handleEdit,
  handleDelete,
}: {
  handlePlay: (e: React.MouseEvent) => void;
  handlePause: (e: React.MouseEvent) => void;
  handleEdit: (e: React.MouseEvent) => void;
  handleDelete: (e: React.MouseEvent) => void;
}) => (
  <LeftSidebarFooterIcons
    handlePlay={handlePlay}
    handlePause={handlePause}
    handleEdit={handleEdit}
    handleDelete={handleDelete}
  />
);
