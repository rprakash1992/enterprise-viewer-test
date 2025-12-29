import { useStore } from "../../../store";
import type { Variable as VariableType } from "../../../store/VariableSlice";
import { MenuListItem } from "../../common/menu-list-item/MenuListItem";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { VariableHeader } from "./VariableHeader";

export const Variable = () => {
  const variables = useStore((state) => state.variables);
  const appliedVariable = useStore((state) => state.appliedVariable);
  const applyVariable = useStore((state) => state.applyVariable);
  const setSelectedTabItemId = useStore((state) => state.setSelectedTabItemId);
  const filterTempTabItems = useStore((state) => state.filterTempTabItems);

  const handleClick = (variable: VariableType) => {
    applyVariable(variable);
    setSelectedTabItemId("color_map_edit");
    filterTempTabItems();
  };

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <VariableHeader />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        {variables.map((item) => (
          <MenuListItem
            key={item.id}
            label={item.title}
            isActive={appliedVariable.id === item.id}
            onClick={() => handleClick(item)}
          />
        ))}
      </LeftSidebarLayout.Content>
    </LeftSidebarLayout>
  );
};
