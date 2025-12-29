import { Box, Text } from "@mantine/core";

export const RecentSearchItems = ({
  recentSearchItems,
}: {
  recentSearchItems: string[];
}) => {
  return (
    <Box>
      <Text>Recent:</Text>
      <Box>
        {recentSearchItems?.map((item) => (
          <Text>{item}</Text>
        ))}
      </Box>
    </Box>
  );
};
