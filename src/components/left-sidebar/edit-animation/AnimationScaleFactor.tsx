import { Box, TextInput } from "@mantine/core";

export const AnimationScaleFactor = ({
  animationScaleFactor,
  setAnimationScaleFactor,
}: {
  animationScaleFactor: number;
  setAnimationScaleFactor: (val: number) => void;
}) => {
  return (
    <Box mb="lg">
      <TextInput
        label="Scale Factor"
        type="number"
        value={animationScaleFactor}
        onChange={(e) => setAnimationScaleFactor(Number(e.target.value))}
      />
    </Box>
  );
};
