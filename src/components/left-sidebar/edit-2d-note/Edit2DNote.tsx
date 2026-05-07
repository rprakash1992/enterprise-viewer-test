import { useState } from "react";
import { useNavigate } from "react-router";
import { Box, useMantineColorScheme } from "@mantine/core";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { useStore } from "../../../store";
import { getRandomId } from "../../../utils/getRandomId";
import { EditTwoDNoteContent } from "./Edit2DNoteContent";
import { EditTwoDNotesFooter } from "./Edit2DNotesFooter";
import { EditTwoDNotesHeader } from "./Edit2DNotesHeader";
import type { Label, TwoDNote } from "../../../store/LabelSlice";

export const EditTwoDNote = ({
  id,
  from,
}: {
  id: string | undefined;
  from: string | null;
}) => {
  const navigate = useNavigate();
  const { colorScheme } = useMantineColorScheme();
  const labels = useStore((state) => state.labels);
  const twoDNotes = labels.filter((label) => label.labelType === "twoDNote");
  const addLabel = useStore((state) => state.addLabel);
  const updateLabel = useStore((state) => state.updateLabel);
  const [newTwoDNote, setNewTwoDNote] = useState<Label | null>(() => {
    if (!id) return null;

    if (id === "new") {
      const newNoteId = getRandomId();
      const newNoteIndex = String(twoDNotes.length + 1);
      const bgColor = colorScheme === "dark" ? "#000" : "#fff";
      const borderColor = colorScheme === "dark" ? "#fff" : "#000";
      return {
        id: `note-${newNoteId}`,
        title: `Note ${newNoteIndex}`,
        bgColor,
        borderColor,
        bgImage: "",
        showBorder: true,
        showBg: true,
        autoFit: true,
        visibility: true,
        checked: false,
        labelType: "twoDNote",
      };
    }

    return twoDNotes.find((label) => label.id === id)!;
  });

  const updateNewTwoDNote = (
    fieldName: string,
    fieldValue: string | boolean,
  ) => {
    if (!newTwoDNote) return;

    setNewTwoDNote({
      ...newTwoDNote,
      [fieldName]: fieldValue,
    });
  };

  const handleSave = () => {
    if (!newTwoDNote) return;

    if (id === "new") {
      addLabel(newTwoDNote);
    } else {
      updateLabel(newTwoDNote);
    }
    const navigateTo = from ?? "2d_notes";
    navigate(`/${navigateTo}`);
    // navigate("/2d_notes");
  };

  const handleCancel = () => {
    const navigateTo = from ?? "2d_notes";
    navigate(`/${navigateTo}`);
    // navigate("/2d_notes");
  };

  return !newTwoDNote ? (
    <Box>Invalid Note Id</Box>
  ) : (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <EditTwoDNotesHeader noteTitle={newTwoDNote?.title} />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <EditTwoDNoteContent
          newTwoDNote={newTwoDNote as TwoDNote}
          updateNewTwoDNote={updateNewTwoDNote}
        />
      </LeftSidebarLayout.Content>
      <LeftSidebarLayout.Footer>
        <EditTwoDNotesFooter
          handleSave={handleSave}
          handleCancel={handleCancel}
        />
      </LeftSidebarLayout.Footer>
    </LeftSidebarLayout>
  );
};
