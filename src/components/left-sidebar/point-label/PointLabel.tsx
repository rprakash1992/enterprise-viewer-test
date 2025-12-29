import { useState } from "react";
import { Box, Button } from "@mantine/core";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { PointLabelHeader } from "./PointLabelHeader";
import { useStore } from "../../../store";
import { MenuListItem } from "../../common/menu-list-item/MenuListItem";
import type { ThreeDSlide } from "../../../store/3DSlidesSlice";
import { PointLabelFooter } from "./PointLabelFooter";

export const PointLabel = () => {
  const pointLabels = useStore((state) => state.pointLabels);
  const selectedPointLabel = useStore((state) => state.selectedPointLabel);
  const addPointLabel = useStore((state) => state.addPointLabel);
  const selectPointLabel = useStore((state) => state.selectPointLabel);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleClick = (_: React.MouseEvent, slide: ThreeDSlide) => {
    if (selectedPointLabel?.id === slide.id) {
      selectPointLabel(null);
    } else {
      selectPointLabel(slide);
    }
  };

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <PointLabelHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleHelpClick={() => {}}
        />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <Box p={"lg"}>
          <Button fullWidth onClick={addPointLabel}>
            Add Point Label
          </Button>
        </Box>
        <Box>
          {pointLabels.map((point) => (
            <MenuListItem
              key={point.id}
              label={point.title}
              isActive={selectedPointLabel?.id === point.id}
              onClick={(e) => handleClick(e, point)}
            />
          ))}
        </Box>
      </LeftSidebarLayout.Content>
      {selectedPointLabel?.id && (
        <LeftSidebarLayout.Footer>
          <PointLabelFooter />
        </LeftSidebarLayout.Footer>
      )}
    </LeftSidebarLayout>
  );
};
