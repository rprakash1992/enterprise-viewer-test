import { useNavigate } from "react-router";
import { useStore } from "../../../store";
import type { Variable as VariableType } from "../../../store/VariableSlice";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { VariableHeader } from "./VariableHeader";
import { VariableContent } from "./VariableContent";

export const Variable = () => {
  const variables = useStore((state) => state.variables);
  const appliedVariable = useStore((state) => state.appliedVariable);
  const applyVariable = useStore((state) => state.applyVariable);
  const filterTempTabItems = useStore((state) => state.filterTempTabItems);
  const navigate = useNavigate();

  const handleClick = (variable: VariableType) => {
    applyVariable(variable);
    navigate("/color_map_edit");
    filterTempTabItems();
  };

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <VariableHeader />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content noPadding>
        <VariableContent
          variables={variables}
          appliedVariable={appliedVariable}
          handleClick={handleClick}
        />
      </LeftSidebarLayout.Content>
    </LeftSidebarLayout>
  );
};
