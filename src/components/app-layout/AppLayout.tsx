import { AppShell } from "@mantine/core";
import { NavTabs } from "../nav-tabs/NavTabs";
import { LeftSidebar } from "../left-sidebar/LeftSidebar";
import { NAV_TAB_WIDTH } from "../../constants";

export const AppLayout = () => {
  return (
    <AppShell
      padding="md"
      navbar={{
        width: NAV_TAB_WIDTH,
        breakpoint: "sm",
      }}
    >
      <AppShell.Navbar>
        <NavTabs />
        <LeftSidebar />
      </AppShell.Navbar>
      <AppShell.Main>Main Content</AppShell.Main>
    </AppShell>
  );
};
