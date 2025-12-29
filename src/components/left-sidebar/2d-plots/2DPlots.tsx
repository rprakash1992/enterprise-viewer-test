import { useState } from "react";
import { Box, Button } from "@mantine/core";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { useStore } from "../../../store";
import { MenuListItem } from "../../common/menu-list-item/MenuListItem";
import { TwoDPlotsHeader } from "./2DPlotsHeader";
import { TwoDPlotsFooter } from "./2DPlotsFooter";
import type { TwoDNote } from "../../../store/2DNotesSlice";

export const TwoDPlots = () => {
  const twoDPlots = useStore((state) => state.twoDPlots);
  const selectedTwoDPlot = useStore((state) => state.selectedTwoDPlot);
  const addTwoDPlot = useStore((state) => state.addTwoDPlot);
  const selectTwoDPlot = useStore((state) => state.selectTwoDPlot);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleClick = (_: React.MouseEvent, note: TwoDNote) => {
    if (selectedTwoDPlot?.id === note.id) {
      selectTwoDPlot(null);
    } else {
      selectTwoDPlot(note);
    }
  };

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <TwoDPlotsHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleHelpClick={() => {}}
        />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <Box p={"lg"}>
          <Button fullWidth onClick={addTwoDPlot}>
            Add 2D Charts
          </Button>
        </Box>
        <Box>
          {twoDPlots.map((note) => (
            <MenuListItem
              key={note.id}
              label={note.title}
              isActive={selectedTwoDPlot?.id === note.id}
              onClick={(e) => handleClick(e, note)}
            />
          ))}
        </Box>
      </LeftSidebarLayout.Content>
      {selectedTwoDPlot?.id && (
        <LeftSidebarLayout.Footer>
          <TwoDPlotsFooter />
        </LeftSidebarLayout.Footer>
      )}
    </LeftSidebarLayout>
  );
};
