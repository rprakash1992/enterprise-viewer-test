import { Box } from "@mantine/core";
import { MenuListItem } from "../../common/menu-list-item/MenuListItem";
import type { Step } from "../../../store/StepsSlice";

interface StepsContentProps {
  steps: Step[];
  appliedStep: Step;
  handleClick: (val: Step) => void;
}

export const StepsContent = ({
  steps,
  appliedStep,
  handleClick,
}: StepsContentProps) => {
  return (
    <Box>
      {steps.map((item) => (
        <MenuListItem
          key={item.id}
          label={item.title}
          isActive={appliedStep.id === item.id}
          onClick={() => handleClick(item)}
        />
      ))}
    </Box>
  );
};
