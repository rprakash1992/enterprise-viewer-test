import { Flex, Text } from "@mantine/core";
import { HeaderWithGuildeBtn } from "../../common/header-with-guide-btn/HeaderWithGuideBtn";

export const AnimationsHeader = () => (
  <HeaderWithGuildeBtn handleHelpClick={() => {}}>
    <Flex direction="row" align="center" h={48}>
      <Text>Animations</Text>
    </Flex>
  </HeaderWithGuildeBtn>
);
