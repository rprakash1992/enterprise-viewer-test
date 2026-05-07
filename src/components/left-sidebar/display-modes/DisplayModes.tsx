import { DisplayModesHeader } from "./DisplayModesHeader";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { useStore } from "../../../store";
import { DisplayModesFooter } from "./DisplayModesFooter";
import { DisplayModesContent } from "./DisplayModesContent";
import { DEFAULT_DISPLAY_MODE } from "../../../constants";
import {
  calcDownloadSize,
  findIsDisplayModeDownloaded,
  type Selection,
} from "../../../store/DisplayModesSlice";

export const DisplayModes = () => {
  const displayModesItems = useStore((state) => state.displayModesItems);
  const selectedDisplayModeId = useStore(
    (state) => state.selectedDisplayModeId
  );
  const displayModeAppliedTo = useStore((state) => state.displayModeAppliedTo);
  const checkedLeafNodes = useStore((state) => state.checkedLeafNodes);
  const uncheckedLeafNodes = useStore((state) => state.uncheckedLeafNodes);
  const isDownloading = useStore((state) => state.isDownloading);
  const setDisplayModeAppliedTo = useStore(
    (state) => state.setDisplayModeAppliedTo
  );
  const selectDisplayMode = useStore((state) => state.selectDisplayMode);
  const applyDisplayMode = useStore((state) => state.applyDisplayMode);
  const handleDownloadDisplayModes = useStore(
    (state) => state.handleDownloadDisplayModes
  );

  const handleSelectDisplayMode = (
    displayModeId: string,
    isDownloaded: boolean
  ) => {
    selectDisplayMode(displayModeId);

    if (isDownloaded) {
      applyDisplayMode(displayModeId);
    }
  };

  const handleChangeAppliedDisplayMode = (val: Selection | null) => {
    setDisplayModeAppliedTo(val);
    selectDisplayMode(DEFAULT_DISPLAY_MODE);
  };

  // const getIsDisabled = (): boolean => {
  //   if (
  //     (displayModeAppliedTo === Selection.SELECTED_PARTS &&
  //       checkedLeafNodes.length === 0) ||
  //     (displayModeAppliedTo === Selection.UNSELECTED_PARTS &&
  //       uncheckedLeafNodes.length === 0)
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  const getDownloadSize = (): number => {
    return calcDownloadSize(
      displayModeAppliedTo,
      selectedDisplayModeId,
      checkedLeafNodes,
      uncheckedLeafNodes
    );
  };

  const isDisplayModeDownloaded = (displayModeId: string): boolean => {
    return findIsDisplayModeDownloaded(
      displayModeId,
      displayModeAppliedTo,
      checkedLeafNodes,
      uncheckedLeafNodes
    );
  };

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <DisplayModesHeader
          displayModeAppliedTo={displayModeAppliedTo}
          setDisplayModeAppliedTo={handleChangeAppliedDisplayMode}
        />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content noPadding>
        <DisplayModesContent
          displayModesItems={displayModesItems}
          checkedLeafNodes={checkedLeafNodes}
          uncheckedLeafNodes={uncheckedLeafNodes}
          displayModeAppliedTo={displayModeAppliedTo}
          selectedDisplayModeId={selectedDisplayModeId}
          selectDisplayMode={handleSelectDisplayMode}
        />
      </LeftSidebarLayout.Content>
      <LeftSidebarLayout.Footer>
        {!!selectedDisplayModeId &&
          !isDisplayModeDownloaded(selectedDisplayModeId) && (
            <DisplayModesFooter
              isDownloading={isDownloading}
              downloadSize={getDownloadSize()}
              unit="MB"
              handleDownloadDisplayModes={handleDownloadDisplayModes}
            />
          )}
      </LeftSidebarLayout.Footer>
    </LeftSidebarLayout>
  );
};
