import { Box, Flex, Text } from "@mantine/core";
import { HeaderWithGuildeBtn } from "../../common/header-with-guide-btn/HeaderWithGuideBtn";
import { useColors } from "../../../hooks/useColors";

interface BackgroundHeaderProps {
  bgType: "color" | "image";
  setBgType: (val: "color" | "image") => void;
}

const SelectBackgroundType = ({ bgType, setBgType }: BackgroundHeaderProps) => {
  const { activeBgColor } = useColors();

  return (
    <Box>
      <Flex direction="row" align="center" mt="xs">
        <Box
          py="xs"
          flex={1}
          onClick={() => setBgType("color")}
          style={{
            cursor: "pointer",
          }}
        >
          <Text ta="center">Color</Text>
        </Box>
        <Box
          py="xs"
          flex={1}
          onClick={() => setBgType("image")}
          style={{
            cursor: "pointer",
          }}
        >
          <Text ta="center">Image</Text>
        </Box>
      </Flex>
      <Box style={{ width: "100%", height: 2, position: "relative" }}>
        <Box
          style={{
            width: "50%",
            height: "100%",
            backgroundColor: activeBgColor,
            position: "absolute",
            transition: "0.2s ease left",
            left: bgType === "color" ? 0 : "50%",
          }}
        />
      </Box>
    </Box>
  );
};

export const BackgroundHeader = ({
  bgType,
  setBgType,
}: BackgroundHeaderProps) => {
  return (
    <Box pt="xs">
      <HeaderWithGuildeBtn handleHelpClick={() => {}}>
        <Text>Background</Text>
      </HeaderWithGuildeBtn>
      <SelectBackgroundType bgType={bgType} setBgType={setBgType} />
    </Box>
  );
};
