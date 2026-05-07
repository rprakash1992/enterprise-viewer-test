import { Box, ColorPicker, Flex } from "@mantine/core";
import { useStore } from "../../../store";

interface BackgroundContentProps {
  bgType: "color" | "image";
}

export const BackgroundContent = ({ bgType }: BackgroundContentProps) => {
  const selectedBgColor = useStore((state) => state.selectedBgColor);
  const setBgColor = useStore((state) => state.setBgColor);

  return (
    <Flex justify="center" align="center">
      {bgType === "color" ? (
        <ColorPicker
          format="rgba"
          value={selectedBgColor}
          onChange={setBgColor}
        />
      ) : (
        <Box>Dropzone</Box>
      )}
    </Flex>
  );
};
