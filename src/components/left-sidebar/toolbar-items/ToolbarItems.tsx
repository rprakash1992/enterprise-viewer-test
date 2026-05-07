import { useNavigate } from "react-router";
import { ToolbarItemsHeader } from "./ToolbarItemsHeader";
import { ToolbarItemsContent } from "./ToolbarItemsContent";
import { ToolbarItemsFooter } from "./ToolbarItemsFooter";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { useStore } from "../../../store";
import { type Toolbar } from "../../../store/ToolbarsSlice";

export const ToolbarItems = () => {
  const toolbarItems = useStore((state) => state.toolbarItems);
  const toolbars = useStore((state) => state.toolbars);
  const checkedToolbarItems = useStore((state) => state.checkedToolbarItems);
  const selectedToolbar = useStore((state) => state.selectedToolbar);
  const setToolbars = useStore((state) => state.setToolbars);
  const checkToolbarItem = useStore((state) => state.checkToolbarItem);
  const setCheckedToolbarItems = useStore(
    (state) => state.setCheckedToolbarItems
  );
  const navigate = useNavigate();

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
    navigate("/toolbars");
  };

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <ToolbarItemsHeader selectedToolbar={selectedToolbar} />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <ToolbarItemsContent
          selectedToolbar={selectedToolbar}
          toolbarItems={toolbarItems}
          filteredToolbarItems={filteredToolbarItems}
          checkedToolbarItems={checkedToolbarItems}
          isNotEditableToolbars={isNotEditableToolbars}
          onCheckItem={checkToolbarItem}
          onCheckAll={handleCheckAll}
        />
      </LeftSidebarLayout.Content>
      <LeftSidebarLayout.Footer>
        <ToolbarItemsFooter
          checkedToolbarItems={checkedToolbarItems}
          selectedToolbar={selectedToolbar}
          onSave={handleSaveToolbar}
        />
      </LeftSidebarLayout.Footer>
    </LeftSidebarLayout>
  );
};
