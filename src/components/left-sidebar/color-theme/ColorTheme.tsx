import LeftSidebarLayout from "../LeftSidebarLayout";
import { ColorThemeHeader } from "./ColorThemeHeader";
import { ColorThemeContent } from "./ColorThemeContent";

export const ColorTheme = () => {
  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <ColorThemeHeader />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content noPadding>
        <ColorThemeContent />
      </LeftSidebarLayout.Content>
    </LeftSidebarLayout>
  );
};
