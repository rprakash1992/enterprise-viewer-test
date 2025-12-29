import { Box } from "@mantine/core";
import { TreeItemTitle } from "./TreeItemTitle";
import type { Node } from "./TreeRenderer";
import { useState } from "react";

interface OneTreeItemProps {
  node: Node;
  activeItemId: string | null;
  selectItem: (e: React.MouseEvent, nodeId: Node) => void;
}

export const OneTreeItem = ({
  node,
  activeItemId,
  selectItem,
}: OneTreeItemProps) => {
  const [expanded, setExpanded] = useState<boolean>(true);
  const title = node.title;
  const hasItems = !!node.items;

  return (
    <Box w="fit-content" miw="100%" style={{ cursor: "pointer" }}>
      <TreeItemTitle
        text={title}
        expanded={expanded}
        hasItems={hasItems}
        isActive={activeItemId === node.id}
        selectItem={(e: React.MouseEvent) => selectItem(e, node)}
        toggleExpand={() => setExpanded((prev) => !prev)}
      />
      <Box pl="40px">
        {node.items &&
          expanded &&
          node.items.map((item) => (
            <OneTreeItem
              node={item}
              activeItemId={activeItemId}
              selectItem={selectItem}
            />
          ))}
      </Box>
    </Box>
  );
};
