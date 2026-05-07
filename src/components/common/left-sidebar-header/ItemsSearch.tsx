import { useState } from "react";
import { Box, Flex, Group, Text, TextInput } from "@mantine/core";
import { IconSearch, IconX } from "@tabler/icons-react";
import { RecentSearchItems } from "./RecentSearchItems";
import { CustomActionIcon } from "../custom-action-icon/CustomActionIcon";

interface AllMenuItemsProps {
  label: string;
  searchQuery: string;
  recentSearchItems: string[];
  setSearchQuery: (query: string) => void;
}

export const ItemsSearch = ({
  label,
  searchQuery,
  recentSearchItems,
  setSearchQuery,
}: AllMenuItemsProps) => {
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);

  const onTextInputEscapeClick = (event: React.KeyboardEvent) => {
    event.stopPropagation();
    if (event.key === "Escape") {
      setShowSearchBar(false);
      setSearchQuery("");
    }
  };

  const onXClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setShowSearchBar(false);
    setSearchQuery("");
  };

  return (
    <Box flex={1}>
      <Flex h={48} justify="space-between" align="center">
        {showSearchBar ? (
          <Group align="center" w="100%">
            <TextInput
              flex={1}
              autoFocus
              placeholder="Search..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.currentTarget.value)}
              onKeyUp={onTextInputEscapeClick}
              styles={{
                input: {
                  borderRadius: "18px",
                },
              }}
            />
            <CustomActionIcon icon={<IconX />} onClick={onXClick} />
          </Group>
        ) : (
          <Group
            justify="space-between"
            align="center"
            w="100%"
            onClick={() => setShowSearchBar(true)}
            style={{
              cursor: "pointer",
            }}
          >
            <Text>{label}</Text>
            <CustomActionIcon icon={<IconSearch />} />
          </Group>
        )}
      </Flex>
      {showSearchBar && (
        <RecentSearchItems recentSearchItems={recentSearchItems} />
      )}
    </Box>
  );
};
