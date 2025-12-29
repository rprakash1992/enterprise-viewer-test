import { Box, Button } from "@mantine/core";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { useStore } from "../../../store";
import { MenuListItem } from "../../common/menu-list-item/MenuListItem";
import type { ThreeDSlide } from "../../../store/3DSlidesSlice";
import { FaceLabelsHeader } from "./FaceLabelsHeader";
import { FaceLabelsFooter } from "./FaceLabelsFooter";

export const FaceLabels = () => {
  const faceLabels = useStore((state) => state.faceLabels);
  const selectedFaceLabel = useStore((state) => state.selectedFaceLabel);
  const addFaceLabel = useStore((state) => state.addFaceLabel);
  const selectFaceLabel = useStore((state) => state.selectFaceLabel);

  const handleClick = (_: React.MouseEvent, slide: ThreeDSlide) => {
    if (selectedFaceLabel?.id === slide.id) {
      selectFaceLabel(null);
    } else {
      selectFaceLabel(slide);
    }
  };

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <FaceLabelsHeader />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <Box p={"lg"}>
          <Button fullWidth onClick={addFaceLabel}>
            Add Face Label
          </Button>
        </Box>
        <Box>
          {faceLabels.map((slide) => (
            <MenuListItem
              key={slide.id}
              label={slide.title}
              isActive={selectedFaceLabel?.id === slide.id}
              onClick={(e) => handleClick(e, slide)}
            />
          ))}
        </Box>
      </LeftSidebarLayout.Content>
      <LeftSidebarLayout.Footer>
        {selectedFaceLabel?.id && <FaceLabelsFooter />}
      </LeftSidebarLayout.Footer>
    </LeftSidebarLayout>
  );
};
