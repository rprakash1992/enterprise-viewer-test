import { useRef } from "react";
import { ActionIcon, Box, Flex, Group, Text, TextInput } from "@mantine/core";
import { IconSearch, IconX } from "@tabler/icons-react";

interface AllMenuItemsProps {
  label: string;
  searchQuery: string;
  showSearchBar: boolean;
  setShowSearchBar: (val: boolean) => void;
  setSearchQuery: (query: string) => void;
}

export const MenuItemsSearch = ({
  label,
  searchQuery,
  showSearchBar,
  setShowSearchBar,
  setSearchQuery,
}: AllMenuItemsProps) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const isSearching = searchQuery.trim() != "" && searchQuery.trim().length > 0;

  const onTextInputBlur = () => {
    if (!isSearching) {
      setShowSearchBar(false);
    }
  };

  const onTextInputEscapeClick = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      setShowSearchBar(false);
      setSearchQuery("");
    }
  };

  return (
    <Box>
      <Flex h={48} justify={"space-between"} align={"center"}>
        {showSearchBar ? (
          <Group align="center" w={"100%"}>
            <TextInput
              flex={1}
              ref={textInputRef}
              autoFocus
              placeholder="Search..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.currentTarget.value)}
              onBlur={onTextInputBlur}
              onKeyUp={onTextInputEscapeClick}
              styles={{
                input: {
                  borderRadius: "18px",
                },
              }}
            />
            <ActionIcon variant="subtle" color="var(--mantine-color-dimmed)">
              <IconX />
            </ActionIcon>
          </Group>
        ) : (
          <Group
            justify="space-between"
            align="center"
            w={"100%"}
            onClick={() => setShowSearchBar(true)}
            style={{
              cursor: "pointer",
            }}
          >
            <Text>{label}</Text>
            <ActionIcon variant="subtle" color="var(--mantine-color-dimmed)">
              <IconSearch />
            </ActionIcon>
          </Group>
        )}
      </Flex>
    </Box>
  );
};
