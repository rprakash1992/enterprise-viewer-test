import { Box, ColorPicker, Flex } from "@mantine/core";
import { BackgroundHeader } from "./BackgroundHeader";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { useStore } from "../../../store";
import { useState } from "react";

export const Background = () => {
  const selectedBgColor = useStore((state) => state.selectedBgColor);
  const setBgColor = useStore((state) => state.setBgColor);
  const [bgType, setBgType] = useState<"color" | "image">("color");

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <BackgroundHeader bgType={bgType} setBgType={setBgType} />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <Flex justify="center" align="center" pt="xs">
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
      </LeftSidebarLayout.Content>
    </LeftSidebarLayout>
  );
};
