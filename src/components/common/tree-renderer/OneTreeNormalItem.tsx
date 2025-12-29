import { Box } from "@mantine/core";
import { TreeItemTitle } from "./TreeItemTitle";

interface OneTreeNormalItem {
  title: string;
  nodeId: string;
  checked: boolean;
  indeterminate: boolean;
}

export const OneTreeNormalItem = ({
  title,
  nodeId,
  checked,
  indeterminate,
}: OneTreeNormalItem) => {
  return (
    <Box w="fit-content" miw="100%" style={{ cursor: "pointer" }}>
      <TreeItemTitle
        text={title}
        nodeId={nodeId}
        checked={checked}
        indeterminate={indeterminate}
      />
    </Box>
  );
};
