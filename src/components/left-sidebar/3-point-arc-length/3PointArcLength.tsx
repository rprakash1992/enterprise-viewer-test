import { useState } from "react";
import { Box, Button } from "@mantine/core";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { useStore } from "../../../store";
import { MenuListItem } from "../../common/menu-list-item/MenuListItem";
import { ThreePointArcLengthHeader } from "./3PointArcLengthHeader";
import { ThreePointArcLengthFooter } from "./3PointArcLengthFooter";
import type { TwoDNote } from "../../../store/2DNotesSlice";

export const ThreePointArcLength = () => {
  const threePointArcLengths = useStore((state) => state.threePointArcLengths);
  const selectedThreePointArcLength = useStore(
    (state) => state.selectedThreePointArcLength
  );
  const addThreePointArcLength = useStore(
    (state) => state.addThreePointArcLength
  );
  const selectThreePointArcLength = useStore(
    (state) => state.selectThreePointArcLength
  );
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleClick = (_: React.MouseEvent, note: TwoDNote) => {
    if (selectedThreePointArcLength?.id === note.id) {
      selectThreePointArcLength(null);
    } else {
      selectThreePointArcLength(note);
    }
  };

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <ThreePointArcLengthHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleHelpClick={() => {}}
        />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <Box p={"lg"}>
          <Button fullWidth onClick={addThreePointArcLength}>
            Add 3 Point Arc Length
          </Button>
        </Box>
        <Box>
          {threePointArcLengths.map((note) => (
            <MenuListItem
              key={note.id}
              label={note.title}
              isActive={selectedThreePointArcLength?.id === note.id}
              onClick={(e) => handleClick(e, note)}
            />
          ))}
        </Box>
      </LeftSidebarLayout.Content>
      {selectedThreePointArcLength?.id && (
        <LeftSidebarLayout.Footer>
          <ThreePointArcLengthFooter />
        </LeftSidebarLayout.Footer>
      )}
    </LeftSidebarLayout>
  );
};
