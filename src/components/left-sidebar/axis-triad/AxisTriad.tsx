import { useState } from "react";
import { Flex, SegmentedControl, Text } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { AxisTriadHeader } from "./AxisTriadHeader";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { useStore } from "../../../store";
import { MenuListItem } from "../../common/menu-list-item/MenuListItem";

export const AxisTriad = () => {
  const axisTriadPositions = useStore((state) => state.axisTriadPositions);
  const selectedAxisTriadPosition = useStore(
    (state) => state.selectedAxisTriadPosition
  );
  const selectAxisTriadPosition = useStore(
    (state) => state.selectAxisTriadPosition
  );
  const [value, setValue] = useState<string>("on");

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <AxisTriadHeader />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <Flex
          direction="row"
          justify="space-between"
          align="center"
          px="lg"
          py="xs"
        >
          <Text>Show:</Text>
          <SegmentedControl
            value={value}
            onChange={setValue}
            data={[
              { label: "On", value: "on" },
              { label: "Off", value: "off" },
            ]}
          />
        </Flex>
        <Text px="lg">Position:</Text>
        {axisTriadPositions.map((item) => (
          <MenuListItem
            key={item.id}
            label={item.title}
            rightIcon={
              selectedAxisTriadPosition.id === item.id ? IconCheck : null
            }
            isActive={selectedAxisTriadPosition.id === item.id}
            onClick={() => selectAxisTriadPosition(item)}
          />
        ))}
      </LeftSidebarLayout.Content>
    </LeftSidebarLayout>
  );
};
