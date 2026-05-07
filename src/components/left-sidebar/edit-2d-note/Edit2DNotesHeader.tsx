import { LeftSidebarHeader } from "../../common/left-sidebar-header/LeftSidebarHeader";

interface EditTwoDNotesHeaderProps {
  noteTitle: string;
}

export const EditTwoDNotesHeader = ({
  noteTitle,
}: EditTwoDNotesHeaderProps) => {
  return (
    <LeftSidebarHeader headerLabel={noteTitle} />
    // <Box py="xs" px="lg">
    //   <Text>{noteTitle}</Text>
    // </Box>
  );
};
