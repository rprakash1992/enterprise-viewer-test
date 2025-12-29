import { Box, Button } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { ToolbarsHeader } from "./ToolbarHeader";
import { ToolbarsFooter } from "./ToolbarsFooter";
import { useStore } from "../../../store";
import { MenuListItem } from "../../common/menu-list-item/MenuListItem";
import type { Toolbar } from "../../../store/ToolbarsSlice";

export const Toolbars = () => {
  const tabItems = useStore((state) => state.tabItems);
  const menuItems = useStore((state) => state.menuItems);
  const toolbars = useStore((state) => state.toolbars);
  const selectedToolbar = useStore((state) => state.selectedToolbar);
  const selectToolbar = useStore((state) => state.selectToolbar);
  const insertTabItem = useStore((state) => state.insertTabItem);
  const setSelectedTabItemId = useStore((state) => state.setSelectedTabItemId);
  const addToolbar = useStore((state) => state.addToolbar);
  const setToolbars = useStore((state) => state.setToolbars);

  const handleClick = (toolbar: Toolbar) => {
    if (selectedToolbar?.id === toolbar?.id) {
      selectToolbar(null);
    } else {
      selectToolbar(toolbar);
    }
  };

  const navigateToTab = (tabItemId: string) => {
    const item = menuItems.find((i) => i.id === tabItemId);

    const isItemAlreadyPresentInTabs = tabItems.find((i) => i.id === item?.id);

    if (!isItemAlreadyPresentInTabs) {
      insertTabItem({ ...item!, type: "temporary" });
    }
    setSelectedTabItemId(tabItemId);
  };

  const handleTransformToolbar = () => {
    // const tabItemId = "toolbar_position";
    // const item = menuItems.find((i) => i.id === tabItemId);

    // const isItemAlreadyPresentInTabs = tabItems.find((i) => i.id === item?.id);

    // if (!isItemAlreadyPresentInTabs) {
    //   insertTabItem({ ...item!, type: "temporary" });
    // }
    // setSelectedTabItemId(tabItemId);
    navigateToTab("toolbar_position");
  };

  const handleAddToolbar = () => {
    const newToolbarId = toolbars.length - 2;
    const newToolbar: Toolbar = {
      id: "toolbar_group_" + newToolbarId,
      title: "Toolbar Group " + newToolbarId,
      isDeletable: true,
      isEditable: true,
      isTransformable: true,
      items: [],
    };
    addToolbar(newToolbar);
    selectToolbar(newToolbar);

    // const tabItemId = "toolbar_items";
    // const item = menuItems.find((i) => i.id === tabItemId);

    // const isItemAlreadyPresentInTabs = tabItems.find((i) => i.id === item?.id);

    // if (!isItemAlreadyPresentInTabs) {
    //   insertTabItem({ ...item!, type: "temporary" });
    // }
    // setSelectedTabItemId(tabItemId);
    navigateToTab("toolbar_items");
  };

  const handleEditToolbar = () => {
    // const tabItemId = "toolbar_items";
    // const item = menuItems.find((i) => i.id === tabItemId);

    // const isItemAlreadyPresentInTabs = tabItems.find((i) => i.id === item?.id);

    // if (!isItemAlreadyPresentInTabs) {
    //   insertTabItem({ ...item!, type: "temporary" });
    // }
    // setSelectedTabItemId(tabItemId);
    navigateToTab("toolbar_items");
  };

  const handleDeleteToolbar = () => {
    if (!selectedToolbar?.isDeletable) return;
    setToolbars(toolbars.filter((item) => item.id !== selectedToolbar?.id));
  };

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <ToolbarsHeader />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <Box p="lg">
          <Button fullWidth onClick={handleAddToolbar}>
            Add Toolbar
          </Button>
        </Box>
        <Box>
          {toolbars.map((toolbar) => (
            <MenuListItem
              key={toolbar.id}
              label={toolbar.title}
              isActive={selectedToolbar?.id === toolbar.id}
              onClick={() => handleClick(toolbar)}
              rightIcon={selectedToolbar?.id === toolbar.id ? IconCheck : null}
            />
          ))}
        </Box>
      </LeftSidebarLayout.Content>
      <LeftSidebarLayout.Footer>
        {selectedToolbar && (
          <ToolbarsFooter
            isEditable={selectedToolbar.isEditable}
            isTransformable={selectedToolbar.isTransformable}
            isDeletable={selectedToolbar.isDeletable}
            onEditClick={handleEditToolbar}
            onTransformClick={handleTransformToolbar}
            onDeleteClick={handleDeleteToolbar}
          />
        )}
      </LeftSidebarLayout.Footer>
    </LeftSidebarLayout>
  );
};
