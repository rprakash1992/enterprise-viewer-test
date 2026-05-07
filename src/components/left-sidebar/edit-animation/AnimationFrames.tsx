import { Box, TextInput } from "@mantine/core";

export const AnimationFrames = ({
  animationFrames,
  setAnimationFrames,
}: {
  animationFrames: number;
  setAnimationFrames: (val: number) => void;
}) => {
  return (
    <Box mb="lg">
      <TextInput
        label="Frames"
        type="number"
        value={animationFrames}
        onChange={(e) => setAnimationFrames(Number(e.target.value))}
      />
    </Box>
  );
};
