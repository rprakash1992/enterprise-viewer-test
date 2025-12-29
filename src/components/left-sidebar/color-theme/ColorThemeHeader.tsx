import { Box, Text } from "@mantine/core";
import { HeaderWithGuildeBtn } from "../../common/header-with-guide-btn/HeaderWithGuideBtn";

export const ColorThemeHeader = () => {
  return (
    <Box py="xs">
      <HeaderWithGuildeBtn handleHelpClick={() => {}}>
        <Text>Color Theme</Text>
      </HeaderWithGuildeBtn>
    </Box>
  );
};
