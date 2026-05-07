import { LeftSidebarHeader } from "../../common/left-sidebar-header/LeftSidebarHeader";

interface FaceLabelHeaderProps {
  searchQuery: string;
  recentSearchItems: string[];
  setSearchQuery: (query: string) => void;
  handleHelpClick: () => void;
}

export const FaceLabelsHeader = ({
  searchQuery,
  recentSearchItems,
  setSearchQuery,
  handleHelpClick,
}: FaceLabelHeaderProps) => {
  return (
    <LeftSidebarHeader
      withSearch
      headerLabel="Face Labels"
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      recentSearchItems={recentSearchItems}
      onGuideClick={handleHelpClick}
    />
  );
};
