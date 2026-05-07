import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router";
import { Box } from "@mantine/core";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { EditAnimationContent } from "./EditAnimationContent";
import { useStore } from "../../../store";
import type { Animation, AnimationType } from "../../../store/AnimationsSlice";
import { getRandomId } from "../../../utils/getRandomId";
import { EditAnimationHeader } from "./EditAnimationHeader";
import { EditAnimationFooter } from "./EditAnimationFooter";

const getAnimationType = (from: string) => {
  switch (from) {
    case "eigen_vector_animations":
      return "vector";
    case "linear_animations":
      return "linear";
    case "transient":
      return "transient";
    default:
      "linear";
  }
};

export const EditAnimation = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const from = searchParams.get("from");

  const animations = useStore((state) => state.animations);
  const animationType = useStore((state) => state.animationType);
  const addAnimation = useStore((state) => state.addAnimation);
  const updateAnimation = useStore((state) => state.updateAnimation);
  const [newAnimation, setNewAnimation] = useState<Animation | null>(() => {
    if (!id || !animationType) return null;

    if (id === "new") {
      const newAnimationId = getRandomId();
      const newAnimationIndex = String(animations.length + 1);

      const aniType = from ? getAnimationType(from) : animationType;

      return {
        id: newAnimationId,
        animationType: aniType as AnimationType,
        title: `Animation ${newAnimationIndex}`,
        speed: 55,
        frames: 16,
        scaleFactor: 1,
        checked: false,
      };
    }

    return animations.find((note) => note.id === id)!;
  });

  const updateNewAnimation = (
    fieldName: string,
    fieldValue: string | number | boolean,
  ) => {
    if (!newAnimation) return;

    setNewAnimation({
      ...newAnimation,
      [fieldName]: fieldValue,
    });
  };

  const handleSave = () => {
    if (!newAnimation) return;

    if (id === "new") {
      addAnimation(newAnimation);
    } else {
      updateAnimation(newAnimation);
    }
    navigate(`/${from}`);
    // navigate("/animations");
  };

  const handleCancel = () => {
    navigate(`/${from}`);
    // navigate("/animations");
  };

  return !newAnimation ? (
    <Box>Invalid Animation Id</Box>
  ) : (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <EditAnimationHeader animationTitle={newAnimation.title} />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <EditAnimationContent
          newAnimation={newAnimation}
          updateNewAnimation={updateNewAnimation}
        />
      </LeftSidebarLayout.Content>
      <LeftSidebarLayout.Footer>
        <EditAnimationFooter
          handleSave={handleSave}
          handleCancel={handleCancel}
        />
      </LeftSidebarLayout.Footer>
    </LeftSidebarLayout>
  );
};
