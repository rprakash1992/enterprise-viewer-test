import { LeftSidebarHeader } from "../../common/left-sidebar-header/LeftSidebarHeader";

interface ThreePointArcLengthHeaderProps {
  searchQuery: string;
  recentSearchItems: string[];
  setSearchQuery: (query: string) => void;
  handleHelpClick: () => void;
}

export const ThreePointArcLengthHeader = ({
  searchQuery,
  recentSearchItems,
  setSearchQuery,
  handleHelpClick,
}: ThreePointArcLengthHeaderProps) => {
  return (
    <LeftSidebarHeader
      withSearch
      headerLabel="3 Point Arc Length"
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      recentSearchItems={recentSearchItems}
      onGuideClick={handleHelpClick}
    />
  );
};
