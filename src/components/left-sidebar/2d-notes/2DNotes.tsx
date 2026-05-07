import { useState } from "react";
import { useNavigate } from "react-router";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { useStore } from "../../../store";
import { TwoDNotesHeader } from "./2DNotesHeader";
import { TwoDNotesFooter } from "./2DNotesFooter";
import { TwoDNoteContent } from "./2DNoteContent";
import type { TwoDNote } from "../../../store/LabelSlice";
// import IconNotes from "../../../assets/icons/IconNotes";

export const TwoDNotes = () => {
  const navigate = useNavigate();
  const labels = useStore((state) => state.labels);
  const selectAllLabels = useStore((state) => state.selectAllLabels);
  const selectLabel = useStore((state) => state.selectLabel);
  const deleteLabel = useStore((state) => state.deleteLabel);
  // const insertTabItem = useStore((state) => state.insertTabItem);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [recentSearchItems] = useState<string[]>([]);

  const twoDNotes = labels.filter((label) => label.labelType === "twoDNote");
  const checkedNotes = twoDNotes.filter((note) => note.checked);

  const handleAddTwoDNote = () => {
    // const newTabItem = {
    //   id: "edit_labels",
    //   label: "Edit Labels",
    //   icon: IconNotes,
    //   type: "temporary" as "temporary",
    // };
    // insertTabItem(newTabItem);
    navigate("/edit_labels/2d_note/new");
  };

  const handleShow = () => {};

  const handleHide = () => {};

  const handleInvert = () => {};

  const handleDelete = () => {
    if (checkedNotes.length <= 0) return;
    deleteLabel("twoDNote");
  };

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <TwoDNotesHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          recentSearchItems={recentSearchItems}
          handleHelpClick={() => {}}
        />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <TwoDNoteContent
          twoDNotes={twoDNotes as TwoDNote[]}
          allChecked={checkedNotes.length === twoDNotes.length}
          selectAll={() => selectAllLabels("twoDNote")}
          addTwoDNote={handleAddTwoDNote}
          handleCheck={(_, noteId) => selectLabel(noteId)}
        />
      </LeftSidebarLayout.Content>
      {checkedNotes.length > 0 && (
        <LeftSidebarLayout.Footer>
          <TwoDNotesFooter
            handleShow={handleShow}
            handleHide={handleHide}
            handleInvert={handleInvert}
            handleDelete={handleDelete}
          />
        </LeftSidebarLayout.Footer>
      )}
    </LeftSidebarLayout>
  );
};
