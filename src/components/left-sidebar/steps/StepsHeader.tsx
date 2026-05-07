import { useState } from "react";
import { Box, Select, Text, type ComboboxItem } from "@mantine/core";
import { HeaderWithGuildeBtn } from "../../common/header-with-guide-btn/HeaderWithGuideBtn";

const data = [
  {
    label: "System",
    value: "system",
  },
  {
    label: "23WL_3p6L_PSU_4x4_850RE_1stGear_InterLoads_PO_13July21_v2022",
    value: "23WL_3p6L_PSU_4x4_850RE_1stGear_InterLoads_PO_13July21_v2022",
  },
];

export const StepsHeader = () => {
  const [value, setValue] = useState<ComboboxItem | null>(data[0]);

  return (
    <Box py="xs">
      <HeaderWithGuildeBtn handleHelpClick={() => {}}>
        <Text>Steps & Subcases</Text>
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
