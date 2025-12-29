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

export const DisplayModesHeader = () => {
  const setDisplayModeAppliedTo = useStore(
    (state) => state.setDisplayModeAppliedTo
  );
  const [value, setValue] = useState<ComboboxItem | null>(null);

  useEffect(() => {
    setDisplayModeAppliedTo(value?.value ? value.value : null);
  }, [value]);

  return (
    <Box py="xs">
      <HeaderWithGuildeBtn handleHelpClick={() => {}}>
        <Text>Display Modes</Text>
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
