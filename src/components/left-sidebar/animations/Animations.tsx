import { useNavigate } from "react-router";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { AnimationsHeader } from "./AnimationsHeader";
import { AnimationsFooter } from "./AnimationsFooter";
import { AnimationsContent } from "./AnimationsContent";
import { useStore } from "../../../store";

const data = [
  { label: "Linear", value: "linear" },
  { label: "Eigen Vector", value: "eigen_vector" },
];

export const Animations = () => {
  const navigate = useNavigate();
  const animations = useStore((state) => state.animations);
  const animationType = useStore((state) => state.animationType);
  const selectAnimation = useStore((state) => state.selectAnimation);
  const setAnimationType = useStore((state) => state.setAnimationType);
  const deleteAnimation = useStore((state) => state.deleteAnimation);

  const checkedAnimations = animations.filter((animation) => animation.checked);

  const onAddClick = () => {
    navigate(`/edit_animation/new?from=animations`);
  };

  const handlePlay = () => {};

  const handlePause = () => {};

  const handleEdit = () => {};

  const handleDelete = () => {
    if (checkedAnimations.length <= 0) return;
    deleteAnimation();
  };

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <AnimationsHeader />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <AnimationsContent
          data={data}
          value={animationType}
          animations={animations}
          setValue={setAnimationType}
          onAddClick={onAddClick}
          handleCheck={(_, animationId) => selectAnimation(animationId)}
        />
      </LeftSidebarLayout.Content>
      {checkedAnimations.length > 0 && (
        <LeftSidebarLayout.Footer>
          <AnimationsFooter
            handlePlay={handlePlay}
            handlePause={handlePause}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </LeftSidebarLayout.Footer>
      )}
    </LeftSidebarLayout>
  );
};
