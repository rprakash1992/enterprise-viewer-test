import {
  Box,
  Flex,
  SegmentedControl,
  Select,
  Text,
  TextInput,
} from "@mantine/core";
import { useState } from "react";
import type { TwoDNote } from "../../../store/2DNotesSlice";

type EnableDisableType = "enabled" | "disaable";

export const Edit2DNote = ({ editing2DNote }: { editing2DNote: TwoDNote }) => {
  const [label, setLabel] = useState<string>(editing2DNote?.title ?? "");
  const [showBorder, setShowBorder] = useState<EnableDisableType>("enabled");
  const [showBgColor, setShowBgColor] = useState<EnableDisableType>("enabled");
  const [autoFit, setAutoFit] = useState<EnableDisableType>("enabled");
  const [changeValue, setChangeValue] = useState<string | null>("bgColor");

  return (
    <Box flex={1} style={{ overflowY: "auto" }} px="lg" py="xs">
      <TextInput value={label} onChange={(e) => setLabel(e.target.value)} />
      <Flex direction="row" align="center" justify="space-between" mt="xs">
        <Text size="14px" fw={500}>
          Border:
        </Text>
        <SegmentedControl
          value={showBorder}
          onChange={(val) => setShowBorder(val as EnableDisableType)}
          data={[
            { label: "Enabled", value: "enabled" },
            { label: "Disabled", value: "disaable" },
          ]}
        />
      </Flex>
      <Flex direction="row" align="center" justify="space-between" mt="xs">
        <Text size="14px" fw={500}>
          Background:
        </Text>
        <SegmentedControl
          value={showBgColor}
          onChange={(val) => setShowBgColor(val as EnableDisableType)}
          data={[
            { label: "Enabled", value: "enabled" },
            { label: "Disabled", value: "disaable" },
          ]}
        />
      </Flex>
      <Flex direction="row" align="center" justify="space-between" mt="xs">
        <Text size="14px" fw={500}>
          Autofit:
        </Text>
        <SegmentedControl
          value={autoFit}
          onChange={(val) => setAutoFit(val as EnableDisableType)}
          data={[
            { label: "Enabled", value: "enabled" },
            { label: "Disabled", value: "disaable" },
          ]}
        />
      </Flex>
      <Box mt="xs">
        <Select
          label="Change"
          value={changeValue}
          onChange={setChangeValue}
          checkIconPosition="right"
          data={[
            { value: "bgColor", label: "Background Color" },
            { value: "bgImage", label: "BackgroundImage" },
            { value: "borderColor", label: "Border Color" },
          ]}
        />
      </Box>
    </Box>
  );
};
