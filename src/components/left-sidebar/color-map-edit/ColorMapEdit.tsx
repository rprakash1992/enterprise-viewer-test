import LeftSidebarLayout from "../LeftSidebarLayout";
import { ColorMapEditHeader } from "./ColorMapEditHeader";
import { ColorMapEditContent } from "./ColorMapEditContent";

export const ColorMapEdit = () => {
  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <ColorMapEditHeader />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content noPadding>
        <ColorMapEditContent />
      </LeftSidebarLayout.Content>
    </LeftSidebarLayout>
  );
};
