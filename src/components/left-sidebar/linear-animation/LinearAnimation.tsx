import { useState } from "react";
import { Box, Button } from "@mantine/core";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { useStore } from "../../../store";
import { MenuListItem } from "../../common/menu-list-item/MenuListItem";
import type { ThreeDSlide } from "../../../store/3DSlidesSlice";
import { LinearAnimationHeader } from "./LinearAnimationHeader";
import { LinearAnimationFooter } from "./LinearAnimationFooter";

export const LinearAnimation = () => {
  const linearAnimation = useStore((state) => state.linearAnimation);
  const selectedLinearAnimation = useStore(
    (state) => state.selectedLinearAnimation
  );
  const addLinearAnimation = useStore((state) => state.addLinearAnimation);
  const selectLinearAnimation = useStore(
    (state) => state.selectLinearAnimation
  );
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleClick = (_: React.MouseEvent, slide: ThreeDSlide) => {
    if (selectedLinearAnimation?.id === slide.id) {
      selectLinearAnimation(null);
    } else {
      selectLinearAnimation(slide);
    }
  };

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <LinearAnimationHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleHelpClick={() => {}}
        />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <Box p={"lg"}>
          <Button fullWidth onClick={addLinearAnimation}>
            Add Linear Animation
          </Button>
        </Box>
        <Box>
          {linearAnimation.map((point) => (
            <MenuListItem
              key={point.id}
              label={point.title}
              isActive={selectedLinearAnimation?.id === point.id}
              onClick={(e) => handleClick(e, point)}
            />
          ))}
        </Box>
      </LeftSidebarLayout.Content>
      {selectedLinearAnimation?.id && (
        <LeftSidebarLayout.Footer>
          <LinearAnimationFooter />
        </LeftSidebarLayout.Footer>
      )}
    </LeftSidebarLayout>
  );
};
