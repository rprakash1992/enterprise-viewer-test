import { LeftSidebarHeader } from "../../common/left-sidebar-header/LeftSidebarHeader";

interface EditAnimationHeaderProps {
  animationTitle: string;
}

export const EditAnimationHeader = ({
  animationTitle,
}: EditAnimationHeaderProps) => {
  return <LeftSidebarHeader headerLabel={animationTitle} />;
};
