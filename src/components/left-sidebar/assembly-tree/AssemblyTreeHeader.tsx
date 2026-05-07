// import { Box } from "@mantine/core";
// import { MenuItemsSearch } from "../../common/menu-items-search/MenuItemsSearch";
// import { useState } from "react";
// import { HeaderWithGuildeBtn } from "../../common/header-with-guide-btn/HeaderWithGuideBtn";
// import { RecentSearchItems } from "../../common/recent-search-items/RecentSearchItems";
import { LeftSidebarHeader } from "../../common/left-sidebar-header/LeftSidebarHeader";

interface AssemblyTreeHeaderProps {
  searchQuery: string;
  recentSearchItems?: string[];
  setSearchQuery: (query: string) => void;
  handleHelpClick: () => void;
}

export const AssemblyTreeHeader = ({
  searchQuery,
  recentSearchItems,
  setSearchQuery,
  handleHelpClick,
}: AssemblyTreeHeaderProps) => {
  // const [recentSearchItems, setRecentSearchItems] = useState<string[]>([]);
  // const [showSearchBar, setShowSearchBar] = useState<boolean>(false);

  return (
    <LeftSidebarHeader
      withSearch
      headerLabel="Product Tree"
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      recentSearchItems={recentSearchItems}
      onGuideClick={handleHelpClick}
    />
  );

  // return (
  //   <Box>
  //     <HeaderWithGuildeBtn handleHelpClick={handleHelpClick}>
  //       <MenuItemsSearch
  //         label="Product Tree"
  //         searchQuery={searchQuery}
  //         showSearchBar={showSearchBar}
  //         setShowSearchBar={setShowSearchBar}
  //         setSearchQuery={setSearchQuery}
  //       />
  //     </HeaderWithGuildeBtn>
  //     {showSearchBar && (
  //       <Box px="lg">
  //         <RecentSearchItems recentSearchItems={recentSearchItems} />
  //       </Box>
  //     )}
  //   </Box>
  // );
};
