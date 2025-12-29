import { Box, Button } from "@mantine/core";
import { useStore } from "../../../store";

export const DisplayModesFooter = () => {
  const selectedDisplayMode = useStore((state) => state.selectedDisplayMode);
  const handleDownloadAndShow = useStore(
    (state) => state.handleDownloadAndShow
  );

  return (
    <Box p="lg">
      <Button fullWidth onClick={handleDownloadAndShow}>
        Download & Show ({selectedDisplayMode?.size} MB)
      </Button>
    </Box>
  );
};
