import { useState } from "react";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { useStore } from "../../../store";
import { TwoDNotesHeader } from "./2DNotesHeader";
import { TwoDNotesFooter } from "./2DNotesFooter";
import type { TwoDNote } from "../../../store/2DNotesSlice";
import { TwoDNoteContent } from "./2DNoteContent";

export const TwoDNotes = () => {
  const twoDNotes = useStore((state) => state.twoDNotes);
  const selectedTwoDNote = useStore((state) => state.selectedTwoDNote);
  const addTwoDNote = useStore((state) => state.addTwoDNote);
  const selectTwoDNote = useStore((state) => state.selectTwoDNote);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [editing2DNote, setEditing2DNote] = useState<TwoDNote | null>(null);

  const handleCheck = (
    _: React.ChangeEvent<HTMLInputElement>,
    note: TwoDNote
  ) => {
    if (selectedTwoDNote?.id === note.id) {
      selectTwoDNote(null);
    } else {
      selectTwoDNote(note);
    }
  };

  const handleSave = () => {
    setEditing2DNote(null);
  };

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <TwoDNotesHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleHelpClick={() => {}}
        />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <TwoDNoteContent
          editing2DNote={editing2DNote}
          twoDNotes={twoDNotes}
          selectedTwoDNote={selectedTwoDNote}
          addTwoDNote={addTwoDNote}
          setEditing2DNote={setEditing2DNote}
          handleCheck={handleCheck}
        />
      </LeftSidebarLayout.Content>
      <LeftSidebarLayout.Footer>
        <TwoDNotesFooter
          editing2DNote={editing2DNote}
          selectedTwoDNote={selectedTwoDNote}
          handleSave={handleSave}
        />
      </LeftSidebarLayout.Footer>
    </LeftSidebarLayout>
  );
};
