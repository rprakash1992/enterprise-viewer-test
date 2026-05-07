import { useNavigate } from "react-router";
import { Box, Button, Flex } from "@mantine/core";
import { IconEye, IconPencil } from "@tabler/icons-react";
import { CheckboxListItem } from "../../common/checkbox-list-item/CheckboxListItem";
// import type { TwoDNote } from "../../../store/2DNotesSlice";
import { CustomActionIcon } from "../../common/custom-action-icon/CustomActionIcon";
import IconPopOut from "../../../assets/icons/IconPopout";
import type { TwoDNote } from "../../../store/LabelSlice";

export const TwoDNoteContent = ({
  twoDNotes,
  allChecked,
  selectAll,
  addTwoDNote,
  handleCheck,
}: {
  twoDNotes: TwoDNote[];
  allChecked: boolean;
  selectAll: () => void;
  addTwoDNote: () => void;
  handleCheck: (e: React.ChangeEvent<HTMLInputElement>, noteId: string) => void;
}) => {
  const navigate = useNavigate();

  const getHoveredIcons = (note: TwoDNote) => {
    return (
      <Flex direction="row" align="center" gap="3px">
        <CustomActionIcon
          size="sm"
          icon={<IconPopOut width="13px" height="13px" />}
          withTooltip
          tooltipLabel="Popout"
        />
        <CustomActionIcon
          size="sm"
          icon={<IconPencil stroke={1} />}
          onClick={() => navigate(`/edit_labels/2d_note/${note?.id}`)}
          withTooltip
          tooltipLabel="Edit"
        />
        <CustomActionIcon
          size="sm"
          icon={<IconEye stroke={1} />}
          withTooltip
          tooltipLabel={note.visibility ? "Hide" : "Show"}
          onClick={() => {}}
        />
      </Flex>
    );
  };

  return (
    <Box>
      <Button fullWidth onClick={addTwoDNote} mb="lg">
        Add 2D Note
      </Button>
      <Box>
        {twoDNotes.length > 0 && (
          <CheckboxListItem
            label="Select All"
            checked={allChecked}
            setChecked={selectAll}
          />
        )}
        {twoDNotes.map((note) => (
          <CheckboxListItem
            key={note.id}
            label={note.title}
            checked={note.checked}
            setChecked={(e) => handleCheck(e, note.id)}
            hoveredIcons={getHoveredIcons(note)}
          />
        ))}
      </Box>
    </Box>
  );
};
