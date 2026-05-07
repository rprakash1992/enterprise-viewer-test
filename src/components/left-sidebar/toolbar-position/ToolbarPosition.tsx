import { ToolbarPositionHeader } from "./ToolbarPositionHeader";
import { ToolbarPositionContent } from "./ToolbarPositionContent";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { useStore } from "../../../store";

export const ToolbarPosition = () => {
  const selectedToolbar = useStore((state) => state.selectedToolbar);

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <ToolbarPositionHeader selectedToolbar={selectedToolbar} />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <ToolbarPositionContent />
      </LeftSidebarLayout.Content>
    </LeftSidebarLayout>
  );
};
