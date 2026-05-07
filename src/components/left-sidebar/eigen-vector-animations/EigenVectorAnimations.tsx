import { useState } from "react";
import { useNavigate } from "react-router";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { useStore } from "../../../store";
import { EigenVectorAnimationsHeader } from "./EigenVectorAnimationHeader";
import { EigenVectorAnimationsContent } from "./EigenVectorAnimationsContent";
import { EigenVectorAnimationsFooter } from "./EigenVectorAnimationsFooter";

export const EigenVectorAnimations = () => {
  const navigate = useNavigate();
  const animations = useStore((state) => state.animations);
  const selectAnimation = useStore((state) => state.selectAnimation);
  const deleteAnimation = useStore((state) => state.deleteAnimation);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const linearAnimations = animations.filter(
    (animation) => animation.animationType === "vector",
  );
  const checkedLinearAnimations = linearAnimations.filter(
    (animation) => animation.checked,
  );

  const onAddClick = () => {
    navigate("/edit_animation/new?from=eigen_vector_animations");
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
        <EigenVectorAnimationsHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleHelpClick={() => {}}
        />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <EigenVectorAnimationsContent
          value="vector"
          animations={linearAnimations}
          onAddClick={onAddClick}
          handleCheck={(_, plotId) => selectAnimation(plotId)}
        />
      </LeftSidebarLayout.Content>
      {checkedLinearAnimations.length > 0 && (
        <LeftSidebarLayout.Footer>
          <EigenVectorAnimationsFooter
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
