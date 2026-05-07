import { useEffect, useState } from "react";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { GuidesHeader } from "./GuidesHeader";
import { GuidesContent } from "./GuidesContent";
import { useStore } from "../../../store";
import type { GuideItem } from "../../../store/GuidesSlice";
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
      <LeftSidebarLayout.Content noPadding>
        <GuidesContent filteredItems={filteredItems} />
      </LeftSidebarLayout.Content>
    </LeftSidebarLayout>
  );
};
