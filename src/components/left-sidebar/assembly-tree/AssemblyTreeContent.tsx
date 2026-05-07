import { Box } from "@mantine/core";
// import { NestedCheckboxes } from "../../common/nested-checkboxes/NestedCheckboxes";
import type { Node, NodesTree } from "../../../store/AssemblyTreeSlice";
import { TreeTable } from "../../common/tree-table/TreeTable";
import type { MRT_RowSelectionState } from "mantine-react-table";

interface AssemblyTreeContentProps {
  treeHeight: number;
  itemHeight: number;
  productTree: NodesTree;
  rowSelection: MRT_RowSelectionState;
  setProductTree: (tree: NodesTree) => void;
  setRowSelection: (selection: MRT_RowSelectionState) => void;
  setInitialProductTree: (tree: NodesTree) => void;
  setCheckedLeafNodes: (nodes: Node[]) => void;
  setUncheckedLeafNodes: (nodes: Node[]) => void;
}

export const AssemblyTreeContent = ({
  // treeHeight,
  // itemHeight,
  productTree,
  rowSelection,
  // setProductTree,
  setRowSelection,
  // setInitialProductTree,
  setCheckedLeafNodes,
  setUncheckedLeafNodes,
}: AssemblyTreeContentProps) => {
  return (
    <Box p="lg">
      <TreeTable
        tableData={productTree}
        rowSelectionState={rowSelection}
        setCheckedLeafNodes={setCheckedLeafNodes}
        setUncheckedLeafNodes={setUncheckedLeafNodes}
        setRowSelectionState={setRowSelection}
      />
    </Box>
  );

  // return (
  //   <Box px="lg">
  //     <NestedCheckboxes
  //       treeHeight={treeHeight}
  //       itemHeight={itemHeight}
  //       productTree={productTree}
  //       setProductTree={setProductTree}
  //       setInitialProductTree={setInitialProductTree}
  //       toggleVisibility={() => {}}
  //     />
  //   </Box>
  // );
};
