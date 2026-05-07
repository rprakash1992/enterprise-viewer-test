import { Box, Divider } from "@mantine/core";
import { CheckboxListItem } from "../../common/checkbox-list-item/CheckboxListItem";
import type { ToolbarItem } from "../../../store/ToolbarItemsSlice";
import type { Toolbar } from "../../../store/ToolbarsSlice";

interface ToolbarItemsContentProps {
  selectedToolbar: Toolbar | null | undefined;
  toolbarItems: ToolbarItem[];
  filteredToolbarItems: ToolbarItem[];
  checkedToolbarItems: string[];
  isNotEditableToolbars: boolean;
  onCheckItem: (id: string) => void;
  onCheckAll: () => void;
}

export const ToolbarItemsContent = ({
  selectedToolbar,
  toolbarItems,
  filteredToolbarItems,
  checkedToolbarItems,
  isNotEditableToolbars,
  onCheckItem,
  onCheckAll,
}: ToolbarItemsContentProps) => {
  return (
    <Box mb="lg">
      {selectedToolbar && selectedToolbar.items?.length > 0 && (
        <Box>
          {selectedToolbar.items.map((item: ToolbarItem) => (
            <CheckboxListItem
              key={item.id}
              label={item.title}
              icon={item.icon}
              checked={checkedToolbarItems.includes(item.id)}
              setChecked={() => onCheckItem(item.id)}
              isDisabled={isNotEditableToolbars}
            />
          ))}
          <Divider />
        </Box>
      )}
      <CheckboxListItem
        label="SelectAll"
        checked={checkedToolbarItems.length === toolbarItems.length}
        setChecked={onCheckAll}
        isDisabled={isNotEditableToolbars}
      />
      {filteredToolbarItems.map((item) => (
        <CheckboxListItem
          key={item.id}
          label={item.title}
          icon={item.icon}
          checked={checkedToolbarItems.includes(item.id)}
          setChecked={() => onCheckItem(item.id)}
          isDisabled={isNotEditableToolbars || !selectedToolbar}
        />
      ))}
    </Box>
  );
};
