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
import type { ThreePointArcLength } from "../../../store/LabelSlice";

export const EditThreePointArcLengthContent = ({
  newThreePointArcLength,
  updateNewThreePointArcLength,
}: {
  newThreePointArcLength: ThreePointArcLength;
  updateNewThreePointArcLength: (
    fieldName: string,
    fieldValue: string | boolean,
  ) => void;
}) => {
  const [changeValue, setChangeValue] = useState<string | null>("bgColor");

  return (
    <Box>
      <TextInput
        mb="lg"
        label="Title:"
        value={newThreePointArcLength?.title}
        onChange={(e) => updateNewThreePointArcLength("title", e.target.value)}
      />
      <Flex direction="row" align="center" justify="space-between" mb="lg">
        <Text size="14px" fw={500}>
          Border:
        </Text>
        <SegmentedControl
          value={newThreePointArcLength?.showBorder ? "enabled" : "disabled"}
          onChange={(val) =>
            updateNewThreePointArcLength(
              "showBorder",
              val === "enabled" ? true : false,
            )
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
          value={newThreePointArcLength?.showBg ? "enabled" : "disabled"}
          onChange={(val) =>
            updateNewThreePointArcLength(
              "showBg",
              val === "enabled" ? true : false,
            )
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
          value={newThreePointArcLength?.autoFit ? "enabled" : "disabled"}
          onChange={(val) =>
            updateNewThreePointArcLength(
              "autoFit",
              val === "enabled" ? true : false,
            )
          }
          data={[
            { label: "Enabled", value: "enabled" },
            { label: "Disabled", value: "disabled" },
          ]}
        />
      </Flex>
      <Box mb="lg">
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
      <Flex justify="center" align="center" mb="lg">
        {changeValue === "bgColor" || changeValue === "borderColor" ? (
          <ColorPicker
            format="rgba"
            value={
              changeValue === "bgColor"
                ? newThreePointArcLength?.bgColor
                : newThreePointArcLength?.borderColor
            }
            onChange={(val) => updateNewThreePointArcLength(changeValue, val)}
          />
        ) : (
          <Box>Dropzone</Box>
        )}
      </Flex>
    </Box>
  );
};
