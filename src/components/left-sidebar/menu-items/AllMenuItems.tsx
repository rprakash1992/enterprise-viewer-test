import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AllMenuItemsHeader } from "./AllMenuItemsHeader";
import { AllMenuItemsContent } from "./AllMenuItemsContent";
import { useDebounce } from "../../../hooks/useDebounce";
import LeftSidebarLayout from "../LeftSidebarLayout";
import type { MenuItem } from "../../../store/MenuSlice";
import { useStore } from "../../../store";

export const AllMenuItems = () => {
  const tabItems = useStore((state) => state.tabItems);
  const menuItems = useStore((state) => state.menuItems);
  const insertTabItem = useStore((state) => state.insertTabItem);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>(menuItems);
  const navigate = useNavigate();
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    if (!!debouncedSearchQuery && debouncedSearchQuery.trim() !== "") {
      const filtered = menuItems.filter((item) =>
        item.label.toLowerCase().includes(debouncedSearchQuery.toLowerCase()),
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

    navigate(`/${item.id}`);
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
      <LeftSidebarLayout.Content noPadding>
        <AllMenuItemsContent filteredItems={filteredItems} onItemClick={handleClick} />
      </LeftSidebarLayout.Content>
    </LeftSidebarLayout>
  );
};
