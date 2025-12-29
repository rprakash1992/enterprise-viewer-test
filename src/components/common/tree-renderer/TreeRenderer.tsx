import { Box } from "@mantine/core";
import { OneTreeItem } from "./OneTreeItem";

export interface Node {
  id: string | number;
  title: string;
  items?: Array<Node>;
}

export type NodesTree = Array<Node>;

// const data: NodesTree = [
//   {
//     id: 1,
//     name: "Table",
//     items: [
//       { id: 3, name: "Bar Table" },
//       { id: 4, name: "Dining" },
//       { id: 5, name: "Coffee Table" },
//     ],
//   },
//   {
//     id: 2,
//     name: "Chairs",
//     items: [
//       {
//         id: 6,
//         name: "High Chair",
//         items: [{ id: 11, name: "Foldable" }],
//       },
//       { id: 7, name: "Bar Stool" },
//       {
//         id: 8,
//         name: "Office Chairs",
//         items: [
//           {
//             id: 9,
//             name: "Executive",
//           },
//           { id: 10, name: "Balance" },
//         ],
//       },
//     ],
//   },
// ];

export const TreeRenderer = ({
  data,
  activeItemId,
  selectItem,
}: {
  data: NodesTree;
  activeItemId: string;
  selectItem: (e: React.MouseEvent, node: Node) => void;
}) => {
  return (
    <Box w="100%" h="100%">
      {data.map((node) => (
        <OneTreeItem
          key={node.id}
          node={node}
          activeItemId={activeItemId}
          selectItem={selectItem}
        />
      ))}
    </Box>
  );
};
