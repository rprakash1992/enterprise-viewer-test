import { Box, Text } from "@mantine/core";
import { HeaderWithGuildeBtn } from "../../common/header-with-guide-btn/HeaderWithGuideBtn";

export const ClipPlanesHeader = () => {
  return (
    <Box py="xs">
      <HeaderWithGuildeBtn handleHelpClick={() => {}}>
        <Text>List</Text>
      </HeaderWithGuildeBtn>
    </Box>
  );
};
