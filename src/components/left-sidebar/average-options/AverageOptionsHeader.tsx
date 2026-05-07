import { LeftSidebarHeader } from "../../common/left-sidebar-header/LeftSidebarHeader";

interface AverageOptionsHeaderProps {
  handleHelpClick: () => void;
}

export const AverageOptionsHeader = ({
  handleHelpClick,
}: AverageOptionsHeaderProps) => {
  return (
    <LeftSidebarHeader
      headerLabel="Average Options"
      onGuideClick={handleHelpClick}
    />
  );
};
