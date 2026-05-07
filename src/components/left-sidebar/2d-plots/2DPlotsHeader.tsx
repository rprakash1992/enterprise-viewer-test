import { LeftSidebarHeader } from "../../common/left-sidebar-header/LeftSidebarHeader";

interface TwoDNotesHeaderProps {
  searchQuery: string;
  recentSearchItems: string[];
  setSearchQuery: (query: string) => void;
  handleHelpClick: () => void;
}

export const TwoDPlotsHeader = ({
  searchQuery,
  recentSearchItems,
  setSearchQuery,
  handleHelpClick,
}: TwoDNotesHeaderProps) => {
  return (
    <LeftSidebarHeader
      withSearch
      headerLabel="2D Plots"
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      recentSearchItems={recentSearchItems}
      onGuideClick={handleHelpClick}
    />
  );
};
