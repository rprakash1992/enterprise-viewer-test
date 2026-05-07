import { Box, Text, Slider } from "@mantine/core";

export const AnimationSpeed = ({
  animationSpeed,
  setAnimationSpeed,
}: {
  animationSpeed: number;
  setAnimationSpeed: (val: number) => void;
}) => {
  return (
    <Box mb="lg">
      <Text size="14px" fw={500}>
        Animation Speed:
      </Text>
      <Slider value={animationSpeed} onChange={setAnimationSpeed} />
    </Box>
  );
};
