import { Box, Select, Text } from "@mantine/core";
import { HeaderWithGuildeBtn } from "../../common/header-with-guide-btn/HeaderWithGuideBtn";
import type { Selection } from "../../../store/DisplayModesSlice";

interface DisplayModesHeaderProps {
  geometryTransformAppliedTo: Selection | null;
  setGeometryTransformAppliedTo: (val: Selection | null) => void;
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

export const GeometryTransformHeader = ({
  geometryTransformAppliedTo,
  setGeometryTransformAppliedTo,
}: DisplayModesHeaderProps) => {
  return (
    <Box py="xs">
      <HeaderWithGuildeBtn handleHelpClick={() => {}}>
        <Text>Geometry Transform</Text>
      </HeaderWithGuildeBtn>
      <Box mt="xs" px="lg">
        <Select
          checkIconPosition="right"
          placeholder="Apply to"
          data={data}
          value={geometryTransformAppliedTo}
          onChange={(val) => setGeometryTransformAppliedTo(val as Selection)}
        />
      </Box>
    </Box>
  );
};
