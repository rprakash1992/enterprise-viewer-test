import { Flex, Switch, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { useColors } from "../../../hooks/useColors";

interface MenuListItemProps {
  leftIcon?: any;
  rightIcon?: any;
  label: string;
  height?: number;
  isActive?: boolean;
  isDisabled?: boolean;
  withSwitch?: boolean;
  switchChecked?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  onSwitchChange?: (val: boolean) => void;
}

export const MenuListItem = ({
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  label,
  height,
  isActive,
  isDisabled,
  withSwitch,
  switchChecked,
  onClick,
  onSwitchChange,
}: MenuListItemProps) => {
  const { ref, hovered } = useHover();
  const {
    textColor,
    hoverBgColor,
    activeBgColor,
    activeIconColor,
    activeTextColor,
  } = useColors();

  return (
    <Flex
      onClick={isDisabled ? () => {} : onClick}
      ref={ref}
      direction={"row"}
      align={"center"}
      justify={"space-between"}
      h={height ?? 40}
      px={"lg"}
      style={{
        cursor: isDisabled ? "no-drop" : "pointer",
        opacity: isDisabled ? 0.5 : 1,
        backgroundColor: isActive
          ? activeBgColor
          : hovered
            ? hoverBgColor
            : undefined,
      }}
    >
      <Flex direction={"row"} align={"center"}>
        {LeftIcon && (
          <LeftIcon
            color={
              isActive
                ? activeIconColor
                : hovered
                  ? textColor
                  : "var(--mantine-color-dimmed)"
            }
          />
        )}
        <Text
          ml={LeftIcon ? "xs" : 0}
          size="14px"
          ta={"center"}
          c={isActive ? activeTextColor : hovered ? textColor : "dimmed"}
        >
          {label}
        </Text>
      </Flex>
      {RightIcon && (
        <RightIcon
          color={
            isActive
              ? activeIconColor
              : hovered
                ? textColor
                : "var(--mantine-color-dimmed)"
          }
        />
      )}
      {withSwitch && onSwitchChange && (
        <Switch
          checked={switchChecked}
          onChange={(event) => onSwitchChange(event.currentTarget.checked)}
        />
      )}
    </Flex>
  );
};
