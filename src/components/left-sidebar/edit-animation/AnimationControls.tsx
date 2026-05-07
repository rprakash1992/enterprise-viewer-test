import { Box, Flex, Text } from "@mantine/core";
import {
  IconPlayerPlay,
  IconPlayerStop,
  IconPlayerTrackNext,
  IconPlayerTrackPrev,
} from "@tabler/icons-react";
import { CustomActionIcon } from "../../common/custom-action-icon/CustomActionIcon";

export const AnimationControls = () => {
  return (
    <Box mb="lg">
      <Text size="14px" fw={500} mb="xs">
        Animation Controls:
      </Text>
      <Flex direction="row" align="center" justify="space-around">
        <CustomActionIcon icon={<IconPlayerTrackPrev />} size="sm" />
        <CustomActionIcon icon={<IconPlayerPlay />} size="sm" />
        <CustomActionIcon icon={<IconPlayerStop />} size="sm" />
        <CustomActionIcon icon={<IconPlayerTrackNext />} size="sm" />
      </Flex>
    </Box>
  );
};
