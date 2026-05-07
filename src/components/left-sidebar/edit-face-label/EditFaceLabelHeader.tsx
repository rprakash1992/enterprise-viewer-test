import { LeftSidebarHeader } from "../../common/left-sidebar-header/LeftSidebarHeader";

interface EditTwoDNotesHeaderProps {
  labelTitle: string;
}

export const EditFaceLabelHeader = ({
  labelTitle,
}: EditTwoDNotesHeaderProps) => {
  return <LeftSidebarHeader headerLabel={labelTitle} />;
};
