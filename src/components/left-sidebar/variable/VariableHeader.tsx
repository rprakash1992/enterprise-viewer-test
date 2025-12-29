import { useState } from "react";
import { Box, Select, Text, type ComboboxItem } from "@mantine/core";

const data = [
  {
    label: "Syatem",
    value: "system",
  },
  {
    label: "23WL_3p6L_PSU_4x4_850RE_1stGear_InterLoads_PO_13July21_v2022",
    value: "23WL_3p6L_PSU_4x4_850RE_1stGear_InterLoads_PO_13July21_v2022",
  },
];

export const VariableHeader = () => {
  const [value, setValue] = useState<ComboboxItem | null>(null);

  return (
    <Box px={"lg"} py={"xs"}>
      <Text mb={"xs"}>Variable</Text>
      <Select
        checkIconPosition="right"
        placeholder="Apply to"
        data={data}
        value={value ? value?.value : null}
        onChange={(_value, option) => setValue(option)}
      />
    </Box>
  );
};
