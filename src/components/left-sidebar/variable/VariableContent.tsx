import { Box } from "@mantine/core";
import { MenuListItem } from "../../common/menu-list-item/MenuListItem";
import type { Variable } from "../../../store/VariableSlice";

interface VariableContentProps {
  variables: Variable[];
  appliedVariable: Variable;
  handleClick: (val: Variable) => void;
}

export const VariableContent = ({
  variables,
  appliedVariable,
  handleClick,
}: VariableContentProps) => {
  return (
    <Box>
      {variables.map((item) => (
        <MenuListItem
          key={item.id}
          label={item.title}
          isActive={appliedVariable.id === item.id}
          onClick={() => handleClick(item)}
        />
      ))}
    </Box>
  );
};
