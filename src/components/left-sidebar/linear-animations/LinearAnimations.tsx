import { useState } from "react";
import { useNavigate } from "react-router";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { useStore } from "../../../store";
import { LinearAnimationsContent } from "./LinearAnimationsContent";
import { LinearAnimationsHeader } from "./LinearAnimationsHeader";
import { LinearAnimationsFooter } from "./LinearAnimationsFooter";

export const LinearAnimations = () => {
  const navigate = useNavigate();
  const animations = useStore((state) => state.animations);
  const selectAnimation = useStore((state) => state.selectAnimation);
  const deleteAnimation = useStore((state) => state.deleteAnimation);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const linearAnimations = animations.filter(
    (animation) => animation.animationType === "linear",
  );
  const checkedLinearAnimations = linearAnimations.filter(
    (animation) => animation.checked,
  );

  const onAddClick = () => {
    navigate("/edit_animation/new?from=linear_animations");
  };

  const handlePlay = () => {};

  const handlePause = () => {};

  const handleEdit = () => {};

  const handleDelete = () => {
    if (checkedLinearAnimations.length <= 0) return;
    deleteAnimation();
  };

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <LinearAnimationsHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleHelpClick={() => {}}
        />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <LinearAnimationsContent
          value="linear"
          animations={linearAnimations}
          onAddClick={onAddClick}
          handleCheck={(_, plotId) => selectAnimation(plotId)}
        />
      </LeftSidebarLayout.Content>
      {checkedLinearAnimations.length > 0 && (
        <LeftSidebarLayout.Footer>
          <LinearAnimationsFooter
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
