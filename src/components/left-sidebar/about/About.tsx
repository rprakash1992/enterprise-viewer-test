import LeftSidebarLayout from "../LeftSidebarLayout";
import { AboutHeader } from "./AboutHeader";
import { AboutContent } from "./AboutContent";

export const About = () => {
  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <AboutHeader />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <AboutContent />
      </LeftSidebarLayout.Content>
    </LeftSidebarLayout>
  );
};
