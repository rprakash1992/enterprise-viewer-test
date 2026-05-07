import { Box } from "@mantine/core";
import { MenuItemsSearch } from "../../common/menu-items-search/MenuItemsSearch";
import { useState } from "react";
import { HeaderWithGuildeBtn } from "../../common/header-with-guide-btn/HeaderWithGuideBtn";
import { RecentSearchItems } from "../../common/recent-search-items/RecentSearchItems";

interface EigenVectorAnimationsHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleHelpClick: () => void;
}

export const EigenVectorAnimationsHeader = ({
  searchQuery,
  setSearchQuery,
  handleHelpClick,
}: EigenVectorAnimationsHeaderProps) => {
  const [recentSearchItems] = useState<string[]>([]);
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);

  return (
    <Box>
      <HeaderWithGuildeBtn handleHelpClick={handleHelpClick}>
        <MenuItemsSearch
          label="Vector Animations"
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
