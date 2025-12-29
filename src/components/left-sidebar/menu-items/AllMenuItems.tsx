import { useEffect, useState } from "react";
import { AllMenuItemsHeader } from "./AllMenuItemsHeader";
import { useDebounce } from "../../../hooks/useDebounce";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { MenuListItem } from "../../common/menu-list-item/MenuListItem";
import type { MenuItem } from "../../../store/MenuSlice";
import { useStore } from "../../../store";

export const AllMenuItems = () => {
  const tabItems = useStore((state) => state.tabItems);
  const menuItems = useStore((state) => state.menuItems);
  const insertTabItem = useStore((state) => state.insertTabItem);
  const setSelectedTabItemId = useStore((state) => state.setSelectedTabItemId);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>(menuItems);
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    if (!!debouncedSearchQuery && debouncedSearchQuery.trim() !== "") {
      const filtered = menuItems.filter((item) =>
        item.label.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
      );

      setFilteredItems(filtered);
    } else {
      setFilteredItems(menuItems);
    }
  }, [debouncedSearchQuery]);

  const handleClick = (_: React.MouseEvent, item: MenuItem) => {
    const isItemAlreadyPresentInTabs = tabItems.find((i) => i.id === item.id);

    if (!isItemAlreadyPresentInTabs) {
      insertTabItem({ ...item, type: "temporary" });
    }
    setSelectedTabItemId(item.id);
  };

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <AllMenuItemsHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleHelpClick={() => {}}
        />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        {filteredItems.map((item) => (
          <MenuListItem
            key={item.id}
            label={item.label}
            leftIcon={item.icon}
            isDisabled={item.isDisabled}
            onClick={(e) => handleClick(e, item)}
          />
        ))}
      </LeftSidebarLayout.Content>
    </LeftSidebarLayout>
  );
};
