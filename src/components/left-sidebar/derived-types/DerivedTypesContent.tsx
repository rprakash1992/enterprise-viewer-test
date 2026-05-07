import { Accordion, Box, Flex, List, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { useColors } from "../../../hooks/useColors";
import type { DerivedTypeItem } from "../../../store/DerivedTypesSlice";

interface DerivedTypesContentProps {
  derivedTypes: DerivedTypeItem[];
  appliedDerivedType: DerivedTypeItem;
  handleClick: (val: DerivedTypeItem) => void;
}

const ListItem = ({
  title,
  isActive,
  onClick,
}: {
  title: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  const { ref, hovered } = useHover();
  const { textColor, hoverBgColor, activeBgColor, activeTextColor } =
    useColors();

  return (
    <List.Item
      h={40}
      px="xs"
      ref={ref}
      onClick={onClick}
      style={{
        cursor: "pointer",
        backgroundColor: isActive
          ? activeBgColor
          : hovered
            ? hoverBgColor
            : undefined,
      }}
      styles={{
        itemWrapper: {
          height: 40,
        },
        itemLabel: {
          height: 40,
        },
      }}
    >
      <Flex h={"100%"} align="center">
        <Text
          size="14px"
          c={isActive ? activeTextColor : hovered ? textColor : "dimmed"}
        >
          {title}
        </Text>
      </Flex>
    </List.Item>
  );
};

export const DerivedTypesContent = ({
  derivedTypes,
  appliedDerivedType,
  handleClick,
}: DerivedTypesContentProps) => {
  return (
    <Box>
      <Accordion
        defaultValue={derivedTypes[0].id}
        variant="unstyled"
        styles={{
          label: {
            padding: "10px 0",
          },
        }}
      >
        {derivedTypes.map((item) => (
          <Accordion.Item key={item.id} value={item.id}>
            <Accordion.Control
              px={0}
              styles={{ label: { color: "var(--mantine-color-dimmed)" } }}
            >
              {item.title}
            </Accordion.Control>
            <Accordion.Panel>
              <List listStyleType="none">
                {item.items?.map((i) => (
                  <ListItem
                    title={i.title}
                    isActive={appliedDerivedType.id === i.id}
                    onClick={() => handleClick(i)}
                  />
                ))}
              </List>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Box>
  );
};
