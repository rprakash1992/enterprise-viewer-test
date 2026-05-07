import { Box, Text } from "@mantine/core";

interface EditLabelHeaderProps {
  title: string;
}

export const EditLabelHeader = ({ title }: EditLabelHeaderProps) => {
  return (
    <Box py="xs" px="lg">
      <Text>{title}</Text>
    </Box>
  );
};
