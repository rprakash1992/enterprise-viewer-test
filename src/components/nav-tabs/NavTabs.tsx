import { Box } from "@mantine/core";
import { OneNavTabItem } from "./OneNavTabItem";
import { useStore } from "../../store";
import { NAV_TAB_HEIGHT } from "../../constants";
import { useEffect } from "react";

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
  const selectedTabItemId = useStore((state) => state.selectedTabItemId);
  const setSelectedTabItemId = useStore((state) => state.setSelectedTabItemId);

  const handleClick = (menuItemId: string) => {
    setSelectedTabItemId(selectedTabItemId === menuItemId ? null : menuItemId);
    // const updatedTabItems = tabItems.filter(
    //   (item) => item.type !== "temporary" || menuItemId === item.id
    // );
    // setTabItems(updatedTabItems);
  };

  // useEffect(() => {
  //   const index = tabItems.findIndex((item) => item.id === selectedTabItemId);
  //   setTop(index * NAV_TAB_HEIGHT);
  // }, [selectedTabItemId, tabItems]);

  useEffect(() => {
    const updatedTabItems = tabItems.filter(
      (item) => item.type !== "temporary" || selectedTabItemId === item.id
    );
    const index = updatedTabItems.findIndex(
      (item) => item.id === selectedTabItemId
    );
    setTop(index * NAV_TAB_HEIGHT);
    setTabItems(updatedTabItems);
  }, [selectedTabItemId, tabItems.length]);

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
