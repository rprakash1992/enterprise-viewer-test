import { useEffect, useState } from "react";
import { Box } from "@mantine/core";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { AssemblyTreeHeader } from "./AssemblyTreeHeader";
import { filterTreeByQuery } from "../../../utils/productTree";
import { useStore } from "../../../store";
import { useDebounce } from "../../../hooks/useDebounce";
import { initialProductTree } from "../../../store/AssemblyTreeSlice";
import { NestedCheckboxes } from "../../common/nested-checkboxes/NestedCheckboxes";

export const AssemblyTree = () => {
  const productTree = useStore((state) => state.productTree);
  const setProductTree = useStore((state) => state.setProductTree);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const debouncedQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    if (debouncedQuery) {
      const newTree = filterTreeByQuery(productTree, debouncedQuery);
      setProductTree(newTree);
    } else {
      setProductTree(initialProductTree);
    }
  }, [debouncedQuery]);

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <AssemblyTreeHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleHelpClick={() => {}}
        />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <Box px="lg">
          <NestedCheckboxes />
        </Box>
      </LeftSidebarLayout.Content>
    </LeftSidebarLayout>
  );
};
