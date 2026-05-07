import { Box, Flex, SegmentedControl } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { LabelText } from "../../common/label-text/LabelText";
import { MenuListItem } from "../../common/menu-list-item/MenuListItem";
import type { AxisTriadPosition } from "../../../store/AxisTriadSlice";

export const AxisTriadContent = ({
  showValue,
  axisTriadPositions,
  selectedAxisTriadPositionId,
  selectAxisTriadPosition,
  setShowValue,
}: {
  showValue: "on" | "off";
  axisTriadPositions: AxisTriadPosition[];
  selectedAxisTriadPositionId: string;
  selectAxisTriadPosition: (item: AxisTriadPosition) => void;
  setShowValue: (val: "on" | "off") => void;
}) => {
  return (
    <Box>
      <Flex direction="row" justify="space-between" align="center" mb="lg">
        <LabelText text="Show:" />
        <SegmentedControl
          value={showValue}
          onChange={(val) => setShowValue(val as "on" | "off")}
          data={[
            { label: "On", value: "on" },
            { label: "Off", value: "off" },
          ]}
        />
      </Flex>
      <LabelText text="Position:" mb="xs" />
      {axisTriadPositions.map((item) => (
        <MenuListItem
          key={item.id}
          label={item.title}
          rightIcon={selectedAxisTriadPositionId === item.id ? IconCheck : null}
          isActive={selectedAxisTriadPositionId === item.id}
          onClick={() => selectAxisTriadPosition(item)}
        />
      ))}
    </Box>
  );
};
