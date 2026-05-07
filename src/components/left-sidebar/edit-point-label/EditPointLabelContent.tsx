import { useState } from "react";
import {
  Box,
  ColorPicker,
  Flex,
  SegmentedControl,
  Select,
  Text,
  TextInput,
} from "@mantine/core";
import type { PointLabel } from "../../../store/LabelSlice";

export const EditPointLabelContent = ({
  newPointLabel,
  updateNewPointLabel,
}: {
  newPointLabel: PointLabel;
  updateNewPointLabel: (
    fieldName: string,
    fieldValue: string | boolean,
  ) => void;
}) => {
  const [changeValue, setChangeValue] = useState<string | null>("bgColor");

  return (
    <Box>
      <TextInput
        label="Title:"
        value={newPointLabel?.title}
        onChange={(e) => updateNewPointLabel("title", e.target.value)}
        mb="lg"
      />
      <Flex direction="row" align="center" justify="space-between" mb="lg">
        <Text size="14px" fw={500}>
          Border:
        </Text>
        <SegmentedControl
          value={newPointLabel?.showBorder ? "enabled" : "disabled"}
          onChange={(val) =>
            updateNewPointLabel("showBorder", val === "enabled" ? true : false)
          }
          data={[
            { label: "Enabled", value: "enabled" },
            { label: "Disabled", value: "disabled" },
          ]}
        />
      </Flex>
      <Flex direction="row" align="center" justify="space-between" mb="lg">
        <Text size="14px" fw={500}>
          Background:
        </Text>
        <SegmentedControl
          value={newPointLabel?.showBg ? "enabled" : "disabled"}
          onChange={(val) =>
            updateNewPointLabel("showBg", val === "enabled" ? true : false)
          }
          data={[
            { label: "Enabled", value: "enabled" },
            { label: "Disabled", value: "disabled" },
          ]}
        />
      </Flex>
      <Flex direction="row" align="center" justify="space-between" mb="lg">
        <Text size="14px" fw={500}>
          Autofit:
        </Text>
        <SegmentedControl
          value={newPointLabel?.autoFit ? "enabled" : "disabled"}
          onChange={(val) =>
            updateNewPointLabel("autoFit", val === "enabled" ? true : false)
          }
          data={[
            { label: "Enabled", value: "enabled" },
            { label: "Disabled", value: "disabled" },
          ]}
        />
      </Flex>
      <Box>
        <Select
          label="Change:"
          value={changeValue}
          onChange={setChangeValue}
          checkIconPosition="right"
          data={[
            { value: "bgColor", label: "Background Color" },
            { value: "bgImage", label: "Background Image" },
            { value: "borderColor", label: "Border Color" },
          ]}
        />
      </Box>
      <Flex justify="center" align="center" mt="xs">
        {changeValue === "bgColor" || changeValue === "borderColor" ? (
          <ColorPicker
            format="rgba"
            value={
              changeValue === "bgColor"
                ? newPointLabel?.bgColor
                : newPointLabel?.borderColor
            }
            onChange={(val) => updateNewPointLabel(changeValue, val)}
          />
        ) : (
          <Box>Dropzone</Box>
        )}
      </Flex>
    </Box>
  );
};
