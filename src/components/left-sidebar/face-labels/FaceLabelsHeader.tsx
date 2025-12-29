import { Box, Text } from "@mantine/core";
import { HeaderWithGuildeBtn } from "../../common/header-with-guide-btn/HeaderWithGuideBtn";

export const FaceLabelsHeader = () => {
  return (
    <Box py="xs">
      <HeaderWithGuildeBtn handleHelpClick={() => {}}>
        <Text>Face Label</Text>
      </HeaderWithGuildeBtn>
    </Box>
  );
};
