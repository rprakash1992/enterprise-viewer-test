import { useState } from "react";
import { Box } from "@mantine/core";
import { MenuItemsSearch } from "../../common/menu-items-search/MenuItemsSearch";
import { HeaderWithGuildeBtn } from "../../common/header-with-guide-btn/HeaderWithGuideBtn";
import { RecentSearchItems } from "../../common/recent-search-items/RecentSearchItems";

interface AllMenuItemsProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleHelpClick: () => void;
}

export const AllMenuItemsHeader = ({
  searchQuery,
  setSearchQuery,
  handleHelpClick,
}: AllMenuItemsProps) => {
  const [recentSearchItems] = useState<string[]>([]);
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);

  return (
    <Box>
      <HeaderWithGuildeBtn handleHelpClick={handleHelpClick}>
        <MenuItemsSearch
          label="All Menu Items"
          searchQuery={searchQuery}
          showSearchBar={showSearchBar}
          setShowSearchBar={setShowSearchBar}
          setSearchQuery={setSearchQuery}
        />
      </HeaderWithGuildeBtn>
      {showSearchBar && (
        <Box px="lg">
          <RecentSearchItems recentSearchItems={recentSearchItems} />
        </Box>
      )}
    </Box>
  );
};
