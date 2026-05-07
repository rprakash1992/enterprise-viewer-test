import { Box, Button } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { MenuListItem } from "../../common/menu-list-item/MenuListItem";
import type { Toolbar } from "../../../store/ToolbarsSlice";

type Props = {
  toolbars: Toolbar[];
  selectedToolbar: Toolbar | null;
  onAddToolbar: () => void;
  onClickToolbar: (toolbar: Toolbar) => void;
};

export const ToolbarsContent = ({
  toolbars,
  selectedToolbar,
  onAddToolbar,
  onClickToolbar,
}: Props) => {
  return (
    <>
      <Button fullWidth onClick={onAddToolbar} mb="lg">
        Add Toolbar
      </Button>
      <Box>
        {toolbars.map((toolbar) => (
          <MenuListItem
            key={toolbar.id}
            label={toolbar.title}
            isActive={selectedToolbar?.id === toolbar.id}
            onClick={() => onClickToolbar(toolbar)}
            rightIcon={selectedToolbar?.id === toolbar.id ? IconCheck : null}
          />
        ))}
      </Box>
    </>
  );
};
