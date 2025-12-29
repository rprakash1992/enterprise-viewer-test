import { Flex, Text } from "@mantine/core";

export const LeftSidebarFooterIconItem = ({
  icon: Icon,
  label,
  isDisabled,
  onClick,
}: {
  icon: any;
  label: string;
  isDisabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}) => (
  <Flex
    direction={"column"}
    justify={"center"}
    align={"center"}
    style={{ cursor: isDisabled ? "no-drop" : "pointer" }}
    onClick={isDisabled ? () => {} : onClick}
  >
    <Icon
      // color={hovered ? "var(--text-color)" : "var(--mantine-color-dimmed)"}
      color={"var(--mantine-color-dimmed)"}
    />
    <Text c={"dimmed"} size="11px">
      {label}
    </Text>
  </Flex>
);
