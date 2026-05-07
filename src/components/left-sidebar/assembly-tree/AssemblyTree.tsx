import { useEffect, useState } from "react";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { AssemblyTreeHeader } from "./AssemblyTreeHeader";
import { filterTreeByQuery } from "../../../utils/productTree";
import { useStore } from "../../../store";
import { useDebounce } from "../../../hooks/useDebounce";
import { AssemblyTreeContent } from "./AssemblyTreeContent";
import { AssemblyTreeFooter } from "./AssemblyTreeFooter";
// import { status } from "../../../constants";

export const AssemblyTree = () => {
  const initialProductTree = useStore((state) => state.initialProductTree);
  const productTree = useStore((state) => state.productTree);
  const rowSelection = useStore((state) => state.rowSelection);
  const checkedLeafNodes = useStore((state) => state.checkedLeafNodes);
  const setProductTree = useStore((state) => state.setProductTree);
  const setRowSelection = useStore((state) => state.setRowSelection);
  const setInitialProductTree = useStore(
    (state) => state.setInitialProductTree
  );
  const setCheckedLeafNodes = useStore((state) => state.setCheckedLeafNodes);
  const setUncheckedLeafNodes = useStore(
    (state) => state.setUncheckedLeafNodes
  );
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [recentSearchItems] = useState<string[]>([]);
  const debouncedQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    const newTree = filterTreeByQuery(initialProductTree, debouncedQuery);
    setProductTree(newTree);
  }, [debouncedQuery]);

  // useEffect(() => {
  //   if (!productTree?.length) return;

  //   const checked: any[] = [];
  //   const unchecked: any[] = [];

  //   collectLeafNodes(productTree, checked, unchecked);

  //   setCheckedLeafNodes(checked);
  //   setUncheckedLeafNodes(unchecked);
  // }, [productTree]);

  // const collectLeafNodes = (nodes: any[], checked: any[], unchecked: any[]) => {
  //   nodes.forEach((node) => {
  //     if (!node.children || node.children.length === 0) {
  //       if (node.status === status.checked) {
  //         checked.push(node);
  //       } else {
  //         unchecked.push(node);
  //       }
  //       return;
  //     }

  //     collectLeafNodes(node.children, checked, unchecked);
  //   });
  // };

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <AssemblyTreeHeader
          searchQuery={searchQuery}
          recentSearchItems={recentSearchItems}
          setSearchQuery={setSearchQuery}
          handleHelpClick={() => {}}
        />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <AssemblyTreeContent
          treeHeight={checkedLeafNodes.length > 0 ? 619 : 679}
          itemHeight={32}
          productTree={productTree}
          rowSelection={rowSelection}
          setProductTree={setProductTree}
          setRowSelection={setRowSelection}
          setInitialProductTree={setInitialProductTree}
          setCheckedLeafNodes={setCheckedLeafNodes}
          setUncheckedLeafNodes={setUncheckedLeafNodes}
        />
      </LeftSidebarLayout.Content>
      {checkedLeafNodes?.length > 0 && (
        <LeftSidebarLayout.Footer>
          <AssemblyTreeFooter />
        </LeftSidebarLayout.Footer>
      )}
    </LeftSidebarLayout>
  );
};
