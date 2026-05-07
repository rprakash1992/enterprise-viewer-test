import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { Box } from "@mantine/core";
import { OneNavTabItem } from "./OneNavTabItem";
import { useStore } from "../../store";
import { NAV_TAB_HEIGHT } from "../../constants";

const ActiveTabBorder = ({ top }: { top: number }) => (
  <Box
    style={{
      width: 2,
      height: NAV_TAB_HEIGHT,
      backgroundColor: "var(--mantine-color-blue-5)",
      position: "absolute",
      right: 0,
      top,
      transition: "0.2s ease top",
    }}
  />
);

export const NavTabs = () => {
  const top = useStore((state) => state.top);
  const tabItems = useStore((state) => state.tabItems);
  const setTop = useStore((state) => state.setTop);
  const setTabItems = useStore((state) => state.setTabItems);
  const navigate = useNavigate();
  let { pathname } = useLocation();
  pathname = pathname.slice(1);

  const handleClick = (menuItemId: string) => {
    navigate(pathname === menuItemId ? "/" : `/${menuItemId}`);
  };

  useEffect(() => {
    const updatedTabItems = tabItems.filter(
      (item) => item.type !== "temporary" || pathname === item.id
    );
    const index = updatedTabItems.findIndex((item) => item.id === pathname);
    setTop(index * NAV_TAB_HEIGHT);
    setTabItems(updatedTabItems);
  }, [pathname]);

  return (
    <Box style={{ position: "relative" }}>
      {tabItems.map((item) => (
        <OneNavTabItem
          key={item.id}
          icon={item.icon}
          label={item.label}
          onClick={() => handleClick(item.id)}
        />
      ))}
      <ActiveTabBorder top={top} />
    </Box>
  );
};
