import { Checkbox, Flex, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import type { JSX } from "react";

interface CheckboxListItemProps {
  height?: number;
  isDisabled?: boolean;
  label: string;
  icon?: any;
  checked: boolean;
  hoveredIcons: JSX.Element;
  setChecked: (e: React.ChangeEvent<HTMLInputElement>, val: boolean) => void;
}

export const CheckboxListItem = ({
  height,
  isDisabled,
  label,
  icon: Icon,
  checked,
  hoveredIcons,
  setChecked,
}: CheckboxListItemProps) => {
  const { ref, hovered } = useHover();

  return (
    <Flex ref={ref} direction="row" align="center" px="lg" h={height ?? 40}>
      <Checkbox
        disabled={isDisabled}
        checked={checked}
        onChange={(e) => setChecked(e, e.target.checked)}
      />
      <Flex flex={1} direction="row" align="center" justify="space-between">
        <Flex direction="row" align="center" ml="lg">
          {Icon && <Icon color="var(--mantine-color-dimmed)" />}
          <Text size="14px" ml={Icon ? "xs" : 0} c="dimmed">
            {label}
          </Text>
        </Flex>
        {hovered && hoveredIcons}
      </Flex>
    </Flex>
  );
};
