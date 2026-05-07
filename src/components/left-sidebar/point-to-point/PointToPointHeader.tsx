import { LeftSidebarHeader } from "../../common/left-sidebar-header/LeftSidebarHeader";

interface PointToPointHeaderProps {
  searchQuery: string;
  recentSearchItems: string[];
  setSearchQuery: (query: string) => void;
  handleHelpClick: () => void;
}

export const PointToPointHeader = ({
  searchQuery,
  recentSearchItems,
  setSearchQuery,
  handleHelpClick,
}: PointToPointHeaderProps) => {
  return (
    <LeftSidebarHeader
      withSearch
      headerLabel="Point to Point"
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      recentSearchItems={recentSearchItems}
      onGuideClick={handleHelpClick}
    />
  );
};
