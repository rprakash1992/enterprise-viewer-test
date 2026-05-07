import { useState } from "react";
import { useNavigate } from "react-router";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { useStore } from "../../../store";
import { TransientContent } from "./TransientContent";
import { TransientHeader } from "./TransientHeader";
import { TransientFooter } from "./TransientFooter";

export const Transient = () => {
  const navigate = useNavigate();
  const animations = useStore((state) => state.animations);
  const selectAnimation = useStore((state) => state.selectAnimation);
  const deleteAnimation = useStore((state) => state.deleteAnimation);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const transientAnimations = animations.filter(
    (animation) => animation.animationType === "transient",
  );
  const checkedTransientAnimations = transientAnimations.filter(
    (animation) => animation.checked,
  );

  const onAddClick = () => {
    navigate("/edit_animation/new?from=transient");
  };

  const handlePlay = () => {};
  const handlePause = () => {};
  const handleEdit = () => {};

  const handleDelete = () => {
    if (checkedTransientAnimations.length <= 0) return;
    deleteAnimation();
  };

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <TransientHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleHelpClick={() => {}}
        />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <TransientContent
          value="transient"
          animations={transientAnimations}
          onAddClick={onAddClick}
          handleCheck={(_, animationId) => selectAnimation(animationId)}
        />
      </LeftSidebarLayout.Content>
      {checkedTransientAnimations.length > 0 && (
        <LeftSidebarLayout.Footer>
          <TransientFooter
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
