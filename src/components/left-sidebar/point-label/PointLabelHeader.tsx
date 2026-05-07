import { LeftSidebarHeader } from "../../common/left-sidebar-header/LeftSidebarHeader";

interface PointLabelHeaderProps {
  searchQuery: string;
  recentSearchItems: string[];
  setSearchQuery: (query: string) => void;
  handleHelpClick: () => void;
}

export const PointLabelHeader = ({
  searchQuery,
  recentSearchItems,
  setSearchQuery,
  handleHelpClick,
}: PointLabelHeaderProps) => {
  return (
    <LeftSidebarHeader
      withSearch
      headerLabel="Point Label"
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      recentSearchItems={recentSearchItems}
      onGuideClick={handleHelpClick}
    />
  );
};
