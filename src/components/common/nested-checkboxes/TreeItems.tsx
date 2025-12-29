import { Box } from "@mantine/core";
import { ItemHeader } from "./ItemHeader";

export const TreeItems = (props: any) => {
  const { items, compute } = props;

  return (
    <Box>
      {items.map((item: any) => {
        let childList = null;
        if (Array.isArray(item.items)) {
          childList = <TreeItems items={item.items} compute={compute} />;
        }

        return (
          <Box key={item.id}>
            <ItemHeader item={item} compute={compute} />
            <Box pl={"md"}>{childList}</Box>
          </Box>
        );
      })}
    </Box>
  );
};
