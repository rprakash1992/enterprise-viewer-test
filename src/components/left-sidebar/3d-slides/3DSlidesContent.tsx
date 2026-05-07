import { Box, Button } from "@mantine/core";
import { MenuListItem } from "../../common/menu-list-item/MenuListItem";
import type { ThreeDSlide } from "../../../store/3DSlidesSlice";

export const ThreeDSlidesContent = ({
  threeDSlides,
  selected3DSlide,
  addThreeDSlide,
  selectSlide,
}: {
  threeDSlides: ThreeDSlide[];
  selected3DSlide: ThreeDSlide | null;
  addThreeDSlide: () => void;
  selectSlide: (e: React.MouseEvent, slide: ThreeDSlide) => void;
}) => {
  return (
    <Box>
      <Button fullWidth onClick={addThreeDSlide} mb="lg">
        Add 3D Slide
      </Button>
      <Box>
        {threeDSlides.map((slide) => (
          <MenuListItem
            key={slide.id}
            label={slide.title}
            isActive={selected3DSlide?.id === slide.id}
            onClick={(e) => selectSlide(e, slide)}
          />
        ))}
      </Box>
    </Box>
  );
};
