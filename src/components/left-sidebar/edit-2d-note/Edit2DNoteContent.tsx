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
import type { TwoDNote } from "../../../store/LabelSlice";

export const EditTwoDNoteContent = ({
  newTwoDNote,
  updateNewTwoDNote,
}: {
  newTwoDNote: TwoDNote;
  updateNewTwoDNote: (fieldName: string, fieldValue: string | boolean) => void;
}) => {
  const [changeValue, setChangeValue] = useState<string | null>("bgColor");

  return (
    <Box>
      <TextInput
        label="Title:"
        value={newTwoDNote?.title}
        onChange={(e) => updateNewTwoDNote("title", e.target.value)}
        mb="lg"
      />
      <Flex direction="row" align="center" justify="space-between" mb="lg">
        <Text size="14px" fw={500}>
          Border:
        </Text>
        <SegmentedControl
          value={newTwoDNote?.showBorder ? "enabled" : "disabled"}
          onChange={(val) =>
            updateNewTwoDNote("showBorder", val === "enabled" ? true : false)
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
          value={newTwoDNote?.showBg ? "enabled" : "disabled"}
          onChange={(val) =>
            updateNewTwoDNote("showBg", val === "enabled" ? true : false)
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
          value={newTwoDNote?.autoFit ? "enabled" : "disabled"}
          onChange={(val) =>
            updateNewTwoDNote("autoFit", val === "enabled" ? true : false)
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
                ? newTwoDNote?.bgColor
                : newTwoDNote?.borderColor
            }
            onChange={(val) => updateNewTwoDNote(changeValue, val)}
          />
        ) : (
          <Box>Dropzone</Box>
        )}
      </Flex>
    </Box>
  );
};
