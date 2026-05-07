import { LeftSidebarHeader } from "../../common/left-sidebar-header/LeftSidebarHeader";

interface EditPointLabelHeaderProps {
  labelTitle: string;
}

export const EditPointLabelHeader = ({
  labelTitle,
}: EditPointLabelHeaderProps) => {
  return <LeftSidebarHeader headerLabel={labelTitle} />;
};
