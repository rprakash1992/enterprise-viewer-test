import {
  Flex,
  Tooltip,
  // Text
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { NAV_TAB_HEIGHT, NAV_TAB_WIDTH } from "../../constants";
import { useColors } from "../../hooks/useColors";

interface NavTabItemProps {
  icon: any;
  label: string;
  onClick: () => void;
}

export const OneNavTabItem = ({
  icon: Icon,
  label,
  onClick,
}: NavTabItemProps) => {
  const { ref, hovered } = useHover();
  const { textColor } = useColors();

  return (
    <Tooltip label={label} position="right" withArrow>
      <Flex
        ref={ref}
        direction="column"
        justify="center"
        align="center"
        w={NAV_TAB_WIDTH}
        h={NAV_TAB_HEIGHT}
        p={"xs"}
        style={{ cursor: "pointer" }}
        onClick={onClick}
      >
        {<Icon color={hovered ? textColor : "var(--mantine-color-dimmed)"} />}
        {/* <Text
        size="10px"
        mt="5px"
        ta={"center"}
        c={hovered ? "var(--text-color)" : "dimmed"}
      >
        {label}
      </Text> */}
      </Flex>
    </Tooltip>
  );
};
