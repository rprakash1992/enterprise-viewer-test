import { Box, Button, Flex, Select, type ComboboxData } from "@mantine/core";
import type { Animation, AnimationType } from "../../../store/AnimationsSlice";
import { CheckboxListItem } from "../../common/checkbox-list-item/CheckboxListItem";
import { CustomActionIcon } from "../../common/custom-action-icon/CustomActionIcon";
import { IconPencil } from "@tabler/icons-react";
import { useNavigate } from "react-router";

interface AnimationsContentProps {
  data: ComboboxData;
  value: AnimationType | null;
  animations: Animation[];
  // selectedAnimations: Animation[];
  setValue: (val: AnimationType | null) => void;
  onAddClick: () => void;
  // selectAnimation: (animamation: Animation) => void;
  handleCheck: (e: React.ChangeEvent<HTMLInputElement>, plotId: string) => void;
}

export const AnimationsContent = ({
  data,
  value,
  animations,
  // selectedAnimations,
  setValue,
  onAddClick,
  // selectAnimation,
  handleCheck,
}: AnimationsContentProps) => {
  const navigate = useNavigate();

  const getHoveredIcons = (animation: Animation) => {
    return (
      <Flex direction="row" align="center" gap="3px">
        <CustomActionIcon
          size="sm"
          icon={<IconPencil stroke={1} />}
          onClick={() =>
            navigate(`/edit_animation/${animation?.id}?from=animations`)
          }
          withTooltip
          tooltipLabel="Edit"
        />
      </Flex>
    );
  };

  return (
    <Box>
      <Flex align="center" mb="lg">
        <Select
          checkIconPosition="right"
          placeholder="Select animation"
          data={data}
          value={value}
          onChange={(val) => setValue(val as AnimationType | null)}
          flex={1}
          styles={{
            input: {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            },
          }}
        />
        <Button
          h={36}
          w={65}
          style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
          disabled={!value}
          onClick={!value ? () => {} : onAddClick}
        >
          Add
        </Button>
        {/* <ActionIcon
            h={36}
            w={36}
            style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            disabled={!value}
          >
            <IconArrowNarrowRight />
          </ActionIcon> */}
      </Flex>
      <Box>
        {animations.map((animation) => {
          const prefix =
            animation.animationType === "linear"
              ? "Linear"
              : animation.animationType === "vector"
                ? "Vector"
                : "Transient";
          return (
            <CheckboxListItem
              key={animation.id}
              label={`${prefix} - ${animation.title}`}
              checked={animation.checked}
              setChecked={(e) => handleCheck(e, animation.id)}
              hoveredIcons={getHoveredIcons(animation)}
            />
          );
        })}
      </Box>
    </Box>
  );
};
