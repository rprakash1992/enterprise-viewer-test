import LeftSidebarLayout from "../LeftSidebarLayout";
import { useStore } from "../../../store";
import { HistoryFooter } from "./HistoryFooter";
import { HistoryHeader } from "./HistoryHeader";

export const History = () => {
  const undo = useStore((state) => state.undo);
  const redo = useStore((state) => state.redo);

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <HistoryHeader />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <></>
      </LeftSidebarLayout.Content>
      <LeftSidebarLayout.Footer>
        <HistoryFooter undo={undo} redo={redo} />
      </LeftSidebarLayout.Footer>
    </LeftSidebarLayout>
  );
};
