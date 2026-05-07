import { Box } from "@mantine/core";
import { MenuListItem } from "../../common/menu-list-item/MenuListItem";
import { IconCheck } from "@tabler/icons-react";
import IconDownload from "../../../assets/icons/IconDownload";
import {
  findIsDisplayModeDownloaded,
  getIsDisplayModeDisabled,
  type DisplayModeItem,
  type Selection,
} from "../../../store/DisplayModesSlice";
import { type Node } from "../../../store/AssemblyTreeSlice";

interface DisplayModesContentProps {
  displayModesItems: DisplayModeItem[];
  checkedLeafNodes: Node[];
  uncheckedLeafNodes: Node[];
  displayModeAppliedTo: Selection | null;
  selectedDisplayModeId: string;
  selectDisplayMode: (item: string, isDownloaded: boolean) => void;
}

export const DisplayModesContent = ({
  displayModesItems,
  checkedLeafNodes,
  uncheckedLeafNodes,
  displayModeAppliedTo,
  selectedDisplayModeId,
  selectDisplayMode,
}: DisplayModesContentProps) => {
  const isDisplayModeDownloaded = (displayModeId: string): boolean => {
    return findIsDisplayModeDownloaded(
      displayModeId,
      displayModeAppliedTo,
      checkedLeafNodes,
      uncheckedLeafNodes,
    );
  };

  const getIsDisabled = (item: DisplayModeItem) => {
    return getIsDisplayModeDisabled(
      item,
      displayModeAppliedTo,
      checkedLeafNodes,
      uncheckedLeafNodes,
    );
  };

  const getRightIcon = (displayModeId: string) => {
    const displayModeDownloaded = isDisplayModeDownloaded(displayModeId);

    if (displayModeDownloaded) {
      return IconCheck;
    } else {
      return IconDownload;
    }
  };

  return (
    <Box>
      {displayModesItems.map((item) => (
        <MenuListItem
          key={item.id}
          label={item.label}
          leftIcon={item.icon}
          rightIcon={getRightIcon(item.id)}
          isActive={!getIsDisabled(item) && selectedDisplayModeId === item.id}
          isDisabled={getIsDisabled(item)}
          onClick={() =>
            selectDisplayMode(item.id, isDisplayModeDownloaded(item.id))
          }
        />
      ))}
    </Box>
  );
};
