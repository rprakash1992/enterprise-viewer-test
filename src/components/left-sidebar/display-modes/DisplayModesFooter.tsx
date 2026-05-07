import { Box, Button } from "@mantine/core";

interface DisplayModesFooterProps {
  downloadSize: number;
  unit: string;
  isDownloading: boolean;
  handleDownloadDisplayModes: () => void;
}

export const DisplayModesFooter = ({
  downloadSize,
  unit,
  isDownloading,
  handleDownloadDisplayModes,
}: DisplayModesFooterProps) => {
  return (
    <Box p="lg">
      <Button
        loading={isDownloading}
        fullWidth
        onClick={handleDownloadDisplayModes}
      >
        Download & Show ({downloadSize} {unit})
      </Button>
    </Box>
  );
};
