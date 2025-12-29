import { Box, Button } from "@mantine/core";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { ThreeDSlidesHeader } from "./3DSlidesHeader";
import { useStore } from "../../../store";
import { MenuListItem } from "../../common/menu-list-item/MenuListItem";
import type { ThreeDSlide } from "../../../store/3DSlidesSlice";
import { ThreeDSlidesFooter } from "./3DSlidesFooter";

export const ThreeDSlides = () => {
  const threeDSlides = useStore((state) => state.threeDSlides);
  const selected3DSlide = useStore((state) => state.selected3DSlide);
  const addThreeDSlide = useStore((state) => state.addThreeDSlide);
  const selectSlide = useStore((state) => state.selectSlide);

  const handleClick = (_: React.MouseEvent, slide: ThreeDSlide) => {
    if (selected3DSlide?.id === slide.id) {
      selectSlide(null);
    } else {
      selectSlide(slide);
    }
  };

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <ThreeDSlidesHeader />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <Box p={"lg"}>
          <Button fullWidth onClick={addThreeDSlide}>
            Add 3D Slide
          </Button>
        </Box>
        <Box>
          {threeDSlides.map((slide) => (
            <MenuListItem
              key={slide.id}
              label={slide.title}
              isActive={selected3DSlide?.id === slide.id}
              onClick={(e) => handleClick(e, slide)}
            />
          ))}
        </Box>
      </LeftSidebarLayout.Content>
      {selected3DSlide?.id && (
        <LeftSidebarLayout.Footer>
          <ThreeDSlidesFooter />
        </LeftSidebarLayout.Footer>
      )}
    </LeftSidebarLayout>
  );
};
