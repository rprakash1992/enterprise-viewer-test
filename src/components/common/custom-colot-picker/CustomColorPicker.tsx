import {
  Box,
  ColorPicker,
  Flex,
  Select,
  type ComboboxData,
} from "@mantine/core";

interface CustomColorPickerProps {
  selectData: ComboboxData;
  selectedData: string;
  currentItemBgColor: string;
  currentItemBorderColor: string;
  onSelectChange: (val: string | null) => void;
  updateColor: (selectedData: string, val: string) => void;
}

export const CustomColorPicker = ({
  selectData,
  selectedData,
  currentItemBgColor,
  currentItemBorderColor,
  onSelectChange,
  updateColor,
}: CustomColorPickerProps) => {
  return (
    <Box>
      <Box mt="xs">
        <Select
          label="Change"
          value={selectedData}
          onChange={onSelectChange}
          checkIconPosition="right"
          data={selectData}
        />
      </Box>
      <Flex justify="center" align="center" mt="xs">
        {selectedData === "bgColor" || selectedData === "borderColor" ? (
          <ColorPicker
            format="rgba"
            value={
              selectedData === "bgColor"
                ? currentItemBgColor
                : currentItemBorderColor
            }
            onChange={(val) => updateColor(selectedData, val)}
          />
        ) : (
          <Box>Dropzone</Box>
        )}
      </Flex>
    </Box>
  );
};
