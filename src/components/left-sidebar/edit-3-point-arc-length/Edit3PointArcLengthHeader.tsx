import { Box, Text } from "@mantine/core";

interface EditThreePointArcLengthHeaderProps {
  arcTitle: string;
}

export const EditThreePointArcLengthHeader = ({
  arcTitle,
}: EditThreePointArcLengthHeaderProps) => {
  return (
    <Box py="xs" px="lg">
      <Text>{arcTitle}</Text>
    </Box>
  );
};
