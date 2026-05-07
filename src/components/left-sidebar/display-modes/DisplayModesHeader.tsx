import { Box, Select, Text } from "@mantine/core";
import { HeaderWithGuildeBtn } from "../../common/header-with-guide-btn/HeaderWithGuideBtn";
import type { Selection } from "../../../store/DisplayModesSlice";

interface DisplayModesHeaderProps {
  displayModeAppliedTo: Selection | null;
  setDisplayModeAppliedTo: (val: Selection | null) => void;
}

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

export const DisplayModesHeader = ({
  displayModeAppliedTo,
  setDisplayModeAppliedTo,
}: DisplayModesHeaderProps) => {
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
          value={displayModeAppliedTo}
          onChange={(val) => setDisplayModeAppliedTo(val as Selection)}
        />
      </Box>
    </Box>
  );
};
