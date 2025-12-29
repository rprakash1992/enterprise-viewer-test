import { OneTreeNormalItem } from "./OneTreeNormalItem";
import { OneTreeGroupItem } from "./OneTreeGroupItem";
import type { NormalNode, GroupNode } from "../../../store/AssemblyTreeSlice";

interface FileFolderItemProps {
  node: NormalNode | GroupNode;
}

export const OneTreeItem = ({ node }: FileFolderItemProps) => {
  const itemType = node.type;
  const title = node.name;

  return itemType === "normal" ? (
    <OneTreeNormalItem
      title={title}
      nodeId={node.id}
      checked={node.checked}
      indeterminate={false}
    />
  ) : (
    <OneTreeGroupItem node={node} />
  );
};
