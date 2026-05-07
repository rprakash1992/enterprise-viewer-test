import LeftSidebarLayout from "../LeftSidebarLayout";
import { GeometryHeader } from "./GeometryHeader";
import { GeometryContent } from "./GeometryContent";

export const Geometry = () => {
  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <GeometryHeader />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content noPadding>
        <GeometryContent />
      </LeftSidebarLayout.Content>
    </LeftSidebarLayout>
  );
};
