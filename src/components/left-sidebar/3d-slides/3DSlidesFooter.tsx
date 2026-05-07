import { LeftSidebarFooterIcons } from "../../common/left-sidebar-footer-icons/LeftSidebarFooterIcons";

export const ThreeDSlidesFooter = ({
  handleUpdate,
  handleDuplicate,
  handleDelete,
}: {
  handleUpdate: (e: React.MouseEvent) => void;
  handleDuplicate: (e: React.MouseEvent) => void;
  handleDelete: (e: React.MouseEvent) => void;
}) => {
  return (
    <LeftSidebarFooterIcons
      handleUpdate={handleUpdate}
      handleDuplicate={handleDuplicate}
      handleDelete={handleDelete}
    />
  );
};
