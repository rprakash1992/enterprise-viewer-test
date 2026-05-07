import { useState } from "react";
import { AxisTriadHeader } from "./AxisTriadHeader";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { useStore } from "../../../store";
import { AxisTriadContent } from "./AxisTriadContent";

export const AxisTriad = () => {
  const axisTriadPositions = useStore((state) => state.axisTriadPositions);
  const selectedAxisTriadPosition = useStore(
    (state) => state.selectedAxisTriadPosition,
  );
  const selectAxisTriadPosition = useStore(
    (state) => state.selectAxisTriadPosition,
  );
  const [showValue, setShowValue] = useState<"on" | "off">("on");

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <AxisTriadHeader />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <AxisTriadContent
          showValue={showValue}
          axisTriadPositions={axisTriadPositions}
          selectedAxisTriadPositionId={selectedAxisTriadPosition.id}
          selectAxisTriadPosition={selectAxisTriadPosition}
          setShowValue={setShowValue}
        />
      </LeftSidebarLayout.Content>
    </LeftSidebarLayout>
  );
};
