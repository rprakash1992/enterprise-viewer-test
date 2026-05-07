import { Box, Text } from "@mantine/core";

interface EditTwoDPlotHeaderProps {
  plotTitle: string;
}

export const EditTwoDPlotHeader = ({ plotTitle }: EditTwoDPlotHeaderProps) => {
  return (
    <Box py="xs" px="lg">
      <Text>{plotTitle}</Text>
    </Box>
  );
};
