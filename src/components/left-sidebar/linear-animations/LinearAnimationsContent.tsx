import { useNavigate } from "react-router";
import { IconPencil } from "@tabler/icons-react";
import { Box, Button, Flex } from "@mantine/core";
import type { Animation, AnimationType } from "../../../store/AnimationsSlice";
import { CheckboxListItem } from "../../common/checkbox-list-item/CheckboxListItem";
import { CustomActionIcon } from "../../common/custom-action-icon/CustomActionIcon";

interface LinearAnimationsContentProps {
  value: AnimationType | null;
  animations: Animation[];
  onAddClick: () => void;
  handleCheck: (e: React.ChangeEvent<HTMLInputElement>, plotId: string) => void;
}

export const LinearAnimationsContent = ({
  value,
  animations,
  onAddClick,
  handleCheck,
}: LinearAnimationsContentProps) => {
  const navigate = useNavigate();

  const getHoveredIcons = (animation: Animation) => {
    return (
      <Flex direction="row" align="center" gap="3px">
        <CustomActionIcon
          size="sm"
          icon={<IconPencil stroke={1} />}
          onClick={() =>
            navigate(`/edit_animation/${animation?.id}?from=linear_animations`)
          }
          withTooltip
          tooltipLabel="Edit"
        />
      </Flex>
    );
  };

  return (
    <Box>
      <Button fullWidth onClick={!value ? () => {} : onAddClick} mb="lg">
        Add Linear Animation
      </Button>
      <Box>
        {animations.map((animation) => (
          <CheckboxListItem
            key={animation.id}
            label={animation.title}
            checked={animation.checked}
            setChecked={(e) => handleCheck(e, animation.id)}
            hoveredIcons={getHoveredIcons(animation)}
          />
        ))}
      </Box>
    </Box>
  );
};
