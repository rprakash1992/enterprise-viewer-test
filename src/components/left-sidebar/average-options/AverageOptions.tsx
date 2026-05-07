import LeftSidebarLayout from "../LeftSidebarLayout";
import { AverageOptionsContent } from "./AverageOptionsContent";
import { AverageOptionsHeader } from "./AverageOptionsHeader";

export const AverageOptions = () => {
  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <AverageOptionsHeader handleHelpClick={() => {}} />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <AverageOptionsContent />
      </LeftSidebarLayout.Content>
    </LeftSidebarLayout>
  );
};
