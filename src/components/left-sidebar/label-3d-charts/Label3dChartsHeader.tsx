import { Box, Text } from "@mantine/core";
import { HeaderWithGuildeBtn } from "../../common/header-with-guide-btn/HeaderWithGuideBtn";

export const Label3DChartsHeader = () => {
  return (
    <Box py="xs">
      <HeaderWithGuildeBtn handleHelpClick={() => {}}>
        <Text>3D Charts</Text>
      </HeaderWithGuildeBtn>
    </Box>
  );
};
