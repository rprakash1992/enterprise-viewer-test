import { Box, Button, Flex } from "@mantine/core";
import { CheckboxListItem } from "../../common/checkbox-list-item/CheckboxListItem";
import { Edit2DNote } from "./Edit2DNote";
import type { TwoDNote } from "../../../store/2DNotesSlice";
import { CustomThemeIcon } from "../../common/custom-theme-icon/CustomThemeIcon";
import IconPopOut from "../../../assets/icons/IconPopout";
import { IconEye, IconPencil } from "@tabler/icons-react";

export const TwoDNoteContent = ({
  editing2DNote,
  twoDNotes,
  selectedTwoDNote,
  addTwoDNote,
  setEditing2DNote,
  handleCheck,
}: {
  editing2DNote: TwoDNote | null;
  twoDNotes: TwoDNote[];
  selectedTwoDNote: TwoDNote | null;
  addTwoDNote: () => void;
  setEditing2DNote: (val: TwoDNote | null) => void;
  handleCheck: (e: React.ChangeEvent<HTMLInputElement>, val: TwoDNote) => void;
}) => {
  const getHoveredIcons = (note: TwoDNote) => {
    return (
      <Flex direction="row" align="center" gap="3px">
        <CustomThemeIcon
          size="sm"
          icon={<IconPopOut width="13px" height="13px" />}
        />
        <CustomThemeIcon
          size="sm"
          icon={<IconPencil stroke={1} />}
          onClick={() => setEditing2DNote(note)}
        />
        <CustomThemeIcon size="sm" icon={<IconEye stroke={1} />} />
      </Flex>
    );
  };

  return !editing2DNote?.id ? (
    <Box>
      <Box p={"lg"}>
        <Button fullWidth onClick={addTwoDNote}>
          Add 2D Note
        </Button>
      </Box>
      <Box>
        {twoDNotes.map((note) => (
          <CheckboxListItem
            key={note.id}
            label={note.title}
            checked={selectedTwoDNote?.id === note.id}
            setChecked={(e) => handleCheck(e, note)}
            hoveredIcons={getHoveredIcons(note)}
          />
        ))}
      </Box>
    </Box>
  ) : (
    <Edit2DNote editing2DNote={editing2DNote} />
  );
};
