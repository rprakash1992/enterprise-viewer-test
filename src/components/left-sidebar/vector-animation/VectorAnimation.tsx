import { Box, Button } from "@mantine/core";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { VectorAnimationHeader } from "./VectorAnimationHeader";
import { useStore } from "../../../store";
import { MenuListItem } from "../../common/menu-list-item/MenuListItem";
import type { ThreeDSlide } from "../../../store/3DSlidesSlice";
import { VectorAnimationFooter } from "./VectorAnimationFooter";

export const VectorAnimation = () => {
  const eigenVectors = useStore((state) => state.eigenVectors);
  const selectedEigenVector = useStore((state) => state.selectedEigenVector);
  const addEigenVector = useStore((state) => state.addEigenVector);
  const selectEigenVector = useStore((state) => state.selectEigenVector);

  const handleClick = (_: React.MouseEvent, slide: ThreeDSlide) => {
    if (selectedEigenVector?.id === slide.id) {
      selectEigenVector(null);
    } else {
      selectEigenVector(slide);
    }
  };

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <VectorAnimationHeader />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <Box p={"lg"}>
          <Button fullWidth onClick={addEigenVector}>
            Add Eigen Vector
          </Button>
        </Box>
        <Box>
          {eigenVectors.map((slide) => (
            <MenuListItem
              key={slide.id}
              label={slide.title}
              isActive={selectedEigenVector?.id === slide.id}
              onClick={(e) => handleClick(e, slide)}
            />
          ))}
        </Box>
      </LeftSidebarLayout.Content>
      {selectedEigenVector?.id && (
        <LeftSidebarLayout.Footer>
          <VectorAnimationFooter />
        </LeftSidebarLayout.Footer>
      )}
    </LeftSidebarLayout>
  );
};
