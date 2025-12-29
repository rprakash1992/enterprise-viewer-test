import { Box, Button } from "@mantine/core";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { TransientHeader } from "./TransientHeader";
import { useStore } from "../../../store";
import { MenuListItem } from "../../common/menu-list-item/MenuListItem";
import type { ThreeDSlide } from "../../../store/3DSlidesSlice";
import { TransientFooter } from "./TransientFooter";

export const Transient = () => {
  const transients = useStore((state) => state.transients);
  const selectedTransient = useStore((state) => state.selectedTransient);
  const addTransient = useStore((state) => state.addTransient);
  const selectTransient = useStore((state) => state.selectTransient);

  const handleClick = (_: React.MouseEvent, slide: ThreeDSlide) => {
    if (selectedTransient?.id === slide.id) {
      selectTransient(null);
    } else {
      selectTransient(slide);
    }
  };

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <TransientHeader />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <Box p={"lg"}>
          <Button fullWidth onClick={addTransient}>
            Add Transient
          </Button>
        </Box>
        <Box>
          {transients.map((slide) => (
            <MenuListItem
              key={slide.id}
              label={slide.title}
              isActive={selectedTransient?.id === slide.id}
              onClick={(e) => handleClick(e, slide)}
            />
          ))}
        </Box>
      </LeftSidebarLayout.Content>
      {selectedTransient?.id && (
        <LeftSidebarLayout.Footer>
          <TransientFooter />
        </LeftSidebarLayout.Footer>
      )}
    </LeftSidebarLayout>
  );
};
