import { Box, Button } from "@mantine/core";
import type { Toolbar } from "../../../store/ToolbarsSlice";

interface ToolbarItemsFooterProps {
  checkedToolbarItems: string[];
  selectedToolbar: Toolbar | null | undefined;
  onSave: () => void;
}

export const ToolbarItemsFooter = ({
  checkedToolbarItems,
  selectedToolbar,
  onSave,
}: ToolbarItemsFooterProps) => {
  if (checkedToolbarItems.length === 0 || !selectedToolbar?.isEditable) {
    return null;
  }

  return (
    <Box mx="lg" mb="xs">
      <Button fullWidth onClick={onSave}>
        Save
      </Button>
    </Box>
  );
};
