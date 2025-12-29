import { DisplayModesHeader } from "./DisplayModesHeader";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { MenuListItem } from "../../common/menu-list-item/MenuListItem";
import IconDownload from "../../../assets/icons/IconDownload";
import { useStore } from "../../../store";
import { DisplayModesFooter } from "./DisplayModesFooter";
import { IconCheck } from "@tabler/icons-react";
import type { DisplayModeItem } from "../../../store/DisplayModesSlice";

export const DisplayModes = () => {
  const displayModesItems = useStore((state) => state.displayModesItems);
  const selectedDisplayMode = useStore((state) => state.selectedDisplayMode);
  const appliedDisplayModes = useStore((state) => state.appliedDisplayModes);
  const downloadedDisplayModes = useStore(
    (state) => state.downloadedDisplayModes
  );
  const selectDisplayMode = useStore((state) => state.selectDisplayMode);
  const applyDisplayMode = useStore((state) => state.applyDisplayMode);

  const handleClick = (item: DisplayModeItem) => {
    const itemId = item.id;
    const isDownloaded = downloadedDisplayModes.includes(itemId);
    const isApplied = appliedDisplayModes.includes(itemId);

    if (!isDownloaded) {
      selectDisplayMode(selectedDisplayMode?.id === item.id ? null : item);
    } else if (!isApplied) {
      applyDisplayMode(itemId);
    }
  };

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <DisplayModesHeader />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        {displayModesItems.map((item) => (
          <MenuListItem
            key={item.id}
            label={item.label}
            leftIcon={item.icon}
            rightIcon={
              appliedDisplayModes.includes(item.id) ? IconCheck : IconDownload
            }
            isActive={selectedDisplayMode?.id === item.id}
            onClick={() => handleClick(item)}
          />
        ))}
      </LeftSidebarLayout.Content>
      <LeftSidebarLayout.Footer>
        {!!selectedDisplayMode && <DisplayModesFooter />}
      </LeftSidebarLayout.Footer>
    </LeftSidebarLayout>
  );
};
