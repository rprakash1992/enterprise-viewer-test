import { Box, Button, Divider } from "@mantine/core";
import { ToolbarItemsHeader } from "./ToolbarItemsHeader";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { useStore } from "../../../store";
import { CheckboxListItem } from "../../common/checkbox-list-item/CheckboxListItem";
import type { ToolbarItem } from "../../../store/ToolbarItemsSlice";
import { type Toolbar } from "../../../store/ToolbarsSlice";

export const ToolbarItems = () => {
  const toolbarItems = useStore((state) => state.toolbarItems);
  const toolbars = useStore((state) => state.toolbars);
  const checkedToolbarItems = useStore((state) => state.checkedToolbarItems);
  const selectedToolbar = useStore((state) => state.selectedToolbar);
  const setToolbars = useStore((state) => state.setToolbars);
  const checkToolbarItem = useStore((state) => state.checkToolbarItem);
  const setSelectedTabItemId = useStore((state) => state.setSelectedTabItemId);
  const setCheckedToolbarItems = useStore(
    (state) => state.setCheckedToolbarItems
  );

  const isNotEditableToolbars = !selectedToolbar?.isEditable;

  let filteredToolbarItems = toolbarItems;

  if (selectedToolbar?.id) {
    const selectedToolbarItemsIds = selectedToolbar.items.map(
      (item) => item.id
    );
    filteredToolbarItems = toolbarItems.filter(
      (item) => !selectedToolbarItemsIds.includes(item.id)
    );
  }

  toolbarItems.filter;

  const handleCheckAll = () => {
    if (checkedToolbarItems.length === toolbarItems.length) {
      setCheckedToolbarItems([]);
    } else {
      setCheckedToolbarItems(toolbarItems.map((item) => item.id));
    }
  };

  const handleSaveToolbar = () => {
    if (!selectedToolbar) return;

    const newToolbar: Toolbar = {
      id: selectedToolbar?.id,
      title: selectedToolbar?.title,
      items: checkedToolbarItems.map(
        (item) => toolbarItems.find((i) => i.id === item)!
      ),
      isDeletable: true,
      isEditable: true,
      isTransformable: true,
    };

    setToolbars(
      toolbars.map((item) => (item.id === newToolbar.id ? newToolbar : item))
    );
    setSelectedTabItemId("toolbars");
  };

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <ToolbarItemsHeader selectedToolbar={selectedToolbar} />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <Box mb="lg">
          {selectedToolbar && selectedToolbar.items?.length > 0 && (
            <Box>
              {selectedToolbar.items.map((item: ToolbarItem) => (
                <CheckboxListItem
                  key={item.id}
                  label={item.title}
                  icon={item.icon}
                  checked={checkedToolbarItems.includes(item.id)}
                  setChecked={() => checkToolbarItem(item.id)}
                  isDisabled={isNotEditableToolbars}
                />
              ))}
              <Divider />
            </Box>
          )}
          <CheckboxListItem
            label="SelectAll"
            checked={checkedToolbarItems.length === toolbarItems.length}
            setChecked={handleCheckAll}
            isDisabled={isNotEditableToolbars}
          />
          {filteredToolbarItems.map((item) => (
            <CheckboxListItem
              key={item.id}
              label={item.title}
              icon={item.icon}
              checked={checkedToolbarItems.includes(item.id)}
              setChecked={() => checkToolbarItem(item.id)}
              isDisabled={isNotEditableToolbars || !selectedToolbar}
            />
          ))}
        </Box>
      </LeftSidebarLayout.Content>
      <LeftSidebarLayout.Footer>
        {checkedToolbarItems.length > 0 && selectedToolbar?.isEditable && (
          <Box mx="lg" mb="xs">
            <Button fullWidth onClick={handleSaveToolbar}>
              Save
            </Button>
          </Box>
        )}
      </LeftSidebarLayout.Footer>
    </LeftSidebarLayout>
  );
};
