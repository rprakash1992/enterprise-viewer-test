import { Box, Button, Flex } from "@mantine/core";
import {
  IconEye,
  IconEyeOff,
  IconEyeSpark,
  IconTrash,
} from "@tabler/icons-react";
import { LeftSidebarFooterIconItem } from "../../common/left-sidebar-footer-icon-item/LeftSidebarFooterIconItem";
import type { TwoDNote } from "../../../store/2DNotesSlice";

export const TwoDNotesFooter = ({
  editing2DNote,
  selectedTwoDNote,
  handleSave,
}: {
  editing2DNote: TwoDNote | null;
  selectedTwoDNote: TwoDNote | null;
  handleSave: () => void;
}) => {
  return editing2DNote ? (
    <Box p="lg">
      <Button fullWidth onClick={handleSave}>
        Save
      </Button>
    </Box>
  ) : selectedTwoDNote?.id ? (
    <Flex direction={"row"} h={60} align={"center"} justify={"space-around"}>
      <LeftSidebarFooterIconItem icon={IconEye} label="Show" />
      <LeftSidebarFooterIconItem icon={IconEyeOff} label="Hide" />
      <LeftSidebarFooterIconItem icon={IconEyeSpark} label="Invert" />
      <LeftSidebarFooterIconItem icon={IconTrash} label="Delete" />
    </Flex>
  ) : null;
};
