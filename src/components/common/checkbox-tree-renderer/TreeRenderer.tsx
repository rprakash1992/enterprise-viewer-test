import { Box } from "@mantine/core";
import { useStore } from "../../../store";
import { OneTreeItem } from "./OneTreeItem";

export interface NormalNode {
  id: string;
  name: string;
  type: "normal";
  checked?: boolean;
  isRoot?: boolean;
}

export interface GroupNode {
  id: string;
  name: string;
  type: "group";
  isRoot?: boolean;
  checked?: boolean;
  children: Array<NormalNode | GroupNode>;
}

export type NodesTree = Array<NormalNode | GroupNode>;

export const TreeRenderer = () => {
  const productTree = useStore((state) => state.productTree);

  return (
    <Box w="100%" h="100%">
      {productTree.map((node) => (
        <OneTreeItem key={node.id} node={node} />
      ))}
    </Box>
  );
};
