import { LeftSidebarFooterIcons } from "../../common/left-sidebar-footer-icons/LeftSidebarFooterIcons";

export const ThreePointArcLengthFooter = ({
  handleShow,
  handleHide,
  handleInvert,
  handleDelete,
}: {
  handleShow: (e: React.MouseEvent) => void;
  handleHide: (e: React.MouseEvent) => void;
  handleInvert: (e: React.MouseEvent) => void;
  handleDelete: (e: React.MouseEvent) => void;
}) => {
  return (
    <LeftSidebarFooterIcons
      handleShow={handleShow}
      handleHide={handleHide}
      handleInvert={handleInvert}
      handleDelete={handleDelete}
    />
  );
};
