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
import type { TwoDPlot } from "../../../store/LabelSlice";

export const EditTwoDPlotContent = ({
  newTwoDPlot,
  updateNewTwoDPlot,
}: {
  newTwoDPlot: TwoDPlot;
  updateNewTwoDPlot: (fieldName: string, fieldValue: string | boolean) => void;
}) => {
  const [changeValue, setChangeValue] = useState<string | null>("bgColor");

  return (
    <Box>
      <TextInput
        mb="lg"
        label="Chart Title:"
        value={newTwoDPlot?.title}
        onChange={(e) => updateNewTwoDPlot("title", e.target.value)}
      />
      <TextInput
        mb="lg"
        label="X Axis Title:"
        value={newTwoDPlot?.xAxisTitle}
        onChange={(e) => updateNewTwoDPlot("xAxisTitle", e.target.value)}
      />
      <TextInput
        mb="lg"
        label="Y Axis Title:"
        value={newTwoDPlot?.yAxisTitle}
        onChange={(e) => updateNewTwoDPlot("yAxisTitle", e.target.value)}
      />
      <TextInput
        mb="lg"
        label="X Axis Value:"
        value={newTwoDPlot?.xAxisValue}
        onChange={(e) => updateNewTwoDPlot("xAxisValue", e.target.value)}
      />
      <TextInput
        mb="lg"
        label="Y Axis Value:"
        value={newTwoDPlot?.yAxisValue}
        onChange={(e) => updateNewTwoDPlot("yAxisValue", e.target.value)}
      />
      <Flex direction="row" align="center" justify="space-between" mb="lg">
        <Text size="14px" fw={500}>
          Border:
        </Text>
        <SegmentedControl
          value={newTwoDPlot?.showBorder ? "enabled" : "disabled"}
          onChange={(val) =>
            updateNewTwoDPlot("showBorder", val === "enabled" ? true : false)
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
          value={newTwoDPlot?.showBg ? "enabled" : "disabled"}
          onChange={(val) =>
            updateNewTwoDPlot("showBg", val === "enabled" ? true : false)
          }
          data={[
            { label: "Enabled", value: "enabled" },
            { label: "Disabled", value: "disabled" },
          ]}
        />
      </Flex>
      <Box mb="lg">
        <Select
          label="Change"
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
                ? newTwoDPlot?.bgColor
                : newTwoDPlot?.borderColor
            }
            onChange={(val) => updateNewTwoDPlot(changeValue, val)}
          />
        ) : (
          <Box>Dropzone</Box>
        )}
      </Flex>
    </Box>
  );
};
