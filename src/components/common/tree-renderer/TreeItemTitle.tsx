import { Flex, Text } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useColors } from "../../../hooks/useColors";
import { useHover } from "@mantine/hooks";

interface TitleProps {
  text: string;
  expanded: boolean;
  hasItems: boolean;
  isActive: boolean;
  selectItem: (e: React.MouseEvent) => void;
  toggleExpand?: () => void;
}

export const TreeItemTitle = ({
  text,
  expanded,
  hasItems,
  // isActive,
  selectItem,
  toggleExpand,
}: TitleProps) => {
  const { ref, hovered } = useHover();
  const { textColor } = useColors();

  return (
    <Flex ref={ref} direction="row" align="center" w="100%" h="32px">
      {hasItems && (
        <IconChevronDown
          onClick={toggleExpand}
          style={{ transform: expanded ? "rotate(0deg)" : "rotate(180deg)" }}
          color={hovered ? textColor : "var(--mantine-color-dimmed)"}
        />
      )}
      <Text
        onClick={hasItems ? toggleExpand : selectItem}
        c={hovered ? textColor : "dimmed"}
        flex={1}
      >
        {text}
      </Text>
    </Flex>
  );
};
