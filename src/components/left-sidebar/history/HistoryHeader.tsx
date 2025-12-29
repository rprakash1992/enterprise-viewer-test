import { useEffect, useState } from "react";
import { Box, Select, Text, type ComboboxItem } from "@mantine/core";
import { useStore } from "../../../store";
import { HeaderWithGuildeBtn } from "../../common/header-with-guide-btn/HeaderWithGuideBtn";

const data = [
  {
    label: "All Parts",
    value: "all_parts",
  },
  {
    label: "Selected Parts",
    value: "selected_parts",
  },
  {
    label: "Unselected Parts",
    value: "unselected_parts",
  },
];

export const HistoryHeader = () => {
  const setHistoryAppliedTo = useStore((state) => state.setHistoryAppliedTo);
  const [value, setValue] = useState<ComboboxItem | null>(null);

  useEffect(() => {
    setHistoryAppliedTo(value?.value ? value.value : null);
  }, [value]);

  return (
    <Box py="xs">
      <HeaderWithGuildeBtn handleHelpClick={() => {}}>
        <Text>History</Text>
      </HeaderWithGuildeBtn>
      <Box mt="xs" px="lg">
        <Select
          checkIconPosition="right"
          placeholder="Apply to"
          data={data}
          value={value ? value?.value : null}
          onChange={(_value, option) => setValue(option)}
        />
      </Box>
    </Box>
  );
};
