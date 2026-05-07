import { Box } from "@mantine/core";
import { AnimationControls } from "./AnimationControls";
import { AnimationSpeed } from "./AnimationSpeed";
import { AnimationFrames } from "./AnimationFrames";
import { AnimationScaleFactor } from "./AnimationScaleFactor";
import type { Animation } from "../../../store/AnimationsSlice";

export const EditAnimationContent = ({
  newAnimation,
  updateNewAnimation,
}: {
  newAnimation: Animation;
  updateNewAnimation: (
    fieldName: string,
    fieldValue: string | number | boolean,
  ) => void;
}) => {
  return (
    <Box>
      <AnimationControls />
      <AnimationSpeed
        animationSpeed={newAnimation.speed}
        setAnimationSpeed={(val: number) => updateNewAnimation("speed", val)}
      />
      <AnimationFrames
        animationFrames={newAnimation.frames}
        setAnimationFrames={(val: number) => updateNewAnimation("frames", val)}
      />
      <AnimationScaleFactor
        animationScaleFactor={newAnimation.scaleFactor}
        setAnimationScaleFactor={(val: number) =>
          updateNewAnimation("scaleFactor", val)
        }
      />
    </Box>
  );
};
