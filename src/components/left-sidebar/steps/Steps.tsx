import { useStore } from "../../../store";
import type { Step } from "../../../store/StepsSlice";
import { MenuListItem } from "../../common/menu-list-item/MenuListItem";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { StepsHeader } from "./StepsHeader";

export const Steps = () => {
  const steps = useStore((state) => state.steps);
  const appliedStep = useStore((state) => state.appliedStep);
  const applyStep = useStore((state) => state.applyStep);
  const setSelectedTabItemId = useStore((state) => state.setSelectedTabItemId);
  const filterTempTabItems = useStore((state) => state.filterTempTabItems);

  const handleClick = (variable: Step) => {
    applyStep(variable);
    setSelectedTabItemId("color_map_edit");
    filterTempTabItems();
  };

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <StepsHeader />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        {steps.map((item) => (
          <MenuListItem
            key={item.id}
            label={item.title}
            isActive={appliedStep.id === item.id}
            onClick={() => handleClick(item)}
          />
        ))}
      </LeftSidebarLayout.Content>
    </LeftSidebarLayout>
  );
};
