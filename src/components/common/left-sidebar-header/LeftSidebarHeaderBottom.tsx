import { Box, Select } from "@mantine/core";

interface SelectData {
  label: string;
  value: string;
}

interface LeftSidebarHeaderBottomProps {
  withDropdown?: boolean;
  selectData?: SelectData[];
  selectedData?: string | null;
  setSelectedData?: (val: string | null) => void;
}

export const LeftSidebarHeaderBottom = ({
  withDropdown,
  selectData,
  selectedData,
  setSelectedData,
}: LeftSidebarHeaderBottomProps) => {
  return (
    <Box>
      {withDropdown && (
        <Box mb="xs">
          <Select
            checkIconPosition="right"
            placeholder="Apply to"
            data={selectData}
            value={selectedData}
            onChange={setSelectedData}
          />
        </Box>
      )}
    </Box>
  );
};
