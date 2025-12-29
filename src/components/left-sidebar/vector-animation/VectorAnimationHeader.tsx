import { Box, Text } from "@mantine/core";
import { HeaderWithGuildeBtn } from "../../common/header-with-guide-btn/HeaderWithGuideBtn";

export const VectorAnimationHeader = () => {
  return (
    <Box py="xs">
      <HeaderWithGuildeBtn handleHelpClick={() => {}}>
        <Text>Eigen Vector</Text>
      </HeaderWithGuildeBtn>
    </Box>
  );
};
