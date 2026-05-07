import { LeftSidebarHeader } from "../../common/left-sidebar-header/LeftSidebarHeader";

interface EditPointToPointHeaderProps {
  labelTitle: string;
}

export const EditPointToPointHeader = ({
  labelTitle,
}: EditPointToPointHeaderProps) => {
  return <LeftSidebarHeader headerLabel={labelTitle} />;
};
