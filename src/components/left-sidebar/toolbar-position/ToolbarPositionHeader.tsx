import { useEffect, useState } from "react";
import { Box, Select, Text, type ComboboxItem } from "@mantine/core";
import { useStore } from "../../../store";
import { HeaderWithGuildeBtn } from "../../common/header-with-guide-btn/HeaderWithGuideBtn";
import type { Toolbar } from "../../../store/ToolbarsSlice";

interface ToolbarPositionHeaderProps {
  selectedToolbar: Toolbar | null;
}

export const ToolbarPositionHeader = ({
  selectedToolbar,
}: ToolbarPositionHeaderProps) => {
  const toolbars = useStore((state) => state.toolbars);
  const selectToolbar = useStore((state) => state.selectToolbar);
  const [value, setValue] = useState<ComboboxItem | null>(
    selectedToolbar
      ? {
          value: selectedToolbar.id,
          label: selectedToolbar.title,
        }
      : null
  );
  useEffect(() => {
    const tb = toolbars.find((item) => item.id === value?.value);
    selectToolbar(tb || null);
  }, [value]);

  return (
    <Box py="xs">
      <HeaderWithGuildeBtn handleHelpClick={() => {}}>
        <Text>Transform Toolbar</Text>
      </HeaderWithGuildeBtn>
      <Box mt="xs" px="lg">
        <Select
          checkIconPosition="right"
          placeholder="Apply to"
          // data={data}
          data={toolbars.map((item) => ({ value: item.id, label: item.title }))}
          value={value ? value?.value : null}
          onChange={(_value, option) => setValue(option)}
        />
      </Box>
    </Box>
  );
};
