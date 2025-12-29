import { useEffect, useState } from "react";
import { Box, Flex } from "@mantine/core";
import { TreeItemTitle } from "./TreeItemTitle";
import { OneTreeItem } from "./OneTreeItem";
import type { GroupNode } from "../../../store/AssemblyTreeSlice";
import {
  areAllNestedChildrenChecked,
  isAnyNestedChildChecked,
} from "../../../utils/productTree";

interface FolderItemProps {
  node: GroupNode;
}

type ChildrenItemCheckedType = "full" | "partial" | "none";

export const OneTreeGroupItem = ({ node }: FolderItemProps) => {
  const [childrenCheckedType, setChildrenCheckedType] =
    useState<ChildrenItemCheckedType>(() => {
      const full = areAllNestedChildrenChecked([node], node.id);
      if (full) return "full";

      const partial = isAnyNestedChildChecked([node], node.id);
      if (partial) return "partial";

      return "none";
    });
  const [expanded, setExpanded] = useState<boolean>(true);

  const title = node.name;

  const formatTitle = (t: string) => {
    return t?.indexOf(".") > 0 ? t?.slice(0, t?.lastIndexOf(".")) : t;
  };

  useEffect(() => {
    let newChildrenCheckedType = "none";

    if (areAllNestedChildrenChecked([node], node.id)) {
      newChildrenCheckedType = "full";
    } else if (isAnyNestedChildChecked([node], node.id)) {
      newChildrenCheckedType = "partial";
    }

    setChildrenCheckedType(newChildrenCheckedType as ChildrenItemCheckedType);
  }, [node]);

  return (
    <Box>
      <Flex
        direction="row"
        w="fit-content"
        miw="100%"
        align="center"
        style={{ cursor: "pointer" }}
      >
        {/* <IconChevronDown
          style={{ transform: expanded ? "rotate(0deg)" : "rotate(-180deg)" }}
          onClick={() => setExpanded((prev) => !prev)}
        /> */}
        <TreeItemTitle
          text={formatTitle(title)}
          nodeId={node.id}
          indeterminate={childrenCheckedType === "partial"}
          checked={childrenCheckedType === "full"}
          toggleExpand={() => setExpanded((prev) => !prev)}
        />
      </Flex>
      {expanded && node.children.length > 0 && (
        <Box style={{ paddingLeft: "15px" }}>
          {node.children.map((node) => (
            <OneTreeItem key={node.id} node={node} />
          ))}
        </Box>
      )}
    </Box>
  );
};
