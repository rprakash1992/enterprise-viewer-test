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
import type { FaceLabel } from "../../../store/FaceLabelSlice";

export const EditFaceLabelContent = ({
  newFaceLabel,
  updateNewFaceLabel,
}: {
  newFaceLabel: FaceLabel;
  updateNewFaceLabel: (fieldName: string, fieldValue: string | boolean) => void;
}) => {
  const [changeValue, setChangeValue] = useState<string | null>("bgColor");

  return (
    <Box>
      <TextInput
        label="Title:"
        value={newFaceLabel?.title}
        onChange={(e) => updateNewFaceLabel("title", e.target.value)}
        mb="lg"
      />
      <Flex direction="row" align="center" justify="space-between" mb="lg">
        <Text size="14px" fw={500}>
          Border:
        </Text>
        <SegmentedControl
          value={newFaceLabel?.showBorder ? "enabled" : "disabled"}
          onChange={(val) =>
            updateNewFaceLabel("showBorder", val === "enabled" ? true : false)
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
          value={newFaceLabel?.showBg ? "enabled" : "disabled"}
          onChange={(val) =>
            updateNewFaceLabel("showBg", val === "enabled" ? true : false)
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
          value={newFaceLabel?.autoFit ? "enabled" : "disabled"}
          onChange={(val) =>
            updateNewFaceLabel("autoFit", val === "enabled" ? true : false)
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
                ? newFaceLabel?.bgColor
                : newFaceLabel?.borderColor
            }
            onChange={(val) => updateNewFaceLabel(changeValue, val)}
          />
        ) : (
          <Box>Dropzone</Box>
        )}
      </Flex>
    </Box>
  );
};
