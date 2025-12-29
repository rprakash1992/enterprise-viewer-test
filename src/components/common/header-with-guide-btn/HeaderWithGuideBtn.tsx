import type React from "react";
import { ActionIcon, Box, Flex } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";

export const HeaderWithGuildeBtn = ({
  handleHelpClick,
  children,
}: {
  handleHelpClick: (e: React.MouseEvent) => void;
  children: React.ReactNode;
}) => {
  return (
    <Flex direction="row" align="center" px="lg" gap="xs">
      <Box flex={1}>{children}</Box>
      <ActionIcon
        variant="subtle"
        color="var(--mantine-color-dimmed)"
        onClick={handleHelpClick}
      >
        <IconInfoCircle />
      </ActionIcon>
    </Flex>
  );
};
