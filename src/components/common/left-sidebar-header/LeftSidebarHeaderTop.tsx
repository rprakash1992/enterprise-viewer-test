import { Flex } from "@mantine/core";
import { HeaderTopIcons, type HeaderIconType } from "./HeaderTopIcons";
import { ItemsSearch } from "./ItemsSearch";
import { HeaderLabel } from "./HeaderLabel";

interface LeftSidebarHeaderTopProps {
  withSearch?: boolean;
  searchQuery: string;
  headerLabel: string;
  extraHeaderIcons: HeaderIconType[];
  recentSearchItems: string[];
  setSearchQuery: (query: string) => void;
}

export const LeftSidebarHeaderTop = ({
  withSearch,
  searchQuery,
  headerLabel,
  extraHeaderIcons,
  recentSearchItems,
  setSearchQuery,
}: LeftSidebarHeaderTopProps) => {
  return (
    <Flex direction="row" align="flex-start" gap={2}>
      {withSearch ? (
        <ItemsSearch
          label={headerLabel}
          searchQuery={searchQuery}
          recentSearchItems={recentSearchItems}
          setSearchQuery={setSearchQuery}
        />
      ) : (
        <Flex flex={1} h={48} align="center">
          <HeaderLabel label={headerLabel} />
        </Flex>
      )}
      <HeaderTopIcons icons={extraHeaderIcons} />
    </Flex>
  );
};
