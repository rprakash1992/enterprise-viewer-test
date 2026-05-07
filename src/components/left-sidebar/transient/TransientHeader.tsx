import { LeftSidebarHeader } from "../../common/left-sidebar-header/LeftSidebarHeader";

interface TransientHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleHelpClick: () => void;
}

export const TransientHeader = ({
  searchQuery,
  setSearchQuery,
  handleHelpClick,
}: TransientHeaderProps) => {
  return (
    <LeftSidebarHeader
      withSearch
      headerLabel="Transients"
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      recentSearchItems={[]}
      onGuideClick={handleHelpClick}
    />
  );
};
