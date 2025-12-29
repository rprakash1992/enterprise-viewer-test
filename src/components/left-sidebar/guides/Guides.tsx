import { useEffect, useState } from "react";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { GuidesHeader } from "./GuidesHeader";
import { useStore } from "../../../store";
import { MenuListItem } from "../../common/menu-list-item/MenuListItem";
import type { GuideItem } from "../../../store/GuidesSlide";
import { useDebounce } from "../../../hooks/useDebounce";

export const Guides = () => {
  const guidesItems = useStore((state) => state.guidesItems);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<GuideItem[]>(guidesItems);
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    if (!!debouncedSearchQuery && debouncedSearchQuery.trim() !== "") {
      const filtered = guidesItems.filter((item) =>
        item.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
      );

      setFilteredItems(filtered);
    } else {
      setFilteredItems(guidesItems);
    }
  }, [debouncedSearchQuery]);

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <GuidesHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleHelpClick={() => {}}
        />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        {filteredItems.map((item) => (
          <MenuListItem key={item.id} label={item.title} />
        ))}
      </LeftSidebarLayout.Content>
    </LeftSidebarLayout>
  );
};
