import { useState } from "react";
import { Box, Button } from "@mantine/core";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { PointToPointHeader } from "./PointToPointHeader";
import { useStore } from "../../../store";
import { MenuListItem } from "../../common/menu-list-item/MenuListItem";
import type { ThreeDSlide } from "../../../store/3DSlidesSlice";
import { PointToPointFooter } from "./PointToPointFooter";

export const PointToPoint = () => {
  const pointToPoints = useStore((state) => state.pointToPoints);
  const selectedPointToPoint = useStore((state) => state.selectedPointToPoint);
  const addPointToPoint = useStore((state) => state.addPointToPoint);
  const selectPointToPoint = useStore((state) => state.selectPointToPoint);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleClick = (_: React.MouseEvent, slide: ThreeDSlide) => {
    if (selectedPointToPoint?.id === slide.id) {
      selectPointToPoint(null);
    } else {
      selectPointToPoint(slide);
    }
  };

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <PointToPointHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleHelpClick={() => {}}
        />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <Box p={"lg"}>
          <Button fullWidth onClick={addPointToPoint}>
            Add Point to Point
          </Button>
        </Box>
        <Box>
          {pointToPoints.map((point) => (
            <MenuListItem
              key={point.id}
              label={point.title}
              isActive={selectedPointToPoint?.id === point.id}
              onClick={(e) => handleClick(e, point)}
            />
          ))}
        </Box>
      </LeftSidebarLayout.Content>
      {selectedPointToPoint?.id && (
        <LeftSidebarLayout.Footer>
          <PointToPointFooter />
        </LeftSidebarLayout.Footer>
      )}
    </LeftSidebarLayout>
  );
};
