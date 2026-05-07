import { Box } from "@mantine/core";
import { LabelText } from "../../common/label-text/LabelText";
import { MenuListItem } from "../../common/menu-list-item/MenuListItem";

export const AverageOptionsContent = () => {
  return (
    <Box>
      <LabelText text="System Provided:" mb="xs" />
      <MenuListItem label="VCollab" />
    </Box>
  );
};
